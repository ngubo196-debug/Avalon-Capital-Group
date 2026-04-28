'use client';

import Link from 'next/link';
import { useState } from 'react';
import Nav from '../components/Nav';

const pillars = [
  {name:'Copy & messaging', score:5.5, finding:'Pronoun errors, placeholder text, and generic phrasing on a patient-facing dental practice site.'},
  {name:'SEO', score:4.5, finding:'No meta descriptions. Basic title tags. Duplicate content and placeholders damaging search signals.'},
  {name:'AEO readiness', score:4.0, finding:'FAQ page exists but lacks depth. No structured Q&A for voice or AI search.'},
  {name:'Schema markup', score:1.0, finding:'None detected. No Dentist, LocalBusiness, or FAQPage schema. Critical gap for a dental practice.'},
  {name:'Conversion & funnel', score:5.0, finding:'Contact details present but no booking system, no trust signals, no patient testimonials or credentials displayed.'},
  {name:'Landing pages', score:5.0, finding:'Core pages exist but lack polish, imagery, or depth. Placeholder elements throughout.'},
  {name:'Design & UX', score:4.5, finding:'Template look with visible builder branding. No clear patient journey or trust-building visuals.'},
  {name:'Technical health', score:5.0, finding:'HTTPS active. No analytics. No privacy policy. No HPCSA registration displayed. High compliance risk.'}
];

function scoreColor(s: number) {
  if (s <= 3) return '#c0392b';
  if (s <= 5) return 'var(--gold)';
  if (s <= 7) return '#8a9e5a';
  return '#4a9e6a';
}

type ModalType = 'free' | 'paid' | 'foundation' | 'growth' | 'authority' | null;

const modalConfig: Record<NonNullable<ModalType>, {title:string; sub:string; note:string; btn:string; showSvc:boolean}> = {
  free:       {title:'Request your free audit',     sub:'Limited slots per week. Answer three quick questions below.',  note:'48-hour turnaround',           btn:'Submit request',  showSvc:false},
  paid:       {title:'Book your deep-dive audit',   sub:'R2,500 ex VAT · Full report + 45-min walkthrough call.',       note:"We'll confirm via WhatsApp.",   btn:'Book audit',      showSvc:false},
  foundation: {title:'Get started — Foundation',   sub:'Tell us about your business and what you need.',               note:"We'll follow up within 24 hours.", btn:'Send enquiry', showSvc:true},
  growth:     {title:'Get started — Growth',        sub:'Tell us about your business and what you need.',               note:"We'll follow up within 24 hours.", btn:'Send enquiry', showSvc:true},
  authority:  {title:'Get started — Authority',     sub:'Tell us about your business and what you need.',               note:"We'll follow up within 24 hours.", btn:'Send enquiry', showSvc:true},
};

