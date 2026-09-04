import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Websites for Construction Companies in Pietermaritzburg | ADA',
  description: 'Your construction business is based in PMB. Your website should be winning you work here. ADA builds sites for established KZN contractors.',
  alternates: { canonical: 'https://www.avaloncapitalgroup.co.za/ada/web-design-pietermaritzburg' },
};

const WHATSAPP_LINK = "https://wa.me/27712205313?text=Hi%20Luyanda%2C%20I%27d%20like%20to%20discuss%20a%20project%20with%20ADA.";

const faqItems = [
  {
    question: 'How much does a website cost in Pietermaritzburg?',
    answer: 'The honest answer is that it depends on what your business actually needs. Most agencies will not tell you that upfront because they want you in a conversation before they name a number. At ADA, our Foundation build starts at R18,500 once-off. Our Growth revenue system, which includes full SEO architecture, is R34,000 once-off or R12,500 a month. Split payments are available on either tier. You know the scope and the cost before anything begins. No retainer traps, no hidden extras.',
  },
  {
    question: 'How long does it take to build a website with ADA?',
    answer: 'From brief to live, typically two to four weeks depending on how quickly content and approvals flow. We do not disappear for six weeks and resurface with something that needs reworking. The process is structured: audit, strategy, build, launch. You know what is happening at every stage, and we move fast because we have a clear system rather than a vague process.',
  },
  {
    question: 'Will my new website rank on Google?',
    answer: 'Only if it is built to. Most websites are not. We build every site with SEO architecture baked in from day one: proper page structure, schema markup, Core Web Vitals optimised, and Google Search Console configured at launch. Pietermaritzburg is a market where most businesses have weak digital foundations. A properly built site starts competing from the moment it goes live.',
  },
  {
    question: 'Do I need a website if I already have a Facebook page?',
    answer: 'Facebook is rented land. You do not control it, you do not own the audience, and if the algorithm changes or the platform shifts, your visibility goes with it. A website is an asset you own. It works around the clock, it builds credibility with every person who finds you, and unlike a Facebook page, it compounds in value over time. For most PMB businesses, their website is the highest-leverage piece of digital infrastructure they can invest in.',
  },
  {
    question: 'What makes ADA different from other web designers in Pietermaritzburg?',
    answer: 'We are not a design studio. We build revenue systems. Every decision, the structure, the copy, the conversion flow, the SEO architecture, is made around one question: what does this page need to make someone do? We also come from Avalon Capital Group, which means we understand business, not just marketing. And we are transparent: our own site\'s Search Console data is public in our case study, so you can see exactly how we measure what we build.',
  },
  {
    question: 'Can ADA handle ongoing SEO after the website is built?',
    answer: 'Yes. The website build is the foundation. What happens next, content, local SEO signals, ranking for more searches over time, is where our Growth and Authority tiers come in. We can run the full search visibility programme after launch, or hand over a site that is already structured correctly so you can build on it yourself. Either way, you are not starting from a broken foundation.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Web Design for Construction Companies in Pietermaritzburg',
  description: 'Web design for established construction and contracting businesses in Pietermaritzburg, Hilton, Howick and the KZN Midlands, built for search visibility and lead generation.',
  provider: {
    '@type': 'Organization',
    name: 'ADA — Asset Development Automation',
    url: 'https://www.avaloncapitalgroup.co.za/ada',
    parentOrganization: {
      '@type': 'Organization',
      name: 'Avalon Capital Group',
      url: 'https://www.avaloncapitalgroup.co.za',
    },
  },
  areaServed: [
    { '@type': 'City', name: 'Pietermaritzburg' },
    { '@type': 'State', name: 'KwaZulu-Natal' },
  ],
  serviceType: 'Web Design',
};

export default function WebDesignPietermaritzburg() {
  return (
    <div id="page-web-design-pietermaritzburg" className="page ada-section" role="main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <style suppressHydrationWarning>{`
        .wds-back { font-family: DM Sans, sans-serif; font-size: 13px; color: var(--ada-accent); text-decoration: none; display: inline-block; margin-bottom: 32px; }
        .wds-back:hover { text-decoration: underline; }
        .wds-label { font-family: DM Sans, sans-serif; font-size: 11px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: var(--ada-accent); margin-bottom: 20px; }
        .wds-h1 { font-family: Bodoni Moda, Cormorant Garamond, serif; font-weight: 400; font-size: clamp(38px, 4.4vw, 62px); line-height: 1.12; color: var(--ada-ink); max-width: 820px; margin: 0; }
        .wds-h2 { font-family: Bodoni Moda, Cormorant Garamond, serif; font-weight: 500; font-size: clamp(28px, 3vw, 42px); line-height: 1.2; color: var(--ada-ink); margin: 0 0 24px; }
        .wds-body { font-family: DM Sans, sans-serif; font-size: 17px; font-weight: 300; line-height: 1.75; color: var(--ada-ink-soft); max-width: 720px; margin: 0; }
        .wds-body strong { font-weight: 600; color: var(--ada-ink); }
        .wds-body + .wds-body { margin-top: 20px; }
        .wds-hero { background: var(--ada-white); padding: calc(68px + 6rem) 3.5rem 6rem; }
        .wds-section { padding: 6rem 3.5rem; }
        .wds-section--white { background: var(--ada-white); }
        .wds-section--wash { background: var(--ada-wash); }
        .wds-inner { max-width: 1160px; margin: 0 auto; }
        .wds-case-link { display: block; margin-top: 1.5rem; font-family: DM Sans, sans-serif; font-size: 14px; font-weight: 600; color: var(--ada-accent); text-decoration: none; }
        .wds-case-link:hover { text-decoration: underline; }
        .wds-closing { background: var(--ada-accent); padding: 6rem 3.5rem; text-align: center; }
        .wds-closing-h2 { font-family: Bodoni Moda, Cormorant Garamond, serif; font-weight: 500; font-size: clamp(28px, 3vw, 42px); color: var(--ada-white); margin: 0 0 16px; }
        .wds-closing-body { font-family: DM Sans, sans-serif; font-size: 16px; color: rgba(255,255,255,0.75); max-width: 480px; margin: 0 auto 32px; }
        .wds-closing-btn { display: inline-block; background: var(--ada-white); color: var(--ada-accent); border-radius: 100px; padding: 14px 32px; font-family: DM Sans, sans-serif; font-size: 15px; font-weight: 500; text-decoration: none; border: 1px solid var(--ada-white); transition: background 0.2s ease, color 0.2s ease; }
        .wds-closing-btn:hover { background: transparent; color: var(--ada-white); }
        .wds-faq-item { border-top: 1px solid var(--ada-line); }
        .wds-faq-item:last-child { border-bottom: 1px solid var(--ada-line); }
        .wds-faq-summary { font-family: DM Sans, sans-serif; font-size: 16px; font-weight: 500; color: var(--ada-ink); padding: 1.25rem 0; cursor: pointer; list-style: none; }
        .wds-faq-summary::-webkit-details-marker { display: none; }
        .wds-faq-answer { font-family: DM Sans, sans-serif; font-size: 15px; font-weight: 300; color: var(--ada-ink-soft); padding-bottom: 1.25rem; line-height: 1.7; margin: 0; }
        .wds-related { padding: 3rem 3.5rem 0; }
        .wds-related-divider { border-top: 1px solid var(--ada-line); margin-bottom: 2rem; }
        .wds-related-links { display: flex; gap: 2rem; flex-wrap: wrap; padding-bottom: 3rem; }
        .wds-related-links a { font-family: DM Sans, sans-serif; font-size: 13px; color: var(--ada-accent); text-decoration: none; }
        .wds-related-links a:hover { text-decoration: underline; }
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
          .wds-related { padding: 2rem 1.5rem 0; }
          .wds-related-links { flex-direction: column; gap: 0.75rem; }
          .wds-footer { padding: 2.5rem 20px; flex-direction: column; text-align: center; }
        }
      `}</style>

      <section className="wds-hero">
        <div className="wds-inner">
          <Link href="/ada" className="wds-back">← Back to ADA</Link>
          <div className="wds-label">ADA — Asset Development Automation</div>
          <h1 className="wds-h1">Every week you are invisible online, a PMB competitor gets the contract instead.</h1>
        </div>
      </section>

      <section className="wds-section wds-section--wash" aria-labelledby="problem-heading">
        <div className="wds-inner">
          <div className="wds-label">The Problem</div>
          <h2 className="wds-h2" id="problem-heading">The tender shortlist starts online. You need to be on it.</h2>
          <p className="wds-body">PMB and the Msunduzi municipality run active procurement. Hillcrest, Howick, and the Upper Highway corridor have ongoing residential and commercial development. When a developer, project manager, or private client needs a contractor in this area, the first thing they do is search.</p>
          <p className="wds-body">If your business does not appear, or appears but looks smaller than it is, you are not on the shortlist. A competitor with a weaker track record but a stronger online presence gets the call instead.</p>
          <p className="wds-body">If your average contract is worth R100,000 and you miss even two qualified enquiries a month because prospects could not verify you, that is R200,000 a month going to someone else. In PMB. In your market. From work you were capable of doing.</p>
        </div>
      </section>

      <section className="wds-section wds-section--white" aria-labelledby="changes-heading">
        <div className="wds-inner">
          <div className="wds-label">What Changes</div>
          <h2 className="wds-h2" id="changes-heading">Your site becomes your strongest business development tool.</h2>
          <p className="wds-body">Completed projects, visible. CIDB credentials, front and centre. Service capability across PMB, Msunduzi, Hilton, Howick, and the Midlands, structured so the right clients find you before they find your competitors.</p>
          <p className="wds-body">The result: enquiries from prospects who already trust you before the first call, because the site handled that verification for them.</p>
        </div>
      </section>

      <section className="wds-section wds-section--wash" aria-labelledby="proof-heading">
        <div className="wds-inner">
          <div className="wds-label">Our Work</div>
          <h2 className="wds-h2" id="proof-heading">We have done this in KZN. Here is the evidence.</h2>
          <p className="wds-body">Afripact Civils had the completed projects and the credentials. Nothing online showed it. Within weeks of the rebuild, inspection requests were coming from people who had never heard of them before.</p>
          <Link href="/ada/afripact-civils" className="wds-case-link">Read the case study →</Link>
        </div>
      </section>

      <section className="wds-section wds-section--white" aria-labelledby="for-heading">
        <div className="wds-inner">
          <div className="wds-label">Who This Is For</div>
          <h2 className="wds-h2" id="for-heading">Built for established PMB contractors. Not for everyone.</h2>
          <p className="wds-body">Five or more years operating. Real completed projects. CIDB registered. Based in or regularly working across the Pietermaritzburg and Midlands area. Looking to win larger or better-quality work.</p>
          <p className="wds-body">If that is not you, this is not the right fit. Foundation starts at R18,500. Scope confirmed on the call.</p>
        </div>
      </section>

      <section className="wds-section wds-section--wash" aria-labelledby="faq-heading">
        <div className="wds-inner">
          <div className="wds-label">Common Questions</div>
          <h2 className="wds-h2" id="faq-heading">Web design in Pietermaritzburg, answered straight.</h2>
          <div>
            {faqItems.map((item) => (
              <details key={item.question} className="wds-faq-item">
                <summary className="wds-faq-summary">{item.question}</summary>
                <p className="wds-faq-answer">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="wds-section wds-section--white" aria-labelledby="cost-heading">
        <div className="wds-inner">
          <div className="wds-label">The Cost Of Waiting</div>
          <h2 className="wds-h2" id="cost-heading">Every week this stays unresolved is another shortlist you did not make.</h2>
          <p className="wds-body">R200,000 a month is what two missed enquiries cost a business your size. That number does not pause while you think about it.</p>
        </div>
      </section>

      <section className="wds-closing" aria-labelledby="closing-heading">
        <h2 className="wds-closing-h2" id="closing-heading">Ready to fix this before the next tender goes out?</h2>
        <p className="wds-closing-body">One conversation is enough to know if this is the right fit.</p>
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="wds-closing-btn">Start a conversation →</a>
      </section>

      <section className="wds-related">
        <div className="wds-inner">
          <div className="wds-related-divider"></div>
          <div className="wds-label">Explore More</div>
          <div className="wds-related-links">
            <Link href="/ada/web-design-construction-kzn">Web Design for KZN Construction</Link>
            <Link href="/ada/web-design-durban">Web Design Durban</Link>
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
