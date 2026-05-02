import Link from 'next/link';
import Nav from '../components/Nav';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vantara | Premium Acquisition Brokerage | Avalon Capital Group',
  description: "Vantara is Avalon's premium acquisition brokerage. We represent buyers in vehicle and property transactions - structuring deals, managing risk, and eliminating costly mistakes.",
};

export default function Vantara() {
  return (
    <>
      <Nav />
      <div id="page-vantara" className="page" role="main">
        <style suppressHydrationWarning>{`
          @media (max-width: 768px) {
            #page-vantara section,
            #page-vantara footer {
              padding-left: 24px !important;
              padding-right: 24px !important;
            }
            #page-vantara [style*="grid-template-columns:repeat(2"],
            #page-vantara [style*="grid-template-columns: repeat(2"] {
              grid-template-columns: 1fr !important;
            }
            #page-vantara [style*="grid-template-columns:repeat(3"],
            #page-vantara [style*="grid-template-columns: repeat(3"] {
              grid-template-columns: 1fr !important;
            }
            #page-vantara [style*="grid-template-columns:repeat(4"],
            #page-vantara [style*="grid-template-columns: repeat(4"] {
              grid-template-columns: 1fr 1fr !important;
            }
            #page-vantara [style*="grid-template-columns:200px"] {
              grid-template-columns: 1fr !important;
            }
          }
          @media (max-width: 768px) {
            .vantara-geo { display: none; }
            .inner-hero-geo { display: none; }
          }
        `}</style>

        <div className="inner-hero">
          <svg className="vantara-geo" style={{position:'absolute', right:'-120px', top:'50%', transform:'translateY(-50%)', opacity:0.11, pointerEvents:'none', zIndex:1}} width="580" height="680" viewBox="0 0 580 680" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" stroke="#C9A84C" strokeWidth="0.8">
              <polygon points="290,20 560,640 20,640"/>
              <polygon points="290,80 510,600 70,600"/>
              <polygon points="290,140 460,560 120,560"/>
            </g>
          </svg>
          <div className="inner-hero-bg" aria-hidden="true"></div>
          <Link className="back-btn" href="/" style={{position:'relative', zIndex:10}}>← Back to Avalon Capital Group</Link>
          <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'52px', fontWeight:300, letterSpacing:'0.14em', color:'var(--text-primary)', marginBottom:'24px', position:'relative', zIndex:2}}>Vantara</div>
          <p style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'11px', letterSpacing:'0.22em', textTransform:'uppercase', color:'var(--gold)', marginBottom:'8px', position:'relative', zIndex:2}}>Vantara · A Division of Avalon Capital Group</p>
          <p style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'13px', letterSpacing:'0.14em', textTransform:'uppercase', color:'var(--text-muted)', fontStyle:'italic', marginBottom:'32px', position:'relative', zIndex:2}}>Deal Execution &amp; Asset Acquisition</p>
          <h1 style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(42px,6vw,80px)', fontWeight:400, lineHeight:1.05, color:'var(--text-primary)', maxWidth:'700px', marginBottom:'28px', position:'relative', zIndex:2}}>We don&apos;t participate in deals.<br /><em style={{color:'var(--gold)'}}>We control them.</em></h1>
          <p style={{fontSize:'15px', lineHeight:1.8, color:'var(--text-secondary)', maxWidth:'500px', marginBottom:'40px', position:'relative', zIndex:2}}>Vantara identifies, structures, and executes high-value transactions across vehicles, property, and strategic opportunities, working exclusively in the interest of the client, from first conversation to final close.</p>
          <a href="https://wa.me/27712205313?text=Hi%2C%20I%20have%20a%20deal%20I%27d%20like%20to%20discuss%20with%20Vantara." target="_blank" rel="noopener noreferrer" className="btn-primary" style={{position:'relative', zIndex:9999}}>Start the Conversation</a>
        </div>

        <div className="divider"></div>

        <section style={{padding:'80px 60px'}} aria-labelledby="vantara-difference">
          <div className="section-label">01 - The Difference</div>
          <h2 className="section-title" id="vantara-difference">Advisory-first.<br /><em>Always.</em></h2>
          <p className="section-body" style={{maxWidth:'560px'}}>Most acquisition channels have a financial incentive to close, not necessarily to close the right deal for you. Vantara carries none of that conflict. We work on mandate, for the client, from brief to handover.</p>

          <div style={{display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:'1px', background:'var(--border)', marginTop:'48px'}}>
            <div style={{background:'var(--surface)', padding:'48px 40px'}}>
              <p style={{fontSize:'10px', letterSpacing:'0.24em', textTransform:'uppercase', color:'var(--gold)', marginBottom:'20px'}}>Vantara is</p>
              <h3 style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'24px', fontWeight:400, color:'var(--text-primary)', lineHeight:1.25, marginBottom:'16px'}}>A deal execution partner who works for you</h3>
              <p style={{fontSize:'14px', lineHeight:1.85, color:'var(--text-secondary)', marginBottom:'24px'}}>Before anything moves, we understand your position: your objective, your constraints, your risk. Then we structure the transaction, control the variables, and execute. You make the final call with full information, not under pressure.</p>
              <div style={{display:'flex', flexDirection:'column', gap:0, borderTop:'1px solid var(--border)'}}>
                <p style={{fontSize:'13px', lineHeight:1.75, color:'var(--text-secondary)', padding:'12px 0', borderBottom:'1px solid var(--border)'}}>· Advisory-first - strategy before any transaction</p>
                <p style={{fontSize:'13px', lineHeight:1.75, color:'var(--text-secondary)', padding:'12px 0', borderBottom:'1px solid var(--border)'}}>· Mandate-based - your interest, not the market&apos;s</p>
                <p style={{fontSize:'13px', lineHeight:1.75, color:'var(--text-secondary)', padding:'12px 0', borderBottom:'1px solid var(--border)'}}>· Full-cycle - brief to handover, every step managed</p>
                <p style={{fontSize:'13px', lineHeight:1.75, color:'var(--text-secondary)', padding:'12px 0'}}>· Vehicles, property, and strategic deal structuring</p>
              </div>
            </div>
            <div style={{background:'var(--surface)', padding:'48px 40px', opacity:0.75}}>
              <p style={{fontSize:'10px', letterSpacing:'0.24em', textTransform:'uppercase', color:'var(--text-muted)', marginBottom:'20px'}}>Vantara is not</p>
              <h3 style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'24px', fontWeight:400, color:'var(--text-primary)', lineHeight:1.25, marginBottom:'16px'}}>A platform with inventory to push</h3>
              <p style={{fontSize:'14px', lineHeight:1.85, color:'var(--text-secondary)', marginBottom:'24px'}}>Dealerships have stock to move. Listing platforms have placements to sell. Most channels in any market have a financial incentive to close, not necessarily to close the right deal for you. Vantara carries none of that conflict.</p>
              <div style={{display:'flex', flexDirection:'column', gap:0, borderTop:'1px solid var(--border)'}}>
                <p style={{fontSize:'13px', lineHeight:1.75, color:'var(--text-secondary)', padding:'12px 0', borderBottom:'1px solid var(--border)'}}>· A dealership or inventory-based seller</p>
                <p style={{fontSize:'13px', lineHeight:1.75, color:'var(--text-secondary)', padding:'12px 0', borderBottom:'1px solid var(--border)'}}>· A property listing agent</p>
                <p style={{fontSize:'13px', lineHeight:1.75, color:'var(--text-secondary)', padding:'12px 0', borderBottom:'1px solid var(--border)'}}>· A middleman profiting from the spread</p>
                <p style={{fontSize:'13px', lineHeight:1.75, color:'var(--text-secondary)', padding:'12px 0'}}>· Open to everyone - selective by design</p>
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>

        <section style={{padding:'70px 60px', background:'var(--surface)'}}>
          <p style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(22px,3.5vw,38px)', fontStyle:'italic', fontWeight:400, lineHeight:1.4, color:'var(--text-primary)', maxWidth:'820px'}}>&ldquo;Most people negotiate against a professional on the other side. Vantara puts a professional on your side.&rdquo;</p>
        </section>

        <div className="divider"></div>

        <section style={{padding:'80px 60px'}} aria-labelledby="vantara-how">
          <div className="section-label">02 - How We Work</div>
          <h2 className="section-title" id="vantara-how">Clarity. Structure.<br /><em>Execution.</em></h2>
          <div style={{display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:'1px', background:'var(--border)', marginTop:'48px'}}>
            <div style={{background:'var(--surface)', padding:'44px 36px'}}>
              <p style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'52px', fontWeight:300, color:'var(--border)', lineHeight:1, marginBottom:'22px', fontStyle:'italic'}}>01</p>
              <h4 style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'18px', fontWeight:400, color:'var(--gold)', marginBottom:'12px'}}>Mandate &amp; Brief</h4>
              <p style={{fontSize:'13px', lineHeight:1.85, color:'var(--text-secondary)'}}>We begin with a conversation. We map your objective, your constraints, and what the right outcome looks like for you, not generically, specifically.</p>
            </div>
            <div style={{background:'var(--surface)', padding:'44px 36px'}}>
              <p style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'52px', fontWeight:300, color:'var(--border)', lineHeight:1, marginBottom:'22px', fontStyle:'italic'}}>02</p>
              <h4 style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'18px', fontWeight:400, color:'var(--gold)', marginBottom:'12px'}}>Market Intelligence</h4>
              <p style={{fontSize:'13px', lineHeight:1.85, color:'var(--text-secondary)'}}>We scan the market on your behalf, identifying value, flagging what&apos;s overpriced or misrepresented, and surfacing options you wouldn&apos;t find alone.</p>
            </div>
            <div style={{background:'var(--surface)', padding:'44px 36px'}}>
              <p style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'52px', fontWeight:300, color:'var(--border)', lineHeight:1, marginBottom:'22px', fontStyle:'italic'}}>03</p>
              <h4 style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'18px', fontWeight:400, color:'var(--gold)', marginBottom:'12px'}}>Structure &amp; Analysis</h4>
              <p style={{fontSize:'13px', lineHeight:1.85, color:'var(--text-secondary)'}}>We present shortlisted options with clear analysis: financials, risk, trade-offs. You make an informed decision, not one made under time pressure from a seller.</p>
            </div>
            <div style={{background:'var(--surface)', padding:'44px 36px'}}>
              <p style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'52px', fontWeight:300, color:'var(--border)', lineHeight:1, marginBottom:'22px', fontStyle:'italic'}}>04</p>
              <h4 style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'18px', fontWeight:400, color:'var(--gold)', marginBottom:'12px'}}>Negotiation &amp; Close</h4>
              <p style={{fontSize:'13px', lineHeight:1.85, color:'var(--text-secondary)'}}>We lead or support the negotiation, handle the moving parts, and see the transaction through to completion. Your position is protected at every stage.</p>
            </div>
          </div>
        </section>

        <div className="divider"></div>

        <section style={{padding:'80px 60px'}} aria-labelledby="vantara-insights">
          <div className="section-label">03 - Deal Insights</div>
          <h2 className="section-title" id="vantara-insights">Real transactions.<br /><em>Real outcomes.</em></h2>
          <p className="section-body" style={{maxWidth:'520px'}}>Two examples of how Vantara operates in practice. Client details are kept confidential: the work speaks for itself.</p>
          <div style={{display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:'1px', background:'var(--border)', marginTop:'48px'}}>
            <div style={{background:'var(--surface)', padding:'48px 40px', borderLeft:'2px solid var(--gold)'}}>
              <p style={{fontSize:'10px', letterSpacing:'0.24em', textTransform:'uppercase', color:'var(--gold)', marginBottom:'20px'}}>Automotive Deal Execution</p>
              <h3 style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'24px', fontWeight:400, color:'var(--text-primary)', lineHeight:1.3, marginBottom:'16px'}}>Two dealers. One client. Every variable controlled.</h3>
              <p style={{fontSize:'14px', lineHeight:1.85, color:'var(--text-secondary)', marginBottom:'14px'}}>A client came to Vantara wanting to upgrade their vehicle but facing a significant trade-in shortfall across two competing dealerships, with different pricing structures, different dealer incentives, and different finance scenarios on the table.</p>
              <p style={{fontSize:'14px', lineHeight:1.85, color:'var(--text-secondary)', marginBottom:'14px'}}>Vantara structured both options side-by-side: trade-in positions across both dealers were mapped, R60 000 in combined dealer support was extracted from one transaction, and multiple balloon scenarios were modelled across both vehicles.</p>
              <p style={{fontSize:'14px', lineHeight:1.85, color:'var(--text-secondary)', marginBottom:'32px'}}>The client made a fully informed decision, with no pressure, no information asymmetry, and a materially stronger financial position than they would have reached alone.</p>
              <div style={{borderTop:'1px solid var(--border)', paddingTop:'24px', display:'flex', flexDirection:'column', gap:'8px'}}>
                <p style={{fontSize:'11px', letterSpacing:'0.08em', color:'var(--text-muted)'}}>Scope -<span style={{color:'var(--gold)', fontStyle:'italic'}}>Vehicle acquisition, trade-in arbitrage, finance structuring</span></p>
                <p style={{fontSize:'11px', letterSpacing:'0.08em', color:'var(--text-muted)'}}>Outcome -<span style={{color:'var(--gold)', fontStyle:'italic'}}>Full dual-option analysis. Client decided with complete information.</span></p>
              </div>
              <Link href="/vantara/automotive" style={{display:'inline-flex', alignItems:'center', gap:'8px', marginTop:'24px', fontSize:'12px', letterSpacing:'0.16em', textTransform:'uppercase', color:'var(--gold)', borderBottom:'1px solid var(--gold)', paddingBottom:'2px'}}>Full deal insight →</Link>
            </div>
            <div style={{background:'var(--surface)', padding:'48px 40px', borderLeft:'2px solid var(--gold)'}}>
              <p style={{fontSize:'10px', letterSpacing:'0.24em', textTransform:'uppercase', color:'var(--gold)', marginBottom:'20px'}}>Property Acquisition</p>
              <h3 style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'24px', fontWeight:400, color:'var(--text-primary)', lineHeight:1.3, marginBottom:'16px'}}>Institutional-grade packaging. Private investor entry.</h3>
              <p style={{fontSize:'14px', lineHeight:1.85, color:'var(--text-secondary)', marginBottom:'14px'}}>A commercial property opportunity in Durban was identified with a verified gross yield of 11.24%, above the market average for the node, and an accessible equity entry point for a private investor.</p>
              <p style={{fontSize:'14px', lineHeight:1.85, color:'var(--text-secondary)', marginBottom:'14px'}}>Vantara produced a full investment and feasibility report: area study, full financial modelling, five-year scenario projections across bear, base, and bull cases, a complete risk register with mitigants, and an SPV equity structure with a priority return clause protecting the investor&apos;s capital.</p>
              <p style={{fontSize:'14px', lineHeight:1.85, color:'var(--text-secondary)', marginBottom:'32px'}}>This is not how property agents work. It is how private equity works, applied at an accessible scale.</p>
              <div style={{borderTop:'1px solid var(--border)', paddingTop:'24px', display:'flex', flexDirection:'column', gap:'8px'}}>
                <p style={{fontSize:'11px', letterSpacing:'0.08em', color:'var(--text-muted)'}}>Scope -<span style={{color:'var(--gold)', fontStyle:'italic'}}>Deal sourcing, feasibility, risk analysis, investor structuring</span></p>
                <p style={{fontSize:'11px', letterSpacing:'0.08em', color:'var(--text-muted)'}}>Outcome -<span style={{color:'var(--gold)', fontStyle:'italic'}}>Full institutional-grade report. Investor decision-ready.</span></p>
              </div>
              <Link href="/vantara/property" style={{display:'inline-flex', alignItems:'center', gap:'8px', marginTop:'24px', fontSize:'12px', letterSpacing:'0.16em', textTransform:'uppercase', color:'var(--gold)', borderBottom:'1px solid var(--gold)', paddingBottom:'2px'}}>Full deal insight →</Link>
            </div>
          </div>
        </section>

        <div className="divider"></div>

        <section style={{padding:'80px 60px'}} aria-labelledby="vantara-insights-heading">
          <div className="section-label">Insights</div>
          <h2 className="section-title" id="vantara-insights-heading">We share how we think.</h2>
          <p className="section-body" style={{maxWidth:'520px'}}>Every piece here comes from real experience in the market, not theory. Read it, apply it, or reach out if it raises a question.</p>

          <div style={{marginTop:'48px', display:'flex', flexDirection:'column', gap:0}}>
            <Link href="/vantara/insight-1" style={{padding:'28px 0', borderBottom:'1px solid var(--border)', display:'flex', alignItems:'flex-start', justifyContent:'space-between', gap:'24px', cursor:'pointer', textDecoration:'none'}}>
              <div>
                <p style={{fontSize:'10px', letterSpacing:'0.2em', textTransform:'uppercase', color:'var(--gold)', marginBottom:'8px'}}>Automotive · Insider perspective</p>
                <p style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'20px', fontWeight:400, color:'var(--text-primary)', lineHeight:1.3}}>Why buying a car alone is the most expensive thing you&apos;ll do this year</p>
              </div>
              <p style={{fontSize:'18px', color:'var(--text-muted)', flexShrink:0, marginTop:'4px'}}>→</p>
            </Link>

            <Link href="/vantara/insight-2" style={{padding:'28px 0', borderBottom:'1px solid var(--border)', display:'flex', alignItems:'flex-start', justifyContent:'space-between', gap:'24px', cursor:'pointer', textDecoration:'none'}}>
              <div>
                <p style={{fontSize:'10px', letterSpacing:'0.2em', textTransform:'uppercase', color:'var(--gold)', marginBottom:'8px'}}>Property · How deals get structured</p>
                <p style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'20px', fontWeight:400, color:'var(--text-primary)', lineHeight:1.3}}>What separates a property investor from someone who just bought a property</p>
              </div>
              <p style={{fontSize:'18px', color:'var(--text-muted)', flexShrink:0, marginTop:'4px'}}>→</p>
            </Link>

            <Link href="/vantara/insight-3" style={{padding:'28px 0', borderBottom:'1px solid var(--border)', display:'flex', alignItems:'flex-start', justifyContent:'space-between', gap:'24px', cursor:'pointer', textDecoration:'none'}}>
              <div>
                <p style={{fontSize:'10px', letterSpacing:'0.2em', textTransform:'uppercase', color:'var(--gold)', marginBottom:'8px'}}>Advisory · The Vantara model</p>
                <p style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'20px', fontWeight:400, color:'var(--text-primary)', lineHeight:1.3}}>The advisor is free. The mistake is not.</p>
              </div>
              <p style={{fontSize:'18px', color:'var(--text-muted)', flexShrink:0, marginTop:'4px'}}>→</p>
            </Link>
          </div>
          <p style={{fontSize:'12px', fontStyle:'italic', color:'var(--text-muted)', marginTop:'32px'}}>Written from the inside. Every piece is worth your time, that&apos;s the only standard we publish to.</p>
        </section>

        <section style={{padding:'80px 60px'}} aria-labelledby="vantara-faq-heading">
          <div className="section-label">FAQ</div>
          <h2 className="section-title" id="vantara-faq-heading">Common questions.<br /><em>Straight answers.</em></h2>
          <p className="section-body" style={{maxWidth:'520px'}}>If something isn&apos;t covered here, ask us directly. We&apos;d rather have a conversation than leave you guessing.</p>

          <div style={{marginTop:'48px', display:'flex', flexDirection:'column', gap:0}}>
            <div style={{padding:'32px 0', borderBottom:'1px solid var(--border)'}}>
              <p style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'20px', fontWeight:400, color:'var(--text-primary)', marginBottom:'14px'}}>What does it cost to use Vantara for a vehicle acquisition?</p>
              <p style={{fontSize:'14px', lineHeight:1.85, color:'var(--text-secondary)'}}>Nothing additional out of your pocket. You give us your budget and your criteria. We source the right vehicle, negotiate the deal, and manage the transaction to delivery. Our fee is built into the deal, you pay within your budget, not on top of it. You never pay more than you would have going alone. In most cases, you pay less.</p>
            </div>
            <div style={{padding:'32px 0', borderBottom:'1px solid var(--border)'}}>
              <p style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'20px', fontWeight:400, color:'var(--text-primary)', marginBottom:'14px'}}>How do you find the vehicles you source?</p>
              <p style={{fontSize:'14px', lineHeight:1.85, color:'var(--text-secondary)'}}>We use every available channel: dealer networks, online platforms, private listings. What we bring that the platforms don&apos;t is over half a decade of insider experience in the automotive industry. We&apos;ve worked every department of a dealership: sales, stock control, workshop, finance, reconditioning, and vehicle listings. We know what a car is actually worth, what dealers don&apos;t disclose, and where the margin is. That knowledge isn&apos;t on Autotrader. We are.</p>
            </div>
            <div style={{padding:'32px 0', borderBottom:'1px solid var(--border)'}}>
              <p style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'20px', fontWeight:400, color:'var(--text-primary)', marginBottom:'14px'}}>What do I actually have to do as the buyer?</p>
              <p style={{fontSize:'14px', lineHeight:1.85, color:'var(--text-secondary)'}}>Tell us your budget, your requirements, and what matters to you. From there, we handle everything: sourcing, shortlisting, negotiating, finance structuring if needed, and delivery coordination. The only time you need to move is to sign the deal and take delivery. Everything else is handled.</p>
            </div>
            <div style={{padding:'32px 0', borderBottom:'1px solid var(--border)'}}>
              <p style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'20px', fontWeight:400, color:'var(--text-primary)', marginBottom:'14px'}}>Is the property acquisition side active?</p>
              <p style={{fontSize:'14px', lineHeight:1.85, color:'var(--text-secondary)'}}>Yes, and it operates at a different level to standard property brokerage. We identify high-yield opportunities, conduct full investment and feasibility analysis, and structure deals for private investors. We don&apos;t list properties. We package deals. If you are looking to deploy capital into property and want institutional-grade analysis before you commit, that is what we do.</p>
            </div>
            <div style={{padding:'32px 0', borderBottom:'1px solid var(--border)'}}>
              <p style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'20px', fontWeight:400, color:'var(--text-primary)', marginBottom:'14px'}}>What is strategic deal structuring and how do I know if it applies to me?</p>
              <p style={{fontSize:'14px', lineHeight:1.85, color:'var(--text-secondary)'}}>Some opportunities don&apos;t sit neatly in a category. A supply arrangement, a business transaction, a partnership that needs structuring, if there is a deal to be made and you need someone who can see the structure, make the right connections, and execute cleanly, that is what strategic brokerage covers. We engage selectively. If you have something worth exploring, bring it to us and we will tell you honestly whether we can add value.</p>
            </div>
            <div style={{padding:'32px 0', borderBottom:'1px solid var(--border)'}}>
              <p style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'20px', fontWeight:400, color:'var(--text-primary)', marginBottom:'14px'}}>How do I engage Vantara?</p>
              <p style={{fontSize:'14px', lineHeight:1.85, color:'var(--text-secondary)'}}>Start with a conversation. Tell us what you are looking to acquire, structure, or explore. We will respond directly, ask the right questions, and tell you honestly what we can do. No forms, no waiting. WhatsApp is the fastest way to reach us.</p>
            </div>
          </div>
        </section>

        <section style={{padding:'80px 60px'}} aria-labelledby="vantara-engage-heading">
          <div className="section-label">How We Engage</div>
          <h2 className="section-title" id="vantara-engage-heading">Three mandates.<br /><em>One standard of execution.</em></h2>
          <p className="section-body" style={{maxWidth:'540px'}}>Every engagement is different. What doesn&apos;t change is how we work, structured, thorough, and always in your interest. Here is what each mandate looks like in practice.</p>

          <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'1px', background:'var(--border)', marginTop:'48px'}}>
            <div style={{background:'var(--surface)', padding:'48px 36px', display:'flex', flexDirection:'column', gap:0}}>
              <p style={{fontSize:'10px', letterSpacing:'0.24em', textTransform:'uppercase', color:'var(--gold)', marginBottom:'20px'}}>01 - Automotive</p>
              <h3 style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'26px', fontWeight:400, color:'var(--text-primary)', lineHeight:1.2, marginBottom:'20px'}}>Vehicle Acquisition</h3>
              <p style={{fontSize:'14px', lineHeight:1.85, color:'var(--text-secondary)', marginBottom:'28px'}}>You give us your budget and requirements. We source, evaluate, negotiate, and deliver. Our fee is built into the transaction, you pay within your budget, not on top of it.</p>
              <div style={{display:'flex', flexDirection:'column', gap:0, borderTop:'1px solid var(--border)', marginTop:'auto'}}>
                <p style={{fontSize:'13px', lineHeight:1.75, color:'var(--text-secondary)', padding:'12px 0', borderBottom:'1px solid var(--border)'}}>· Budget-based sourcing</p>
                <p style={{fontSize:'13px', lineHeight:1.75, color:'var(--text-secondary)', padding:'12px 0', borderBottom:'1px solid var(--border)'}}>· Full dealer negotiation</p>
                <p style={{fontSize:'13px', lineHeight:1.75, color:'var(--text-secondary)', padding:'12px 0', borderBottom:'1px solid var(--border)'}}>· Finance structuring support</p>
                <p style={{fontSize:'13px', lineHeight:1.75, color:'var(--text-secondary)', padding:'12px 0', borderBottom:'1px solid var(--border)'}}>· Delivery coordination</p>
                <p style={{fontSize:'13px', lineHeight:1.75, color:'var(--gold)', padding:'12px 0', fontStyle:'italic'}}>Free to the buyer. Always.</p>
              </div>
            </div>

            <div style={{background:'var(--surface2, #1a1814)', padding:'48px 36px', display:'flex', flexDirection:'column', gap:0, border:'1px solid var(--gold)', position:'relative'}}>
              <p style={{position:'absolute', top:'-1px', left:'50%', transform:'translateX(-50%)', background:'var(--gold)', color:'#080807', fontSize:'9px', letterSpacing:'0.2em', textTransform:'uppercase', padding:'4px 14px', fontWeight:600, whiteSpace:'nowrap'}}>Primary Mandate</p>
              <p style={{fontSize:'10px', letterSpacing:'0.24em', textTransform:'uppercase', color:'var(--gold)', marginBottom:'20px', marginTop:'16px'}}>02 - Property</p>
              <h3 style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'26px', fontWeight:400, color:'var(--text-primary)', lineHeight:1.2, marginBottom:'20px'}}>Property Acquisition</h3>
              <p style={{fontSize:'14px', lineHeight:1.85, color:'var(--text-secondary)', marginBottom:'28px'}}>We identify high-yield opportunities, conduct full investment and feasibility analysis, and structure deals for private investors. Compensation is deal-side, structured as an equity stake or structuring fee within the transaction.</p>
              <div style={{display:'flex', flexDirection:'column', gap:0, borderTop:'1px solid var(--border)', marginTop:'auto'}}>
                <p style={{fontSize:'13px', lineHeight:1.75, color:'var(--text-secondary)', padding:'12px 0', borderBottom:'1px solid var(--border)'}}>· Opportunity sourcing</p>
                <p style={{fontSize:'13px', lineHeight:1.75, color:'var(--text-secondary)', padding:'12px 0', borderBottom:'1px solid var(--border)'}}>· Full feasibility &amp; risk analysis</p>
                <p style={{fontSize:'13px', lineHeight:1.75, color:'var(--text-secondary)', padding:'12px 0', borderBottom:'1px solid var(--border)'}}>· Investor equity structuring</p>
                <p style={{fontSize:'13px', lineHeight:1.75, color:'var(--text-secondary)', padding:'12px 0', borderBottom:'1px solid var(--border)'}}>· SPV setup &amp; deal packaging</p>
                <p style={{fontSize:'13px', lineHeight:1.75, color:'var(--gold)', padding:'12px 0', fontStyle:'italic'}}>Equity or structuring fee. Deal-dependent.</p>
              </div>
            </div>

            <div style={{background:'var(--surface)', padding:'48px 36px', display:'flex', flexDirection:'column', gap:0}}>
              <p style={{fontSize:'10px', letterSpacing:'0.24em', textTransform:'uppercase', color:'var(--gold)', marginBottom:'20px'}}>03 - Strategic</p>
              <h3 style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'26px', fontWeight:400, color:'var(--text-primary)', lineHeight:1.2, marginBottom:'20px'}}>Strategic Deal Structuring</h3>
              <p style={{fontSize:'14px', lineHeight:1.85, color:'var(--text-secondary)', marginBottom:'28px'}}>Off-market opportunities, business transactions, and capital alignment. We engage selectively, only where we have a clear advantage in access, structure, or relationships. Compensation is a success fee on close.</p>
              <div style={{display:'flex', flexDirection:'column', gap:0, borderTop:'1px solid var(--border)', marginTop:'auto'}}>
                <p style={{fontSize:'13px', lineHeight:1.75, color:'var(--text-secondary)', padding:'12px 0', borderBottom:'1px solid var(--border)'}}>· Network-driven sourcing</p>
                <p style={{fontSize:'13px', lineHeight:1.75, color:'var(--text-secondary)', padding:'12px 0', borderBottom:'1px solid var(--border)'}}>· Deal architecture &amp; structuring</p>
                <p style={{fontSize:'13px', lineHeight:1.75, color:'var(--text-secondary)', padding:'12px 0', borderBottom:'1px solid var(--border)'}}>· Capital &amp; opportunity alignment</p>
                <p style={{fontSize:'13px', lineHeight:1.75, color:'var(--text-secondary)', padding:'12px 0', borderBottom:'1px solid var(--border)'}}>· Selective - invite or referral only</p>
                <p style={{fontSize:'13px', lineHeight:1.75, color:'var(--gold)', padding:'12px 0', fontStyle:'italic'}}>Success fee on close. Case by case.</p>
              </div>
            </div>
          </div>

          <div style={{background:'var(--surface)', padding:'36px 40px', marginTop:'1px', borderTop:'1px solid var(--border)'}}>
            <p style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'17px', fontWeight:400, color:'var(--text-primary)', marginBottom:'10px'}}>A straightforward note on how we work</p>
            <p style={{fontSize:'14px', lineHeight:1.85, color:'var(--text-secondary)'}}>Vantara works with a limited number of clients at any given time. We are not a high-volume operation. We take on mandates where we can genuinely add value and execute to the standard we hold ourselves to. If we can&apos;t help, we&apos;ll tell you. If we can, we&apos;ll show you exactly how.</p>
          </div>
        </section>

        <section style={{padding:'100px 60px', textAlign:'center'}}>
          <div className="section-label" style={{justifyContent:'center'}}>Engage Vantara</div>
          <h2 className="section-title" style={{textAlign:'center'}}>Bring us<br /><em>the deal.</em></h2>
          <p className="section-body" style={{maxWidth:'480px', margin:'0 auto 40px'}}>Tell us what you&apos;re acquiring, what you&apos;re exiting, or what opportunity you&apos;re looking at. We&apos;ll tell you honestly whether we can add value, and how.</p>
          <div style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'16px'}}>
            <a href="https://wa.me/27712205313?text=Hi%2C%20I%20have%20a%20deal%20I%27d%20like%20to%20discuss%20with%20Vantara." target="_blank" rel="noopener noreferrer" className="btn-primary" style={{position:'relative', zIndex:9999}}>Start the Conversation</a>
            <Link className="btn-ghost" href="/" style={{position:'relative', zIndex:9999}}>Back to Avalon Capital Group</Link>
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
