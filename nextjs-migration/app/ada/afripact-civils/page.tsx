import Link from 'next/link';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Afripact Civils Case Study | Digital Agency KwaZulu-Natal | Avalon Digital Agency',
  description: 'How ADA took Afripact Civils from invisible to credible. Civil construction, KwaZulu-Natal.',
};

export default function AfripactCivils() {
  return (
    <>
      <Nav />
      <div id="page-afripact-civils" className="page" role="main">
        <div className="inner-hero">
          <svg className="inner-hero-geo" style={{position:'absolute', right:'-120px', top:'50%', transform:'translateY(-50%)', opacity:0.11, pointerEvents:'none', zIndex:1}} width="580" height="680" viewBox="0 0 580 680" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" stroke="#C9A84C" strokeWidth="0.8">
              <polygon points="290,20 560,640 20,640"/>
              <polygon points="290,80 510,600 70,600"/>
              <polygon points="290,140 460,560 120,560"/>
            </g>
          </svg>
          <div className="inner-hero-bg" aria-hidden="true"></div>
          <Link className="back-btn" href="/ada" style={{position:'relative', zIndex:10}}>← Back to ADA</Link>
          <div className="section-label">Case study - Afripact Civils</div>
          <h1 style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(36px,5vw,64px)', fontWeight:300, lineHeight:1.15, marginBottom:'24px', maxWidth:'640px'}}>Building credibility before the conversation starts.</h1>
          <p style={{maxWidth:'520px', fontSize:'14px', color:'var(--text-muted)', lineHeight:1.9, marginBottom:'48px'}}>In construction, trust isn&apos;t a nice-to-have. It&apos;s the deal. Afripact Civils had the capability, the experience, and the track record, but nothing online that proved it. We changed that.</p>
          <div style={{display:'flex', gap:'1px', background:'var(--border)', flexWrap:'wrap', maxWidth:'640px'}}>
            <div style={{background:'var(--black)', padding:'20px 28px', flex:1, minWidth:'160px'}}>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', fontWeight:300, marginBottom:'6px'}}>Civil construction</div>
              <div style={{fontSize:'9px', letterSpacing:'0.2em', textTransform:'uppercase', color:'var(--text-muted)'}}>Industry</div>
            </div>
            <div style={{background:'var(--black)', padding:'20px 28px', flex:1, minWidth:'160px'}}>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', fontWeight:300, marginBottom:'6px'}}>Trust + visibility</div>
              <div style={{fontSize:'9px', letterSpacing:'0.2em', textTransform:'uppercase', color:'var(--text-muted)'}}>Phase one objective</div>
            </div>
            <div style={{background:'var(--black)', padding:'20px 28px', flex:1, minWidth:'160px'}}>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', fontWeight:300, marginBottom:'6px'}}>Phase 2 active</div>
              <div style={{fontSize:'9px', letterSpacing:'0.2em', textTransform:'uppercase', color:'var(--gold)'}}>Revenue engine in progress</div>
            </div>
          </div>
        </div>

        <div className="divider"></div>

        <section style={{padding:'80px 60px'}} aria-labelledby="afripact-situation">
          <div className="section-label">The situation</div>
          <h2 className="section-title" id="afripact-situation">Reputation without reach.<br /><em>Trust without proof.</em></h2>
          <p className="section-body">Afripact Civils operates in civil construction, an industry where reputation carries enormous weight and where new clients almost always do their homework before picking up the phone. The question every prospect asks before reaching out is some version of the same thing: is this a real business I can trust with my project?</p>
          <p className="section-body" style={{marginTop:'20px'}}>Without a digital presence that answered that question clearly, Afripact was relying entirely on word of mouth and personal relationships. That works, until it doesn&apos;t. The moment a prospect outside that network searched for them, or was referred and went to verify, there was nothing there to confirm what they&apos;d heard.</p>
          <p className="section-body" style={{marginTop:'20px'}}>The website we inherited wasn&apos;t strategic. It was a starting point. Our job was to turn it into something that worked: a digital presence that made Afripact look like exactly what they are: a legitimate, capable, professional construction business worth doing serious work with.</p>
        </section>

        <div className="divider"></div>

        <section style={{padding:'80px 60px'}} aria-labelledby="afripact-client">
          <div className="section-label">What the client told us</div>
          <h2 className="section-title" id="afripact-client">The clearest brief<br /><em>we&apos;ve ever received.</em></h2>
          <p className="section-body">Midway through the engagement we asked the client directly: where are you seeing the biggest benefit from having a custom-built website? His answer was more precise than most clients give.</p>
          <blockquote style={{marginTop:'48px', paddingLeft:'24px', borderLeft:'2px solid var(--gold)', maxWidth:'560px'}}>
            <p style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(18px,2vw,24px)', fontWeight:300, fontStyle:'italic', lineHeight:1.5, color:'var(--text)'}}>The website shows people I have never done business with that Afripact is not a scam but an actual business.</p>
            <cite style={{display:'block', marginTop:'14px', fontSize:'11px', letterSpacing:'0.1em', textTransform:'uppercase', color:'var(--text-muted)', fontStyle:'normal'}}>— Client, Afripact Civils</cite>
          </blockquote>
          <p className="section-body" style={{marginTop:'40px'}}>That&apos;s not a throwaway comment. That&apos;s the exact job a website is supposed to do in a trust-heavy industry, and confirmation that it was doing it. When someone with no prior relationship with Afripact lands on the site, the question of legitimacy is answered before the conversation even begins. That&apos;s trust infrastructure working exactly as designed.</p>
          <p className="section-body" style={{marginTop:'20px'}}>He also told us what comes next: the business needs a solid marketing strategy to penetrate the private construction sector and start ranking for construction-related searches. That brief became the foundation for phase two.</p>
        </section>

        <div className="divider"></div>

        <section style={{padding:'80px 60px'}} aria-labelledby="afripact-build">
          <div className="section-label">The build - phase one</div>
          <h2 className="section-title" id="afripact-build">Every element in service<br /><em>of one objective.</em></h2>
          <p className="section-body">Phase one had a focused objective: give Afripact a face in the digital space that matched the quality of the work they do. Every decision was made in service of that goal.</p>
          <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'1px', background:'var(--border)', marginTop:'56px'}}>
            <div style={{background:'var(--surface)', padding:'40px'}}>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', marginBottom:'14px'}}>Professional credibility</div>
              <div style={{fontSize:'13px', color:'var(--text-muted)', lineHeight:1.8}}>Design, copy, and structure positioned to reflect a serious construction business, not a startup or a side operation.</div>
            </div>
            <div style={{background:'var(--surface)', padding:'40px'}}>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', marginBottom:'14px'}}>Social proof architecture</div>
              <div style={{fontSize:'13px', color:'var(--text-muted)', lineHeight:1.8}}>Trust signals, service clarity, and proof elements built in, so the site answers objections before the client raises them.</div>
            </div>
            <div style={{background:'var(--surface)', padding:'40px'}}>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', marginBottom:'14px'}}>Clear service communication</div>
              <div style={{fontSize:'13px', color:'var(--text-muted)', lineHeight:1.8}}>What Afripact does, who they do it for, and why they&apos;re the right choice, communicated without ambiguity.</div>
            </div>
          </div>
          <p className="section-body" style={{marginTop:'40px'}}>The original site was built on Bolt as a starting point. We took that foundation and evolved it, sharpening the messaging, strengthening the structure, and building it around the specific trust journey a construction client goes through before picking up the phone.</p>
        </section>

        <div className="divider"></div>

        <section style={{padding:'80px 60px'}} aria-labelledby="afripact-next">
          <div className="section-label">What&apos;s next - phase two</div>
          <h2 className="section-title" id="afripact-next">Credibility solved.<br /><em>Now we build the pipeline.</em></h2>
          <p className="section-body">Phase one solved the credibility problem. Phase two solves the revenue problem. The site now confirms that Afripact is legitimate: the next job is making sure the right people find it.</p>
          <div style={{display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:'1px', background:'var(--border)', marginTop:'56px'}}>
            <div style={{background:'var(--surface)', padding:'40px'}}>
              <div style={{fontSize:'9px', letterSpacing:'0.25em', textTransform:'uppercase', color:'var(--gold)', marginBottom:'16px'}}>In progress</div>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', marginBottom:'14px'}}>Private sector penetration</div>
              <div style={{fontSize:'13px', color:'var(--text-muted)', lineHeight:1.8}}>A targeted strategy to position Afripact in front of private construction clients, the segment with the highest project values and the most consistent pipeline.</div>
            </div>
            <div style={{background:'var(--surface)', padding:'40px'}}>
              <div style={{fontSize:'9px', letterSpacing:'0.25em', textTransform:'uppercase', color:'var(--gold)', marginBottom:'16px'}}>In progress</div>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', marginBottom:'14px'}}>Search visibility</div>
              <div style={{fontSize:'13px', color:'var(--text-muted)', lineHeight:1.8}}>Building the SEO foundation so Afripact appears when people search for construction services in KZN, turning the website from a verification tool into a lead source.</div>
            </div>
          </div>
          <p style={{marginTop:'32px', fontSize:'12px', fontStyle:'italic', color:'var(--text-dim)', lineHeight:1.8}}>Past performance is not indicative of future results. All figures shown are for illustrative purposes and may vary based on market conditions and individual circumstances. This does not constitute financial or investment advice.</p>
          <p style={{marginTop:'24px', fontSize:'13px', color:'var(--text-muted)', lineHeight:1.8}}><a href="https://afripact.net" target="_blank" rel="noopener noreferrer" style={{color:'var(--text-muted)'}}>Visit Afripact Civils →</a></p>
        </section>

        <div className="divider"></div>

        <section style={{padding:'80px 60px'}}>
          <div style={{background:'var(--surface)', border:'1px solid var(--border)', padding:'48px', maxWidth:'100%'}}>
            <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(22px,2.5vw,30px)', fontWeight:300, lineHeight:1.3, marginBottom:'20px', maxWidth:'580px'}}>Credibility is the entry point. Revenue is the destination. We&apos;re building both.</div>
            <p style={{fontSize:'13px', color:'var(--text-muted)', lineHeight:1.9, maxWidth:'580px', marginBottom:'36px'}}>Afripact Civils is a business with real capability and a growing digital presence to match. Phase one answered the trust question. Phase two puts them in front of the clients who matter most.</p>
            <a className="btn-primary" href="https://wa.me/27712205313?text=Hi%20Luyanda%2C%20I%27d%20like%20to%20discuss%20a%20project%20with%20ADA." target="_blank" rel="noopener noreferrer" style={{position:'relative', zIndex:9999, display:'inline-block'}}>Start a project</a>
          </div>
        </section>

        <div className="divider"></div>

        <Footer />
      </div>
    </>
  );
}
