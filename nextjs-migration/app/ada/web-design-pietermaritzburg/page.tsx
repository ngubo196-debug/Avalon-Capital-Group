import Link from 'next/link';
import Nav from '../../components/Nav';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Web Design Pietermaritzburg | Asset Development Automation (ADA)',
  description: 'Professional web design in Pietermaritzburg built for search and conversion. Rank on Google, attract local clients, and grow your business in the PMB market.',
  alternates: {
    canonical: 'https://www.avaloncapitalgroup.co.za/ada/web-design-pietermaritzburg',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Pietermaritzburg | Asset Development Automation (ADA)',
    description: 'Professional web design in Pietermaritzburg built for search and conversion. Rank on Google, attract local clients, and grow your business in the PMB market.',
    images: ['https://avaloncapitalgroup.co.za/og-image.jpg'],
  },
};

const faqItems = [
  {
    question: 'How much does a website cost in Pietermaritzburg?',
    answer: 'The honest answer is that it depends on what your business actually needs. Most agencies will not tell you that upfront because they want you in a conversation before they name a number. At ADA, our Foundation build starts at R18,500 once-off and our Growth revenue system — which includes full SEO architecture — is R34,000 once-off. You know the scope and the cost before anything begins. No retainer traps, no hidden extras.',
  },
  {
    question: 'How long does it take to build a website with ADA?',
    answer: 'From brief to live, typically two to four weeks depending on how quickly content and approvals flow. We do not disappear for six weeks and resurface with something that needs reworking. The process is structured: audit, strategy, build, launch. You know what is happening at every stage, and we move fast because we have a clear system rather than a vague process.',
  },
  {
    question: 'Will my new website rank on Google?',
    answer: 'Only if it is built to. Most websites are not. We build every site with SEO architecture baked in from day one: proper page structure, schema markup, Core Web Vitals optimised, and Google Search Console configured at launch. Pietermaritzburg is a market where most businesses have weak digital foundations — a properly built site starts competing from the moment it goes live.',
  },
  {
    question: 'Do I need a website if I already have a Facebook page?',
    answer: 'Facebook is rented land. You do not control it, you do not own the audience, and if the algorithm changes or the platform shifts, your visibility goes with it. A website is an asset you own. It works around the clock, it builds credibility with every person who finds you, and unlike a Facebook page, it compounds in value over time. For most PMB businesses, their website is the highest-leverage piece of digital infrastructure they can invest in.',
  },
  {
    question: 'What makes ADA different from other web designers in Pietermaritzburg?',
    answer: 'We are not a design studio. We build revenue systems. Every decision — the structure, the copy, the conversion flow, the SEO architecture — is made around one question: what does this page need to make someone do? We also come from Avalon Capital Group, which means we understand business, not just marketing. And we are transparent: our own site\'s Search Console data is public in our case study, so you can see exactly how we measure what we build.',
  },
  {
    question: 'Can ADA handle ongoing SEO after the website is built?',
    answer: 'Yes. The website build is the foundation. What happens next — content, local SEO signals, ranking for more searches over time — is where our Growth and Authority tiers come in. We can run the full search visibility programme after launch, or hand over a site that is already structured correctly so you can build on it yourself. Either way, you are not starting from a broken foundation.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Web Design Pietermaritzburg',
  description:
    'Professional web design for Pietermaritzburg businesses. Next.js sites built for local SEO, conversion, and long-term performance.',
  provider: {
    '@type': 'Organization',
    name: 'Asset Development Automation (ADA)',
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
    <>
      <Nav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <div id="page-web-design-pietermaritzburg" className="page" role="main">
        <style>{`
          @media (max-width: 768px) {
            .wdpmb-grid-3 { grid-template-columns: 1fr !important; }
            .wdpmb-grid-2 { grid-template-columns: 1fr !important; }
          }
          details summary::-webkit-details-marker { display: none; }
        `}</style>

        <div className="inner-hero">
          <svg className="inner-hero-geo" style={{position:'absolute', right:'-120px', top:'50%', transform:'translateY(-50%)', opacity:0.11, pointerEvents:'none', zIndex:1}} width="580" height="680" viewBox="0 0 580 680" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" stroke="#C9A84C" strokeWidth="0.8">
              <polygon points="290,20 560,640 20,640"/>
              <polygon points="290,80 510,600 70,600"/>
              <polygon points="290,140 460,560 120,560"/>
            </g>
          </svg>
          <div className="inner-hero-bg" aria-hidden="true"></div>
          <Link className="back-btn" style={{cursor:'pointer', position:'relative', zIndex:10}} href="/ada">← ADA</Link>
          <p style={{fontSize:'9px', letterSpacing:'0.25em', textTransform:'uppercase', color:'var(--gold)', marginBottom:'20px', position:'relative', zIndex:2}}>Asset Development Automation (ADA) · Pietermaritzburg, KZN</p>
          <h1 style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(36px,5vw,64px)', fontWeight:300, lineHeight:1.15, marginBottom:'24px', maxWidth:'640px'}}>Web Design Pietermaritzburg</h1>
          <p style={{maxWidth:'520px', fontSize:'14px', color:'var(--text-muted)', lineHeight:1.9, marginBottom:'28px'}}>Most PMB businesses rely on referrals. The ones growing fastest are also being found on Google.</p>
          <div style={{display:'flex', gap:'16px', flexWrap:'wrap', marginBottom:'36px'}}>
            <a href="https://wa.me/27712205313?text=Hi%20Luyanda%2C%20I%27d%20like%20to%20discuss%20a%20website%20for%20my%20Pietermaritzburg%20business." className="btn-primary" style={{position:'relative', zIndex:9999}}>Start a conversation</a>
            <a href="tel:+27712205313" style={{fontSize:'13px', color:'var(--text-muted)', lineHeight:1, alignSelf:'center', letterSpacing:'0.04em', textDecoration:'none'}}>+27 71 220 5313</a>
          </div>
        </div>

        <section aria-labelledby="problem-heading">
          <div className="section-label">The Problem</div>
          <h2 className="section-title" id="problem-heading">Pietermaritzburg businesses are underrepresented online.</h2>
          <p className="section-body">Pietermaritzburg is a competitive market but most local businesses have weak or outdated websites. Most industries in PMB still have surprisingly little online competition. Businesses with properly structured sites are gaining visibility fast. A web design company in Pietermaritzburg that builds on proper foundations can rank within weeks, not months.</p>
        </section>

        <div className="divider"></div>

        <section aria-labelledby="what-heading">
          <div className="section-label">What We Build</div>
          <h2 className="section-title" id="what-heading">A website engineered for visibility in Pietermaritzburg.</h2>
          <div className="wdpmb-grid-3" style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'1px', background:'var(--border)', marginTop:'56px'}}>
            <div style={{background:'var(--surface)', padding:'36px'}}>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', marginBottom:'16px'}}>Local SEO for Pietermaritzburg</div>
              <ul style={{fontSize:'13px', color:'var(--text-muted)', lineHeight:1.9, paddingLeft:'16px', margin:0}}>
                <li>Google Business Profile setup and optimisation</li>
                <li>Location keyword targeting for PMB and the Midlands</li>
                <li>Schema markup for local business visibility</li>
                <li>Google Search Console configured at launch</li>
                <li>Location pages for Msunduzi, Hilton, Howick, and surrounds</li>
                <li>Ongoing local ranking monitoring and reporting</li>
              </ul>
            </div>
            <div style={{background:'var(--surface)', padding:'36px'}}>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', marginBottom:'16px'}}>Built for conversion</div>
              <ul style={{fontSize:'13px', color:'var(--text-muted)', lineHeight:1.9, paddingLeft:'16px', margin:0}}>
                <li>Offer clarity — visitors understand what you do in seconds</li>
                <li>Strategic CTA placement based on where decisions happen</li>
                <li>Trust signals built into structure, not bolted on</li>
                <li>Mobile-first layout for the majority of PMB search traffic</li>
                <li>Fast load times that reduce bounce before prospects leave</li>
                <li>Contact flows that reduce friction between interest and enquiry</li>
              </ul>
            </div>
            <div style={{background:'var(--surface)', padding:'36px'}}>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', marginBottom:'16px'}}>Built to last</div>
              <ul style={{fontSize:'13px', color:'var(--text-muted)', lineHeight:1.9, paddingLeft:'16px', margin:0}}>
                <li>Next.js — no page builders, no bloated plugins</li>
                <li>Clean code with no technical debt</li>
                <li>Core Web Vitals optimised from the first deploy</li>
                <li>SEO architecture baked in, not retrofitted later</li>
                <li>No ongoing maintenance fees or retainer traps</li>
                <li>Scalable as your business and content grow</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="divider"></div>

        <section aria-labelledby="for-heading">
          <div className="section-label">Who It&apos;s For</div>
          <h2 className="section-title" id="for-heading">Built for businesses competing in the Pietermaritzburg market.</h2>
          <p className="section-body">For many PMB businesses, a properly built website becomes the foundation of their highest-performing marketing channel. Whether your clients come from Pietermaritzburg, Hilton, Howick, or the greater Midlands area, your site should be working to bring them in.</p>
          <div className="wdpmb-grid-2" style={{display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:'1px', background:'var(--border)', marginTop:'56px'}}>
            <div style={{background:'var(--surface)', padding:'36px'}}>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px'}}>Retail &amp; Service Businesses</div>
            </div>
            <div style={{background:'var(--surface)', padding:'36px'}}>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px'}}>Professional Practices</div>
            </div>
            <div style={{background:'var(--surface)', padding:'36px'}}>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px'}}>Construction &amp; Trades</div>
            </div>
            <div style={{background:'var(--surface)', padding:'36px'}}>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px'}}>Education &amp; Training Providers</div>
            </div>
          </div>
        </section>

        <div className="divider"></div>

        <section style={{padding:'64px 0', textAlign:'center'}}>
          <p style={{fontFamily:'Montserrat', fontSize:'13px', letterSpacing:'0.1em', color:'var(--muted)', marginBottom:'24px', textTransform:'uppercase'}}>Seen enough?</p>
          <a className="btn-primary" href="/audit">Get Your Free Audit</a>
        </section>

        <div className="divider"></div>

        <section aria-labelledby="proof-heading">
          <div className="section-label">Case Study</div>
          <h2 className="section-title" id="proof-heading">How we built ACG&apos;s own search presence from scratch.</h2>
          <p className="section-body">Avalon Capital Group&apos;s own website was migrated to Next.js, structured for search, and submitted to Google Search Console. Every page indexed correctly within days. We apply the same foundations to every client site we build in KZN.</p>
          <Link style={{fontSize:'12px', letterSpacing:'0.1em', color:'var(--gold)', marginTop:'24px', display:'inline-block'}} href="/ada/acg-case-study">Read the ACG case study →</Link>
        </section>

        <div className="divider"></div>

        <section aria-labelledby="related-heading">
          <div className="section-label">Related Services</div>
          <h2 className="section-title" id="related-heading">Web design works best as part of a system.</h2>
          <p className="section-body">A site that ranks but does not convert is wasted infrastructure. A site that converts but cannot be found is a missed opportunity. The businesses that pull ahead combine all three layers.</p>
          <div className="wdpmb-grid-3" style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'1px', background:'var(--border)', marginTop:'48px'}}>
            <Link href="/ada/seo-agency-durban" style={{background:'var(--surface)', padding:'36px', display:'block', textDecoration:'none', color:'inherit'}}>
              <div style={{fontSize:'9px', letterSpacing:'0.2em', textTransform:'uppercase', color:'var(--gold)', marginBottom:'12px'}}>SEO</div>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'20px', marginBottom:'10px'}}>SEO Agency Durban</div>
              <div style={{fontSize:'12px', color:'var(--text-muted)', lineHeight:1.8}}>Search visibility that compounds month after month.</div>
            </Link>
            <Link href="/ada/ai-automation-south-africa" style={{background:'var(--surface)', padding:'36px', display:'block', textDecoration:'none', color:'inherit'}}>
              <div style={{fontSize:'9px', letterSpacing:'0.2em', textTransform:'uppercase', color:'var(--gold)', marginBottom:'12px'}}>Automation</div>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'20px', marginBottom:'10px'}}>AI Automation South Africa</div>
              <div style={{fontSize:'12px', color:'var(--text-muted)', lineHeight:1.8}}>AI-powered systems that handle leads after they find you.</div>
            </Link>
            <Link href="/ada/acg-case-study" style={{background:'var(--surface)', padding:'36px', display:'block', textDecoration:'none', color:'inherit'}}>
              <div style={{fontSize:'9px', letterSpacing:'0.2em', textTransform:'uppercase', color:'var(--gold)', marginBottom:'12px'}}>Case Study</div>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'20px', marginBottom:'10px'}}>ACG Case Study</div>
              <div style={{fontSize:'12px', color:'var(--text-muted)', lineHeight:1.8}}>See the full Search Console data behind our own growth.</div>
            </Link>
          </div>
        </section>

        <div className="divider"></div>

        <section aria-labelledby="faq-heading">
          <div className="section-label">Common Questions</div>
          <h2 className="section-title" id="faq-heading">Web design in Pietermaritzburg, answered straight.</h2>
          <div style={{marginTop:'48px'}}>
            {faqItems.map((item, i) => (
              <details
                key={item.question}
                style={{borderTop:'1px solid var(--border)', padding:'24px 0', ...(i === faqItems.length - 1 ? {borderBottom:'1px solid var(--border)'} : {})}}
              >
                <summary style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'20px', cursor:'pointer', listStyle:'none', color:'var(--text-light, #F0EDE8)'}}>
                  {item.question}
                </summary>
                <p style={{fontSize:'14px', color:'var(--text-muted)', lineHeight:1.8, marginTop:'16px'}}>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <div className="divider"></div>

        <section aria-labelledby="cta-heading">
          <div className="section-label">Get Started</div>
          <h2 className="section-title" id="cta-heading">Build a digital presence that matches the quality of your business.</h2>
          <p className="section-body">Start with a free digital audit. We will show you exactly what your current presence is costing you before you spend a cent.</p>
          <div style={{display:'flex', gap:'16px', flexWrap:'wrap', marginTop:'36px'}}>
            <Link className="btn-primary" href="/audit">Get Your Free Audit</Link>
            <Link className="btn-ghost" href="/contact">Start a Conversation</Link>
          </div>
        </section>

        <footer style={{borderTop:'1px solid var(--border)', padding:'40px 60px', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:'24px'}}>
          <div>
            <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'18px', fontWeight:300}}>ADA - A division of Avalon Capital Group</div>
          </div>
          <div style={{display:'flex', gap:'28px', flexWrap:'wrap'}}>
            <a href="#our-work-heading" style={{fontSize:'11px', color:'var(--text-muted)', letterSpacing:'0.05em', textDecoration:'none'}}>Work</a>
            <a href="#insights-heading" style={{fontSize:'11px', color:'var(--text-muted)', letterSpacing:'0.05em', textDecoration:'none'}}>Insights</a>
            <Link href="/ada" style={{fontSize:'11px', color:'var(--text-muted)', letterSpacing:'0.05em', textDecoration:'none'}}>FAQ</Link>
            <Link href="/contact" style={{fontSize:'11px', color:'var(--text-muted)', letterSpacing:'0.05em', textDecoration:'none'}}>Contact</Link>
            <a href="/privacy-policy" style={{fontSize:'11px', color:'var(--gold)', textDecoration:'none', letterSpacing:'0.05em'}}>Privacy Policy</a>
            <a href="/terms-of-service" style={{fontSize:'11px', color:'var(--gold)', textDecoration:'none', letterSpacing:'0.05em'}}>Terms of Service</a>
          </div>
          <div style={{width:'100%', paddingTop:'20px', borderTop:'1px solid var(--border)', marginTop:'4px'}}>
            <p style={{fontSize:'11px', color:'var(--text-dim)', marginBottom:'8px'}}>Avalon Capital Group (Pty) Ltd &middot; Reg. No. 2025/671885/07 &middot; Durban, KwaZulu-Natal, South Africa</p>
            <p style={{fontSize:'12px', color:'var(--text-dim)', lineHeight:1.7}}>Avalon Capital Group does not provide financial, investment, or legal advice. All information shared is for general informational purposes only. Clients are encouraged to consult with licensed professionals before making any investment or business decisions.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
