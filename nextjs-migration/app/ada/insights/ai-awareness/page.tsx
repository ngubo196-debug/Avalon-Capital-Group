import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Why AI Makes Your Website More Valuable, Not Less | ADA',
  description: "AI doesn't replace websites. It raises the stakes for having a good one. Here is what that means for your business in 2026.",
  alternates: { canonical: 'https://www.avaloncapitalgroup.co.za/ada/insights/ai-awareness' },
};

const WHATSAPP_LINK = "https://wa.me/27712205313?text=Hi%20Luyanda%2C%20I%27d%20like%20to%20discuss%20a%20project%20with%20ADA.";

export default function AIAwareness() {
  return (
    <div id="page-blog-ai-awareness" className="page ada-section" role="main">
      <style suppressHydrationWarning>{`
        .wds-back { font-family: DM Sans, sans-serif; font-size: 13px; color: var(--ada-accent); text-decoration: none; display: inline-block; margin-bottom: 32px; }
        .wds-back:hover { text-decoration: underline; }
        .wds-label { font-family: DM Sans, sans-serif; font-size: 11px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: var(--ada-accent); margin-bottom: 20px; }
        .wds-label-bar { display: inline-block; width: 20px; height: 2px; background: var(--ada-accent); vertical-align: middle; margin-right: 10px; }
        .wds-h1 { font-family: Bodoni Moda, Cormorant Garamond, serif; font-weight: 400; font-size: clamp(38px, 4.4vw, 62px); line-height: 1.12; color: var(--ada-ink); margin: 0; }
        .wds-byline { font-family: DM Sans, sans-serif; font-size: 13px; letter-spacing: 0.05em; color: var(--ada-ink-muted); margin: 20px 0 0; }
        .wds-h2 { font-family: Bodoni Moda, Cormorant Garamond, serif; font-weight: 500; font-size: clamp(24px, 2.5vw, 36px); line-height: 1.2; color: var(--ada-ink); margin: 0 0 20px; }
        .wds-h2 a { color: var(--ada-accent); text-decoration: underline; }
        .wds-body { font-family: DM Sans, sans-serif; font-size: 17px; font-weight: 300; line-height: 1.85; color: var(--ada-ink-soft); margin: 0; }
        .wds-body strong { font-weight: 600; color: var(--ada-ink); }
        .wds-body a { color: var(--ada-accent); font-weight: 600; }
        .wds-body + .wds-body { margin-top: 20px; }
        .wds-hero { background: var(--ada-white); padding: calc(68px + 5rem) 3.5rem 5rem; }
        .wds-section { padding: 5rem 3.5rem; background: var(--ada-white); }
        .wds-inner { max-width: 760px; margin: 0 auto; }
        .wds-quote { border-left: 3px solid var(--ada-accent); padding-left: 1.5rem; margin: 2.5rem 0; }
        .wds-quote p { font-family: Bodoni Moda, Cormorant Garamond, serif; font-style: italic; font-size: clamp(18px, 2.2vw, 24px); font-weight: 400; color: var(--ada-ink); line-height: 1.5; margin: 0; }
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
          <div className="wds-label"><span className="wds-label-bar" />Market Insight · Anchor Piece</div>
          <h1 className="wds-h1">The AI awareness cycle: why your website is about to become your most valuable business asset</h1>
          <p className="wds-byline">By Luyanda Ngubo · ADA · Durban, KZN</p>
        </div>
      </section>

      <section className="wds-section" aria-labelledby="ai-why-now">
        <div className="wds-inner">
          <h2 className="wds-h2" id="ai-why-now">Why websites? Why now?</h2>
          <p className="wds-body">Websites aren&apos;t new. But their role has changed completely. For twenty years, a website was a brochure, a business card, a checkbox. Now it&apos;s something else entirely. It has become the conversion home base of the internet, and four technical forces are driving that shift.</p>
        </div>
      </section>

      <section className="wds-section" aria-labelledby="ai-force1">
        <div className="wds-inner">
          <h2 className="wds-h2" id="ai-force1">Force 1 - AI-driven search</h2>
          <p className="wds-body">Search is no longer just links. It&apos;s answers. AI summarises, assists with responses, and creates zero-click experiences. So a website is no longer a place people browse. It&apos;s a place people decide. When they land, they&apos;re already halfway convinced or halfway sceptical. The website has one job: convert trust into action.</p>
        </div>
      </section>

      <section className="wds-section" aria-labelledby="ai-force2">
        <div className="wds-inner">
          <h2 className="wds-h2" id="ai-force2">Force 2 - The rise of <Link href="/ada/insights/ai-websites">AEO</Link></h2>
          <p className="wds-body">It&apos;s not just SEO anymore. It&apos;s Answer Engine Optimisation: structured pages, clean FAQs, authority signals, proof blocks, clarity over cleverness. Businesses are waking up to the fact that if AI answers questions for customers, their website needs to be a place AI points to. That is distribution logic. And most businesses haven&apos;t built for it yet.</p>
        </div>
      </section>

      <section className="wds-section" aria-labelledby="ai-force3">
        <div className="wds-inner">
          <h2 className="wds-h2" id="ai-force3">Force 3 - Landing page economics</h2>
          <p className="wds-body">Modern growth isn&apos;t built on one homepage. It&apos;s built on one page per offer, one page per audience, one page per campaign, one page per channel. Businesses now need website systems, not websites. And that creates demand: not for designers, but for operators who can build conversion infrastructure.</p>
        </div>
      </section>

      <section className="wds-section" aria-labelledby="ai-force4">
        <div className="wds-inner">
          <h2 className="wds-h2" id="ai-force4">Force 4 - Platforms are training the market</h2>
          <p className="wds-body">When Wix, Webflow, Framer, and Shopify all push AI website building into the mainstream, that&apos;s not a tech trend. It&apos;s market conditioning. Business owners now think &apos;AI websites are normal&apos;, which changes expectations, and expectations change spending. These cycles are not about innovation. They are about perception shifts. The market moves when perception shifts from &apos;that&apos;s interesting&apos; to &apos;we can&apos;t ignore this anymore.&apos;</p>
        </div>
      </section>

      <section className="wds-section" aria-labelledby="ai-means">
        <div className="wds-inner">
          <h2 className="wds-h2" id="ai-means">What this actually means</h2>
          <p className="wds-body">Right now, businesses feel pressure to modernise. Pressure to convert better. Pressure to look credible and keep up. They don&apos;t say &apos;we need AI.&apos; They say &apos;we need a better website.&apos; And that is how awareness shows up in the real world.</p>
          <p className="wds-body">AI has not changed how websites are built. It has changed what websites are responsible for. They are no longer informational, passive, or optional. They are now revenue engines, trust machines, and conversion hubs. The website is where AI becomes visible. Visible value is what sells.</p>
          <p className="wds-body">This pattern has been seen in every emerging market. Money never flows to the deepest tech or the smartest tools. It flows to the clearest outcome, the easiest win, the most obvious upgrade. Right now, that upgrade is: my website looks sharper, converts better, and feels modern.</p>
        </div>
      </section>

      <section className="wds-section" aria-labelledby="ai-implication">
        <div className="wds-inner">
          <h2 className="wds-h2" id="ai-implication">The strategic implication for your business</h2>
          <p className="wds-body">If your website was built more than two years ago, it was built for a different internet. One where people browsed. One where being found was enough. One where a contact page counted as a conversion strategy.</p>
          <p className="wds-body">That internet is gone. The businesses winning right now aren&apos;t the ones with the biggest budgets or the most followers. They&apos;re the ones whose websites do the work: qualifying visitors, building trust, and converting attention into revenue before anyone picks up a phone.</p>
          <div className="wds-quote">
            <p>The most obvious upgrade right now is a website that looks sharper, converts better, and feels modern. That&apos;s not a design project. That&apos;s a revenue decision.</p>
          </div>
        </div>
      </section>

      <section className="wds-section" aria-labelledby="closing-heading">
        <div className="wds-inner">
          <div className="wds-label"><span className="wds-label-bar" />Ready To Act On This?</div>
          <h2 className="wds-h2" id="closing-heading">Start a conversation.</h2>
          <p className="wds-body">One conversation is enough to know if this is the right fit.</p>
          <Link href="/ada/web-design-construction-kzn" className="wds-case-link">See how ADA builds for established KZN businesses →</Link>
          <div>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="wds-cta-btn">Start a conversation →</a>
          </div>
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
