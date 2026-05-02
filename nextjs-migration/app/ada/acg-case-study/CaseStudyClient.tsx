'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

const gold = '#C9A84C';
const goldDim = 'rgba(201,168,76,0.15)';
const goldLine = 'rgba(201,168,76,0.3)';
const bg = '#0E0E0E';
const charcoal = '#141414';
const box = '#1A1A1A';
const box2 = '#1F1F1F';
const white = '#F0EDE8';
const muted = '#6B6560';
const muted2 = '#8A8680';
const border = 'rgba(240,237,232,0.07)';

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Mono:wght@300;400;500&family=Syne:wght@400;500;600;700;800&display=swap');

  .cs-root * { box-sizing: border-box; }
  .cs-root { background: ${bg}; color: ${white}; font-family: 'DM Mono', monospace; font-size: 14px; line-height: 1.7; overflow-x: hidden; }

  @keyframes fadeUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }

  .anim-1 { animation: fadeUp 0.8s ease 0.15s both; }
  .anim-2 { animation: fadeUp 0.8s ease 0.3s both; }
  .anim-3 { animation: fadeUp 0.8s ease 0.5s both; }

  .cs-hero { min-height:92vh; display:flex; flex-direction:column; justify-content:flex-end; padding:80px 40px 80px; position:relative; overflow:hidden; }
  .cs-hero-bg { position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); font-family:'Cormorant Garamond',serif; font-size:clamp(80px,16vw,220px); font-weight:300; color:rgba(201,168,76,0.03); white-space:nowrap; user-select:none; pointer-events:none; letter-spacing:-0.02em; }
  .cs-eyebrow { display:flex; align-items:center; gap:14px; margin-bottom:24px; }
  .cs-eyebrow-line { width:36px; height:1px; background:${gold}; flex-shrink:0; }
  .cs-eyebrow-text { font-size:11px; letter-spacing:0.16em; text-transform:uppercase; color:${gold}; }
  .cs-headline { font-family:'Cormorant Garamond',serif; font-size:clamp(38px,6vw,84px); font-weight:300; line-height:1.02; letter-spacing:-0.02em; color:${white}; max-width:860px; }
  .cs-headline em { font-style:italic; color:${gold}; }
  .cs-hero-sub { font-size:13px; color:${muted2}; line-height:1.8; max-width:520px; margin-top:24px; }
  .cs-hero-meta { display:flex; align-items:flex-end; justify-content:space-between; margin-top:52px; padding-top:28px; border-top:1px solid ${border}; flex-wrap:wrap; gap:24px; }
  .cs-stat-group { display:flex; gap:36px; flex-wrap:wrap; align-items:center; }
  .cs-stat { display:flex; flex-direction:column; gap:4px; }
  .cs-stat-num { font-family:'Cormorant Garamond',serif; font-size:34px; font-weight:300; color:${white}; line-height:1; }
  .cs-stat-num.gold { color:${gold}; }
  .cs-stat-label { font-size:10px; letter-spacing:0.12em; text-transform:uppercase; color:${muted}; }
  .cs-stat-div { width:1px; height:36px; background:${border}; }
  .cs-scroll-hint { display:flex; align-items:center; gap:10px; font-size:10px; letter-spacing:0.14em; text-transform:uppercase; color:${muted}; }
  .cs-scroll-line { width:28px; height:1px; background:${muted}; }

  .cs-strip { background:${charcoal}; border-top:1px solid ${border}; border-bottom:1px solid ${border}; padding:48px 40px; display:flex; justify-content:center; gap:0; }
  .cs-strip-stat { flex:1; text-align:center; padding:0 28px; border-right:1px solid ${border}; max-width:220px; }
  .cs-strip-stat:last-child { border-right:none; }
  .cs-strip-num { font-family:'Cormorant Garamond',serif; font-size:48px; font-weight:300; color:${gold}; line-height:1; display:block; }
  .cs-strip-label { font-size:10px; letter-spacing:0.12em; text-transform:uppercase; color:${muted}; margin-top:6px; display:block; }

  .cs-divider { width:100%; height:1px; background:${border}; max-width:1100px; margin:0 auto; }

  .cs-section { max-width:1100px; margin:0 auto; padding:90px 40px; }
  .cs-section-label { display:flex; align-items:center; gap:12px; margin-bottom:44px; }
  .cs-label-num { font-size:10px; color:${gold}; letter-spacing:0.1em; font-family:'DM Mono',monospace; }
  .cs-label-line { width:28px; height:1px; background:${goldLine}; }
  .cs-label-text { font-size:10px; letter-spacing:0.16em; text-transform:uppercase; color:${muted2}; font-family:'DM Mono',monospace; }
  .cs-section-h2 { font-family:'Cormorant Garamond',serif; font-size:clamp(30px,3.8vw,52px); font-weight:300; line-height:1.1; letter-spacing:-0.01em; color:${white}; max-width:680px; margin-bottom:28px; }
  .cs-section-h2 em { font-style:italic; color:${gold}; }
  .cs-body { font-size:13.5px; line-height:1.88; color:${muted2}; max-width:640px; }
  .cs-body + .cs-body { margin-top:20px; }

  .cs-problem-grid { display:grid; grid-template-columns:1fr 1fr; gap:2px; margin-top:52px; }
  .cs-card { background:${box}; padding:32px 28px; border:1px solid ${border}; transition:border-color 0.3s; cursor:default; }
  .cs-card:hover { border-color:${goldLine}; }
  .cs-card.hl { background:${box2}; border-color:${goldLine}; }
  .cs-card-icon { font-size:18px; margin-bottom:14px; }
  .cs-card-title { font-family:'Syne',sans-serif; font-size:14px; font-weight:600; color:${white}; margin-bottom:8px; }
  .cs-card-body { font-size:12px; color:${muted2}; line-height:1.75; }

  .cs-timeline { margin-top:64px; position:relative; }
  .cs-timeline::before { content:''; position:absolute; left:18px; top:0; bottom:0; width:1px; background:linear-gradient(to bottom, ${gold}, transparent); }
  .cs-tl-item { display:grid; grid-template-columns:52px 1fr; gap:0 28px; margin-bottom:52px; opacity:0; transform:translateX(-10px); transition:all 0.55s ease; }
  .cs-tl-item.vis { opacity:1; transform:translateX(0); }
  .cs-tl-dot { display:flex; justify-content:center; padding-top:5px; }
  .cs-dot { width:9px; height:9px; border-radius:50%; background:${bg}; border:1.5px solid ${gold}; flex-shrink:0; }
  .cs-tl-phase { font-size:10px; letter-spacing:0.14em; text-transform:uppercase; color:${gold}; margin-bottom:7px; }
  .cs-tl-title { font-family:'Syne',sans-serif; font-size:16px; font-weight:600; color:${white}; margin-bottom:10px; }
  .cs-tl-body { font-size:12.5px; color:${muted2}; line-height:1.8; }
  .cs-tags { display:flex; flex-wrap:wrap; gap:7px; margin-top:12px; }
  .cs-tag { font-size:10px; letter-spacing:0.08em; text-transform:uppercase; color:${muted}; background:${box}; border:1px solid ${border}; padding:3px 9px; border-radius:2px; }

  .cs-diagnosis { background:${box}; border:1px solid ${border}; border-left:3px solid ${gold}; padding:40px; margin-top:52px; }
  .cs-diag-label { font-size:10px; letter-spacing:0.16em; text-transform:uppercase; color:${gold}; margin-bottom:14px; }
  .cs-diag-quote { font-family:'Cormorant Garamond',serif; font-size:24px; font-weight:300; font-style:italic; color:${white}; line-height:1.5; max-width:660px; }
  .cs-diag-body { margin-top:20px; font-size:13px; color:${muted2}; line-height:1.88; max-width:640px; }

  .cs-path { display:grid; grid-template-columns:repeat(3,1fr); gap:2px; margin-top:52px; }
  .cs-path-step { background:${box}; padding:32px 24px; border:1px solid ${border}; cursor:default; transition:border-color 0.3s; }
  .cs-path-step:hover { border-color:${goldLine}; }
  .cs-path-num { font-family:'Cormorant Garamond',serif; font-size:44px; font-weight:300; color:${goldDim}; line-height:1; margin-bottom:14px; }
  .cs-path-title { font-family:'Syne',sans-serif; font-size:14px; font-weight:600; color:${white}; margin-bottom:9px; }
  .cs-path-body { font-size:12px; color:${muted2}; line-height:1.75; }

  .cs-tension { background:${box2}; border:1px solid ${goldLine}; padding:56px 48px; margin-top:0; position:relative; overflow:hidden; }
  .cs-tension::before { content:''; position:absolute; top:0; left:0; right:0; height:2px; background:linear-gradient(to right, ${gold}, transparent); }
  .cs-tension-h3 { font-family:'Cormorant Garamond',serif; font-size:clamp(26px,3vw,40px); font-weight:300; line-height:1.15; color:${white}; max-width:600px; margin-bottom:28px; }
  .cs-tension-h3 em { font-style:italic; color:${gold}; }
  .cs-tension-body { font-size:13px; color:${muted2}; line-height:1.9; max-width:660px; }
  .cs-tension-body + .cs-tension-body { margin-top:18px; }
  .cs-tension-stat { display:inline-flex; align-items:baseline; gap:8px; background:${box}; border:1px solid ${border}; padding:16px 24px; margin-top:32px; }
  .cs-tension-stat-num { font-family:'Cormorant Garamond',serif; font-size:36px; font-weight:300; color:${gold}; line-height:1; }
  .cs-tension-stat-label { font-size:11px; letter-spacing:0.1em; text-transform:uppercase; color:${muted2}; }
  .cs-privacy-note { font-size:11px; color:${muted}; font-style:italic; margin-top:20px; padding-top:20px; border-top:1px solid ${border}; }

  .cs-deliverables { margin-top:52px; }
  .cs-del-row { display:grid; grid-template-columns:38px 1fr auto; gap:0 20px; align-items:start; padding:26px 0; border-bottom:1px solid ${border}; opacity:0; transform:translateY(6px); transition:all 0.45s ease; }
  .cs-del-row.vis { opacity:1; transform:translateY(0); }
  .cs-del-num { font-size:11px; color:${gold}; padding-top:2px; font-family:'DM Mono',monospace; }
  .cs-del-title { font-family:'Syne',sans-serif; font-size:14px; font-weight:600; color:${white}; margin-bottom:5px; }
  .cs-del-body { font-size:12px; color:${muted2}; line-height:1.75; }
  .cs-badge { font-size:10px; letter-spacing:0.1em; text-transform:uppercase; padding:3px 9px; border-radius:2px; white-space:nowrap; margin-top:2px; }
  .cs-live { color:#6FCF97; background:rgba(111,207,151,0.08); border:1px solid rgba(111,207,151,0.2); }
  .cs-active { color:${gold}; background:${goldDim}; border:1px solid ${goldLine}; }

  .cs-stack-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:2px; margin-top:52px; }
  .cs-stack-item { background:${box}; padding:26px 22px; border:1px solid ${border}; display:flex; align-items:flex-start; gap:14px; transition:all 0.3s; cursor:default; }
  .cs-stack-item:hover { background:${box2}; border-color:${goldLine}; transform:translateY(-2px); }
  .cs-stack-icon { font-size:20px; flex-shrink:0; line-height:1; margin-top:1px; }
  .cs-stack-name { font-family:'Syne',sans-serif; font-size:13px; font-weight:600; color:${white}; margin-bottom:3px; }
  .cs-stack-role { font-size:11.5px; color:${muted2}; line-height:1.6; }

  .cs-ongoing-grid { display:grid; grid-template-columns:1fr 1fr; gap:2px; margin-top:52px; }
  .cs-og-card { background:${box}; padding:32px 28px; border:1px solid ${border}; }
  .cs-og-card.ac { border-color:${goldLine}; background:${box2}; }
  .cs-og-badge { display:inline-block; font-size:9px; letter-spacing:0.14em; text-transform:uppercase; color:${gold}; background:${goldDim}; border:1px solid ${goldLine}; padding:2px 8px; margin-bottom:12px; }
  .cs-og-title { font-family:'Syne',sans-serif; font-size:15px; font-weight:600; color:${white}; margin-bottom:9px; }
  .cs-og-body { font-size:12px; color:${muted2}; line-height:1.75; }

  .cs-close { text-align:center; padding-bottom:120px; }
  .cs-close .cs-section-label { justify-content:center; }
  .cs-close-h2 { font-family:'Cormorant Garamond',serif; font-size:clamp(32px,4.5vw,62px); font-weight:300; line-height:1.05; letter-spacing:-0.02em; color:${white}; max-width:640px; margin:0 auto 28px; }
  .cs-close-h2 em { font-style:italic; color:${gold}; }
  .cs-close-body { font-size:13.5px; color:${muted2}; line-height:1.88; max-width:500px; margin:0 auto; }
  .cs-close-body + .cs-close-body { margin-top:16px; }

  .cs-founder-voice { background:${box}; border-left:3px solid ${gold}; padding:28px 32px; max-width:640px; margin:40px auto 0; text-align:left; }
  .cs-founder-label { font-size:10px; letter-spacing:0.14em; text-transform:uppercase; color:${gold}; margin-bottom:10px; }
  .cs-founder-quote { font-family:'Cormorant Garamond',serif; font-size:20px; font-weight:300; font-style:italic; color:${white}; line-height:1.55; }

  .cs-btn-gold { display:inline-block; background:${gold}; color:${bg}; font-family:'Syne',sans-serif; font-weight:700; font-size:12px; letter-spacing:0.1em; text-transform:uppercase; padding:15px 32px; text-decoration:none; transition:opacity 0.2s; cursor:pointer; border:none; }
  .cs-btn-gold:hover { opacity:0.85; }
  .cs-btn-outline { display:inline-block; background:transparent; color:${white}; font-family:'Syne',sans-serif; font-weight:600; font-size:12px; letter-spacing:0.1em; text-transform:uppercase; padding:15px 32px; text-decoration:none; border:1px solid ${border}; transition:border-color 0.2s; cursor:pointer; }
  .cs-btn-outline:hover { border-color:${goldLine}; }

  @media (max-width:768px) {
    .cs-hero { padding:60px 20px 60px; min-height:auto; padding-top:80px; }
    .cs-section { padding:60px 20px; }
    .cs-problem-grid, .cs-path, .cs-stack-grid, .cs-ongoing-grid { grid-template-columns:1fr; }
    .cs-strip { flex-direction:column; gap:28px; align-items:center; }
    .cs-strip-stat { border-right:none; border-bottom:1px solid ${border}; padding-bottom:28px; width:100%; max-width:100%; }
    .cs-strip-stat:last-child { border-bottom:none; }
    .cs-del-row { grid-template-columns:30px 1fr; }
    .cs-tension { padding:36px 24px; }
    .cs-stat-div { display:none; }
    .cs-hero-bg { font-size:80px; }
  }
