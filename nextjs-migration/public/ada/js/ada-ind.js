(function(){
  'use strict';
  window.ADA = window.ADA || {};
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  ADA.reduce = reduce;
  ADA.track = function(name, params){ try{ if(window.gtag) window.gtag('event', name, params||{}); if(window.dataLayer) window.dataLayer.push(Object.assign({event:name}, params||{})); }catch(e){} };
  ADA.onView = function(el, fn, th){ if(!('IntersectionObserver' in window)){ fn(); return; } var o=new IntersectionObserver(function(es){ if(es[0].isIntersecting){ o.disconnect(); fn(); } },{threshold:th||.3}); o.observe(el); };
  ADA.watch = function(el, fn, th){ if(!('IntersectionObserver' in window)){ fn(true); return; } new IntersectionObserver(function(es){ fn(es[0].isIntersecting); },{threshold:th||.3}).observe(el); };

  /* One action across the site: a 15-minute call, booked on WhatsApp. Every button carries a ref code. */
  function waHref(ref, plan){
    var msg = plan
      ? 'Hi ADA, I\'m interested in '+plan+'. (Ref: '+ref+')\nBusiness name: \nBest time to call: '
      : 'Hi ADA, I\'d like to book a free 15-minute call. (Ref: '+ref+')\nBusiness name: \nWhat we do: \nWhat we need help with: \nBest time to call: ';
    return 'https://wa.me/27712205313?text='+encodeURIComponent(msg);
  }
  document.querySelectorAll('.wa-link').forEach(function(a){
    a.href = waHref(a.dataset.ref||'SITE', a.dataset.plan); a.target='_blank'; a.rel='noopener';
    a.addEventListener('click', function(){ ADA.track('click_whatsapp',{ref:a.dataset.ref, plan:a.dataset.plan||''}); });
  });

  /* Header */
  var header=document.querySelector('header.site');
  function sc(){ header.classList.toggle('scrolled', scrollY>8); }
  addEventListener('scroll', sc, {passive:true}); sc();

  /* Dropdowns: click to open, Escape or outside click to close */
  var drops=[].slice.call(document.querySelectorAll('.menu>li>button[aria-controls]'));
  function closeAll(except){ drops.forEach(function(b){ if(b!==except){ b.setAttribute('aria-expanded','false'); document.getElementById(b.getAttribute('aria-controls')).hidden=true; } }); }
  drops.forEach(function(b){
    var panel=document.getElementById(b.getAttribute('aria-controls'));
    b.addEventListener('click', function(e){ e.stopPropagation(); var open=b.getAttribute('aria-expanded')==='true'; closeAll(b); b.setAttribute('aria-expanded',String(!open)); panel.hidden=open; });
    panel.addEventListener('click', function(e){ e.stopPropagation(); if(e.target.closest('a')) closeAll(); });
  });
  document.addEventListener('click', function(){ closeAll(); });
  document.addEventListener('keydown', function(e){ if(e.key==='Escape'){ var open=drops.filter(function(b){return b.getAttribute('aria-expanded')==='true';})[0]; closeAll(); if(open) open.focus(); } });

  /* Mobile menu */
  var mb=document.getElementById('menuBtn'), mm=document.getElementById('mobileMenu');
  mb.addEventListener('click', function(){ var o=mb.getAttribute('aria-expanded')==='true'; mb.setAttribute('aria-expanded',String(!o)); mb.setAttribute('aria-label',o?'Open menu':'Close menu'); mm.hidden=o; });
  mm.querySelectorAll('a').forEach(function(a){ a.addEventListener('click', function(){ mm.hidden=true; mb.setAttribute('aria-expanded','false'); mb.setAttribute('aria-label','Open menu'); }); });

  /* Mobile dock: after the opening section, gone again at the close */
  var dock=document.getElementById('dock'), first=document.querySelector('main>section'), close=document.querySelector('.close');
  function dk(){ if(!dock||!first||!close) return; dock.classList.toggle('show', first.getBoundingClientRect().bottom<0 && close.getBoundingClientRect().top>innerHeight*.9); }
  addEventListener('scroll', dk, {passive:true}); dk();
  /* Grids below the fold settle in one after another, once. Anything already on screen is left alone, so nothing flashes. */
  if(!reduce && 'IntersectionObserver' in window) document.querySelectorAll('.facts,.ind,.work-grid,.doors').forEach(function(g){
    if(g.getBoundingClientRect().top < innerHeight) return;
    [].forEach.call(g.children, function(c,i){ c.style.setProperty('--i', Math.min(i,6)); });
    g.classList.add('rv-wait');
    ADA.onView(g, function(){ g.classList.add('rv-in'); g.classList.remove('rv-wait'); setTimeout(function(){ g.classList.remove('rv-in'); }, 1200); }, .15);
  });
})();

