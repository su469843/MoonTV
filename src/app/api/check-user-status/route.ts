/* eslint-disable no-console */
import { NextRequest, NextResponse } from 'next/server';
import { getConfig } from '@/lib/config';
import { getAuthInfoFromCookie } from '@/lib/auth';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  try {
    // 从cookie获取认证信息
    const authInfo = getAuthInfoFromCookie(req);
    
    if (!authInfo?.username) {
      return NextResponse.json({ banned: false });
    }
    
    // 获取配置检查用户状态
    const config = await getConfig();
    const user = config.UserConfig.Users.find(
      (u) => u.username === authInfo.username
    );
    
    return NextResponse.json({ banned: user?.banned || false });
  } catch (error) {
    console.error('检查用户状态时出错:', error);
    return NextResponse.json({ banned: false });
  }
}