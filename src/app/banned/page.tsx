import { Metadata } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export const metadata: Metadata = {
  title: '账户已被禁用 - MoonTV',
  description: '您的账户已被管理员禁用',
};

export default function BannedPage() {
  const router = useRouter();

  // 自动跳转到登录页面
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/login');
    }, 5000); // 5秒后自动跳转

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className='min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center p-4'>
      <div className='max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-4 sm:p-8 border border-red-200'>
        {/* 警告图标 */}
        <div className='flex justify-center mb-4 sm:mb-6'>
          <div className='w-16 h-16 sm:w-20 sm:h-20 bg-red-100 rounded-full flex items-center justify-center'>
            <svg
              className='w-10 h-10 sm:w-12 sm:h-12 text-red-600'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z'
              />
            </svg>
          </div>
        </div>

        {/* 标题 */}
        <div className='text-center mb-6 sm:mb-8'>
          <h1 className='text-2xl sm:text-3xl font-bold text-gray-900 mb-2'>
            账户已被禁用
          </h1>
          <div className='w-12 sm:w-16 h-1 bg-red-500 mx-auto rounded-full'></div>
        </div>

        {/* 警告内容 */}
        <div className='space-y-4 sm:space-y-6 text-gray-700'>
          <div className='bg-red-50 border-l-4 border-red-500 p-3 sm:p-4 rounded-r-lg'>
            <p className='text-base sm:text-lg font-semibold text-red-800 mb-2'>
              ⚠️ 账户状态异常
            </p>
            <p className='text-sm sm:text-base text-red-700'>
              您的账户已被管理员禁用，无法继续使用服务。
            </p>
          </div>

          <div className='space-y-3 sm:space-y-4'>
            <h2 className='text-lg sm:text-xl font-semibold text-gray-900'>
              可能的原因
            </h2>
            <ul className='space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-600'>
              <li className='flex items-start'>
                <span className='text-red-500 mr-2 mt-0.5'>•</span>
                <span>违反了站点使用规则</span>
              </li>
              <li className='flex items-start'>
                <span className='text-red-500 mr-2 mt-0.5'>•</span>
                <span>存在不当使用行为</span>
              </li>
              <li className='flex items-start'>
                <span className='text-red-500 mr-2 mt-0.5'>•</span>
                <span>管理员手动禁用了您的账户</span>
              </li>
            </ul>
          </div>

          <div className='bg-yellow-50 border border-yellow-200 rounded-lg p-3 sm:p-4'>
            <h3 className='text-base sm:text-lg font-semibold text-yellow-800 mb-2'>
              🔓 解决方案
            </h3>
            <p className='text-sm sm:text-base text-yellow-700'>
              如需恢复账户，请联系站点管理员。您将在5秒后自动跳转到登录页面。
            </p>
          </div>
        </div>

        {/* 操作按钮 */}
        <div className='mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 justify-center'>
          <Link
            href='/login'
            className='px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors text-center'
          >
            立即跳转到登录页面
          </Link>
        </div>

        {/* 底部装饰 */}
        <div className='mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200'>
          <div className='text-center text-xs sm:text-sm text-gray-500'>
            <p>如需帮助，请联系站点管理员</p>
          </div>
        </div>
      </div>
    </div>
  );
}