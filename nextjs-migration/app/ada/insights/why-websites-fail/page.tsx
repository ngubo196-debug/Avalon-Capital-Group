import Link from 'next/link';
import Nav from '../../../components/Nav';
import Footer from '../../../components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Why Most Business Websites Don't Make Money | Avalon Digital Agency",
  description: 'The real reason most business websites fail to generate revenue - and what to do about it.',
};

export default function WhyWebsitesFail() {
  return (
    <>
      <Nav />
      <div id="page-blog-why-websites-fail" className="page" role="main">
        <div className="inner-hero">
          <svg className="inner-hero-geo" style={{position:'absolute', right:'-120px', top:'50%', transform:'translateY(-50%)', opacity:0.11, pointerEvents:'none', zIndex:1}} width="580" height="680" viewBox="0 0 580 680" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" stroke="#C9A84C" strokeWidth="0.8">
              <polygon points="290,20 560,640 20,640"/>
              <polygon points="290,80 510,600 70,600"/>
              <polygon points="290,140 460,560 120,560"/>
            </g>
          </svg>
          <div className="inner-hero-bg" aria-hidden="true"></div>
          <Link className="back-btn" href="/ada" style={{position:'relative', zIndex:9999}}>← Back to ADA</Link>
          <div className="section-label">The problem</div>
          <h1 style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(32px,4.5vw,58px)', fontWeight:300, lineHeight:1.15, marginBottom:'20px', maxWidth:'700px'}}>Why most business websites don&apos;t make money</h1>
          <p style={{fontSize:'11px', letterSpacing:'0.1em', color:'var(--text-dim)', marginBottom:'32px'}}>By Luyanda Ngubo · Avalon Digital Agency · Durban, KZN</p>
          <p style={{maxWidth:'560px', fontSize:'14px', color:'var(--text-muted)', lineHeight:1.9}}>It&apos;s not the design. It&apos;s not the traffic. It&apos;s the fact that most websites were never built to convert. Here&apos;s what a website that doesn&apos;t perform actually costs you, and why the problem is more common than most business owners realise.</p>
        </div>

        <div className="divider"></div>

        <section style={{padding:'80px 60px'}} aria-labelledby="wwf-brochure">
          <h2 className="section-title" id="wwf-brochure">The brochure era hangover</h2>
          <p className="section-body">Most business websites were built with one goal: exist. Get online, put your services up, add a contact page, done. That was the standard for twenty years — and for twenty years it was good enough. Having a website at all put you ahead of businesses that didn&apos;t.</p>
          <p className="section-body" style={{marginTop:'20px'}}>That standard is dead. Being online is no longer a differentiator. Every competitor you have is online. The question is no longer whether your website exists: it&apos;s whether it works. And for most businesses, the honest answer is no.</p>
        </section>

        <div className="divider"></div>

        <section style={{padding:'80px 60px'}} aria-labelledby="wwf-costs">
          <h2 className="section-title" id="wwf-costs">What a non-performing website actually costs</h2>
          <p className="section-body">Most business owners think a bad website is a neutral thing: it doesn&apos;t help, but it doesn&apos;t hurt. That&apos;s wrong. A website that doesn&apos;t convert is actively costing you money every single day. Here&apos;s how:</p>
          <div style={{display:'grid', gap:'1px', background:'var(--border)', marginTop:'56px'}}>
            <div style={{background:'var(--surface)', padding:'40px'}}>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', marginBottom:'14px'}}>Silent visitor loss</div>
              <div style={{fontSize:'13px', color:'var(--text-muted)', lineHeight:1.8}}>Someone finds you, lands on your site, doesn&apos;t understand your offer clearly, and leaves. They don&apos;t call. They don&apos;t email. They just go to a competitor whose website made more sense. You never know they were there.</div>
            </div>
            <div style={{background:'var(--surface)', padding:'40px'}}>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', marginBottom:'14px'}}>Credibility erosion</div>
              <div style={{fontSize:'13px', color:'var(--text-muted)', lineHeight:1.8}}>In industries where trust matters: construction, professional services, high-ticket sales: a weak website doesn&apos;t just fail to convert. It actively damages your credibility. Prospects see it and lower their perception of your business before you&apos;ve said a word.</div>
            </div>
            <div style={{background:'var(--surface)', padding:'40px'}}>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', marginBottom:'14px'}}>Wasted marketing spend</div>
              <div style={{fontSize:'13px', color:'var(--text-muted)', lineHeight:1.8}}>Every rand you spend on ads, SEO, or social media sends people to your website. If the website doesn&apos;t convert, that spend is wasted. You&apos;re paying to drive traffic into a leaking bucket.</div>
            </div>
            <div style={{background:'var(--surface)', padding:'40px'}}>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', marginBottom:'14px'}}>Missed referral conversions</div>
              <div style={{fontSize:'13px', color:'var(--text-muted)', lineHeight:1.8}}>Even warm referrals, people sent to you by someone who knows you, check your website before reaching out. A weak site loses deals that were already halfway closed.</div>
            </div>
          </div>
        </section>

        <div className="divider"></div>

        <section style={{padding:'80px 60px'}} aria-labelledby="wwf-five">
          <h2 className="section-title" id="wwf-five">The five reasons websites don&apos;t convert</h2>
          <p className="section-body">After rebuilding websites for businesses across KZN, the same problems appear over and over. They&apos;re not random. They&apos;re predictable — and they&apos;re fixable.</p>
          <div style={{marginTop:'56px', borderTop:'1px solid var(--border)'}}>
            <div style={{padding:'32px 0', borderBottom:'1px solid var(--border)', display:'flex', alignItems:'flex-start', gap:'32px'}}>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'32px', fontWeight:300, color:'var(--gold)', flexShrink:0, lineHeight:1, width:'48px'}}>01</div>
              <div>
                <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'20px', marginBottom:'10px'}}>No clear offer</div>
                <div style={{fontSize:'13px', color:'var(--text-muted)', lineHeight:1.8, maxWidth:'600px'}}>Visitors land on the homepage and can&apos;t immediately answer: what does this business do, who is it for, and why should I care? If the answer takes more than five seconds to find, most people won&apos;t wait.</div>
              </div>
            </div>
            <div style={{padding:'32px 0', borderBottom:'1px solid var(--border)', display:'flex', alignItems:'flex-start', gap:'32px'}}>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'32px', fontWeight:300, color:'var(--gold)', flexShrink:0, lineHeight:1, width:'48px'}}>02</div>
              <div>
                <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'20px', marginBottom:'10px'}}>No conversion path</div>
                <div style={{fontSize:'13px', color:'var(--text-muted)', lineHeight:1.8, maxWidth:'600px'}}>&apos;Contact us&apos; at the bottom of a page after three paragraphs of company history is not a conversion path. Every page needs to guide a specific decision.</div>
              </div>
            </div>
            <div style={{padding:'32px 0', borderBottom:'1px solid var(--border)', display:'flex', alignItems:'flex-start', gap:'32px'}}>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'32px', fontWeight:300, color:'var(--gold)', flexShrink:0, lineHeight:1, width:'48px'}}>03</div>
              <div>
                <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'20px', marginBottom:'10px'}}>No trust architecture</div>
                <div style={{fontSize:'13px', color:'var(--text-muted)', lineHeight:1.8, maxWidth:'600px'}}>Trust doesn&apos;t happen by accident. It&apos;s built through specific elements: case studies, testimonials, process transparency, credentials, social proof. Most websites have none of these structured deliberately. They assume the visitor will trust them. Visitors don&apos;t.</div>
              </div>
            </div>
            <div style={{padding:'32px 0', borderBottom:'1px solid var(--border)', display:'flex', alignItems:'flex-start', gap:'32px'}}>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'32px', fontWeight:300, color:'var(--gold)', flexShrink:0, lineHeight:1, width:'48px'}}>04</div>
              <div>
                <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'20px', marginBottom:'10px'}}>Built for the owner, not the buyer</div>
                <div style={{fontSize:'13px', color:'var(--text-muted)', lineHeight:1.8, maxWidth:'600px'}}>Most websites describe the business from the inside out: our story, our team, our values. Buyers don&apos;t care about any of that until they know you can solve their problem. The website should be about them, not you.</div>
              </div>
            </div>
            <div style={{padding:'32px 0', borderBottom:'1px solid var(--border)', display:'flex', alignItems:'flex-start', gap:'32px'}}>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'32px', fontWeight:300, color:'var(--gold)', flexShrink:0, lineHeight:1, width:'48px'}}>05</div>
              <div>
                <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'20px', marginBottom:'10px'}}>No mobile conversion</div>
                <div style={{fontSize:'13px', color:'var(--text-muted)', lineHeight:1.8, maxWidth:'600px'}}>In South Africa, over 70% of web traffic is mobile. A website that isn&apos;t built for mobile-first conversion isn&apos;t built for your market. Slow load times, small tap targets, horizontal scrolling: these kill conversions silently.</div>
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>

        <section style={{padding:'80px 60px'}} aria-labelledby="wwf-nothing">
          <h2 className="section-title" id="wwf-nothing">The cost of doing nothing</h2>
          <p className="section-body">The businesses that fix these problems don&apos;t just see better website metrics. They see more enquiries, better quality leads, shorter sales cycles, and higher close rates. Because the website is doing the pre-qualification work before anyone picks up the phone.</p>
          <p className="section-body" style={{marginTop:'20px'}}>The businesses that don&apos;t fix them keep spending on marketing that doesn&apos;t convert, keep losing deals to competitors with stronger digital presence, and keep wondering why growth feels harder than it should.</p>
          <blockquote style={{marginTop:'48px', paddingLeft:'24px', borderLeft:'2px solid var(--gold)', maxWidth:'560px'}}>
            <p style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(18px,2vw,24px)', fontWeight:300, fontStyle:'italic', lineHeight:1.5, color:'var(--text)'}}>A website that doesn&apos;t convert isn&apos;t a neutral asset. It&apos;s a liability dressed up as a business card.</p>
          </blockquote>
        </section>

        <div className="divider"></div>

        <section style={{padding:'80px 60px'}}>
          <div style={{background:'var(--surface)', border:'1px solid var(--border)', padding:'48px', maxWidth:'100%'}}>
            <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(22px,2.5vw,30px)', fontWeight:300, lineHeight:1.3, marginBottom:'20px', maxWidth:'580px'}}>The fix is more straightforward than most people expect.</div>
            <p style={{fontSize:'13px', color:'var(--text-muted)', lineHeight:1.9, maxWidth:'580px', marginBottom:'36px'}}>Every problem listed above has a solution. We&apos;ve solved all of them: for Afripact Civils, for Canopy Courier, and for every business we&apos;ve worked with. If you read this and recognised your own website in it, that recognition is valuable. The next step is a conversation.</p>
            <a className="btn-primary" href="https://wa.me/27712205313?text=Hi%20Luyanda%2C%20I%27d%20like%20to%20discuss%20a%20project%20with%20ADA." target="_blank" rel="noopener noreferrer" style={{position:'relative', zIndex:9999, display:'inline-block'}}>Let&apos;s talk</a>
          </div>
        </section>

        <div className="divider"></div>

        <Footer />
      </div>
    </>
  );
}
