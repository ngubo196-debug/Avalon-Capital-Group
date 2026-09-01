import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '../../components/Nav';

export const metadata: Metadata = {
  title: 'Case Studies | ADA - Asset. Development. Automation.',
  description: 'Real projects, documented. See how ADA builds revenue systems for South African businesses.',
  alternates: { canonical: 'https://www.avaloncapitalgroup.co.za/ada/case-studies' },
};

const caseStudies = [
  {
    href: '/ada/afripact-civils',
    category: 'Civil construction',
    location: 'KwaZulu-Natal',
    title: 'Afripact Civils',
    subtitle: 'Zero Search Presence to 100+ Ranking Queries',
    description: 'Afripact Civils had the capability and the track record. What they did not have was a digital presence that matched. We built them a website focused on one thing: making Afripact look like exactly what they are - a legitimate, professional civil construction business worth doing business with.',
    stats: [
      { value: 'Civil construction', label: 'Industry' },
      { value: 'Trust + visibility', label: 'Primary objective' },
      { value: 'Phase 2 active', label: 'Revenue engine next', gold: true },
    ],
  },
  {
    href: '/ada/canopy-courier',
    category: 'Automotive services',
    location: 'KwaZulu-Natal',
    title: 'Canopy Courier',
    subtitle: 'From a retail shop to a fleet revenue system',
    description: 'Canopy Courier had a clean website and a strong service. But the site was built for walk-in retail customers, and the real money was sitting completely untouched in fleet. We rebuilt the entire digital presence around a dual strategy: retail and fleet running in parallel.',
    stats: [
      { value: '8 deliverables', label: 'Scope of build' },
      { value: 'Retail + fleet', label: 'Dual revenue path' },
      { value: 'R1M-R2M', label: 'Projected annual upside', gold: true },
    ],
  },
  {
    href: '/ada/acg-case-study',
    category: 'Our own build',
    location: 'KwaZulu-Natal',
    title: 'Avalon Capital Group',
    subtitle: 'From 1 indexed page to 29 in a server-rendered Next.js build',
    description: 'We built this. The full story of how ADA built, diagnosed, and migrated avaloncapitalgroup.co.za - from a plain HTML SPA with 1 indexed page to a server-rendered Next.js site with 29 indexed pages. Documented live.',
    stats: [
      { value: '14 days', label: 'Concept to live' },
      { value: '1 → 29 pages', label: 'Indexed by Google' },
      { value: 'Next.js 14', label: 'Migration stack', gold: true },
    ],
  },
];

