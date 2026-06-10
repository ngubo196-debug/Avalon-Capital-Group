import Link from 'next/link';
import Nav from '../../components/Nav';
import ScrollReveal from '../../components/ScrollReveal';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO Agency Durban | Rank on Google & Get Found | Avalon Digital Agency',
  description: 'SEO services in Durban that get your business ranking on Google. Avalon Digital Agency builds search visibility for KwaZulu-Natal businesses that want consistent organic leads.',
  alternates: { canonical: 'https://www.avaloncapitalgroup.co.za/ada/seo-agency-durban' },
};

export default function SeoAgencyDurban() {
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
                name: 'How long does SEO take to show results in South Africa?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'It depends on your starting point, your location, and how much competition you are up against. SEO is a high-value infrastructure investment, and it takes time because of how the system works. Google has to collect, organise, and rank an enormous volume of results, and earning a meaningful position in that system is a process, not an event. Depending on the search term, the area, and the competition, real organic results can take anywhere from three or four weeks to twelve months. The trade-off is worth it: once it ranks, it keeps working without you paying for every click.',
                },
              },
              {
                '@type': 'Question',
                name: 'How much does SEO cost in Durban and South Africa?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'It depends on the agency, and that is the honest problem. Some make promises they cannot keep while charging serious fees. For most providers, the price is still less than the value it delivers. At ADA, we price below what the work is worth, deliberately. Our engagements start at R18,500 for a Foundation build, with full SEO and search architecture built into our Growth revenue-system tier. You know the scope and the cost before anything begins. No open-ended retainers, no surprises.',
                },
              },
              {
                '@type': 'Question',
                name: 'What is the difference between SEO and Google Ads?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Google Ads is petrol in your tank. The moment it runs out, you pay again to keep moving. Stop paying and the traffic stops the same day. SEO is planting a tree. Nurtured properly, it grows into something that stands on its own, and the flow of visitors continues without you feeding it constantly. Ads buy you attention now. SEO builds you an asset that keeps paying back. The smartest businesses use both, but only one of them is still working for you a year later.',
                },
              },
              {
                '@type': 'Question',
                name: 'Is SEO worth it for a small business in KZN?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'For a small business it matters even more, because the volume of competition is higher and you have to stand out in a crowded field. Here is the part most people miss: most small businesses never invest in digital infrastructure at a serious, professional level. That is the opening. When your foundation is built properly and theirs is not, it becomes far easier to win the searches that bring in real business. You are not competing on budget. You are competing on whether the work was done right, and most of the time it was not.',
                },
              },
              {
                '@type': 'Question',
                name: 'What is local SEO and do I need it?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Local SEO is the part of search focused on location-based queries, the searches where someone wants a business near them. When a person searches "SEO agency Durban" or "near me," Google leans on local signals to decide who to show, and your Google Business Profile, your service area, and your local presence all feed into that. If your customers are in a specific place and you want to appear the moment they search, then yes, you need it. It is how you show up for the people who are closest to becoming clients.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do I need a Google Business Profile to rank locally?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'A Google Business Profile is a high-value ranking factor and one of the most important pieces of local search. It works off Google Maps, which is where Google can tie your business to a real location with real interactions from real people. It is a core part of your digital home on Google. If local visibility matters to your business, a complete and verified profile is not optional, it is foundational.',
                },
              },
              {
                '@type': 'Question',
                name: 'How do you measure SEO results?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "Business owners care about one thing: leads. That is the right thing to care about, but leads often arrive later than expected, and you only know when the phone rings. So while we build toward leads, we measure the work with detailed, specific performance data along the way, using Google Search Console and tools like it to track exactly what is improving and when. We do not hide behind vague reports. As proof, our own case study shows the full Search Console data behind our site's growth, screenshots and all. You can see exactly how we measure, because we show our own numbers.",
                },
              },
              {
                '@type': 'Question',
                name: 'Why choose ADA over a bigger agency?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Premium execution, AI-augmented, and built for where business is going, not where it has been. We operate with a high level of transparency, and we come from a bigger place than just selling a website or a ranking. ADA is built off the back of Avalon Capital Group, which means we understand business, not just marketing. We take the time to understand your business specifically and exactly what it needs, then we solve those problems precisely and build genuine value. You are not a ticket in a queue. You are the whole point of the engagement.',
                },
              },
              {
                '@type': 'Question',
                name: 'What does the free website audit include?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'The free audit shows you where your site actually stands. It scores your search visibility, your messaging and structure, your technical performance, and whether Google and AI tools can properly understand your business. You get a clear scorecard with the key issues identified, usually within forty-eight hours. It is the fastest way to see what is costing you business before you commit to anything. No charge, no obligation.',
                },
              },
            ],
          }),
        }}
      />
      <Nav />
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
          <Link className="back-btn" href="/ada" style={{cursor:'pointer', position:'relative', zIndex:10}}>← ADA</Link>
          <h1 style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(36px,5vw,64px)', fontWeight:300, lineHeight:1.15, marginBottom:'24px', maxWidth:'640px'}}>SEO Agency Durban</h1>
          <p style={{maxWidth:'520px', fontSize:'14px', color:'var(--text-muted)', lineHeight:1.9, marginBottom:'36px'}}>Ranking on Google is not luck. It is architecture. We build it from the ground up.</p>
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
          <p className="section-body">ADA&apos;s SEO service covers three layers: the technical foundation that lets Google read your site, the content and keyword strategy that targets the searches your clients are making, and the local signals that tie your business to Durban and KwaZulu-Natal specifically.</p>
          <div className="seo-grid-3" style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'1px', background:'var(--border)', marginTop:'56px'}}>
            <div style={{background:'var(--surface)', padding:'36px'}}>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', marginBottom:'12px'}}>Technical SEO</div>
              <div style={{fontSize:'13px', color:'var(--text-muted)', lineHeight:1.8}}>Site architecture, indexing, Core Web Vitals, schema markup, and canonical structure. The foundation everything else depends on.</div>
            </div>
            <div style={{background:'var(--surface)', padding:'36px'}}>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', marginBottom:'12px'}}>Content and keyword strategy</div>
              <div style={{fontSize:'13px', color:'var(--text-muted)', lineHeight:1.8}}>Target the searches your clients are actually making. Pages built around commercial intent, not vanity traffic.</div>
            </div>
            <div style={{background:'var(--surface)', padding:'36px'}}>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', marginBottom:'12px'}}>Local SEO for KZN</div>
              <div style={{fontSize:'13px', color:'var(--text-muted)', lineHeight:1.8}}>Rank in Durban, Pietermaritzburg, and across KwaZulu-Natal. Dominate local search results before competitors realise what is happening.</div>
            </div>
          </div>
        </section>

        <div className="divider"></div>

        <section aria-labelledby="for-heading">
          <div className="section-label">Who It&apos;s For</div>
          <h2 className="section-title" id="for-heading">Built for KwaZulu-Natal businesses that want consistent organic leads.</h2>
          <p className="section-body">Organic search visibility is the most cost-effective lead generation channel available to any South African service business. Whether you are a professional services firm, a construction company, a fleet operator, or a retailer, the principle is the same: the businesses that own their search presence own their pipeline.</p>
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

        <ScrollReveal delay={0}>
        <div className="divider"></div>

        <section aria-labelledby="how-heading">
          <div className="section-label">How It Works</div>
          <h2 className="section-title" id="how-heading">What an SEO campaign actually involves.</h2>
          <p className="section-body">SEO works by building technical, content, and local signals that help Google understand, trust, and rank your pages for the searches your clients are making. It is infrastructure, not a switch - the reason it takes time is the same reason it lasts.</p>
          <p className="section-body" style={{marginTop:'20px'}}>The work happens in layers. First the technical foundation, so Google can read every page cleanly and index it without confusion. Then the content and structure, so each page targets the searches your clients are actually making and answers them better than the competition. Then the local signals, the things that tie your business to Durban and KwaZulu-Natal specifically, so you show up when someone nearby is ready to act. Each layer compounds on the one before it.</p>
          <p className="section-body" style={{marginTop:'20px'}}>We know this because we did it to our own site. Avalon Capital Group went from one page Google could read to twenty-nine indexed pages ranking across forty-five commercial searches, in seven weeks, with no paid ads. That is not a promise on a slide. It is a documented result you can <Link href="/ada/acg-case-study" style={{color:'var(--gold)', textDecoration:'none'}}>read in full</Link>.</p>
        </section>
        </ScrollReveal>

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
            {[
              { stat: '29',      label: 'Indexed pages' },
              { stat: '45+',     label: 'Unique search queries' },
              { stat: '1,120',   label: 'Impressions (zero ad spend)' },
              { stat: '16 days', label: 'Concept to live' },
            ].map(({ stat, label }) => (
              <div key={label} style={{background:'var(--surface)', padding:'36px'}}>
                <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'48px', fontWeight:300, lineHeight:1, marginBottom:'10px'}}>{stat}</div>
                <div style={{fontSize:'13px', color:'var(--text-muted)', lineHeight:1.8, letterSpacing:'0.05em'}}>{label}</div>
              </div>
            ))}
          </div>

          <p className="section-body">From a site Google could not read at all, with one indexed page and no search visibility, to ranking for 45 unique commercial queries across Durban and KwaZulu-Natal. No paid ads. Built and structured by ADA.</p>

          <Link href="/ada/acg-case-study" style={{fontSize:'12px', letterSpacing:'0.1em', color:'var(--gold)', marginTop:'24px', display:'inline-block'}}>Read the ACG case study →</Link>
        </section>

        <ScrollReveal delay={150}>
        <div className="divider"></div>

        <section aria-labelledby="faq-heading">
          <div className="section-label">Common Questions</div>
          <h2 className="section-title" id="faq-heading">SEO in South Africa, answered straight.</h2>
          <div style={{marginTop:'48px'}}>
            {[
              {
                q: 'How long does SEO take to show results in South Africa?',
                a: 'It depends on your starting point, your location, and how much competition you are up against. SEO is a high-value infrastructure investment, and it takes time because of how the system works. Google has to collect, organise, and rank an enormous volume of results, and earning a meaningful position in that system is a process, not an event. Depending on the search term, the area, and the competition, real organic results can take anywhere from three or four weeks to twelve months. The trade-off is worth it: once it ranks, it keeps working without you paying for every click.',
              },
              {
                q: 'How much does SEO cost in Durban and South Africa?',
                a: 'It depends on the agency, and that is the honest problem. Some make promises they cannot keep while charging serious fees. For most providers, the price is still less than the value it delivers. At ADA, we price below what the work is worth, deliberately. Our engagements start at R18,500 for a Foundation build, with full SEO and search architecture built into our Growth revenue-system tier. You know the scope and the cost before anything begins. No open-ended retainers, no surprises.',
              },
              {
                q: 'What is the difference between SEO and Google Ads?',
                a: 'Google Ads is petrol in your tank. The moment it runs out, you pay again to keep moving. Stop paying and the traffic stops the same day. SEO is planting a tree. Nurtured properly, it grows into something that stands on its own, and the flow of visitors continues without you feeding it constantly. Ads buy you attention now. SEO builds you an asset that keeps paying back. The smartest businesses use both, but only one of them is still working for you a year later.',
              },
              {
                q: 'Is SEO worth it for a small business in KZN?',
                a: 'For a small business it matters even more, because the volume of competition is higher and you have to stand out in a crowded field. Here is the part most people miss: most small businesses never invest in digital infrastructure at a serious, professional level. That is the opening. When your foundation is built properly and theirs is not, it becomes far easier to win the searches that bring in real business. You are not competing on budget. You are competing on whether the work was done right, and most of the time it was not.',
              },
              {
                q: 'What is local SEO and do I need it?',
                a: 'Local SEO is the part of search focused on location-based queries, the searches where someone wants a business near them. When a person searches "SEO agency Durban" or "near me," Google leans on local signals to decide who to show, and your Google Business Profile, your service area, and your local presence all feed into that. If your customers are in a specific place and you want to appear the moment they search, then yes, you need it. It is how you show up for the people who are closest to becoming clients.',
              },
              {
                q: 'Do I need a Google Business Profile to rank locally?',
                a: 'A Google Business Profile is a high-value ranking factor and one of the most important pieces of local search. It works off Google Maps, which is where Google can tie your business to a real location with real interactions from real people. It is a core part of your digital home on Google. If local visibility matters to your business, a complete and verified profile is not optional, it is foundational.',
              },
              {
                q: 'How do you measure SEO results?',
                a: "Business owners care about one thing: leads. That is the right thing to care about, but leads often arrive later than expected, and you only know when the phone rings. So while we build toward leads, we measure the work with detailed, specific performance data along the way, using Google Search Console and tools like it to track exactly what is improving and when. We do not hide behind vague reports. As proof, our own case study shows the full Search Console data behind our site's growth, screenshots and all. You can see exactly how we measure, because we show our own numbers.",
              },
              {
                q: 'Why choose ADA over a bigger agency?',
                a: 'Premium execution, AI-augmented, and built for where business is going, not where it has been. We operate with a high level of transparency, and we come from a bigger place than just selling a website or a ranking. ADA is built off the back of Avalon Capital Group, which means we understand business, not just marketing. We take the time to understand your business specifically and exactly what it needs, then we solve those problems precisely and build genuine value. You are not a ticket in a queue. You are the whole point of the engagement.',
              },
              {
                q: 'What does the free website audit include?',
                a: 'The free audit shows you where your site actually stands. It scores your search visibility, your messaging and structure, your technical performance, and whether Google and AI tools can properly understand your business. You get a clear scorecard with the key issues identified, usually within forty-eight hours. It is the fastest way to see what is costing you business before you commit to anything. No charge, no obligation.',
              },
            ].map(({ q, a }, i, arr) => (
              <details
                key={q}
                style={{
                  borderTop: '1px solid var(--border)',
                  padding: '24px 0',
                  ...(i === arr.length - 1 ? { borderBottom: '1px solid var(--border)' } : {}),
                }}
              >
                <summary style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'20px', cursor:'pointer', listStyle:'none', color:'var(--text-light, #F0EDE8)'}}>
                  {q}
                </summary>
                <p style={{fontSize:'14px', color:'var(--text-muted)', lineHeight:1.8, marginTop:'16px'}}>{a}</p>
              </details>
            ))}
          </div>
        </section>
        </ScrollReveal>

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
