import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Canopy Courier Concept: A Fleet Revenue System That Never Went Live | ADA',
  description: 'ADA designed a full fleet revenue system for Canopy Courier. It was never built. This is the strategy, the architecture, and the numbers, documented honestly.',
  alternates: { canonical: 'https://www.avaloncapitalgroup.co.za/ada/insights/canopy-deep-dive' },
};

const WHATSAPP_LINK = "https://wa.me/27712205313?text=Hi%20Luyanda%2C%20I%27d%20like%20to%20discuss%20a%20project%20with%20ADA.";

export default function CanopyDeepDive() {
  return (
    <div id="page-blog-canopy-deep-dive" className="page ada-section" role="main">
      <style suppressHydrationWarning>{`
        .wds-back { font-family: DM Sans, sans-serif; font-size: 13px; color: var(--ada-accent); text-decoration: none; display: inline-block; margin-bottom: 32px; }
        .wds-back:hover { text-decoration: underline; }
        .wds-label { font-family: DM Sans, sans-serif; font-size: 11px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: var(--ada-accent); margin-bottom: 20px; }
        .wds-label-bar { display: inline-block; width: 20px; height: 2px; background: var(--ada-accent); vertical-align: middle; margin-right: 10px; }
        .wds-badge { display: flex; width: fit-content; align-items: center; background: #FEF3C7; border: 1px solid #F59E0B; color: #92400E; border-radius: 100px; padding: 5px 16px; font-family: DM Sans, sans-serif; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 1.5rem; }
        .wds-h1 { font-family: Bodoni Moda, Cormorant Garamond, serif; font-weight: 400; font-size: clamp(38px, 4.4vw, 62px); line-height: 1.12; color: var(--ada-ink); margin: 0; }
        .wds-byline { font-family: DM Sans, sans-serif; font-size: 13px; letter-spacing: 0.05em; color: var(--ada-ink-muted); margin: 20px 0 0; }
        .wds-hero-intro { margin-top: 24px; }
        .wds-h2 { font-family: Bodoni Moda, Cormorant Garamond, serif; font-weight: 500; font-size: clamp(24px, 2.5vw, 36px); line-height: 1.2; color: var(--ada-ink); margin: 0 0 20px; }
        .wds-body { font-family: DM Sans, sans-serif; font-size: 17px; font-weight: 300; line-height: 1.85; color: var(--ada-ink-soft); margin: 0; }
        .wds-body strong { font-weight: 600; color: var(--ada-ink); }
        .wds-body a { color: var(--ada-accent); font-weight: 600; }
        .wds-body + .wds-body { margin-top: 20px; }
        .wds-hero { background: var(--ada-white); padding: calc(68px + 5rem) 3.5rem 5rem; }
        .wds-section { padding: 5rem 3.5rem; background: var(--ada-white); }
        .wds-inner { max-width: 760px; margin: 0 auto; }
        .wds-quote { border-left: 3px solid var(--ada-accent); padding-left: 1.5rem; margin: 2.5rem 0; }
        .wds-quote p { font-family: Bodoni Moda, Cormorant Garamond, serif; font-style: italic; font-size: clamp(18px, 2.2vw, 24px); font-weight: 400; color: var(--ada-ink); line-height: 1.5; margin: 0; }
        .wds-card-grid { display: flex; flex-direction: column; gap: 1px; background: var(--ada-line); margin-top: 2.5rem; border: 1px solid var(--ada-line); border-radius: 12px; overflow: hidden; }
        .wds-card { background: var(--ada-white); padding: 2rem; }
        .wds-card-title { font-family: Bodoni Moda, Cormorant Garamond, serif; font-size: 20px; font-weight: 500; color: var(--ada-ink); margin-bottom: 0.75rem; }
        .wds-card-body { font-family: DM Sans, sans-serif; font-size: 14px; font-weight: 300; line-height: 1.75; color: var(--ada-ink-soft); }
        .wds-num-list { margin-top: 2.5rem; border-top: 1px solid var(--ada-line); }
        .wds-num-row { display: flex; gap: 2rem; align-items: flex-start; padding: 2rem 0; border-bottom: 1px solid var(--ada-line); }
        .wds-num { font-family: Bodoni Moda, Cormorant Garamond, serif; font-size: 28px; font-weight: 400; color: var(--ada-accent); opacity: 0.5; flex-shrink: 0; width: 44px; line-height: 1; }
        .wds-num-title { font-family: DM Sans, sans-serif; font-size: 16px; font-weight: 600; color: var(--ada-ink); margin-bottom: 0.5rem; }
        .wds-num-body { font-family: DM Sans, sans-serif; font-size: 14px; font-weight: 300; line-height: 1.75; color: var(--ada-ink-soft); }
        .wds-case-link { display: block; margin-top: 1.5rem; font-family: DM Sans, sans-serif; font-size: 14px; font-weight: 600; color: var(--ada-accent); text-decoration: none; letter-spacing: 0.04em; }
        .wds-case-link:hover { text-decoration: underline; }
        .wds-cta-btn { display: inline-block; background: var(--ada-accent); color: #FFFFFF !important; border-radius: 100px; padding: 14px 32px; font-family: DM Sans, sans-serif; font-size: 15px; font-weight: 500; text-decoration: none; border: 2px solid var(--ada-accent); transition: background 0.2s ease, color 0.2s ease; margin-top: 8px; }
        .wds-cta-btn:hover { background: var(--ada-white); color: var(--ada-accent) !important; }
        .wds-footer { background: var(--ada-ink); padding: 3rem 3.5rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 24px; }
        .wds-footer-logo { font-family: Bodoni Moda, Cormorant Garamond, serif; font-size: 16px; font-weight: 600; color: #FFFFFF !important; text-decoration: none; }
        .wds-footer-logo span { color: var(--ada-accent); }
        .wds-footer-links { display: flex; gap: 24px; flex-wrap: wrap; }
        .wds-footer-links a { font-family: DM Sans, sans-serif; font-size: 13px; color: rgba(255,255,255,0.45); text-decoration: none; transition: color 0.2s ease; }
        .wds-footer-links a:hover { color: var(--ada-white); }
        .wds-footer-reg { font-family: DM Sans, sans-serif; font-size: 12px; color: rgba(255,255,255,0.3); width: 100%; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.1); margin-top: 4px; }
        @media (max-width: 768px) {
          .wds-hero { padding: calc(68px + 3.5rem) 1.5rem 3.5rem; }
          .wds-section { padding: 3.5rem 1.5rem; }
          .wds-footer { padding: 2.5rem 20px; flex-direction: column; text-align: center; }
        }
      `}</style>

      <section className="wds-hero">
        <div className="wds-inner">
          <Link href="/ada" className="wds-back">← Back to ADA</Link>
          <div className="wds-badge">Concept build - not a delivered engagement</div>
          <div className="wds-label"><span className="wds-label-bar" />Deep-dive</div>
          <h1 className="wds-h1">The Canopy Courier rebuild: a fleet revenue system that never went live</h1>
          <p className="wds-byline">By Luyanda Ngubo · ADA · Durban, KZN</p>
          <p className="wds-body wds-hero-intro">This one&apos;s honest: it never went live. A ground-level breakdown of the concept we built for a real business, Canopy Courier, and the specific decisions behind it. The R1M+ annual revenue potential is a projection from the pitch, not a measured result.</p>
          <Link href="/ada/canopy-courier" className="wds-case-link">See the full concept overview →</Link>
        </div>
      </section>

      <section className="wds-section" aria-labelledby="cdd-start">
        <div className="wds-inner">
          <h2 className="wds-h2" id="cdd-start">How it started</h2>
          <p className="wds-body">I went to Canopy Courier as a customer. Needed a canopy fitted. Good service, fast turnaround, clearly knew their product. The kind of business that survives on reputation and word of mouth: which is both a strength and a vulnerability.</p>
          <p className="wds-body">While I was there I looked at their digital presence. Clean enough website. Basic information. A contact number. But something was missing: actually, several things were missing: and they were costing the business significant revenue every single month without anyone noticing.</p>
        </div>
      </section>

      <section className="wds-section" aria-labelledby="cdd-found">
        <div className="wds-inner">
          <h2 className="wds-h2" id="cdd-found">What we found</h2>
          <p className="wds-body">The audit surfaced four specific gaps. Each one represented a different category of lost revenue.</p>
          <div className="wds-card-grid">
            <div className="wds-card">
              <div className="wds-card-title">No fleet positioning</div>
              <div className="wds-card-body">Construction firms, logistics companies, security fleets: high-volume repeat clients: had no way to find or engage Canopy Courier. Zero fleet pipeline despite being perfectly positioned to serve it.</div>
            </div>
            <div className="wds-card">
              <div className="wds-card-title">No conversion funnel</div>
              <div className="wds-card-body">A single &apos;Get a Quote&apos; button was losing the majority of interested visitors. No qualification, no follow-up structure, no path from enquiry to sale.</div>
            </div>
            <div className="wds-card">
              <div className="wds-card-title">Weak search presence</div>
              <div className="wds-card-body">Not ranking in the top positions for KZN canopy searches: invisible to high-intent buyers actively looking to spend right now.</div>
            </div>
            <div className="wds-card">
              <div className="wds-card-title">No authority positioning</div>
              <div className="wds-card-body">Nothing online said KZN&apos;s canopy specialists. Competitors with weaker service appeared more credible simply because they had claimed the digital space.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="wds-section" aria-labelledby="cdd-strategic">
        <div className="wds-inner">
          <h2 className="wds-h2" id="cdd-strategic">The strategic decision</h2>
          <p className="wds-body">The most important decision we made wasn&apos;t about design. It was about revenue architecture. Canopy Courier was serving two fundamentally different customer types: retail walk-ins and fleet managers: with one undifferentiated website that spoke to neither of them specifically.</p>
          <p className="wds-body">A retail customer needs speed and simplicity. They have one vehicle, they want it done today, they want a price. A fleet manager needs reliability, volume pricing, dedicated service, and documentation. These are completely different conversations, and they need completely different conversion paths.</p>
          <div className="wds-quote">
            <p>The single biggest revenue opportunity wasn&apos;t more traffic. It was a website that spoke differently to the two buyers already finding it.</p>
          </div>
        </div>
      </section>

      <section className="wds-section" aria-labelledby="cdd-build">
        <div className="wds-inner">
          <h2 className="wds-h2" id="cdd-build">The plan: decision by decision</h2>
          <p className="wds-body">Eight components, designed but never built. Here&apos;s the thinking behind the ones that mattered most.</p>
          <div className="wds-num-list">
            <div className="wds-num-row">
              <div className="wds-num">01</div>
              <div>
                <div className="wds-num-title">The dual-path homepage</div>
                <div className="wds-num-body">We restructured the homepage around two clear entry points. Retail visitors see: &apos;Need it fixed or installed today?&apos; Fleet visitors see: &apos;Managing multiple vehicles?&apos; Each path leads to a completely different offer and conversion flow. No visitor is confused about whether this business serves them.</div>
              </div>
            </div>
            <div className="wds-num-row">
              <div className="wds-num">02</div>
              <div>
                <div className="wds-num-title">The fleet money page</div>
                <div className="wds-num-body">This is the single highest-value page we built. It opens with fleet downtime costs: the specific pain a fleet manager feels: and moves through a structured argument for why Canopy Courier is the right partner. It closes on the Fleet Performance Package, a bundled offer that turns a one-off job into a managed service relationship. This page doesn&apos;t inform. It sells.</div>
              </div>
            </div>
            <div className="wds-num-row">
              <div className="wds-num">03</div>
              <div>
                <div className="wds-num-title">The Fleet Performance Package</div>
                <div className="wds-num-body">We structured a commercial offer that didn&apos;t previously exist. Priority turnaround, dedicated contact, bulk pricing, scheduled maintenance, emergency support, service records. Packaged and named. A fleet manager reading this isn&apos;t thinking about whether to use Canopy Courier: they&apos;re thinking about how to get this in front of their operations manager.</div>
              </div>
            </div>
            <div className="wds-num-row">
              <div className="wds-num">04</div>
              <div>
                <div className="wds-num-title">The SEO architecture</div>
                <div className="wds-num-body">Instead of one homepage trying to rank for everything and ranking for nothing, we built four dedicated landing pages each targeting a specific high-intent search: canopy repairs Durban, bakkie canopies for sale KZN, canopy fitment Durban, fleet canopy solutions SA. Each page is its own entry point for a buyer actively searching in that category.</div>
              </div>
            </div>
            <div className="wds-num-row">
              <div className="wds-num">05</div>
              <div>
                <div className="wds-num-title">Mobile conversion engineering</div>
                <div className="wds-num-body">A sticky call bar with WhatsApp, call, and quote buttons fixed at the bottom of every mobile screen. A floating WhatsApp button always visible. Segment-specific CTAs: retail gets same-day quote, fleet gets book a fleet assessment. Lead capture form with fleet-specific fields. Built for how the majority of South African web traffic actually behaves.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="wds-section" aria-labelledby="cdd-outcome">
        <div className="wds-inner">
          <h2 className="wds-h2" id="cdd-outcome">The intended outcome</h2>
          <p className="wds-body">If this plan were built, Canopy Courier would have a website that does more than exist. It would qualify visitors, separate retail from fleet, build trust before the phone rings, and drive enquiries around the clock. This is what the business would look like operating at the level it actually operates at.</p>
          <p className="wds-body">The revenue modelling tells the story we pitched, not a measured result. A single retail customer is worth R3,000 to R8,000. A single fleet client: one company with ten vehicles on a maintenance contract: would be worth R240,000 per year. Five fleet clients would be R1.2M annually. The website concept is the infrastructure that would make those fleet relationships possible.</p>
          <div className="wds-quote">
            <p>One fleet client would more than cover the entire cost of a project like this. Every fleet client after that would be compounding return on a one-time investment.</p>
          </div>
        </div>
      </section>

      <section className="wds-section" aria-labelledby="cdd-lesson">
        <div className="wds-inner">
          <h2 className="wds-h2" id="cdd-lesson">The broader lesson</h2>
          <p className="wds-body">Most businesses approaching a website rebuild are thinking about design. Better colours, a more modern layout, updated photos. Those things matter, but they&apos;re surface level. The real work is underneath: the strategic architecture, the offer clarity, the conversion paths, the trust signals.</p>
          <p className="wds-body">Canopy Courier didn&apos;t need a prettier website. They needed a smarter one. A website that understood their business model, identified the highest-value opportunity within it, and built the digital infrastructure to capture it. That&apos;s a different brief, and it produces a fundamentally different result.</p>
          <p className="wds-body">If you are reading this and wondering what your equivalent of the fleet opportunity might be, what revenue your current website is leaving untouched, that is exactly the conversation we start with.</p>
          <Link href="/ada/web-design-fleet-companies" className="wds-case-link">ADA builds for fleet companies →</Link>
          <Link href="/ada/audit" className="wds-case-link">Run the ADA diagnostic →</Link>
        </div>
      </section>

      <section className="wds-section" aria-labelledby="closing-heading">
        <div className="wds-inner">
          <div className="wds-label"><span className="wds-label-bar" />Ready To Act On This?</div>
          <h2 className="wds-h2" id="closing-heading">Start a conversation.</h2>
          <p className="wds-body">One conversation is enough to know if this is the right fit.</p>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="wds-cta-btn">Start a conversation →</a>
        </div>
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
