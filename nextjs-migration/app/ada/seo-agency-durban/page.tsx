import Link from 'next/link';
import Nav from '../../components/Nav';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO Agency Durban | Rank on Google & Get Found | Asset Development Automation (ADA)',
  description: 'SEO services in Durban that get your business ranking on Google. ADA builds search visibility for KwaZulu-Natal businesses that want consistent organic leads.',
  alternates: {
    canonical: 'https://www.avaloncapitalgroup.co.za/ada/seo-agency-durban',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Agency Durban | Rank on Google & Get Found | Asset Development Automation (ADA)',
    description: 'SEO services in Durban that get your business ranking on Google. ADA builds search visibility for KwaZulu-Natal businesses that want consistent organic leads.',
    images: ['https://avaloncapitalgroup.co.za/og-image.jpg'],
  },
};

const faqItems = [
  {
    question: 'How long does SEO take to show results in South Africa?',
    answer: 'It depends on your starting point, your location, and how much competition you are up against. SEO is a high-value infrastructure investment, and it takes time because of how the system works. Google has to collect, organise, and rank an enormous volume of results, and earning a meaningful position in that system is a process, not an event. Depending on the search term, the area, and the competition, real organic results can take anywhere from three or four weeks to twelve months. The trade-off is worth it: once it ranks, it keeps working without you paying for every click.',
  },
  {
    question: 'How much does SEO cost in Durban?',
    answer: 'It depends on the agency, and that is the honest problem. Some make promises they cannot keep while charging serious fees. At ADA, we price below what the work is worth, deliberately. Our engagements start at R18,500 for a Foundation build, with full SEO and search architecture built into our Growth revenue-system tier. You know the scope and the cost before anything begins. No open-ended retainers, no surprises.',
  },
  {
    question: 'What is the difference between SEO and Google Ads?',
    answer: 'Google Ads is petrol in your tank. The moment it runs out, you pay again to keep moving. Stop paying and the traffic stops the same day. SEO is planting a tree. Nurtured properly, it grows into something that stands on its own, and the flow of visitors continues without you feeding it constantly. Ads buy you attention now. SEO builds you an asset that keeps paying back. The smartest businesses use both, but only one of them is still working for you a year later.',
  },
  {
    question: 'What is local SEO and do I need it?',
    answer: 'Local SEO is the part of search focused on location-based queries — the searches where someone wants a business near them. When a person searches "SEO agency Durban" or "near me," Google leans on local signals to decide who to show, and your Google Business Profile, your service area, and your local presence all feed into that. If your customers are in a specific place and you want to appear the moment they search, then yes, you need it. It is how you show up for the people who are closest to becoming clients.',
  },
  {
    question: 'Does ADA also build websites for Durban businesses?',
    answer: 'Yes. SEO and web design at ADA are not separate conversations — they are the same conversation. A site built without SEO in mind is a site that will not rank, and a site that ranks but does not convert is just expensive traffic. When we build a website, it is built for Google from day one: fast, technically clean, structured with schema markup, and designed to turn visitors into leads. If you need both, we handle both as a single system.',
  },
  {
    question: 'What role does AI automation play in digital marketing?',
    answer: 'AI changes what is possible for a business that wants to scale without proportionally scaling its cost base. Where SEO builds your search visibility, automation handles what happens after someone finds you: qualifying leads, sending follow-ups, surfacing the right information at the right moment. At ADA, we build AI-augmented systems that work alongside your SEO infrastructure. The result is a pipeline that does not depend on someone being in the office to move forward.',
  },
  {
    question: 'Why choose ADA over a bigger agency?',
    answer: 'Premium execution, AI-augmented, and built for where business is going, not where it has been. We operate with a high level of transparency, and we come from a bigger place than just selling a website or a ranking. ADA is built off the back of Avalon Capital Group, which means we understand business, not just marketing. We take the time to understand your business specifically and exactly what it needs, then we solve those problems precisely and build genuine value. You are not a ticket in a queue. You are the whole point of the engagement.',
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
  name: 'SEO Services Durban',
  description:
    'Search engine optimisation for Durban and KwaZulu-Natal businesses. Technical SEO, content strategy, and local SEO built to rank on Google and generate consistent organic leads.',
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
    { '@type': 'City', name: 'Durban' },
    { '@type': 'State', name: 'KwaZulu-Natal' },
  ],
  serviceType: 'SEO Agency',
};

