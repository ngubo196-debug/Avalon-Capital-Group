import Link from 'next/link';
import Nav from '../../components/Nav';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vehicle Acquisition | Vantara Deal Insight',
  description: 'Vantara automotive deal execution: two dealers, one client, every variable controlled. Trade-in arbitrage, dealer incentive extraction, and multi-scenario finance modelling.',
};

export default function VantaraAutomotive() {
  return (
    <>
      <Nav />
      <div id="page-vantara-automotive" className="page" role="main">
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
          <p style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'11px', letterSpacing:'0.22em', textTransform:'uppercase', color:'var(--gold)', marginBottom:'8px'}}>Vantara · Automotive Deal Execution</p>
          <p style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'13px', letterSpacing:'0.14em', textTransform:'uppercase', color:'var(--text-muted)', fontStyle:'italic', marginBottom:'32px'}}>Deal Insight - Vehicle Acquisition</p>
          <h1 style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(36px,5.5vw,68px)', fontWeight:400, lineHeight:1.05, color:'var(--text-primary)', maxWidth:'720px', marginBottom:'28px'}}>Two dealers.<br />One client.<br /><em style={{color:'var(--gold)'}}>Every variable controlled.</em></h1>
          <p style={{fontSize:'15px', lineHeight:1.8, color:'var(--text-secondary)', maxWidth:'500px', marginBottom:'40px'}}>A vehicle acquisition that required trade-in arbitrage across two competing dealerships, dealer incentive extraction, and multi-scenario finance modelling, all managed by Vantara on behalf of the client.</p>
        </div>

        <div className="divider"></div>

        <section style={{padding:'80px 60px'}} aria-labelledby="vantara-auto-context">
          <div className="section-label">The Situation</div>
          <h2 className="section-title" id="vantara-auto-context">The client knew what they wanted.<br /><em>The market didn&apos;t make it simple.</em></h2>
          <p className="section-body" style={{maxWidth:'600px'}}>The client came to Vantara with a clear objective: upgrade their current vehicle within a defined budget. What appeared straightforward quickly revealed layers of complexity: a trade-in with significant shortfall, two dealerships offering materially different valuations, competing vehicle options at similar price points, and multiple finance structures that each produced different monthly outcomes.</p>
          <p className="section-body" style={{maxWidth:'600px', marginTop:'16px'}}>Without a structured approach, the client would have been forced to make a high-value financial decision under dealer time pressure, with incomplete information, and no way to objectively compare their options.</p>
        </section>

        <div className="divider"></div>

        <section style={{padding:'80px 60px'}} aria-labelledby="vantara-auto-work">
          <div className="section-label">The Work</div>
          <h2 className="section-title" id="vantara-auto-work">Every variable mapped.<br /><em>Nothing left to chance.</em></h2>

          <div style={{display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:'1px', background:'var(--border)', marginTop:'48px'}}>
            <div style={{background:'var(--surface)', padding:'44px 40px'}}>
              <p style={{fontSize:'10px', letterSpacing:'0.22em', textTransform:'uppercase', color:'var(--gold)', marginBottom:'16px'}}>01 - Trade-In Analysis</p>
              <h3 style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', fontWeight:400, color:'var(--text-primary)', marginBottom:'14px'}}>Cross-dealer valuation mapped</h3>
              <p style={{fontSize:'14px', lineHeight:1.85, color:'var(--text-secondary)'}}>The client&apos;s existing vehicle, a 2022 BAIC X55 with a settlement of R325 000, was presented to two dealerships simultaneously. Valuations came back at materially different levels. Vantara mapped both positions, calculated the real shortfall at each dealer, and identified where dealer support could be extracted to close the gap.</p>
            </div>
            <div style={{background:'var(--surface)', padding:'44px 40px'}}>
              <p style={{fontSize:'10px', letterSpacing:'0.22em', textTransform:'uppercase', color:'var(--gold)', marginBottom:'16px'}}>02 - Dealer Incentive Extraction</p>
              <h3 style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', fontWeight:400, color:'var(--text-primary)', marginBottom:'14px'}}>R60 000 in combined support secured</h3>
              <p style={{fontSize:'14px', lineHeight:1.85, color:'var(--text-secondary)'}}>On one of the two options, Vantara negotiated R30 000 in trade-in assistance and a further R30 000 over-allowance from the dealer: R60 000 in combined support that materially reduced the client&apos;s effective shortfall. This is the type of concession that dealers offer, but rarely volunteer.</p>
            </div>
            <div style={{background:'var(--surface)', padding:'44px 40px'}}>
              <p style={{fontSize:'10px', letterSpacing:'0.22em', textTransform:'uppercase', color:'var(--gold)', marginBottom:'16px'}}>03 - Finance Scenario Modelling</p>
              <h3 style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', fontWeight:400, color:'var(--text-primary)', marginBottom:'14px'}}>Four balloon scenarios across both vehicles</h3>
              <p style={{fontSize:'14px', lineHeight:1.85, color:'var(--text-secondary)'}}>Both vehicles were modelled across four balloon options: 20%, 25%, 30%, and 35%, over 72 months at market finance rates. The client could see exactly what each combination produced in monthly terms, what the balloon liability would be, and how each option compared on total cost of ownership.</p>
            </div>
            <div style={{background:'var(--surface)', padding:'44px 40px'}}>
              <p style={{fontSize:'10px', letterSpacing:'0.22em', textTransform:'uppercase', color:'var(--gold)', marginBottom:'16px'}}>04 - Side-By-Side Recommendation</p>
              <h3 style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', fontWeight:400, color:'var(--text-primary)', marginBottom:'14px'}}>Both options presented with a clear path forward</h3>
              <p style={{fontSize:'14px', lineHeight:1.85, color:'var(--text-secondary)'}}>Rather than pushing one outcome, Vantara presented both options in full, with a clear broker recommendation, an honest assessment of the trade-offs, and a recommended path: submit finance applications on both simultaneously and let the bank approval and final trade-in valuation determine the stronger deal.</p>
            </div>
          </div>
        </section>

        <div className="divider"></div>

        <section style={{padding:'80px 60px'}} aria-labelledby="vantara-auto-outcome">
          <div className="section-label">The Outcome</div>
          <h2 className="section-title" id="vantara-auto-outcome">Full information.<br /><em>No pressure. Right decision.</em></h2>
          <p className="section-body" style={{maxWidth:'600px'}}>The client entered the transaction with the same information advantage that dealers operate with every day. Both options were on the table, both were fully analysed, and the decision was made on the merits, not under time pressure, not with incomplete information, and not without professional support in the room.</p>

          <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'1px', background:'var(--border)', marginTop:'48px'}}>
            <div style={{background:'var(--surface)', padding:'36px 32px'}}>
              <p style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'38px', fontWeight:300, color:'var(--gold)', lineHeight:1, marginBottom:'12px'}}>R60k</p>
              <p style={{fontSize:'13px', lineHeight:1.75, color:'var(--text-secondary)'}}>Combined dealer support extracted through negotiation: trade-in assistance plus over-allowance.</p>
            </div>
            <div style={{background:'var(--surface)', padding:'36px 32px'}}>
              <p style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'38px', fontWeight:300, color:'var(--gold)', lineHeight:1, marginBottom:'12px'}}>8</p>
              <p style={{fontSize:'13px', lineHeight:1.75, color:'var(--text-secondary)'}}>Finance scenarios modelled across both vehicles, giving the client a complete picture before any decision was made.</p>
            </div>
            <div style={{background:'var(--surface)', padding:'36px 32px'}}>
              <p style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'38px', fontWeight:300, color:'var(--gold)', lineHeight:1, marginBottom:'12px'}}>0</p>
              <p style={{fontSize:'13px', lineHeight:1.75, color:'var(--text-secondary)'}}>Dealer pressure involved in the final decision. The client chose with full information, on their timeline.</p>
            </div>
          </div>
        </section>

        <div className="divider"></div>

        <section style={{padding:'80px 60px', background:'var(--surface)'}} aria-labelledby="vantara-auto-shows">
          <div className="section-label">What This Shows</div>
          <h2 className="section-title" id="vantara-auto-shows">This is how Vantara<br /><em>approaches every deal.</em></h2>
          <p className="section-body" style={{maxWidth:'600px'}}>Vehicle transactions are rarely about the car. They are about pricing, structure, timing, and leverage. The client in this deal did not need to understand dealer incentive structures, balloon amortisation, or trade-in arbitrage. They needed someone who did, working for them, not for the dealer.</p>
          <p className="section-body" style={{maxWidth:'600px', marginTop:'16px'}}>That is what Vantara provides. Not just a car. A professionally managed transaction where every variable has been controlled before you make a decision.</p>
        </section>

        <div className="divider"></div>

        <section style={{padding:'100px 60px', textAlign:'center'}}>
          <div className="section-label" style={{justifyContent:'center'}}>Start your acquisition</div>
          <h2 className="section-title" style={{textAlign:'center'}}>Ready to acquire<br /><em>the right vehicle?</em></h2>
          <p className="section-body" style={{maxWidth:'440px', margin:'0 auto 40px'}}>Tell us your budget and what you are looking for. We handle everything from there.</p>
          <div style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'16px'}}>
            <a href="https://wa.me/27712205313?text=Hi%2C%20I%27d%20like%20Vantara%20to%20help%20me%20acquire%20a%20vehicle." target="_blank" rel="noopener noreferrer" className="btn-primary" style={{position:'relative', zIndex:9999}}>Start the Conversation</a>
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
