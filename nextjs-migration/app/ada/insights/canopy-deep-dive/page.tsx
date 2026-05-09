import Link from 'next/link';
import Nav from '../../../components/Nav';
import Footer from '../../../components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Website Redesign Case Study: From Retail Site to Fleet Revenue System | Avalon Digital Agency',
  description: 'A ground-level breakdown of a real website rebuild in Durban, KwaZulu-Natal. What we found, what we built, and how a focused redesign unlocked R1M+ in annual revenue potential for Canopy Courier.',
  alternates: { canonical: 'https://www.avaloncapitalgroup.co.za/ada/insights/canopy-deep-dive' },
};

export default function CanopyDeepDive() {
  return (
    <>
      <Nav />
      <div id="page-blog-canopy-deep-dive" className="page" role="main">
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
          <div className="section-label">Case study deep-dive</div>
          <h1 style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(32px,4.5vw,58px)', fontWeight:300, lineHeight:1.15, marginBottom:'20px', maxWidth:'700px'}}>The Canopy Courier rebuild: how we turned a retail website into a fleet revenue system</h1>
          <p style={{fontSize:'11px', letterSpacing:'0.1em', color:'var(--text-dim)', marginBottom:'32px'}}>By Luyanda Ngubo · Avalon Digital Agency · Durban, KZN</p>
          <p style={{maxWidth:'560px', fontSize:'14px', color:'var(--text-muted)', lineHeight:1.9}}>A ground-level breakdown of a real project. What we found, what we built, and the specific decisions that turned a functional website into a business development tool with R1M+ annual revenue potential.</p>
        </div>

        <div className="divider"></div>

        <section style={{padding:'80px 60px'}} aria-labelledby="cdd-start">
          <h2 className="section-title" id="cdd-start">How it started</h2>
          <p className="section-body">I went to Canopy Courier as a customer. Needed a canopy fitted. Good service, fast turnaround, clearly knew their product. The kind of business that survives on reputation and word of mouth: which is both a strength and a vulnerability.</p>
          <p className="section-body" style={{marginTop:'20px'}}>While I was there I looked at their digital presence. Clean enough website. Basic information. A contact number. But something was missing: actually, several things were missing: and they were costing the business significant revenue every single month without anyone noticing.</p>
        </section>

        <div className="divider"></div>

        <section style={{padding:'80px 60px'}} aria-labelledby="cdd-found">
          <h2 className="section-title" id="cdd-found">What we found</h2>
          <p className="section-body">The audit surfaced four specific gaps. Each one represented a different category of lost revenue.</p>
          <div style={{display:'grid', gap:'1px', background:'var(--border)', marginTop:'56px'}}>
            <div style={{background:'var(--surface)', padding:'40px'}}>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', marginBottom:'14px'}}>No fleet positioning</div>
              <div style={{fontSize:'13px', color:'var(--text-muted)', lineHeight:1.8}}>Construction firms, logistics companies, security fleets: high-volume repeat clients: had no way to find or engage Canopy Courier. Zero fleet pipeline despite being perfectly positioned to serve it.</div>
            </div>
            <div style={{background:'var(--surface)', padding:'40px'}}>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', marginBottom:'14px'}}>No conversion funnel</div>
              <div style={{fontSize:'13px', color:'var(--text-muted)', lineHeight:1.8}}>A single &apos;Get a Quote&apos; button was losing the majority of interested visitors. No qualification, no follow-up structure, no path from enquiry to sale.</div>
            </div>
            <div style={{background:'var(--surface)', padding:'40px'}}>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', marginBottom:'14px'}}>Weak search presence</div>
              <div style={{fontSize:'13px', color:'var(--text-muted)', lineHeight:1.8}}>Not ranking in the top positions for KZN canopy searches: invisible to high-intent buyers actively looking to spend right now.</div>
            </div>
            <div style={{background:'var(--surface)', padding:'40px'}}>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', marginBottom:'14px'}}>No authority positioning</div>
              <div style={{fontSize:'13px', color:'var(--text-muted)', lineHeight:1.8}}>Nothing online said KZN&apos;s canopy specialists. Competitors with weaker service appeared more credible simply because they had claimed the digital space.</div>
            </div>
          </div>
        </section>

        <div className="divider"></div>

        <section style={{padding:'80px 60px'}} aria-labelledby="cdd-strategic">
          <h2 className="section-title" id="cdd-strategic">The strategic decision</h2>
          <p className="section-body">The most important decision we made wasn&apos;t about design. It was about revenue architecture. Canopy Courier was serving two fundamentally different customer types: retail walk-ins and fleet managers: with one undifferentiated website that spoke to neither of them specifically.</p>
          <p className="section-body" style={{marginTop:'20px'}}>A retail customer needs speed and simplicity. They have one vehicle, they want it done today, they want a price. A fleet manager needs reliability, volume pricing, dedicated service, and documentation. These are completely different conversations, and they need completely different conversion paths.</p>
          <blockquote style={{marginTop:'48px', paddingLeft:'24px', borderLeft:'2px solid var(--gold)', maxWidth:'560px'}}>
            <p style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(18px,2vw,24px)', fontWeight:300, fontStyle:'italic', lineHeight:1.5, color:'var(--text)'}}>The single biggest revenue opportunity wasn&apos;t more traffic. It was a website that spoke differently to the two buyers already finding it.</p>
          </blockquote>
        </section>

        <div className="divider"></div>

        <section style={{padding:'80px 60px'}} aria-labelledby="cdd-build">
          <h2 className="section-title" id="cdd-build">The build: decision by decision</h2>
          <p className="section-body">Eight deliverables. Here&apos;s the thinking behind the ones that mattered most.</p>
          <div style={{marginTop:'56px', borderTop:'1px solid var(--border)'}}>
            <div style={{padding:'32px 0', borderBottom:'1px solid var(--border)', display:'flex', alignItems:'flex-start', gap:'32px'}}>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'32px', fontWeight:300, color:'var(--gold)', flexShrink:0, lineHeight:1, width:'48px'}}>01</div>
              <div>
                <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'20px', marginBottom:'10px'}}>The dual-path homepage</div>
                <div style={{fontSize:'13px', color:'var(--text-muted)', lineHeight:1.8, maxWidth:'600px'}}>We restructured the homepage around two clear entry points. Retail visitors see: &apos;Need it fixed or installed today?&apos; Fleet visitors see: &apos;Managing multiple vehicles?&apos; Each path leads to a completely different offer and conversion flow. No visitor is confused about whether this business serves them.</div>
              </div>
            </div>
            <div style={{padding:'32px 0', borderBottom:'1px solid var(--border)', display:'flex', alignItems:'flex-start', gap:'32px'}}>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'32px', fontWeight:300, color:'var(--gold)', flexShrink:0, lineHeight:1, width:'48px'}}>02</div>
              <div>
                <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'20px', marginBottom:'10px'}}>The fleet money page</div>
                <div style={{fontSize:'13px', color:'var(--text-muted)', lineHeight:1.8, maxWidth:'600px'}}>This is the single highest-value page we built. It opens with fleet downtime costs: the specific pain a fleet manager feels: and moves through a structured argument for why Canopy Courier is the right partner. It closes on the Fleet Performance Package, a bundled offer that turns a one-off job into a managed service relationship. This page doesn&apos;t inform. It sells.</div>
              </div>
            </div>
            <div style={{padding:'32px 0', borderBottom:'1px solid var(--border)', display:'flex', alignItems:'flex-start', gap:'32px'}}>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'32px', fontWeight:300, color:'var(--gold)', flexShrink:0, lineHeight:1, width:'48px'}}>03</div>
              <div>
                <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'20px', marginBottom:'10px'}}>The Fleet Performance Package</div>
                <div style={{fontSize:'13px', color:'var(--text-muted)', lineHeight:1.8, maxWidth:'600px'}}>We structured a commercial offer that didn&apos;t previously exist. Priority turnaround, dedicated contact, bulk pricing, scheduled maintenance, emergency support, service records. Packaged and named. A fleet manager reading this isn&apos;t thinking about whether to use Canopy Courier: they&apos;re thinking about how to get this in front of their operations manager.</div>
              </div>
            </div>
            <div style={{padding:'32px 0', borderBottom:'1px solid var(--border)', display:'flex', alignItems:'flex-start', gap:'32px'}}>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'32px', fontWeight:300, color:'var(--gold)', flexShrink:0, lineHeight:1, width:'48px'}}>04</div>
              <div>
                <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'20px', marginBottom:'10px'}}>The SEO architecture</div>
                <div style={{fontSize:'13px', color:'var(--text-muted)', lineHeight:1.8, maxWidth:'600px'}}>Instead of one homepage trying to rank for everything and ranking for nothing, we built four dedicated landing pages each targeting a specific high-intent search: canopy repairs Durban, bakkie canopies for sale KZN, canopy fitment Durban, fleet canopy solutions SA. Each page is its own entry point for a buyer actively searching in that category.</div>
              </div>
            </div>
            <div style={{padding:'32px 0', borderBottom:'1px solid var(--border)', display:'flex', alignItems:'flex-start', gap:'32px'}}>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'32px', fontWeight:300, color:'var(--gold)', flexShrink:0, lineHeight:1, width:'48px'}}>05</div>
              <div>
                <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'20px', marginBottom:'10px'}}>Mobile conversion engineering</div>
                <div style={{fontSize:'13px', color:'var(--text-muted)', lineHeight:1.8, maxWidth:'600px'}}>A sticky call bar with WhatsApp, call, and quote buttons fixed at the bottom of every mobile screen. A floating WhatsApp button always visible. Segment-specific CTAs: retail gets same-day quote, fleet gets book a fleet assessment. Lead capture form with fleet-specific fields. Built for how the majority of South African web traffic actually behaves.</div>
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>

        <section style={{padding:'80px 60px'}} aria-labelledby="cdd-outcome">
          <h2 className="section-title" id="cdd-outcome">The outcome</h2>
          <p className="section-body">Canopy Courier now has a website that does more than exist. It qualifies visitors, separates retail from fleet, builds trust before the phone rings, and drives enquiries around the clock. The business looks like it operates at the level it actually operates at.</p>
          <p className="section-body" style={{marginTop:'20px'}}>The revenue modelling tells the real story. A single retail customer is worth R3,000–R8,000. A single fleet client: one company with ten vehicles on a maintenance contract: is worth R240,000 per year. Five fleet clients is R1.2M annually. The website we built is the infrastructure that makes those fleet relationships possible.</p>
          <blockquote style={{marginTop:'48px', paddingLeft:'24px', borderLeft:'2px solid var(--gold)', maxWidth:'560px'}}>
            <p style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(18px,2vw,24px)', fontWeight:300, fontStyle:'italic', lineHeight:1.5, color:'var(--text)'}}>One fleet client more than covers the entire cost of the project. Every fleet client after that is compounding return on a one-time investment.</p>
          </blockquote>
        </section>

        <div className="divider"></div>

        <section style={{padding:'80px 60px'}} aria-labelledby="cdd-lesson">
          <h2 className="section-title" id="cdd-lesson">The broader lesson</h2>
          <p className="section-body">Most businesses approaching a website rebuild are thinking about design. Better colours, a more modern layout, updated photos. Those things matter, but they&apos;re surface level. The real work is underneath: the strategic architecture, the offer clarity, the conversion paths, the trust signals.</p>
          <p className="section-body" style={{marginTop:'20px'}}>Canopy Courier didn&apos;t need a prettier website. They needed a smarter one. A website that understood their business model, identified the highest-value opportunity within it, and built the digital infrastructure to capture it. That&apos;s a different brief, and it produces a fundamentally different result.</p>
        </section>

        <div className="divider"></div>

        <section style={{padding:'80px 60px'}}>
          <div style={{background:'var(--surface)', border:'1px solid var(--border)', padding:'48px', maxWidth:'100%'}}>
            <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(22px,2.5vw,30px)', fontWeight:300, lineHeight:1.3, marginBottom:'20px', maxWidth:'580px'}}>Every business has a Canopy Courier opportunity. Most of them are invisible until someone looks properly.</div>
            <p style={{fontSize:'13px', color:'var(--text-muted)', lineHeight:1.9, maxWidth:'580px', marginBottom:'36px'}}>If you&apos;re reading this and wondering what your equivalent of the fleet opportunity might be: what revenue your current website is leaving untouched: that&apos;s exactly the conversation we start with. No obligation, no hard sell. Just an honest look at what&apos;s there.</p>
            <a className="btn-primary" href="https://wa.me/27712205313?text=Hi%20Luyanda%2C%20I%27d%20like%20to%20discuss%20a%20project%20with%20ADA." target="_blank" rel="noopener noreferrer" style={{position:'relative', zIndex:9999, display:'inline-block'}}>Let&apos;s talk</a>
          </div>
        </section>

        <div className="divider"></div>

        <Footer />
      </div>
    </>
  );
}
