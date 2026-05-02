import Link from 'next/link';
import Nav from '../../components/Nav';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Why Buying a Car Alone Costs You | Vantara Insights',
  description: 'The dealership knows more than you do. That gap costs money. Here is what is actually happening on the other side of the desk, and how to close it.',
};

export default function VantaraInsight1() {
  return (
    <>
      <Nav />
      <div id="page-vantara-insight-1" className="page" role="main">
        <div className="inner-hero">
          <svg className="inner-hero-geo" style={{position:'absolute', right:'-120px', top:'50%', transform:'translateY(-50%)', opacity:0.11, pointerEvents:'none', zIndex:1}} width="580" height="680" viewBox="0 0 580 680" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" stroke="#C9A84C" strokeWidth="0.8">
              <polygon points="290,20 560,640 20,640"/>
              <polygon points="290,80 510,600 70,600"/>
              <polygon points="290,140 460,560 120,560"/>
            </g>
          </svg>
          <div className="inner-hero-bg" aria-hidden="true"></div>
          <Link className="back-btn" href="/vantara" style={{position:'relative', zIndex:9999}}>Back to Vantara</Link>
          <p style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'11px', letterSpacing:'0.22em', textTransform:'uppercase', color:'var(--gold)', marginBottom:'8px'}}>Vantara Insights · Automotive</p>
          <p style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'13px', letterSpacing:'0.14em', textTransform:'uppercase', color:'var(--text-muted)', fontStyle:'italic', marginBottom:'32px'}}>Insider Perspective</p>
          <h1 style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(34px,5vw,64px)', fontWeight:400, lineHeight:1.08, color:'var(--text-primary)', maxWidth:'720px', marginBottom:'28px'}}>Why buying a car alone is the most expensive thing<br /><em style={{color:'var(--gold)'}}>you&apos;ll do this year.</em></h1>
          <p style={{fontSize:'15px', lineHeight:1.8, color:'var(--text-secondary)', maxWidth:'500px'}}>The dealership knows more than you do. That gap costs money. Here is what is actually happening on the other side of the desk, and how to close it.</p>
        </div>

        <div className="divider"></div>

        <section style={{padding:'80px 60px', maxWidth:'800px'}}>
          <p className="section-body" style={{marginBottom:'28px'}}>When you walk into a dealership, you are walking into someone else&apos;s environment. The salesperson sitting across from you has closed hundreds of deals. They know the invoice price, the holdback, the dealer incentives, the finance kickbacks, and exactly how much room they have to move. You know what you saw on Autotrader.</p>
          <p className="section-body" style={{marginBottom:'28px'}}>That is not a criticism. It is just the reality of how the market works. Information in the automotive industry is deliberately asymmetric. Dealers are trained to control the process, the test drive, the trade-in conversation, the finance office, in a sequence designed to produce the maximum margin from every transaction.</p>

          <h2 className="section-title" style={{fontSize:'clamp(24px,3vw,36px)', marginBottom:'24px'}}>What you don&apos;t see<br /><em>when you&apos;re sitting at that desk.</em></h2>
          <p className="section-body" style={{marginBottom:'28px'}}>The price on the windscreen is not the price. It is the opening position. Every dealership has a floor price, the minimum they will accept and still make their margin. Between the advertised price and the floor, there is room. How much room depends on the car, the month, the dealer&apos;s stock pressure, and whether they need to hit a target.</p>
          <p className="section-body" style={{marginBottom:'28px'}}>Trade-ins are where most buyers lose the most money. Dealers routinely offer below-market values on trade-ins because most buyers don&apos;t have a second offer in hand. The shortfall gets rolled into the finance, the monthly payment feels manageable, and the true cost of the transaction is never visible as a single number.</p>
          <p className="section-body" style={{marginBottom:'28px'}}>Finance is where the second margin lives. The F&amp;I office is not there to find you the best rate. It is there to place your finance at the rate that earns the dealer the highest commission from the bank. The difference between a 12% and a 14% finance rate over 72 months on a R400 000 car is not small. It is tens of thousands of rands.</p>

          <h2 className="section-title" style={{fontSize:'clamp(24px,3vw,36px)', marginBottom:'24px'}}>What insider knowledge<br /><em>actually changes.</em></h2>
          <p className="section-body" style={{marginBottom:'28px'}}>Over half a decade in the automotive industry, across sales, stock control, workshop, finance, reconditioning, and vehicle listings, gives you a different view of every transaction. You know which cars have been reconditioned to move and which have underlying issues that a valet won&apos;t fix. You know which dealers are under stock pressure and which have been sitting on a unit for 90 days. You know what a PDI should find and what gets signed off anyway.</p>
          <p className="section-body" style={{marginBottom:'28px'}}>That knowledge changes the negotiation entirely. It is not about being aggressive. It is about knowing the actual floor before you start, and having the relationships and the language to operate in that environment professionally.</p>

          <h2 className="section-title" style={{fontSize:'clamp(24px,3vw,36px)', marginBottom:'24px'}}>The advisor is free.<br /><em>The mistake is not.</em></h2>
          <p className="section-body" style={{marginBottom:'28px'}}>Vantara&apos;s vehicle acquisition model is simple. You tell us your budget and what you are looking for. We source the vehicle, negotiate the deal, structure the finance if needed, and manage everything through to delivery. Our fee is built into the transaction, you pay within your budget, not on top of it.</p>
          <p className="section-body" style={{marginBottom:'40px'}}>The only time you need to move is to sign the deal and take delivery. Everything else is handled. The alternative is walking into a dealership alone, against a professional, with incomplete information. That gap has a price. Most people pay it without ever knowing they did.</p>

          <div style={{background:'var(--surface)', padding:'36px 40px', borderLeft:'2px solid var(--gold)'}}>
            <p style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'20px', fontStyle:'italic', color:'var(--text-primary)', lineHeight:1.5}}>The platform is public. The knowledge is not. That is what Vantara brings to every vehicle acquisition.</p>
          </div>
        </section>

        <div className="divider"></div>

        <section style={{padding:'80px 60px', textAlign:'center'}}>
          <h2 className="section-title" style={{textAlign:'center'}}>Ready to acquire<br /><em>the right vehicle?</em></h2>
          <p className="section-body" style={{maxWidth:'440px', margin:'0 auto 40px'}}>Tell us your budget and requirements. We handle everything from there.</p>
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
