import Link from 'next/link';
import Nav from '../../components/Nav';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Advisor Is Free. The Mistake Is Not. | Vantara Insights',
  description: 'Most high-value transactions happen without anyone in the buyer\'s corner. Vantara exists to change that, across vehicles, property, and strategic deals.',
};

export default function VantaraInsight3() {
  return (
    <>
      <Nav />
      <div id="page-vantara-insight-3" className="page" role="main">
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
          <p style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'11px', letterSpacing:'0.22em', textTransform:'uppercase', color:'var(--gold)', marginBottom:'8px'}}>Vantara Insights · Advisory</p>
          <p style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'13px', letterSpacing:'0.14em', textTransform:'uppercase', color:'var(--text-muted)', fontStyle:'italic', marginBottom:'32px'}}>The Vantara Model</p>
          <h1 style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(34px,5vw,64px)', fontWeight:400, lineHeight:1.08, color:'var(--text-primary)', maxWidth:'720px', marginBottom:'28px'}}>The advisor is free.<br /><em style={{color:'var(--gold)'}}>The mistake is not.</em></h1>
          <p style={{fontSize:'15px', lineHeight:1.8, color:'var(--text-secondary)', maxWidth:'500px'}}>Most high-value transactions happen without anyone in the buyer&apos;s corner. Vantara exists to change that, across vehicles, property, and strategic deals.</p>
        </div>

        <div className="divider"></div>

        <section style={{padding:'80px 60px', maxWidth:'800px'}}>
          <p className="section-body" style={{marginBottom:'28px'}}>Every significant financial decision you make happens inside a market. Markets have professionals on one side, people who do this every day, who know the pricing, the leverage points, the information asymmetries, and exactly how to structure a transaction in their favour. On the other side is you, making this decision once, without that context.</p>
          <p className="section-body" style={{marginBottom:'28px'}}>This is not unique to South Africa. It is not unique to vehicles or property. It is the fundamental structure of every market where one side has significantly more information and experience than the other. And in most of those markets, sophisticated participants solve it the same way, they get an advisor.</p>

          <h2 className="section-title" style={{fontSize:'clamp(24px,3vw,36px)', marginBottom:'24px'}}>Why advisory is standard<br /><em>at every other level.</em></h2>
          <p className="section-body" style={{marginBottom:'28px'}}>Corporate acquisitions have investment bankers. Legal disputes have attorneys. Tax decisions have accountants. Every high-stakes, information-asymmetric transaction has a professional on both sides as a matter of course, because the cost of getting it wrong is too high to rely on instinct and research alone.</p>
          <p className="section-body" style={{marginBottom:'28px'}}>The reason most private buyers don&apos;t have an advisor in vehicle or property transactions is not that they don&apos;t need one. It is that the infrastructure for accessible, client-side advisory has never really existed at the private level. Dealers are ubiquitous. Estate agents are everywhere. An independent advisor working exclusively for the buyer, that is rarer.</p>

          <h2 className="section-title" style={{fontSize:'clamp(24px,3vw,36px)', marginBottom:'24px'}}>How the Vantara model<br /><em>actually works.</em></h2>
          <p className="section-body" style={{marginBottom:'28px'}}>For vehicle acquisitions, Vantara&apos;s fee is built into the transaction. You give us a budget. We source a vehicle within that budget, negotiate the deal, and manage everything to delivery. The margin between what we source the car for and what you pay within your budget is how we earn. You pay no more than you budgeted. In most cases, you get more car than you would have found alone.</p>
          <p className="section-body" style={{marginBottom:'28px'}}>For property, compensation is structured deal-side, an equity stake in the SPV or a structuring fee built into the transaction architecture. We earn when the deal is properly structured and closed. Our incentive is aligned with yours: a good deal, properly packaged, that performs.</p>
          <p className="section-body" style={{marginBottom:'28px'}}>For strategic transactions, we work on a success fee. We engage only where we have a genuine advantage in access, relationships, or deal architecture, and we earn only when the deal closes. No retainer, no hourly rate, no payment for effort that doesn&apos;t produce an outcome.</p>

          <h2 className="section-title" style={{fontSize:'clamp(24px,3vw,36px)', marginBottom:'24px'}}>What this means<br /><em>for the client.</em></h2>
          <p className="section-body" style={{marginBottom:'28px'}}>It means your advisor&apos;s interests are aligned with your outcome, not with closing any deal, but with closing the right one. It means the professional across the table from the market is working for you. It means you make high-value decisions with full information, structured properly, and without the pressure that markets use to extract margin from unprepared buyers.</p>
          <p className="section-body" style={{marginBottom:'40px'}}>Vantara works with a limited number of clients at any given time. We are not a volume operation. Every mandate gets the full process, because that is the only way the model works and the only standard we hold ourselves to.</p>

          <div style={{background:'var(--surface)', padding:'36px 40px', borderLeft:'2px solid var(--gold)'}}>
            <p style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'20px', fontStyle:'italic', color:'var(--text-primary)', lineHeight:1.5}}>Most people negotiate against a professional on the other side. Vantara puts a professional on your side.</p>
          </div>
        </section>

        <div className="divider"></div>

        <section style={{padding:'80px 60px', textAlign:'center'}}>
          <h2 className="section-title" style={{textAlign:'center'}}>Ready to have someone<br /><em>in your corner?</em></h2>
          <p className="section-body" style={{maxWidth:'440px', margin:'0 auto 40px'}}>Tell us what you are working on. We will tell you honestly whether we can add value, and how.</p>
          <div style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'16px'}}>
            <a href="https://wa.me/27712205313?text=Hi%2C%20I%27d%20like%20to%20discuss%20an%20opportunity%20with%20Vantara." target="_blank" rel="noopener noreferrer" className="btn-primary" style={{position:'relative', zIndex:9999}}>Start the Conversation</a>
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
