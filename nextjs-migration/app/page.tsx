import Link from 'next/link';
import Nav from './components/Nav';
import Footer from './components/Footer';
import PhilosophyGrid from './components/PhilosophyGrid';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Avalon Capital Group | Investment, Brokerage & Digital Services | South Africa',
  description: 'South African business group behind Vantara and Avalon Digital Agency, structuring deals, building digital systems, and creating compounding value.',
  alternates: { canonical: 'https://www.avaloncapitalgroup.co.za' },
};

export default function Home() {
  return (
    <>
      <Nav />
      <main id="page-home" className="page active" role="main">

        <div className="hero">
          <svg className="inner-hero-geo" style={{position:'absolute', right:'-120px', top:'50%', transform:'translateY(-50%)', opacity:0.11, pointerEvents:'none', zIndex:1}} width="580" height="680" viewBox="0 0 580 680" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" stroke="#C9A84C" strokeWidth="0.8">
              <polygon points="290,20 560,640 20,640"/>
              <polygon points="290,80 510,600 70,600"/>
              <polygon points="290,140 460,560 120,560"/>
            </g>
          </svg>
          <div className="hero-bg" aria-hidden="true"></div>
          <div className="hero-line" aria-hidden="true"></div>
          <img
            src="/assets/acg-logo.jpg"
            alt="Avalon Capital Group"
            style={{height:'240px', width:'auto', maxWidth:'500px', display:'block', marginBottom:'32px', objectFit:'contain', mixBlendMode:'screen'}}
          />
          <p className="hero-eyebrow">Avalon Capital Group</p>
          <h1 className="hero-title">Where Capital<br />Meets <em>Precision.</em></h1>
          <h2 style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(16px, 1.4vw, 20px)', fontWeight:400, color:'#8A8680', margin:'0.5rem 0 1rem', lineHeight:1.5, display:'block', visibility:'visible', maxWidth:'480px'}}>Avalon Capital Group structures business acquisitions and builds revenue-generating digital systems across South Africa.</h2>
          <p className="hero-subtitle">Two divisions. One mandate: build businesses that compound.</p>
          <div className="hero-actions">
            <Link className="btn-primary" href="/about" style={{color:'#141414'}}>Our Structure</Link>
            <Link className="btn-ghost" href="/contact">Start a Conversation</Link>
          </div>
          <div className="hero-scroll" aria-hidden="true">
            <div className="hero-scroll-line"></div>
            Scroll to explore
          </div>
        </div>

        <div className="divider"></div>

        <section aria-labelledby="portfolio-heading">
          <div className="section-label">The Group</div>
          <h2 className="section-title" id="portfolio-heading">Two divisions.<br /><em>One standard.</em></h2>
          <p className="section-body">Avalon Capital Group operates through focused, independent businesses, each built to generate value in its market while sharing the group&apos;s commitment to precision, professionalism, and results.</p>

          <div className="structure-grid">
            <Link className="structure-cell" href="/vantara" style={{cursor:'pointer'}}>
              <div className="cell-type">Acquisition &amp; Brokerage</div>
              <div className="cell-name">Vantara</div>
              <div className="cell-desc">Premium brokerage specialising in vehicle acquisition, asset deals, and strategic transactions. Advisory-first. We act in your interest, not the market&apos;s.</div>
              <span className="cell-link">Explore Vantara</span>
            </Link>
            <Link className="structure-cell" href="/ada" style={{cursor:'pointer'}}>
              <div className="cell-type">Digital &amp; AI Services</div>
              <div className="cell-name">Avalon Digital Agency</div>
              <div className="cell-desc">AI-powered websites, automation systems, and digital infrastructure that attract, convert, and retain customers, without constant manual intervention.</div>
              <span className="cell-link">Explore ADA</span>
            </Link>
          </div>
        </section>

        <div className="divider"></div>

        <section aria-labelledby="philosophy-heading">
          <div className="section-label">Our Philosophy</div>
          <h2 className="section-title" id="philosophy-heading">We help first.<br /><em>We transact second.</em></h2>
          <p className="section-body">Every engagement begins with understanding, not selling. Whether you&apos;re acquiring a vehicle, a property, or a digital system, the process starts with listening.</p>

          <PhilosophyGrid />
        </section>

        <section style={{paddingTop:0, textAlign:'center'}} aria-labelledby="cta-home">
          <div style={{border:'1px solid var(--border)', padding:'64px 40px', maxWidth:'600px', margin:'0 auto'}}>
            <div className="section-label" style={{justifyContent:'center', marginBottom:'20px'}}>Work With Us</div>
            <h2 style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'34px', fontWeight:300, marginBottom:'16px'}} id="cta-home">Ready to begin?</h2>
            <p style={{fontSize:'13px', color:'var(--text-muted)', lineHeight:1.8, marginBottom:'32px'}}>Whether you need a deal structured, a vehicle sourced, or a digital system built: start with a conversation.</p>
            <Link className="btn-primary" href="/contact" style={{color:'#141414'}}>Get in Touch</Link>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
