import SaveContactButton from './SaveContactButton';

const CSS = `
.lc-root {
  --ink: #121317;
  --muted: #5b5e66;
  --line: #e3e4e8;
  background: #ffffff;
  color: var(--ink);
  color-scheme: light;
  min-height: 100vh;
  min-height: 100dvh;
  padding: 40px 16px 32px;
  font-family: 'DM Sans', system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
}
.lc-wrap { max-width: 440px; margin: 0 auto; }
.lc-root a, .lc-root button { -webkit-tap-highlight-color: transparent; }
.lc-root :focus-visible { outline: 2px solid var(--ink); outline-offset: 3px; }

.lc-head { margin-bottom: 28px; }
.lc-name {
  font-family: 'Bodoni Moda', 'Cormorant Garamond', serif;
  font-weight: 500;
  font-size: 40px;
  line-height: 1.08;
  letter-spacing: -0.01em;
  margin: 0 0 8px;
}
.lc-role { font-size: 16px; font-weight: 500; margin: 0 0 14px; }
.lc-line { font-size: 17px; line-height: 1.45; margin: 0 0 18px; }
.lc-loc { font-size: 14px; line-height: 1.5; color: var(--muted); margin: 0; }

.lc-actions { display: grid; gap: 10px; margin-bottom: 36px; }
.lc-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
.lc-btn {
  display: flex; align-items: center; justify-content: center; gap: 8px;
  min-height: 52px; padding: 0 16px;
  font: 500 15px/1 'DM Sans', system-ui, sans-serif;
  text-decoration: none; cursor: pointer;
  border-radius: 12px; border: 1.5px solid var(--ink);
  background: #fff; color: var(--ink);
  transition: background-color 160ms ease, color 160ms ease;
}
.lc-btn svg { width: 18px; height: 18px; flex: none; }
.lc-primary { background: var(--ink); color: #fff; font-weight: 700; }
.lc-primary:hover { background: #2a2c33; }
.lc-btn:not(.lc-primary):hover { background: #f3f3f5; }
.lc-row .lc-btn { padding: 0 8px; flex-direction: column; gap: 6px; min-height: 64px; font-size: 14px; }
.lc-save { width: 100%; border-color: var(--line); }

.lc-cards { display: grid; gap: 14px; }
.lc-biz {
  border: 1px solid var(--line);
  border-top: 3px solid var(--rule);
  border-radius: 12px;
  padding: 20px 20px 8px;
}
.lc-logo-ada {
  width: 112px; height: 29px; margin: 0 0 14px -9px; /* PNG has ~9px of built-in left padding at this size */
  background-color: var(--ink);
  -webkit-mask: url('/assets/ada-logo-mark.png') left center / contain no-repeat;
  mask: url('/assets/ada-logo-mark.png') left center / contain no-repeat;
}
.lc-logo-vantara { display: block; height: 18px; width: auto; margin: 6px 0 20px; }
.lc-biz p { font-size: 16px; line-height: 1.45; margin: 0 0 6px; }
.lc-biz a {
  display: flex; align-items: center; min-height: 48px;
  font-size: 15px; font-weight: 500; color: var(--ink);
  text-decoration: underline; text-underline-offset: 3px;
  word-break: break-word;
}

.lc-foot { margin: 36px 0 0; font-size: 12px; line-height: 1.5; color: var(--muted); text-align: center; }

.lc-toast {
  position: fixed; left: 50%; bottom: 24px;
  transform: translate(-50%, 12px);
  background: var(--ink); color: #fff;
  font-size: 14px; padding: 12px 20px; border-radius: 10px;
  opacity: 0; pointer-events: none; white-space: nowrap;
  transition: opacity 200ms ease, transform 200ms ease;
}
.lc-toast.show { opacity: 1; transform: translate(-50%, 0); }

@keyframes lc-rise { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: none; } }
.lc-rise { opacity: 0; animation: lc-rise 560ms cubic-bezier(.2,.7,.2,1) forwards; animation-delay: var(--d, 0ms); }

@media (prefers-reduced-motion: reduce) {
  .lc-rise { opacity: 1; animation: none; }
  .lc-btn, .lc-toast { transition: none; }
}
`;

const icon = {
  viewBox: '0 0 24 24',
  'aria-hidden': true as const,
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

export default function LuyandaCardContent() {
  return (
    <main className="lc-root">
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="lc-wrap">
        <header className="lc-head lc-rise" style={{ ['--d' as string]: '0ms' }}>
          <h1 className="lc-name">Luyanda Ngubo</h1>
          <p className="lc-role">Founder, ADA</p>
          <p className="lc-line">Google ads, websites and business systems for South African businesses.</p>
          <p className="lc-loc">
            Pietermaritzburg, KwaZulu-Natal
            <br />
            In person across KZN. Clients anywhere in South Africa.
          </p>
        </header>

        <div className="lc-actions lc-rise" style={{ ['--d' as string]: '120ms' }} role="group" aria-label="Contact Luyanda">
          <a
            className="lc-btn lc-primary"
            href="https://wa.me/27712205313?text=Hi%20Luyanda%2C%20I%20found%20your%20card"
          >
            Book a free 15-min call
          </a>
          <div className="lc-row">
            <a className="lc-btn" href="tel:+27712205313" aria-label="Call Luyanda">
              <svg {...icon}>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Call
            </a>
            <a className="lc-btn" href="https://wa.me/27712205313" aria-label="WhatsApp Luyanda">
              <svg {...icon}>
                <path d="M21 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20.5l1.6-5.2A8.5 8.5 0 1 1 21 11.5z" />
              </svg>
              WhatsApp
            </a>
            <a className="lc-btn" href="mailto:luyanda@avaloncapitalgroup.co.za" aria-label="Email Luyanda">
              <svg {...icon}>
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
              Email
            </a>
          </div>
          <SaveContactButton />
        </div>

        <div className="lc-cards" role="group" aria-label="Businesses">
          <article className="lc-biz lc-rise" style={{ ['--rule' as string]: '#C4502A', ['--d' as string]: '240ms' }}>
            <div className="lc-logo-ada" role="img" aria-label="ADA" />
            <p>Ads, websites and business systems.</p>
            <a href="https://adagrowth.co.za">adagrowth.co.za</a>
          </article>

          <article className="lc-biz lc-rise" style={{ ['--rule' as string]: '#C9A84C', ['--d' as string]: '340ms' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="lc-logo-vantara"
              src="/assets/vantara/logo-word-ink.png"
              alt="Vantara"
              width={903}
              height={109}
            />
            <p>Vehicle acquisition advisory.</p>
            <a href="https://www.avaloncapitalgroup.co.za/vantara">avaloncapitalgroup.co.za/vantara</a>
          </article>
        </div>

        <p className="lc-foot lc-rise" style={{ ['--d' as string]: '440ms' }}>
          Avalon Capital Group (Pty) Ltd, Reg. 2025/671885/07
        </p>
      </div>
    </main>
  );
}
