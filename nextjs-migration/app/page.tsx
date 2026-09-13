import Link from 'next/link';
import Nav from './components/Nav';
import Footer from './components/Footer';
import PhilosophyGrid from './components/PhilosophyGrid';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Avalon Capital Group | Investment, Brokerage & Digital Services | South Africa',
  description: 'South African business group behind Vantara and ADA, structuring deals, building digital systems, and creating compounding value.',
  alternates: { canonical: 'https://www.avaloncapitalgroup.co.za' },
  twitter: {
    card: 'summary_large_image',
    title: 'Avalon Capital Group | Investment, Brokerage & Digital Services | South Africa',
    description: 'South African business group behind Vantara and ADA, structuring deals, building digital systems, and creating compounding value.',
  },
};

export default function Home() {
  return (
    <>
      <Nav />
      <main id="page-home" className="page active acg-corporate-page" role="main">
        <style
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `
        .acg-corporate-page {
          --acg-paper: #FBF8F3;
          --acg-ink: #221D17;
          --acg-terracotta: #C1682B;
          --acg-terracotta-deep: #96501F;
          --acg-tint: #F3EEE4;

          --black: var(--acg-paper);
          --surface: var(--acg-tint);
          --text: var(--acg-ink);
          --text-light: var(--acg-ink);
          --text-muted: rgba(34,29,23,0.68);
          --text-dim: rgba(34,29,23,0.5);
          --gold: var(--acg-terracotta);
          --gold-light: var(--acg-terracotta);
          --gold-dim: var(--acg-terracotta-deep);
          --border: rgba(34,29,23,0.12);
          --border-hover: rgba(34,29,23,0.22);

          background: var(--acg-paper);
          color: var(--acg-ink);
          font-family: 'DM Sans', sans-serif;
        }
        .acg-corporate-page h1,
        .acg-corporate-page h2,
        .acg-corporate-page .hero-title,
        .acg-corporate-page .section-title,
        .acg-corporate-page .cell-name,
        .acg-corporate-page .footer-logo,
        .acg-corporate-page summary {
          font-family: 'Bodoni Moda', serif !important;
        }
        .acg-corporate-page .btn-primary {
          color: #FFFFFF !important;
        }
        .acg-corporate-page .hero-bg {
          background:
            radial-gradient(ellipse 60% 50% at 80% 50%, rgba(193,104,43,0.06) 0%, transparent 70%),
            radial-gradient(ellipse 40% 60% at 20% 80%, rgba(193,104,43,0.05) 0%, transparent 60%);
        }
        .acg-corporate-page .hero-line {
          background: linear-gradient(to bottom, transparent, rgba(193,104,43,0.08), transparent);
        }
        .acg-corporate-page .structure-grid {
          grid-template-columns: repeat(3, 1fr);
        }
        @media (max-width: 900px) {
          .acg-corporate-page .structure-grid { grid-template-columns: 1fr; }
        }
        .acg-corporate-page .structure-cell {
          border: 1px solid transparent;
          transition: background 0.4s, transform 0.25s ease, border-color 0.25s ease;
        }
        .acg-corporate-page a.structure-cell:hover {
          transform: translateY(-4px);
          border-color: var(--acg-terracotta);
        }
      `,
          }}
        />

        <div className="hero">
          <svg className="inner-hero-geo" style={{position:'absolute', right:'-120px', top:'50%', transform:'translateY(-50%)', opacity:0.11, pointerEvents:'none', zIndex:1}} width="580" height="680" viewBox="0 0 580 680" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" stroke="#C1682B" strokeWidth="0.8">
              <polygon points="290,20 560,640 20,640"/>
              <polygon points="290,80 510,600 70,600"/>
              <polygon points="290,140 460,560 120,560"/>
            </g>
          </svg>
          <div className="hero-bg" aria-hidden="true"></div>
          <div className="hero-line" aria-hidden="true"></div>
          <p className="hero-eyebrow">Avalon Capital Group</p>
          <h1 className="hero-title">One group.<br /><em>Two businesses.</em></h1>
          <p className="hero-subtitle" style={{maxWidth:'560px'}}>Vantara sources vehicles for buyers. ADA builds websites and systems that get businesses found.</p>
          <div className="hero-actions">
            <Link className="btn-primary" href="/contact" style={{color:'#141414'}}>Start a Conversation</Link>
            <Link className="btn-ghost" href="/about">Our Structure</Link>
          </div>
          <div className="hero-scroll" aria-hidden="true">
            <div className="hero-scroll-line"></div>
            Scroll to explore
          </div>
        </div>

        <div className="divider"></div>

        <section aria-labelledby="portfolio-heading">
          <div className="section-label">The Group</div>
          <h2 className="section-title" id="portfolio-heading">What each<br /><em>one does.</em></h2>
          <p className="section-body">Two active divisions, run by the same person, with a third on the way. Vantara works for vehicle buyers. ADA works for businesses that want more customers.</p>

          <div className="structure-grid">
            <Link className="structure-cell" href="/vantara" style={{cursor:'pointer'}}>
              <div className="cell-type">Vehicle Acquisition Advisory</div>
              <div className="cell-name">Vantara</div>
              <div className="cell-desc">Sources, verifies, and negotiates vehicle purchases for buyers, in South Africa or from abroad.</div>
              <span className="cell-link">See how it works</span>
            </Link>
            <Link className="structure-cell" href="/ada" style={{cursor:'pointer'}}>
              <div className="cell-type">Digital Revenue Systems</div>
              <div className="cell-name">ADA</div>
              <div className="cell-desc">Builds websites, SEO, and AI-assisted automation for businesses that want more customers, not more busywork.</div>
              <span className="cell-link">See how it works</span>
            </Link>
            <div className="structure-cell" style={{opacity:0.55, cursor:'default', pointerEvents:'none'}}>
              <div className="cell-type">Business Documents</div>
              <div className="cell-name">Vuma</div>
              <div className="cell-desc">AI-generated quotes, invoices, and compliance documents for South African contractors. Coming soon.</div>
            </div>
          </div>
        </section>

        <div className="divider"></div>

        <section aria-labelledby="philosophy-heading">
          <div className="section-label">Our Philosophy</div>
          <h2 className="section-title" id="philosophy-heading">We help first.<br /><em>We transact second.</em></h2>
          <p className="section-body">Every engagement begins with understanding, not selling. Whether it&apos;s a vehicle or a digital system, the process starts with listening.</p>

          <PhilosophyGrid />
        </section>

        <section style={{paddingTop:0, textAlign:'center'}} aria-labelledby="cta-home">
          <div style={{border:'1px solid var(--border)', padding:'64px 40px', maxWidth:'600px', margin:'0 auto'}}>
            <div className="section-label" style={{justifyContent:'center', marginBottom:'20px'}}>Work With Us</div>
            <h2 style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'34px', fontWeight:300, marginBottom:'16px'}} id="cta-home">Ready to begin?</h2>
            <p style={{fontSize:'13px', color:'var(--text-muted)', lineHeight:1.8, marginBottom:'32px'}}>Whether it&apos;s a vehicle or a digital system, start with a conversation.</p>
            <Link className="btn-primary" href="/contact" style={{color:'#141414'}}>Get in Touch</Link>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
