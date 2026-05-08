import Link from 'next/link';
import Nav from '../../../components/Nav';
import Footer from '../../../components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What a Business Website That Actually Generates Leads Looks Like | Avalon Digital Agency',
  description: "Most business owners have never seen a website built to convert. Here's the anatomy of a revenue-driven website - the specific elements that turn visitors into paying clients in South Africa.",
};

export default function RevenueWebsite() {
  return (
    <>
      <Nav />
      <div id="page-blog-revenue-website" className="page" role="main">
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
          <div className="section-label">The solution</div>
          <h1 style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(32px,4.5vw,58px)', fontWeight:300, lineHeight:1.15, marginBottom:'20px', maxWidth:'700px'}}>What a revenue-driven website actually looks like</h1>
          <p style={{fontSize:'11px', letterSpacing:'0.1em', color:'var(--text-dim)', marginBottom:'32px'}}>By Luyanda Ngubo · Avalon Digital Agency · Durban, KZN</p>
          <p style={{maxWidth:'560px', fontSize:'14px', color:'var(--text-muted)', lineHeight:1.9}}>Most business owners have never seen one up close. Here&apos;s a breakdown of the specific elements, offer clarity, conversion flow, trust architecture, that separate a website that performs from one that just exists.</p>
        </div>

        <div className="divider"></div>

        <section style={{padding:'80px 60px'}} aria-labelledby="rw-not">
          <h2 className="section-title" id="rw-not">First: what it isn&apos;t</h2>
          <p className="section-body">A revenue-driven website isn&apos;t necessarily the most beautiful website. It isn&apos;t the one with the most animations, the most pages, or the biggest budget. Some of the highest-converting websites in the world are remarkably simple.</p>
          <p className="section-body" style={{marginTop:'20px'}}>What makes a website generate revenue isn&apos;t how it looks. It&apos;s how it thinks. Every element: every headline, every section, every button: is placed with a specific purpose, to move a visitor one step closer to becoming a client.</p>
        </section>

        <div className="divider"></div>

        <section style={{padding:'80px 60px'}} aria-labelledby="rw-headline">
          <h2 className="section-title" id="rw-headline">Element 1 - A headline that does real work</h2>
          <p className="section-body">The first thing a visitor reads determines whether they stay or leave. Most business website headlines describe the company. Revenue-driven headlines address the visitor. There&apos;s a significant difference between &apos;Welcome to Acme Construction&apos; and &apos;KZN&apos;s civil construction specialists, on time, on budget, no surprises.&apos; One is about you. One is about them. The second one makes people stay.</p>
          <blockquote style={{marginTop:'48px', paddingLeft:'24px', borderLeft:'2px solid var(--gold)', maxWidth:'560px'}}>
            <p style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(18px,2vw,24px)', fontWeight:300, fontStyle:'italic', lineHeight:1.5, color:'var(--text)'}}>You have approximately five seconds to answer the visitor&apos;s first question: am I in the right place? Your headline either answers it or loses them.</p>
          </blockquote>
        </section>

        <div className="divider"></div>

        <section style={{padding:'80px 60px'}} aria-labelledby="rw-offer">
          <h2 className="section-title" id="rw-offer">Element 2 - Offer clarity above the fold</h2>
          <p className="section-body">Above the fold means everything visible before the visitor scrolls. This is the most valuable real estate on your website and most businesses waste it. By the time a visitor reaches the bottom of your first screen, they should know exactly what you do, who you do it for, and what they should do next. If any of those three things are unclear, you&apos;re already losing people.</p>
        </section>

        <div className="divider"></div>

        <section style={{padding:'80px 60px'}} aria-labelledby="rw-path">
          <h2 className="section-title" id="rw-path">Element 3 - A logical conversion path</h2>
          <p className="section-body">A conversion path is the journey from arriving on your website to taking an action: calling, emailing, booking, buying. Most websites don&apos;t have one. They have pages. Pages are not a path.</p>
          <p className="section-body" style={{marginTop:'20px'}}>A revenue-driven website is structured like a conversation. It starts by acknowledging the visitor&apos;s situation, moves into the problem they&apos;re facing, introduces your solution, proves you can deliver it, and then makes the next step obvious. Every section has a job. Nothing is there just to fill space.</p>
        </section>

        <div className="divider"></div>

        <section style={{padding:'80px 60px'}} aria-labelledby="rw-trust">
          <h2 className="section-title" id="rw-trust">Element 4 - Trust architecture</h2>
          <p className="section-body">Trust doesn&apos;t happen by accident on a website. It has to be deliberately built into the structure. The specific elements that build trust vary by industry: in construction it&apos;s project photos and client references, in professional services it&apos;s credentials and case studies, in e-commerce it&apos;s reviews and return policies. The principle is the same. Objections exist in every visitor&apos;s mind before they reach out. A revenue-driven website identifies those objections and answers them before they&apos;re raised.</p>
          <div style={{display:'grid', gap:'1px', background:'var(--border)', marginTop:'56px'}}>
            <div style={{background:'var(--surface)', padding:'40px'}}>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', marginBottom:'14px'}}>Case studies</div>
              <div style={{fontSize:'13px', color:'var(--text-muted)', lineHeight:1.8}}>Real projects, real outcomes. Not vague claims: specific proof of what you&apos;ve delivered and what it produced.</div>
            </div>
            <div style={{background:'var(--surface)', padding:'40px'}}>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', marginBottom:'14px'}}>Testimonials</div>
              <div style={{fontSize:'13px', color:'var(--text-muted)', lineHeight:1.8}}>Other people vouching for you carries more weight than anything you say about yourself. One specific, honest testimonial outperforms ten generic ones.</div>
            </div>
            <div style={{background:'var(--surface)', padding:'40px'}}>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', marginBottom:'14px'}}>Process transparency</div>
              <div style={{fontSize:'13px', color:'var(--text-muted)', lineHeight:1.8}}>Showing how you work reduces the fear of the unknown. Clients who understand your process before engaging are easier to work with and more likely to convert.</div>
            </div>
            <div style={{background:'var(--surface)', padding:'40px'}}>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', marginBottom:'14px'}}>Credentials and signals</div>
              <div style={{fontSize:'13px', color:'var(--text-muted)', lineHeight:1.8}}>Years in business, number of clients served, industry affiliations, recognisable client names: these aren&apos;t vanity metrics. They&apos;re trust signals.</div>
            </div>
          </div>
        </section>

        <div className="divider"></div>

        <section style={{padding:'80px 60px'}} aria-labelledby="rw-cta">
          <h2 className="section-title" id="rw-cta">Element 5 - CTAs that create action</h2>
          <p className="section-body">A call to action is not just a button. It&apos;s the moment where interest becomes intent. &apos;Contact us&apos; is not a call to action. It&apos;s a direction. &apos;Book a free 30-minute strategy call&apos; is a call to action. It tells the visitor exactly what will happen, how long it will take, and removes the risk. The specificity is the difference.</p>
        </section>

        <div className="divider"></div>

        <section style={{padding:'80px 60px'}} aria-labelledby="rw-mobile">
          <h2 className="section-title" id="rw-mobile">Element 6 - Mobile-first conversion</h2>
          <p className="section-body">In South Africa, the majority of web traffic is mobile. If your website isn&apos;t built for mobile conversion: fast load times, easy tap targets, click-to-call buttons, WhatsApp integration: you&apos;re optimising for a minority of your visitors. A revenue-driven website is built for the device your clients actually use.</p>
        </section>

        <div className="divider"></div>

        <section style={{padding:'80px 60px'}} aria-labelledby="rw-practice">
          <h2 className="section-title" id="rw-practice">What this looks like in practice</h2>
          <p className="section-body">Afripact Civils needed a website that answered one question before anything else: is this a real business? Every element: the design, the copy, the case studies, the contact information: was structured to answer that question immediately and credibly. The result was a website that converted sceptical prospects into confident ones before a single conversation happened.</p>
          <p className="section-body" style={{marginTop:'20px'}}>Canopy Courier needed a website that spoke to two completely different buyers simultaneously: retail walk-ins and fleet managers: without confusing either. The solution was a dual-path structure where each visitor type was routed to a completely different offer and conversion path within seconds of landing.</p>
          <p className="section-body" style={{marginTop:'20px'}}>Different problems. Different solutions. Same principle: every element serves the revenue outcome.</p>
        </section>

        <div className="divider"></div>

        <section style={{padding:'80px 60px'}}>
          <div style={{background:'var(--surface)', border:'1px solid var(--border)', padding:'48px', maxWidth:'100%'}}>
            <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(22px,2.5vw,30px)', fontWeight:300, lineHeight:1.3, marginBottom:'20px', maxWidth:'580px'}}>A revenue-driven website isn&apos;t a luxury. It&apos;s the baseline for competing in 2025.</div>
            <p style={{fontSize:'13px', color:'var(--text-muted)', lineHeight:1.9, maxWidth:'580px', marginBottom:'36px'}}>If your current website doesn&apos;t have these elements working together, it&apos;s not a revenue engine: it&apos;s a placeholder. We build the real thing. If you want to see what that looks like for your specific business, start with a conversation.</p>
            <a className="btn-primary" href="https://wa.me/27712205313?text=Hi%20Luyanda%2C%20I%27d%20like%20to%20discuss%20a%20project%20with%20ADA." target="_blank" rel="noopener noreferrer" style={{position:'relative', zIndex:9999, display:'inline-block'}}>Let&apos;s talk</a>
          </div>
        </section>

        <div className="divider"></div>

        <Footer />
      </div>
    </>
  );
}
