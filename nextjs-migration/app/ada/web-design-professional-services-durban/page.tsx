import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Web Design for Professional Services Durban | ADA',
  description: 'Website design for accountants, lawyers, consultants, and professional service firms in Durban and KwaZulu-Natal. Built to rank on Google and convert visitors into clients.',
  alternates: { canonical: 'https://www.avaloncapitalgroup.co.za/ada/web-design-professional-services-durban' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Web Design for Professional Services in Durban',
  description: 'Website design for accountants, lawyers, consultants, and professional service firms in Durban and KwaZulu-Natal, built for search visibility and client conversion.',
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
  areaServed: [
    { '@type': 'City', name: 'Durban' },
    { '@type': 'State', name: 'KwaZulu-Natal' },
  ],
  serviceType: 'Web Design for Professional Services',
};

export default function WebDesignProfessionalServicesDurban() {
  return (
    <div id="page-web-design-professional-services" className="page ada-section" role="main">
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
          <h1 className="wds-h1">Web Design for Professional Services in Durban</h1>
          <p className="wds-body wds-hero-intro">Clients judge your firm before they call you. Your website is that judgment.</p>
        </div>
      </section>

      <section className="wds-section wds-section--wash" aria-labelledby="problem-heading">
        <div className="wds-inner">
          <div className="wds-label">The Problem</div>
          <h2 className="wds-h2" id="problem-heading">Most professional service firms in Durban are losing clients to better-looking competitors.</h2>
          <p className="wds-body">When someone needs an accountant, lawyer, or consultant in Durban, they search Google first. If your website looks outdated or unprofessional, they move on to the next result. First impressions online are permanent.</p>
        </div>
      </section>

      <section className="wds-section wds-section--white" aria-labelledby="what-heading">
        <div className="wds-inner">
          <div className="wds-label">What We Build</div>
          <h2 className="wds-h2" id="what-heading">A website that positions you as the obvious choice.</h2>
          <div className="wds-build-grid">
            <div className="wds-build-item">
              <span className="wds-build-title">Authority and credibility architecture</span>
              <p className="wds-build-desc">Professional bios, credentials, case results, and service pages structured to build trust before the first conversation.</p>
            </div>
            <div className="wds-build-item">
              <span className="wds-build-title">Local SEO for Durban searches</span>
              <p className="wds-build-desc">Rank for high-intent searches like &apos;accountant Durban&apos; or &apos;business lawyer KZN&apos;. Be found by clients actively looking for your services.</p>
            </div>
            <div className="wds-build-item">
              <span className="wds-build-title">Conversion-focused design</span>
              <p className="wds-build-desc">Clear service offerings, strong CTAs, and contact flows that turn website visitors into booked consultations.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="wds-section wds-section--wash" aria-labelledby="for-heading">
        <div className="wds-inner">
          <div className="wds-label">Who It&apos;s For</div>
          <h2 className="wds-h2" id="for-heading">Built for professional firms across Durban and KwaZulu-Natal.</h2>
          <p className="wds-body">Whether you are an independent consultant or an established firm, your website should reflect the standard of your practice.</p>
          <div className="wds-for-grid">
            <div className="wds-for-item">Accounting &amp; Auditing Firms</div>
            <div className="wds-for-item">Legal Practices</div>
            <div className="wds-for-item">Management Consultants</div>
            <div className="wds-for-item">Financial Advisors</div>
            <div className="wds-for-item">HR &amp; Recruitment Firms</div>
            <div className="wds-for-item">Engineering Consultants</div>
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
          <h2 className="wds-h2" id="proof-heading">We build for businesses that compete on trust.</h2>
          <p className="wds-body">We have built digital presences for businesses across KZN that went from zero visibility to fully indexed and ranking within weeks. The same structured process applies to every professional services firm we work with.</p>
          <Link href="/ada/acg-case-study" className="wds-case-link">Read the ACG case study →</Link>
        </div>
      </section>

      <section className="wds-section wds-section--white" aria-labelledby="cta-heading">
        <div className="wds-inner">
          <div className="wds-label">Get Started</div>
          <h2 className="wds-h2" id="cta-heading">Ready to build a website that actually brings in clients?</h2>
          <p className="wds-body">Start with a free digital audit. We will show you exactly what your current presence is costing you before you spend a cent.</p>
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
