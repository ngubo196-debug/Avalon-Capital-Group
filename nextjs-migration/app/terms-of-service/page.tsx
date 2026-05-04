import Link from 'next/link';
import Nav from '../components/Nav';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Avalon Capital Group',
  description: 'Terms of Service for Avalon Capital Group (Pty) Ltd, Avalon Digital Agency, and Vantara.',
  alternates: { canonical: 'https://www.avaloncapitalgroup.co.za/terms-of-service' },
};

export default function TermsOfService() {
  return (
    <>
      <Nav />
      <div className="page-wrap" style={{paddingTop:'72px'}}>

        <div style={{padding:'80px 60px 64px', borderBottom:'1px solid var(--border)'}}>
          <div style={{fontSize:'10px', letterSpacing:'0.3em', textTransform:'uppercase', color:'var(--gold)', marginBottom:'20px', display:'flex', alignItems:'center', gap:'16px'}}>
            <span style={{display:'block', width:'32px', height:'1px', background:'var(--gold)', flexShrink:0}}></span>
            Legal
          </div>
          <h1 style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(36px,5vw,58px)', fontWeight:300, lineHeight:1.1, marginBottom:'12px'}}>Terms of Service</h1>
          <p style={{fontSize:'12px', letterSpacing:'0.06em', color:'var(--text-dim)'}}>Effective 24 April 2026</p>
        </div>

        <div style={{height:'1px', background:'var(--border)', margin:'0 60px'}}></div>

        <div style={{maxWidth:'720px', padding:'72px 60px 100px'}}>

          {[
            {
              num: '1. Overview',
              body: 'These Terms of Service govern your use of the services provided by Avalon Capital Group (Pty) Ltd (Registration No. 2025/671885/07) and its divisions, Avalon Digital Agency (“ADA”) and Vantara. By engaging our services, you agree to these terms.'
            },
            {
              num: '2. Scope of services',
              body: 'ADA provides digital marketing, web development, SEO, and related services. Vantara provides business acquisition facilitation, brokerage, and strategic connector services. Services delivered are defined in the applicable proposal or service agreement accepted by the client.'
            },
            {
              num: '3. What is not included',
              body: 'Unless explicitly stated in a signed service agreement, our services do not include financial advice, legal advice, investment advice, or guaranteed business outcomes. ACG operates as a consultant, strategist, and facilitator, not as a licensed financial advisor.'
            },
            {
              num: '4. No guarantee of results',
              body: 'While we apply best practices and strategic analysis to every engagement, we do not guarantee specific results including but not limited to search rankings, lead volumes, revenue outcomes, or deal completion. All projections are indicative only.'
            },
            {
              num: '5. Payment terms',
              body: 'Unless otherwise agreed in writing, payment terms are 50% upfront and 50% on completion or delivery of the agreed milestone. All fees are quoted exclusive of VAT at 15%.'
            },
            {
              num: '6. Intellectual property',
              body: 'Upon full payment, clients receive ownership of deliverables created specifically for them. ACG retains ownership of all methodologies, frameworks, and tools used in service delivery.'
            },
            {
              num: '7. Limitation of liability',
              body: "To the maximum extent permitted by law, ACG’s total liability in connection with any engagement shall not exceed the fees paid by the client for the relevant service."
            },
            {
              num: '8. Governing law',
              body: 'These terms are governed by the laws of the Republic of South Africa. Any disputes shall be subject to the jurisdiction of the South African courts.'
            },
          ].map((section, i) => (
            <div key={i} style={{marginBottom: i < 7 ? '56px' : '0'}}>
              <div style={{fontSize:'10px', letterSpacing:'0.28em', textTransform:'uppercase', color:'var(--gold)', marginBottom:'16px', display:'flex', alignItems:'center', gap:'14px'}}>
                <span style={{display:'block', width:'24px', height:'1px', background:'var(--gold)', flexShrink:0}}></span>
                {section.num}
              </div>
              <p style={{fontSize:'14px', color:'var(--text-muted)', lineHeight:1.9}}>{section.body}</p>
            </div>
          ))}

          <div style={{marginTop:'56px'}}>
            <div style={{fontSize:'10px', letterSpacing:'0.28em', textTransform:'uppercase', color:'var(--gold)', marginBottom:'16px', display:'flex', alignItems:'center', gap:'14px'}}>
              <span style={{display:'block', width:'24px', height:'1px', background:'var(--gold)', flexShrink:0}}></span>
              9. Contact
            </div>
            <p style={{fontSize:'14px', color:'var(--text-muted)', lineHeight:1.9}}>Avalon Capital Group (Pty) Ltd &middot; Durban, KwaZulu-Natal, South Africa &middot; <a href="mailto:hello@avaloncapitalgroup.co.za" style={{color:'var(--gold)', textDecoration:'none'}}>hello@avaloncapitalgroup.co.za</a></p>
          </div>

        </div>

        <div style={{height:'1px', background:'var(--border)', margin:'0 60px'}}></div>

        <footer style={{borderTop:'1px solid var(--border)', padding:'44px 60px', display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:'16px'}}>
          <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'15px', fontWeight:400, letterSpacing:'0.12em', textTransform:'uppercase', color:'var(--text-muted)'}}>Avalon Capital Group</div>
          <ul style={{display:'flex', gap:'28px', listStyle:'none'}}>
            <li><Link href="/" style={{fontSize:'10px', letterSpacing:'0.18em', textTransform:'uppercase', color:'var(--text-dim)', textDecoration:'none'}}>Home</Link></li>
            <li><Link href="/vantara" style={{fontSize:'10px', letterSpacing:'0.18em', textTransform:'uppercase', color:'var(--text-dim)', textDecoration:'none'}}>Vantara</Link></li>
            <li><Link href="/ada" style={{fontSize:'10px', letterSpacing:'0.18em', textTransform:'uppercase', color:'var(--text-dim)', textDecoration:'none'}}>ADA</Link></li>
            <li><Link href="/offers" style={{fontSize:'10px', letterSpacing:'0.18em', textTransform:'uppercase', color:'var(--text-dim)', textDecoration:'none'}}>Offers</Link></li>
            <li><Link href="/privacy-policy" style={{fontSize:'10px', letterSpacing:'0.18em', textTransform:'uppercase', color:'var(--gold)', textDecoration:'none'}}>Privacy Policy</Link></li>
            <li><Link href="/terms-of-service" style={{fontSize:'10px', letterSpacing:'0.18em', textTransform:'uppercase', color:'var(--gold)', textDecoration:'none'}}>Terms of Service</Link></li>
          </ul>
          <div style={{fontSize:'11px', color:'var(--text-dim)'}}>© 2026 Avalon Capital Group</div>
          <div style={{width:'100%', paddingTop:'20px', borderTop:'1px solid var(--border)', marginTop:'4px'}}>
            <p style={{fontSize:'11px', color:'var(--text-dim)', marginBottom:'8px'}}>Avalon Capital Group (Pty) Ltd &middot; Reg. No. 2025/671885/07 &middot; Durban, KwaZulu-Natal, South Africa</p>
            <p style={{fontSize:'12px', color:'var(--text-dim)', lineHeight:1.7}}>Avalon Capital Group does not provide financial, investment, or legal advice. All information shared is for general informational purposes only. Clients are encouraged to consult with licensed professionals before making any investment or business decisions.</p>
          </div>
        </footer>

      </div>
    </>
  );
}
