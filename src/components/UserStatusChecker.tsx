'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { getAuthInfoFromBrowserCookie } from '@/lib/auth';

export function UserStatusChecker() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // 只在浏览器端执行
    if (typeof window !== 'undefined') {
      // 检查当前路径是否需要检查用户状态
      const shouldCheckStatus = !['/login', '/banned', '/warning'].includes(pathname);
      
      if (shouldCheckStatus) {
        // 获取用户认证信息
        const authInfo = getAuthInfoFromBrowserCookie();
        
        if (authInfo?.username) {
          // 发送请求到API检查用户状态
          fetch('/api/check-user-status')
            .then(response => response.json())
            .then(data => {
              if (data.banned) {
                // 用户被禁用，重定向到禁用页面
                router.push('/banned');
              }
            })
            .catch(error => {
              console.error('检查用户状态时出错:', error);
            });
        }
      }
    }
  }, [pathname, router]);

  return null;
}