import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Avalon Capital Group',
  description: 'Learn about Avalon Capital Group - a Durban-based business group built on the belief that AI changes everything for ambitious businesses.',
};

export default function About() {
  return (
    <>
      <Nav />
      <div id="page-about" className="page" role="main">
        <div className="inner-hero">
          <svg className="inner-hero-geo" style={{position:'absolute', right:'-120px', top:'50%', transform:'translateY(-50%)', opacity:0.11, pointerEvents:'none', zIndex:1}} width="580" height="680" viewBox="0 0 580 680" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" stroke="#C9A84C" strokeWidth="0.8">
              <polygon points="290,20 560,640 20,640"/>
              <polygon points="290,80 510,600 70,600"/>
              <polygon points="290,140 460,560 120,560"/>
            </g>
          </svg>
          <div className="inner-hero-bg" aria-hidden="true"></div>
          <Link className="back-btn" href="/" style={{cursor:'pointer', position:'relative', zIndex:10}}>Back to Home</Link>
          <div className="section-label">About the Group</div>
          <h1 style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(40px,6vw,78px)', fontWeight:300, lineHeight:1.05, maxWidth:'640px'}}>
            Built to generate,<br />structure, and<br /><em>compound value.</em>
          </h1>
        </div>

        <section aria-labelledby="about-heading">
          <div className="section-label">Who We Are</div>
          <h2 className="section-title" id="about-heading">A group built on<br /><em>doing the work.</em></h2>
          <p className="section-body">Avalon Capital Group is a South African business group operating through two focused portfolio companies. We are not a consultancy. We are not a holding company in name only. Every division operates in its market, executes real transactions, and delivers measurable outcomes for clients.</p>
          <p className="section-body" style={{marginTop:'20px'}}>Our structure is deliberate. Vantara handles the physical world: acquisitions, brokerage, deal-making. Avalon Digital Agency handles the digital world: systems, automation, visibility. Together they create a group with multiple entry points, multiple revenue streams, and a single unifying standard of service.</p>

          <div className="philosophy-grid" style={{marginTop:'72px'}}>
            <div className="philosophy-item">
              <div className="philosophy-num">01</div>
              <div className="philosophy-title">Established Presence</div>
              <div className="philosophy-desc">Avalon Capital Group has an active client base across both divisions, with transactions and digital projects delivered across KwaZulu-Natal and beyond.</div>
            </div>
            <div className="philosophy-item">
              <div className="philosophy-num">02</div>
              <div className="philosophy-title">Multi-Industry Reach</div>
              <div className="philosophy-desc">From vehicle acquisition to AI automation, our divisions operate in distinct markets, giving the group resilience, breadth, and multiple revenue channels.</div>
            </div>
            <div className="philosophy-item">
              <div className="philosophy-num">03</div>
              <div className="philosophy-title">Results-First Culture</div>
              <div className="philosophy-desc">We are measured by client outcomes, not by activity. Every engagement is judged on the value it creates, for the client and for the group.</div>
            </div>
          </div>
        </section>

        <div className="divider"></div>

        <section className="founder-section">
          <div className="bg-name">NGUBO</div>
          <div className="gold-rule"></div>

          <div className="photo-col">
            <div className="photo-wrapper">
              <img
                className="founder-photo"
                src="/assets/luyanda-ngubo.jpg"
                alt="Luyanda Ngubo – Founder, Avalon Capital Group"
              />
            </div>
          </div>

          <div className="content-col">
            <p className="overline">Founder &amp; Principal</p>
            <h2 className="founder-name">Luyanda<span>Ngubo</span></h2>
            <div className="title-tags">
              <span className="tag">Strategic Operator</span>
              <span className="tag">Deal Structuring</span>
              <span className="tag">Commercial Leverage</span>
            </div>
            <div className="gold-divider"></div>
            <blockquote className="founder-quote">
              &ldquo;I find where the money is moving, position my clients inside it, and engineer outcomes that pay.&rdquo;
            </blockquote>
            <p className="founder-bio">
              Avalon didn&apos;t start with capital. It started with a vision I carried for four years without knowing how to build it.<br /><br />
              No business background. No family money. Just a picture in my head of what was possible: an ecosystem where each venture feeds the next, where Business A supports B, and C funds A. Self-sustaining. Compounding.<br /><br />
              The gap between that vision and today was filled with exposure, trial, and learning in environments I had no obvious right to be in. That&apos;s not a weakness. That&apos;s the credential.
            </p>
            <div className="metrics">
              <div className="metric-item"><strong>R3M+</strong> in transactions facilitated</div>
              <div className="metric-item">Vantara and ADA - built to feed each other</div>
              <div className="metric-item">Built in KwaZulu-Natal. Playing a bigger game.</div>
            </div>
            <div className="cta-row">
              <a href="https://wa.me/27712205313" className="cta-primary" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
                </svg>
                Speak Directly
              </a>
              <a href="#" className="cta-secondary">Learn More &#8594;</a>
            </div>
          </div>
        </section>

        <div className="divider"></div>

        <section aria-labelledby="divisions-heading">
          <div className="section-label">Our Divisions</div>
          <h2 className="section-title" id="divisions-heading">Two businesses.<br /><em>One group.</em></h2>

          <div className="divisions-list">
            <Link className="division-row" href="/vantara">
              <div>
                <div className="division-role">Acquisition &amp; Brokerage</div>
                <div className="division-name">Vantara</div>
              </div>
              <div className="division-desc">Premium brokerage for vehicle acquisitions, property deals, and strategic asset transactions. We source, qualify, structure, and deliver, with the client&apos;s interest as the only agenda.</div>
              <div className="division-arrow">→</div>
            </Link>
            <Link className="division-row" href="/ada">
              <div>
                <div className="division-role">Digital &amp; AI Services</div>
                <div className="division-name">Avalon Digital Agency</div>
              </div>
              <div className="division-desc">AI-powered digital infrastructure for businesses. Websites that convert. Automation that reduces manual work. SEO that compounds. Systems that grow the business while the owner focuses on what matters.</div>
              <div className="division-arrow">→</div>
            </Link>
          </div>
        </section>

        <section style={{paddingTop:0, textAlign:'center'}}>
          <div style={{border:'1px solid var(--border)', padding:'64px 40px', maxWidth:'600px', margin:'0 auto'}}>
            <div className="section-label" style={{justifyContent:'center', marginBottom:'20px'}}>Get in Touch</div>
            <h2 style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'34px', fontWeight:300, marginBottom:'16px'}}>Interested in working<br />with the group?</h2>
            <p style={{fontSize:'13px', color:'var(--text-muted)', lineHeight:1.8, marginBottom:'32px'}}>Whether it&apos;s a deal, a project, or a partnership: every conversation starts the same way.</p>
            <Link className="btn-primary" href="/contact" style={{color:'#141414'}}>Start a Conversation</Link>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
