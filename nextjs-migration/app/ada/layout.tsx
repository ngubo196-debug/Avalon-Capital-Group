'use client';

import Link from 'next/link';
import Image from 'next/image';

const WHATSAPP_LINK = "https://wa.me/27712205313?text=Hi%20Luyanda%2C%20I%27d%20like%20to%20discuss%20a%20project%20with%20ADA.";
const FOUNDER_PHOTO = "/assets/luyanda-ngubo.jpg";

export default function AdaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="ada-nav-scope">
      <style suppressHydrationWarning>{`
        .ada-nav-scope nav {
          display: none !important;
        }
        .ada-nav-scope nav.ada-nav {
          display: flex !important;
        }
        .ada-nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 68px;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 3.5rem;
          background: rgba(255,255,255,0.96);
          backdrop-filter: blur(14px);
          border-bottom: 1px solid #E2E2DC;
        }
        .ada-nav-links {
          display: flex;
          align-items: center;
          gap: 32px;
          list-style: none;
        }
        .ada-nav-links a {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 500;
          color: #7A7A7A;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .ada-nav-links a:hover { color: #111111; }
        .ada-nav-cta {
          display: inline-flex;
          align-items: center;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 500;
          background: #1B3A8F;
          color: #FFFFFF;
          padding: 9px 22px;
          border-radius: 6px;
          text-decoration: none;
          transition: opacity 0.2s ease;
        }
        .ada-nav-cta:hover { opacity: 0.88; }
        .ada-nav-cta-avatar {
          position: relative;
          width: 28px;
          height: 28px;
          margin-left: 10px;
          border: 2px solid rgba(255,255,255,0.35);
          border-radius: 50%;
          overflow: hidden;
          flex-shrink: 0;
        }
        @media (max-width: 768px) {
          .ada-nav { padding: 0 20px; }
          .ada-nav-links { display: none; }
        }
      `}</style>

      <nav className="ada-nav" aria-label="ADA section navigation">
        <Link href="/ada" style={{ display: 'flex', alignItems: 'center' }}>
          <Image src="/assets/ada-logo-full.png" alt="ADA" width={80} height={32} style={{ objectFit: 'contain', filter: 'invert(1)' }} />
        </Link>
        <ul className="ada-nav-links">
          <li><a href="#work">Work</a></li>
          <li><a href="#process">Process</a></li>
          <li><a href="#pricing">Pricing</a></li>
        </ul>
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="ada-nav-cta">
          Start a conversation
          <span className="ada-nav-cta-avatar">
            <Image src={FOUNDER_PHOTO} alt="" fill sizes="28px" style={{ objectFit: 'cover', objectPosition: 'center top' }} />
          </span>
        </a>
      </nav>

      {children}

      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        style={{
          position: 'fixed',
          bottom: '32px',
          right: '32px',
          zIndex: 9999,
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: '#25D366',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
          cursor: 'pointer',
          textDecoration: 'none',
        }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  );
}
