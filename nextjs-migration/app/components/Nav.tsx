'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [adaOpen, setAdaOpen] = useState(false);
  const pathname = usePathname();

  function activeStyle(href: string) {
    return pathname === href ? { color: 'var(--gold)' } : {};
  }

  return (
    <>
      <nav role="navigation" aria-label="Main navigation">
        <div className="nav-logo">
          <Link href="/" aria-label="Avalon Capital Group Home">
            <img
              src="/assets/acg-logo.jpg"
              alt="Avalon Capital Group"
              style={{height:'56px', width:'auto', display:'block', objectFit:'contain', mixBlendMode:'screen'}}
            />
          </Link>
        </div>
        <ul className="nav-links">
          <li><Link id="nav-home" href="/" style={activeStyle('/')}>Home</Link></li>
          <li><Link id="nav-about" href="/about" style={activeStyle('/about')}>About</Link></li>
          <li><Link id="nav-vantara" href="/vantara" style={activeStyle('/vantara')}>Vantara</Link></li>
          <li><a id="nav-ada" href="https://adagrowth.co.za">ADA</a></li>
          <li><Link id="nav-contact" href="/contact" style={activeStyle('/contact')}>Contact</Link></li>
          <li><a id="nav-offers" href="https://adagrowth.co.za/offers">Offers</a></li>
        </ul>
        <Link className="nav-cta" href="/contact">Enquire</Link>
        <div
          className="nav-hamburger"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span><span></span><span></span>
        </div>
      </nav>

      <nav className={`mobile-menu${menuOpen ? ' open' : ''}`} id="mobileMenu" aria-label="Mobile navigation" style={{overflowY: 'auto'}}>
        <Link href="/" style={activeStyle('/')} onClick={() => setMenuOpen(false)}>Home</Link>
        <Link href="/about" style={activeStyle('/about')} onClick={() => setMenuOpen(false)}>About</Link>
        <Link href="/vantara" style={activeStyle('/vantara')} onClick={() => setMenuOpen(false)}>Vantara</Link>
        <div style={{display:'flex', flexDirection:'column'}}>
          <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
            <a href="https://adagrowth.co.za" onClick={() => setMenuOpen(false)}>ADA</a>
            <span
              onClick={() => setAdaOpen(!adaOpen)}
              style={{cursor:'pointer', padding:'0 12px', fontSize:'18px', color:'var(--gold)', userSelect:'none'}}
            >
              {adaOpen ? '−' : '+'}
            </span>
          </div>
          {adaOpen && (
            <div style={{display:'flex', flexDirection:'column', paddingLeft:'16px', borderLeft:'1px solid var(--border)', marginTop:'8px', gap:'12px'}}>
              <a href="https://adagrowth.co.za/#work" style={{fontSize:'13px', color:'var(--text-muted)', textDecoration:'none', letterSpacing:'0.05em'}} onClick={() => setMenuOpen(false)}>Our Work</a>
              <a href="https://adagrowth.co.za/afripact-civils" style={{fontSize:'13px', color:'var(--text-muted)', textDecoration:'none', letterSpacing:'0.05em'}} onClick={() => setMenuOpen(false)}>Afripact Civils</a>
              <a href="https://adagrowth.co.za/acg-case-study" style={{fontSize:'13px', color:'var(--text-muted)', textDecoration:'none', letterSpacing:'0.05em'}} onClick={() => setMenuOpen(false)}>ACG Case Study</a>
              <div style={{display:'flex', flexDirection:'column', gap:'12px', marginTop:'4px', paddingTop:'12px', borderTop:'1px solid var(--border)'}}>
                <a href="https://adagrowth.co.za/insights" style={{fontSize:'13px', color:'var(--text-muted)', textDecoration:'none', letterSpacing:'0.05em'}} onClick={() => setMenuOpen(false)}>Insights</a>
                <a href="https://adagrowth.co.za/ai-assistant-for-business" style={{fontSize:'13px', color:'var(--text-muted)', textDecoration:'none', letterSpacing:'0.05em'}} onClick={() => setMenuOpen(false)}>Get Your Assistant</a>
              </div>
            </div>
          )}
        </div>
        <Link href="/contact" style={activeStyle('/contact')} onClick={() => setMenuOpen(false)}>Contact / Enquire</Link>
        <a href="https://adagrowth.co.za/offers" onClick={() => setMenuOpen(false)}>Offers</a>
      </nav>
    </>
  );
}
