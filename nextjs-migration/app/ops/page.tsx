import { redirect } from 'next/navigation';
import { isOpsAuthed } from '@/lib/opsAuth';
import { login } from './actions';

export const metadata = {
  robots: { index: false, follow: false },
  title: 'ACG Ops',
};

export default function OpsGate({
  searchParams,
}: {
  searchParams: { error?: string };
}) {
  if (isOpsAuthed()) {
    redirect('/ops/pipeline');
  }

  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#FAFBF9',
        fontFamily: 'system-ui, sans-serif',
      }}
    >
      <form
        action={login}
        style={{
          background: '#fff',
          border: '1px solid #E4E6E1',
          borderRadius: 10,
          padding: '32px 28px',
          width: 300,
          display: 'flex',
          flexDirection: 'column',
          gap: 14,
        }}
      >
        <h1 style={{ fontSize: 18, margin: 0, fontWeight: 600 }}>ACG Ops</h1>
        <input
          type="password"
          name="password"
          placeholder="Password"
          autoFocus
          required
          style={{
            padding: '10px 12px',
            border: '1px solid #E4E6E1',
            borderRadius: 7,
            fontSize: 14,
          }}
        />
        {searchParams.error && (
          <p style={{ color: '#A15C5C', fontSize: 13, margin: 0 }}>
            Wrong password.
          </p>
        )}
        <button
          type="submit"
          style={{
            background: '#14161A',
            color: '#fff',
            border: 'none',
            padding: '10px 12px',
            borderRadius: 7,
            fontSize: 14,
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          Enter
        </button>
      </form>
    </main>
  );
}
