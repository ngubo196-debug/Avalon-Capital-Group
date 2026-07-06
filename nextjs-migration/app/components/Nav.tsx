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
          <li><Link id="nav-ada" href="/ada" style={activeStyle('/ada')}>ADA</Link></li>
          <li><Link id="nav-contact" href="/contact" style={activeStyle('/contact')}>Contact</Link></li>
          <li><Link id="nav-offers" href="/offers" style={activeStyle('/offers')}>Offers</Link></li>
          <li><a href="/audit" style={{color:'var(--gold)'}}>Free Audit</a></li>
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
            <Link href="/ada" style={activeStyle('/ada')} onClick={() => setMenuOpen(false)}>ADA</Link>
            <span
              onClick={() => setAdaOpen(!adaOpen)}
              style={{cursor:'pointer', padding:'0 12px', fontSize:'18px', color:'var(--gold)', userSelect:'none'}}
            >
              {adaOpen ? '−' : '+'}
            </span>
          </div>
          {adaOpen && (
            <div style={{display:'flex', flexDirection:'column', paddingLeft:'16px', borderLeft:'1px solid var(--border)', marginTop:'8px', gap:'12px'}}>
              <Link href="/ada/insights" style={{fontSize:'13px', color:'var(--text-muted)', textDecoration:'none', letterSpacing:'0.05em'}} onClick={() => setMenuOpen(false)}>Insights</Link>
              <Link href="/ada/case-studies" style={{fontSize:'13px', color:'var(--text-muted)', textDecoration:'none', letterSpacing:'0.05em'}} onClick={() => setMenuOpen(false)}>Case Studies</Link>
              <Link href="/ada/get-your-assistant" style={{fontSize:'13px', color:'var(--text-muted)', textDecoration:'none', letterSpacing:'0.05em'}} onClick={() => setMenuOpen(false)}>Get Your Assistant</Link>
            </div>
          )}
        </div>
        <Link href="/contact" style={activeStyle('/contact')} onClick={() => setMenuOpen(false)}>Contact / Enquire</Link>
        <Link href="/offers" style={activeStyle('/offers')} onClick={() => setMenuOpen(false)}>Offers</Link>
        <a href="/audit" style={{color:'var(--gold)'}} onClick={() => setMenuOpen(false)}>Free Audit</a>
      </nav>
    </>
  );
}
