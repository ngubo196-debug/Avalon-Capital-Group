'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const WHATSAPP_LINK = "https://wa.me/27712205313?text=Hi%2C%20I%20have%20a%20deal%20I%27d%20like%20to%20discuss%20with%20Vantara.";
const FOUNDER_PHOTO = "/assets/luyanda-ngubo.jpg";

export default function VantaraLayout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeMobile = () => setMobileOpen(false);

  return (
    <div className="vantara-nav-scope">
      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
        .vantara-nav-scope nav {
          display: none !important;
        }
        .vantara-nav-scope nav.vantara-nav {
          display: flex !important;
        }
        .vantara-nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 72px;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 3.5rem;
          background: rgba(255,255,255,0.96);
          backdrop-filter: blur(14px);
          border-bottom: 1px solid #E2E2DC;
        }
        .vantara-nav-links {
          display: flex;
          align-items: center;
          gap: 32px;
          list-style: none;
        }
        .vantara-nav-links a {
          font-family: DM Sans, sans-serif;
          font-size: 13px;
          font-weight: 500;
          color: #7A7A7A;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .vantara-nav-links a:hover { color: #111111; }
        .vantara-nav-item-dropdown { position: relative; }
        .vantara-nav-trigger {
          font-family: DM Sans, sans-serif;
          font-size: 13px;
          font-weight: 500;
          color: #7A7A7A;
          cursor: pointer;
          transition: color 0.2s ease;
        }
        .vantara-nav-item-dropdown:hover > a,
        .vantara-nav-item-dropdown:hover > .vantara-nav-trigger { color: #111111; }
        .vantara-nav-chevron {
          font-size: 10px;
          margin-left: 4px;
          display: inline-block;
        }
        .vantara-nav-dropdown {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          background: #FFFFFF;
          border: 1px solid #E2E2DC;
          border-radius: 8px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.08);
          padding: 0.5rem 0;
          min-width: 300px;
          z-index: 200;
        }
        .vantara-nav-item-dropdown:hover .vantara-nav-dropdown { display: block; }
        .vantara-nav-dropdown a {
          display: block;
          padding: 0.6rem 1.25rem;
          font-family: DM Sans, sans-serif;
          font-size: 13px;
          font-weight: 500;
          line-height: 1.4;
          color: #3A3A3A;
          text-decoration: none;
          white-space: normal;
        }
        .vantara-nav-dropdown a:hover {
          color: #8C6D2C;
          background: #F8F6F0;
        }
        .vantara-nav-cta {
          display: inline-flex;
          align-items: center;
          font-family: DM Sans, sans-serif;
          font-size: 13px;
          font-weight: 600;
          background: #C9A84C;
          color: #141414;
          padding: 9px 10px 9px 22px;
          border-radius: 100px;
          text-decoration: none;
          transition: opacity 0.2s ease;
        }
        .vantara-nav-cta:hover { opacity: 0.88; }
        .vantara-nav-cta-avatar {
          position: relative;
          width: 28px;
          height: 28px;
          margin-left: 10px;
          border: 2px solid rgba(20,20,20,0.2);
          border-radius: 50%;
          overflow: hidden;
          flex-shrink: 0;
        }
        .vantara-nav-hamburger {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          font-size: 22px;
          line-height: 1;
          color: #111111;
          padding: 4px 10px;
        }
        .vantara-mobile-menu {
          display: none;
        }
        @media (max-width: 900px) {
          .vantara-nav { padding: 0 20px; }
          .vantara-nav-links { display: none; }
          .vantara-nav-hamburger { display: flex; align-items: center; justify-content: center; }
          .vantara-mobile-menu {
            display: block;
            position: fixed;
            top: 72px;
            left: 0;
            right: 0;
            max-height: calc(100vh - 72px);
            overflow-y: auto;
            background: #FFFFFF;
            border-bottom: 1px solid #E2E2DC;
            padding: 20px;
            z-index: 99;
          }
          .vantara-mobile-link {
            display: block;
            font-family: DM Sans, sans-serif;
            font-size: 14px;
            font-weight: 400;
            color: #3A3A3A;
            text-decoration: none;
            padding: 0.5rem 0;
            border-bottom: 1px solid #E2E2DC;
          }
          .vantara-mobile-divider {
            border-top: 1px solid #E2E2DC;
            margin-top: 1rem;
          }
          .vantara-mobile-group-label {
            display: block;
            font-family: DM Sans, sans-serif;
            font-size: 10px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.12em;
            color: #7A7A7A;
            margin-top: 1rem;
          }
        }

        /* Shared Vantara interaction rules (light theme, wds- pages under this nav) */
        .vantara-nav-scope .wds-mandate-link,
        .vantara-nav-scope .wds-cta-ghost {
          transition: border-color 0.2s ease;
        }
        .vantara-nav-scope .wds-mandate-link:hover,
        .vantara-nav-scope .wds-cta-ghost:hover {
          border-color: #C9A84C;
          text-decoration: underline;
        }
        .vantara-nav-scope .wds-footer-links a {
          transition: color 0.2s ease, border-color 0.2s ease;
        }
        .vantara-nav-scope .wds-footer-links a:hover {
          color: #C9A84C;
          border-color: #C9A84C;
          text-decoration: underline;
        }
        .vantara-nav-scope .wds-mandate-card,
        .vantara-nav-scope .wds-proof-card,
        .vantara-nav-scope .wds-process-card,
        .vantara-nav-scope .wds-diff-card {
          transition: transform 0.2s ease;
        }
        .vantara-nav-scope .wds-mandate-card:hover,
        .vantara-nav-scope .wds-proof-card:hover,
        .vantara-nav-scope .wds-process-card:hover,
        .vantara-nav-scope .wds-diff-card:hover {
          transform: translateY(-4px);
        }
      ` }} />

      <nav className="vantara-nav" aria-label="Vantara section navigation">
        <Link href="/vantara" style={{ display: 'flex', alignItems: 'center' }}>
          <Image src="/assets/vantara-logo.png" alt="Vantara" width={138} height={40} style={{ objectFit: 'contain' }} />
        </Link>
        <ul className="vantara-nav-links">
          <li><a href="/vantara#vantara-how">How It Works</a></li>
          <li><Link href="/vantara/international-buyers">International Buyers</Link></li>
          <li className="vantara-nav-item-dropdown">
            <span className="vantara-nav-trigger">Insights<span className="vantara-nav-chevron">▾</span></span>
            <div className="vantara-nav-dropdown">
              <Link href="/vantara/insight-1">Why buying a car alone is the most expensive thing you&apos;ll do this year</Link>
              <Link href="/vantara/insight-3">The advisor is free. The mistake is not.</Link>
              <Link href="/vantara/insight-4">First vehicle. Two options. One right decision.</Link>
            </div>
          </li>
        </ul>
        <button
          type="button"
          className="vantara-nav-hamburger"
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          ☰
        </button>
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="vantara-nav-cta">
          Start the Conversation
          <span className="vantara-nav-cta-avatar">
            <Image src={FOUNDER_PHOTO} alt="" fill sizes="28px" style={{ objectFit: 'cover', objectPosition: 'center top' }} />
          </span>
        </a>
      </nav>

      {mobileOpen && (
        <div className="vantara-mobile-menu">
          <a href="/vantara#vantara-how" className="vantara-mobile-link" onClick={closeMobile}>How It Works</a>
          <Link href="/vantara/international-buyers" className="vantara-mobile-link" onClick={closeMobile}>International Buyers</Link>

          <span className="vantara-mobile-group-label">Insights</span>
          <Link href="/vantara/insight-1" className="vantara-mobile-link" onClick={closeMobile}>Why buying a car alone is the most expensive thing you&apos;ll do this year</Link>
          <Link href="/vantara/insight-3" className="vantara-mobile-link" onClick={closeMobile}>The advisor is free. The mistake is not.</Link>
          <Link href="/vantara/insight-4" className="vantara-mobile-link" onClick={closeMobile}>First vehicle. Two options. One right decision.</Link>

          <div className="vantara-mobile-divider"></div>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="vantara-mobile-link" style={{ color: '#8C6D2C', fontWeight: 600 }} onClick={closeMobile}>Start the Conversation →</a>
        </div>
      )}

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
