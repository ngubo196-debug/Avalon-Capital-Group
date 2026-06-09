import Link from 'next/link';
import Nav from '../../components/Nav';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO Agency Durban | Rank on Google & Get Found | Avalon Digital Agency',
  description: 'SEO services in Durban that get your business ranking on Google. Avalon Digital Agency builds search visibility for KwaZulu-Natal businesses that want consistent organic leads.',
  alternates: { canonical: 'https://www.avaloncapitalgroup.co.za/ada/seo-agency-durban' },
};

export default function SeoAgencyDurban() {
  return (
    <>
      <Nav />
      <div id="page-seo-agency-durban" className="page" role="main">

        <style>{`
          @media (max-width: 768px) {
            .seo-grid-3 { grid-template-columns: 1fr !important; }
            .seo-grid-2 { grid-template-columns: 1fr !important; }
          }
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

          <p className="section-body">From a site Google could not read at all — one indexed page, no search visibility — to ranking for 45 unique commercial queries across Durban and KwaZulu-Natal. No paid ads. Built and structured by ADA.</p>

          <Link href="/ada/acg-case-study" style={{fontSize:'12px', letterSpacing:'0.1em', color:'var(--gold)', marginTop:'24px', display:'inline-block'}}>Read the ACG case study →</Link>
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
