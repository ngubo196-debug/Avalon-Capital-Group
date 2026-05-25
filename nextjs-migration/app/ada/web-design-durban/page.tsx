import Link from 'next/link';
import Nav from '../../components/Nav';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Web Design Durban | Websites That Rank & Convert | Avalon Digital Agency',
  description: 'Professional web design in Durban that ranks on Google and actually generates leads. Next.js sites built for conversion, speed & long-term results. Free audit available.',
  alternates: { canonical: 'https://www.avaloncapitalgroup.co.za/ada/web-design-durban' },
};

export default function WebDesignDurban() {
  return (
    <>
      <Nav />
      <div id="page-web-design-durban" className="page" role="main">

        <style>{`
          @media (max-width: 768px) {
            .wdd-grid-3 { grid-template-columns: 1fr !important; }
            .wdd-grid-2 { grid-template-columns: 1fr !important; }
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
          <Link className="back-btn" href="/ada" style={{cursor:'pointer', position:'relative', zIndex:10}}>Back to ADA</Link>
          <h1 style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(36px,5vw,64px)', fontWeight:300, lineHeight:1.15, marginBottom:'24px', maxWidth:'640px'}}>Web Design Durban</h1>
          <p style={{maxWidth:'520px', fontSize:'14px', color:'var(--text-muted)', lineHeight:1.9, marginBottom:'36px'}}>Websites built for Google and conversion. No page builders. No technical debt. No invisible traffic.</p>
        </div>

        <section aria-labelledby="problem-heading">
          <div className="section-label">The Problem</div>
          <h2 className="section-title" id="problem-heading">Your website is losing you customers every day.</h2>
          <p className="section-body">Most Durban businesses have websites that look okay, but they&apos;re invisible on Google and quietly losing customers every day. The problem isn&apos;t usually the content. It&apos;s the foundation and conversion architecture.</p>
        </section>

        <div className="divider"></div>

        <section aria-labelledby="what-heading">
          <div className="section-label">What We Build</div>
          <h2 className="section-title" id="what-heading">Three things every site we build must do.</h2>
          <div className="wdd-grid-3" style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'1px', background:'var(--border)', marginTop:'56px'}}>
            <div style={{background:'var(--surface)', padding:'36px'}}>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', marginBottom:'12px'}}>Built for Google from day one</div>
              <div style={{fontSize:'13px', color:'var(--text-muted)', lineHeight:1.8}}>Proper SEO architecture, schema markup, fast Core Web Vitals, and clean indexing from the first deploy.</div>
            </div>
            <div style={{background:'var(--surface)', padding:'36px'}}>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', marginBottom:'12px'}}>Built to convert</div>
              <div style={{fontSize:'13px', color:'var(--text-muted)', lineHeight:1.8}}>Strategic CTAs, trust signals, and clear offers that turn visitors into calls and enquiries.</div>
            </div>
            <div style={{background:'var(--surface)', padding:'36px'}}>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', marginBottom:'12px'}}>Built to last</div>
              <div style={{fontSize:'13px', color:'var(--text-muted)', lineHeight:1.8}}>Next.js. No page builders. No bloated plugins. No technical debt that costs you money two years later.</div>
            </div>
          </div>
        </section>

        <div className="divider"></div>

        <section aria-labelledby="for-heading">
          <div className="section-label">Who It&apos;s For</div>
          <h2 className="section-title" id="for-heading">Built for businesses that compete on quality.</h2>
          <p className="section-body">We work with fleet companies, construction firms, logistics operators, professional services, and retail businesses across Durban and KwaZulu-Natal.</p>
          <div className="wdd-grid-2" style={{display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:'1px', background:'var(--border)', marginTop:'56px'}}>
            <a href="/ada/web-design-fleet-companies" style={{background:'var(--surface)', padding:'36px', display:'block', textDecoration:'none', color:'inherit', transition:'border-color 0.2s'}}>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px'}}>Fleet Companies</div>
            </a>
            <a href="/ada/web-design-construction-kzn" style={{background:'var(--surface)', padding:'36px', display:'block', textDecoration:'none', color:'inherit', transition:'border-color 0.2s'}}>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px'}}>Construction &amp; Civil</div>
            </a>
            <a href="/ada/web-design-logistics-transport" style={{background:'var(--surface)', padding:'36px', display:'block', textDecoration:'none', color:'inherit', transition:'border-color 0.2s'}}>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px'}}>Logistics &amp; Transport</div>
            </a>
            <a href="/ada/web-design-professional-services-durban" style={{background:'var(--surface)', padding:'36px', display:'block', textDecoration:'none', color:'inherit', transition:'border-color 0.2s'}}>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px'}}>Professional Services</div>
            </a>
            <a href="/ada/web-design-retail-ecommerce" style={{background:'var(--surface)', padding:'36px', display:'block', textDecoration:'none', color:'inherit', transition:'border-color 0.2s'}}>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px'}}>Retail &amp; E-commerce</div>
            </a>
            <a href="/ada/web-design-property-real-estate" style={{background:'var(--surface)', padding:'36px', display:'block', textDecoration:'none', color:'inherit', transition:'border-color 0.2s'}}>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px'}}>Property &amp; Real Estate</div>
            </a>
          </div>
        </section>

        <div className="divider"></div>

        <section style={{padding:'64px 0', textAlign:'center'}}>
          <p style={{fontFamily:'Montserrat', fontSize:'13px', letterSpacing:'0.1em', color:'var(--text-muted)', marginBottom:'24px', textTransform:'uppercase'}}>Seen enough?</p>
          <a className="btn-primary" href="/audit">Get Your Free Audit</a>
        </section>

        <div className="divider"></div>

        <section aria-labelledby="proof-heading">
          <div className="section-label">Case Study</div>
          <h2 className="section-title" id="proof-heading">From no presence to fully indexed in 14 days.</h2>
          <p className="section-body">Afripact Civils had no digital presence. We built a fully optimised Next.js site, submitted to Google Search Console, and had all pages indexed within two weeks.</p>
          <Link href="/ada/afripact-civils" style={{fontSize:'12px', letterSpacing:'0.1em', color:'var(--gold)', marginTop:'24px', display:'inline-block'}}>Read the case study →</Link>
        </section>

        <div className="divider"></div>

        <section aria-labelledby="cta-heading">
          <div className="section-label">Get Started</div>
          <h2 className="section-title" id="cta-heading">Let&apos;s build something that actually works.</h2>
          <p className="section-body">Start with a free digital audit. We&apos;ll show you exactly what&apos;s broken and what it&apos;s costing you before you spend a cent.</p>
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
