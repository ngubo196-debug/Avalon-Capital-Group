import Link from 'next/link';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Canopy Courier: Case Study | Avalon Digital Agency',
  description: 'How ADA built a fleet revenue system for Canopy Courier. Durban, KwaZulu-Natal.',
  alternates: { canonical: 'https://www.avaloncapitalgroup.co.za/ada/canopy-courier' },
};

export default function CanopyCourier() {
  return (
    <>
      <Nav />
      <div id="page-canopy-courier" className="page" role="main">
        <div className="inner-hero">
          <svg className="inner-hero-geo" style={{position:'absolute', right:'-120px', top:'50%', transform:'translateY(-50%)', opacity:0.11, pointerEvents:'none', zIndex:1}} width="580" height="680" viewBox="0 0 580 680" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" stroke="#C9A84C" strokeWidth="0.8">
              <polygon points="290,20 560,640 20,640"/>
              <polygon points="290,80 510,600 70,600"/>
              <polygon points="290,140 460,560 120,560"/>
            </g>
          </svg>
          <div className="inner-hero-bg" aria-hidden="true"></div>
          <Link className="back-btn" href="/ada" style={{position:'relative', zIndex:10}}>← Back to ADA</Link>
          <div className="section-label">Case study - Canopy Courier</div>
          <h1 style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(36px,5vw,64px)', fontWeight:300, lineHeight:1.15, marginBottom:'24px', maxWidth:'640px'}}>From a retail shop to a fleet revenue system.</h1>
          <p style={{maxWidth:'520px', fontSize:'14px', color:'var(--text-muted)', lineHeight:1.9, marginBottom:'48px'}}>Canopy Courier had a strong service, a loyal customer base, and a website that was leaving most of their revenue potential completely untouched. This is the story of what we found, what we built, and what it means for the business going forward.</p>
          <div style={{display:'flex', gap:'1px', background:'var(--border)', flexWrap:'wrap', maxWidth:'640px'}}>
            <div style={{background:'var(--black)', padding:'20px 28px', flex:1, minWidth:'160px'}}>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', fontWeight:300, marginBottom:'6px'}}>8 deliverables</div>
              <div style={{fontSize:'9px', letterSpacing:'0.2em', textTransform:'uppercase', color:'var(--text-muted)'}}>Scope of build</div>
            </div>
            <div style={{background:'var(--black)', padding:'20px 28px', flex:1, minWidth:'160px'}}>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', fontWeight:300, marginBottom:'6px'}}>Retail + fleet</div>
              <div style={{fontSize:'9px', letterSpacing:'0.2em', textTransform:'uppercase', color:'var(--text-muted)'}}>Dual revenue path</div>
            </div>
            <div style={{background:'var(--black)', padding:'20px 28px', flex:1, minWidth:'160px'}}>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', fontWeight:300, marginBottom:'6px'}}>R1M – R2M</div>
              <div style={{fontSize:'9px', letterSpacing:'0.2em', textTransform:'uppercase', color:'var(--gold)'}}>Projected annual upside</div>
            </div>
          </div>
        </div>

        <div className="divider"></div>

        <section style={{padding:'80px 60px'}} aria-labelledby="canopy-situation">
          <div className="section-label">The situation</div>
          <h2 className="section-title" id="canopy-situation">Strong service.<br /><em>Silent on the biggest opportunity.</em></h2>
          <p className="section-body">Canopy Courier is a KZN-based canopy specialist: installations, repairs, fitment, parts. Fast turnaround. Experienced team. Nationwide delivery capability. Trusted by hundreds of customers over many years. By every operational measure, a strong business.</p>
          <p className="section-body" style={{marginTop:'20px'}}>But when we looked at the digital presence, the story was different. The website was built entirely around the retail walk-in customer, someone who already knew they needed a canopy and just needed a number to call. That customer is real and valuable. The problem is they represent only one slice of the revenue available to a business like this.</p>
          <p className="section-body" style={{marginTop:'20px'}}>Fleet clients, construction firms, logistics companies, security businesses, municipal vehicles, represent recurring, high-volume, predictable income. One fleet contract alone can mean 10 to 50 installations, ongoing maintenance, and a relationship that compounds over years. None of that was being captured. The website had no fleet page, no fleet offer, no language that spoke to a fleet manager. That revenue was invisible because the business was invisible to the people holding it.</p>
        </section>

        <div className="divider"></div>

        <section style={{padding:'80px 60px'}} aria-labelledby="canopy-numbers">
          <div className="section-label">The problem in numbers</div>
          <h2 className="section-title" id="canopy-numbers">A strategy problem<br /><em>that design had to solve.</em></h2>
          <p className="section-body">The gap between where Canopy Courier was and where the business could be wasn&apos;t a design problem. It was a strategy problem that design had to solve.</p>
          <blockquote style={{marginTop:'48px', paddingLeft:'24px', borderLeft:'2px solid var(--gold)', maxWidth:'560px'}}>
            <p style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(18px,2vw,24px)', fontWeight:300, fontStyle:'italic', lineHeight:1.5, color:'var(--text)'}}>A single retail customer is worth R3,000–R8,000. A single fleet client is worth R100,000–R500,000 per year. Five fleet clients alone represents R1.2M in annual recurring revenue.</p>
            <cite style={{display:'block', marginTop:'14px', fontSize:'11px', letterSpacing:'0.1em', textTransform:'uppercase', color:'var(--text-muted)', fontStyle:'normal'}}>Revenue modelling: ADA strategy analysis</cite>
          </blockquote>
          <p className="section-body" style={{marginTop:'40px'}}>The website was optimised for the smaller opportunity and silent on the larger one. Every week without fleet positioning was revenue left on the table, not because the service wasn&apos;t there, but because the digital infrastructure wasn&apos;t.</p>
          <p style={{marginTop:'32px', fontSize:'12px', fontStyle:'italic', color:'var(--text-dim)', lineHeight:1.8}}>Past performance is not indicative of future results. All figures shown are for illustrative purposes and may vary based on market conditions and individual circumstances. This does not constitute financial or investment advice.</p>
        </section>

        <div className="divider"></div>

        <section style={{padding:'80px 60px'}} aria-labelledby="canopy-built">
          <div className="section-label">What we built</div>
          <h2 className="section-title" id="canopy-built">Eight deliverables.<br /><em>One coherent system.</em></h2>
          <p className="section-body">Eight deliverables. One coherent system. Everything was built around a single strategic principle: a business with two distinct customer types needs two distinct conversion paths running in parallel.</p>
          <div style={{display:'grid', gap:'1px', background:'var(--border)', marginTop:'56px'}}>
            <div style={{background:'var(--surface)', padding:'40px'}}>
              <div style={{fontSize:'9px', letterSpacing:'0.25em', textTransform:'uppercase', color:'var(--gold)', marginBottom:'16px'}}>01</div>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', marginBottom:'14px'}}>Brand repositioning</div>
              <div style={{fontSize:'13px', color:'var(--text-muted)', lineHeight:1.8}}>From generic canopy shop to KZN&apos;s trusted canopy specialist. Clear speed and reliability promise.</div>
            </div>
            <div style={{background:'var(--surface)', padding:'40px'}}>
              <div style={{fontSize:'9px', letterSpacing:'0.25em', textTransform:'uppercase', color:'var(--gold)', marginBottom:'16px'}}>02</div>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', marginBottom:'14px'}}>Dual-path homepage</div>
              <div style={{fontSize:'13px', color:'var(--text-muted)', lineHeight:1.8}}>Retail path: same-day quote. Fleet path: book a fleet assessment. Two buyers, two offers, one page.</div>
            </div>
            <div style={{background:'var(--surface)', padding:'40px'}}>
              <div style={{fontSize:'9px', letterSpacing:'0.25em', textTransform:'uppercase', color:'var(--gold)', marginBottom:'16px'}}>03</div>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', marginBottom:'14px'}}>Fleet money page</div>
              <div style={{fontSize:'13px', color:'var(--text-muted)', lineHeight:1.8}}>A dedicated page built to sell a contract, not inform. Opens on fleet downtime costs. Closes on the Fleet Performance Package.</div>
            </div>
            <div style={{background:'var(--surface)', padding:'40px'}}>
              <div style={{fontSize:'9px', letterSpacing:'0.25em', textTransform:'uppercase', color:'var(--gold)', marginBottom:'16px'}}>04</div>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', marginBottom:'14px'}}>Fleet Performance Package</div>
              <div style={{fontSize:'13px', color:'var(--text-muted)', lineHeight:1.8}}>A structured commercial offer: priority turnaround, dedicated contact, bulk pricing, scheduled maintenance, emergency support.</div>
            </div>
            <div style={{background:'var(--surface)', padding:'40px'}}>
              <div style={{fontSize:'9px', letterSpacing:'0.25em', textTransform:'uppercase', color:'var(--gold)', marginBottom:'16px'}}>05</div>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', marginBottom:'14px'}}>Service pages</div>
              <div style={{fontSize:'13px', color:'var(--text-muted)', lineHeight:1.8}}>Canopies, repairs, fitment, fleet: each with its own page, its own intent, its own conversion path.</div>
            </div>
            <div style={{background:'var(--surface)', padding:'40px'}}>
              <div style={{fontSize:'9px', letterSpacing:'0.25em', textTransform:'uppercase', color:'var(--gold)', marginBottom:'16px'}}>06</div>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', marginBottom:'14px'}}>SEO architecture</div>
              <div style={{fontSize:'13px', color:'var(--text-muted)', lineHeight:1.8}}>Four dedicated landing pages targeting high-intent searches: canopy repairs Durban, bakkie canopies KZN, fitment Durban, fleet solutions SA.</div>
            </div>
            <div style={{background:'var(--surface)', padding:'40px'}}>
              <div style={{fontSize:'9px', letterSpacing:'0.25em', textTransform:'uppercase', color:'var(--gold)', marginBottom:'16px'}}>07</div>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', marginBottom:'14px'}}>Mobile-first conversion</div>
              <div style={{fontSize:'13px', color:'var(--text-muted)', lineHeight:1.8}}>Sticky call bar, floating WhatsApp button, urgency triggers. Built for how 70%+ of SA web traffic actually behaves.</div>
            </div>
            <div style={{background:'var(--surface)', padding:'40px'}}>
              <div style={{fontSize:'9px', letterSpacing:'0.25em', textTransform:'uppercase', color:'var(--gold)', marginBottom:'16px'}}>08</div>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', marginBottom:'14px'}}>Lead capture system</div>
              <div style={{fontSize:'13px', color:'var(--text-muted)', lineHeight:1.8}}>Fleet-optimised enquiry form: vehicle count, urgency, company name. No more cold, unqualified leads.</div>
            </div>
          </div>
        </section>

        <div className="divider"></div>

        <section style={{padding:'80px 60px'}} aria-labelledby="canopy-outcome">
          <div className="section-label">The outcome</div>
          <h2 className="section-title" id="canopy-outcome">A website that does<br /><em>more than exist.</em></h2>
          <p className="section-body">Canopy Courier now has a website that does more than exist. It qualifies leads, separates retail from fleet, builds trust before the phone rings, and drives enquiries around the clock. The business looks like it operates at the level it actually operates at.</p>
          <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'1px', background:'var(--border)', marginTop:'56px'}}>
            <div style={{background:'var(--surface)', padding:'40px'}}>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', marginBottom:'14px'}}>Immediate credibility</div>
              <div style={{fontSize:'13px', color:'var(--text-muted)', lineHeight:1.8}}>Premium positioning aligned with the quality of the actual service.</div>
            </div>
            <div style={{background:'var(--surface)', padding:'40px'}}>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', marginBottom:'14px'}}>Fleet pipeline open</div>
              <div style={{fontSize:'13px', color:'var(--text-muted)', lineHeight:1.8}}>The infrastructure to attract and convert high-value fleet clients is live.</div>
            </div>
            <div style={{background:'var(--surface)', padding:'40px'}}>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', marginBottom:'14px'}}>SEO foundation built</div>
              <div style={{fontSize:'13px', color:'var(--text-muted)', lineHeight:1.8}}>Ranking for high-intent KZN searches as the pages index and build authority.</div>
            </div>
          </div>
        </section>

        <div className="divider"></div>

        <section style={{padding:'80px 60px'}}>
          <div style={{background:'var(--surface)', border:'1px solid var(--border)', padding:'48px', maxWidth:'100%'}}>
            <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(22px,2.5vw,30px)', fontWeight:300, lineHeight:1.3, marginBottom:'20px', maxWidth:'580px'}}>One fleet client more than covers the cost of the entire project. Every month after that is compounding return.</div>
            <p style={{fontSize:'13px', color:'var(--text-muted)', lineHeight:1.9, maxWidth:'580px', marginBottom:'36px'}}>This is what we mean by conversion infrastructure. Not a website that looks good in a screenshot. A system that generates revenue while you&apos;re focused on the work.</p>
            <a className="btn-primary" href="https://wa.me/27712205313?text=Hi%20Luyanda%2C%20I%27d%20like%20to%20discuss%20a%20project%20with%20ADA." target="_blank" rel="noopener noreferrer" style={{position:'relative', zIndex:9999, display:'inline-block'}}>Start a project</a>
          </div>
        </section>

        <div className="divider"></div>

        <Footer />
      </div>
    </>
  );
}
