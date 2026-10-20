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
  var reduce = ADA.reduce, fine = matchMedia('(pointer: fine)').matches;
  var CHECK='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" aria-hidden="true"><path d="M4 12.5l5 5L20 6.5"/></svg>';
  document.querySelectorAll('[data-c]').forEach(function(i){ i.innerHTML=CHECK; });

  /* Hero mesh in ink, with a lead travelling across it now and then */
  var hero=document.querySelector('.hero'), cv=document.getElementById('mesh'), ctx=cv.getContext('2d'), W=0,H=0,nodes=[],mouse={x:-9e3,y:-9e3},run=true,col='18,19,23',pulses=[],lastSpawn=0;
  function size(){ var r=cv.getBoundingClientRect(), d=Math.min(devicePixelRatio||1,2); W=r.width; H=r.height; cv.width=W*d; cv.height=H*d; ctx.setTransform(d,0,0,d,0,0); var n=W<700?22:52; nodes=[]; for(var i=0;i<n;i++) nodes.push({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.3,vy:(Math.random()-.5)*.3}); pulses=[]; }
  function spawn(){
    var start=nodes.filter(function(p){return p.x<W*.25;}); if(!start.length) return;
    var cur=start[Math.floor(Math.random()*start.length)], chain=[cur];
    for(var h=0;h<9;h++){ var best=null,bd=1e9; nodes.forEach(function(p){ if(chain.indexOf(p)>=0||p.x<=cur.x+20) return; var d=Math.hypot(p.x-cur.x,p.y-cur.y); if(d<210&&d<bd){bd=d;best=p;} }); if(!best) break; chain.push(best); cur=best; }
    if(chain.length>2) pulses.push({chain:chain,t:0});
  }
  function frame(now){
    ctx.clearRect(0,0,W,H);
    nodes.forEach(function(p){ var dx=p.x-mouse.x, dy=p.y-mouse.y, d=Math.hypot(dx,dy); if(d<130&&d>0){ p.vx+=dx/d*.065*(130-d)/130; p.vy+=dy/d*.065*(130-d)/130; } p.vx*=.985; p.vy*=.985; if(Math.abs(p.vx)<.04)p.vx+=(Math.random()-.5)*.04; if(Math.abs(p.vy)<.04)p.vy+=(Math.random()-.5)*.04; p.x+=p.vx; p.y+=p.vy; if(p.x<0||p.x>W)p.vx*=-1; if(p.y<0||p.y>H)p.vy*=-1; });
    ctx.lineWidth=1;
    for(var a=0;a<nodes.length;a++) for(var b=a+1;b<nodes.length;b++){ var d=Math.hypot(nodes[a].x-nodes[b].x,nodes[a].y-nodes[b].y); if(d<130){ ctx.strokeStyle='rgba('+col+','+(.13*(1-d/130)).toFixed(3)+')'; ctx.beginPath(); ctx.moveTo(nodes[a].x,nodes[a].y); ctx.lineTo(nodes[b].x,nodes[b].y); ctx.stroke(); } }
    ctx.fillStyle='rgba('+col+',.2)'; nodes.forEach(function(p){ ctx.beginPath(); ctx.arc(p.x,p.y,2,0,6.283); ctx.fill(); });
    if(!reduce && now-lastSpawn>2800){ lastSpawn=now; spawn(); }
    pulses=pulses.filter(function(P){
      P.t+=0.016; var seg=Math.floor(P.t), k=P.t-seg, c=P.chain;
      for(var i=0;i<Math.min(seg+1,c.length-1);i++){ var age=P.t-i, al=Math.max(0,.5-age*.11); if(al<=0) continue; var e=i===seg?k:1; ctx.strokeStyle='rgba('+col+','+al.toFixed(3)+')'; ctx.lineWidth=1.5; ctx.beginPath(); ctx.moveTo(c[i].x,c[i].y); ctx.lineTo(c[i].x+(c[i+1].x-c[i].x)*e, c[i].y+(c[i+1].y-c[i].y)*e); ctx.stroke(); }
      if(seg<c.length-1){ var x=c[seg].x+(c[seg+1].x-c[seg].x)*k, y=c[seg].y+(c[seg+1].y-c[seg].y)*k; ctx.fillStyle='rgba('+col+',.85)'; ctx.beginPath(); ctx.arc(x,y,3,0,6.283); ctx.fill(); }
      else { var end=c[c.length-1], f=Math.min(1,P.t-(c.length-1)); ctx.strokeStyle='rgba('+col+','+(.45*(1-f)).toFixed(3)+')'; ctx.lineWidth=1.3; ctx.beginPath(); ctx.arc(end.x,end.y,4+f*18,0,6.283); ctx.stroke(); }
      return P.t < c.length+3;
    });
    if(run&&!reduce) requestAnimationFrame(frame);
  }
  size(); frame(0);
  addEventListener('resize', function(){ size(); if(reduce) frame(0); });
  hero.addEventListener('pointermove', function(e){ var r=cv.getBoundingClientRect(); mouse.x=e.clientX-r.left; mouse.y=e.clientY-r.top; });
  hero.addEventListener('pointerleave', function(){ mouse.x=mouse.y=-9e3; });
  ADA.watch(hero, function(v){ if(v&&!run){ run=true; if(!reduce) requestAnimationFrame(frame); } run=v; }, 0);

  /* The path draws once */
  var path=document.getElementById('path');
  if(reduce) path.classList.add('go'); else ADA.onView(path, function(){ path.classList.add('go'); }, .5);

  /* Each service visual plays once when it comes into view, and can be replayed */
  var timers={};
  function later(key, fn, ms){ (timers[key]=timers[key]||[]).push(setTimeout(fn, reduce?0:ms)); }
  function clear(key){ (timers[key]||[]).forEach(clearTimeout); timers[key]=[]; }

  var qText=document.getElementById('qText'), mp=document.getElementById('mpList'), QUERY='plumber pietermaritzburg';
  function rank(top){ var order=top?{you:0,a:1,b:2}:{a:0,b:1,you:2}; mp.querySelectorAll('.mpr').forEach(function(r){ r.style.setProperty('--r', order[r.dataset.k]); r.querySelector('.pin i').textContent='ABC'[order[r.dataset.k]]; }); }
  function playSerp(){
    clear('serp'); rank(false);
    if(reduce){ qText.textContent=QUERY; rank(true); return; }
    qText.textContent='';
    QUERY.split('').forEach(function(ch,i){ later('serp', function(){ qText.textContent+=ch; }, 300+i*55); });
    later('serp', function(){ rank(true); }, 300+QUERY.length*55+700);
  }
  var jc=document.getElementById('jc'), ticks=[].slice.call(document.querySelectorAll('#ticks>div'));
  function playRun(){
    clear('run'); jc.style.left='0%'; ticks.forEach(function(t){ t.classList.remove('done'); });
    [0,1,2,3].forEach(function(k){ later('run', function(){ jc.style.left=(k*25)+'%'; ticks[k].classList.add('done'); }, 500+k*1350); });
  }
  ADA.onView(document.getElementById('serp'), playSerp, .5);
  ADA.onView(document.getElementById('run'), playRun, .5);
  document.querySelectorAll('[data-replay]').forEach(function(b){ b.addEventListener('click', function(){ (b.dataset.replay==='serp'?playSerp:playRun)(); }); });

  /* Two real demo pages loaded into the phone */
  var hosts={}, roots={}, currentPg='a';
  function fitZoom(k){ var host=hosts[k], z=host&&host.dataset.zoom, pg=roots[k]&&roots[k].querySelector('.pg'); if(z&&pg&&host.clientWidth){ pg.style.zoom=(host.clientWidth/ +z).toFixed(4); } }
  document.querySelectorAll('.demo-host').forEach(function(host){
    var k=host.dataset.k; hosts[k]=host;
    fetch(host.dataset.src).then(function(r){ if(!r.ok) throw 0; return r.text(); }).then(function(html){
      var doc=new DOMParser().parseFromString(html,'text/html');
      var root=host.attachShadow({mode:'open'}); roots[k]=root;
      var css=''; doc.querySelectorAll('style').forEach(function(s){ css+=s.textContent; });
      doc.querySelectorAll('script').forEach(function(s){ s.remove(); });
      root.innerHTML='<style>:host{display:block}'+css+'</style>'+doc.body.innerHTML;
      fitZoom(k); wireDemo(k, root);
    }).catch(function(){ host.innerHTML='<div class="loading">This demo opens on the live site</div>'; });
  });
  addEventListener('resize', function(){ fitZoom('a'); fitZoom('b'); });
  function wireDemo(k, root){
    if(k==='a'){
      var t=root.querySelector('.toast'), h, dk=root.querySelector('.dock'), hb=root.querySelector('.hero .wa'), sc=document.getElementById('scrA');
      function dockCheck(){ if(dk&&hb) dk.classList.toggle('show', hb.getBoundingClientRect().bottom < sc.getBoundingClientRect().top+40); }
      sc.addEventListener('scroll', dockCheck, {passive:true}); dockCheck();
      root.querySelectorAll('[data-wa]').forEach(function(b){ b.addEventListener('click', function(e){ e.preventDefault(); t.classList.remove('show'); void t.offsetWidth; t.classList.add('show'); clearTimeout(h); h=setTimeout(function(){ t.classList.remove('show'); },4200); }); });
    } else {
      root.querySelectorAll('[data-demo="submit"]').forEach(function(b){ b.addEventListener('click', function(){ b.textContent='Please fill in all required fields *'; }); });
    }
  }
  var pgBtns=[].slice.call(document.querySelectorAll('[data-pg]'));
  pgBtns.forEach(function(b){ b.addEventListener('click', function(){ currentPg=b.dataset.pg; pgBtns.forEach(function(x){ x.setAttribute('aria-pressed',String(x===b)); }); document.getElementById('scrA').hidden=currentPg!=='a'; document.getElementById('scrB').hidden=currentPg!=='b'; fitZoom(currentPg); ADA.track('page_compare',{view:currentPg}); }); });


  /* Afripact screenshot scrolls slowly, only while visible */
  document.querySelectorAll('.view').forEach(function(v){
    var img=v.querySelector('img');
    function setDur(){ var travel=img.offsetHeight-v.clientHeight; if(travel>0){ v.style.setProperty('--vh', v.clientHeight+'px'); img.style.setProperty('--dur', Math.round(travel/26)+'s'); } }
    if(img.complete) setDur(); else img.addEventListener('load', setDur);
    addEventListener('resize', setDur);
    ADA.watch(v, function(on){ v.classList.toggle('run', on && !reduce); }, .3);
  });

  /* Calculator */
  var profit=document.getElementById('profit'), spend=document.getElementById('spend'), fee=5500;
  function R(n){ return 'R'+Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','); }
  function calc(){
    var p=+profit.value, s=+spend.value, cost=fee+s, n=Math.max(1,Math.ceil(cost/p));
    document.getElementById('profitV').textContent=R(p);
    document.getElementById('spendV').textContent=R(s);
    document.getElementById('jobsN').textContent=n;
    document.getElementById('jobsT').textContent=(n===1?'extra job a month covers everything':'extra jobs a month cover everything');
    document.getElementById('costT').textContent=R(cost)+' a month: '+R(fee)+' to ADA plus '+R(s)+' in ads. Setup not included. Arithmetic on your numbers, not a promise of results.';
  }
  profit.addEventListener('input',calc); spend.addEventListener('input',calc);
  document.querySelectorAll('.seg button[data-fee]').forEach(function(b){ b.addEventListener('click', function(){ fee=+b.dataset.fee; document.querySelectorAll('.seg button[data-fee]').forEach(function(x){ x.setAttribute('aria-pressed',String(x===b)); }); calc(); }); });
  calc();
  document.querySelector('details.all').addEventListener('toggle', function(e){ if(e.target.open) ADA.track('view_all_prices',{}); });

  /* Magnetic main button */
  if(fine && !reduce) document.querySelectorAll('.magnetic').forEach(function(b){
    b.addEventListener('pointermove', function(e){ var r=b.getBoundingClientRect(); b.style.transform='translate('+((e.clientX-r.left-r.width/2)*.12).toFixed(1)+'px,'+((e.clientY-r.top-r.height/2)*.2).toFixed(1)+'px)'; });
    b.addEventListener('pointerleave', function(){ b.style.transform=''; });
  });
})();
