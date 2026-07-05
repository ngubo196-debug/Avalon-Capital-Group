'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function PortfolioStrip() {
  const [modalOpen, setModalOpen] = useState(false);
  const [vantaraModalOpen, setVantaraModalOpen] = useState(false);
  const [pitchdModalOpen, setPitchdModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <>
      <style suppressHydrationWarning>{`
        .ada-modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.85);
          z-index: 9999;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding: 80px 24px 24px 24px;
          backdrop-filter: blur(4px);
        }
        .ada-modal {
          background: var(--black);
          border: 1px solid var(--border);
          max-width: 760px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
        }
        @media (max-width: 640px) {
          .ada-modal {
            max-height: 85vh;
            margin: 0;
          }
          .ada-modal-overlay {
            padding: 12px;
            align-items: flex-end;
          }
        }
        .ada-modal-close {
          position: absolute;
          top: 20px;
          right: 24px;
          font-size: 20px;
          color: var(--text-muted);
          cursor: pointer;
          background: none;
          border: none;
          line-height: 1;
          z-index: 10;
        }
        .ada-modal-close:hover { color: var(--text); }
        .ada-portfolio-item {
          cursor: pointer;
          transition: transform 200ms ease;
        }
        .ada-portfolio-item:hover {
          transform: translateY(-4px);
        }
        @media (max-width: 640px) {
          .ada-portfolio-grid {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            gap: 32px 16px !important;
          }
        }
      `}</style>

      <div style={{borderTop:'1px solid var(--border)', borderBottom:'1px solid var(--border)', padding:'48px 60px', background:'var(--black)'}}>
        <p style={{fontSize:'9px', letterSpacing:'0.2em', textTransform:'uppercase', color:'var(--text-muted)', textAlign:'center', marginBottom:'40px'}}>Our Portfolio</p>
        <div className="ada-portfolio-grid" style={{display:'flex', alignItems:'flex-start', justifyContent:'center', gap:'48px', flexWrap:'wrap'}}>
          <div
            className="ada-portfolio-item"
            style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'12px'}}
            onClick={() => setModalOpen(true)}
          >
            <img src="/assets/afripact-logo.jpeg" alt="Afripact Civils" style={{height:'60px', width:'auto', objectFit:'contain'}} />
            <span style={{fontSize:'9px', letterSpacing:'0.15em', textTransform:'uppercase', color:'var(--text-muted)', textAlign:'center'}}>Civil construction</span>
          </div>
          <div
            className="ada-portfolio-item"
            style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'12px', cursor:'pointer'}}
            onClick={() => setVantaraModalOpen(true)}
          >
            <img src="/assets/vantara-logo.png" alt="Vantara" style={{height:'60px', width:'auto', objectFit:'contain'}} />
            <span style={{fontSize:'9px', letterSpacing:'0.15em', textTransform:'uppercase', color:'var(--text-muted)', textAlign:'center'}}>Acquisitions</span>
          </div>
          <div
            className="ada-portfolio-item"
            style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'12px', cursor:'pointer'}}
            onClick={() => setPitchdModalOpen(true)}
          >
            <img src="/assets/pitchd-logo.png" alt="Pitchd" style={{height:'60px', width:'auto', objectFit:'contain'}} />
            <span style={{fontSize:'9px', letterSpacing:'0.15em', textTransform:'uppercase', color:'var(--text-muted)', textAlign:'center'}}>Proposal platform</span>
          </div>
          <div
            className="ada-portfolio-item"
            style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'12px'}}
          >
            <img src="/assets/vuma-logo.png" alt="Vuma" style={{height:'60px', width:'auto', objectFit:'contain'}} />
            <span style={{fontSize:'9px', letterSpacing:'0.15em', textTransform:'uppercase', color:'var(--text-muted)', textAlign:'center'}}>Business documents</span>
          </div>
        </div>
      </div>

      {mounted && modalOpen && createPortal(
        <div className="ada-modal-overlay" onClick={() => setModalOpen(false)}>
          <div className="ada-modal" onClick={e => e.stopPropagation()}>
            <button className="ada-modal-close" onClick={() => setModalOpen(false)}>✕</button>
            <img
              src="/assets/afripact-screenshot.jpg"
              alt="Afripact Civils website"
              style={{width:'100%', display:'block'}}
            />
            <div style={{padding:'28px 24px'}}>
              <div style={{display:'flex', gap:'10px', marginBottom:'20px', flexWrap:'wrap'}}>
                <span style={{fontSize:'9px', letterSpacing:'0.2em', textTransform:'uppercase', color:'var(--gold)', border:'1px solid var(--border)', padding:'4px 12px'}}>Civil construction</span>
                <span style={{fontSize:'9px', letterSpacing:'0.2em', textTransform:'uppercase', color:'var(--text-muted)', border:'1px solid var(--border)', padding:'4px 12px'}}>KwaZulu-Natal</span>
              </div>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(24px,3vw,36px)', fontWeight:300, lineHeight:1.1, marginBottom:'8px'}}>Afripact Civils</div>
              <div style={{fontSize:'9px', letterSpacing:'0.2em', textTransform:'uppercase', color:'var(--text-muted)', marginBottom:'24px'}}>From zero presence to ranking and converting.</div>
              <p style={{fontSize:'14px', color:'var(--text-muted)', lineHeight:1.9, marginBottom:'28px'}}>Afripact had the capability and the track record. What was missing was a digital presence that matched. We built them a website that positions them professionally, ranks on Google for the terms their clients search, and has already converted enquiries into signed work. A construction business with a site that works as hard as they do.</p>
              <div style={{display:'flex', gap:'1px', background:'var(--border)', marginBottom:'28px', flexWrap:'wrap'}}>
                <div style={{background:'var(--surface)', padding:'16px 24px', flex:1, minWidth:'120px'}}>
                  <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', marginBottom:'4px'}}>Completed</div>
                  <div style={{fontSize:'9px', letterSpacing:'0.15em', textTransform:'uppercase', color:'var(--text-muted)'}}>Category</div>
                </div>
                <div style={{background:'var(--surface)', padding:'16px 24px', flex:1, minWidth:'120px'}}>
                  <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', marginBottom:'4px'}}>Live</div>
                  <div style={{fontSize:'9px', letterSpacing:'0.15em', textTransform:'uppercase', color:'var(--text-muted)'}}>Market</div>
                </div>
                <div style={{background:'var(--surface)', padding:'16px 24px', flex:1, minWidth:'120px'}}>
                  <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', marginBottom:'4px', color:'var(--gold)'}}>Ranking</div>
                  <div style={{fontSize:'9px', letterSpacing:'0.15em', textTransform:'uppercase', color:'var(--text-muted)'}}>Status</div>
                </div>
              </div>
              <blockquote style={{paddingLeft:'20px', borderLeft:'2px solid var(--gold)', marginBottom:'28px'}}>
                <p style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'18px', fontWeight:300, fontStyle:'italic', lineHeight:1.5, color:'var(--text)'}}>&ldquo;The website shows people I have never done business with that Afripact is not a scam - it&apos;s an actual business.&rdquo;</p>
                <cite style={{display:'block', marginTop:'10px', fontSize:'11px', color:'var(--text-muted)', fontStyle:'normal', letterSpacing:'0.08em'}}>- Client, Afripact Civils</cite>
              </blockquote>
              <div style={{display:'flex', gap:'16px', flexWrap:'wrap'}}>
                <a href="https://afripact.net" target="_blank" rel="noopener noreferrer" style={{display:'inline-block', padding:'12px 28px', background:'var(--gold)', color:'var(--black)', fontSize:'11px', letterSpacing:'0.15em', textTransform:'uppercase', textDecoration:'none', fontWeight:500, transition:'opacity 200ms ease'}} onMouseEnter={e => (e.currentTarget.style.opacity='0.8')} onMouseLeave={e => (e.currentTarget.style.opacity='1')}>Visit Site →</a>
                <button onClick={() => setModalOpen(false)} style={{padding:'12px 28px', background:'transparent', color:'var(--text-muted)', fontSize:'11px', letterSpacing:'0.15em', textTransform:'uppercase', border:'1px solid var(--border)', cursor:'pointer', transition:'border-color 200ms ease'}} onMouseEnter={e => (e.currentTarget.style.borderColor='var(--gold)')} onMouseLeave={e => (e.currentTarget.style.borderColor='var(--border)')}>Close</button>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}

      {vantaraModalOpen && mounted && createPortal(
        <div className="ada-modal-overlay" onClick={() => setVantaraModalOpen(false)}>
          <div className="ada-modal" onClick={e => e.stopPropagation()}>
            <button className="ada-modal-close" onClick={() => setVantaraModalOpen(false)}>✕</button>
            <img
              src="/assets/vantara-screenshot.png"
              alt="Vantara acquisitions division"
              style={{width:'100%', height:'auto', objectFit:'cover', objectPosition:'top center', display:'block', borderBottom:'1px solid var(--border)'}}
            />
            <div style={{padding:'36px 40px'}}>
              <div style={{display:'flex', gap:'10px', marginBottom:'20px', flexWrap:'wrap'}}>
                <span style={{fontSize:'9px', letterSpacing:'0.2em', textTransform:'uppercase', color:'var(--gold)', border:'1px solid var(--border)', padding:'4px 12px'}}>Acquisition brokerage</span>
                <span style={{fontSize:'9px', letterSpacing:'0.2em', textTransform:'uppercase', color:'var(--text-muted)', border:'1px solid var(--border)', padding:'4px 12px'}}>South Africa</span>
                <span style={{fontSize:'9px', letterSpacing:'0.2em', textTransform:'uppercase', color:'var(--text-muted)', border:'1px solid var(--border)', padding:'4px 12px'}}>Active</span>
              </div>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(24px,3vw,36px)', fontWeight:300, lineHeight:1.1, marginBottom:'8px'}}>Vantara</div>
              <div style={{fontSize:'9px', letterSpacing:'0.2em', textTransform:'uppercase', color:'var(--text-muted)', marginBottom:'24px'}}>Brand and digital presence built from scratch.</div>
              <p style={{fontSize:'14px', color:'var(--text-muted)', lineHeight:1.9, marginBottom:'28px'}}>Vantara is ACG&apos;s acquisitions division - vehicles, property, and strategic deals, working exclusively for buyers. We built the brand identity, the positioning, and the full digital presence. No template. Every element was designed to signal that Vantara operates at a different level to a standard broker.</p>
              <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'16px', marginBottom:'32px', borderTop:'1px solid var(--border)', paddingTop:'28px'}}>
                <div>
                  <div style={{fontSize:'9px', letterSpacing:'0.15em', textTransform:'uppercase', color:'var(--text-muted)', marginBottom:'6px'}}>Category</div>
                  <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', fontWeight:300, color:'var(--gold)'}}>Brand</div>
                </div>
                <div>
                  <div style={{fontSize:'9px', letterSpacing:'0.15em', textTransform:'uppercase', color:'var(--text-muted)', marginBottom:'6px'}}>Market</div>
                  <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', fontWeight:300, color:'var(--gold)'}}>Web</div>
                </div>
                <div>
                  <div style={{fontSize:'9px', letterSpacing:'0.15em', textTransform:'uppercase', color:'var(--text-muted)', marginBottom:'6px'}}>Status</div>
                  <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', fontWeight:300, color:'var(--gold)'}}>Identity</div>
                </div>
              </div>
              <div style={{display:'flex', gap:'12px', flexWrap:'wrap'}}>
                <a href="/vantara" style={{display:'inline-block', padding:'12px 28px', background:'var(--gold)', color:'var(--black)', fontSize:'11px', letterSpacing:'0.15em', textTransform:'uppercase', textDecoration:'none', fontWeight:500, transition:'opacity 200ms ease'}} onMouseEnter={e => (e.currentTarget.style.opacity='0.8')} onMouseLeave={e => (e.currentTarget.style.opacity='1')}>Visit Site →</a>
                <button onClick={() => setVantaraModalOpen(false)} style={{padding:'12px 28px', background:'transparent', color:'var(--text-muted)', fontSize:'11px', letterSpacing:'0.15em', textTransform:'uppercase', border:'1px solid var(--border)', cursor:'pointer', transition:'border-color 200ms ease'}} onMouseEnter={e => (e.currentTarget.style.borderColor='var(--gold)')} onMouseLeave={e => (e.currentTarget.style.borderColor='var(--border)')}>Close</button>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}

      {pitchdModalOpen && mounted && createPortal(
        <div className="ada-modal-overlay" onClick={() => setPitchdModalOpen(false)}>
          <div className="ada-modal" onClick={e => e.stopPropagation()}>
            <button className="ada-modal-close" onClick={() => setPitchdModalOpen(false)}>✕</button>
            <img
              src="/assets/pitchd-screenshot.jpg"
              alt="Pitchd proposal generator"
              style={{width:'100%', height:'auto', objectFit:'cover', objectPosition:'top', display:'block', borderBottom:'1px solid var(--border)'}}
            />
            <div style={{padding:'36px 40px'}}>
              <div style={{display:'flex', gap:'10px', marginBottom:'20px', flexWrap:'wrap'}}>
                <span style={{fontSize:'9px', letterSpacing:'0.2em', textTransform:'uppercase', color:'var(--gold)', border:'1px solid var(--border)', padding:'4px 12px'}}>Global SaaS</span>
                <span style={{fontSize:'9px', letterSpacing:'0.2em', textTransform:'uppercase', color:'var(--text-muted)', border:'1px solid var(--border)', padding:'4px 12px'}}>USD pricing</span>
                <span style={{fontSize:'9px', letterSpacing:'0.2em', textTransform:'uppercase', color:'var(--text-muted)', border:'1px solid var(--border)', padding:'4px 12px'}}>In build</span>
              </div>
              <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(24px,3vw,36px)', fontWeight:300, lineHeight:1.1, marginBottom:'8px'}}>Pitchd</div>
              <div style={{fontSize:'9px', letterSpacing:'0.2em', textTransform:'uppercase', color:'var(--text-muted)', marginBottom:'24px'}}>A global SaaS product. Built in-house.</div>
              <p style={{fontSize:'14px', color:'var(--text-muted)', lineHeight:1.9, marginBottom:'28px'}}>Pitchd is not a client project. It is a product we built ourselves - a micro-SaaS for freelancers that generates complete, client-ready proposals in under 60 seconds. USD-priced, targeting the English-speaking freelance market globally. We build for clients. We also build for ourselves.</p>
              <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'16px', marginBottom:'32px', borderTop:'1px solid var(--border)', paddingTop:'28px'}}>
                <div>
                  <div style={{fontSize:'9px', letterSpacing:'0.15em', textTransform:'uppercase', color:'var(--text-muted)', marginBottom:'6px'}}>Type</div>
                  <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', fontWeight:300, color:'var(--gold)'}}>SaaS Product</div>
                </div>
                <div>
                  <div style={{fontSize:'9px', letterSpacing:'0.15em', textTransform:'uppercase', color:'var(--text-muted)', marginBottom:'6px'}}>Market</div>
                  <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', fontWeight:300, color:'var(--gold)'}}>Global</div>
                </div>
                <div>
                  <div style={{fontSize:'9px', letterSpacing:'0.15em', textTransform:'uppercase', color:'var(--text-muted)', marginBottom:'6px'}}>Status</div>
                  <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', fontWeight:300, color:'var(--gold)'}}>In Build</div>
                </div>
              </div>
              <div style={{display:'flex', gap:'12px', flexWrap:'wrap'}}>
                <a href="https://pitchd.online/" target="_blank" rel="noopener noreferrer" style={{display:'inline-block', padding:'12px 28px', background:'var(--gold)', color:'var(--black)', fontSize:'11px', letterSpacing:'0.15em', textTransform:'uppercase', textDecoration:'none', fontWeight:500, transition:'opacity 200ms ease'}} onMouseEnter={e => (e.currentTarget.style.opacity='0.8')} onMouseLeave={e => (e.currentTarget.style.opacity='1')}>Visit Site →</a>
                <button onClick={() => setPitchdModalOpen(false)} style={{padding:'12px 28px', background:'transparent', color:'var(--text-muted)', fontSize:'11px', letterSpacing:'0.15em', textTransform:'uppercase', border:'1px solid var(--border)', cursor:'pointer', transition:'border-color 200ms ease'}} onMouseEnter={e => (e.currentTarget.style.borderColor='var(--gold)')} onMouseLeave={e => (e.currentTarget.style.borderColor='var(--border)')}>Close</button>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
