import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Canopy Courier: Concept Build | ADA',
  description: 'ADA designed a full fleet revenue system for Canopy Courier. It never went live. This is the concept, documented honestly.',
  alternates: { canonical: 'https://www.avaloncapitalgroup.co.za/ada/canopy-courier' },
};

const WHATSAPP_LINK = "https://wa.me/27712205313?text=Hi%20Luyanda%2C%20I%27d%20like%20to%20discuss%20a%20project%20with%20ADA.";

export default function CanopyCourier() {
  return (
    <div id="page-canopy-courier" className="page ada-section" role="main">
      <style suppressHydrationWarning>{`
        .wds-back { font-family: DM Sans, sans-serif; font-size: 13px; color: var(--ada-accent); text-decoration: none; display: inline-block; margin-bottom: 32px; }
        .wds-back:hover { text-decoration: underline; }
        .wds-label { font-family: DM Sans, sans-serif; font-size: 11px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: var(--ada-accent); margin-bottom: 20px; }
        .wds-label-bar { display: inline-block; width: 20px; height: 2px; background: var(--ada-accent); vertical-align: middle; margin-right: 10px; }
        .wds-h1 { font-family: Bodoni Moda, Cormorant Garamond, serif; font-weight: 400; font-size: clamp(38px, 4.4vw, 62px); line-height: 1.12; color: var(--ada-ink); max-width: 820px; margin: 0; }
        .wds-h2 { font-family: Bodoni Moda, Cormorant Garamond, serif; font-weight: 500; font-size: clamp(28px, 3vw, 42px); line-height: 1.15; color: var(--ada-ink); margin: 0 0 24px; }
        .wds-body { font-family: DM Sans, sans-serif; font-size: 17px; font-weight: 300; line-height: 1.75; color: var(--ada-ink-soft); max-width: 720px; margin: 0; }
        .wds-body strong { font-weight: 600; color: var(--ada-ink); }
        .wds-body + .wds-body { margin-top: 20px; }
        .wds-hero { background: var(--ada-white); padding: calc(68px + 6rem) 3.5rem 6rem; }
        .wds-section { padding: 6rem 3.5rem; }
        .wds-section--white { background: var(--ada-white); }
        .wds-section--wash { background: var(--ada-wash); }
        .wds-inner { max-width: 1160px; margin: 0 auto; }

        .wds-badge { display: flex; width: fit-content; align-items: center; background: #FEF3C7; border: 1px solid #F59E0B; color: #92400E; border-radius: 100px; padding: 5px 16px; font-family: DM Sans, sans-serif; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 1.5rem; }
        .wds-hero-intro { max-width: 600px; margin-top: 24px; }
        .wds-stats { display: flex; flex-wrap: wrap; gap: 2rem; padding-top: 2rem; border-top: 1px solid var(--ada-line); margin-top: 2rem; }
        .wds-stat-value { display: block; font-family: Bodoni Moda, Cormorant Garamond, serif; font-size: 22px; font-weight: 500; color: var(--ada-ink); }
        .wds-disclaimer { font-family: DM Sans, sans-serif; font-size: 12px; font-style: italic; color: var(--ada-ink-muted); margin-top: 1rem; }
        .wds-disclaimer--lg { font-size: 14px; margin-top: 2rem; max-width: 560px; }

        .wds-plan-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: var(--ada-line); border: 1px solid var(--ada-line); margin-top: 56px; }
        .wds-plan-item { background: var(--ada-white); padding: 2.25rem; }
        .wds-plan-num { display: block; font-family: Bodoni Moda, Cormorant Garamond, serif; font-size: 32px; font-weight: 400; color: var(--ada-accent); opacity: 0.4; margin-bottom: 12px; }
        .wds-plan-title { display: block; font-family: DM Sans, sans-serif; font-size: 16px; font-weight: 600; color: var(--ada-ink); margin-bottom: 8px; }
        .wds-plan-desc { font-family: DM Sans, sans-serif; font-size: 14px; font-weight: 300; line-height: 1.7; color: var(--ada-ink-soft); margin: 0; }

        .wds-outcome-block { border-left: 3px solid var(--ada-accent); padding-left: 1.5rem; margin-bottom: 2rem; }
        .wds-outcome-block:last-of-type { margin-bottom: 0; }
        .wds-outcome-title { display: block; font-family: DM Sans, sans-serif; font-size: 16px; font-weight: 600; color: var(--ada-ink); margin-bottom: 0.5rem; }
        .wds-outcome-body { font-family: DM Sans, sans-serif; font-size: 15px; font-weight: 300; line-height: 1.7; color: var(--ada-ink-soft); margin: 0; }

        .wds-cta-btn { display: inline-block; background: var(--ada-accent); color: #FFFFFF !important; border-radius: 100px; padding: 14px 32px; font-family: DM Sans, sans-serif; font-size: 15px; font-weight: 500; text-decoration: none; border: 2px solid var(--ada-accent); transition: background 0.2s ease, color 0.2s ease; }
        .wds-cta-btn:hover { background: var(--ada-white); color: var(--ada-accent) !important; }

        .wds-closing { background: var(--ada-accent); padding: 6rem 3.5rem; text-align: center; }
        .wds-closing-h2 { font-family: Bodoni Moda, Cormorant Garamond, serif; font-weight: 500; font-size: clamp(28px, 3vw, 42px); color: var(--ada-white); margin: 0 0 16px; }
        .wds-closing-body { font-family: DM Sans, sans-serif; font-size: 16px; color: rgba(255,255,255,0.75); max-width: 480px; margin: 0 auto 32px; }
        .wds-closing-btn { display: inline-block; background: var(--ada-white); color: var(--ada-accent); border-radius: 100px; padding: 14px 32px; font-family: DM Sans, sans-serif; font-size: 15px; font-weight: 500; text-decoration: none; border: 1px solid var(--ada-white); transition: background 0.2s ease, color 0.2s ease; }
        .wds-closing-btn:hover { background: transparent; color: var(--ada-white); }

        .wds-footer { background: var(--ada-ink); padding: 3rem 3.5rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 24px; }
        .wds-footer-logo { font-family: Bodoni Moda, Cormorant Garamond, serif; font-size: 16px; font-weight: 600; color: #FFFFFF !important; text-decoration: none; }
        .wds-footer-logo span { color: var(--ada-accent); }
        .wds-footer-links { display: flex; gap: 24px; flex-wrap: wrap; }
        .wds-footer-links a { font-family: DM Sans, sans-serif; font-size: 13px; color: rgba(255,255,255,0.45); text-decoration: none; transition: color 0.2s ease; }
        .wds-footer-links a:hover { color: var(--ada-white); }
        .wds-footer-reg { font-family: DM Sans, sans-serif; font-size: 12px; color: rgba(255,255,255,0.3); width: 100%; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.1); margin-top: 4px; }

        @media (max-width: 768px) {
          .wds-hero { padding: calc(68px + 4rem) 1.5rem 4rem; }
          .wds-section, .wds-closing { padding: 4rem 1.5rem; }
          .wds-plan-grid { grid-template-columns: 1fr; }
          .wds-footer { padding: 2.5rem 20px; flex-direction: column; text-align: center; }
        }
      `}</style>

      <section className="wds-hero">
        <div className="wds-inner">
          <Link href="/ada" className="wds-back">← Back to ADA</Link>
          <div className="wds-badge">Concept build: not a delivered engagement</div>
          <div className="wds-label"><span className="wds-label-bar" />Canopy Courier</div>
          <h1 className="wds-h1">From a retail shop to a fleet revenue system.</h1>
          <p className="wds-body wds-hero-intro">This is not a case study. Canopy Courier is not a client. What exists is a full strategic and design concept ADA built to show what a fleet-focused digital rebuild actually looks like. The figures below are projections from the pitch. None of them are measured results. We are saying so plainly.</p>

          <div className="wds-stats">
            <span className="wds-stat-value">8 deliverables designed</span>
            <span className="wds-stat-value">Retail + fleet, dual path</span>
            <span className="wds-stat-value">R1M–R2M projected upside*</span>
          </div>
          <p className="wds-disclaimer">*Projection from the pitch. Not a measured result.</p>
        </div>
      </section>

      <section className="wds-section wds-section--wash" aria-labelledby="situation-heading">
        <div className="wds-inner">
          <div className="wds-label"><span className="wds-label-bar" />The Situation</div>
          <h2 className="wds-h2" id="situation-heading">Strong service. The wrong website for the biggest opportunity.</h2>
          <p className="wds-body">Canopy Courier has a clean site and a real service. But the site is built entirely for walk-in retail customers. Fleet clients, the ones worth R100,000 to R500,000 a year each, are not addressed anywhere on the site. Not a page, not a CTA, not a single line of copy.</p>
          <p className="wds-body">The retail job is worth R3,000 to R8,000. The fleet contract is worth R100,000 to R500,000 per year. Five fleet clients at conservative volumes: R1.2M annually. None of that is being captured.</p>
        </div>
      </section>

      <section className="wds-section wds-section--white" aria-labelledby="plan-heading">
        <div className="wds-inner">
          <div className="wds-label"><span className="wds-label-bar" />The Concept</div>
          <h2 className="wds-h2" id="plan-heading">Eight components. One coherent system.</h2>

          <div className="wds-plan-grid">
            <div className="wds-plan-item">
              <span className="wds-plan-num">01</span>
              <span className="wds-plan-title">Brand repositioning</span>
              <p className="wds-plan-desc">Reframe from retail shop to fleet-capable operation.</p>
            </div>
            <div className="wds-plan-item">
              <span className="wds-plan-num">02</span>
              <span className="wds-plan-title">Dual-path homepage</span>
              <p className="wds-plan-desc">Retail and fleet routed separately from the first screen.</p>
            </div>
            <div className="wds-plan-item">
              <span className="wds-plan-num">03</span>
              <span className="wds-plan-title">Fleet money page</span>
              <p className="wds-plan-desc">Dedicated page built to convert fleet decision-makers.</p>
            </div>
            <div className="wds-plan-item">
              <span className="wds-plan-num">04</span>
              <span className="wds-plan-title">Fleet Performance Package</span>
              <p className="wds-plan-desc">A structured, priced fleet offer.</p>
            </div>
            <div className="wds-plan-item">
              <span className="wds-plan-num">05</span>
              <span className="wds-plan-title">Service pages</span>
              <p className="wds-plan-desc">Individual pages for each core service, built for search.</p>
            </div>
            <div className="wds-plan-item">
              <span className="wds-plan-num">06</span>
              <span className="wds-plan-title">SEO architecture</span>
              <p className="wds-plan-desc">Four landing pages targeting high-intent KZN fleet searches.</p>
            </div>
            <div className="wds-plan-item">
              <span className="wds-plan-num">07</span>
              <span className="wds-plan-title">Mobile-first conversion</span>
              <p className="wds-plan-desc">Site rebuilt to convert on a phone, not just a desktop.</p>
            </div>
            <div className="wds-plan-item">
              <span className="wds-plan-num">08</span>
              <span className="wds-plan-title">Lead capture system</span>
              <p className="wds-plan-desc">Qualification flow separating fleet from retail enquiries.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="wds-section wds-section--wash" aria-labelledby="outcome-heading">
        <div className="wds-inner">
          <div className="wds-label"><span className="wds-label-bar" />If This Were Built</div>
          <h2 className="wds-h2" id="outcome-heading">What the concept is designed to produce.</h2>

          <div className="wds-outcome-block">
            <span className="wds-outcome-title">Fleet pipeline open.</span>
            <p className="wds-outcome-body">A dedicated path for fleet clients with a clear offer and a conversion flow built for that buyer, not the retail customer.</p>
          </div>
          <div className="wds-outcome-block">
            <span className="wds-outcome-title">SEO foundation laid.</span>
            <p className="wds-outcome-body">Four pages targeting searches like &quot;fleet maintenance Durban&quot; and &quot;vehicle servicing KZN,&quot; searches with commercial intent the existing site captures none of.</p>
          </div>
          <div className="wds-outcome-block">
            <span className="wds-outcome-title">Credibility gap closed.</span>
            <p className="wds-outcome-body">A site that shows Canopy Courier as a serious fleet operator, not a walk-in shop that also does fleet work on the side.</p>
          </div>

          <p className="wds-disclaimer wds-disclaimer--lg">Projected upside modelled at R1M to R2M per year across fleet contracts, SEO traffic, and improved retail conversion at conservative volumes. This is a projection from the pitch. Not a measured result.</p>
        </div>
      </section>

      <section className="wds-closing" aria-labelledby="closing-heading">
        <h2 className="wds-closing-h2" id="closing-heading">This is the thinking ADA brings to every project.</h2>
        <p className="wds-closing-body">The diagnostic and concept work done for Canopy Courier is the same process applied to every engagement. Find the gap. Fix the foundation. Build on top of what the business has actually earned.</p>
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="wds-closing-btn">Start a conversation →</a>
      </section>

      <footer className="wds-footer">
        <Link href="/ada" className="wds-footer-logo">ADA<span>.</span></Link>
        <div className="wds-footer-links">
          <Link href="/ada">Our work</Link>
          <Link href="/ada#pricing">Pricing</Link>
          <Link href="/ada/afripact-civils">Case study</Link>
          <Link href="/ada/contact">Contact</Link>
        </div>
        <div className="wds-footer-reg">Avalon Capital Group (Pty) Ltd · Reg. 2025/671885/07</div>
      </footer>
    </div>
  );
}
