import Link from 'next/link';
import Nav from '../components/Nav';
import AdaParticleMesh from '../components/AdaParticleMesh';
import AdaReveal from '../components/AdaReveal';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ADA | Websites That Rank & Convert | South Africa',
  description: 'ADA builds conversion-ready websites for South African businesses. Design, SEO, and the full system - so your site ranks on Google and turns visitors into paying clients.',
  alternates: { canonical: 'https://www.avaloncapitalgroup.co.za/ada' },
};

const WHATSAPP_LINK = "https://wa.me/27712205313?text=Hi%20Luyanda%2C%20I%27d%20like%20to%20discuss%20a%20project%20with%20ADA.";

export default function ADA() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What does ADA actually build - websites, SEO, or both?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'ADA builds revenue systems. The deliverable is digital infrastructure - a website that ranks on Google, converts the visitors it attracts, and keeps working while you focus on running your business. Web design and SEO are components of that system, not separate services. A website without search visibility is a brochure nobody finds. Search visibility without a converting website is traffic that leaves. ADA builds both as one coherent system because that is the only way either one actually works.',
                },
              },
              {
                '@type': 'Question',
                name: 'How long does a website project take?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'It depends entirely on the scope. A focused credibility build can be live in two to three days. A full revenue system with SEO architecture, multiple conversion paths, and content infrastructure takes four to six weeks. Every project is scoped before anything begins, so you know the timeline before we start, not after. ADA does not disappear for months and reappear with a finished product. You know what is being built, when each stage completes, and what comes next.',
                },
              },
              {
                '@type': 'Question',
                name: 'What does a website from ADA cost?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'ADA has three fixed-price tiers. Foundation starts at R18,500 for a credibility build - a fast, conversion-ready website with search visibility and a Google presence that works around the clock. Growth is R34,000 once-off or R12,500 per month on a three-month minimum, covering a full revenue system with SEO architecture, competitor analysis, social infrastructure, schema markup, and analytics. Authority is scoped per client for businesses ready to dominate their category. Foundation and Growth are fixed scope and fixed price - you know exactly what you are getting before anything begins.',
                },
              },
              {
                '@type': 'Question',
                name: 'What is AI automation and does my business need it?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'AI automation means giving repetitive tasks in your business to a system that executes them the same way, every time, without fatigue, error, or the need for management. The work you do the same way on Monday as you do on Friday - qualifying leads, following up with prospects, generating documents, routing enquiries, compiling reports - can be handled by an automated system built specifically around your process. If you are doing the same thing more than three times a week, there is a version of that task an AI system can handle better than a person can. The question is not whether your business needs it. The question is which parts of your operation are costing you time that could be running automatically right now.',
                },
              },
              {
                '@type': 'Question',
                name: 'How is ADA different from a standard web design agency?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Most agencies build websites. ADA builds the system behind the website. The difference is what the work is measured against. A standard agency measures success by whether the site looks good and launches on time. ADA measures success by what the site generates after it launches - enquiries, ranked search positions, qualified leads. Every decision in the build is made against that standard, not against an aesthetic preference or a template. The second difference is how we operate. ADA is AI-augmented, which means the speed and depth of work a traditional agency delivers with a full team, we deliver leaner and faster. You are not paying for headcount. You are paying for outcomes. The third difference is where we come from. ADA is built off the back of Avalon Capital Group, which means we understand business structure, deal dynamics, and what operators actually need from their digital presence - not just what looks good in a portfolio.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do you work with businesses outside Durban and KZN?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. ADA works with businesses across South Africa and internationally. The geographic positioning around Durban and KwaZulu-Natal is deliberate - it is where we have the deepest market knowledge and where local SEO work compounds fastest. But the work itself has no borders. If you are a South African business in Johannesburg, Cape Town, or Pretoria, or an international operator who needs a team that understands the South African market, the engagement works the same way.',
                },
              },
              {
                '@type': 'Question',
                name: 'What happens after the website launches?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'The launch is the beginning, not the delivery. Once the foundation is live, ADA stays in the build. The first thirty days focus on indexing confirmation, search console monitoring, and any conversion adjustments based on how real visitors are moving through the site. From there, the engagement moves into the growth layer - SEO content, targeted outreach, or campaign support, depending on what your business needs most to generate momentum. You are not handed a website and wished good luck. Every client gets a clear handover brief, ongoing support for technical issues, and a roadmap for what comes next. The relationship does not end at launch. That is when the compounding starts.',
                },
              },
              {
                '@type': 'Question',
                name: 'Where do I start if I am not sure what I need?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Start with a conversation. You do not need a brief, a budget, or a clear idea of what you want. Tell us what your business does, what is not working about your current digital presence, and what you are trying to achieve. We will ask the right questions, tell you honestly what we think the problem is, and map out what it would take to fix it. If we are the right fit, you will know within the first conversation. If we are not, we will tell you that too. The free website audit is also a clean starting point - thirteen questions, a scored report across six dimensions, and a clear picture of where your site stands. No obligation, no pitch.',
                },
              },
            ],
          }),
        }}
      />
      <Nav />
      <div id="page-ada" className="page ada-section" role="main">

        {/* HERO */}
        <section className="ada2-hero">
          <AdaParticleMesh />
          <div className="ada2-hero-copy">
            <div className="ada2-label">ADA — Asset Development Automation</div>
            <h1 className="ada2-h1 ada-display">Your website should bring you clients.<br />We build ones that do.</h1>
            <p className="ada2-body">No jargon, no dashboard talk. A website either gets you enquiries or it doesn&apos;t. If yours isn&apos;t, that&apos;s what we fix.</p>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="ada2-cta" style={{ marginTop: '32px', display: 'inline-block' }}>Start a conversation →</a>
          </div>
        </section>

        {/* WHAT WE DO */}
        <section id="process" className="ada2-section ada2-section--white ada2-section--rule" aria-labelledby="process-heading">
          <div className="ada2-inner">
            <div className="ada2-label">What we do</div>
            <h2 className="ada2-h2 ada-display" id="process-heading">Websites that actually work.</h2>
            <p className="ada2-body">We build websites that look professional and turn visitors into enquiries. Clear message. Easy to use. Built to rank on Google and convert.</p>

            <AdaReveal className="ada2-numbered-list">
              <div className="ada2-numbered-row">
                <span className="ada2-num ada-display">01</span>
                <div>
                  <h3>Audit.</h3>
                  <p>We look at what you have and where it&apos;s losing people.</p>
                </div>
              </div>
              <div className="ada2-numbered-row">
                <span className="ada2-num ada-display">02</span>
                <div>
                  <h3>Strategy.</h3>
                  <p>We decide what each page needs to do before we design anything.</p>
                </div>
              </div>
              <div className="ada2-numbered-row">
                <span className="ada2-num ada-display">03</span>
                <div>
                  <h3>Build.</h3>
                  <p>Copy and design, built together, so the site does its job.</p>
                </div>
              </div>
              <div className="ada2-numbered-row">
                <span className="ada2-num ada-display">04</span>
                <div>
                  <h3>Grow.</h3>
                  <p>We check it&apos;s indexed, watch what&apos;s working, and build on it.</p>
                </div>
              </div>
            </AdaReveal>
          </div>
        </section>

        {/* WHO THIS IS FOR */}
        <section className="ada2-section ada2-section--wash" aria-labelledby="who-heading">
          <div className="ada2-inner">
            <div className="ada2-label">Who this is for</div>
            <h2 className="ada2-h2 ada-display" id="who-heading">Built for businesses ready to be found.<br />Not for everyone.</h2>
            <div className="ada2-callout">
              <ul>
                <li>Fixed price on Foundation and Growth. You know the cost upfront.</li>
                <li>No retainer traps. Every project is scoped before it starts.</li>
                <li>We don&apos;t promise a specific ranking or a specific number of leads. We promise a site built to earn both over time.</li>
                <li>If you want the cheapest option, we&apos;re probably not it. If you want a site that pays for itself, we are.</li>
                <li>It&apos;s just us. No agency overhead, no account managers. You work directly with the person doing the work.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* OUR WORK */}
        <section id="work" className="ada2-section ada2-section--white" aria-labelledby="work-heading">
          <div className="ada2-inner">
            <div className="ada2-label">Our work</div>
            <h2 className="ada2-h2 ada-display" id="work-heading">Proof, not promises.</h2>

            <div className="ada2-cards">
              <div className="ada2-card">
                <h3 className="ada-display">Afripact Civils</h3>
                <p>Civil construction, KZN. Afripact had the track record. Nothing online matched it. Within weeks of launch, the site was bringing in inspection requests from people who had never heard of Afripact before.</p>
                <Link href="/ada/afripact-civils">Read the full case study →</Link>
              </div>
              <div className="ada2-card">
                <h3 className="ada-display">Avalon Capital Group</h3>
                <p>Our own site. 1 page indexed. Now 29. We ran our own process on ourselves and documented every decision.</p>
                <Link href="/ada/acg-case-study">Read the full case study →</Link>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT WE'D BUILD */}
        <section className="ada2-section ada2-section--wash" aria-labelledby="build-heading">
          <div className="ada2-inner">
            <div className="ada2-label">What we&apos;d build</div>
            <h2 className="ada2-h2 ada-display" id="build-heading">Canopy Courier — a concept, not a client yet.</h2>
            <p className="ada2-body">This one&apos;s honest: it never went live. We built the full plan anyway, to show what a fleet-focused digital rebuild actually looks like.</p>
            <p className="ada2-body">The idea: split retail and fleet into two paths. A one-off repair job and a 50-vehicle fleet contract aren&apos;t the same business, so the site shouldn&apos;t treat them the same way. We designed eight components: repositioned messaging, a dual-path homepage, a dedicated fleet page, four service pages, four SEO landing pages, and a mobile-first conversion layer.</p>
            <p className="ada2-body">Projected upside modelled for this concept: R1M to R2M per year, combining fleet contracts, SEO traffic, and improved retail conversion at conservative volumes. That is a projection from the pitch, not a measured result. We are saying so plainly.</p>
          </div>
        </section>

        {/* INVESTMENT */}
        <section id="investment" className="ada2-section ada2-section--white" aria-labelledby="investment-heading">
          <div className="ada2-inner">
            <div className="ada2-label">Investment</div>
            <h2 className="ada2-h2 ada-display" id="investment-heading">We don&apos;t sell cheap. We sell what works.</h2>

            <div className="ada2-pricing-grid">
              <div className="ada2-pricing-card">
                <div className="ada2-pricing-tier">Foundation</div>
                <div className="ada2-pricing-price ada-display">R18,500 once-off</div>
                <p>For businesses that need a site as good as the work they do.</p>
              </div>
              <div className="ada2-pricing-card">
                <div className="ada2-pricing-tier">Growth</div>
                <div className="ada2-pricing-price ada-display">R34,000 once-off, or R12,500/month (3-month minimum)</div>
                <p>Website plus SEO plus a system built to keep bringing in enquiries.</p>
              </div>
              <div className="ada2-pricing-card">
                <div className="ada2-pricing-tier">Authority</div>
                <div className="ada2-pricing-price ada-display">Custom, by enquiry</div>
                <p>For businesses ready to lead their category.</p>
              </div>
            </div>
            <p className="ada2-note">Payment can be split. Terms confirmed on the call.</p>
          </div>
        </section>

        {/* INSIGHTS - structure and links unchanged */}
        <section id="insights" className="ada2-section ada2-section--wash" aria-labelledby="insights-heading">
          <div className="ada2-inner">
            <div className="ada2-label">Insights</div>
            <h2 className="ada2-h2 ada-display" id="insights-heading">We share how we think.</h2>
            <p className="ada2-body">ADA publishes market intelligence and case studies on web design, SEO, and AI automation for South African businesses.</p>
            <p className="ada2-body">Not to fill a content calendar. To show you, before we&apos;ve spoken, that we understand what&apos;s happening in the market and what it means for your business.</p>

            <div style={{ marginTop: '48px', borderTop: '1px solid var(--ada-line)' }}>

              <Link href="/ada/insights/ai-awareness" style={{ padding: '28px 0', borderBottom: '1px solid var(--ada-line)', display: 'flex', alignItems: 'flex-start', gap: '24px', textDecoration: 'none', color: 'inherit' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ada-accent)' }}>Market insight</span>
                    <span style={{ fontSize: '9px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--ada-white)', background: 'var(--ada-accent)', padding: '2px 8px' }}>Anchor piece</span>
                  </div>
                  <div className="ada-display" style={{ fontSize: '20px', fontWeight: 400, lineHeight: 1.3, marginBottom: '8px' }}>The AI awareness cycle - why your website is about to become your most valuable business asset</div>
                  <div style={{ fontSize: '12px', color: 'var(--ada-ink-muted)', lineHeight: 1.8, maxWidth: '620px' }}>AI hasn&apos;t changed how websites are built. It&apos;s changed what websites are responsible for. Here&apos;s what that shift means for any business that wants to stay competitive over the next three years.</div>
                </div>
                <div style={{ fontSize: '18px', color: 'var(--ada-accent)', flexShrink: 0, paddingTop: '4px' }}>→</div>
              </Link>

              <Link href="/ada/insights/why-websites-fail" style={{ padding: '28px 0', borderBottom: '1px solid var(--ada-line)', display: 'flex', alignItems: 'flex-start', gap: '24px', textDecoration: 'none', color: 'inherit' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ marginBottom: '10px' }}>
                    <span style={{ fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ada-ink-muted)' }}>The problem</span>
                  </div>
                  <div className="ada-display" style={{ fontSize: '20px', fontWeight: 400, lineHeight: 1.3, marginBottom: '8px' }}>Why most business websites don&apos;t make money</div>
                  <div style={{ fontSize: '12px', color: 'var(--ada-ink-muted)', lineHeight: 1.8, maxWidth: '620px' }}>It&apos;s not the design. It&apos;s not the traffic. It&apos;s the fact that most websites were never built to convert. Here&apos;s what a website that doesn&apos;t perform actually costs you, and why the problem is more common than most business owners realise.</div>
                </div>
                <div style={{ fontSize: '18px', color: 'var(--ada-accent)', flexShrink: 0, paddingTop: '4px' }}>→</div>
              </Link>

              <Link href="/ada/insights/revenue-website" style={{ padding: '28px 0', borderBottom: '1px solid var(--ada-line)', display: 'flex', alignItems: 'flex-start', gap: '24px', textDecoration: 'none', color: 'inherit' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ marginBottom: '10px' }}>
                    <span style={{ fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ada-ink-muted)' }}>The solution</span>
                  </div>
                  <div className="ada-display" style={{ fontSize: '20px', fontWeight: 400, lineHeight: 1.3, marginBottom: '8px' }}>What a revenue-driven website actually looks like</div>
                  <div style={{ fontSize: '12px', color: 'var(--ada-ink-muted)', lineHeight: 1.8, maxWidth: '620px' }}>Most business owners have never seen one up close. Here&apos;s a breakdown of the specific elements that separate a website that performs from one that just exists: offer clarity, conversion flow, and trust architecture.</div>
                </div>
                <div style={{ fontSize: '18px', color: 'var(--ada-accent)', flexShrink: 0, paddingTop: '4px' }}>→</div>
              </Link>

              <Link href="/ada/insights/ai-websites" style={{ padding: '28px 0', borderBottom: '1px solid var(--ada-line)', display: 'flex', alignItems: 'flex-start', gap: '24px', textDecoration: 'none', color: 'inherit' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ marginBottom: '10px' }}>
                    <span style={{ fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ada-ink-muted)' }}>Authority piece</span>
                  </div>
                  <div className="ada-display" style={{ fontSize: '20px', fontWeight: 400, lineHeight: 1.3, marginBottom: '8px' }}>Why AI won&apos;t replace websites - it will make them more valuable</div>
                  <div style={{ fontSize: '12px', color: 'var(--ada-ink-muted)', lineHeight: 1.8, maxWidth: '620px' }}>Everyone&apos;s asking whether AI makes websites obsolete. The answer is the opposite. Here&apos;s why the businesses that invest in strong digital infrastructure now will be the ones AI points people toward, and what that means for yours.</div>
                </div>
                <div style={{ fontSize: '18px', color: 'var(--ada-accent)', flexShrink: 0, paddingTop: '4px' }}>→</div>
              </Link>

              <Link href="/ada/insights/canopy-deep-dive" style={{ padding: '28px 0', borderBottom: '1px solid var(--ada-line)', display: 'flex', alignItems: 'flex-start', gap: '24px', textDecoration: 'none', color: 'inherit' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ marginBottom: '10px' }}>
                    <span style={{ fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ada-ink-muted)' }}>Case study deep-dive</span>
                  </div>
                  <div className="ada-display" style={{ fontSize: '20px', fontWeight: 400, lineHeight: 1.3, marginBottom: '8px' }}>The Canopy Courier rebuild - how we turned a retail website into a fleet revenue system</div>
                  <div style={{ fontSize: '12px', color: 'var(--ada-ink-muted)', lineHeight: 1.8, maxWidth: '620px' }}>A ground-level breakdown of a real project. What we found, what we built, and the specific decisions that turned a functional website into a business development tool with R1M+ annual revenue potential.</div>
                </div>
                <div style={{ fontSize: '18px', color: 'var(--ada-accent)', flexShrink: 0, paddingTop: '4px' }}>→</div>
              </Link>

            </div>

            <p style={{ marginTop: '32px', fontSize: '12px', fontStyle: 'italic', color: 'var(--ada-ink-muted)' }}>Every piece here is worth your time. That&apos;s the only standard we publish to.</p>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="ada2-section ada2-section--white" aria-labelledby="faq-ada-heading">
          <div className="ada2-inner">
            <div className="ada2-label">Common Questions</div>
            <h2 className="ada2-h2 ada-display" id="faq-ada-heading">ADA, answered straight.</h2>

            <AdaReveal className="ada2-faq">
              <details>
                <summary>What does ADA actually build - websites, SEO, or both?</summary>
                <p>ADA builds revenue systems. The deliverable is digital infrastructure - a website that ranks on Google, converts the visitors it attracts, and keeps working while you focus on running your business. Web design and SEO are components of that system, not separate services. A website without search visibility is a brochure nobody finds. Search visibility without a converting website is traffic that leaves. ADA builds both as one coherent system because that is the only way either one actually works.</p>
              </details>
              <details>
                <summary>How long does a website project take?</summary>
                <p>It depends entirely on the scope. A focused credibility build can be live in two to three days. A full revenue system with SEO architecture, multiple conversion paths, and content infrastructure takes four to six weeks. Every project is scoped before anything begins, so you know the timeline before we start, not after. ADA does not disappear for months and reappear with a finished product. You know what is being built, when each stage completes, and what comes next.</p>
              </details>
              <details>
                <summary>What does a website from ADA cost?</summary>
                <p>ADA has three fixed-price tiers. Foundation starts at R18,500 for a credibility build - a fast, conversion-ready website with search visibility and a Google presence that works around the clock. Growth is R34,000 once-off or R12,500 per month on a three-month minimum, covering a full revenue system with SEO architecture, competitor analysis, social infrastructure, schema markup, and analytics. Authority is scoped per client for businesses ready to dominate their category. Foundation and Growth are fixed scope and fixed price - you know exactly what you are getting before anything begins.</p>
              </details>
              <details>
                <summary>What is AI automation and does my business need it?</summary>
                <p>AI automation means giving repetitive tasks in your business to a system that executes them the same way, every time, without fatigue, error, or the need for management. The work you do the same way on Monday as you do on Friday - qualifying leads, following up with prospects, generating documents, routing enquiries, compiling reports - can be handled by an automated system built specifically around your process. If you are doing the same thing more than three times a week, there is a version of that task an AI system can handle better than a person can. The question is not whether your business needs it. The question is which parts of your operation are costing you time that could be running automatically right now.</p>
              </details>
              <details>
                <summary>How is ADA different from a standard web design agency?</summary>
                <p>Most agencies build websites. ADA builds the system behind the website. The difference is what the work is measured against. A standard agency measures success by whether the site looks good and launches on time. ADA measures success by what the site generates after it launches - enquiries, ranked search positions, qualified leads. Every decision in the build is made against that standard, not against an aesthetic preference or a template. The second difference is how we operate. ADA is AI-augmented, which means the speed and depth of work a traditional agency delivers with a full team, we deliver leaner and faster. You are not paying for headcount. You are paying for outcomes. The third difference is where we come from. ADA is built off the back of Avalon Capital Group, which means we understand business structure, deal dynamics, and what operators actually need from their digital presence - not just what looks good in a portfolio.</p>
              </details>
              <details>
                <summary>Do you work with businesses outside Durban and KZN?</summary>
                <p>Yes. ADA works with businesses across South Africa and internationally. The geographic positioning around Durban and KwaZulu-Natal is deliberate - it is where we have the deepest market knowledge and where local SEO work compounds fastest. But the work itself has no borders. If you are a South African business in Johannesburg, Cape Town, or Pretoria, or an international operator who needs a team that understands the South African market, the engagement works the same way.</p>
              </details>
              <details>
                <summary>What happens after the website launches?</summary>
                <p>The launch is the beginning, not the delivery. Once the foundation is live, ADA stays in the build. The first thirty days focus on indexing confirmation, search console monitoring, and any conversion adjustments based on how real visitors are moving through the site. From there, the engagement moves into the growth layer - SEO content, targeted outreach, or campaign support, depending on what your business needs most to generate momentum. You are not handed a website and wished good luck. Every client gets a clear handover brief, ongoing support for technical issues, and a roadmap for what comes next. The relationship does not end at launch. That is when the compounding starts.</p>
              </details>
              <details>
                <summary>Where do I start if I am not sure what I need?</summary>
                <p>Start with a conversation. You do not need a brief, a budget, or a clear idea of what you want. Tell us what your business does, what is not working about your current digital presence, and what you are trying to achieve. We will ask the right questions, tell you honestly what we think the problem is, and map out what it would take to fix it. If we are the right fit, you will know within the first conversation. If we are not, we will tell you that too. The free website audit is also a clean starting point - thirteen questions, a scored report across six dimensions, and a clear picture of where your site stands. No obligation, no pitch.</p>
              </details>
            </AdaReveal>
          </div>
        </section>

        {/* CLOSING CTA */}
        <section className="ada2-section ada2-section--wash" aria-labelledby="closing-heading">
          <div className="ada2-inner" style={{ textAlign: 'center' }}>
            <h2 className="ada2-h2 ada-display" id="closing-heading">Ready when you are.</h2>
            <p className="ada2-body" style={{ margin: '0 auto 8px' }}>One conversation is enough to know if this is the right fit.</p>
            <p className="ada2-body" style={{ margin: '0 auto 32px' }}>No pressure, no hard sell, an honest look at where your business is.</p>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="ada2-cta">Start a conversation →</a>
          </div>
        </section>

        <footer style={{ borderTop: '1px solid var(--ada-line)', padding: '40px 24px', background: 'var(--ada-white)' }}>
          <div className="ada2-inner" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '24px' }}>
            <div className="ada-display" style={{ fontSize: '16px' }}>ADA - Asset Development Automation - A division of Avalon Capital Group</div>
            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
              <a href="#work" style={{ fontSize: '11px', color: 'var(--ada-ink-muted)', letterSpacing: '0.05em', textDecoration: 'none' }}>Work</a>
              <a href="#insights" style={{ fontSize: '11px', color: 'var(--ada-ink-muted)', letterSpacing: '0.05em', textDecoration: 'none' }}>Insights</a>
              <a href="#faq" style={{ fontSize: '11px', color: 'var(--ada-ink-muted)', letterSpacing: '0.05em', textDecoration: 'none' }}>FAQ</a>
              <Link href="/contact" style={{ fontSize: '11px', color: 'var(--ada-ink-muted)', letterSpacing: '0.05em', textDecoration: 'none' }}>Contact</Link>
              <a href="/privacy-policy" style={{ fontSize: '11px', color: 'var(--ada-accent)', textDecoration: 'none', letterSpacing: '0.05em' }}>Privacy Policy</a>
              <a href="/terms-of-service" style={{ fontSize: '11px', color: 'var(--ada-accent)', textDecoration: 'none', letterSpacing: '0.05em' }}>Terms of Service</a>
            </div>
            <div style={{ width: '100%', paddingTop: '20px', borderTop: '1px solid var(--ada-line)', marginTop: '4px' }}>
              <p style={{ fontSize: '11px', color: 'var(--ada-ink-muted)', marginBottom: '8px' }}>Avalon Capital Group (Pty) Ltd &middot; Reg. No. 2025/671885/07 &middot; Durban, KwaZulu-Natal, South Africa</p>
              <p style={{ fontSize: '12px', color: 'var(--ada-ink-muted)', lineHeight: 1.7 }}>Avalon Capital Group does not provide financial, investment, or legal advice. All information shared is for general informational purposes only. Clients are encouraged to consult with licensed professionals before making any investment or business decisions.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
