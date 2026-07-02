import Link from 'next/link';
import Image from 'next/image';
import Nav from '../../components/Nav';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How We Built ACG: Next.js Migration Case Study | Asset Development Automation (ADA)',
  description: "From 1 indexed page to 29, ranking across 45 commercial searches in 7 weeks. The full documented story of how ADA built ACG's search presence from scratch - no paid ads.",
  alternates: {
    canonical: 'https://www.avaloncapitalgroup.co.za/ada/acg-case-study',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How We Built ACG: Next.js Migration Case Study | Asset Development Automation (ADA)',
    description: "From 1 indexed page to 29, ranking across 45 commercial searches in 7 weeks. The full documented story of how ADA built ACG's search presence from scratch - no paid ads.",
    images: ['https://avaloncapitalgroup.co.za/og-image.jpg'],
  },
};

export default function ACGCaseStudy() {
  return (
    <>
      <Nav />
      <div className="cs-root">
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Mono:wght@300;400;500&family=Syne:wght@400;500;600;700;800&display=swap');

          .cs-root * { box-sizing: border-box; }
          .cs-root { background: #0E0E0E; color: #F0EDE8; font-family: 'DM Mono', monospace; font-size: 14px; line-height: 1.7; overflow-x: hidden; }

          @keyframes fadeUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
          .anim-1 { animation: fadeUp 0.8s ease 0.15s both; }
          .anim-2 { animation: fadeUp 0.8s ease 0.3s both; }
          .anim-3 { animation: fadeUp 0.8s ease 0.5s both; }

          .cs-hero { min-height:92vh; display:flex; flex-direction:column; justify-content:flex-end; padding:80px 40px 80px; position:relative; overflow:hidden; }
          .cs-eyebrow { display:flex; align-items:center; gap:14px; margin-bottom:24px; }
          .cs-eyebrow-line { width:36px; height:1px; background:#C9A84C; flex-shrink:0; }
          .cs-eyebrow-text { font-size:11px; letter-spacing:0.16em; text-transform:uppercase; color:#C9A84C; }
          .cs-headline { font-family:'Cormorant Garamond',serif; font-size:clamp(38px,6vw,84px); font-weight:300; line-height:1.02; letter-spacing:-0.02em; color:#F0EDE8; max-width:860px; }
          .cs-headline em { font-style:italic; color:#C9A84C; }
          .cs-hero-sub { font-size:13px; color:#8A8680; line-height:1.8; max-width:520px; margin-top:24px; }
          .cs-hero-meta { display:flex; align-items:flex-end; justify-content:space-between; margin-top:52px; padding-top:28px; border-top:1px solid rgba(240,237,232,0.07); flex-wrap:wrap; gap:24px; }
          .cs-stat-group { display:flex; gap:36px; flex-wrap:wrap; align-items:center; }
          .cs-stat { display:flex; flex-direction:column; gap:4px; }
          .cs-stat-num { font-family:'Cormorant Garamond',serif; font-size:34px; font-weight:300; color:#F0EDE8; line-height:1; }
          .cs-stat-num.gold { color:#C9A84C; }
          .cs-stat-label { font-size:10px; letter-spacing:0.12em; text-transform:uppercase; color:#6B6560; }
          .cs-stat-div { width:1px; height:36px; background:rgba(240,237,232,0.07); }
          .cs-scroll-hint { display:flex; align-items:center; gap:10px; font-size:10px; letter-spacing:0.14em; text-transform:uppercase; color:#6B6560; }
          .cs-scroll-line { width:28px; height:1px; background:#6B6560; }

          .cs-strip { background:#141414; border-top:1px solid rgba(240,237,232,0.07); border-bottom:1px solid rgba(240,237,232,0.07); padding:48px 40px; display:flex; justify-content:center; gap:0; }
          .cs-strip-stat { flex:1; text-align:center; padding:0 28px; border-right:1px solid rgba(240,237,232,0.07); max-width:220px; }
          .cs-strip-stat:last-child { border-right:none; }
          .cs-strip-num { font-family:'Cormorant Garamond',serif; font-size:48px; font-weight:300; color:#C9A84C; line-height:1; display:block; }
          .cs-strip-label { font-size:10px; letter-spacing:0.12em; text-transform:uppercase; color:#6B6560; margin-top:6px; display:block; }

          .cs-divider { width:100%; height:1px; background:rgba(240,237,232,0.07); max-width:1100px; margin:0 auto; }

          .cs-section { max-width:1100px; margin:0 auto; padding:90px 40px; }
          .cs-section-label { display:flex; align-items:center; gap:12px; margin-bottom:44px; }
          .cs-label-num { font-size:10px; color:#C9A84C; letter-spacing:0.1em; font-family:'DM Mono',monospace; }
          .cs-label-line { width:28px; height:1px; background:rgba(201,168,76,0.3); }
          .cs-label-text { font-size:10px; letter-spacing:0.16em; text-transform:uppercase; color:#8A8680; font-family:'DM Mono',monospace; }
          .cs-section-h2 { font-family:'Cormorant Garamond',serif; font-size:clamp(30px,3.8vw,52px); font-weight:300; line-height:1.1; letter-spacing:-0.01em; color:#F0EDE8; max-width:680px; margin-bottom:28px; }
          .cs-section-h2 em { font-style:italic; color:#C9A84C; }
          .cs-body { font-size:13.5px; line-height:1.88; color:#8A8680; max-width:640px; }
          .cs-body + .cs-body { margin-top:20px; }

          .cs-problem-grid { display:grid; grid-template-columns:1fr 1fr; gap:2px; margin-top:52px; }
          .cs-card { background:#1A1A1A; padding:32px 28px; border:1px solid rgba(240,237,232,0.07); transition:border-color 0.3s; cursor:default; }
          .cs-card:hover { border-color:rgba(201,168,76,0.3); }
          .cs-card.hl { background:#1F1F1F; border-color:rgba(201,168,76,0.3); }
          .cs-card-icon { font-size:18px; margin-bottom:14px; }
          .cs-card-title { font-family:'Syne',sans-serif; font-size:14px; font-weight:600; color:#F0EDE8; margin-bottom:8px; }
          .cs-card-body { font-size:12px; color:#8A8680; line-height:1.75; }

          .cs-timeline { margin-top:64px; position:relative; }
          .cs-timeline::before { content:''; position:absolute; left:18px; top:0; bottom:0; width:1px; background:linear-gradient(to bottom, #C9A84C, transparent); }
          .cs-tl-item { display:grid; grid-template-columns:52px 1fr; gap:0 28px; margin-bottom:52px; opacity:0; transform:translateX(-10px); transition:all 0.55s ease; }
          .cs-tl-item.vis { opacity:1; transform:translateX(0); }
          .cs-tl-dot { display:flex; justify-content:center; padding-top:5px; }
          .cs-dot { width:9px; height:9px; border-radius:50%; background:#0E0E0E; border:1.5px solid #C9A84C; flex-shrink:0; }
          .cs-tl-phase { font-size:10px; letter-spacing:0.14em; text-transform:uppercase; color:#C9A84C; margin-bottom:7px; }
          .cs-tl-title { font-family:'Syne',sans-serif; font-size:16px; font-weight:600; color:#F0EDE8; margin-bottom:10px; }
          .cs-tl-body { font-size:12.5px; color:#8A8680; line-height:1.8; }
          .cs-tags { display:flex; flex-wrap:wrap; gap:7px; margin-top:12px; }
          .cs-tag { font-size:10px; letter-spacing:0.08em; text-transform:uppercase; color:#6B6560; background:#1A1A1A; border:1px solid rgba(240,237,232,0.07); padding:3px 9px; border-radius:2px; }

          .cs-diagnosis { background:#1A1A1A; border:1px solid rgba(240,237,232,0.07); border-left:3px solid #C9A84C; padding:40px; margin-top:52px; }
          .cs-diag-label { font-size:10px; letter-spacing:0.16em; text-transform:uppercase; color:#C9A84C; margin-bottom:14px; }
          .cs-diag-quote { font-family:'Cormorant Garamond',serif; font-size:24px; font-weight:300; font-style:italic; color:#F0EDE8; line-height:1.5; max-width:660px; }
          .cs-diag-body { margin-top:20px; font-size:13px; color:#8A8680; line-height:1.88; max-width:640px; }

          .cs-path { display:grid; grid-template-columns:repeat(3,1fr); gap:2px; margin-top:52px; }
          .cs-path-step { background:#1A1A1A; padding:32px 24px; border:1px solid rgba(240,237,232,0.07); cursor:default; transition:border-color 0.3s; }
          .cs-path-step:hover { border-color:rgba(201,168,76,0.3); }
          .cs-path-num { font-family:'Cormorant Garamond',serif; font-size:44px; font-weight:300; color:rgba(201,168,76,0.15); line-height:1; margin-bottom:14px; }
          .cs-path-title { font-family:'Syne',sans-serif; font-size:14px; font-weight:600; color:#F0EDE8; margin-bottom:9px; }
          .cs-path-body { font-size:12px; color:#8A8680; line-height:1.75; }

          .cs-tension { background:#1F1F1F; border:1px solid rgba(201,168,76,0.3); padding:56px 48px; position:relative; overflow:hidden; }
          .cs-tension::before { content:''; position:absolute; top:0; left:0; right:0; height:2px; background:linear-gradient(to right, #C9A84C, transparent); }
          .cs-tension-body { font-size:13px; color:#8A8680; line-height:1.9; max-width:660px; }
          .cs-tension-body + .cs-tension-body { margin-top:18px; }
          .cs-tension-stat { display:inline-flex; align-items:baseline; gap:8px; background:#1A1A1A; border:1px solid rgba(240,237,232,0.07); padding:16px 24px; margin-top:32px; }
          .cs-tension-stat-num { font-family:'Cormorant Garamond',serif; font-size:36px; font-weight:300; color:#C9A84C; line-height:1; }
          .cs-tension-stat-label { font-size:11px; letter-spacing:0.1em; text-transform:uppercase; color:#8A8680; }
          .cs-privacy-note { font-size:11px; color:#6B6560; font-style:italic; margin-top:20px; padding-top:20px; border-top:1px solid rgba(240,237,232,0.07); }

          .cs-deliverables { margin-top:52px; }
          .cs-del-row { display:grid; grid-template-columns:38px 1fr auto; gap:0 20px; align-items:start; padding:26px 0; border-bottom:1px solid rgba(240,237,232,0.07); opacity:0; transform:translateY(6px); transition:all 0.45s ease; }
          .cs-del-row.vis { opacity:1; transform:translateY(0); }
          .cs-del-num { font-size:11px; color:#C9A84C; padding-top:2px; font-family:'DM Mono',monospace; }
          .cs-del-title { font-family:'Syne',sans-serif; font-size:14px; font-weight:600; color:#F0EDE8; margin-bottom:5px; }
          .cs-del-body { font-size:12px; color:#8A8680; line-height:1.75; }
          .cs-badge { font-size:10px; letter-spacing:0.1em; text-transform:uppercase; padding:3px 9px; border-radius:2px; white-space:nowrap; margin-top:2px; }
          .cs-live { color:#6FCF97; background:rgba(111,207,151,0.08); border:1px solid rgba(111,207,151,0.2); }
          .cs-active { color:#C9A84C; background:rgba(201,168,76,0.15); border:1px solid rgba(201,168,76,0.3); }

          .cs-stack-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:2px; margin-top:52px; }
          .cs-stack-item { background:#1A1A1A; padding:26px 22px; border:1px solid rgba(240,237,232,0.07); display:flex; align-items:flex-start; gap:14px; transition:all 0.3s; cursor:default; }
          .cs-stack-item:hover { background:#1F1F1F; border-color:rgba(201,168,76,0.3); transform:translateY(-2px); }
          .cs-stack-icon { font-size:20px; flex-shrink:0; line-height:1; margin-top:1px; }
          .cs-stack-name { font-family:'Syne',sans-serif; font-size:13px; font-weight:600; color:#F0EDE8; margin-bottom:3px; }
          .cs-stack-role { font-size:11.5px; color:#8A8680; line-height:1.6; }

          .cs-ongoing-grid { display:grid; grid-template-columns:1fr 1fr; gap:2px; margin-top:52px; }
          .cs-img-pair { display:grid; grid-template-columns:1fr 1fr; gap:2px; margin-top:2px; }
          .cs-og-card { background:#1A1A1A; padding:32px 28px; border:1px solid rgba(240,237,232,0.07); }
          .cs-og-card.ac { border-color:rgba(201,168,76,0.3); background:#1F1F1F; }
          .cs-og-badge { display:inline-block; font-size:9px; letter-spacing:0.14em; text-transform:uppercase; color:#C9A84C; background:rgba(201,168,76,0.15); border:1px solid rgba(201,168,76,0.3); padding:2px 8px; margin-bottom:12px; }
          .cs-og-title { font-family:'Syne',sans-serif; font-size:15px; font-weight:600; color:#F0EDE8; margin-bottom:9px; }
          .cs-og-body { font-size:12px; color:#8A8680; line-height:1.75; }

          .cs-close { text-align:center; padding-bottom:120px; }
          .cs-close .cs-section-label { justify-content:center; }
          .cs-close-h2 { font-family:'Cormorant Garamond',serif; font-size:clamp(32px,4.5vw,62px); font-weight:300; line-height:1.05; letter-spacing:-0.02em; color:#F0EDE8; max-width:640px; margin:0 auto 28px; }
          .cs-close-h2 em { font-style:italic; color:#C9A84C; }
          .cs-close-body { font-size:13.5px; color:#8A8680; line-height:1.88; max-width:500px; margin:0 auto; }
          .cs-close-body + .cs-close-body { margin-top:16px; }

          .cs-founder-voice { background:#1A1A1A; border-left:3px solid #C9A84C; padding:28px 32px; max-width:640px; margin:40px auto 0; text-align:left; }
          .cs-founder-label { font-size:10px; letter-spacing:0.14em; text-transform:uppercase; color:#C9A84C; margin-bottom:10px; }
          .cs-founder-quote { font-family:'Cormorant Garamond',serif; font-size:20px; font-weight:300; font-style:italic; color:#F0EDE8; line-height:1.55; }

          .cs-btn-gold { display:inline-block; background:#C9A84C; color:#0E0E0E; font-family:'Syne',sans-serif; font-weight:700; font-size:12px; letter-spacing:0.1em; text-transform:uppercase; padding:15px 32px; text-decoration:none; transition:opacity 0.2s; cursor:pointer; border:none; }
          .cs-btn-gold:hover { opacity:0.85; }
          .cs-btn-outline { display:inline-block; background:transparent; color:#F0EDE8; font-family:'Syne',sans-serif; font-weight:600; font-size:12px; letter-spacing:0.1em; text-transform:uppercase; padding:15px 32px; text-decoration:none; border:1px solid rgba(240,237,232,0.07); transition:border-color 0.2s; cursor:pointer; }
          .cs-btn-outline:hover { border-color:rgba(201,168,76,0.3); }

          @media (max-width:768px) {
            .cs-hero { padding:60px 20px 60px; min-height:auto; padding-top:80px; }
            .cs-section { padding:60px 20px; }
            .cs-problem-grid, .cs-path, .cs-stack-grid, .cs-ongoing-grid, .cs-img-pair { grid-template-columns:1fr; }
            .cs-strip { flex-direction:column; gap:28px; align-items:center; }
            .cs-strip-stat { border-right:none; border-bottom:1px solid rgba(240,237,232,0.07); padding-bottom:28px; width:100%; max-width:100%; }
            .cs-strip-stat:last-child { border-bottom:none; }
            .cs-del-row { grid-template-columns:30px 1fr; }
            .cs-tension { padding:36px 24px; }
            .cs-stat-div { display:none; }
          }
        `}</style>

        {/* Hero */}
        <section className="cs-hero">
          <svg style={{position:'absolute',right:'-120px',top:'50%',transform:'translateY(-50%)',opacity:0.11,pointerEvents:'none',userSelect:'none',zIndex:1}} width="580" height="680" viewBox="0 0 580 680" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <g fill="none" stroke="#C9A84C" strokeWidth="0.8">
              <polygon points="290,20 560,640 20,640"/>
              <polygon points="290,80 510,600 70,600"/>
              <polygon points="290,140 460,560 120,560"/>
            </g>
          </svg>
          <Link className="back-btn" style={{position:'relative',zIndex:10,marginBottom:'32px',display:'inline-block'}} href="/ada">← Back to ADA</Link>
          <div className="cs-eyebrow anim-1">
            <div className="cs-eyebrow-line"></div>
            <span className="cs-eyebrow-text">Internal Build - avaloncapitalgroup.co.za</span>
          </div>
          <h1 className="cs-headline anim-2">
            The agency without a presence<br/>
            cannot sell presence.<br/>
            So we built ours first,<br/>
            in <em>fourteen days,</em><br/>
            and documented everything.
          </h1>
          <p className="cs-hero-sub anim-3">This is not a portfolio piece. It is a live record of how ADA thinks, builds, and solves: on our own problem, before yours.</p>
          <div className="cs-hero-meta anim-3">
            <div className="cs-stat-group">
              <div className="cs-stat">
                <span className="cs-stat-num gold">14</span>
                <span className="cs-stat-label">Days, full build</span>
              </div>
              <div className="cs-stat-div"></div>
              <div className="cs-stat">
                <span className="cs-stat-num">17</span>
                <span className="cs-stat-label">Pages unindexed at start</span>
              </div>
              <div className="cs-stat-div"></div>
              <div className="cs-stat">
                <span className="cs-stat-num">V2</span>
                <span className="cs-stat-label">Audit tool, same week</span>
              </div>
              <div className="cs-stat-div"></div>
              <div className="cs-stat">
                <span className="cs-stat-num">Live</span>
                <span className="cs-stat-label">In production today</span>
              </div>
            </div>
            <a className="cs-btn-gold" href="/contact">Start a Project</a>
            <div className="cs-scroll-hint">
              <div className="cs-scroll-line"></div>
              <span>Scroll</span>
            </div>
          </div>
        </section>

        {/* Top strip */}
        <div className="cs-strip">
          <div className="cs-strip-stat">
            <span className="cs-strip-num">4</span>
            <span className="cs-strip-label">Site sections built</span>
          </div>
          <div className="cs-strip-stat">
            <span className="cs-strip-num">5</span>
            <span className="cs-strip-label">Blog posts written</span>
          </div>
          <div className="cs-strip-stat">
            <span className="cs-strip-num">2</span>
            <span className="cs-strip-label">Full case studies</span>
          </div>
          <div className="cs-strip-stat">
            <span className="cs-strip-num">14 days</span>
            <span className="cs-strip-label">Concept to live</span>
          </div>
        </div>

        <div className="cs-divider"></div>

        {/* 01 — The Brief */}
        <div className="cs-section">
          <div className="cs-section-label">
            <span className="cs-label-num">01</span>
            <div className="cs-label-line"></div>
            <span className="cs-label-text">The Brief</span>
          </div>
          <h2 className="cs-section-h2">No website. No presence.<br/><em>No room for excuses.</em></h2>
          <p className="cs-body">Avalon Capital Group launched with conviction but no digital foundation. ACG operates two divisions - Vantara, an acquisition brokerage operating across vehicles, property, and assets, and ADA, Avalon Digital Agency. Neither had a live presence. No page to send a prospect to. No credibility signal for inbound leads. No way for Google to find us.</p>
          <p className="cs-body">The brief was simple and self-imposed: build the ACG digital ecosystem from scratch, document every decision, and use the process to sharpen ADA&apos;s own methodology. This site would become both our home base and our most detailed proof of work.</p>
          <div className="cs-problem-grid">
            <div className="cs-card">
              <div className="cs-card-icon">◈</div>
              <div className="cs-card-title">No web presence</div>
              <div className="cs-card-body">ACG and both divisions had zero online footprint. Inbound leads had nowhere to land. Word-of-mouth was the only channel.</div>
            </div>
            <div className="cs-card">
              <div className="cs-card-icon">◎</div>
              <div className="cs-card-title">No credibility infrastructure</div>
              <div className="cs-card-body">Two divisions doing real work - Vantara with active deal flow, ADA with a live client - but nothing to show for it publicly.</div>
            </div>
            <div className="cs-card">
              <div className="cs-card-icon">◻</div>
              <div className="cs-card-title">No positioning clarity</div>
              <div className="cs-card-body">ACG, Vantara, and ADA each speak to different audiences. The architecture needed to serve all three without dilution.</div>
            </div>
            <div className="cs-card hl">
              <div className="cs-card-icon">◆</div>
              <div className="cs-card-title">No Google visibility</div>
              <div className="cs-card-body">Even once built, the initial SPA architecture meant Googlebot could not read any page content. 17 pages unindexed. 1 indexed.</div>
            </div>
          </div>
        </div>

        <div className="cs-divider"></div>

        {/* 02 — Phase One */}
        <div className="cs-section">
          <div className="cs-section-label">
            <span className="cs-label-num">02</span>
            <div className="cs-label-line"></div>
            <span className="cs-label-text">Phase One - The Build</span>
          </div>
          <h2 className="cs-section-h2">Every section designed,<br/>written, and <em>shipped.</em></h2>
          <p className="cs-body">The site needed to do three things simultaneously: position ACG as a credible parent group, position Vantara as a serious brokerage operation, and position ADA as an agency worth hiring. Three audiences, one architecture, zero margin for a generic output.</p>
          <p className="cs-body">Design language was locked before a single line of code was written. Dark backgrounds, gold accents, editorial typography. Not because it looks premium - because it communicates that the people behind it make deliberate decisions. Every client who lands on this site sees the same rigour we would apply to theirs.</p>
          <p className="cs-body">The entire build - architecture, copy, case studies, blog posts, bug fixes, SEO groundwork - shipped in fourteen days. Not because corners were cut. Because the team runs on an AI-augmented workflow that eliminates the gap between decision and execution.</p>
          <div className="cs-timeline">
            <div className="cs-tl-item vis">
              <div className="cs-tl-dot"><div className="cs-dot"></div></div>
              <div>
                <div className="cs-tl-phase">Foundation</div>
                <div className="cs-tl-title">Brand, design system, architecture</div>
                <div className="cs-tl-body">Design language locked in before any code. ACG colour system established. Site architecture mapped across ACG home, Vantara, ADA, and Contact. Single index.html SPA deployed on Vercel from GitHub with auto-deploy on push.</div>
                <div className="cs-tags">
                  <span className="cs-tag">Design Direction</span>
                  <span className="cs-tag">Vercel</span>
                  <span className="cs-tag">GitHub</span>
                </div>
              </div>
            </div>
            <div className="cs-tl-item vis">
              <div className="cs-tl-dot"><div className="cs-dot"></div></div>
              <div>
                <div className="cs-tl-phase">Content build</div>
                <div className="cs-tl-title">All copy written and implemented</div>
                <div className="cs-tl-body">Full copywriting and build across every section: hero with authority strip, The Shift (AI awareness thesis), ADA methodology with four pillars, How We Work, pricing signal with three tiers, FAQ accordion, and a testimonial block using a real client quote. All WhatsApp CTAs wired to +27712205313 with pre-filled message context.</div>
                <div className="cs-tags">
                  <span className="cs-tag">Copywriting</span>
                  <span className="cs-tag">CTAs</span>
                  <span className="cs-tag">WhatsApp</span>
                </div>
              </div>
            </div>
            <div className="cs-tl-item vis">
              <div className="cs-tl-dot"><div className="cs-dot"></div></div>
              <div>
                <div className="cs-tl-phase">Depth content</div>
                <div className="cs-tl-title">Case studies, blog posts, founder presence</div>
                <div className="cs-tl-body">Five blog posts written and published to Insights. Full case study pages built for both clients - each with complete narrative and outcome framing. Digital business cards deployed for both founders at clean URLs. Founder section built with conviction-first positioning.</div>
                <div className="cs-tags">
                  <span className="cs-tag">Case Studies</span>
                  <span className="cs-tag">Blog Posts</span>
                  <span className="cs-tag">Digital Cards</span>
                </div>
              </div>
            </div>
            <div className="cs-tl-item vis">
              <div className="cs-tl-dot"><div className="cs-dot"></div></div>
              <div>
                <div className="cs-tl-phase">Bug resolution</div>
                <div className="cs-tl-title">Navigation, z-index, routing fixes</div>
                <div className="cs-tl-body">Back button navigation diagnosed and fixed. A global JavaScript event listener was calling showPage(&apos;home&apos;) on all .back-btn elements, overriding individual onclick handlers. Removed the listener; each button now relies on its own routing. Z-index stacking resolved. Mobile viewport corrected.</div>
                <div className="cs-tags">
                  <span className="cs-tag">JS Debug</span>
                  <span className="cs-tag">Routing</span>
                  <span className="cs-tag">Mobile</span>
                </div>
              </div>
            </div>
            <div className="cs-tl-item vis">
              <div className="cs-tl-dot"><div className="cs-dot"></div></div>
              <div>
                <div className="cs-tl-phase">SEO groundwork</div>
                <div className="cs-tl-title">Sitemaps, structured data, canonical URLs</div>
                <div className="cs-tl-body">Sitemap submitted to Google Search Console. Clean URL routing via Vercel rewrites. JSON-LD structured data added for Organization, LocalBusiness, and FAQ schema. Both avaloncapitalgroup.co.za and afripact.net submitted to GSC.</div>
                <div className="cs-tags">
                  <span className="cs-tag">Search Console</span>
                  <span className="cs-tag">JSON-LD</span>
                  <span className="cs-tag">Canonical</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="cs-divider"></div>

        {/* 03 — The Discovery */}
        <div className="cs-section">
          <div className="cs-section-label">
            <span className="cs-label-num">03</span>
            <div className="cs-label-line"></div>
            <span className="cs-label-text">The Discovery</span>
          </div>
          <h2 className="cs-section-h2">17 pages built.<br/><em>1 page visible</em> to Google.</h2>
          <div className="cs-diagnosis">
            <div className="cs-diag-label">Root cause - identified</div>
            <div className="cs-diag-quote">&ldquo;Googlebot reads static HTML before JavaScript executes. Every page was returning the same content.&rdquo;</div>
            <div className="cs-diag-body">GSC data showed a hard anomaly: 17 pages unindexed, 1 indexed. The investigation ran through three layers before hitting the root cause. First, a missing meta description update on route change. Then a bare canonical tag pointing nowhere. And finally the actual problem: the SPA was serving a single static index.html regardless of which URL was requested. When Googlebot hit /vantara, it received identical title, canonical, and body content as the homepage. Google correctly concluded they were duplicates and refused to index them.<br/><br/>This is the most common invisible failure in South African SME web builds. A site looks live. Analytics show visitors. The business owner believes they have a web presence. Google has indexed one page. Every service page, every location page, every piece of content - gone from search. The partial fixes applied to the HTML addressed symptoms, not cause. Only a structural change would fix it.</div>
          </div>
          <div className="cs-path">
            <div className="cs-path-step">
              <div className="cs-path-num">01</div>
              <div className="cs-path-title">Diagnose</div>
              <div className="cs-path-body">GSC data showed 1 indexed vs 17 unindexed. URL Inspection confirmed Googlebot was receiving identical HTML for every route. Dynamic head tags invisible to the crawler.</div>
            </div>
            <div className="cs-path-step">
              <div className="cs-path-num">02</div>
              <div className="cs-path-title">Decide</div>
              <div className="cs-path-body">A plain HTML SPA cannot solve this structurally. Migration to Next.js 14 App Router chosen - the same solution applied to Afripact, the same result expected. TypeScript selected for a greenfield migration.</div>
            </div>
            <div className="cs-path-step">
              <div className="cs-path-num">03</div>
              <div className="cs-path-title">Migrate</div>
              <div className="cs-path-body">Next.js 14 scaffolded in a dedicated nextjs-migration/ branch. API routes converted to Route Handlers. Each SPA page becoming its own server-rendered page.tsx with unique metadata export.</div>
            </div>
          </div>
        </div>

        <div className="cs-divider"></div>

        {/* 04 — The Problem Nobody Talks About */}
        <div className="cs-section" style={{paddingBottom:0}}>
          <div className="cs-section-label">
            <span className="cs-label-num">04</span>
            <div className="cs-label-line"></div>
            <span className="cs-label-text">The Problem Nobody Talks About</span>
          </div>
          <h2 className="cs-section-h2">The site was live.<br/>The offers page was built.<br/><em>We still needed a reason<br/>for strangers to talk to us.</em></h2>
        </div>
        <div style={{maxWidth:'1100px',margin:'0 auto',padding:'0 40px 90px'}}>
          <div className="cs-tension">
            <p className="cs-tension-body">A website without inbound is a brochure nobody picks up. The standard agency answer is paid advertising or cold outreach. Both cost money or time spent convincing someone who did not ask. Neither builds anything that compounds.</p>
            <p className="cs-tension-body">The answer we built was different: an AI-powered diagnostic tool that gives a business owner something genuinely valuable before we ask for anything. They submit their business details. The tool generates a scored report - revenue leakage calculated, specific gaps named, priority fixes ranked. The prospect does not receive a sales pitch. They receive a diagnosis.</p>
            <p className="cs-tension-body">Version one launched within the same week as the site. It was questionnaire-driven, scoring based on self-reported answers. Useful but limited. The problem became clear immediately: a business owner who says their website is &ldquo;okay&rdquo; might be serving a broken page to Google. Self-reporting cannot catch that.</p>
            <p className="cs-tension-body">Version two integrated live crawl data. The tool now fetches the submitted URL, parses the actual HTML, and extracts real metrics: meta description presence, H1 structure, image alt text, word count, internal links. It calls the PageSpeed Insights API for real Core Web Vitals. The report is no longer based on what the prospect thinks is happening. It is based on what is actually happening.</p>
            <p className="cs-tension-body">The first inbound lead arrived the same day the live crawl went live. Score: 1.8 out of 10. Bottom 15% of automotive businesses digitally. Estimated monthly revenue leakage: R20,000 to R37,000. They replied within the hour.</p>
            <div className="cs-tension-stat">
              <span className="cs-tension-stat-num">1.8</span>
              <span className="cs-tension-stat-label">First lead score / 10 - replied within the hour</span>
            </div>
            <p className="cs-privacy-note">* Client details are protected. A different name and business name have been used.</p>
          </div>
        </div>

        <div className="cs-divider"></div>

        {/* 05 — What Was Built */}
        <div className="cs-section">
          <div className="cs-section-label">
            <span className="cs-label-num">05</span>
            <div className="cs-label-line"></div>
            <span className="cs-label-text">What Was Built</span>
          </div>
          <h2 className="cs-section-h2">Every deliverable,<br/><em>documented.</em></h2>
          <div className="cs-deliverables">
            <div className="cs-del-row vis">
              <span className="cs-del-num">001</span>
              <div>
                <div className="cs-del-title">ACG Website - Full Build</div>
                <div className="cs-del-body">Complete site architecture and build. ACG home, Vantara division, ADA division, Contact. All copy written and implemented from scratch. Premium design language applied throughout.</div>
              </div>
              <span className="cs-badge cs-live">Live</span>
            </div>
            <div className="cs-del-row vis">
              <span className="cs-del-num">002</span>
              <div>
                <div className="cs-del-title">Vantara Division Page</div>
                <div className="cs-del-body">Full positioning and copy for the acquisition brokerage arm. Vehicles, property, assets. Advisory-first model communicated clearly. Audience-specific CTAs and WhatsApp routing.</div>
              </div>
              <span className="cs-badge cs-live">Live</span>
            </div>
            <div className="cs-del-row vis">
              <span className="cs-del-num">003</span>
              <div>
                <div className="cs-del-title">ADA Section - Full Methodology</div>
                <div className="cs-del-body">Four methodology pillars, three pricing tiers (Foundation, Growth, Authority), How We Work, testimonial block with real client quote, FAQ accordion, case study cards, and conversion-focused close section.</div>
              </div>
              <span className="cs-badge cs-live">Live</span>
            </div>
            <div className="cs-del-row vis">
              <span className="cs-del-num">004</span>
              <div>
                <div className="cs-del-title">Case Studies - Two Clients</div>
                <div className="cs-del-body">Dedicated full-page case studies for both clients. Complete narrative, context, and outcome framing. Linked from the ADA section with working back navigation.</div>
              </div>
              <span className="cs-badge cs-live">Live</span>
            </div>
            <div className="cs-del-row vis">
              <span className="cs-del-num">005</span>
              <div>
                <div className="cs-del-title">Insights Section - 5 Blog Posts</div>
                <div className="cs-del-body">Five original articles written and published. Covering AI in business, digital infrastructure, the South African SME opportunity, and ADA&apos;s positioning thesis. SEO-oriented content with long-term compounding intent.</div>
              </div>
              <span className="cs-badge cs-live">Live</span>
            </div>
            <div className="cs-del-row vis">
              <span className="cs-del-num">006</span>
              <div>
                <div className="cs-del-title">Digital Business Cards</div>
                <div className="cs-del-body">Founder digital business cards deployed at clean URLs. Tap or scan to open. Matching ACG design language. WhatsApp, call, and email actions built in.</div>
              </div>
              <span className="cs-badge cs-live">Live</span>
            </div>
            <div className="cs-del-row vis">
              <span className="cs-del-num">007</span>
              <div>
                <div className="cs-del-title">AI-Powered Audit Tool - V1 and V2</div>
                <div className="cs-del-body">13-step diagnostic tool. V1 launched questionnaire-driven, same week as site. V2 upgraded to live website crawl, PageSpeed API integration, and Supabase lead capture - all within days. Real data, not self-reported.</div>
              </div>
              <span className="cs-badge cs-live">Live</span>
            </div>
            <div className="cs-del-row vis">
              <span className="cs-del-num">008</span>
              <div>
                <div className="cs-del-title">Google Search Console Setup</div>
                <div className="cs-del-body">Both sites verified in GSC. Sitemaps submitted. URL inspection and manual indexing executed. Structured data (LocalBusiness, FAQ, Review schema) validated.</div>
              </div>
              <span className="cs-badge cs-live">Live</span>
            </div>
            <div className="cs-del-row vis">
              <span className="cs-del-num">009</span>
              <div>
                <div className="cs-del-title">Next.js 14 Migration</div>
                <div className="cs-del-body">Full migration to App Router with TypeScript and Tailwind. Scaffolded in dedicated branch. Each SPA page becoming a server-rendered page.tsx. The structural fix that took the site from 1 indexed page to 29.</div>
              </div>
              <span className="cs-badge cs-live">Live</span>
            </div>
          </div>
        </div>

        <div className="cs-divider"></div>

        {/* 06 — The Stack */}
        <div className="cs-section">
          <div className="cs-section-label">
            <span className="cs-label-num">06</span>
            <div className="cs-label-line"></div>
            <span className="cs-label-text">The Stack</span>
          </div>
          <h2 className="cs-section-h2">Built on tools that<br/><em>move fast</em> without breaking.</h2>
          <p className="cs-body">The same stack we recommend to clients. Two people, AI-augmented, no bureaucracy. Every tool earns its place.</p>
          <div className="cs-stack-grid">
            <div className="cs-stack-item">
              <div className="cs-stack-icon">⬡</div>
              <div>
                <div className="cs-stack-name">Next.js 14</div>
                <div className="cs-stack-role">App Router, TypeScript, Tailwind. Server-side rendering that solves the Googlebot problem permanently.</div>
              </div>
            </div>
            <div className="cs-stack-item">
              <div className="cs-stack-icon">△</div>
              <div>
                <div className="cs-stack-name">Vercel</div>
                <div className="cs-stack-role">Auto-deploy on push. Every GitHub commit goes live within seconds. No manual deployment steps.</div>
              </div>
            </div>
            <div className="cs-stack-item">
              <div className="cs-stack-icon">◎</div>
              <div>
                <div className="cs-stack-name">GitHub</div>
                <div className="cs-stack-role">Version control and deployment trigger. Branch-based workflow protects the live site during migration.</div>
              </div>
            </div>
            <div className="cs-stack-item">
              <div className="cs-stack-icon">◈</div>
              <div>
                <div className="cs-stack-name">Claude Code</div>
                <div className="cs-stack-role">AI-augmented development inside VS Code. The primary build instrument for this entire project.</div>
              </div>
            </div>
            <div className="cs-stack-item">
              <div className="cs-stack-icon">◻</div>
              <div>
                <div className="cs-stack-name">Google Search Console</div>
                <div className="cs-stack-role">Indexing diagnostics, structured data validation, sitemap submission. Where we caught the SPA failure.</div>
              </div>
            </div>
            <div className="cs-stack-item">
              <div className="cs-stack-icon">◆</div>
              <div>
                <div className="cs-stack-name">Supabase</div>
                <div className="cs-stack-role">Lead data from every audit completion stored and queryable. Every inbound lead is a briefing document before the first call.</div>
              </div>
            </div>
          </div>
        </div>

        <div className="cs-divider"></div>

        {/* 07 — What Comes Next */}
        <div className="cs-section">
          <div className="cs-section-label">
            <span className="cs-label-num">07</span>
            <div className="cs-label-line"></div>
            <span className="cs-label-text">What Comes Next</span>
          </div>
          <h2 className="cs-section-h2">The build is done.<br/><em>The compounding starts now.</em></h2>
          <p className="cs-body">This site is not finished - it is live and evolving. We treat our own presence the same way we treat client work: data informs the next move.</p>
          <div className="cs-ongoing-grid">
            <div className="cs-og-card ac">
              <div className="cs-og-badge">Complete</div>
              <div className="cs-og-title">Next.js migration - merging to main</div>
              <div className="cs-og-body">Migration shipped. Next.js App Router with TypeScript and Tailwind is now live on avaloncapitalgroup.co.za. Google went from 1 indexed page to 29 pages indexed within weeks of deployment.</div>
            </div>
            <div className="cs-og-card ac">
              <div className="cs-og-badge">Active</div>
              <div className="cs-og-title">Audit tool - live data expansion</div>
              <div className="cs-og-body">The crawl pipeline is live. Next integration pulls Google Places data - real review counts, ratings, profile completeness. Every dimension of the audit becomes evidence-based rather than self-reported.</div>
            </div>
            <div className="cs-og-card ac">
              <div className="cs-og-badge">Complete</div>
              <div className="cs-og-title">GSC indexing - full coverage</div>
              <div className="cs-og-body">29 pages indexed. Sitemap resubmitted, URL inspection completed across all key pages. The server-rendered build is being read and ranked by Google across 45 unique search queries.</div>
            </div>
            <div className="cs-og-card">
              <div className="cs-og-title">Desktop conversion analysis</div>
              <div className="cs-og-body">Analytics data showing desktop user behaviour patterns. Scroll depth, section engagement, and click-through rates being analysed to identify friction points and scope the next round of optimisation.</div>
            </div>
          </div>
        </div>

        <div className="cs-divider"></div>

        {/* 08 — The Results */}
        <div className="cs-section">
          <div className="cs-section-label">
            <span className="cs-label-num">08</span>
            <div className="cs-label-line"></div>
            <span className="cs-label-text">The Results</span>
          </div>
          <h2 className="cs-section-h2">The build worked.<br/><em>Here is the proof.</em></h2>
          <p className="cs-body">Seven weeks after migration, with no paid ads and no Google Business Profile, the site went from invisible to ranking across forty-five commercial searches. Every number below is a live screenshot from Google Search Console. These are the results we build for clients through our <Link href="/ada/seo-agency-durban" style={{color:'#C9A84C',textDecoration:'none'}}>SEO services in Durban</Link>.</p>
          <div className="cs-strip" style={{marginTop:'52px'}}>
            <div className="cs-strip-stat">
              <span className="cs-strip-num">1 → 29</span>
              <span className="cs-strip-label">Pages indexed by Google</span>
            </div>
            <div className="cs-strip-stat">
              <span className="cs-strip-num">15 days</span>
              <span className="cs-strip-label">To first re-index after migration</span>
            </div>
            <div className="cs-strip-stat">
              <span className="cs-strip-num">R0</span>
              <span className="cs-strip-label">Spent on ads</span>
            </div>
          </div>
          <div className="cs-img-pair">
            <div style={{background:'#1A1A1A',border:'1px solid rgba(240,237,232,0.07)',padding:'2px'}}>
              <Image alt="GSC indexing before migration" loading="lazy" width={964} height={347} style={{color:'transparent',width:'100%',height:'auto',display:'block'}} src="/case-study/gsc-indexing-before.png"/>
              <p style={{fontSize:'11px',color:'#6B6560',padding:'10px 12px',fontStyle:'italic',margin:0}}>Before migration: 1 page indexed, 19 blocked as duplicates.</p>
            </div>
            <div style={{background:'#1A1A1A',border:'1px solid rgba(240,237,232,0.07)',padding:'2px'}}>
              <Image alt="GSC indexing after migration" loading="lazy" width={901} height={421} style={{color:'transparent',width:'100%',height:'auto',display:'block'}} src="/case-study/gsc-indexing-after.png"/>
              <p style={{fontSize:'11px',color:'#6B6560',padding:'10px 12px',fontStyle:'italic',margin:0}}>Seven weeks later: 29 pages indexed and climbing.</p>
            </div>
          </div>
          <div className="cs-strip" style={{marginTop:'64px'}}>
            <div className="cs-strip-stat">
              <span className="cs-strip-num">1,120</span>
              <span className="cs-strip-label">Impressions</span>
            </div>
            <div className="cs-strip-stat">
              <span className="cs-strip-num">45</span>
              <span className="cs-strip-label">Unique search queries</span>
            </div>
            <div className="cs-strip-stat">
              <span className="cs-strip-num">33</span>
              <span className="cs-strip-label">Clicks, zero ad spend</span>
            </div>
          </div>
          <div style={{marginTop:'2px'}}>
            <div style={{background:'#1A1A1A',border:'1px solid rgba(240,237,232,0.07)',padding:'2px'}}>
              <Image alt="GSC performance overview" loading="lazy" width={951} height={370} style={{color:'transparent',width:'100%',height:'auto',display:'block'}} src="/case-study/gsc-performance-after.png"/>
              <p style={{fontSize:'11px',color:'#6B6560',padding:'10px 12px',fontStyle:'italic',margin:0}}>Google Search Console, 13 April to 3 June 2026.</p>
            </div>
            <div style={{background:'#1A1A1A',border:'1px solid rgba(240,237,232,0.07)',padding:'2px',marginTop:'2px'}}>
              <Image alt="GSC performance early period" loading="lazy" width={951} height={356} style={{color:'transparent',width:'100%',height:'auto',display:'block'}} src="/case-study/gsc-performance-early.png"/>
              <p style={{fontSize:'11px',color:'#6B6560',padding:'10px 12px',fontStyle:'italic',margin:0}}>Two weeks in: 79 impressions. The starting line.</p>
            </div>
          </div>
          <p className="cs-body" style={{marginTop:'28px'}}>Average position moved from 5.1 to 20.2 over this period. That is not a decline. Early on the site ranked for two or three branded searches where appearing first is automatic. It now appears for forty-five queries, including competitive commercial terms. More queries, harder queries, real visibility. And all of it before a Google Business Profile is even in place.</p>
          <div className="cs-strip" style={{marginTop:'64px'}}>
            <div className="cs-strip-stat">
              <span className="cs-strip-num">20–60</span>
              <span className="cs-strip-label">Daily impressions, holding</span>
            </div>
            <div className="cs-strip-stat">
              <span className="cs-strip-num">7 weeks</span>
              <span className="cs-strip-label">Live and compounding</span>
            </div>
          </div>
          <div style={{marginTop:'2px'}}>
            <div style={{background:'#1A1A1A',border:'1px solid rgba(240,237,232,0.07)',padding:'2px'}}>
              <Image alt="GSC daily impressions" loading="lazy" width={940} height={526} style={{color:'transparent',width:'100%',height:'auto',display:'block'}} src="/case-study/gsc-daily.png"/>
              <p style={{fontSize:'11px',color:'#6B6560',padding:'10px 12px',fontStyle:'italic',margin:0}}>Daily impressions holding steady through late May and early June.</p>
            </div>
          </div>
        </div>

        <div className="cs-divider"></div>

        {/* 09 — The Point */}
        <div className="cs-section cs-close">
          <div className="cs-section-label" style={{justifyContent:'center'}}>
            <span className="cs-label-num">09</span>
            <div className="cs-label-line"></div>
            <span className="cs-label-text">The Point</span>
          </div>
          <h2 className="cs-close-h2">This is our process<br/>working on our own problem.<br/><em>Imagine it working on yours.</em></h2>
          <p className="cs-close-body">Every methodology on this page is the same process we run for clients. The difference is you watched us apply it to ourselves - the diagnosis, the rebuild, the outreach system built from scratch in the same week the site went live.</p>
          <p className="cs-close-body">We showed you the stack because the stack is not what you are buying. You are buying the judgment to know when a partial fix is not enough. The speed to move from diagnosis to deployed solution in the same week. The understanding of how a business actually converts.</p>
          <div className="cs-founder-voice">
            <div className="cs-founder-label">Founder - Luyanda, ACG</div>
            <div className="cs-founder-quote">&ldquo;ADA is a two-person team running at a pace most agencies cannot match with ten. That is not a claim. This page is the evidence.&rdquo;</div>
          </div>
          <div style={{marginTop:'52px',display:'flex',justifyContent:'center',gap:'14px',flexWrap:'wrap'}}>
            <a className="cs-btn-gold" href="https://wa.me/27712205313?text=Hi%2C%20I%27d%20like%20to%20discuss%20a%20project%20with%20ADA">Start a Project</a>
            <a className="cs-btn-outline" href="/audit">Try the Audit Tool</a>
          </div>
          <p style={{fontSize:'12px',color:'#6B6560',marginTop:'20px',letterSpacing:'0.05em'}}>Prefer a written brief? <Link style={{color:'#C9A84C',textDecoration:'none'}} href="/contact">Send us a message.</Link></p>
        </div>

        <footer>
          <div className="footer-logo">Avalon Capital Group</div>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/vantara">Vantara</a></li>
            <li><a href="/ada">ADA</a></li>
          </ul>
          <div className="footer-copy">&copy; 2026 Avalon Capital Group</div>
          <div style={{width:'100%',paddingTop:'20px',borderTop:'1px solid var(--border)',marginTop:'4px'}}>
            <p style={{fontSize:'11px',color:'var(--text-dim)',marginBottom:'8px'}}>Avalon Capital Group (Pty) Ltd &middot; Reg. No. 2025/671885/07 &middot; Durban, KwaZulu-Natal, South Africa &middot; <a href="mailto:hello@avaloncapitalgroup.co.za" style={{color:'var(--text-dim)',textDecoration:'none'}}>hello@avaloncapitalgroup.co.za</a></p>
            <p style={{fontSize:'12px',color:'var(--text-dim)',lineHeight:1.7,marginBottom:'12px'}}>Avalon Capital Group does not provide financial, investment, or legal advice. All information shared is for general informational purposes only. Clients are encouraged to consult with licensed professionals before making any investment or business decisions.</p>
            <p style={{fontSize:'11px'}}>
              <a href="/privacy-policy" style={{color:'var(--gold)',textDecoration:'none',marginRight:'24px'}}>Privacy Policy</a>
              <a href="/terms-of-service" style={{color:'var(--gold)',textDecoration:'none'}}>Terms of Service</a>
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
