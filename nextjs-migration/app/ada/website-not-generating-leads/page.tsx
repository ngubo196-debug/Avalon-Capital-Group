import Link from 'next/link';
import ScrollReveal from '../../components/ScrollReveal';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Website Not Generating Leads? Here's Why | ADA",
  description: 'Your website gets traffic but not leads. See why, and what a system built to convert actually looks like. Durban and Pietermaritzburg businesses, book a call with ADA.',
  alternates: { canonical: 'https://www.avaloncapitalgroup.co.za/ada/website-not-generating-leads' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Website Conversion Diagnosis and Fix',
  description: 'Diagnosing why a website gets traffic but not leads, then fixing the messaging and structure so the same traffic converts, for established businesses in Durban and Pietermaritzburg.',
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
    { '@type': 'City', name: 'Pietermaritzburg' },
    { '@type': 'State', name: 'KwaZulu-Natal' },
  ],
  serviceType: 'Website Conversion Optimisation',
};

export default function WebsiteNotGeneratingLeads() {
  return (
    <div id="page-website-not-generating-leads" className="page ada-section" role="main">
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

        .wds-mech-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: var(--ada-line); border: 1px solid var(--ada-line); border-radius: 16px; overflow: hidden; margin-top: 3rem; }
        .wds-mech-item { background: var(--ada-white); padding: 2.25rem; }
        .wds-mech-title { display: block; font-family: DM Sans, sans-serif; font-size: 16px; font-weight: 600; color: var(--ada-ink); margin-bottom: 8px; }
        .wds-mech-desc { font-family: DM Sans, sans-serif; font-size: 14px; font-weight: 300; line-height: 1.75; color: var(--ada-ink-soft); margin: 0; }

        .wds-cta-btn { display: inline-block; background: var(--ada-accent); color: #FFFFFF !important; border-radius: 100px; padding: 14px 32px; font-family: DM Sans, sans-serif; font-size: 15px; font-weight: 500; text-decoration: none; border: 2px solid var(--ada-accent); transition: background 0.2s ease, color 0.2s ease; margin-top: 12px; }
        .wds-cta-btn:hover { background: var(--ada-white); color: var(--ada-accent) !important; }

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
          .wds-mech-grid { grid-template-columns: 1fr; }
          .wds-footer { padding: 2.5rem 20px; flex-direction: column; text-align: center; }
        }
      `}</style>

      <section className="wds-hero">
        <div className="wds-inner">
          <Link href="/ada" className="wds-back">← ADA</Link>
          <h1 className="wds-h1">Your website gets visitors. It&apos;s not turning them into leads.</h1>
          <p className="wds-body wds-hero-intro">Traffic is not the problem. What happens after someone lands on the page is.</p>
        </div>
      </section>

      <section className="wds-section wds-section--wash" aria-labelledby="outcome-heading">
        <div className="wds-inner">
          <div className="wds-label">The Outcome</div>
          <h2 className="wds-h2" id="outcome-heading">Fix the drop-off and the same traffic starts producing leads.</h2>
          <p className="wds-body">The traffic already exists. What&apos;s missing is what happens after someone arrives. Fix that, and enquiries go up without spending more on ads, content, or ranking work. The visitors you already have start becoming the leads you&apos;re already paying to attract.</p>
        </div>
      </section>

      <section className="wds-section wds-section--white" aria-labelledby="mechanism-heading">
        <div className="wds-inner">
          <div className="wds-label">How It Works</div>
          <h2 className="wds-h2" id="mechanism-heading">Diagnose the drop-off. Fix what&apos;s blocking it. Build it to keep working.</h2>
          <p className="wds-body">This is not guesswork. It is a specific process, done in order.</p>
          <div className="wds-mech-grid">
            <div className="wds-mech-item">
              <span className="wds-mech-title">Diagnose</span>
              <p className="wds-mech-desc">We find exactly where visitors stop. Analytics and Search Console show the drop-off point: which pages people leave from, what they never scroll to, where the message loses them.</p>
            </div>
            <div className="wds-mech-item">
              <span className="wds-mech-title">Fix messaging and structure</span>
              <p className="wds-mech-desc">The words and the layout usually cause the drop, not the visual design. We rewrite the message to say what the business does, who it&apos;s for, and what to do next. We restructure the page so the path to contact is short and obvious.</p>
            </div>
            <div className="wds-mech-item">
              <span className="wds-mech-title">Build it to keep working</span>
              <p className="wds-mech-desc">The fix is built into the site, not bolted on after. No plugin, no popup, no one-time patch. The structure keeps directing visitors to the next step long after we&apos;re done.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="wds-section wds-section--wash" aria-labelledby="boundaries-heading">
        <div className="wds-inner">
          <div className="wds-label">What This Isn&apos;t</div>
          <h2 className="wds-h2" id="boundaries-heading">Not a redesign for looks. Not a rankings guarantee.</h2>
          <p className="wds-body">This is not a visual refresh. A site can look better and still convert at the same rate. We only touch what affects whether a visitor becomes a lead.</p>
          <p className="wds-body">This is not a search ranking guarantee. Nobody can promise a position on Google. What we can fix is what happens after someone lands on the page, whether they arrived from search, ads, or a referral.</p>
          <p className="wds-body">This is not for every business. If your site gets no traffic at all, the problem is visibility, not conversion, and this isn&apos;t the right fix. If you&apos;re not willing to change the words on the page, this won&apos;t help either.</p>
        </div>
      </section>

      <ScrollReveal delay={0}>
        <section className="wds-section wds-section--white" aria-labelledby="proof-heading">
          <div className="wds-inner">
            <div className="wds-label">Proof</div>
            <h2 className="wds-h2" id="proof-heading">We&apos;ve done this before. Afripact Civils is the case study.</h2>
            <p className="wds-body">Afripact Civils had real experience and a strong reputation, but a website that didn&apos;t prove it. Visitors had no way to confirm the business was legitimate before making contact. We rebuilt the messaging and the structure so the site answers that question immediately, before the conversation even starts.</p>
            <p className="wds-body">That is the same problem this page is about: a site that gets attention but doesn&apos;t convert it. Read the full <Link href="/ada/afripact-civils" style={{ color: 'var(--ada-accent)', textDecoration: 'none' }}>Afripact Civils case study</Link>.</p>
          </div>
        </section>
      </ScrollReveal>

      <section className="wds-section wds-section--wash" aria-labelledby="cta-heading">
        <div className="wds-inner">
          <div className="wds-label">Get Started</div>
          <h2 className="wds-h2" id="cta-heading">Ready to find out why your visitors aren&apos;t converting?</h2>
          <p className="wds-body">Book a call. We&apos;ll walk through what&apos;s happening on your own site and what it would take to fix it. Durban and Pietermaritzburg businesses welcome.</p>
          <Link href="/ada/contact" className="wds-cta-btn">Start a conversation →</Link>
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
