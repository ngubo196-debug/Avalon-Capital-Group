import { cookies } from 'next/headers';

export const OPS_COOKIE = 'ops_session';

export function isOpsAuthed(): boolean {
  return cookies().get(OPS_COOKIE)?.value === 'granted';
}