export default function Offers() {
  const [modalType, setModalType] = useState<ModalType>(null);
  const [accepted, setAccepted] = useState(false);
  const [success, setSuccess] = useState(false);
  const [bizName, setBizName] = useState('');
  const [frustration, setFrustration] = useState('');
  const [revenue, setRevenue] = useState('');
  const [svc, setSvc] = useState('');

  function openModal(t: NonNullable<ModalType>) {
    setModalType(t);
    setAccepted(false);
    setSuccess(false);
    setBizName('');
    setFrustration('');
    setRevenue('');
    if (t === 'foundation') setSvc('Foundation');
    else if (t === 'growth') setSvc('Growth');
    else if (t === 'authority') setSvc('Authority');
    else setSvc('');
  }

  function closeModal() {
    setModalType(null);
    setSuccess(false);
  }

  async function submitModal() {
    if (!accepted || !bizName || !frustration) return;
    const cfg = modalType ? modalConfig[modalType] : null;
    if (!cfg) return;
    const labels: Record<NonNullable<ModalType>, string> = {free:'Free audit request', paid:'Paid audit booking', foundation:'Foundation enquiry', growth:'Growth enquiry', authority:'Authority enquiry'};
    const label = modalType ? labels[modalType] : 'Enquiry';
    let msg = `${label}\n\nBusiness: ${bizName}\nFrustration: ${frustration}`;
    if (revenue) msg += `\nRevenue: ${revenue}`;
    if (svc) msg += `\nService tier: ${svc}`;
    const waUrl = `https://wa.me/27712205313?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, '_blank');
    setSuccess(true);
  }

  const cfg = modalType ? modalConfig[modalType] : null;

  return (
    <>
      <Nav />
      <div id="page-offers" className="page" role="main">

        <style suppressHydrationWarning>{`
          #page-offers .offers-check-grid { display:grid; grid-template-columns:1fr 1fr; gap:1px; background:var(--border); margin:40px 0 32px; }
          #page-offers .offers-check { background:var(--surface); padding:28px; display:flex; gap:14px; align-items:flex-start; }
          #page-offers .offers-check-dot { width:5px; height:5px; border-radius:50%; background:var(--gold); margin-top:7px; flex-shrink:0; }
          #page-offers .offers-check-title { font-size:13px; color:var(--text); display:block; margin-bottom:4px; }
          #page-offers .offers-check-sub { font-size:12px; color:var(--text-muted); line-height:1.6; }
          #page-offers .offers-meta { display:flex; gap:24px; font-size:11px; color:var(--text-dim); letter-spacing:0.06em; flex-wrap:wrap; margin-bottom:28px; }
          #page-offers .offers-inc li { padding:12px 0; border-bottom:1px solid var(--border); font-size:13px; color:var(--text-muted); list-style:none; display:flex; align-items:center; gap:14px; line-height:1.7; }
          #page-offers .offers-inc li::before { content:''; width:16px; height:1px; background:var(--gold); flex-shrink:0; }
          #page-offers .offers-inc li strong { color:var(--text); font-weight:400; }
          #page-offers .offers-diag li { padding:12px 0; border-bottom:1px solid var(--surface,#161616); font-size:14px; color:var(--text-muted); list-style:none; display:flex; align-items:flex-start; gap:14px; line-height:1.7; }
          #page-offers .offers-diag li::before { content:''; width:4px; height:4px; border-radius:50%; background:var(--gold-dim); flex-shrink:0; margin-top:9px; }
          #page-offers .offers-tier-popular { font-size:8px; letter-spacing:0.2em; text-transform:uppercase; color:var(--gold); margin-bottom:8px; }
          #page-offers .offers-tier-name { font-family:'Cormorant Garamond',serif; font-size:24px; font-weight:400; margin-bottom:10px; }
          #page-offers .offers-tier-desc { font-size:13px; color:var(--text-muted); line-height:1.7; margin-bottom:14px; min-height:52px; }
          #page-offers .offers-tier-line { font-family:'Cormorant Garamond',serif; font-size:13px; font-style:italic; color:var(--gold); margin-bottom:24px; }
          #page-offers .offers-pillar { display:grid; grid-template-columns:160px 1fr 44px; align-items:center; gap:14px; margin-bottom:6px; }
          #page-offers .offers-bar-track { height:4px; background:var(--surface2,#1e1e1e); border-radius:2px; overflow:hidden; }
          #page-offers .offers-bar-fill { height:100%; border-radius:2px; }
          #page-offers .offers-pillar-score { font-family:'Cormorant Garamond',serif; font-size:16px; font-weight:300; text-align:right; }
          #page-offers .offers-finding { background:var(--black); border-left:2px solid rgba(201,168,76,0.3); padding:8px 14px; margin-top:3px; margin-bottom:14px; border-radius:0 2px 2px 0; }
          #page-offers .offers-finding-flag { font-size:9px; letter-spacing:0.18em; text-transform:uppercase; color:var(--gold); display:block; margin-bottom:3px; }
          #page-offers .offers-finding-text { font-size:12px; color:#b8b4b0; line-height:1.6; }
          @media (max-width:768px) {
            #page-offers .offers-check-grid { grid-template-columns:1fr; }
            #page-offers .offers-pillar { grid-template-columns:100px 1fr 36px; }
            .offers-tiers-grid { grid-template-columns:1fr !important; }
            .offers-vantara-grid { grid-template-columns:1fr !important; }
          }
        `}</style>

        {/* Inner hero */}
        <div className="inner-hero">
          <svg className="inner-hero-geo" style={{position:'absolute', right:'-120px', top:'50%', transform:'translateY(-50%)', opacity:0.11, pointerEvents:'none', zIndex:1}} width="580" height="680" viewBox="0 0 580 680" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" stroke="#C9A84C" strokeWidth="0.8">
              <polygon points="290,20 560,640 20,640"/>
              <polygon points="290,80 510,600 70,600"/>
              <polygon points="290,140 460,560 120,560"/>
            </g>
          </svg>
          <div className="inner-hero-bg" aria-hidden="true"></div>
          <Link className="back-btn" href="/ada" style={{position:'relative', zIndex:9999}}>Back to ADA</Link>
          <p style={{fontSize:'10px', letterSpacing:'0.22em', textTransform:'uppercase', color:'var(--gold)', marginBottom:'16px', position:'relative', zIndex:2}}>Avalon Digital Agency &middot; Durban, KZN</p>
          <h1 style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(38px,5.5vw,72px)', fontWeight:300, lineHeight:1.08, maxWidth:'700px', marginBottom:'28px', position:'relative', zIndex:2}}>
            If your website isn&rsquo;t<br />generating leads,<br /><em style={{fontStyle:'italic', color:'var(--gold-light)'}}>it&rsquo;s not doing its job.</em>
          </h1>
          <p style={{fontSize:'14px', color:'var(--text-muted)', lineHeight:1.9, maxWidth:'480px', position:'relative', zIndex:2}}>Most business websites look good. Most of them don&rsquo;t bring in business. Find out which one yours is.</p>
        </div>

        <div className="divider"></div>

        {/* 01 Free audit */}
        <section aria-labelledby="offers-free">
          <div className="section-label">ADA &middot; Website audits</div>
          <div style={{display:'inline-block', fontSize:'9px', letterSpacing:'0.18em', textTransform:'uppercase', color:'var(--gold)', border:'1px solid var(--gold-dim)', padding:'4px 14px', marginBottom:'20px'}}>Free</div>
          <h2 className="section-title" id="offers-free">Website Health Check</h2>
          <p className="section-body" style={{maxWidth:'580px', marginBottom:0}}>Most websites don&rsquo;t fail visually. They fail quietly. They sit online, get traffic, and still — nothing happens. No enquiries. No consistent leads. No real return. This quick audit shows you if your website is actually working, or quietly costing you opportunities.</p>

          <div className="offers-check-grid">
            <div className="offers-check"><div className="offers-check-dot"></div><div><span className="offers-check-title">Search visibility</span><span className="offers-check-sub">Why you&rsquo;re not showing up when people look for what you offer</span></div></div>
            <div className="offers-check"><div className="offers-check-dot"></div><div><span className="offers-check-title">AEO readiness</span><span className="offers-check-sub">Whether Google and AI tools can actually understand your business</span></div></div>
            <div className="offers-check"><div className="offers-check-dot"></div><div><span className="offers-check-title">Messaging &amp; structure</span><span className="offers-check-sub">What&rsquo;s making people hesitate, leave, or ignore you</span></div></div>
            <div className="offers-check"><div className="offers-check-dot"></div><div><span className="offers-check-title">Technical performance</span><span className="offers-check-sub">Speed, mobile experience, and hidden visibility issues</span></div></div>
          </div>

          <div className="offers-meta">
            <span>Clear scorecard with key issues</span>
            <span>&middot;</span>
            <span>48-hour turnaround</span>
            <span>&middot;</span>
            <span>Limited slots per week</span>
          </div>

          <Link href="/audit" className="btn-primary" style={{position:'relative', zIndex:2}}>Get your free audit</Link>
        </section>

        <div className="divider"></div>

        {/* 02 Scorecard demo */}
        <section aria-labelledby="offers-scorecard">
          <div className="section-label">What we typically find</div>
          <div style={{background:'var(--surface)', border:'1px solid var(--border)', padding:'44px', maxWidth:'780px'}}>
            <p style={{fontSize:'12px', color:'#787470', fontStyle:'italic', marginBottom:'24px', letterSpacing:'0.04em'}}>Coastal Smile Dental &middot; Umhlanga, KZN &middot; Audited April 2026</p>
            <div style={{display:'flex', alignItems:'flex-start', justifyContent:'space-between', flexWrap:'wrap', gap:'20px', marginBottom:'32px'}}>
              <div>
                <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(44px,6vw,60px)', fontWeight:300, color:'var(--gold)', lineHeight:1}}>4.8<span style={{fontSize:'clamp(22px,3vw,30px)', color:'var(--text-muted)'}}>/10</span></div>
                <div style={{fontSize:'9px', letterSpacing:'0.2em', textTransform:'uppercase', color:'var(--text-muted)', marginTop:'6px'}}>Overall score</div>
              </div>
              <p style={{fontSize:'13px', color:'var(--text-muted)', maxWidth:'340px', lineHeight:1.8}}>A dental practice open for over 8 years. Their website has been quietly turning patients away the entire time.</p>
            </div>
            <div>
              {pillars.map((p, i) => (
                <div key={i}>
                  <div className="offers-pillar">
                    <span style={{fontSize:'12px', color:'var(--text)'}}>{p.name}</span>
                    <div className="offers-bar-track">
                      <div className="offers-bar-fill" style={{width:`${(p.score/10*100).toFixed(0)}%`, background:scoreColor(p.score)}}></div>
                    </div>
                    <span className="offers-pillar-score" style={{color:scoreColor(p.score)}}>{p.score.toFixed(1)}</span>
                  </div>
                  <div className="offers-finding">
                    <span className="offers-finding-flag">Key finding</span>
                    <span className="offers-finding-text">{p.finding}</span>
                  </div>
                </div>
              ))}
            </div>
            <div style={{marginTop:'28px', paddingTop:'24px', borderTop:'1px solid var(--border)'}}>
              <p style={{fontSize:'13px', color:'var(--text-muted)', lineHeight:1.8}}>Builder promotional text — <em>&ldquo;Build any site you can imagine&hellip;&rdquo;</em> — was live on patient-facing pages. The practice&rsquo;s own bio described the principal dentist as <em>&ldquo;a specialist in his field.&rdquo;</em> Patients booking dental procedures at coastalsmiledental.co.za were seeing this.</p>
            </div>
          </div>
        </section>

        <div className="divider"></div>

        {/* 03 Paid audit */}
        <section aria-labelledby="offers-paid">
          <div className="section-label">Deep-dive audit</div>
          <div style={{display:'inline-block', fontSize:'9px', letterSpacing:'0.18em', textTransform:'uppercase', color:'var(--gold)', border:'1px solid var(--gold-dim)', padding:'4px 14px', marginBottom:'20px'}}>R2,500 ex VAT</div>
          <h2 className="section-title" id="offers-paid">Website Performance Audit</h2>
          <p style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(18px,2vw,22px)', fontStyle:'italic', color:'var(--gold-light)', marginBottom:'20px', lineHeight:1.4}}>If your website isn&rsquo;t consistently bringing in leads, there&rsquo;s a reason. And right now, you don&rsquo;t see it.</p>
          <p className="section-body" style={{maxWidth:'580px', marginBottom:0}}>This audit shows you exactly where you&rsquo;re losing business, why it&rsquo;s happening, and what needs to change first. No fluff. No theory. Just clarity.</p>
          <ul className="offers-inc" style={{margin:'28px 0 8px', padding:0}}>
            <li><strong>Full audit</strong> across all performance pillars</li>
            <li><strong>Competitor comparison</strong> — 2&ndash;3 local businesses benchmarked</li>
            <li><strong>Prioritised action plan</strong> — what to fix first, what can wait</li>
            <li><strong>30-minute strategy walkthrough</strong> — we break it all down with you</li>
          </ul>
          <p style={{fontSize:'12px', color:'var(--gold)', fontStyle:'italic', marginBottom:'28px'}}>One missed client can cost more than this audit.</p>
          <button className="btn-primary" onClick={() => openModal('paid')} style={{position:'relative', zIndex:2}}>Book your audit</button>
        </section>

        <div className="divider"></div>

        {/* 04 Diagnosis */}
        <section aria-labelledby="offers-diag">
          <div className="section-label">Does this sound familiar?</div>
          <h2 className="section-title" id="offers-diag">If any of this applies, your<br />website has a problem.</h2>
          <p className="section-body" style={{marginBottom:0}}>And it&rsquo;s probably costing you more than you realise.</p>
          <ul className="offers-diag" style={{margin:'28px 0 32px', padding:0}}>
            <li>You&rsquo;re getting traffic but no enquiries</li>
            <li>You rely on referrals because your website doesn&rsquo;t deliver</li>
            <li>You&rsquo;ve never had consistent lead flow from your site</li>
            <li>You&rsquo;re not sure if your website is even working</li>
            <li>You paid for a website and still can&rsquo;t point to a single client it brought in</li>
          </ul>
          <p style={{fontSize:'13px', color:'var(--text-dim)', lineHeight:1.8, maxWidth:'560px', fontStyle:'italic'}}>Every day your website isn&rsquo;t converting, you&rsquo;re losing potential clients to competitors who are easier to find and easier to trust.</p>
        </section>

        <div className="divider"></div>

        {/* 05 ADA tiers */}
        <section aria-labelledby="offers-tiers">
          <div className="section-label">ADA &middot; Build your digital presence</div>
          <h2 className="section-title" id="offers-tiers">If the audit shows what&rsquo;s broken,<br /><em>ADA builds the version that works.</em></h2>
          <p className="section-body" style={{marginBottom:0}}>Your website shouldn&rsquo;t just exist. It should be bringing in business consistently.</p>
          <div className="offers-tiers-grid" style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'1px', background:'var(--border)', margin:'40px 0 16px'}}>
            <div style={{background:'var(--surface)', padding:'40px'}}>
              <div className="offers-tier-name">Foundation</div>
              <div className="offers-tier-desc">A clean, high-performance website built properly from day one.</div>
              <div className="offers-tier-line">The right foundation changes everything.</div>
              <button className="btn-primary" onClick={() => openModal('foundation')} style={{position:'relative', zIndex:2, padding:'12px 24px'}}>Get started</button>
            </div>
            <div style={{background:'var(--surface)', padding:'40px', borderLeft:'1px solid rgba(201,168,76,0.2)', borderRight:'1px solid rgba(201,168,76,0.2)'}}>
              <div className="offers-tier-popular">Most popular</div>
              <div className="offers-tier-name">Growth</div>
              <div className="offers-tier-desc">SEO, AEO, and content structured to rank and bring in leads.</div>
              <div className="offers-tier-line">Built to be found. Built to perform.</div>
              <button className="btn-primary" onClick={() => openModal('growth')} style={{position:'relative', zIndex:2, padding:'12px 24px'}}>Get started</button>
            </div>
            <div style={{background:'var(--surface)', padding:'40px'}}>
              <div className="offers-tier-name">Authority</div>
              <div className="offers-tier-desc">Full-scale digital execution for businesses that want to dominate their space.</div>
              <div className="offers-tier-line">Stop competing. Start leading.</div>
              <button className="btn-primary" onClick={() => openModal('authority')} style={{position:'relative', zIndex:2, padding:'12px 24px'}}>Get started</button>
            </div>
          </div>
          <p style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'15px', fontStyle:'italic', color:'var(--gold)'}}>Not sure where you fit? The free audit will tell you.</p>
        </section>

        <div className="divider"></div>

        {/* 06 Final CTA */}
        <section aria-labelledby="offers-cta">
          <div style={{background:'var(--surface2)', border:'1px solid var(--border)', padding:'72px 60px', textAlign:'center', maxWidth:'100%'}}>
            <p style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(26px,3.5vw,44px)', fontWeight:300, color:'var(--text)', marginBottom:'12px'}} id="offers-cta">You already paid for a website.</p>
            <p style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(17px,2.2vw,26px)', fontWeight:300, color:'var(--text-muted)', marginBottom:'40px'}}>Now find out if it&rsquo;s actually bringing you business.</p>
            <div style={{display:'flex', gap:'24px', justifyContent:'center', flexWrap:'wrap'}}>
              <Link href="/audit" className="btn-primary" style={{position:'relative', zIndex:2}}>Get your free audit</Link>
              <a href="https://wa.me/27712205313?text=Hi%2C%20I%27m%20not%20sure%20where%20to%20start%20%E2%80%94%20can%20you%20help%3F" target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{position:'relative', zIndex:2}}>Chat on WhatsApp</a>
            </div>
          </div>
        </section>

        <div className="divider"></div>

        {/* 07 Vantara crosslink */}
        <section aria-labelledby="offers-vantara">
          <div className="section-label">Vantara &middot; Vehicle acquisition</div>
          <div style={{background:'var(--surface)', border:'1px solid var(--border)', padding:'44px'}}>
            <div className="offers-vantara-grid" style={{display:'grid', gridTemplateColumns:'1fr auto', gap:'40px', alignItems:'center'}}>
              <div>
                <h2 style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(22px,2.5vw,30px)', fontWeight:300, marginBottom:'14px'}} id="offers-vantara">Looking to acquire a vehicle?</h2>
                <p style={{fontSize:'14px', color:'var(--text-muted)', lineHeight:1.85, marginBottom:'8px'}}>Vantara handles the search, the negotiation, and the paperwork — so you don&rsquo;t have to. Tell us what you&rsquo;re looking for. We source it, vet it, and put you in the driver&rsquo;s seat without the dealership runaround.</p>
                <p style={{fontSize:'12px', color:'var(--text-dim)', fontStyle:'italic'}}>Available to private buyers and businesses.</p>
              </div>
              <div style={{flexShrink:0}}>
                <a href="https://wa.me/27712205313?text=Hi%2C%20I%27d%20like%20to%20start%20a%20vehicle%20search%20with%20Vantara." target="_blank" rel="noopener noreferrer" className="btn-primary" style={{whiteSpace:'nowrap', position:'relative', zIndex:2}}>Start your search</a>
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>

        <footer style={{borderTop:'1px solid var(--border)', padding:'40px 60px', display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:'16px'}}>
          <p style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'14px', letterSpacing:'0.1em', color:'var(--text-muted)'}}><strong style={{color:'var(--gold)', fontWeight:400}}>ADA</strong> — A Division of Avalon Capital Group</p>
          <p style={{fontSize:'11px', color:'var(--text-muted)', letterSpacing:'0.06em'}}>Durban, KwaZulu-Natal &middot; South Africa</p>
          <div style={{width:'100%', paddingTop:'20px', borderTop:'1px solid var(--border)', marginTop:'4px'}}>
            <p style={{fontSize:'11px', color:'var(--text-dim)', marginBottom:'8px'}}>Avalon Capital Group (Pty) Ltd &middot; Reg. No. 2025/671885/07 &middot; Durban, KwaZulu-Natal, South Africa</p>
            <p style={{fontSize:'12px', color:'var(--text-dim)', lineHeight:1.7, marginBottom:'12px'}}>Avalon Capital Group does not provide financial, investment, or legal advice. All information shared is for general informational purposes only. Clients are encouraged to consult with licensed professionals before making any investment or business decisions.</p>
            <p style={{fontSize:'11px'}}><Link href="/privacy-policy" style={{color:'var(--gold)', textDecoration:'none', marginRight:'24px'}}>Privacy Policy</Link><Link href="/terms-of-service" style={{color:'var(--gold)', textDecoration:'none'}}>Terms of Service</Link></p>
          </div>
        </footer>

      </div>

      {/* Modal */}
      {modalType && cfg && (
        <div
          style={{display:'flex', position:'fixed', inset:0, background:'rgba(10,10,10,0.92)', alignItems:'center', justifyContent:'center', padding:'20px', zIndex:9000}}
          onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}
        >
          <div style={{background:'var(--surface)', border:'1px solid var(--border-hover)', padding:'44px', width:'100%', maxWidth:'520px', position:'relative'}}>
            <button onClick={closeModal} style={{position:'absolute', top:'16px', right:'20px', background:'none', border:'none', color:'var(--text-dim)', fontSize:'20px', cursor:'pointer', lineHeight:1, padding:'4px'}}>&#215;</button>

            {!success ? (
              <div>
                <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'28px', fontWeight:300, marginBottom:'6px'}}>{cfg.title}</div>
                <div style={{fontSize:'12px', color:'var(--text-muted)', marginBottom:'28px', letterSpacing:'0.04em'}}>{cfg.sub}</div>

                <div className="form-group">
                  <label className="form-label">Business name &amp; industry</label>
                  <input className="form-input" type="text" value={bizName} onChange={e => setBizName(e.target.value)} placeholder="e.g. Coastal Smile Dental" />
                </div>
                <div className="form-group">
                  <label className="form-label">Biggest frustration with your current website</label>
                  <textarea className="form-textarea" value={frustration} onChange={e => setFrustration(e.target.value)} placeholder="e.g. We get traffic but nobody contacts us."></textarea>
                </div>
                <div className="form-group">
                  <label className="form-label">Monthly revenue range <span style={{color:'var(--text-dim)', fontStyle:'italic', textTransform:'none', letterSpacing:0}}>(optional)</span></label>
                  <select className="form-select" value={revenue} onChange={e => setRevenue(e.target.value)}>
                    <option value="">Prefer not to say</option>
                    <option>Under R50k/month</option>
                    <option>R50k – R150k/month</option>
                    <option>R150k – R500k/month</option>
                    <option>R500k+/month</option>
                  </select>
                </div>
                {cfg.showSvc && (
                  <div className="form-group">
                    <label className="form-label">Which tier are you interested in?</label>
                    <select className="form-select" value={svc} onChange={e => setSvc(e.target.value)}>
                      <option>Foundation</option>
                      <option>Growth</option>
                      <option>Authority</option>
                      <option>Not sure yet</option>
                    </select>
                  </div>
                )}
                <div className="form-group" style={{marginTop:'20px'}}>
                  <label style={{display:'flex', alignItems:'flex-start', gap:'12px', cursor:'pointer', fontSize:'12px', color:'var(--text-muted)', lineHeight:1.7}}>
                    <input
                      type="checkbox"
                      checked={accepted}
                      onChange={e => setAccepted(e.target.checked)}
                      style={{flexShrink:0, marginTop:'3px', accentColor:'var(--gold)', width:'15px', height:'15px', cursor:'pointer'}}
                    />
                    I have read and agree to the <Link href="/privacy-policy" target="_blank" rel="noopener noreferrer" style={{color:'var(--gold)', textDecoration:'none', marginLeft:'4px'}}>Privacy Policy</Link>. I understand my information will be used to respond to my enquiry.
                  </label>
                </div>
                <div style={{marginTop:'24px', display:'flex', justifyContent:'space-between', alignItems:'center', gap:'16px', flexWrap:'wrap'}}>
                  <span style={{fontSize:'11px', color:'var(--text-dim)', fontStyle:'italic'}}>{cfg.note}</span>
                  <button
                    className="form-submit"
                    onClick={submitModal}
                    disabled={!accepted}
                    style={{width:'auto', padding:'14px 32px', opacity: accepted ? 1 : 0.4, cursor: accepted ? 'pointer' : 'not-allowed'}}
                  >
                    {cfg.btn}
                  </button>
                </div>
              </div>
            ) : (
              <div style={{textAlign:'center', padding:'2rem 0'}}>
                <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'2.2rem', color:'var(--gold)', marginBottom:'14px'}}>&#10003;</div>
                <h4 style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'24px', fontWeight:300, marginBottom:'8px'}}>Request received.</h4>
                <p style={{fontSize:'13px', color:'var(--text-muted)'}}>We&rsquo;ll be in touch within 48 hours via WhatsApp.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
