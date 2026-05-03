'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  function activeStyle(href: string) {
    return pathname === href ? { color: 'var(--gold)' } : {};
  }

  return (
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

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <Link href="/" style={activeStyle('/')} onClick={() => setMenuOpen(false)}>Home</Link>
        <Link href="/about" style={activeStyle('/about')} onClick={() => setMenuOpen(false)}>About</Link>
        <Link href="/vantara" style={activeStyle('/vantara')} onClick={() => setMenuOpen(false)}>Vantara</Link>
        <Link href="/ada" style={activeStyle('/ada')} onClick={() => setMenuOpen(false)}>ADA</Link>
        <Link href="/contact" style={activeStyle('/contact')} onClick={() => setMenuOpen(false)}>Contact / Enquire</Link>
        <Link href="/offers" style={activeStyle('/offers')} onClick={() => setMenuOpen(false)}>Offers</Link>
        <a href="/audit" style={{color:'var(--gold)'}} onClick={() => setMenuOpen(false)}>Free Audit</a>
      </div>
    </nav>
  );
}
