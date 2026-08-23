import Link from 'next/link';
import Nav from '../../components/Nav';
import ScrollReveal from '../../components/ScrollReveal';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Website Not Generating Leads? Here's Why | ADA",
  description: 'Your website gets traffic but not leads. See why, and what a system built to convert actually looks like. Durban and Pietermaritzburg businesses, book a call with ADA.',
  alternates: { canonical: 'https://www.avaloncapitalgroup.co.za/ada/website-not-generating-leads' },
};

export default function WebsiteNotGeneratingLeads() {
  return (
    <>
      <Nav />
      <div id="page-website-not-generating-leads" className="page" role="main">

        <style>{`
          @media (max-width: 768px) {
            .wngl-grid-3 { grid-template-columns: 1fr !important; }
          }
        `}</style>

        <div className="inner-hero">
          <svg className="inner-hero-geo" style={{position:'absolute', right:'-120px', top:'50%', transform:'translateY(-50%)', opacity:0.11, pointerEvents:'none', zIndex:1}} width="580" height="680" viewBox="0 0 580 680" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" stroke="#C9A84C" strokeWidth="0.8">
              <polygon points="290,20 560,640 20,640"/>
              <polygon points="290,80 510,600 70,600"/>
              <polygon points="290,140 460,560 120,560"/>
            </g>
          </svg>
          <div className="inner-hero-bg" aria-hidden="true"></div>
          <Link className="back-btn" href="/ada" style={{cursor:'pointer', position:'relative', zIndex:10}}>← ADA</Link>
          <h1 style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(36px,5vw,64px)', fontWeight:300, lineHeight:1.15, marginBottom:'24px', maxWidth:'640px'}}>Your website gets visitors. It&apos;s not turning them into leads.</h1>
          <p style={{maxWidth:'520px', fontSize:'14px', color:'var(--text-muted)', lineHeight:1.9, marginBottom:'36px'}}>Traffic is not the problem. What happens after someone lands on the page is.</p>
        </div>

        <section aria-labelledby="outcome-heading">
          <div className="section-label">The Outcome</div>
          <h2 className="section-title" id="outcome-heading">Fix the drop-off and the same traffic starts producing leads.</h2>
          <p className="section-body">The traffic already exists. What&apos;s missing is what happens after someone arrives. Fix that, and enquiries go up without spending more on ads, content, or ranking work. The visitors you already have start becoming the leads you&apos;re already paying to attract.</p>
        </section>

        <div className="divider"></div>

        <section aria-labelledby="mechanism-heading">
          <div className="section-label">How It Works</div>
          <h2 className="section-title" id="mechanism-heading">Diagnose the drop-off. Fix what&apos;s blocking it. Build it to keep working.</h2>
          <p className="section-body">This is not guesswork. It is a specific process, done in order.</p>
          <div className="wngl-grid-3" style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'1px', background:'var(--border)', marginTop:'56px'}}>
            <div style={{background:'var(--surface)', padding:'36px'}}>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', marginBottom:'12px'}}>Diagnose</div>
              <div style={{fontSize:'13px', color:'var(--text-muted)', lineHeight:1.8}}>We find exactly where visitors stop. Analytics and Search Console show the drop-off point: which pages people leave from, what they never scroll to, where the message loses them.</div>
            </div>
            <div style={{background:'var(--surface)', padding:'36px'}}>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', marginBottom:'12px'}}>Fix messaging and structure</div>
              <div style={{fontSize:'13px', color:'var(--text-muted)', lineHeight:1.8}}>The words and the layout usually cause the drop, not the visual design. We rewrite the message to say what the business does, who it&apos;s for, and what to do next. We restructure the page so the path to contact is short and obvious.</div>
            </div>
            <div style={{background:'var(--surface)', padding:'36px'}}>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', marginBottom:'12px'}}>Build it to keep working</div>
              <div style={{fontSize:'13px', color:'var(--text-muted)', lineHeight:1.8}}>The fix is built into the site, not bolted on after. No plugin, no popup, no one-time patch. The structure keeps directing visitors to the next step long after we&apos;re done.</div>
            </div>
          </div>
        </section>

        <div className="divider"></div>

        <section aria-labelledby="boundaries-heading">
          <div className="section-label">What This Isn&apos;t</div>
          <h2 className="section-title" id="boundaries-heading">Not a redesign for looks. Not a rankings guarantee.</h2>
          <p className="section-body">This is not a visual refresh. A site can look better and still convert at the same rate. We only touch what affects whether a visitor becomes a lead.</p>
          <p className="section-body" style={{marginTop:'20px'}}>This is not a search ranking guarantee. Nobody can promise a position on Google. What we can fix is what happens after someone lands on the page, whether they arrived from search, ads, or a referral.</p>
          <p className="section-body" style={{marginTop:'20px'}}>This is not for every business. If your site gets no traffic at all, the problem is visibility, not conversion, and this isn&apos;t the right fix. If you&apos;re not willing to change the words on the page, this won&apos;t help either.</p>
        </section>

        <ScrollReveal delay={0}>
        <div className="divider"></div>

        <section aria-labelledby="proof-heading">
          <div className="section-label">Proof</div>
          <h2 className="section-title" id="proof-heading">We&apos;ve done this before. Afripact Civils is the case study.</h2>
          <p className="section-body">Afripact Civils had real experience and a strong reputation, but a website that didn&apos;t prove it. Visitors had no way to confirm the business was legitimate before making contact. We rebuilt the messaging and the structure so the site answers that question immediately, before the conversation even starts.</p>
          <p className="section-body" style={{marginTop:'20px'}}>That is the same problem this page is about: a site that gets attention but doesn&apos;t convert it. Read the full <Link href="/ada/afripact-civils" style={{color:'var(--gold)', textDecoration:'none'}}>Afripact Civils case study</Link>.</p>
        </section>
        </ScrollReveal>

        <div className="divider"></div>

        <section aria-labelledby="cta-heading">
          <div className="section-label">Get Started</div>
          <h2 className="section-title" id="cta-heading">See what&apos;s stopping your visitors from becoming leads.</h2>
          <p className="section-body">Book a call. We&apos;ll walk through what&apos;s happening on your own site and what it would take to fix it. Durban and Pietermaritzburg businesses welcome.</p>
          <div style={{marginTop:'36px'}}>
            <Link className="btn-primary" href="/contact">Book a Call</Link>
          </div>
        </section>

        <div className="divider"></div>

        <footer style={{borderTop:'1px solid var(--border)', padding:'40px 60px', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:'24px'}}>
          <div>
            <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'18px', fontWeight:300}}>ADA - A division of Avalon Capital Group</div>
          </div>
          <div style={{display:'flex', gap:'28px', flexWrap:'wrap'}}>
            <a href="#our-work-heading" style={{fontSize:'11px', color:'var(--text-muted)', letterSpacing:'0.05em', textDecoration:'none'}}>Work</a>
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
