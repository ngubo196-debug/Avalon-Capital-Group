import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '../../components/Nav';

export const metadata: Metadata = {
  title: 'Insights | ADA - Asset. Development. Automation.',
  description: 'Market intelligence and case studies on web design, SEO, and AI automation for South African businesses.',
  alternates: { canonical: 'https://www.avaloncapitalgroup.co.za/ada/insights' },
};

const articles = [
  {
    slug: 'ai-awareness',
    category: 'Market insight',
    badge: 'Anchor piece',
    title: 'The AI awareness cycle - why your website is about to become your most valuable business asset',
    description: 'AI has not changed how websites are built. It has changed what websites are responsible for. Here is what that shift means for any business that wants to stay competitive over the next three years.',
  },
  {
    slug: 'why-websites-fail',
    category: 'The problem',
    badge: null,
    title: 'Why most business websites do not make money',
    description: 'It is not the design. It is not the traffic. It is the fact that most websites were never built to convert. Here is what a website that does not perform actually costs you.',
  },
  {
    slug: 'revenue-website',
    category: 'The solution',
    badge: null,
    title: 'What a revenue-driven website actually looks like',
    description: 'Most business owners have never seen one up close. Here is a breakdown of the specific elements that separate a website that performs from one that just exists.',
  },
  {
    slug: 'ai-websites',
    category: 'Authority piece',
    badge: null,
    title: 'Why AI will not replace websites - it will make them more valuable',
    description: 'Everyone is asking whether AI makes websites obsolete. The answer is the opposite. Here is why the businesses that invest in strong digital infrastructure now will be the ones AI points people toward.',
  },
  {
    slug: 'canopy-deep-dive',
    category: 'Case study deep-dive',
    badge: null,
    title: 'The Canopy Courier rebuild - how we turned a retail website into a fleet revenue system',
    description: 'A ground-level breakdown of a real project. What we found, what we built, and the specific decisions that turned a functional website into a business development tool with R1M+ annual revenue potential.',
  },
];

export default function InsightsIndex() {
  return (
    <>
      <Nav />
      <div id="page-insights" className="page" role="main">
        <div className="inner-hero">
          <div className="inner-hero-bg" aria-hidden="true"></div>
          <Link className="back-btn" href="/ada" style={{cursor:'pointer', position:'relative', zIndex:10}}>Back to ADA</Link>
          <p style={{fontSize:'9px', letterSpacing:'0.25em', textTransform:'uppercase', color:'var(--gold)', marginBottom:'28px'}}>ADA · Insights</p>
          <h1 style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(36px,5vw,64px)', fontWeight:300, lineHeight:1.15, marginBottom:'24px', maxWidth:'640px'}}>We share how we think.</h1>
          <p style={{maxWidth:'520px', fontSize:'14px', color:'var(--text-muted)', lineHeight:1.9}}>Market intelligence and case studies on web design, SEO, and AI automation for South African businesses. Not to fill a content calendar - to show you we understand what is happening in the market.</p>
        </div>

        <section style={{padding:'0 60px 80px'}}>
          <div style={{borderTop:'1px solid var(--border)'}}>
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/ada/insights/${article.slug}`}
                style={{padding:'28px 0', borderBottom:'1px solid var(--border)', display:'flex', alignItems:'flex-start', gap:'24px', textDecoration:'none', color:'inherit'}}
              >
                <div style={{flex:1}}>
                  <div style={{display:'flex', alignItems:'center', gap:'10px', marginBottom:'10px', flexWrap:'wrap'}}>
                    <span style={{fontSize:'9px', letterSpacing:'0.2em', textTransform:'uppercase', color:'var(--gold)'}}>{article.category}</span>
                    {article.badge && (
                      <span style={{fontSize:'9px', letterSpacing:'0.15em', textTransform:'uppercase', color:'var(--black)', background:'var(--gold)', padding:'2px 8px'}}>{article.badge}</span>
                    )}
                  </div>
                  <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'20px', fontWeight:300, lineHeight:1.3, marginBottom:'8px'}}>{article.title}</div>
                  <div style={{fontSize:'12px', color:'var(--text-muted)', lineHeight:1.8, maxWidth:'620px'}}>{article.description}</div>
                </div>
                <div style={{fontSize:'18px', color:'var(--gold)', flexShrink:0, paddingTop:'4px'}}>→</div>
              </Link>
            ))}
          </div>
        </section>

        <footer style={{borderTop:'1px solid var(--border)', padding:'40px 60px', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:'24px'}}>
          <div>
            <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'18px', fontWeight:300}}>ADA - Asset. Development. Automation. - A division of Avalon Capital Group</div>
          </div>
          <div style={{display:'flex', gap:'28px', flexWrap:'wrap'}}>
            <Link href="/ada#section-our-work" style={{fontSize:'11px', color:'var(--text-muted)', letterSpacing:'0.05em', textDecoration:'none'}}>Work</Link>
            <a href="#insights-heading" style={{fontSize:'11px', color:'var(--text-muted)', letterSpacing:'0.05em', textDecoration:'none'}}>Insights</a>
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