export default function CaseStudiesIndex() {
  return (
    <>
      <Nav />
      <div id="page-case-studies" className="page" role="main">
        <div className="inner-hero">
          <div className="inner-hero-bg" aria-hidden="true"></div>
          <Link className="back-btn" href="/ada" style={{cursor:'pointer', position:'relative', zIndex:10}}>Back to ADA</Link>
          <p style={{fontSize:'9px', letterSpacing:'0.25em', textTransform:'uppercase', color:'var(--gold)', marginBottom:'28px'}}>ADA · Case Studies</p>
          <h1 style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(36px,5vw,64px)', fontWeight:300, lineHeight:1.15, marginBottom:'24px', maxWidth:'640px'}}>Proof, not promises.</h1>
          <p style={{maxWidth:'520px', fontSize:'14px', color:'var(--text-muted)', lineHeight:1.9}}>Every project starts with a problem and ends with a system. Here is what that looks like in practice.</p>
        </div>

        <section style={{padding:'0 60px 80px'}}>
          <div style={{display:'flex', flexDirection:'column', gap:'1px', background:'var(--border)'}}>
            {caseStudies.map((cs) => (
              <div key={cs.href} style={{background:'var(--surface)', padding:'48px'}}>
                <div style={{display:'flex', gap:'12px', marginBottom:'32px', flexWrap:'wrap'}}>
                  <span style={{fontSize:'9px', letterSpacing:'0.2em', textTransform:'uppercase', color:'var(--gold)', border:'1px solid var(--border)', padding:'5px 12px'}}>{cs.category}</span>
                  <span style={{fontSize:'9px', letterSpacing:'0.2em', textTransform:'uppercase', color:'var(--text-muted)', border:'1px solid var(--border)', padding:'5px 12px'}}>{cs.location}</span>
                </div>
                <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(28px,3.5vw,44px)', fontWeight:300, lineHeight:1.1, marginBottom:'10px'}}>{cs.title}</div>
                <div style={{fontSize:'9px', letterSpacing:'0.25em', textTransform:'uppercase', color:'var(--text-muted)', marginBottom:'28px'}}>{cs.subtitle}</div>
                <p style={{fontSize:'14px', color:'var(--text-muted)', lineHeight:1.9, maxWidth:'640px', marginBottom:'36px'}}>{cs.description}</p>
                <div style={{display:'flex', gap:'1px', background:'var(--border)', marginBottom:'36px', flexWrap:'wrap'}}>
                  {cs.stats.map((stat) => (
                    <div key={stat.label} style={{background:'var(--black)', padding:'16px 24px', flex:1, minWidth:'160px'}}>
                      <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'16px', marginBottom:'4px'}}>{stat.value}</div>
                      <div style={{fontSize:'9px', letterSpacing:'0.2em', textTransform:'uppercase', color: stat.gold ? 'var(--gold)' : 'var(--text-muted)'}}>{stat.label}</div>
                    </div>
                  ))}
                </div>
                <Link href={cs.href} style={{fontSize:'12px', letterSpacing:'0.1em', color:'var(--gold)', textDecoration:'none'}}>Full case study →</Link>
              </div>
            ))}
          </div>
        </section>

        <footer style={{borderTop:'1px solid var(--border)', padding:'40px 60px', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:'24px'}}>
          <div>
            <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'18px', fontWeight:300}}>ADA - Asset. Development. Automation. - A division of Avalon Capital Group</div>
          </div>
          <div style={{display:'flex', gap:'28px', flexWrap:'wrap'}}>
            <Link href="/ada#section-our-work" style={{fontSize:'11px', color:'var(--text-muted)', letterSpacing:'0.05em', textDecoration:'none'}}>Work</Link>
            <Link href="/ada/insights" style={{fontSize:'11px', color:'var(--text-muted)', letterSpacing:'0.05em', textDecoration:'none'}}>Insights</Link>
            <Link href="/ada" style={{fontSize:'11px', color:'var(--text-muted)', letterSpacing:'0.05em', textDecoration:'none'}}>FAQ</Link>
            <Link href="/contact" style={{fontSize:'11px', color:'var(--text-muted)', letterSpacing:'0.05em', textDecoration:'none'}}>Contact</Link>
            <a href="/privacy-policy" style={{fontSize:'11px', color:'var(--gold)', textDecoration:'none', letterSpacing:'0.05em'}}>Privacy Policy</a>
            <a href="/terms-of-service" style={{fontSize:'11px', color:'var(--gold)', textDecoration:'none', letterSpacing:'0.05em'}}>Terms of Service</a>
          </div>
          <div style={{width:'100%', paddingTop:'20px', borderTop:'1px solid var(--border)', marginTop:'4px'}}>
            <p style={{fontSize:'11px', color:'var(--text-dim)', marginBottom:'8px'}}>Avalon Capital Group (Pty) Ltd &middot; Reg. No. 2025/671885/07 &middot; Durban, KwaZulu-Natal, South Africa</p>
            <p style={{fontSize:'12px', color:'var(--text-dim)', lineHeight:1.7}}>Avalon Capital Group does not provide financial, investment, or legal advice. All information shared is for general informational purposes only. Clients are encouraged to consult with licensed professionals before making any investment or business decisions.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
