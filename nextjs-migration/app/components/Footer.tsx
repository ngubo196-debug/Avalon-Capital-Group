import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="footer-logo">Avalon Capital Group</div>
      <ul className="footer-links">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/vantara">Vantara</Link></li>
        <li><Link href="/ada">ADA</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
      <div className="footer-copy">© 2026 Avalon Capital Group</div>
      <div style={{width:'100%', paddingTop:'20px', borderTop:'1px solid var(--border)', marginTop:'4px'}}>
        <p style={{fontSize:'11px', color:'var(--text-dim)', marginBottom:'8px'}}>Avalon Capital Group (Pty) Ltd &middot; Reg. No. 2025/671885/07 &middot; Durban, KwaZulu-Natal, South Africa</p>
        <p style={{fontSize:'12px', color:'var(--text-dim)', lineHeight:1.7, marginBottom:'12px'}}>Avalon Capital Group does not provide financial, investment, or legal advice. All information shared is for general informational purposes only. Clients are encouraged to consult with licensed professionals before making any investment or business decisions.</p>
        <p style={{fontSize:'11px'}}><a href="/privacy-policy" style={{color:'var(--gold)', textDecoration:'none', marginRight:'24px'}}>Privacy Policy</a><a href="/terms-of-service" style={{color:'var(--gold)', textDecoration:'none'}}>Terms of Service</a></p>
      </div>
    </footer>
  );
}
