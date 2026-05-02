import Link from 'next/link';
import Nav from '../components/Nav';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Avalon Digital Agency | ADA | Websites That Close Deals',
  description: 'Your website should be closing deals. Is it? ADA rebuilds business websites into revenue systems: websites that attract the right people, build trust fast, and convert visitors into clients.',
};

export default function ADA() {
  return (
    <>
      <Nav />
      <div id="page-ada" className="page" role="main">
        <div className="inner-hero">
          <svg className="inner-hero-geo" style={{position:'absolute', right:'-120px', top:'50%', transform:'translateY(-50%)', opacity:0.11, pointerEvents:'none', zIndex:1}} width="580" height="680" viewBox="0 0 580 680" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" stroke="#C9A84C" strokeWidth="0.8">
              <polygon points="290,20 560,640 20,640"/>
              <polygon points="290,80 510,600 70,600"/>
              <polygon points="290,140 460,560 120,560"/>
            </g>
          </svg>
          <div className="inner-hero-bg" aria-hidden="true"></div>
          <Link className="back-btn" href="/" style={{cursor:'pointer', position:'relative', zIndex:10}}>Back to Avalon Capital Group</Link>
          <img src="/assets/acg-logo.jpg" alt="Avalon Digital Agency" style={{width:'120px', height:'auto', marginBottom:'24px', display:'block', objectFit:'contain', mixBlendMode:'screen', position:'relative', zIndex:2, maxWidth:'100%'}} />
          <p style={{fontSize:'9px', letterSpacing:'0.25em', textTransform:'uppercase', color:'var(--gold)', marginBottom:'28px'}}>Avalon Digital Agency · Durban, KZN</p>
          <h1 style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(36px,5vw,64px)', fontWeight:300, lineHeight:1.15, marginBottom:'24px', maxWidth:'640px'}}>Your website should be closing deals. Is it?</h1>
          <p style={{maxWidth:'520px', fontSize:'14px', color:'var(--text-muted)', lineHeight:1.9, marginBottom:'36px'}}>Most business websites exist. They look fine, they have a contact page, and they do nothing. We rebuild them into revenue systems: websites that attract the right people, build trust fast, and convert visitors into clients.</p>
          <a href="https://wa.me/27712205313?text=Hi%20Luyanda%2C%20I%27d%20like%20to%20discuss%20a%20project%20with%20ADA." className="btn-primary" style={{display:'inline-block', position:'relative', zIndex:9999, cursor:'pointer', marginBottom:'28px'}}>Let&apos;s talk</a>
          <p style={{fontSize:'11px', color:'var(--text-muted)', lineHeight:1.8, opacity:0.7}}><Link href="/ada/afripact-civils" style={{color:'var(--gold)', textDecoration:'none'}}>Afripact Civils</Link> - civil construction, KZN · from invisible to credible &nbsp;·&nbsp; <Link href="/ada/canopy-courier" style={{color:'var(--gold)', textDecoration:'none'}}>Canopy Courier</Link> - fleet revenue system &nbsp;·&nbsp; Durban · KwaZulu-Natal</p>
        </div>

        <section aria-labelledby="the-shift-heading">
          <div className="section-label">The shift</div>
          <h2 className="section-title" id="the-shift-heading">Websites changed.<br /><em>Most businesses didn&apos;t get the memo.</em></h2>
          <p className="section-body">For twenty years, a website was a checkbox. You built it, you put your number on it, and that was enough. It lived online the way a business card lives in a drawer, technically there, practically invisible.</p>
          <p className="section-body" style={{marginTop:'20px'}}>That era is over. AI has changed how people search, how they evaluate, and how they decide. When someone looks for a service today, they&apos;re not browsing, they&apos;re already deciding. By the time they land on your website, they&apos;re halfway to yes or halfway out the door. Your site has one job: convert that moment into a conversation.</p>
          <p className="section-body" style={{marginTop:'20px'}}>Most business websites aren&apos;t built to do that. They&apos;re built to exist. No clear offer, no conversion path, no reason to act now. Visitors land, look around, and leave, not because the service is bad, but because the website doesn&apos;t translate value into action. That&apos;s silent revenue loss, every single day.</p>
          <blockquote style={{marginTop:'48px', paddingLeft:'24px', borderLeft:'2px solid var(--gold)', maxWidth:'560px'}}>
            <p style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(18px,2vw,24px)', fontWeight:300, fontStyle:'italic', lineHeight:1.5, color:'var(--text)'}}>This is where most businesses are falling behind. The ones pulling ahead aren&apos;t louder, they&apos;re clearer.</p>
          </blockquote>
        </section>

        <div className="divider"></div>

        <section aria-labelledby="what-we-do-heading">
          <div className="section-label">What we do</div>
          <h2 className="section-title" id="what-we-do-heading">We don&apos;t build websites.<br /><em>We build the system behind them.</em></h2>
          <p className="section-body">There&apos;s no shortage of people who can make a website look good. That&apos;s not the problem. The problem is that most websites are designed without ever asking the only question that matters: what is this page supposed to make someone do?</p>
          <p className="section-body" style={{marginTop:'20px'}}>At ADA, we approach every project as conversion infrastructure. That means understanding your offer, your audience, and the specific moment a visitor decides to reach out, or walk away. We then build around that moment. Clear messaging. A logical flow. Trust signals placed where decisions actually happen. Every element earns its place or it doesn&apos;t make the cut.</p>
          <p className="section-body" style={{marginTop:'20px'}}>The result isn&apos;t just a better-looking website. It&apos;s a website that works while you&apos;re not, qualifying visitors, building credibility, and moving people toward a conversation with you.</p>

          <div style={{display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:'1px', background:'var(--border)', marginTop:'56px'}}>
            <div style={{background:'var(--surface)', padding:'36px'}}>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', marginBottom:'12px'}}>Offer clarity</div>
              <div style={{fontSize:'13px', color:'var(--text-muted)', lineHeight:1.8}}>Visitors know exactly what you do, who it&apos;s for, and why you&apos;re the right choice, within seconds.</div>
            </div>
            <div style={{background:'var(--surface)', padding:'36px'}}>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', marginBottom:'12px'}}>Conversion flow</div>
              <div style={{fontSize:'13px', color:'var(--text-muted)', lineHeight:1.8}}>Every section guides a decision. No dead ends, no confusion, no reason to leave without acting.</div>
            </div>
            <div style={{background:'var(--surface)', padding:'36px'}}>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', marginBottom:'12px'}}>Trust architecture</div>
              <div style={{fontSize:'13px', color:'var(--text-muted)', lineHeight:1.8}}>Proof, credibility, and social signals built into the structure, not bolted on as an afterthought.</div>
            </div>
            <div style={{background:'var(--surface)', padding:'36px'}}>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', marginBottom:'12px'}}>Revenue focus</div>
              <div style={{fontSize:'13px', color:'var(--text-muted)', lineHeight:1.8}}>We measure success by what your website generates, not by how it looks on a portfolio screenshot.</div>
            </div>
          </div>

          <blockquote style={{marginTop:'48px', paddingLeft:'24px', borderLeft:'2px solid var(--gold)', maxWidth:'560px'}}>
            <p style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(18px,2vw,24px)', fontWeight:300, fontStyle:'italic', lineHeight:1.5, color:'var(--text)'}}>If your website isn&apos;t actively working for your business, it&apos;s quietly working against it.</p>
          </blockquote>
        </section>

        <div className="divider"></div>

        <section id="section-our-work" aria-labelledby="our-work-heading">
          <div className="section-label">Our work</div>
          <h2 className="section-title" id="our-work-heading">Proof, not promises.</h2>
          <p className="section-body">Every project starts with a problem and ends with a system. Here&apos;s what that looks like in practice.</p>

          <div style={{display:'flex', flexDirection:'column', gap:'1px', background:'var(--border)', marginTop:'56px'}}>

            <div className="ada-case-card" style={{background:'var(--surface)', padding:'48px'}}>
              <div style={{display:'flex', gap:'12px', marginBottom:'32px', flexWrap:'wrap'}}>
                <span style={{fontSize:'9px', letterSpacing:'0.2em', textTransform:'uppercase', color:'var(--gold)', border:'1px solid var(--border)', padding:'5px 12px'}}>Civil construction</span>
                <span style={{fontSize:'9px', letterSpacing:'0.2em', textTransform:'uppercase', color:'var(--text-muted)', border:'1px solid var(--border)', padding:'5px 12px'}}>KwaZulu-Natal</span>
              </div>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(28px,3.5vw,44px)', fontWeight:300, lineHeight:1.1, marginBottom:'10px'}}>Afripact Civils</div>
              <div style={{fontSize:'9px', letterSpacing:'0.25em', textTransform:'uppercase', color:'var(--text-muted)', marginBottom:'28px'}}>From invisible to credible</div>
              <p style={{fontSize:'14px', color:'var(--text-muted)', lineHeight:1.9, maxWidth:'640px', marginBottom:'20px'}}>Afripact Civils had the capability and the track record. What they didn&apos;t have was a digital presence that matched. Without it, every new prospect had to take their word for it, and in construction, that&apos;s a hard sell. We built them a website focused on one thing: making Afripact look like exactly what they are. A legitimate, professional civil construction business worth doing business with.</p>
              <p style={{fontSize:'14px', color:'var(--text-muted)', lineHeight:1.9, maxWidth:'640px', marginBottom:'36px'}}>The client put it best: the website shows people who have never done business with them that Afripact is not a scam: it&apos;s an actual business. That&apos;s trust infrastructure working exactly as it should. Phase two is already in motion: turning that credibility into a lead generation engine targeting the private construction sector.</p>
              <div style={{display:'flex', gap:'1px', background:'var(--border)', marginBottom:'36px', flexWrap:'wrap'}}>
                <div style={{background:'var(--black)', padding:'16px 24px', flex:1, minWidth:'160px'}}>
                  <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'16px', marginBottom:'4px'}}>Civil construction</div>
                  <div style={{fontSize:'9px', letterSpacing:'0.2em', textTransform:'uppercase', color:'var(--text-muted)'}}>Industry</div>
                </div>
                <div style={{background:'var(--black)', padding:'16px 24px', flex:1, minWidth:'160px'}}>
                  <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'16px', marginBottom:'4px'}}>Trust + visibility</div>
                  <div style={{fontSize:'9px', letterSpacing:'0.2em', textTransform:'uppercase', color:'var(--text-muted)'}}>Primary objective</div>
                </div>
                <div style={{background:'var(--black)', padding:'16px 24px', flex:1, minWidth:'160px'}}>
                  <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'16px', marginBottom:'4px'}}>Phase 2 active</div>
                  <div style={{fontSize:'9px', letterSpacing:'0.2em', textTransform:'uppercase', color:'var(--gold)'}}>Revenue engine next</div>
                </div>
              </div>
              <Link href="/ada/afripact-civils" style={{fontSize:'12px', letterSpacing:'0.1em', color:'var(--gold)', textDecoration:'none'}}>Full case study →</Link>
            </div>

            <div className="ada-case-card" style={{background:'var(--surface)', padding:'48px'}}>
              <div style={{display:'flex', gap:'12px', marginBottom:'32px', flexWrap:'wrap'}}>
                <span style={{fontSize:'9px', letterSpacing:'0.2em', textTransform:'uppercase', color:'var(--gold)', border:'1px solid var(--border)', padding:'5px 12px'}}>Automotive services</span>
                <span style={{fontSize:'9px', letterSpacing:'0.2em', textTransform:'uppercase', color:'var(--text-muted)', border:'1px solid var(--border)', padding:'5px 12px'}}>KwaZulu-Natal</span>
              </div>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(28px,3.5vw,44px)', fontWeight:300, lineHeight:1.1, marginBottom:'10px'}}>Canopy Courier</div>
              <div style={{fontSize:'9px', letterSpacing:'0.25em', textTransform:'uppercase', color:'var(--text-muted)', marginBottom:'28px'}}>From a retail shop to a fleet revenue system</div>
              <p style={{fontSize:'14px', color:'var(--text-muted)', lineHeight:1.9, maxWidth:'640px', marginBottom:'20px'}}>Canopy Courier had a clean website and a strong service. But the site was built for walk-in retail customers, and the real money was sitting completely untouched in fleet. Construction firms, logistics companies, security fleets: high-volume, recurring, predictable revenue. None of it was being captured because nothing on the site spoke to it.</p>
              <p style={{fontSize:'14px', color:'var(--text-muted)', lineHeight:1.9, maxWidth:'640px', marginBottom:'36px'}}>We rebuilt the entire digital presence around a dual strategy: retail and fleet running in parallel. Dedicated pages, separate conversion paths, a structured fleet offer, and an SEO architecture built to rank for high-intent searches across Durban and KZN. Eight deliverables. One coherent system.</p>
              <div style={{display:'flex', gap:'1px', background:'var(--border)', marginBottom:'36px', flexWrap:'wrap'}}>
                <div style={{background:'var(--black)', padding:'16px 24px', flex:1, minWidth:'160px'}}>
                  <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'16px', marginBottom:'4px'}}>8 deliverables</div>
                  <div style={{fontSize:'9px', letterSpacing:'0.2em', textTransform:'uppercase', color:'var(--text-muted)'}}>Scope of build</div>
                </div>
                <div style={{background:'var(--black)', padding:'16px 24px', flex:1, minWidth:'160px'}}>
                  <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'16px', marginBottom:'4px'}}>Retail + fleet</div>
                  <div style={{fontSize:'9px', letterSpacing:'0.2em', textTransform:'uppercase', color:'var(--text-muted)'}}>Dual revenue path</div>
                </div>
                <div style={{background:'var(--black)', padding:'16px 24px', flex:1, minWidth:'160px'}}>
                  <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'16px', marginBottom:'4px'}}>R1M–R2M</div>
                  <div style={{fontSize:'9px', letterSpacing:'0.2em', textTransform:'uppercase', color:'var(--gold)'}}>Projected annual upside</div>
                </div>
              </div>
              <Link href="/ada/canopy-courier" style={{fontSize:'12px', letterSpacing:'0.1em', color:'var(--gold)', textDecoration:'none'}}>Full case study →</Link>
            </div>

          </div>
        </section>

        <div className="divider"></div>

        <section>
          <div className="section-label">Client feedback</div>
          <blockquote style={{marginTop:'40px', paddingLeft:'28px', borderLeft:'2px solid var(--gold)', maxWidth:'640px'}}>
            <p style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(22px,2.8vw,34px)', fontWeight:300, fontStyle:'italic', lineHeight:1.45, color:'var(--text)'}}>&ldquo;The website shows people I have never done business with that Afripact is not a scam but an actual business.&rdquo;</p>
            <cite style={{display:'block', marginTop:'20px', fontSize:'12px', letterSpacing:'0.1em', textTransform:'uppercase', color:'var(--text-muted)', fontStyle:'normal'}}>- Client, Afripact Civils · Civil construction, KZN</cite>
            <p style={{marginTop:'16px', fontSize:'12px', color:'var(--text-dim)', lineHeight:1.8, maxWidth:'480px', fontStyle:'normal'}}>Afripact Civils engaged ADA to build a professional digital presence that established credibility with new prospects. Phase two, revenue generation, is currently underway.</p>
          </blockquote>
        </section>

        <div className="divider"></div>

        <section aria-labelledby="how-we-work-heading">
          <div className="section-label">How we work</div>
          <h2 className="section-title" id="how-we-work-heading">A system, not a service.</h2>
          <p className="section-body">We don&apos;t take a brief, disappear for six weeks, and hand over a website. Every engagement follows a clear process: one built around your business, your offer, and the specific outcome you&apos;re trying to achieve. You know what&apos;s happening at every stage.</p>

          <div style={{display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:'1px', background:'var(--border)', marginTop:'56px'}}>
            <div style={{background:'var(--surface)', padding:'40px'}}>
              <div style={{fontSize:'9px', letterSpacing:'0.25em', textTransform:'uppercase', color:'var(--gold)', marginBottom:'16px'}}>Step 01</div>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', marginBottom:'14px'}}>Audit</div>
              <div style={{fontSize:'13px', color:'var(--text-muted)', lineHeight:1.8}}>We start by understanding where you are. Your current digital presence, your offer, your audience, and where the gap is between what your website communicates and what your business actually delivers. Most businesses are surprised by what this surfaces.</div>
            </div>
            <div style={{background:'var(--surface)', padding:'40px'}}>
              <div style={{fontSize:'9px', letterSpacing:'0.25em', textTransform:'uppercase', color:'var(--gold)', marginBottom:'16px'}}>Step 02</div>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', marginBottom:'14px'}}>Strategy</div>
              <div style={{fontSize:'13px', color:'var(--text-muted)', lineHeight:1.8}}>Before anything gets built, we map the system. What pages do you need, what does each one need to do, who is it speaking to, and what action does it need to produce. Every element is deliberate. This is the stage most agencies skip, and where most websites fail.</div>
            </div>
            <div style={{background:'var(--surface)', padding:'40px'}}>
              <div style={{fontSize:'9px', letterSpacing:'0.25em', textTransform:'uppercase', color:'var(--gold)', marginBottom:'16px'}}>Step 03</div>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', marginBottom:'14px'}}>Build</div>
              <div style={{fontSize:'13px', color:'var(--text-muted)', lineHeight:1.8}}>We build with conversion as the benchmark, not aesthetics. Copy, structure, and design are developed together, not handed off between different people with different briefs. The result is a website where everything works toward the same outcome.</div>
            </div>
            <div style={{background:'var(--surface)', padding:'40px'}}>
              <div style={{fontSize:'9px', letterSpacing:'0.25em', textTransform:'uppercase', color:'var(--gold)', marginBottom:'16px'}}>Step 04</div>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', marginBottom:'14px'}}>Grow</div>
              <div style={{fontSize:'13px', color:'var(--text-muted)', lineHeight:1.8}}>A website that launches and sits still loses ground. Once the foundation is live, we focus on the next layer: SEO, content, outreach, or targeted campaigns, depending on what your business needs most to generate momentum. The build is the beginning, not the end.</div>
            </div>
          </div>

          <div style={{display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:'1px', background:'var(--border)', marginTop:'1px'}}>
            <div style={{background:'var(--black)', padding:'40px'}}>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', marginBottom:'12px'}}>No retainer traps</div>
              <div style={{fontSize:'13px', color:'var(--text-muted)', lineHeight:1.8}}>Every engagement is scoped clearly upfront. You know what you&apos;re getting, what it costs, and what success looks like before we start.</div>
            </div>
            <div style={{background:'var(--black)', padding:'40px'}}>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', marginBottom:'12px'}}>Built for your stage</div>
              <div style={{fontSize:'13px', color:'var(--text-muted)', lineHeight:1.8}}>Whether you need a full rebuild or a focused intervention, the system adapts to where your business actually is, not a fixed package that fits no one perfectly.</div>
            </div>
          </div>

          <blockquote style={{marginTop:'48px', paddingLeft:'24px', borderLeft:'2px solid var(--gold)', maxWidth:'560px'}}>
            <p style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(18px,2vw,24px)', fontWeight:300, fontStyle:'italic', lineHeight:1.5, color:'var(--text)'}}>We work with businesses that are serious about growth. If that&apos;s you, the process works fast.</p>
          </blockquote>
        </section>

        <div className="divider"></div>

        <section aria-labelledby="investment-heading">
          <div className="section-label">Investment</div>
          <h2 className="section-title" id="investment-heading">We don&apos;t sell cheap.<br /><em>We sell value.</em></h2>
          <p className="section-body">Every engagement is scoped to your business: there&apos;s no fixed menu. What we can tell you is the kind of work we do, the outcomes it&apos;s built around, and what that level of thinking is worth to a business serious about growth.</p>

          <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'1px', background:'var(--border)', marginTop:'56px'}}>
            <div style={{background:'var(--surface)', padding:'40px', display:'flex', flexDirection:'column'}}>
              <div style={{fontSize:'9px', letterSpacing:'0.25em', textTransform:'uppercase', color:'var(--text-muted)', marginBottom:'20px'}}>Foundation</div>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'26px', fontWeight:300, marginBottom:'16px'}}>Credibility build</div>
              <p style={{fontSize:'13px', color:'var(--text-muted)', lineHeight:1.8, flex:1}}>Your digital presence should reflect the quality of what you actually deliver. Foundation builds the infrastructure that makes that possible: a fast, conversion-ready website, search visibility where it counts, and a Google presence that works for you around the clock.</p>
              <div style={{marginTop:'28px', paddingTop:'20px', borderTop:'1px solid var(--border)', fontSize:'11px', color:'var(--text-muted)', lineHeight:1.6}}>Right for: established businesses with no serious digital foundation.<br />R18,500 once-off</div>
            </div>
            <div style={{background:'var(--surface)', padding:'40px', display:'flex', flexDirection:'column', border:'1px solid var(--border-hover)', margin:'-1px'}}>
              <div style={{fontSize:'9px', letterSpacing:'0.25em', textTransform:'uppercase', color:'var(--gold)', marginBottom:'20px'}}>Growth</div>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'26px', fontWeight:300, marginBottom:'16px'}}>Revenue system build</div>
              <p style={{fontSize:'13px', color:'var(--text-muted)', lineHeight:1.8, flex:1}}>A full digital revenue system built around your specific business. Website, SEO and AEO architecture, competitor analysis, social media infrastructure handed to you ready to run, schema markup, and analytics configured so you can see exactly what is working.</p>
              <div style={{marginTop:'28px', paddingTop:'20px', borderTop:'1px solid var(--border)', fontSize:'11px', color:'var(--text-muted)', lineHeight:1.6}}>Right for: businesses ready to make their website and digital presence generate consistent revenue.<br />R34,000 once-off · R12,500/month on a 3-month minimum retainer</div>
            </div>
            <div style={{background:'var(--surface)', padding:'40px', display:'flex', flexDirection:'column'}}>
              <div style={{fontSize:'9px', letterSpacing:'0.25em', textTransform:'uppercase', color:'var(--text-muted)', marginBottom:'20px'}}>Authority</div>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'26px', fontWeight:300, marginBottom:'16px'}}>By enquiry only</div>
              <p style={{fontSize:'13px', color:'var(--text-muted)', lineHeight:1.8, flex:1}}>For businesses that want to dominate their category. Authority is a custom strategic engagement, scoped specifically around your market position, your competitors, and where you want to be. No two Authority builds are the same. If you are serious about owning your space digitally, this is the conversation to have.</p>
              <div style={{marginTop:'28px', paddingTop:'20px', borderTop:'1px solid var(--border)', fontSize:'11px', color:'var(--text-muted)', lineHeight:1.6}}>Right for: businesses ready to dominate their category.<br />Enquire directly</div>
            </div>
          </div>

          <div style={{background:'var(--surface2)', border:'1px solid var(--border)', padding:'48px', marginTop:'1px', maxWidth:'100%'}}>
            <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', fontWeight:300, marginBottom:'16px'}}>A straightforward note on pricing</div>
            <p style={{fontSize:'13px', color:'var(--text-muted)', lineHeight:1.9, maxWidth:'640px'}}>Foundation and Growth are fixed-scope, fixed-price engagements. You know exactly what you are getting and what it costs before anything begins. Authority is scoped per client and the investment reflects the ambition. If you are looking for the cheapest option, we are probably not the right fit. If you are looking for the most valuable one, let&apos;s talk.</p>
          </div>

          <blockquote style={{marginTop:'48px', paddingLeft:'24px', borderLeft:'2px solid var(--gold)', maxWidth:'560px'}}>
            <p style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(18px,2vw,24px)', fontWeight:300, fontStyle:'italic', lineHeight:1.5, color:'var(--text)'}}>One well-built revenue system pays for itself. Usually faster than people expect.</p>
          </blockquote>
        </section>

        <div className="divider"></div>

        <section id="section-insights" aria-labelledby="insights-heading">
          <div className="section-label">Insights</div>
          <h2 className="section-title" id="insights-heading">We share how we think.</h2>
          <p className="section-body">Not to fill a content calendar. To show you, before we&apos;ve spoken, that we understand what&apos;s happening in the market and what it means for your business.</p>

          <div style={{marginTop:'56px', borderTop:'1px solid var(--border)'}}>

            <div style={{padding:'28px 0', borderBottom:'1px solid var(--border)', display:'flex', alignItems:'flex-start', gap:'24px'}}>
              <div style={{flex:1}}>
                <div style={{display:'flex', alignItems:'center', gap:'10px', marginBottom:'10px', flexWrap:'wrap'}}>
                  <span style={{fontSize:'9px', letterSpacing:'0.2em', textTransform:'uppercase', color:'var(--gold)'}}>Market insight</span>
                  <span style={{fontSize:'9px', letterSpacing:'0.15em', textTransform:'uppercase', color:'var(--black)', background:'var(--gold)', padding:'2px 8px'}}>Anchor piece</span>
                </div>
                <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'20px', fontWeight:300, lineHeight:1.3, marginBottom:'8px'}}>The AI awareness cycle - why your website is about to become your most valuable business asset</div>
                <div style={{fontSize:'12px', color:'var(--text-muted)', lineHeight:1.8, maxWidth:'620px'}}>AI hasn&apos;t changed how websites are built. It&apos;s changed what websites are responsible for. Here&apos;s what that shift means for any business that wants to stay competitive over the next three years.</div>
              </div>
              <div style={{fontSize:'18px', color:'var(--gold)', flexShrink:0, paddingTop:'4px'}}>→</div>
            </div>

            <div style={{padding:'28px 0', borderBottom:'1px solid var(--border)', display:'flex', alignItems:'flex-start', gap:'24px'}}>
              <div style={{flex:1}}>
                <div style={{marginBottom:'10px'}}>
                  <span style={{fontSize:'9px', letterSpacing:'0.2em', textTransform:'uppercase', color:'var(--text-muted)'}}>The problem</span>
                </div>
                <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'20px', fontWeight:300, lineHeight:1.3, marginBottom:'8px'}}>Why most business websites don&apos;t make money</div>
                <div style={{fontSize:'12px', color:'var(--text-muted)', lineHeight:1.8, maxWidth:'620px'}}>It&apos;s not the design. It&apos;s not the traffic. It&apos;s the fact that most websites were never built to convert. Here&apos;s what a website that doesn&apos;t perform actually costs you, and why the problem is more common than most business owners realise.</div>
              </div>
              <div style={{fontSize:'18px', color:'var(--gold)', flexShrink:0, paddingTop:'4px'}}>→</div>
            </div>

            <div style={{padding:'28px 0', borderBottom:'1px solid var(--border)', display:'flex', alignItems:'flex-start', gap:'24px'}}>
              <div style={{flex:1}}>
                <div style={{marginBottom:'10px'}}>
                  <span style={{fontSize:'9px', letterSpacing:'0.2em', textTransform:'uppercase', color:'var(--text-muted)'}}>The solution</span>
                </div>
                <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'20px', fontWeight:300, lineHeight:1.3, marginBottom:'8px'}}>What a revenue-driven website actually looks like</div>
                <div style={{fontSize:'12px', color:'var(--text-muted)', lineHeight:1.8, maxWidth:'620px'}}>Most business owners have never seen one up close. Here&apos;s a breakdown of the specific elements that separate a website that performs from one that just exists: offer clarity, conversion flow, and trust architecture.</div>
              </div>
              <div style={{fontSize:'18px', color:'var(--gold)', flexShrink:0, paddingTop:'4px'}}>→</div>
            </div>

            <div style={{padding:'28px 0', borderBottom:'1px solid var(--border)', display:'flex', alignItems:'flex-start', gap:'24px'}}>
              <div style={{flex:1}}>
                <div style={{marginBottom:'10px'}}>
                  <span style={{fontSize:'9px', letterSpacing:'0.2em', textTransform:'uppercase', color:'var(--text-muted)'}}>Authority piece</span>
                </div>
                <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'20px', fontWeight:300, lineHeight:1.3, marginBottom:'8px'}}>Why AI won&apos;t replace websites - it will make them more valuable</div>
                <div style={{fontSize:'12px', color:'var(--text-muted)', lineHeight:1.8, maxWidth:'620px'}}>Everyone&apos;s asking whether AI makes websites obsolete. The answer is the opposite. Here&apos;s why the businesses that invest in strong digital infrastructure now will be the ones AI points people toward, and what that means for yours.</div>
              </div>
              <div style={{fontSize:'18px', color:'var(--gold)', flexShrink:0, paddingTop:'4px'}}>→</div>
            </div>

            <div style={{padding:'28px 0', borderBottom:'1px solid var(--border)', display:'flex', alignItems:'flex-start', gap:'24px'}}>
              <div style={{flex:1}}>
                <div style={{marginBottom:'10px'}}>
                  <span style={{fontSize:'9px', letterSpacing:'0.2em', textTransform:'uppercase', color:'var(--text-muted)'}}>Case study deep-dive</span>
                </div>
                <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'20px', fontWeight:300, lineHeight:1.3, marginBottom:'8px'}}>The Canopy Courier rebuild - how we turned a retail website into a fleet revenue system</div>
                <div style={{fontSize:'12px', color:'var(--text-muted)', lineHeight:1.8, maxWidth:'620px'}}>A ground-level breakdown of a real project. What we found, what we built, and the specific decisions that turned a functional website into a business development tool with R1M+ annual revenue potential.</div>
              </div>
              <div style={{fontSize:'18px', color:'var(--gold)', flexShrink:0, paddingTop:'4px'}}>→</div>
            </div>

          </div>

          <p style={{marginTop:'32px', fontSize:'12px', fontStyle:'italic', color:'var(--text-muted)', opacity:0.7}}>Every piece here is worth your time. That&apos;s the only standard we publish to.</p>
        </section>

        <div className="divider"></div>

        <section aria-labelledby="lets-work-heading">
          <div className="section-label">Let&apos;s work</div>
          <h2 className="section-title" id="lets-work-heading">Your website should be the hardest working part<br />of <em>your business.</em></h2>
          <p className="section-body">Right now, somewhere, a potential client is looking for exactly what you offer. The question is whether your digital presence is ready to meet them, or whether it&apos;s quietly sending them somewhere else.</p>
          <p className="section-body" style={{marginTop:'20px'}}>We build the systems that make sure it&apos;s the former. One conversation is all it takes to know if we&apos;re the right fit. No pressure, no hard sell, just an honest look at where your business is and what it would take to get it where you want it.</p>

          <div className="divider" style={{margin:'48px 0'}}></div>

          <div style={{display:'flex', gap:'16px', flexWrap:'wrap'}}>
            <a className="btn-primary" href="https://wa.me/27712205313?text=Hi%20Luyanda%2C%20I%27d%20like%20to%20discuss%20a%20project%20with%20ADA." target="_blank" rel="noopener noreferrer" style={{position:'relative', zIndex:9999}}>Start a project</a>
            <a className="btn-ghost" href="#our-work-heading">View our work</a>
          </div>

          <div className="ada-contact-grid">
            <div style={{background:'var(--surface)', padding:'32px'}}>
              <div style={{fontSize:'9px', letterSpacing:'0.25em', textTransform:'uppercase', color:'var(--text-muted)', marginBottom:'12px'}}>Email</div>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'18px', fontWeight:300, marginBottom:'8px', overflowWrap:'break-word', wordBreak:'break-all'}}><a href="mailto:projects@avaloncapitalgroup.co.za" style={{color:'inherit', textDecoration:'none'}}>projects@avaloncapitalgroup.co.za</a></div>
              <div style={{fontSize:'11px', color:'var(--text-muted)'}}>We respond within one business day</div>
            </div>
            <div style={{background:'var(--surface)', padding:'32px'}}>
              <div style={{fontSize:'9px', letterSpacing:'0.25em', textTransform:'uppercase', color:'var(--text-muted)', marginBottom:'12px'}}>Based in</div>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'18px', fontWeight:300, marginBottom:'8px'}}>Durban, KwaZulu-Natal</div>
              <div style={{fontSize:'11px', color:'var(--text-muted)'}}>Working with businesses across South Africa</div>
            </div>
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
