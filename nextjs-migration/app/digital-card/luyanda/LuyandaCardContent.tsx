import SaveContactButton from './SaveContactButton';

/*
  Worked-with logos. Only logos with a real file are shown.
  To add one: drop the file in public/assets/card/ and add a line here.
  Waiting on files: Biz Acumen Consulting, Hucklberry, PurpleYouniverse,
  Vuma Business Documents, Aksonsicar, Jeremiah's Auto,
  Emerald Auto (Church Street), Meridian Digital.
*/
const WORKED_WITH: { name: string; src: string; w: number; h: number; href?: string }[] = [
  { name: 'Afripact Civils', src: '/assets/card/afripact.jpeg', w: 134, h: 99, href: 'https://afripact.net' },
  { name: 'Mbusi Car Rentals', src: '/assets/card/mbusi.jpg', w: 784, h: 300 },
  { name: 'SAWON Foundation', src: '/assets/card/sawon.png', w: 300, h: 300 },
  { name: 'Biz Acumen', src: '/assets/card/bizacumen.png', w: 918, h: 272, href: 'https://bizacumen.co.za' },
  { name: 'Hucklberry Media', src: '/assets/card/hucklberry.png', w: 2092, h: 560, href: 'https://hucklberry.co.za' },
  { name: 'The Purple Youniverse', src: '/assets/card/purple.png', w: 600, h: 362 },
  { name: 'Vuma', src: '/assets/card/vuma.png', w: 710, h: 282 },
  { name: 'Aksons Motor Group', src: '/assets/card/aksons.png', w: 800, h: 200, href: 'https://aksonsicar.co.za' },
  { name: "Jeremiah's Auto", src: '/assets/card/jeremiahs.png', w: 692, h: 182, href: 'https://www.jeremiahsauto.co.za' },
  { name: 'Emerald Auto', src: '/assets/card/emerald.png', w: 320, h: 80, href: 'https://www.emeraldautopmb.co.za' },
  { name: 'Meridian Digital', src: '/assets/card/meridian.png', w: 202, h: 311, href: 'https://www.meridiandigital.co.za' },
];

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
  padding: 24px 16px 32px;
  font-family: 'DM Sans', system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
}
.lc-wrap { max-width: 440px; margin: 0 auto; }
.lc-root a, .lc-root button { -webkit-tap-highlight-color: transparent; }
.lc-root :focus-visible { outline: 2px solid var(--ink); outline-offset: 3px; }