;
(function(){
  'use strict';
  var reduce = ADA.reduce, fine = matchMedia('(pointer: fine)').matches, timers={}, players={};
  var CHECK='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" aria-hidden="true"><path d="M4 12.5l5 5L20 6.5"/></svg>';
  document.querySelectorAll('[data-c]').forEach(function(i){ i.innerHTML=CHECK; });
  function later(key, fn, ms){ (timers[key]=timers[key]||[]).push(setTimeout(fn, reduce?0:ms)); }
  function clear(key){ (timers[key]||[]).forEach(clearTimeout); timers[key]=[]; }
  function once(el, fn){ players[el.id]=fn; ADA.onView(el, fn, .35); }
  document.querySelectorAll('[data-replay]').forEach(function(b){ b.addEventListener('click', function(){ var f=players[b.dataset.replay]; if(f) f(); }); });

  /* Hero: a search (or the app), your result on top, a message arrives, then the follow-up */
  var find=document.getElementById('find');
  if(find){
    var fq=find.querySelector('.fqText'), Q=find.dataset.q||'';
    once(find, function(){
      clear('find'); find.classList.remove('on','msg','done'); if(fq) fq.textContent='';
      if(reduce){ if(fq) fq.textContent=Q; find.classList.add('on','msg','done'); return; }
      var t=300;
      if(fq){ Q.split('').forEach(function(ch,i){ later('find', function(){ fq.textContent+=ch; }, 400+i*50); }); t=400+Q.length*50; }
      later('find', function(){ find.classList.add('on'); }, t+500);
      later('find', function(){ find.classList.add('msg'); }, t+1900);
      later('find', function(){ find.classList.add('done'); }, t+3300);
    });
  }

  /* Grid: one page lights up per service and area */
  document.querySelectorAll('[data-vis="grid"]').forEach(function(g){
    var cells=[].slice.call(g.querySelectorAll('.gm i')), n=g.querySelector('.gn'), ex=g.querySelector('.gc-ex'), hl=+g.dataset.hl||0;
    once(g, function(){
      clear(g.id); cells.forEach(function(c){ c.classList.remove('on','hl'); }); n.textContent='0'; ex.classList.remove('on');
      cells.forEach(function(c,i){ later(g.id, function(){ c.classList.add('on'); n.textContent=String(i+1); }, 300+i*130); });
      later(g.id, function(){ if(cells[hl]) cells[hl].classList.add('hl'); ex.classList.add('on'); }, 300+cells.length*130+400);
    });
  });

  /* Ticks: steps complete in order, status follows */
  document.querySelectorAll('[data-vis="ticks"]').forEach(function(q){
    var ticks=[].slice.call(q.querySelectorAll('.ticks>div')), st=q.querySelector('.qstat b'), labels=[], st0=q.dataset.st0||'';
    try{ labels=JSON.parse(q.dataset.st||'[]'); }catch(e){}
    once(q, function(){
      clear(q.id); ticks.forEach(function(t){ t.classList.remove('done'); }); st.textContent=st0; st.classList.remove('won');
      ticks.forEach(function(t,k){ later(q.id, function(){ t.classList.add('done'); if(labels[k]) st.textContent=labels[k]; if(k===ticks.length-1) st.classList.add('won'); }, 500+k*1200); });
    });
  });

  /* List: rows appear one by one */
  document.querySelectorAll('[data-vis="list"]').forEach(function(l){
    var rows=[].slice.call(l.querySelectorAll('.lrow'));
    once(l, function(){
      clear(l.id); rows.forEach(function(r){ r.classList.remove('on'); });
      rows.forEach(function(r,k){ later(l.id, function(){ r.classList.add('on'); }, 300+k*450); });
    });
  });

  /* Client screenshot scrolls slowly, only while visible */
  document.querySelectorAll('.view').forEach(function(v){
    var img=v.querySelector('img');
    function setDur(){ var travel=img.offsetHeight-v.clientHeight; if(travel>0){ v.style.setProperty('--vh', v.clientHeight+'px'); img.style.setProperty('--dur', Math.round(travel/26)+'s'); } }
    if(img.complete) setDur(); else img.addEventListener('load', setDur);
    addEventListener('resize', setDur);
    ADA.watch(v, function(on){ v.classList.toggle('run', on && !reduce); }, .3);
  });

  document.querySelectorAll('.door .ask, .door .btn').forEach(function(a){ a.addEventListener('click', function(){ ADA.track('door_click',{door:a.closest('.door').classList.contains('dark')?'check':'know', ref:a.dataset.ref||''}); }); });

  if(fine && !reduce) document.querySelectorAll('.magnetic').forEach(function(b){
    b.addEventListener('pointermove', function(e){ var r=b.getBoundingClientRect(); b.style.transform='translate('+((e.clientX-r.left-r.width/2)*.12).toFixed(1)+'px,'+((e.clientY-r.top-r.height/2)*.2).toFixed(1)+'px)'; });
    b.addEventListener('pointerleave', function(){ b.style.transform=''; });
  });
})();
