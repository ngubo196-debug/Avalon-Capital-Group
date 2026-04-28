import Link from 'next/link';
import Nav from '../components/Nav';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Avalon Capital Group',
  description: 'Privacy Policy for Avalon Capital Group (Pty) Ltd — how we collect, store, and protect your personal information in accordance with POPIA.',
};

export default function PrivacyPolicy() {
  return (
    <>
      <Nav />
      <div className="page-wrap" style={{paddingTop:'72px'}}>

        <div style={{padding:'80px 60px 64px', borderBottom:'1px solid var(--border)'}}>
          <div style={{fontSize:'10px', letterSpacing:'0.3em', textTransform:'uppercase', color:'var(--gold)', marginBottom:'20px', display:'flex', alignItems:'center', gap:'16px'}}>
            <span style={{display:'block', width:'32px', height:'1px', background:'var(--gold)', flexShrink:0}}></span>
            Legal
          </div>
          <h1 style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(36px,5vw,58px)', fontWeight:300, lineHeight:1.1, marginBottom:'12px'}}>Privacy Policy</h1>
          <p style={{fontSize:'12px', letterSpacing:'0.06em', color:'var(--text-dim)'}}>Effective 24 April 2026</p>
        </div>

        <div style={{height:'1px', background:'var(--border)', margin:'0 60px'}}></div>

        <div style={{maxWidth:'720px', padding:'72px 60px 100px'}}>

          <div style={{marginBottom:'56px'}}>
            <div style={{fontSize:'10px', letterSpacing:'0.28em', textTransform:'uppercase', color:'var(--gold)', marginBottom:'16px', display:'flex', alignItems:'center', gap:'14px'}}>
              <span style={{display:'block', width:'24px', height:'1px', background:'var(--gold)', flexShrink:0}}></span>
              1. Introduction
            </div>
            <p style={{fontSize:'14px', color:'var(--text-muted)', lineHeight:1.9}}>Avalon Capital Group (Pty) Ltd (Registration No. 2025/671885/07) (&ldquo;ACG&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) is committed to protecting your personal information in accordance with the Protection of Personal Information Act 4 of 2013 (&ldquo;POPIA&rdquo;).</p>
          </div>

          <div style={{marginBottom:'56px'}}>
            <div style={{fontSize:'10px', letterSpacing:'0.28em', textTransform:'uppercase', color:'var(--gold)', marginBottom:'16px', display:'flex', alignItems:'center', gap:'14px'}}>
              <span style={{display:'block', width:'24px', height:'1px', background:'var(--gold)', flexShrink:0}}></span>
              2. What we collect
            </div>
            <p style={{fontSize:'14px', color:'var(--text-muted)', lineHeight:1.9}}>We collect personal and business information submitted through our website forms and enquiry channels. This may include your name, email address, phone number, company name, and information about your business needs.</p>
          </div>

          <div style={{marginBottom:'56px'}}>
            <div style={{fontSize:'10px', letterSpacing:'0.28em', textTransform:'uppercase', color:'var(--gold)', marginBottom:'16px', display:'flex', alignItems:'center', gap:'14px'}}>
              <span style={{display:'block', width:'24px', height:'1px', background:'var(--gold)', flexShrink:0}}></span>
              3. Why we collect it
            </div>
            <p style={{fontSize:'14px', color:'var(--text-muted)', lineHeight:1.9}}>Information is collected solely for the purpose of responding to enquiries, delivering services, and maintaining our business relationship with you.</p>
          </div>

          <div style={{marginBottom:'56px'}}>
            <div style={{fontSize:'10px', letterSpacing:'0.28em', textTransform:'uppercase', color:'var(--gold)', marginBottom:'16px', display:'flex', alignItems:'center', gap:'14px'}}>
              <span style={{display:'block', width:'24px', height:'1px', background:'var(--gold)', flexShrink:0}}></span>
              4. How we store and protect it
            </div>
            <p style={{fontSize:'14px', color:'var(--text-muted)', lineHeight:1.9}}>Your data is stored securely and accessed only by authorised personnel. We do not sell or share your personal information with third parties except where necessary to deliver our services (for example, communication platforms such as WhatsApp or our CRM system).</p>
          </div>

          <div style={{marginBottom:'56px'}}>
            <div style={{fontSize:'10px', letterSpacing:'0.28em', textTransform:'uppercase', color:'var(--gold)', marginBottom:'16px', display:'flex', alignItems:'center', gap:'14px'}}>
              <span style={{display:'block', width:'24px', height:'1px', background:'var(--gold)', flexShrink:0}}></span>
              5. Your rights
            </div>
            <p style={{fontSize:'14px', color:'var(--text-muted)', lineHeight:1.9}}>Under POPIA, you have the right to access, correct, or request deletion of your personal information held by us. To exercise these rights, contact us at <a href="mailto:luyanda@avaloncapitalgroup.co.za" style={{color:'var(--gold)', textDecoration:'none'}}>luyanda@avaloncapitalgroup.co.za</a>.</p>
          </div>

          <div>
            <div style={{fontSize:'10px', letterSpacing:'0.28em', textTransform:'uppercase', color:'var(--gold)', marginBottom:'16px', display:'flex', alignItems:'center', gap:'14px'}}>
              <span style={{display:'block', width:'24px', height:'1px', background:'var(--gold)', flexShrink:0}}></span>
              6. Contact
            </div>
            <p style={{fontSize:'14px', color:'var(--text-muted)', lineHeight:1.9}}>Avalon Capital Group (Pty) Ltd &middot; Durban, KwaZulu-Natal, South Africa &middot; <a href="mailto:luyanda@avaloncapitalgroup.co.za" style={{color:'var(--gold)', textDecoration:'none'}}>luyanda@avaloncapitalgroup.co.za</a></p>
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
