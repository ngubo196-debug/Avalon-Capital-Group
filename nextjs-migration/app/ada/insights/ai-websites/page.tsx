import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Do You Still Need a Website in 2026? Here Is Why It Matters More. | ADA',
  description: 'AI gets its answers from websites. If yours is weak or absent, you are invisible to AI and to the people it answers. Here is what to do about it.',
  alternates: { canonical: 'https://www.avaloncapitalgroup.co.za/ada/insights/ai-websites' },
};

const WHATSAPP_LINK = "https://wa.me/27712205313?text=Hi%20Luyanda%2C%20I%27d%20like%20to%20discuss%20a%20project%20with%20ADA.";

export default function AIWebsites() {
  return (
    <div id="page-blog-ai-websites" className="page ada-section" role="main">
      <style suppressHydrationWarning>{`
        .wds-back { font-family: DM Sans, sans-serif; font-size: 13px; color: var(--ada-accent); text-decoration: none; display: inline-block; margin-bottom: 32px; }
        .wds-back:hover { text-decoration: underline; }
        .wds-label { font-family: DM Sans, sans-serif; font-size: 11px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: var(--ada-accent); margin-bottom: 20px; }
        .wds-label-bar { display: inline-block; width: 20px; height: 2px; background: var(--ada-accent); vertical-align: middle; margin-right: 10px; }
        .wds-h1 { font-family: Bodoni Moda, Cormorant Garamond, serif; font-weight: 400; font-size: clamp(38px, 4.4vw, 62px); line-height: 1.12; color: var(--ada-ink); margin: 0; }
        .wds-byline { font-family: DM Sans, sans-serif; font-size: 13px; letter-spacing: 0.05em; color: var(--ada-ink-muted); margin: 20px 0 0; }
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
          <div className="wds-label"><span className="wds-label-bar" />Authority Piece</div>
          <h1 className="wds-h1">Why AI won&apos;t replace websites: it will make them more valuable</h1>
          <p className="wds-byline">By Luyanda Ngubo · ADA · Durban, KZN</p>
        </div>
      </section>

      <section className="wds-section" aria-labelledby="aiw-question">
        <div className="wds-inner">
          <h2 className="wds-h2" id="aiw-question">The question everyone is asking wrong</h2>
          <p className="wds-body">Since AI tools became mainstream, a version of the same question keeps coming up in business conversations: do we still need a website if AI can just answer questions for our customers? It sounds logical. If people can get answers directly from an AI assistant, why would they visit your website at all?</p>
          <p className="wds-body">The question misunderstands how AI actually works, and more importantly, where it gets its information from.</p>
        </div>
      </section>

      <section className="wds-section" aria-labelledby="aiw-source">
        <div className="wds-inner">
          <h2 className="wds-h2" id="aiw-source">Where AI gets its answers</h2>
          <p className="wds-body">AI assistants don&apos;t generate information from nothing. They synthesise it from sources: websites, published content, structured data across the internet. When someone asks an AI &apos;who are the best civil construction companies in KZN&apos; or &apos;where can I get a canopy fitted in Durban&apos;, the AI looks for businesses with clear, credible, well-structured digital presences to reference.</p>
          <p className="wds-body">A business with no website, a weak website, or a website with no structured content doesn&apos;t get referenced. It doesn&apos;t exist in the AI&apos;s answer. The businesses that show up are the ones that invested in their digital infrastructure.</p>
          <div className="wds-quote">
            <p>AI doesn&apos;t replace the need for a strong website. It raises the stakes for having one.</p>
          </div>
        </div>
      </section>

      <section className="wds-section" aria-labelledby="aiw-aeo">
        <div className="wds-inner">
          <h2 className="wds-h2" id="aiw-aeo">The shift from SEO to AEO</h2>
          <p className="wds-body">For the past two decades, the game was Search Engine Optimisation: getting Google to rank your website higher in search results. The principles were well understood: keywords, backlinks, page speed, mobile optimisation.</p>
          <p className="wds-body">That game hasn&apos;t disappeared, but a new one has been added alongside it. Answer Engine Optimisation is the practice of structuring your website so that AI systems can understand, trust, and reference it when answering questions relevant to your business.</p>
          <p className="wds-body">AEO requires clean structure, clear headings, specific and credible content, FAQ sections that directly answer common questions, and authority signals that tell AI systems this is a legitimate, trustworthy source. Most business websites have none of these things deliberately built in. The ones that do will increasingly dominate both traditional search and AI-driven discovery.</p>
        </div>
      </section>

      <section className="wds-section" aria-labelledby="aiw-valuable">
        <div className="wds-inner">
          <h2 className="wds-h2" id="aiw-valuable">Why your website becomes more valuable, not less</h2>
          <p className="wds-body">Think about what happens when AI becomes the primary way people discover businesses. Instead of ten blue links on a search results page where any business can show up, there&apos;s one AI answer: or a short list of two or three recommendations. The competition for that position is more intense, not less. And the businesses that win it are the ones with the strongest, most credible, most clearly structured digital presence.</p>
          <div className="wds-card-grid">
            <div className="wds-card">
              <div className="wds-card-title">AI needs sources</div>
              <div className="wds-card-body">Every AI answer comes from somewhere. A well-built website with clear, credible content becomes a source AI references. A weak website gets ignored entirely.</div>
            </div>
            <div className="wds-card">
              <div className="wds-card-title">Trust signals matter more</div>
              <div className="wds-card-body">AI systems evaluate credibility. Case studies, testimonials, structured content, clear offers: these aren&apos;t just for human visitors anymore. They signal trustworthiness to AI as well.</div>
            </div>
            <div className="wds-card">
              <div className="wds-card-title">Zero-click doesn&apos;t mean zero opportunity</div>
              <div className="wds-card-body">Even when AI answers a question directly, it often cites sources. Being the cited source: the business whose website provided the answer: is a more powerful position than ranking fifth on a search page.</div>
            </div>
            <div className="wds-card">
              <div className="wds-card-title">Early movers win</div>
              <div className="wds-card-body">Most businesses in KZN haven&apos;t started thinking about AEO. The businesses that build for it now will establish positions that are difficult to displace later. This is the same dynamic that played out with SEO fifteen years ago.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="wds-section" aria-labelledby="aiw-now">
        <div className="wds-inner">
          <h2 className="wds-h2" id="aiw-now">What this means for your business right now</h2>
          <p className="wds-body">The businesses that will win the AI era aren&apos;t the ones that adopt the most AI tools. They&apos;re the ones that build the clearest, most credible, most structured digital presence: so that when AI systems are looking for answers to give their users, your business is the obvious reference.</p>
          <p className="wds-body">That means a website with a clear offer, structured content, real proof of your work, and answers to the questions your prospects are actually asking. Not a brochure. Not a placeholder. A digital asset that works in your favour whether a human or an AI is evaluating it.</p>
          <Link href="/ada/insights/ai-awareness" className="wds-case-link">Related: The AI awareness cycle →</Link>
          <Link href="/ada/audit" className="wds-case-link" style={{ marginTop: '0.5rem' }}>Run the ADA diagnostic →</Link>
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