`;

const SectionLabel = ({ num, text, center }: { num: string; text: string; center?: boolean }) => (
  <div className="cs-section-label" style={center ? { justifyContent: 'center' } : {}}>
    <span className="cs-label-num">{num}</span>
    <div className="cs-label-line" />
    <span className="cs-label-text">{text}</span>
  </div>
);

const useInView = (ref: React.RefObject<HTMLElement | null>, delay = 0) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setTimeout(() => setVisible(true), delay);
        obs.disconnect();
      }
    }, { threshold: 0.08 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref, delay]);
  return visible;
};

const TLItem = ({ phase, title, body, tags, delay = 0 }: { phase: string; title: string; body: string; tags: string[]; delay?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const vis = useInView(ref, delay);
  return (
    <div ref={ref} className={`cs-tl-item${vis ? ' vis' : ''}`}>
      <div className="cs-tl-dot"><div className="cs-dot" /></div>
      <div>
        <div className="cs-tl-phase">{phase}</div>
        <div className="cs-tl-title">{title}</div>
        <div className="cs-tl-body">{body}</div>
        <div className="cs-tags">{tags.map(t => <span key={t} className="cs-tag">{t}</span>)}</div>
      </div>
    </div>
  );
};

const DelRow = ({ num, title, body, status, delay = 0 }: { num: string; title: string; body: string; status: string; delay?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const vis = useInView(ref, delay);
  return (
    <div ref={ref} className={`cs-del-row${vis ? ' vis' : ''}`}>
      <span className="cs-del-num">{num}</span>
      <div>
        <div className="cs-del-title">{title}</div>
        <div className="cs-del-body">{body}</div>
      </div>
      <span className={`cs-badge ${status === 'Live' ? 'cs-live' : 'cs-active'}`}>{status}</span>
    </div>
  );
};

export default function CaseStudyClient() {
  return (
    <>
      <Nav />
      <div className="cs-root">
        <style suppressHydrationWarning>{styles}</style>

        {/* HERO */}
        <section className="cs-hero">
          <div className="cs-hero-bg">ACG</div>
          <Link className="back-btn" href="/ada" style={{ position: 'relative', zIndex: 10, marginBottom: '32px', display: 'inline-block' }}>← Back to ADA</Link>
          <div className="cs-eyebrow anim-1">
            <div className="cs-eyebrow-line" />
            <span className="cs-eyebrow-text">Internal Build — avaloncapitalgroup.co.za</span>
          </div>
          <h1 className="cs-headline anim-2">
            The agency without a presence<br />
            cannot sell presence.<br />
            So we built ours first,<br />
            in <em>fourteen days,</em><br />
            and documented everything.
          </h1>
          <p className="cs-hero-sub anim-3">
            This is not a portfolio piece. It is a live record of how ADA thinks, builds, and solves — on our own problem, before yours.
          </p>
          <div className="cs-hero-meta anim-3">
            <div className="cs-stat-group">
              <div className="cs-stat">
                <span className="cs-stat-num gold">14</span>
                <span className="cs-stat-label">Days, full build</span>
              </div>
              <div className="cs-stat-div" />
              <div className="cs-stat">
                <span className="cs-stat-num">17</span>
                <span className="cs-stat-label">Pages unindexed at start</span>
              </div>
              <div className="cs-stat-div" />
              <div className="cs-stat">
                <span className="cs-stat-num">V2</span>
                <span className="cs-stat-label">Audit tool, same week</span>
              </div>
              <div className="cs-stat-div" />
              <div className="cs-stat">
                <span className="cs-stat-num">Live</span>
                <span className="cs-stat-label">In production today</span>
              </div>
            </div>
            <div className="cs-scroll-hint"><div className="cs-scroll-line" /><span>Scroll</span></div>
          </div>
        </section>

        {/* STRIP */}
        <div className="cs-strip">
          {[['4', 'Site sections built'], ['5', 'Blog posts written'], ['2', 'Full case studies'], ['14 days', 'Concept to live']].map(([n, l]) => (
            <div key={l} className="cs-strip-stat">
              <span className="cs-strip-num">{n}</span>
              <span className="cs-strip-label">{l}</span>
            </div>
          ))}
        </div>

        <div className="cs-divider" />

        {/* 01 BRIEF */}
        <div className="cs-section">
          <SectionLabel num="01" text="The Brief" />
          <h2 className="cs-section-h2">No website. No presence.<br /><em>No room for excuses.</em></h2>
          <p className="cs-body">
            Avalon Capital Group launched with conviction but no digital foundation. ACG operates two divisions - Vantara, an acquisition brokerage operating across vehicles, property, and assets, and ADA, Avalon Digital Agency. Neither had a live presence. No page to send a prospect to. No credibility signal for inbound leads. No way for Google to find us.
          </p>
          <p className="cs-body">
            The brief was simple and self-imposed: build the ACG digital ecosystem from scratch, document every decision, and use the process to sharpen ADA&apos;s own methodology. This site would become both our home base and our most detailed proof of work.
          </p>
          <div className="cs-problem-grid">
            {[
              ['◈', 'No web presence', 'ACG and both divisions had zero online footprint. Inbound leads had nowhere to land. Word-of-mouth was the only channel.', false],
              ['◎', 'No credibility infrastructure', 'Two divisions doing real work - Vantara with active deal flow, ADA with a live client - but nothing to show for it publicly.', false],
              ['◻', 'No positioning clarity', 'ACG, Vantara, and ADA each speak to different audiences. The architecture needed to serve all three without dilution.', false],
              ['◆', 'No Google visibility', 'Even once built, the initial SPA architecture meant Googlebot could not read any page content. 17 pages unindexed. 1 indexed.', true],
            ].map(([icon, title, body, hl]) => (
              <div key={title as string} className={`cs-card${hl ? ' hl' : ''}`}>
                <div className="cs-card-icon">{icon}</div>
                <div className="cs-card-title">{title}</div>
                <div className="cs-card-body">{body}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="cs-divider" />

        {/* 02 BUILD */}
        <div className="cs-section">
          <SectionLabel num="02" text="Phase One — The Build" />
          <h2 className="cs-section-h2">Every section designed,<br />written, and <em>shipped.</em></h2>
          <p className="cs-body">
            The site needed to do three things simultaneously: position ACG as a credible parent group, position Vantara as a serious brokerage operation, and position ADA as an agency worth hiring. Three audiences, one architecture, zero margin for a generic output.
          </p>
          <p className="cs-body">
            Design language was locked before a single line of code was written. Dark backgrounds, gold accents, editorial typography. Not because it looks premium - because it communicates that the people behind it make deliberate decisions. Every client who lands on this site sees the same rigour we would apply to theirs.
          </p>
          <p className="cs-body">
            The entire build - architecture, copy, case studies, blog posts, bug fixes, SEO groundwork - shipped in fourteen days. Not because corners were cut. Because the team runs on an AI-augmented workflow that eliminates the gap between decision and execution.
          </p>
          <div className="cs-timeline">
            <TLItem delay={0} phase="Foundation" title="Brand, design system, architecture" body="Design language locked in before any code. ACG colour system established. Site architecture mapped across ACG home, Vantara, ADA, and Contact. Single index.html SPA deployed on Vercel from GitHub with auto-deploy on push." tags={['Design Direction', 'Vercel', 'GitHub']} />
            <TLItem delay={80} phase="Content build" title="All copy written and implemented" body="Full copywriting and build across every section: hero with authority strip, The Shift (AI awareness thesis), ADA methodology with four pillars, How We Work, pricing signal with three tiers, FAQ accordion, and a testimonial block using a real client quote. All WhatsApp CTAs wired to +27712205313 with pre-filled message context." tags={['Copywriting', 'CTAs', 'WhatsApp']} />
            <TLItem delay={160} phase="Depth content" title="Case studies, blog posts, founder presence" body="Five blog posts written and published to Insights. Full case study pages built for both clients - each with complete narrative and outcome framing. Digital business cards deployed for both founders at clean URLs. Founder section built with conviction-first positioning." tags={['Case Studies', 'Blog Posts', 'Digital Cards']} />
            <TLItem delay={240} phase="Bug resolution" title="Navigation, z-index, routing fixes" body="Back button navigation diagnosed and fixed. A global JavaScript event listener was calling showPage('home') on all .back-btn elements, overriding individual onclick handlers. Removed the listener; each button now relies on its own routing. Z-index stacking resolved. Mobile viewport corrected." tags={['JS Debug', 'Routing', 'Mobile']} />
            <TLItem delay={320} phase="SEO groundwork" title="Sitemaps, structured data, canonical URLs" body="Sitemap submitted to Google Search Console. Clean URL routing via Vercel rewrites. JSON-LD structured data added for Organization, LocalBusiness, and FAQ schema. Both avaloncapitalgroup.co.za and afripact.net submitted to GSC." tags={['Search Console', 'JSON-LD', 'Canonical']} />
          </div>
        </div>

        <div className="cs-divider" />

        {/* 03 DISCOVERY */}
        <div className="cs-section">
          <SectionLabel num="03" text="The Discovery" />
          <h2 className="cs-section-h2">17 pages built.<br /><em>1 page visible</em> to Google.</h2>
          <div className="cs-diagnosis">
            <div className="cs-diag-label">Root cause - identified</div>
            <div className="cs-diag-quote">&ldquo;Googlebot reads static HTML before JavaScript executes. Every page was returning the same content.&rdquo;</div>
            <div className="cs-diag-body">
              GSC data showed a hard anomaly: 17 pages unindexed, 1 indexed. The investigation ran through three layers before hitting the root cause. First, a missing meta description update on route change. Then a bare canonical tag pointing nowhere. And finally the actual problem: the SPA was serving a single static index.html regardless of which URL was requested. When Googlebot hit /vantara, it received identical title, canonical, and body content as the homepage. Google correctly concluded they were duplicates and refused to index them.
              <br /><br />
              This is the most common invisible failure in South African SME web builds. A site looks live. Analytics show visitors. The business owner believes they have a web presence. Google has indexed one page. Every service page, every location page, every piece of content - gone from search. The partial fixes applied to the HTML addressed symptoms, not cause. Only a structural change would fix it.
            </div>
          </div>
          <div className="cs-path">
            {[
              ['01', 'Diagnose', 'GSC data showed 1 indexed vs 17 unindexed. URL Inspection confirmed Googlebot was receiving identical HTML for every route. Dynamic head tags invisible to the crawler.'],
              ['02', 'Decide', 'A plain HTML SPA cannot solve this structurally. Migration to Next.js 14 App Router chosen - the same solution applied to Afripact, the same result expected. TypeScript selected for a greenfield migration.'],
              ['03', 'Migrate', 'Next.js 14 scaffolded in a dedicated nextjs-migration/ branch. API routes converted to Route Handlers. Each SPA page becoming its own server-rendered page.tsx with unique metadata export.'],
            ].map(([n, t, b]) => (
              <div key={n} className="cs-path-step">
                <div className="cs-path-num">{n}</div>
                <div className="cs-path-title">{t}</div>
                <div className="cs-path-body">{b}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="cs-divider" />

        {/* 04 TENSION */}
        <div className="cs-section" style={{ paddingBottom: 0 }}>
          <SectionLabel num="04" text="The Problem Nobody Talks About" />
          <h2 className="cs-section-h2">The site was live.<br />The offers page was built.<br /><em>We still needed a reason<br />for strangers to talk to us.</em></h2>
        </div>

        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 40px 90px' }}>
          <div className="cs-tension">
            <p className="cs-tension-body">
              A website without inbound is a brochure nobody picks up. The standard agency answer is paid advertising or cold outreach. Both cost money or time spent convincing someone who did not ask. Neither builds anything that compounds.
            </p>
            <p className="cs-tension-body">
              The answer we built was different: an AI-powered diagnostic tool that gives a business owner something genuinely valuable before we ask for anything. They submit their business details. The tool generates a scored report - revenue leakage calculated, specific gaps named, priority fixes ranked. The prospect does not receive a sales pitch. They receive a diagnosis.
            </p>
            <p className="cs-tension-body">
              Version one launched within the same week as the site. It was questionnaire-driven, scoring based on self-reported answers. Useful but limited. The problem became clear immediately: a business owner who says their website is &ldquo;okay&rdquo; might be serving a broken page to Google. Self-reporting cannot catch that.
            </p>
            <p className="cs-tension-body">
              Version two integrated live crawl data. The tool now fetches the submitted URL, parses the actual HTML, and extracts real metrics: meta description presence, H1 structure, image alt text, word count, internal links. It calls the PageSpeed Insights API for real Core Web Vitals. The report is no longer based on what the prospect thinks is happening. It is based on what is actually happening.
            </p>
            <p className="cs-tension-body">
              The first inbound lead arrived the same day the live crawl went live. Score: 1.8 out of 10. Bottom 15% of automotive businesses digitally. Estimated monthly revenue leakage: R20,000 to R37,000. They replied within the hour.
            </p>
            <div className="cs-tension-stat">
              <span className="cs-tension-stat-num">1.8</span>
              <span className="cs-tension-stat-label">First lead score / 10 - replied within the hour</span>
            </div>
            <p className="cs-privacy-note">* Client details are protected. A different name and business name have been used.</p>
          </div>
        </div>

        <div className="cs-divider" />

        {/* 05 DELIVERABLES */}
        <div className="cs-section">
          <SectionLabel num="05" text="What Was Built" />
          <h2 className="cs-section-h2">Every deliverable,<br /><em>documented.</em></h2>
          <div className="cs-deliverables">
            <DelRow delay={0} num="001" title="ACG Website — Full Build" body="Complete site architecture and build. ACG home, Vantara division, ADA division, Contact. All copy written and implemented from scratch. Premium design language applied throughout." status="Live" />
            <DelRow delay={50} num="002" title="Vantara Division Page" body="Full positioning and copy for the acquisition brokerage arm. Vehicles, property, assets. Advisory-first model communicated clearly. Audience-specific CTAs and WhatsApp routing." status="Live" />
            <DelRow delay={100} num="003" title="ADA Section — Full Methodology" body="Four methodology pillars, three pricing tiers (Foundation, Growth, Authority), How We Work, testimonial block with real client quote, FAQ accordion, case study cards, and conversion-focused close section." status="Live" />
            <DelRow delay={150} num="004" title="Case Studies — Two Clients" body="Dedicated full-page case studies for both clients. Complete narrative, context, and outcome framing. Linked from the ADA section with working back navigation." status="Live" />
            <DelRow delay={200} num="005" title="Insights Section — 5 Blog Posts" body="Five original articles written and published. Covering AI in business, digital infrastructure, the South African SME opportunity, and ADA&apos;s positioning thesis. SEO-oriented content with long-term compounding intent." status="Live" />
            <DelRow delay={250} num="006" title="Digital Business Cards" body="Founder digital business cards deployed at clean URLs. Tap or scan to open. Matching ACG design language. WhatsApp, call, and email actions built in." status="Live" />
            <DelRow delay={300} num="007" title="AI-Powered Audit Tool — V1 and V2" body="13-step diagnostic tool. V1 launched questionnaire-driven, same week as site. V2 upgraded to live website crawl, PageSpeed API integration, and Supabase lead capture - all within days. Real data, not self-reported." status="Live" />
            <DelRow delay={350} num="008" title="Google Search Console Setup" body="Both sites verified in GSC. Sitemaps submitted. URL inspection and manual indexing executed. Structured data (LocalBusiness, FAQ, Review schema) validated." status="Live" />
            <DelRow delay={400} num="009" title="Next.js 14 Migration" body="Full migration to App Router with TypeScript and Tailwind. Scaffolded in dedicated branch. Each SPA page becoming a server-rendered page.tsx. The structural fix that takes the site from 1 indexed page to full coverage." status="In Progress" />
          </div>
        </div>

        <div className="cs-divider" />

        {/* 06 STACK */}
        <div className="cs-section">
          <SectionLabel num="06" text="The Stack" />
          <h2 className="cs-section-h2">Built on tools that<br /><em>move fast</em> without breaking.</h2>
          <p className="cs-body">The same stack we recommend to clients. Two people, AI-augmented, no bureaucracy. Every tool earns its place.</p>
          <div className="cs-stack-grid">
            {[
              ['⬡', 'Next.js 14', 'App Router, TypeScript, Tailwind. Server-side rendering that solves the Googlebot problem permanently.'],
              ['△', 'Vercel', 'Auto-deploy on push. Every GitHub commit goes live within seconds. No manual deployment steps.'],
              ['◎', 'GitHub', 'Version control and deployment trigger. Branch-based workflow protects the live site during migration.'],
              ['◈', 'Claude Code', 'AI-augmented development inside VS Code. The primary build instrument for this entire project.'],
              ['◻', 'Google Search Console', 'Indexing diagnostics, structured data validation, sitemap submission. Where we caught the SPA failure.'],
              ['◆', 'Supabase', 'Lead data from every audit completion stored and queryable. Every inbound lead is a briefing document before the first call.'],
            ].map(([icon, name, role]) => (
              <div key={name} className="cs-stack-item">
                <div className="cs-stack-icon">{icon}</div>
                <div><div className="cs-stack-name">{name}</div><div className="cs-stack-role">{role}</div></div>
              </div>
            ))}
          </div>
        </div>

        <div className="cs-divider" />

        {/* 07 WHAT COMES NEXT */}
        <div className="cs-section">
          <SectionLabel num="07" text="What Comes Next" />
          <h2 className="cs-section-h2">The build is done.<br /><em>The compounding starts now.</em></h2>
          <p className="cs-body">This site is not finished - it is live and evolving. We treat our own presence the same way we treat client work: data informs the next move.</p>
          <div className="cs-ongoing-grid">
            <div className="cs-og-card ac">
              <div className="cs-og-badge">Complete</div>
              <div className="cs-og-title">Next.js migration - merging to main</div>
              <div className="cs-og-body">Migration shipped. Next.js App Router with TypeScript and Tailwind is now live on avaloncapitalgroup.co.za. Google went from 1 indexed page to 16 pages in the sitemap within hours of deployment.</div>
            </div>
            <div className="cs-og-card ac">
              <div className="cs-og-badge">Active</div>
              <div className="cs-og-title">Audit tool - live data expansion</div>
              <div className="cs-og-body">The crawl pipeline is live. Next integration pulls Google Places data - real review counts, ratings, profile completeness. Every dimension of the audit becomes evidence-based rather than self-reported.</div>
            </div>
            <div className="cs-og-card">
              <div className="cs-og-title">GSC indexing - full coverage request</div>
              <div className="cs-og-body">Sitemap resubmitted with 16 routes. URL inspection requested across all key pages. Google is now crawling the server-rendered build for the first time.</div>
            </div>
            <div className="cs-og-card">
              <div className="cs-og-title">Desktop conversion analysis</div>
              <div className="cs-og-body">Analytics data showing desktop user behaviour patterns. Scroll depth, section engagement, and click-through rates being analysed to identify friction points and scope the next round of optimisation.</div>
            </div>
          </div>
        </div>

        <div className="cs-divider" />

        {/* 08 CLOSE */}
        <div className="cs-section cs-close">
          <SectionLabel num="08" text="The Point" center />
          <h2 className="cs-close-h2">
            This is our process<br />
            working on our own problem.<br />
            <em>Imagine it working on yours.</em>
          </h2>
          <p className="cs-close-body">
            Every methodology on this page is the same process we run for clients. The difference is you watched us apply it to ourselves - the diagnosis, the rebuild, the outreach system built from scratch in the same week the site went live.
          </p>
          <p className="cs-close-body">
            We showed you the stack because the stack is not what you are buying. You are buying the judgment to know when a partial fix is not enough. The speed to move from diagnosis to deployed solution in the same week. The understanding of how a business actually converts.
          </p>
          <div className="cs-founder-voice">
            <div className="cs-founder-label">Founder — Luyanda, ACG</div>
            <div className="cs-founder-quote">&ldquo;ADA is a two-person team running at a pace most agencies cannot match with ten. That is not a claim. This page is the evidence.&rdquo;</div>
          </div>
          <div style={{ marginTop: 52, display: 'flex', justifyContent: 'center', gap: 14, flexWrap: 'wrap' }}>
            <a className="cs-btn-gold" href="https://wa.me/27712205313?text=Hi%2C%20I%27d%20like%20to%20discuss%20a%20project%20with%20ADA">Start a Project</a>
            <Link className="cs-btn-outline" href="/audit">Try the Audit Tool</Link>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
