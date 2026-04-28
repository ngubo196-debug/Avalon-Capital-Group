'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

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
          <li><Link id="nav-home" href="/">Home</Link></li>
          <li><Link id="nav-about" href="/about">About</Link></li>
          <li><Link id="nav-vantara" href="/vantara">Vantara</Link></li>
          <li><Link id="nav-ada" href="/ada">ADA</Link></li>
          <li><Link id="nav-contact" href="/contact">Contact</Link></li>
          <li><Link id="nav-offers" href="/offers">Offers</Link></li>
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

      <nav className={`mobile-menu${menuOpen ? ' open' : ''}`} id="mobileMenu" aria-label="Mobile navigation">
        <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
        <Link href="/vantara" onClick={() => setMenuOpen(false)}>Vantara</Link>
        <Link href="/ada" onClick={() => setMenuOpen(false)}>ADA</Link>
        <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact / Enquire</Link>
        <Link href="/offers" onClick={() => setMenuOpen(false)}>Offers</Link>
        <a href="/audit" style={{color:'var(--gold)'}} onClick={() => setMenuOpen(false)}>Free Audit</a>
      </nav>
    </>
  );
}

