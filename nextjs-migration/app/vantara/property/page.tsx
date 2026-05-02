import Link from 'next/link';
import Nav from '../../components/Nav';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Property Acquisition | Vantara Deal Insight',
  description: 'Vantara property acquisition: institutional-grade packaging at private investor entry. 11.24% gross yield commercial property in Durban packaged with full feasibility and SPV structure.',
};

export default function VantaraProperty() {
  return (
    <>
      <Nav />
      <div id="page-vantara-property" className="page" role="main">
        <div className="inner-hero">
          <svg className="inner-hero-geo" style={{position:'absolute', right:'-120px', top:'50%', transform:'translateY(-50%)', opacity:0.11, pointerEvents:'none', zIndex:1}} width="580" height="680" viewBox="0 0 580 680" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" stroke="#C9A84C" strokeWidth="0.8">
              <polygon points="290,20 560,640 20,640"/>
              <polygon points="290,80 510,600 70,600"/>
              <polygon points="290,140 460,560 120,560"/>
            </g>
          </svg>
          <div className="inner-hero-bg" aria-hidden="true"></div>
          <Link className="back-btn" href="/vantara" style={{position:'relative', zIndex:9999}}>← Back to Vantara</Link>
          <p style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'11px', letterSpacing:'0.22em', textTransform:'uppercase', color:'var(--gold)', marginBottom:'8px'}}>Vantara · Property Acquisition</p>
          <p style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'13px', letterSpacing:'0.14em', textTransform:'uppercase', color:'var(--text-muted)', fontStyle:'italic', marginBottom:'32px'}}>Deal Insight - Commercial Property</p>
          <h1 style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(36px,5.5vw,68px)', fontWeight:400, lineHeight:1.05, color:'var(--text-primary)', maxWidth:'720px', marginBottom:'28px'}}>Institutional-grade<br />packaging.<br /><em style={{color:'var(--gold)'}}>Private investor entry.</em></h1>
          <p style={{fontSize:'15px', lineHeight:1.8, color:'var(--text-secondary)', maxWidth:'500px', marginBottom:'40px'}}>A commercial property opportunity in Durban, identified, analysed, and packaged by Vantara at an institutional level for a private investor entry of R875 000 into an 11.24% gross yield asset.</p>
        </div>

        <div className="divider"></div>

        <section style={{padding:'80px 60px'}} aria-labelledby="vantara-prop-context">
          <div className="section-label">The Opportunity</div>
          <h2 className="section-title" id="vantara-prop-context">A high-yield asset in a<br /><em>gentrifying Durban node.</em></h2>
          <p className="section-body" style={{maxWidth:'600px'}}>A three-storey commercial building in Windermere, Durban, listed at R8 750 000 with verified rental income of R82 000 per month. At an 11.24% gross yield, it sat in the top quartile of available commercial property in the Durban market, where the average yield ranges between 7% and 10%.</p>
          <p className="section-body" style={{maxWidth:'600px', marginTop:'16px'}}>The opportunity was not simply that the numbers were strong. It was that most private investors would never have identified it, known how to evaluate it, or had the tools to structure their entry into it. Vantara&apos;s role was to close that gap entirely: from identification through to investor-ready packaging.</p>

          <div style={{display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:'1px', background:'var(--border)', marginTop:'48px'}}>
            <div style={{background:'var(--surface)', padding:'32px 28px'}}>
              <p style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'36px', fontWeight:300, color:'var(--gold)', lineHeight:1, marginBottom:'10px'}}>11.24%</p>
              <p style={{fontSize:'12px', lineHeight:1.75, color:'var(--text-secondary)'}}>Gross yield, verified from existing tenancy. Market average 7%–10%.</p>
            </div>
            <div style={{background:'var(--surface)', padding:'32px 28px'}}>
              <p style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'36px', fontWeight:300, color:'var(--gold)', lineHeight:1, marginBottom:'10px'}}>R875k</p>
              <p style={{fontSize:'12px', lineHeight:1.75, color:'var(--text-secondary)'}}>Investor entry point: 10% equity stake in a dedicated SPV structure.</p>
            </div>
            <div style={{background:'var(--surface)', padding:'32px 28px'}}>
              <p style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'36px', fontWeight:300, color:'var(--gold)', lineHeight:1, marginBottom:'10px'}}>920m²</p>
              <p style={{fontSize:'12px', lineHeight:1.75, color:'var(--text-secondary)'}}>Gross lettable area across three floors. General Business zoning, maximum flexibility.</p>
            </div>
            <div style={{background:'var(--surface)', padding:'32px 28px'}}>
              <p style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'36px', fontWeight:300, color:'var(--gold)', lineHeight:1, marginBottom:'10px'}}>13.1%</p>
              <p style={{fontSize:'12px', lineHeight:1.75, color:'var(--text-secondary)'}}>Implied annualised IRR: base case over 5 years at 8% rental escalation.</p>
            </div>
          </div>
        </section>

        <div className="divider"></div>

        <section style={{padding:'80px 60px'}} aria-labelledby="vantara-prop-work">
          <div className="section-label">The Work</div>
          <h2 className="section-title" id="vantara-prop-work">Not how agents work.<br /><em>How private equity works.</em></h2>
          <p className="section-body" style={{maxWidth:'600px'}}>Vantara produced a full 19-section investment and feasibility report, the same standard of analysis that institutional investors commission before deploying capital. This is what the work looked like.</p>

          <div style={{display:'flex', flexDirection:'column', gap:'1px', background:'var(--border)', marginTop:'48px'}}>
            <div style={{background:'var(--surface)', padding:'40px', display:'grid', gridTemplateColumns:'200px 1fr', gap:'40px', alignItems:'start'}}>
              <p style={{fontSize:'10px', letterSpacing:'0.22em', textTransform:'uppercase', color:'var(--gold)', paddingTop:'4px'}}>Area Study</p>
              <p style={{fontSize:'14px', lineHeight:1.85, color:'var(--text-secondary)'}}>Full analysis of Windermere as a commercial node: historical context, gentrification trajectory, key amenity mapping, competitor supply analysis, and proximity to demand drivers including Florida Road, Durban CBD, and the elite school cluster. Location scored against nine investment criteria with a composite rating of 4.1/5.0.</p>
            </div>
            <div style={{background:'var(--surface)', padding:'40px', display:'grid', gridTemplateColumns:'200px 1fr', gap:'40px', alignItems:'start'}}>
              <p style={{fontSize:'10px', letterSpacing:'0.22em', textTransform:'uppercase', color:'var(--gold)', paddingTop:'4px'}}>Full Feasibility</p>
              <p style={{fontSize:'14px', lineHeight:1.85, color:'var(--text-secondary)'}}>Market demand feasibility, physical feasibility, and financial viability assessed independently. Vacancy rate analysis, rental upside modelling, break-even rate calculation, and parking constraint assessment, all documented with a clear feasibility verdict.</p>
            </div>
            <div style={{background:'var(--surface)', padding:'40px', display:'grid', gridTemplateColumns:'200px 1fr', gap:'40px', alignItems:'start'}}>
              <p style={{fontSize:'10px', letterSpacing:'0.22em', textTransform:'uppercase', color:'var(--gold)', paddingTop:'4px'}}>Financial Modelling</p>
              <p style={{fontSize:'14px', lineHeight:1.85, color:'var(--text-secondary)'}}>Full Year 1 income and expense statement. Five-year projections across three scenarios: bear, base, and bull, with rental escalation and capital appreciation assumptions modelled separately. Total investor return calculated for each scenario, including capital gain share and income return on the R875 000 equity stake.</p>
            </div>
            <div style={{background:'var(--surface)', padding:'40px', display:'grid', gridTemplateColumns:'200px 1fr', gap:'40px', alignItems:'start'}}>
              <p style={{fontSize:'10px', letterSpacing:'0.22em', textTransform:'uppercase', color:'var(--gold)', paddingTop:'4px'}}>Risk Register</p>
              <p style={{fontSize:'14px', lineHeight:1.85, color:'var(--text-secondary)'}}>Every significant risk identified and rated: property-specific, location-based, and macro-economic. Each risk paired with a specific strategic mitigant. Nothing hidden, nothing glossed over. An investor reading this report knows exactly what they are taking on and how each risk is managed.</p>
            </div>
            <div style={{background:'var(--surface)', padding:'40px', display:'grid', gridTemplateColumns:'200px 1fr', gap:'40px', alignItems:'start'}}>
              <p style={{fontSize:'10px', letterSpacing:'0.22em', textTransform:'uppercase', color:'var(--gold)', paddingTop:'4px'}}>Investor Structure</p>
              <p style={{fontSize:'14px', lineHeight:1.85, color:'var(--text-secondary)'}}>A dedicated SPV, a separate (Pty) Ltd registered solely to hold the property, with the investor holding a 10% equity stake. Priority return clause protecting the investor&apos;s capital. Full mechanics: rental income flow, monthly distributions, exit options, and governance via a Shareholders&apos; Agreement. Investor year 1 cash yield estimated at 7.37%–7.84% on capital deployed.</p>
            </div>
            <div style={{background:'var(--surface)', padding:'40px', display:'grid', gridTemplateColumns:'200px 1fr', gap:'40px', alignItems:'start'}}>
              <p style={{fontSize:'10px', letterSpacing:'0.22em', textTransform:'uppercase', color:'var(--gold)', paddingTop:'4px'}}>Acquisition Roadmap</p>
              <p style={{fontSize:'14px', lineHeight:1.85, color:'var(--text-secondary)'}}>Full acquisition cost breakdown including transfer duty, conveyancing, bond registration, due diligence, and contingency. Phased strategy across three phases: Secure &amp; Stabilise, Value-Add, and Exit or Refinance. Eight immediate action items with responsible parties and deadlines assigned.</p>
            </div>
          </div>
        </section>

        <div className="divider"></div>

        <section style={{padding:'80px 60px', background:'var(--surface)'}} aria-labelledby="vantara-prop-shows">
          <div className="section-label">What This Shows</div>
          <h2 className="section-title" id="vantara-prop-shows">The gap between an agent<br /><em>and an acquisition partner.</em></h2>
          <p className="section-body" style={{maxWidth:'600px'}}>A property agent shows you the listing. Vantara shows you whether the listing is worth your capital, and exactly how to structure your entry if it is.</p>
          <p className="section-body" style={{maxWidth:'600px', marginTop:'16px'}}>The Windermere report is not a marketing document. It is a decision tool, built to the standard that allows an investor to say yes or no with full confidence in either direction. That is what Vantara brings to every property mandate.</p>
          <p className="section-body" style={{maxWidth:'600px', marginTop:'16px'}}>Most private investors never get access to this level of analysis. They rely on the agent&apos;s word, a yield calculation on the back of a napkin, and hope. Vantara removes hope from the equation entirely.</p>
        </section>

        <div className="divider"></div>

        <section style={{padding:'100px 60px', textAlign:'center'}}>
          <div className="section-label" style={{justifyContent:'center'}}>Deploy capital with clarity</div>
          <h2 className="section-title" style={{textAlign:'center'}}>Looking to invest<br /><em>in property?</em></h2>
          <p className="section-body" style={{maxWidth:'440px', margin:'0 auto 40px'}}>Tell us what you are looking to deploy and what return profile you need. We will identify the opportunity and package it properly.</p>
          <div style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'16px'}}>
            <a href="https://wa.me/27712205313?text=Hi%2C%20I%27d%20like%20to%20discuss%20a%20property%20acquisition%20with%20Vantara." target="_blank" rel="noopener noreferrer" className="btn-primary" style={{position:'relative', zIndex:9999}}>Start the Conversation</a>
            <Link className="btn-ghost" href="/vantara" style={{position:'relative', zIndex:9999}}>Back to Vantara</Link>
          </div>
        </section>

        <div className="divider"></div>

        <footer style={{borderTop:'1px solid var(--border)', padding:'40px 60px', display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:'16px'}}>
          <p style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'14px', letterSpacing:'0.1em', color:'var(--text-muted)'}}><strong style={{color:'var(--gold)', fontWeight:400}}>Vantara</strong> - A Division of Avalon Capital Group</p>
          <p style={{fontSize:'11px', color:'var(--text-muted)', letterSpacing:'0.06em'}}>Durban, KwaZulu-Natal · South Africa</p>
          <div style={{width:'100%', paddingTop:'20px', borderTop:'1px solid var(--border)', marginTop:'4px'}}>
            <p style={{fontSize:'11px', color:'var(--text-dim)', marginBottom:'8px'}}>Avalon Capital Group (Pty) Ltd &middot; Reg. No. 2025/671885/07 &middot; Durban, KwaZulu-Natal, South Africa</p>
            <p style={{fontSize:'12px', color:'var(--text-dim)', lineHeight:1.7, marginBottom:'12px'}}>Avalon Capital Group does not provide financial, investment, or legal advice. All information shared is for general informational purposes only. Clients are encouraged to consult with licensed professionals before making any investment or business decisions.</p>
            <p style={{fontSize:'11px'}}><a href="/privacy-policy" style={{color:'var(--gold)', textDecoration:'none', marginRight:'24px'}}>Privacy Policy</a><a href="/terms-of-service" style={{color:'var(--gold)', textDecoration:'none'}}>Terms of Service</a></p>
          </div>
        </footer>
      </div>
    </>
  );
}
