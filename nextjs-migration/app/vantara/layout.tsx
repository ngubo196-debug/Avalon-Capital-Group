import Link from 'next/link';
import './vantara.css';
import './vantara-fixes.css';
import VantaraMotion from './VantaraMotion';

export const viewport = { themeColor: '#FDFCFA', colorScheme: 'light' };

// One shell for every /vantara route: header, mobile menu, footer, mobile dock and photo viewer.
// All Vantara styles are scoped under .vantara-v3, so nothing here reaches the ACG or ADA pages.
export default function VantaraLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="vantara-v3">
      <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('v-js');" }} />
      <header className="site" id="top">
        <div className="wrap nav">
          <Link href="/vantara" className="brand" aria-label="Vantara home">
            <img className="m" src="/assets/vantara/logo-mark-ink.png" alt="" width="204" height="185" />
            {' '}
            <img className="w" src="/assets/vantara/logo-word-ink.png" alt="Vantara" width="903" height="109" />
          </Link>
          <ul className="menu">
            <li>
              <Link href="/vantara/international-buyers">Buying from abroad</Link>
            </li>
            <li>
              <Link href="/vantara/traffic-register-number">TRN help</Link>
            </li>
            <li>
              <Link href="/vantara/overland-vehicle-south-africa">Overland</Link>
            </li>
            <li>
              <Link href="/vantara/about">About</Link>
            </li>
            <li>
              <Link href="/vantara/deals">Deals</Link>
            </li>
          </ul>
          <a href="https://wa.me/27712205313?text=Hi%20Luyanda%2C%20I'm%20looking%20for%20a%20car%20and%20would%20like%20to%20talk%20to%20Vantara.%20(ref%20VAN-NAV)" target="_blank" rel="noopener" className="btn btn-ink" data-wa="VAN-NAV">
            Start the conversation
            {' '}
            <span className="arr">
              <svg viewBox="0 0 16 16" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>
          {' '}
          <button className="menu-btn" id="menuBtn" aria-expanded="false" aria-controls="mobileMenu" aria-label="Open menu">
            <i></i>
          </button>
        </div>
        <div className="mobile-menu wrap" id="mobileMenu" hidden>
          <Link href="/vantara" className="ml">
            Home
            {' '}
            <svg viewBox="0 0 16 16" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </Link>
          {' '}
          <Link href="/vantara/international-buyers" className="ml">
            Buying from abroad
            {' '}
            <svg viewBox="0 0 16 16" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </Link>
          <Link href="/vantara/traffic-register-number" className="ml">
            TRN help
            {' '}
            <svg viewBox="0 0 16 16" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </Link>
          <Link href="/vantara/overland-vehicle-south-africa" className="ml">
            Overland
            {' '}
            <svg viewBox="0 0 16 16" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </Link>
          <Link href="/vantara/about" className="ml">
            About
            {' '}
            <svg viewBox="0 0 16 16" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </Link>
          <Link href="/vantara/deals" className="ml">
            Deals
            {' '}
            <svg viewBox="0 0 16 16" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </Link>
          {' '}
          <a href="https://wa.me/27712205313?text=Hi%20Luyanda%2C%20I'm%20looking%20for%20a%20car%20and%20would%20like%20to%20talk%20to%20Vantara.%20(ref%20VAN-MENU)" target="_blank" rel="noopener" className="btn btn-ink" data-wa="VAN-MENU">
            Start the conversation
            {' '}
            <span className="arr">
              <svg viewBox="0 0 16 16" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>
        </div>
      </header>

      {children}

      <footer>
        <div className="wrap">
          <div className="fgrid">
            <div>
              <img className="flogo" src="/assets/vantara/logo-full-white.png" alt="Vantara. Acquisitions. Strategy. Value." width="934" height="484" loading="lazy" />
              <p style={{ marginTop: '18px', maxWidth: '300px' }}>Vehicle acquisition advisory for buyers in South Africa and abroad.</p>
            </div>
            <div>
              <b>Services</b>
              <ul>
                <li>
                  <Link href="/vantara">Buying in South Africa</Link>
                </li>
                <li>
                  <Link href="/vantara/international-buyers">Buying from abroad</Link>
                </li>
                <li>
                  <Link href="/vantara/traffic-register-number">Traffic Register Number</Link>
                </li>
                <li>
                  <Link href="/vantara/overland-vehicle-south-africa">Overland vehicles</Link>
                </li>
                <li>
                  <Link href="/vantara/about">About Luyanda</Link>
                </li>
              </ul>
            </div>
            <div>
              <b>Deals and insights</b>
              <ul>
                <li>
                  <Link href="/vantara/deals">All deals</Link>
                </li>
                <li>
                  <Link href="/vantara/automotive">Two dealers, one client</Link>
                </li>
                <li>
                  <Link href="/vantara/insight-4">First vehicle</Link>
                </li>
                <li>
                  <Link href="/vantara/insight-1">Buying a car alone</Link>
                </li>
                <li>
                  <Link href="/vantara/insight-3">Getting it right is cheap</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="legal">
            <p>
              Vantara is a division of
              {' '}
              <a href="https://www.avaloncapitalgroup.co.za/" style={{ color: 'var(--dark-fg)' }}>Avalon Capital Group (Pty) Ltd</a>
              {' '}
              · Reg. No. 2025/671885/07 · Pietermaritzburg, KwaZulu-Natal, South Africa
            </p>
            <p>
              Avalon Capital Group does not provide financial, investment or legal advice. Information on these pages is general. Licensing rules are set by each registering authority and can change. Consult a licensed professional before making financial decisions.
            </p>
          </div>
        </div>
      </footer>

      <div className="dock" id="dock">
        <a href="https://wa.me/27712205313?text=Hi%20Luyanda%2C%20I'm%20looking%20for%20a%20car%20and%20would%20like%20to%20talk%20to%20Vantara.%20(ref%20VAN-DOCK)" target="_blank" rel="noopener" className="btn btn-ink" data-wa="VAN-DOCK">Start the conversation on WhatsApp</a>
      </div>

      <dialog className="lb" id="lb" aria-label="Photo viewer">
        <div className="lb-inner">
          <div className="lb-img">
            <img id="lbImg" src="" alt="" />
          </div>
          <div className="lb-bar">
            <div className="lb-cap">
              <b id="lbTitle"></b>
              <span id="lbSub"></span>
            </div>
            <div className="ctrls">
              <button className="icon-btn" id="lbPrev" aria-label="Previous photo">
                <svg viewBox="0 0 16 16">
                  <path d="M10 3L5 8l5 5" />
                </svg>
              </button>
              {' '}
              <button className="icon-btn" id="lbNext" aria-label="Next photo">
                <svg viewBox="0 0 16 16">
                  <path d="M6 3l5 5-5 5" />
                </svg>
              </button>
              {' '}
              <button className="icon-btn" id="lbClose" aria-label="Close">
                <svg viewBox="0 0 16 16">
                  <path d="M4 4l8 8M12 4l-8 8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </dialog>

      <VantaraMotion />
    </div>
  );
}
