import Link from 'next/link';
import Nav from '../../components/Nav';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Automation South Africa | AI-Powered Business Systems | Avalon Digital Agency',
  description: 'AI automation for South African businesses. Avalon Digital Agency builds AI-powered systems that generate leads, qualify prospects, and reduce manual work across your operation.',
  alternates: { canonical: 'https://www.avaloncapitalgroup.co.za/ada/ai-automation-south-africa' },
};

export default function AiAutomationSouthAfrica() {
  return (
    <>
      <Nav />
      <div id="page-ai-automation-south-africa" className="page" role="main">

        <style>{`
          @media (max-width: 768px) {
            .ai-grid-3 { grid-template-columns: 1fr !important; }
            .ai-grid-2 { grid-template-columns: 1fr !important; }
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
          <h1 style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(36px,5vw,64px)', fontWeight:300, lineHeight:1.15, marginBottom:'24px', maxWidth:'640px'}}>AI Automation for South African Businesses</h1>
          <p style={{maxWidth:'520px', fontSize:'14px', color:'var(--text-muted)', lineHeight:1.9, marginBottom:'36px'}}>The businesses pulling ahead right now are not working harder. They are automating the right things.</p>
        </div>

        <section aria-labelledby="problem-heading">
          <div className="section-label">The Problem</div>
          <h2 className="section-title" id="problem-heading">Most South African businesses are still doing manually what AI can do instantly.</h2>
          <p className="section-body">Lead qualification, proposal generation, client follow-up, and reporting are consuming hours every week that should be going into growth. AI automation does not replace your team. It removes the bottlenecks that slow them down.</p>
        </section>

        <div className="divider"></div>

        <section aria-labelledby="what-heading">
          <div className="section-label">What We Build</div>
          <h2 className="section-title" id="what-heading">AI systems that work while you focus on the business.</h2>
          <div className="ai-grid-3" style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'1px', background:'var(--border)', marginTop:'56px'}}>
            <div style={{background:'var(--surface)', padding:'36px'}}>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', marginBottom:'12px'}}>AI-powered lead generation</div>
              <div style={{fontSize:'13px', color:'var(--text-muted)', lineHeight:1.8}}>Systems that attract, qualify, and route leads automatically. Your sales team speaks to prospects who are already warm.</div>
            </div>
            <div style={{background:'var(--surface)', padding:'36px'}}>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', marginBottom:'12px'}}>Automated proposal and document generation</div>
              <div style={{fontSize:'13px', color:'var(--text-muted)', lineHeight:1.8}}>Proposals, audits, and client-facing documents generated in seconds from structured intake data. No manual formatting.</div>
            </div>
            <div style={{background:'var(--surface)', padding:'36px'}}>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', marginBottom:'12px'}}>Workflow and reporting automation</div>
              <div style={{fontSize:'13px', color:'var(--text-muted)', lineHeight:1.8}}>Connect your tools, automate your reporting, and eliminate the manual processes that eat into your margins.</div>
            </div>
          </div>
        </section>

        <div className="divider"></div>

        <section aria-labelledby="for-heading">
          <div className="section-label">Who It&apos;s For</div>
          <h2 className="section-title" id="for-heading">Built for South African businesses ready to operate at a higher level.</h2>
          <p className="section-body">Whether you are a professional services firm, an agency, a logistics operator, or a growing SME, AI automation compounds your existing team&apos;s output without adding headcount.</p>
          <div className="ai-grid-2" style={{display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:'1px', background:'var(--border)', marginTop:'56px'}}>
            <div style={{background:'var(--surface)', padding:'36px'}}>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px'}}>Professional Services Firms</div>
            </div>
            <div style={{background:'var(--surface)', padding:'36px'}}>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px'}}>Digital Agencies</div>
            </div>
            <div style={{background:'var(--surface)', padding:'36px'}}>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px'}}>Logistics &amp; Operations Businesses</div>
            </div>
            <div style={{background:'var(--surface)', padding:'36px'}}>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px'}}>Growing SMEs</div>
            </div>
          </div>
        </section>

        <div className="divider"></div>

        <section style={{padding:'64px 0', textAlign:'center'}}>
          <p style={{fontFamily:'Montserrat', fontSize:'13px', letterSpacing:'0.1em', color:'var(--muted)', marginBottom:'24px', textTransform:'uppercase'}}>Seen enough?</p>
          <a className="btn-primary" href="/audit">Get Your Free Audit</a>
        </section>

        <div className="divider"></div>

        <section aria-labelledby="proof-heading">
          <div className="section-label">Built by ADA</div>
          <h2 className="section-title" id="proof-heading">We built our own AI systems before we sold them.</h2>
          <p className="section-body">Avalon Digital Agency&apos;s audit tool generates a fully scored, AI-powered diagnostic report from a 13-step intake form. It runs on the same infrastructure we build for clients. We do not sell what we have not proven on ourselves first.</p>
          <Link href="/audit" style={{fontSize:'12px', letterSpacing:'0.1em', color:'var(--gold)', marginTop:'24px', display:'inline-block'}}>Try the free audit tool →</Link>
        </section>

        <div className="divider"></div>

        <section aria-labelledby="cta-heading">
          <div className="section-label">Get Started</div>
          <h2 className="section-title" id="cta-heading">Let&apos;s identify where automation will move the needle fastest.</h2>
          <p className="section-body">Start with a free digital audit. We will identify the highest-impact automation opportunities in your business before you spend a cent.</p>
          <div style={{display:'flex', gap:'16px', flexWrap:'wrap', marginTop:'36px'}}>
            <Link className="btn-primary" href="/audit">Get Your Free Audit</Link>
            <Link className="btn-ghost" href="/contact">Start a Conversation</Link>
          </div>
        </section>

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