.lc-hero { margin-bottom: 28px; }
.lc-photo {
  position: relative; overflow: hidden;
  aspect-ratio: 800 / 840; border-radius: 22px;
  background: #eceef1;
}
.lc-photo img {
  display: block; width: 100%; height: 100%;
  object-fit: cover; object-position: center top;
  animation: lc-zoom 1100ms cubic-bezier(.2,.7,.2,1) both;
}
.lc-photo-shade {
  position: absolute; left: 0; right: 0; bottom: 0; height: 52%;
  background: linear-gradient(to top, rgba(18,19,23,.94), rgba(18,19,23,0));
}
.lc-photo-text { position: absolute; left: 22px; right: 22px; bottom: 20px; color: #fff; }
.lc-name {
  font-family: 'Bodoni Moda', 'Cormorant Garamond', serif;
  font-weight: 500; font-size: 44px; line-height: 1.04;
  letter-spacing: -0.01em; margin: 0 0 6px;
}
.lc-role { font-size: 16px; font-weight: 500; margin: 0; color: rgba(255,255,255,.88); }
.lc-tag {
  font-family: 'Bodoni Moda', 'Cormorant Garamond', serif;
  font-style: italic; font-weight: 400;
  font-size: 34px; line-height: 1.12; letter-spacing: -0.01em;
  margin: 26px 0 12px;
}
.lc-line { font-size: 16px; line-height: 1.45; color: var(--ink); margin: 0 0 14px; }
.lc-loc { font-size: 14px; line-height: 1.5; color: var(--muted); margin: 0; }

.lc-actions { display: grid; gap: 10px; margin-bottom: 40px; }
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

.lc-label {
  font-size: 12px; font-weight: 700; letter-spacing: 0.12em;
  text-transform: uppercase; color: var(--muted); margin: 0 0 14px;
}

.lc-proof { margin-bottom: 40px; }
.lc-logos { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
@media (max-width: 339px) { .lc-logos { grid-template-columns: repeat(2, 1fr); } }
.lc-logo {
  display: flex; flex-direction: column; align-items: center; justify-content: space-between;
  gap: 10px; padding: 14px 8px 10px;
  border: 1px solid var(--line); border-radius: 14px; background: #fff;
}
.lc-logo-link { text-decoration: none; color: inherit; min-height: 48px; }
.lc-logo-link:focus-visible { outline: 2px solid var(--ink); outline-offset: 2px; }
.lc-logo-box { display: flex; align-items: center; justify-content: center; height: 48px; width: 100%; }
.lc-logo-box img { display: block; max-height: 48px; max-width: 100%; width: auto; height: auto; object-fit: contain; }
.lc-logo-name { font-size: 12px; line-height: 1.3; color: var(--muted); text-align: center; margin: 0; }

.lc-cards { display: grid; gap: 14px; }
.lc-biz {
  border: 1px solid var(--line);
  border-top: 3px solid var(--rule);
  border-radius: 12px;
  padding: 20px 20px 8px;
}
.lc-biz.lc-nolink { padding-bottom: 20px; }
.lc-logo-ada {
  width: 112px; height: 29px; margin: 0 0 14px -9px;
  background-color: var(--ink);
  -webkit-mask: url('/assets/ada-logo-mark.png') left center / contain no-repeat;
  mask: url('/assets/ada-logo-mark.png') left center / contain no-repeat;
}
.lc-logo-vantara { display: block; height: 18px; width: auto; margin: 6px 0 20px; }
.lc-org { font-family: 'Bodoni Moda', 'Cormorant Garamond', serif; font-weight: 500; font-size: 24px; line-height: 1.1; margin: 0 0 10px; }
.lc-biz .lc-title { font-size: 16px; line-height: 1.45; font-weight: 700; margin: 0 0 4px; }
.lc-biz .lc-desc { font-size: 15px; line-height: 1.45; color: var(--muted); margin: 0 0 6px; }
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
@keyframes lc-zoom { from { transform: scale(1.06); } to { transform: scale(1); } }
.lc-rise { opacity: 0; animation: lc-rise 560ms cubic-bezier(.2,.7,.2,1) forwards; animation-delay: var(--d, 0ms); }

@media (prefers-reduced-motion: reduce) {
  .lc-rise { opacity: 1; animation: none; }
  .lc-photo img { animation: none; }
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
  const logosEnd = 260 + WORKED_WITH.length * 60;

  return (
    <main className="lc-root">
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="lc-wrap">
        <header className="lc-hero lc-rise" style={{ ['--d' as string]: '0ms' }}>
          <div className="lc-photo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/card/luyanda-card.jpg" alt="Luyanda Ngubo" width={800} height={840} />
            <div className="lc-photo-shade" aria-hidden="true" />
            <div className="lc-photo-text">
              <h1 className="lc-name">Luyanda Ngubo</h1>
              <p className="lc-role">Founder, ADA</p>
            </div>
          </div>
          <p className="lc-tag">I solve problems, and get you paid.</p>
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

        <div className="lc-proof" role="group" aria-label="Businesses worked with">
          <p className="lc-label lc-rise" style={{ ['--d' as string]: '200ms' }}>Worked with</p>
          <div className="lc-logos">
            {WORKED_WITH.map((c, i) => {
              const inner = (
                <>
                  <div className="lc-logo-box">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={c.src} alt={c.name} width={c.w} height={c.h} loading="lazy" />
                  </div>
                  <p className="lc-logo-name">{c.name}</p>
                </>
              );
              const style = { ['--d' as string]: `${240 + i * 60}ms` };
              return c.href ? (
                <a key={c.name} href={c.href} target="_blank" rel="noopener noreferrer" aria-label={`${c.name} website`} className="lc-logo lc-logo-link lc-rise" style={style}>
                  {inner}
                </a>
              ) : (
                <div key={c.name} className="lc-logo lc-rise" style={style}>
                  {inner}
                </div>
              );
            })}
          </div>
        </div>

        <p className="lc-label lc-rise" style={{ ['--d' as string]: `${logosEnd}ms` }}>Roles</p>
        <div className="lc-cards" role="group" aria-label="Roles and businesses">
          <article className="lc-biz lc-rise" style={{ ['--rule' as string]: '#C4502A', ['--d' as string]: `${logosEnd + 40}ms` }}>
            <div className="lc-logo-ada" role="img" aria-label="ADA" />
            <p className="lc-title">Founder</p>
            <p className="lc-desc">Google ads, websites and business systems.</p>
            <a href="https://adagrowth.co.za">adagrowth.co.za</a>
          </article>

          <article className="lc-biz lc-nolink lc-rise" style={{ ['--rule' as string]: '#d5d6db', ['--d' as string]: `${logosEnd + 100}ms` }}>
            <p className="lc-org">Afripact Civils</p>
            <p className="lc-title">Head of Sales and Strategy</p>
          </article>

          <article className="lc-biz lc-rise" style={{ ['--rule' as string]: '#d5d6db', ['--d' as string]: `${logosEnd + 160}ms` }}>
            <p className="lc-org">Avalon Capital Group</p>
            <p className="lc-title">Founder and Principal</p>
            <a href="https://www.avaloncapitalgroup.co.za">avaloncapitalgroup.co.za</a>
          </article>

          <article className="lc-biz lc-rise" style={{ ['--rule' as string]: '#C9A84C', ['--d' as string]: `${logosEnd + 220}ms` }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="lc-logo-vantara"
              src="/assets/vantara/logo-word-ink.png"
              alt="Vantara"
              width={903}
              height={109}
            />
            <p className="lc-title">Founder</p>
            <p className="lc-desc">Vehicle acquisition advisory.</p>
            <a href="https://www.avaloncapitalgroup.co.za/vantara">avaloncapitalgroup.co.za/vantara</a>
          </article>

          <article className="lc-biz lc-nolink lc-rise" style={{ ['--rule' as string]: '#d5d6db', ['--d' as string]: `${logosEnd + 280}ms` }}>
            <p className="lc-org">Biz Acumen Consulting</p>
            <p className="lc-title">Technical Lead</p>
            <p className="lc-desc">Sales optimization and business development.</p>
          </article>
        </div>

        <p className="lc-foot lc-rise" style={{ ['--d' as string]: `${logosEnd + 340}ms` }}>
          Avalon Capital Group (Pty) Ltd, Reg. 2025/671885/07
        </p>
      </div>
    </main>
  );
}
