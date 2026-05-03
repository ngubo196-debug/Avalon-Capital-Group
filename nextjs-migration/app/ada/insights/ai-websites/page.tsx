import Link from 'next/link';
import Nav from '../../../components/Nav';
import Footer from '../../../components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Why AI Won't Replace Websites | Avalon Digital Agency",
  description: 'AI will make websites more valuable, not obsolete. Here is why.',
};

export default function AIWebsites() {
  return (
    <>
      <Nav />
      <div id="page-blog-ai-websites" className="page" role="main">
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
          <div className="section-label">Authority piece</div>
          <h1 style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(32px,4.5vw,58px)', fontWeight:300, lineHeight:1.15, marginBottom:'20px', maxWidth:'700px'}}>Why AI won&apos;t replace websites: it will make them more valuable</h1>
          <p style={{fontSize:'11px', letterSpacing:'0.1em', color:'var(--text-dim)', marginBottom:'32px'}}>By Luyanda Ngubo · Avalon Digital Agency · Durban, KZN</p>
          <p style={{maxWidth:'560px', fontSize:'14px', color:'var(--text-muted)', lineHeight:1.9}}>Everyone&apos;s asking whether AI makes websites obsolete. The answer is the opposite. Here&apos;s why the businesses that invest in strong digital infrastructure now will be the ones AI points people toward, and what that means for yours.</p>
        </div>

        <div className="divider"></div>

        <section style={{padding:'80px 60px'}} aria-labelledby="aiw-question">
          <h2 className="section-title" id="aiw-question">The question everyone is asking wrong</h2>
          <p className="section-body">Since AI tools became mainstream, a version of the same question keeps coming up in business conversations: do we still need a website if AI can just answer questions for our customers? It sounds logical. If people can get answers directly from an AI assistant, why would they visit your website at all?</p>
          <p className="section-body" style={{marginTop:'20px'}}>The question misunderstands how AI actually works, and more importantly, where it gets its information from.</p>
        </section>

        <div className="divider"></div>

        <section style={{padding:'80px 60px'}} aria-labelledby="aiw-source">
          <h2 className="section-title" id="aiw-source">Where AI gets its answers</h2>
          <p className="section-body">AI assistants don&apos;t generate information from nothing. They synthesise it from sources: websites, published content, structured data across the internet. When someone asks an AI &apos;who are the best civil construction companies in KZN&apos; or &apos;where can I get a canopy fitted in Durban&apos;, the AI looks for businesses with clear, credible, well-structured digital presences to reference.</p>
          <p className="section-body" style={{marginTop:'20px'}}>A business with no website, a weak website, or a website with no structured content doesn&apos;t get referenced. It doesn&apos;t exist in the AI&apos;s answer. The businesses that show up are the ones that invested in their digital infrastructure.</p>
          <blockquote style={{marginTop:'48px', paddingLeft:'24px', borderLeft:'2px solid var(--gold)', maxWidth:'560px'}}>
            <p style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(18px,2vw,24px)', fontWeight:300, fontStyle:'italic', lineHeight:1.5, color:'var(--text)'}}>AI doesn&apos;t replace the need for a strong website. It raises the stakes for having one.</p>
          </blockquote>
        </section>

        <div className="divider"></div>

        <section style={{padding:'80px 60px'}} aria-labelledby="aiw-aeo">
          <h2 className="section-title" id="aiw-aeo">The shift from SEO to AEO</h2>
          <p className="section-body">For the past two decades, the game was Search Engine Optimisation: getting Google to rank your website higher in search results. The principles were well understood: keywords, backlinks, page speed, mobile optimisation.</p>
          <p className="section-body" style={{marginTop:'20px'}}>That game hasn&apos;t disappeared, but a new one has been added alongside it. Answer Engine Optimisation is the practice of structuring your website so that AI systems can understand, trust, and reference it when answering questions relevant to your business.</p>
          <p className="section-body" style={{marginTop:'20px'}}>AEO requires clean structure, clear headings, specific and credible content, FAQ sections that directly answer common questions, and authority signals that tell AI systems this is a legitimate, trustworthy source. Most business websites have none of these things deliberately built in. The ones that do will increasingly dominate both traditional search and AI-driven discovery.</p>
        </section>

        <div className="divider"></div>

        <section style={{padding:'80px 60px'}} aria-labelledby="aiw-valuable">
          <h2 className="section-title" id="aiw-valuable">Why your website becomes more valuable, not less</h2>
          <p className="section-body">Think about what happens when AI becomes the primary way people discover businesses. Instead of ten blue links on a search results page where any business can show up, there&apos;s one AI answer: or a short list of two or three recommendations. The competition for that position is more intense, not less. And the businesses that win it are the ones with the strongest, most credible, most clearly structured digital presence.</p>
          <div style={{display:'grid', gap:'1px', background:'var(--border)', marginTop:'56px'}}>
            <div style={{background:'var(--surface)', padding:'40px'}}>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', marginBottom:'14px'}}>AI needs sources</div>
              <div style={{fontSize:'13px', color:'var(--text-muted)', lineHeight:1.8}}>Every AI answer comes from somewhere. A well-built website with clear, credible content becomes a source AI references. A weak website gets ignored entirely.</div>
            </div>
            <div style={{background:'var(--surface)', padding:'40px'}}>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', marginBottom:'14px'}}>Trust signals matter more</div>
              <div style={{fontSize:'13px', color:'var(--text-muted)', lineHeight:1.8}}>AI systems evaluate credibility. Case studies, testimonials, structured content, clear offers: these aren&apos;t just for human visitors anymore. They signal trustworthiness to AI as well.</div>
            </div>
            <div style={{background:'var(--surface)', padding:'40px'}}>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', marginBottom:'14px'}}>Zero-click doesn&apos;t mean zero opportunity</div>
              <div style={{fontSize:'13px', color:'var(--text-muted)', lineHeight:1.8}}>Even when AI answers a question directly, it often cites sources. Being the cited source: the business whose website provided the answer: is a more powerful position than ranking fifth on a search page.</div>
            </div>
            <div style={{background:'var(--surface)', padding:'40px'}}>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', marginBottom:'14px'}}>Early movers win</div>
              <div style={{fontSize:'13px', color:'var(--text-muted)', lineHeight:1.8}}>Most businesses in KZN haven&apos;t started thinking about AEO. The businesses that build for it now will establish positions that are difficult to displace later. This is the same dynamic that played out with SEO fifteen years ago.</div>
            </div>
          </div>
        </section>

        <div className="divider"></div>

        <section style={{padding:'80px 60px'}} aria-labelledby="aiw-now">
          <h2 className="section-title" id="aiw-now">What this means for your business right now</h2>
          <p className="section-body">The businesses that will win the AI era aren&apos;t the ones that adopt the most AI tools. They&apos;re the ones that build the clearest, most credible, most structured digital presence: so that when AI systems are looking for answers to give their users, your business is the obvious reference.</p>
          <p className="section-body" style={{marginTop:'20px'}}>That means a website with a clear offer, structured content, real proof of your work, and answers to the questions your prospects are actually asking. Not a brochure. Not a placeholder. A digital asset that works in your favour whether a human or an AI is evaluating it.</p>
        </section>

        <div className="divider"></div>

        <section style={{padding:'80px 60px'}}>
          <div style={{background:'var(--surface)', border:'1px solid var(--border)', padding:'48px', maxWidth:'100%'}}>
            <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(22px,2.5vw,30px)', fontWeight:300, lineHeight:1.3, marginBottom:'20px', maxWidth:'580px'}}>The AI era rewards clarity. Build for it now.</div>
            <p style={{fontSize:'13px', color:'var(--text-muted)', lineHeight:1.9, maxWidth:'580px', marginBottom:'36px'}}>Every website we build at ADA is structured for both human conversion and AI discoverability. The two aren&apos;t in conflict: a website built to convert humans is also built to be referenced by AI. If you want your business to show up in both, start with a conversation.</p>
            <a className="btn-primary" href="https://wa.me/27712205313?text=Hi%20Luyanda%2C%20I%27d%20like%20to%20discuss%20a%20project%20with%20ADA." target="_blank" rel="noopener noreferrer" style={{position:'relative', zIndex:9999, display:'inline-block'}}>Let&apos;s talk</a>
          </div>
        </section>

        <div className="divider"></div>

        <Footer />
      </div>
    </>
  );
}
