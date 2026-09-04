import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Web Design for Retail & E-commerce South Africa | ADA',
  description: 'Website design for retail and e-commerce businesses across South Africa. Built to rank on Google, load fast, and turn visitors into paying customers.',
  alternates: { canonical: 'https://www.avaloncapitalgroup.co.za/ada/web-design-retail-ecommerce' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Web Design for Retail & E-commerce Businesses',
  description: 'Website design for retail and e-commerce businesses across South Africa, built for speed, search visibility, and conversion.',
  provider: {
    '@type': 'Organization',
    name: 'Asset Development Automation',
    url: 'https://www.avaloncapitalgroup.co.za/ada',
    parentOrganization: {
      '@type': 'Organization',
      name: 'Avalon Capital Group',
      url: 'https://www.avaloncapitalgroup.co.za',
    },
  },
  areaServed: {
    '@type': 'Country',
    name: 'South Africa',
  },
  serviceType: 'Web Design for Retail and E-commerce',
};

export default function WebDesignRetailEcommerce() {
  return (
    <div id="page-web-design-retail" className="page ada-section" role="main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <style suppressHydrationWarning>{`
        .wds-back { font-family: DM Sans, sans-serif; font-size: 13px; color: var(--ada-accent); text-decoration: none; display: inline-block; margin-bottom: 32px; }
        .wds-back:hover { text-decoration: underline; }
        .wds-label { font-family: DM Sans, sans-serif; font-size: 11px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: var(--ada-accent); margin-bottom: 20px; }
        .wds-h1 { font-family: Bodoni Moda, Cormorant Garamond, serif; font-weight: 400; font-size: clamp(38px, 4.4vw, 62px); line-height: 1.12; color: var(--ada-ink); max-width: 820px; margin: 0; }
        .wds-h2 { font-family: Bodoni Moda, Cormorant Garamond, serif; font-weight: 500; font-size: clamp(28px, 3vw, 42px); line-height: 1.15; color: var(--ada-ink); margin: 0 0 24px; }
        .wds-body { font-family: DM Sans, sans-serif; font-size: 17px; font-weight: 300; line-height: 1.75; color: var(--ada-ink-soft); max-width: 720px; margin: 0; }
        .wds-body strong { font-weight: 600; color: var(--ada-ink); }
        .wds-body + .wds-body { margin-top: 20px; }
        .wds-hero { background: var(--ada-white); padding: calc(68px + 6rem) 3.5rem 6rem; }
        .wds-hero-intro { max-width: 600px; margin-top: 24px; }
        .wds-section { padding: 6rem 3.5rem; }
        .wds-section--white { background: var(--ada-white); }
        .wds-section--wash { background: var(--ada-wash); }
        .wds-inner { max-width: 1160px; margin: 0 auto; }

        .wds-build-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: var(--ada-line); border: 1px solid var(--ada-line); border-radius: 16px; overflow: hidden; margin-top: 3rem; }
        .wds-build-item { background: var(--ada-white); padding: 2.25rem; }
        .wds-build-title { display: block; font-family: DM Sans, sans-serif; font-size: 16px; font-weight: 600; color: var(--ada-ink); margin-bottom: 8px; }
        .wds-build-desc { font-family: DM Sans, sans-serif; font-size: 14px; font-weight: 300; line-height: 1.75; color: var(--ada-ink-soft); margin: 0; }

        .wds-for-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1px; background: var(--ada-line); border: 1px solid var(--ada-line); border-radius: 16px; overflow: hidden; margin-top: 3rem; }
        .wds-for-item { background: var(--ada-white); padding: 2rem 2.25rem; font-family: DM Sans, sans-serif; font-size: 17px; font-weight: 500; color: var(--ada-ink); }

        .wds-cta-btn { display: inline-block; background: var(--ada-accent); color: #FFFFFF !important; border-radius: 100px; padding: 14px 32px; font-family: DM Sans, sans-serif; font-size: 15px; font-weight: 500; text-decoration: none; border: 2px solid var(--ada-accent); transition: background 0.2s ease, color 0.2s ease; }
        .wds-cta-btn:hover { background: var(--ada-white); color: var(--ada-accent) !important; }
        .wds-cta-btn--ghost { display: inline-block; background: transparent; color: var(--ada-accent) !important; border-radius: 100px; padding: 14px 32px; font-family: DM Sans, sans-serif; font-size: 15px; font-weight: 500; text-decoration: none; border: 2px solid var(--ada-accent); transition: background 0.2s ease, color 0.2s ease; }
        .wds-cta-btn--ghost:hover { background: var(--ada-accent); color: #FFFFFF !important; }
        .wds-cta-row { display: flex; gap: 16px; flex-wrap: wrap; margin-top: 2rem; }
        .wds-eyebrow { font-family: DM Sans, sans-serif; font-size: 13px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--ada-ink-muted); margin-bottom: 24px; }

        .wds-case-link { display: block; margin-top: 1.5rem; font-family: DM Sans, sans-serif; font-size: 14px; font-weight: 600; color: var(--ada-accent); text-decoration: none; }
        .wds-case-link:hover { text-decoration: underline; }

        .wds-footer { background: var(--ada-ink); padding: 3rem 3.5rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 24px; }
        .wds-footer-brand { font-family: Bodoni Moda, Cormorant Garamond, serif; font-size: 16px; font-weight: 500; color: #FFFFFF; }
        .wds-footer-links { display: flex; gap: 24px; flex-wrap: wrap; }
        .wds-footer-links a { font-family: DM Sans, sans-serif; font-size: 13px; color: rgba(255,255,255,0.45); text-decoration: none; transition: color 0.2s ease; }
        .wds-footer-links a:hover { color: #FFFFFF; }
        .wds-footer-legal { width: 100%; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.1); margin-top: 4px; }
        .wds-footer-legal p { font-family: DM Sans, sans-serif; font-size: 11px; color: rgba(255,255,255,0.3); margin-bottom: 8px; line-height: 1.7; }
        .wds-footer-legal p:last-child { font-size: 12px; margin-bottom: 0; }

        @media (max-width: 768px) {
          .wds-hero { padding: calc(68px + 4rem) 1.5rem 4rem; }
          .wds-section { padding: 4rem 1.5rem; }
          .wds-build-grid, .wds-for-grid { grid-template-columns: 1fr; }
          .wds-footer { padding: 2.5rem 20px; flex-direction: column; text-align: center; }
        }
      `}</style>

      <section className="wds-hero">
        <div className="wds-inner">
          <Link href="/ada/web-design-durban" className="wds-back">Web Design Durban</Link>
          <h1 className="wds-h1">Web Design for Retail &amp; E-commerce Businesses in South Africa</h1>
          <p className="wds-body wds-hero-intro">Your store is open 24 hours. Your website should be working just as hard.</p>
        </div>
      </section>

      <section className="wds-section wds-section--wash" aria-labelledby="problem-heading">
        <div className="wds-inner">
          <div className="wds-label">The Problem</div>
          <h2 className="wds-h2" id="problem-heading">Most South African retail websites are losing sales every day without knowing it.</h2>
          <p className="wds-body">Slow load times, poor mobile experience, and weak SEO are invisible problems that cost retail businesses thousands in lost sales monthly. Customers who cannot find you or cannot load your site buy from someone else.</p>
        </div>
      </section>

      <section className="wds-section wds-section--white" aria-labelledby="what-heading">
        <div className="wds-inner">
          <div className="wds-label">What We Build</div>
          <h2 className="wds-h2" id="what-heading">A retail website built to sell.</h2>
          <div className="wds-build-grid">
            <div className="wds-build-item">
              <span className="wds-build-title">Speed and performance first</span>
              <p className="wds-build-desc">Next.js sites that load in under two seconds on South African mobile networks. Fast sites rank higher and convert better.</p>
            </div>
            <div className="wds-build-item">
              <span className="wds-build-title">Search visibility for product queries</span>
              <p className="wds-build-desc">SEO architecture that gets your products and categories ranking for high-intent searches. Organic traffic that compounds over time.</p>
            </div>
            <div className="wds-build-item">
              <span className="wds-build-title">Conversion architecture</span>
              <p className="wds-build-desc">Product pages, checkout flows, and trust signals designed to reduce drop-off and turn browsers into buyers.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="wds-section wds-section--wash" aria-labelledby="for-heading">
        <div className="wds-inner">
          <div className="wds-label">Who It&apos;s For</div>
          <h2 className="wds-h2" id="for-heading">Built for retail and e-commerce businesses across South Africa.</h2>
          <p className="wds-body">Whether you sell in-store, online, or both, your digital presence should be driving revenue around the clock.</p>
          <div className="wds-for-grid">
            <div className="wds-for-item">Online Stores &amp; E-commerce</div>
            <div className="wds-for-item">Brick and Mortar Retailers</div>
            <div className="wds-for-item">Wholesale &amp; Trade Suppliers</div>
            <div className="wds-for-item">Service Retailers</div>
          </div>
        </div>
      </section>

      <section className="wds-section wds-section--white" style={{ textAlign: 'center' }} aria-labelledby="seen-enough">
        <div className="wds-inner">
          <p className="wds-eyebrow" id="seen-enough">Seen enough?</p>
          <Link href="/ada/audit" className="wds-cta-btn">Get Your Free Audit</Link>
        </div>
      </section>

      <section className="wds-section wds-section--wash" aria-labelledby="proof-heading">
        <div className="wds-inner">
          <div className="wds-label">Our Work</div>
          <h2 className="wds-h2" id="proof-heading">Built for businesses that cannot afford a slow website.</h2>
          <p className="wds-body">We build on Next.js, which gives retail sites faster load times and stronger SEO than typical e-commerce platforms. Every site we build is optimised for Core Web Vitals, mobile performance, and search indexing from day one.</p>
          <Link href="/ada/acg-case-study" className="wds-case-link">See how we build →</Link>
        </div>
      </section>

      <section className="wds-section wds-section--white" aria-labelledby="cta-heading">
        <div className="wds-inner">
          <div className="wds-label">Get Started</div>
          <h2 className="wds-h2" id="cta-heading">Ready to build a store that sells while you sleep?</h2>
          <p className="wds-body">Start with a free digital audit. We will show you exactly what your current site is costing you in lost sales before you spend a cent.</p>
          <div className="wds-cta-row">
            <Link href="/ada/audit" className="wds-cta-btn">Get Your Free Audit</Link>
            <Link href="/ada/contact" className="wds-cta-btn--ghost">Start a Conversation</Link>
          </div>
        </div>
      </section>

      <footer className="wds-footer">
        <div className="wds-footer-brand">ADA - A division of Avalon Capital Group</div>
        <div className="wds-footer-links">
          <Link href="/ada#work">Work</Link>
          <Link href="/ada/insights">Insights</Link>
          <Link href="/ada">FAQ</Link>
          <Link href="/ada/contact">Contact</Link>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-of-service">Terms of Service</a>
        </div>
        <div className="wds-footer-legal">
          <p>Avalon Capital Group (Pty) Ltd &middot; Reg. No. 2025/671885/07 &middot; Durban, KwaZulu-Natal, South Africa</p>
          <p>Avalon Capital Group does not provide financial, investment, or legal advice. All information shared is for general informational purposes only. Clients are encouraged to consult with licensed professionals before making any investment or business decisions.</p>
        </div>
      </footer>
    </div>
  );
}
