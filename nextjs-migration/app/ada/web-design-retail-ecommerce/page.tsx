import Link from 'next/link';
import Nav from '../../components/Nav';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Web Design for Retail & E-commerce South Africa | Avalon Digital Agency',
  description: 'Website design for retail and e-commerce businesses across South Africa. Built to rank on Google, load fast, and turn visitors into paying customers.',
  alternates: { canonical: 'https://www.avaloncapitalgroup.co.za/ada/web-design-retail-ecommerce' },
};

export default function WebDesignRetailEcommerce() {
  return (
    <>
      <Nav />
      <div id="page-web-design-retail" className="page" role="main">

        <style>{`
          @media (max-width: 768px) {
            .wdr-grid-3 { grid-template-columns: 1fr !important; }
            .wdr-grid-2 { grid-template-columns: 1fr !important; }
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
          <Link className="back-btn" href="/ada/web-design-durban" style={{cursor:'pointer', position:'relative', zIndex:10}}>Web Design Durban</Link>
          <h1 style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(36px,5vw,64px)', fontWeight:300, lineHeight:1.15, marginBottom:'24px', maxWidth:'640px'}}>Web Design for Retail &amp; E-commerce Businesses in South Africa</h1>
          <p style={{maxWidth:'520px', fontSize:'14px', color:'var(--text-muted)', lineHeight:1.9, marginBottom:'36px'}}>Your store is open 24 hours. Your website should be working just as hard.</p>
        </div>

        <section aria-labelledby="problem-heading">
          <div className="section-label">The Problem</div>
          <h2 className="section-title" id="problem-heading">Most South African retail websites are losing sales every day without knowing it.</h2>
          <p className="section-body">Slow load times, poor mobile experience, and weak SEO are invisible problems that cost retail businesses thousands in lost sales monthly. Customers who cannot find you or cannot load your site buy from someone else.</p>
        </section>

        <div className="divider"></div>

        <section aria-labelledby="what-heading">
          <div className="section-label">What We Build</div>
          <h2 className="section-title" id="what-heading">A retail website built to sell.</h2>
          <div className="wdr-grid-3" style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'1px', background:'var(--border)', marginTop:'56px'}}>
            <div style={{background:'var(--surface)', padding:'36px'}}>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', marginBottom:'12px'}}>Speed and performance first</div>
              <div style={{fontSize:'13px', color:'var(--text-muted)', lineHeight:1.8}}>Next.js sites that load in under two seconds on South African mobile networks. Fast sites rank higher and convert better.</div>
            </div>
            <div style={{background:'var(--surface)', padding:'36px'}}>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', marginBottom:'12px'}}>Search visibility for product queries</div>
              <div style={{fontSize:'13px', color:'var(--text-muted)', lineHeight:1.8}}>SEO architecture that gets your products and categories ranking for high-intent searches. Organic traffic that compounds over time.</div>
            </div>
            <div style={{background:'var(--surface)', padding:'36px'}}>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', marginBottom:'12px'}}>Conversion architecture</div>
              <div style={{fontSize:'13px', color:'var(--text-muted)', lineHeight:1.8}}>Product pages, checkout flows, and trust signals designed to reduce drop-off and turn browsers into buyers.</div>
            </div>
          </div>
        </section>

        <div className="divider"></div>

        <section aria-labelledby="for-heading">
          <div className="section-label">Who It&apos;s For</div>
          <h2 className="section-title" id="for-heading">Built for retail and e-commerce businesses across South Africa.</h2>
          <p className="section-body">Whether you sell in-store, online, or both, your digital presence should be driving revenue around the clock.</p>
          <div className="wdr-grid-2" style={{display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:'1px', background:'var(--border)', marginTop:'56px'}}>
            <div style={{background:'var(--surface)', padding:'36px'}}>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px'}}>Online Stores &amp; E-commerce</div>
            </div>
            <div style={{background:'var(--surface)', padding:'36px'}}>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px'}}>Brick and Mortar Retailers</div>
            </div>
            <div style={{background:'var(--surface)', padding:'36px'}}>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px'}}>Wholesale &amp; Trade Suppliers</div>
            </div>
            <div style={{background:'var(--surface)', padding:'36px'}}>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px'}}>Service Retailers</div>
            </div>
          </div>
        </section>

        <div className="divider"></div>

        <section style={{padding:'64px 0', textAlign:'center'}}>
          <p style={{fontFamily:'Montserrat', fontSize:'13px', letterSpacing:'0.1em', color:'var(--text-muted)', marginBottom:'24px', textTransform:'uppercase'}}>Seen enough?</p>
          <a className="btn-primary" href="/audit">Get Your Free Audit</a>
        </section>

        <div className="divider"></div>

        <section aria-labelledby="proof-heading">
          <div className="section-label">Our Work</div>
          <h2 className="section-title" id="proof-heading">Built for businesses that cannot afford a slow website.</h2>
          <p className="section-body">We build on Next.js, the same framework used by some of the fastest retail sites in the world. Every site we build is optimised for Core Web Vitals, mobile performance, and search indexing from day one.</p>
          <Link href="/ada/web-design-durban" style={{fontSize:'12px', letterSpacing:'0.1em', color:'var(--gold)', marginTop:'24px', display:'inline-block'}}>See how we build →</Link>
        </section>

        <div className="divider"></div>

        <section aria-labelledby="cta-heading">
          <div className="section-label">Get Started</div>
          <h2 className="section-title" id="cta-heading">Let&apos;s build a store that sells while you sleep.</h2>
          <p className="section-body">Start with a free digital audit. We will show you exactly what your current site is costing you in lost sales before you spend a cent.</p>
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
