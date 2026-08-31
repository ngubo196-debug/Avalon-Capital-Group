import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Why Most Business Websites Don't Generate Leads | ADA",
  description: 'A non-converting website is not neutral. It is actively costing you clients. Here are the five reasons it happens and what to fix first.',
  alternates: { canonical: 'https://www.avaloncapitalgroup.co.za/ada/insights/why-websites-fail' },
};

const WHATSAPP_LINK = "https://wa.me/27712205313?text=Hi%20Luyanda%2C%20I%27d%20like%20to%20discuss%20a%20project%20with%20ADA.";

export default function WhyWebsitesFail() {
  return (
    <div id="page-blog-why-websites-fail" className="page ada-section" role="main">
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
          <div className="wds-label"><span className="wds-label-bar" />The Problem</div>
          <h1 className="wds-h1">Why most business websites don&apos;t make money</h1>
          <p className="wds-byline">By Luyanda Ngubo · ADA · Durban, KZN</p>
        </div>
      </section>

      <section className="wds-section" aria-labelledby="wwf-brochure">
        <div className="wds-inner">
          <h2 className="wds-h2" id="wwf-brochure">The brochure era hangover</h2>
          <p className="wds-body">Most business websites were built with one goal: exist. Get online, put your services up, add a contact page, done. That was the standard for twenty years, and for twenty years it was good enough. Having a website at all put you ahead of businesses that didn&apos;t.</p>
          <p className="wds-body">That standard is dead. Being online is no longer a differentiator. Every competitor you have is online. The question is no longer whether your website exists: it&apos;s whether it works. And for most businesses, the honest answer is no.</p>
        </div>
      </section>

      <section className="wds-section" aria-labelledby="wwf-costs">
        <div className="wds-inner">
          <h2 className="wds-h2" id="wwf-costs">What a non-performing website actually costs</h2>
          <p className="wds-body">Most business owners think a bad website is a neutral thing: it doesn&apos;t help, but it doesn&apos;t hurt. That&apos;s wrong. A website that doesn&apos;t convert is actively costing you money every single day. Here&apos;s how:</p>
          <div className="wds-card-grid">
            <div className="wds-card">
              <div className="wds-card-title">Silent visitor loss</div>
              <div className="wds-card-body">Someone finds you, lands on your site, doesn&apos;t understand your offer clearly, and leaves. They don&apos;t call. They don&apos;t email. They just go to a competitor whose website made more sense. You never know they were there.</div>
            </div>
            <div className="wds-card">
              <div className="wds-card-title">Credibility erosion</div>
              <div className="wds-card-body">In industries where trust matters: construction, professional services, high-ticket sales: a weak website doesn&apos;t just fail to convert. It actively damages your credibility. Prospects see it and lower their perception of your business before you&apos;ve said a word.</div>
            </div>
            <div className="wds-card">
              <div className="wds-card-title">Wasted marketing spend</div>
              <div className="wds-card-body">Every rand you spend on ads, SEO, or social media sends people to your website. If the website doesn&apos;t convert, that spend is wasted. You&apos;re paying to drive traffic into a leaking bucket.</div>
            </div>
            <div className="wds-card">
              <div className="wds-card-title">Missed referral conversions</div>
              <div className="wds-card-body">Even warm referrals, people sent to you by someone who knows you, check your website before reaching out. A weak site loses deals that were already halfway closed.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="wds-section" aria-labelledby="wwf-five">
        <div className="wds-inner">
          <h2 className="wds-h2" id="wwf-five">The five reasons websites don&apos;t convert</h2>
          <p className="wds-body">After rebuilding websites for businesses across KZN, the same problems appear over and over. They&apos;re not random. They&apos;re predictable. And they&apos;re fixable.</p>
          <div className="wds-num-list">
            <div className="wds-num-row">
              <div className="wds-num">01</div>
              <div>
                <div className="wds-num-title">No clear offer</div>
                <div className="wds-num-body">Visitors land on the homepage and can&apos;t immediately answer: what does this business do, who is it for, and why should I care? If the answer takes more than five seconds to find, most people won&apos;t wait.</div>
              </div>
            </div>
            <div className="wds-num-row">
              <div className="wds-num">02</div>
              <div>
                <div className="wds-num-title">No conversion path</div>
                <div className="wds-num-body">&apos;Contact us&apos; at the bottom of a page after three paragraphs of company history is not a conversion path. Every page needs to guide a specific decision.</div>
              </div>
            </div>
            <div className="wds-num-row">
              <div className="wds-num">03</div>
              <div>
                <div className="wds-num-title">No trust architecture</div>
                <div className="wds-num-body">Trust doesn&apos;t happen by accident. It&apos;s built through specific elements: case studies, testimonials, process transparency, credentials, social proof. Most websites have none of these structured deliberately. They assume the visitor will trust them. Visitors don&apos;t.</div>
              </div>
            </div>
            <div className="wds-num-row">
              <div className="wds-num">04</div>
              <div>
                <div className="wds-num-title">Built for the owner, not the buyer</div>
                <div className="wds-num-body">Most websites describe the business from the inside out: our story, our team, our values. Buyers don&apos;t care about any of that until they know you can solve their problem. The website should be about them, not you.</div>
              </div>
            </div>
            <div className="wds-num-row">
              <div className="wds-num">05</div>
              <div>
                <div className="wds-num-title">No mobile conversion</div>
                <div className="wds-num-body">In South Africa, over 70% of web traffic is mobile. A website that isn&apos;t built for mobile-first conversion isn&apos;t built for your market. Slow load times, small tap targets, horizontal scrolling: these kill conversions silently.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="wds-section" aria-labelledby="wwf-nothing">
        <div className="wds-inner">
          <h2 className="wds-h2" id="wwf-nothing">The cost of doing nothing</h2>
          <p className="wds-body">The businesses that fix these problems don&apos;t just see better website metrics. They see more enquiries, better quality leads, shorter sales cycles, and higher close rates. Because the website is doing the pre-qualification work before anyone picks up the phone.</p>
          <p className="wds-body">The businesses that don&apos;t fix them keep spending on marketing that doesn&apos;t convert, keep losing deals to competitors with stronger digital presence, and keep wondering why growth feels harder than it should.</p>
          <div className="wds-quote">
            <p>A website that doesn&apos;t convert isn&apos;t a neutral asset. It&apos;s a liability dressed up as a business card.</p>
          </div>
          <p className="wds-body">We have solved all of these problems: for <Link href="/ada/afripact-civils">Afripact Civils</Link>, for <Link href="/ada/canopy-courier">Canopy Courier</Link>, and for every business we have worked with.</p>
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