export default function SEOAgencyDurban() {
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
      <div id="page-seo-agency-durban" className="page" role="main">
        <style>{`
          @media (max-width: 768px) {
            .seo-grid-3 { grid-template-columns: 1fr !important; }
            .seo-grid-2 { grid-template-columns: 1fr !important; }
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
          <p style={{fontSize:'9px', letterSpacing:'0.25em', textTransform:'uppercase', color:'var(--gold)', marginBottom:'20px', position:'relative', zIndex:2}}>Asset Development Automation (ADA) · Durban, KZN</p>
          <h1 style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(36px,5vw,64px)', fontWeight:300, lineHeight:1.15, marginBottom:'24px', maxWidth:'640px'}}>SEO Agency Durban</h1>
          <p style={{maxWidth:'520px', fontSize:'14px', color:'var(--text-muted)', lineHeight:1.9, marginBottom:'28px'}}>Ranking on Google is not luck. It is architecture. We build it from the ground up.</p>
          <div style={{display:'flex', gap:'16px', flexWrap:'wrap', marginBottom:'36px'}}>
            <a href="https://wa.me/27712205313?text=Hi%20Luyanda%2C%20I%27d%20like%20to%20discuss%20SEO%20for%20my%20Durban%20business." className="btn-primary" style={{position:'relative', zIndex:9999}}>Start a conversation</a>
            <a href="tel:+27712205313" style={{fontSize:'13px', color:'var(--text-muted)', lineHeight:1, alignSelf:'center', letterSpacing:'0.04em', textDecoration:'none'}}>+27 71 220 5313</a>
          </div>
        </div>

        <section aria-labelledby="problem-heading">
          <div className="section-label">The Problem</div>
          <h2 className="section-title" id="problem-heading">Most Durban businesses are invisible on Google and do not know why.</h2>
          <p className="section-body">Paid ads stop the moment you stop paying. SEO compounds. A properly structured site with the right content and technical foundation keeps generating leads month after month without ongoing ad spend. Most Durban businesses have never had that foundation built correctly.</p>
        </section>

        <div className="divider"></div>

        <section aria-labelledby="what-heading">
          <div className="section-label">What We Do</div>
          <h2 className="section-title" id="what-heading">SEO built on foundations that last.</h2>
          <div className="seo-grid-3" style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'1px', background:'var(--border)', marginTop:'56px'}}>
            <div style={{background:'var(--surface)', padding:'36px'}}>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', marginBottom:'16px'}}>Technical SEO</div>
              <ul style={{fontSize:'13px', color:'var(--text-muted)', lineHeight:1.9, paddingLeft:'16px', margin:0}}>
                <li>Site architecture audit and restructure</li>
                <li>Core Web Vitals optimisation (LCP, CLS, FID)</li>
                <li>Crawl error resolution and XML sitemap submission</li>
                <li>Schema markup: LocalBusiness, FAQ, Service types</li>
                <li>Canonical tag structure and duplicate content cleanup</li>
                <li>Google Search Console setup and ongoing monitoring</li>
              </ul>
            </div>
            <div style={{background:'var(--surface)', padding:'36px'}}>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', marginBottom:'16px'}}>Content and keyword strategy</div>
              <ul style={{fontSize:'13px', color:'var(--text-muted)', lineHeight:1.9, paddingLeft:'16px', margin:0}}>
                <li>Commercial intent keyword research for your industry</li>
                <li>Page-by-page briefs targeting real buyer searches</li>
                <li>Service area pages for Durban, KZN, and surrounding cities</li>
                <li>Meta titles and descriptions written for click-through</li>
                <li>Internal linking structure that distributes authority</li>
                <li>Content that answers what your prospects are already asking</li>
              </ul>
            </div>
            <div style={{background:'var(--surface)', padding:'36px'}}>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', marginBottom:'16px'}}>Local SEO for KZN</div>
              <ul style={{fontSize:'13px', color:'var(--text-muted)', lineHeight:1.9, paddingLeft:'16px', margin:0}}>
                <li>Google Business Profile optimisation and verification</li>
                <li>Location-specific pages for Durban and Pietermaritzburg</li>
                <li>Local citation building across South African directories</li>
                <li>Review strategy and reputation signal management</li>
                <li>Map Pack visibility optimisation</li>
                <li>Geo-specific and &ldquo;near me&rdquo; keyword targeting</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="divider"></div>

        <section aria-labelledby="for-heading">
          <div className="section-label">Who It&apos;s For</div>
          <h2 className="section-title" id="for-heading">Built for KwaZulu-Natal businesses that want consistent organic leads.</h2>
          <p className="section-body">Whether you are a professional services firm, a construction company, a fleet operator, or a retailer, organic search visibility is the most cost-effective lead generation channel available.</p>
          <div className="seo-grid-2" style={{display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:'1px', background:'var(--border)', marginTop:'56px'}}>
            <div style={{background:'var(--surface)', padding:'36px'}}>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px'}}>Professional Services Firms</div>
            </div>
            <div style={{background:'var(--surface)', padding:'36px'}}>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px'}}>Construction &amp; Civil Companies</div>
            </div>
            <div style={{background:'var(--surface)', padding:'36px'}}>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px'}}>Fleet &amp; Logistics Operators</div>
            </div>
            <div style={{background:'var(--surface)', padding:'36px'}}>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px'}}>Retail &amp; E-commerce Businesses</div>
            </div>
          </div>
        </section>

        <div className="divider"></div>

        <section aria-labelledby="how-heading">
          <div className="section-label">How It Works</div>
          <h2 className="section-title" id="how-heading">What an SEO campaign actually involves.</h2>
          <p className="section-body">SEO is not a switch you flip. It is infrastructure you build. The reason it takes time is the same reason it lasts: Google has to crawl, understand, and trust your site before it ranks you, and that trust is earned over weeks and months, not bought in a day.</p>
          <p className="section-body" style={{marginTop:'20px'}}>The work happens in layers. First the technical foundation, so Google can read every page cleanly and index it without confusion. Then the content and structure, so each page targets the searches your clients are actually making and answers them better than the competition. Then the local signals, the things that tie your business to Durban and KwaZulu-Natal specifically, so you show up when someone nearby is ready to act. Each layer compounds on the one before it.</p>
          <p className="section-body" style={{marginTop:'20px'}}>We know this because we did it to our own site. Avalon Capital Group went from one page Google could read to twenty-nine indexed pages ranking across forty-five commercial searches, in seven weeks, with no paid ads. That is not a promise on a slide. It is a documented result you can <Link style={{color:'var(--gold)', textDecoration:'none'}} href="/ada/acg-case-study">read in full</Link>.</p>
          <p className="section-body" style={{marginTop:'20px'}}>SEO also works better when it is paired with the right website. A page that ranks but does not convert is wasted infrastructure. If your site needs a rebuild alongside the SEO work, <Link style={{color:'var(--gold)', textDecoration:'none'}} href="/ada/web-design-pietermaritzburg">our web design service for KZN businesses</Link> handles both as a single system.</p>
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
          <p className="section-body">Before we sell SEO, we practise it. Avalon Capital Group&apos;s own website was migrated to Next.js, structured for search, and submitted to Google Search Console. Every page indexed correctly within days. This is our process working on our own problem.</p>
          <div className="seo-grid-2" style={{display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:'1px', background:'var(--border)', marginTop:'48px', marginBottom:'32px'}}>
            <div style={{background:'var(--surface)', padding:'36px'}}>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'48px', fontWeight:300, lineHeight:1, marginBottom:'10px'}}>29</div>
              <div style={{fontSize:'13px', color:'var(--text-muted)', lineHeight:1.8, letterSpacing:'0.05em'}}>Indexed pages</div>
            </div>
            <div style={{background:'var(--surface)', padding:'36px'}}>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'48px', fontWeight:300, lineHeight:1, marginBottom:'10px'}}>45+</div>
              <div style={{fontSize:'13px', color:'var(--text-muted)', lineHeight:1.8, letterSpacing:'0.05em'}}>Unique search queries</div>
            </div>
            <div style={{background:'var(--surface)', padding:'36px'}}>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'48px', fontWeight:300, lineHeight:1, marginBottom:'10px'}}>1,120</div>
              <div style={{fontSize:'13px', color:'var(--text-muted)', lineHeight:1.8, letterSpacing:'0.05em'}}>Impressions (zero ad spend)</div>
            </div>
            <div style={{background:'var(--surface)', padding:'36px'}}>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'48px', fontWeight:300, lineHeight:1, marginBottom:'10px'}}>16 days</div>
              <div style={{fontSize:'13px', color:'var(--text-muted)', lineHeight:1.8, letterSpacing:'0.05em'}}>Concept to live</div>
            </div>
          </div>
          <p className="section-body">From a site Google could not read at all, with one indexed page and no search visibility, to ranking for 45 unique commercial queries across Durban and KwaZulu-Natal. No paid ads. Built and structured by ADA.</p>
          <Link style={{fontSize:'12px', letterSpacing:'0.1em', color:'var(--gold)', marginTop:'24px', display:'inline-block'}} href="/ada/acg-case-study">Read the ACG case study →</Link>
        </section>

        <div className="divider"></div>

        <section aria-labelledby="related-heading">
          <div className="section-label">Related Services</div>
          <h2 className="section-title" id="related-heading">SEO works best as part of a system.</h2>
          <p className="section-body">Search visibility is one layer. The businesses that pull ahead pair it with the right website and the right automation behind it.</p>
          <div className="seo-grid-3" style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'1px', background:'var(--border)', marginTop:'48px'}}>
            <Link href="/ada/web-design-pietermaritzburg" style={{background:'var(--surface)', padding:'36px', display:'block', textDecoration:'none', color:'inherit'}}>
              <div style={{fontSize:'9px', letterSpacing:'0.2em', textTransform:'uppercase', color:'var(--gold)', marginBottom:'12px'}}>Web Design</div>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'20px', marginBottom:'10px'}}>Web Design Pietermaritzburg</div>
              <div style={{fontSize:'12px', color:'var(--text-muted)', lineHeight:1.8}}>Websites built for Google and conversion from day one.</div>
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
          <h2 className="section-title" id="faq-heading">SEO in South Africa, answered straight.</h2>
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
          <h2 className="section-title" id="cta-heading">Let&apos;s build search visibility that compounds.</h2>
          <p className="section-body">Start with a free digital audit. We will show you exactly where your site stands on Google and what it will take to move it.</p>
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
