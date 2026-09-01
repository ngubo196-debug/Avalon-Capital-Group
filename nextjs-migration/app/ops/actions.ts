'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { OPS_COOKIE } from '@/lib/opsAuth';

export async function login(formData: FormData) {
  const password = formData.get('password');

  if (password && password === process.env.OPS_PASSWORD) {
    cookies().set(OPS_COOKIE, 'granted', {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: '/',
    });
    redirect('/ops/pipeline');
  }

  redirect('/ops?error=1');
}

export async function logout() {
  cookies().delete(OPS_COOKIE);
  redirect('/ops');
}
