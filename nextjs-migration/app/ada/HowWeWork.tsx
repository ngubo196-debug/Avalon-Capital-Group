'use client';

import { useEffect, useRef } from 'react';

export default function HowWeWork() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const items = Array.from(container.children) as HTMLElement[];
    const delays = [0, 150, 300, 450];
    const observers: IntersectionObserver[] = [];

    items.forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              el.style.opacity = '1';
              el.style.transform = 'translateY(0)';
            }, delays[i]);
            observer.disconnect();
          }
        },
        { rootMargin: '0px 0px -80px 0px' }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => { observers.forEach(o => o.disconnect()); };
  }, []);

  return (
    <div style={{display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:'1px', background:'var(--border)', marginTop:'56px'}} ref={containerRef}>
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
  );
}
