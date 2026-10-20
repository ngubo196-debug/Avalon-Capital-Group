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
var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
var IO = 'IntersectionObserver' in window;

/* ---------- helpers ---------- */
var I = {
  map:'<path d="M3 6l5-2 6 2 5-2v13l-5 2-6-2-5 2z"/><path d="M8 4v13M14 6v13"/>',
  truck:'<path d="M2 6h11v9H2zM13 9h4l3 3v3h-7"/><circle cx="6" cy="17" r="1.8"/><circle cx="16.5" cy="17" r="1.8"/>',
  list:'<path d="M9 6h11M9 12h11M9 18h11"/><circle cx="4.5" cy="6" r="1"/><circle cx="4.5" cy="12" r="1"/><circle cx="4.5" cy="18" r="1"/>',
  chart:'<path d="M4 20V11M10 20V5M16 20v-6M21 20H3"/>',
  box:'<path d="M3 7l9-4 9 4v10l-9 4-9-4z"/><path d="M3 7l9 4 9-4M12 11v10"/>',
  cart:'<path d="M3 4h2l2.4 11h11L21 7H7"/><circle cx="9" cy="19.5" r="1.4"/><circle cx="17" cy="19.5" r="1.4"/>',
  kanban:'<rect x="3" y="4" width="5" height="16" rx="1.5"/><rect x="10" y="4" width="5" height="10" rx="1.5"/><rect x="17" y="4" width="4" height="13" rx="1.5"/>',
  file:'<path d="M6 2h9l5 5v15H6z"/><path d="M15 2v5h5M9 13h8M9 17h6"/>',
  wallet:'<rect x="3" y="6" width="18" height="14" rx="2"/><path d="M3 10h18M16 15h2"/>',
  wrench:'<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.5-.5-.5-2.5z"/>',
  alert:'<path d="M12 3l9.5 17h-19z"/><path d="M12 10v4.5M12 17.5v.5"/>',
  check:'<path d="M4 12.5l5 5L20 6.5"/>',
  x:'<path d="M6 6l12 12M18 6L6 18"/>',
  clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  camera:'<path d="M3 8h4l2-3h6l2 3h4v12H3z"/><circle cx="12" cy="13.5" r="3.5"/>',
  msg:'<path d="M4 4h16v12H8l-4 4z"/>',
  fuel:'<path d="M4 20V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v15M3 20h12M14 9h2.5a1.5 1.5 0 0 1 1.5 1.5V16a1.5 1.5 0 0 0 3 0V8l-3-3"/><path d="M7 8h4"/>',
  pin:'<path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/>',
  send:'<path d="M21 3L10 14M21 3l-7 18-4-7-7-4z"/>',
  bell:'<path d="M6 16V11a6 6 0 1 1 12 0v5l2 2H4z"/><path d="M10 20a2 2 0 0 0 4 0"/>',
  down:'<path d="M12 4v12M6 11l6 6 6-6M4 20h16"/>'
};
function ic(n,c){ return '<svg class="ic'+(c?' '+c:'')+'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+(I[n]||'')+'</svg>'; }
var WAICON='<svg class="ic" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2z"/></svg>';
document.querySelectorAll('[data-ic]').forEach(function(el){ el.innerHTML = ic(el.dataset.ic); });
function grp(n){ return Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','); }
function R(n){ return 'R'+grp(n); }
function rk(n){ return n>=1000000 ? 'R'+(n/1000000).toFixed(2)+'m' : n>=10000 ? 'R'+Math.round(n/1000)+'k' : R(n); }
function rnd(a,b){ return a + Math.random()*(b-a); }
function ri(a,b){ return Math.floor(rnd(a,b+1)); }
function pick(a){ return a[Math.floor(Math.random()*a.length)]; }
function esc(s){ return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];}); }
function hm(m){ m=Math.round(m)%(24*60); var h=Math.floor(m/60), mm=m%60; return (h<10?'0':'')+h+':'+(mm<10?'0':'')+mm; }
function track(name, params){ ADA.track(name, params); }

/* =====================================================================
   APP ENGINE: a shell, views made of "parts" that repaint on change,
   a drawer for drill-down, toasts, and a live tick while visible.
   ===================================================================== */
function App(root, def){
  var st = def.seed();
  st.clock = def.start || 8*60+10; st.feed = []; st.seq = 0;
  var view = def.nav[0].id, drawerKey = null, timer = null, running = false, lastFocus = null;
  var api = {};

  root.innerHTML =
    '<aside class="side"><div class="alogo"><i>'+def.mark+'</i><div><b>'+def.name+'</b><small>'+def.kind+'</small></div></div>'+
    '<nav class="snav" aria-label="'+def.name+' sections">'+def.nav.map(function(n){ return '<button type="button" data-view="'+n.id+'">'+ic(n.icon)+'<span>'+n.label+'</span><em class="cnt" data-cnt="'+n.id+'" hidden></em></button>'; }).join('')+'</nav>'+
    '<div class="sfoot"><span class="live"><i></i>Live</span><span>Demo data, made up</span></div></aside>'+
    '<div class="amain"><div class="atop"><div><b class="at-t"></b><small class="at-s"></small></div><div class="at-r"><span class="clock">'+ic('clock')+'<span class="clk"></span></span><span class="online"><i>O</i><i>A</i><i>'+def.who+'</i><span>3 online</span></span></div></div>'+
    '<div class="ab" tabindex="-1"></div></div>'+
    '<div class="scrim" hidden></div>'+
    '<aside class="drawer" aria-hidden="true" role="dialog" aria-label="Details"><div class="dhead"><div class="dh"></div><button type="button" class="dx" aria-label="Close details">'+ic('x')+'</button></div><div class="dbody"></div></aside>'+
    '<div class="toasts" role="status" aria-live="polite"></div>';

  var body = root.querySelector('.ab'), tEl = root.querySelector('.at-t'), sEl = root.querySelector('.at-s'), clk = root.querySelector('.clk');
  var drawer = root.querySelector('.drawer'), dh = drawer.querySelector('.dh'), db = drawer.querySelector('.dbody'), scrim = root.querySelector('.scrim'), toasts = root.querySelector('.toasts');

  function paint(force){
    var v = def.views[view];
    body.querySelectorAll('[data-part]').forEach(function(el){
      var f = v.parts && v.parts[el.dataset.part]; if(!f) return;
      var h = f(st, api);
      if(force || el._h !== h){ el.innerHTML = h; el._h = h; }
    });
    if(v.update) v.update(body, st, api);
    if(drawerKey) paintDrawer();
    clk.textContent = 'Today '+hm(st.clock);
    if(def.counts){ var c = def.counts(st); root.querySelectorAll('[data-cnt]').forEach(function(e){ var n=c[e.dataset.cnt]; e.hidden=!n; e.textContent=n||''; }); }
  }
  function go(id){
    var old = def.views[view]; if(old && old.unmount) old.unmount(body, st, api);
    view = id;
    var v = def.views[id];
    root.querySelectorAll('.snav button').forEach(function(b){ b.setAttribute('aria-current', String(b.dataset.view===id)); });
    tEl.textContent = v.title; sEl.textContent = v.sub || '';
    body.innerHTML = v.html(st, api); body.scrollTop = 0;
    if(v.mount) v.mount(body, st, api);
    paint(true);
  }
  function paintDrawer(){
    var p = drawerKey.split(':'), d = def.drawer(p[0], p.slice(1).join(':'), st, api);
    if(!d){ close(); return; }
    if(dh._h !== d.head){ dh.innerHTML = d.head; dh._h = d.head; }
    if(db._h !== d.body){ db.innerHTML = d.body; db._h = d.body; }
  }
  function open(key){
    lastFocus = document.activeElement;
    drawerKey = key; dh._h = db._h = null; paintDrawer();
    scrim.hidden = false; drawer.classList.add('open'); drawer.setAttribute('aria-hidden','false');
    setTimeout(function(){ drawer.querySelector('.dx').focus({preventScroll:true}); }, 60);
  }
  function close(){
    drawerKey = null; drawer.classList.remove('open'); drawer.setAttribute('aria-hidden','true'); scrim.hidden = true;
    if(lastFocus && root.contains(lastFocus)) try{ lastFocus.focus({preventScroll:true}); }catch(e){}
  }
  function toast(text, tone){
    var t = document.createElement('div');
    t.className = 'toast '+(tone||'info');
    t.innerHTML = ic(tone==='good'?'check':tone==='bad'||tone==='warn'?'alert':'bell')+'<span>'+text+'</span>';
    toasts.prepend(t);
    while(toasts.children.length>2) toasts.lastChild.remove();
    setTimeout(function(){ t.classList.add('out'); setTimeout(function(){ t.remove(); }, 400); }, 4200);
  }
  function log(text, tone){
    st.feed.unshift({id:++st.seq, t:hm(st.clock), text:text, tone:tone||'info', at:Date.now()});
    if(st.feed.length>14) st.feed.length = 14;
  }
  api.st = st; api.toast = toast; api.log = log; api.open = open; api.close = close; api.go = go;
  api.paint = function(){ paint(); };
  api.isNew = function(at){ return Date.now()-at < 1500; };

  root.addEventListener('click', function(e){
    var t = e.target.closest('[data-view],[data-open],[data-act],.dx,.scrim'); if(!t || !root.contains(t)) return;
    if(t.dataset.view){ close(); go(t.dataset.view); return; }
    if(t.classList.contains('dx') || t.classList.contains('scrim')){ close(); return; }
    if(t.tagName==='INPUT') return;
    if(t.dataset.act){ e.preventDefault(); def.act(t.dataset.act, t.dataset.arg, st, api, t); paint(); return; }
    if(t.dataset.open){ open(t.dataset.open); }
  });
  root.addEventListener('change', function(e){ var t=e.target; if(t.dataset.act){ def.act(t.dataset.act, t.checked, st, api, t); paint(); } });
  root.addEventListener('keydown', function(e){
    if(e.key==='Escape' && drawerKey){ close(); e.stopPropagation(); }
    if((e.key==='Enter'||e.key===' ') && e.target.dataset && e.target.dataset.open && e.target.tagName!=='BUTTON'){ e.preventDefault(); open(e.target.dataset.open); }
  });

  function loop(){
    if(!running) return;
    st.clock += ri(2,4);
    def.tick(st, api);
    paint();
    timer = setTimeout(loop, rnd(2400,3600));
  }
  api.start = function(){ if(running || reduce) return; running = true; if(def.views[view].resume) def.views[view].resume(body,st,api); timer = setTimeout(loop, 1200); };
  api.stop = function(){ running = false; clearTimeout(timer); if(def.views[view].pause) def.views[view].pause(body,st,api); };
  api.running = function(){ return running; };
  go(view);
  return api;
}

/* ---------- shared parts ---------- */
function feedHTML(st, api, n){
  var items = st.feed.slice(0, n||6);
  if(!items.length) return '<p class="empty">Updates from the team show up here as they happen.</p>';
  return '<div class="list">'+items.map(function(f){
    return '<div class="li'+(api.isNew(f.at)?' nw':'')+'"><span class="dot '+f.tone+'"></span><p>'+f.text+'</p><time>'+f.t+'</time></div>';
  }).join('')+'</div>';
}
function kpi(label, value, sub, cls, meter){
  return '<div class="kpi'+(cls?' '+cls:'')+'"><small>'+label+'</small><b>'+value+'</b>'+(sub?'<span class="sub">'+sub+'</span>':'')+(meter!=null?'<div class="meter"><i style="width:'+Math.min(100,meter)+'%"></i></div>':'')+'</div>';
}

/* =====================================================================
   DEMO: FLEET (Sample Freight)
   ===================================================================== */
var ROUTES = {
  n3:{d:'M70 40 C 82 60, 88 72, 95 85 S 118 120, 130 140 S 160 180, 185 195 S 260 228, 300 232 S 390 250, 430 262 S 490 286, 515 292', a:'Estcourt', b:'Durban',
      where:function(t){ return t<.1?'N3 near Estcourt':t<.22?'N3 near Mooi River':t<.36?'N3 near Howick':t<.5?'N3 at Pietermaritzburg':t<.68?'N3 near Camperdown':t<.86?'N3 near Pinetown':'Durban'; }},
  n2:{d:'M515 292 C 525 280, 532 270, 535 262 S 548 230, 553 212 S 575 120, 588 78', a:'Durban', b:'Richards Bay',
      where:function(t){ return t<.15?'Durban':t<.32?'N2 near Umhlanga':t<.55?'N2 near Ballito':t<.85?'N2 near Stanger':'Richards Bay'; }}
};
var YARDS = {pmb:{x:185,y:195,name:'PMB yard'}, dbn:{x:515,y:292,name:'Durban yard'}};
var fleetDef = {
  id:'fleet', name:'Sample Freight', kind:'Fleet and deliveries', mark:'SF', who:'D', start:8*60+42,
  nav:[{id:'live',label:'Live map',icon:'map'},{id:'veh',label:'Vehicles',icon:'truck'},{id:'cost',label:'Running costs',icon:'fuel'}],
  seed:function(){
    var v = [
      {id:'SF 01',type:'8-ton truck',st:'road',route:'n3',t:.2,dir:1,sp:.026,drv:'Driver 03',odo:184220,svc:190000,fuel:7420,mnt:1850,disc:'Mar 2027'},
      {id:'SF 02',type:'8-ton truck',st:'road',route:'n3',t:.64,dir:-1,sp:.022,drv:'Driver 01',odo:221940,svc:230000,fuel:8110,mnt:0,disc:'Jan 2027'},
      {id:'SF 03',type:'4-ton truck',st:'wk',yard:'pmb',drv:'Driver 06',odo:150340,svc:150000,fuel:3920,mnt:6400,disc:'Jul 2027'},
      {id:'SF 04',type:'4-ton truck',st:'road',route:'n2',t:.3,dir:1,sp:.03,drv:'Driver 02',odo:98410,svc:100000,fuel:5260,mnt:0,disc:'Nov 2027'},
      {id:'SF 05',type:'Panel van',st:'road',route:'n3',t:.86,dir:1,sp:.034,drv:'Driver 05',odo:64220,svc:70000,fuel:3180,mnt:950,disc:'May 2027'},
      {id:'SF 06',type:'1-ton bakkie',st:'road',route:'n3',t:.42,dir:1,sp:.03,drv:'Driver 04',odo:119380,svc:120000,fuel:2740,mnt:0,disc:'Feb 2027'},
      {id:'SF 07',type:'8-ton truck',st:'load',yard:'dbn',drv:'Driver 07',odo:176900,svc:185000,fuel:6880,mnt:2200,disc:'Aug 2027'},
      {id:'SF 08',type:'Tipper',st:'road',route:'n2',t:.74,dir:-1,sp:.024,drv:'Driver 08',odo:204510,svc:210000,fuel:9340,mnt:3100,disc:'Dec 2026'},
      {id:'SF 09',type:'Panel van',st:'park',yard:'pmb',drv:'Driver 09',odo:58770,svc:60000,fuel:1460,mnt:0,disc:'31 Oct 2026'}
    ];
    return {veh:v, deliv:9, target:24, fuelMonth:84320, mntMonth:14500, kmMonth:41200,
      alerts:[
        {key:'svc-SF 03',id:'SF 03',text:'<b>SF 03</b> service overdue by 340 km. In the workshop now.',tone:'warn'},
        {key:'disc-SF 09',id:'SF 09',text:'<b>SF 09</b> licence disc expires 31 Oct.',tone:'bad',act:'renew',btn:'Send renewal'},
        {key:'svc-SF 06',id:'SF 06',text:'<b>SF 06</b> service due in 620 km.',tone:'warn',act:'book',btn:'Book service'}
      ], tickN:0, lateId:null};
  },
  counts:function(st){ return {live:st.alerts.length}; },
  chip:function(v,st){
    if(st.lateId===v.id) return '<span class="chip bad">Running late</span>';
    return {road:'<span class="chip good">On the road</span>',wk:'<span class="chip warn">In workshop</span>',load:'<span class="chip info">Loading</span>',park:'<span class="chip mute">Parked</span>'}[v.st];
  },
  where:function(v){ return v.st==='road' ? ROUTES[v.route].where(v.t) : YARDS[v.yard].name; },
  views:{
    live:{
      title:'Live map', sub:'Sample Freight, KZN Midlands to the coast',
      html:function(){
        return '<div class="kpis" data-part="kpis"></div>'+
        '<div class="g2"><div class="pan map-pan"><div class="pan-h"><b>Where everyone is</b><span class="mut">Tap a vehicle</span></div>'+mapSVG()+
        '<div class="legend"><span><i style="background:var(--accent)"></i>On the road</span><span><i style="background:var(--app-muted)"></i>At the yard</span><span><i style="background:var(--warn)"></i>Workshop</span><span><i style="background:var(--bad)"></i>Running late</span></div></div>'+
        '<div class="col"><div class="pan"><div class="pan-h"><b>Needs attention</b><span class="mut" data-part="acount"></span></div><div data-part="alerts"></div></div>'+
        '<div class="pan"><div class="pan-h"><b>Today</b><span class="mut">Live</span></div><div data-part="feed"></div></div></div></div>';
      },
      parts:{
        kpis:function(st){
          var onRoad = st.veh.filter(function(v){return v.st==='road';}).length;
          return kpi('On the road', onRoad+' of '+st.veh.length, 'Live from the drivers\' phones')+
            kpi('Deliveries today', st.deliv+' of '+st.target, 'Signed on delivery', '', st.deliv/st.target*100)+
            kpi('Fuel this month', R(st.fuelMonth), 'Slips photographed')+
            kpi('Needs attention', st.alerts.length, st.alerts.length?'Service, discs, late drops':'All clear', st.alerts.length?'alert':'');
        },
        acount:function(st){ return st.alerts.length+' open'; },
        alerts:function(st){
          if(!st.alerts.length) return '<p class="empty">Nothing needs you right now.</p>';
          return '<div class="list">'+st.alerts.map(function(a){
            return '<div class="li"><span class="dot '+a.tone+'"></span><p>'+a.text+'</p>'+(a.act?'<button type="button" class="abtn" data-act="'+a.act+'" data-arg="'+a.id+'">'+a.btn+'</button>':'<button type="button" class="abtn" data-open="veh:'+a.id+'">Open</button>')+'</div>';
          }).join('')+'</div>';
        },
        feed:function(st,api){ return feedHTML(st,api,5); }
      },
      mount:function(body, st, api){
        var svg = body.querySelector('.map'), layer = svg.querySelector('.trucks');
        var paths = {}; Object.keys(ROUTES).forEach(function(k){ var p=svg.querySelector('[data-route="'+k+'"]'); paths[k]={el:p,len:p.getTotalLength()}; });
        layer.innerHTML = st.veh.map(function(v){
          return '<g class="trk" data-id="'+v.id+'" data-open="veh:'+v.id+'" tabindex="0" role="button" aria-label="'+v.id+', '+v.type+'"><circle class="h" r="15"/><circle class="b" r="9"/><text>'+v.id.slice(-2)+'</text></g>';
        }).join('');
        var marks = {}; layer.querySelectorAll('.trk').forEach(function(g){ marks[g.dataset.id]=g; });
        var last = performance.now(), raf = null;
        function place(){
          st.veh.forEach(function(v){
            var g = marks[v.id], x, y, off=0;
            if(v.st==='road'){ var P=paths[v.route], pt=P.el.getPointAtLength(Math.max(0,Math.min(1,v.t))*P.len); x=pt.x; y=pt.y; }
            else { var Y=YARDS[v.yard]; var same=st.veh.filter(function(o){return o.st!=='road'&&o.yard===v.yard;}); off=same.indexOf(v); x=Y.x+14+off*20; y=Y.y+20; }
            g.setAttribute('transform','translate('+x.toFixed(1)+','+y.toFixed(1)+')');
            g.setAttribute('class','trk'+(v.st==='wk'?' wk':v.st!=='road'?' idle':'')+(st.lateId===v.id?' late':''));
          });
        }
        function frame(now){
          var dt = Math.min(.05,(now-last)/1000); last = now;
          st.veh.forEach(function(v){
            if(v.st!=='road') return;
            v.t += v.sp*dt*v.dir;
            if(v.t>=1 || v.t<=0){
              v.t = Math.max(0,Math.min(1,v.t)); v.dir*=-1;
              var place = v.t>=1 ? ROUTES[v.route].b : ROUTES[v.route].a;
              st.deliv = Math.min(st.target, st.deliv+1);
              if(st.lateId===v.id){ st.lateId=null; st.alerts=st.alerts.filter(function(a){return a.key!=='late';}); }
              api.log('<b>'+v.id+'</b> delivered in '+place+'. Signed on the driver\'s phone.','good');
              api.toast(v.id+' delivered in '+place+'.','good');
              api.paint();
            }
          });
          place();
          raf = requestAnimationFrame(frame);
        }
        place();
        this._run = function(){ if(raf || reduce) return; last=performance.now(); raf=requestAnimationFrame(frame); };
        this._halt = function(){ if(raf) cancelAnimationFrame(raf); raf=null; };
        this._place = place;
        if(api.running && api.running()) this._run();
      },
      update:function(){ if(this._place) this._place(); },
      resume:function(){ if(this._run) this._run(); },
      pause:function(){ if(this._halt) this._halt(); },
      unmount:function(){ if(this._halt) this._halt(); this._run=this._halt=this._place=null; }
    },
    veh:{
      title:'Vehicles', sub:'9 vehicles, 2 yards',
      html:function(){ return '<div class="pan"><div class="tbl vt" data-part="table"></div></div>'; },
      parts:{ table:function(st){
        return '<div class="tr th"><span>Reg</span><span>Vehicle</span><span>Status</span><span>Where</span><span>Next service</span><span>Disc</span></div>'+
          st.veh.map(function(v){
            var left=v.svc-v.odo, pct=Math.max(2,Math.min(100,left/10000*100)), cls=left<0?'bad':left<1000?'warn':'';
            return '<div class="tr" tabindex="0" role="button" data-open="veh:'+v.id+'"><span class="k">'+v.id+'</span><span>'+v.type+'<br><span class="s">'+v.drv+'</span></span><span>'+fleetDef.chip(v,st)+'</span><span>'+fleetDef.where(v)+'</span><span><div class="bar"><i class="'+cls+'" style="width:'+pct+'%"></i></div><span class="s">'+(left<0?grp(-left)+' km overdue':grp(left)+' km left')+'</span></span><span class="s">'+v.disc+'</span></div>';
          }).join('');
      }}
    },
    cost:{
      title:'Running costs', sub:'This month, per vehicle',
      html:function(){ return '<div class="kpis" data-part="kpis"></div><div class="pan" style="margin-top:12px"><div class="pan-h"><b>Fuel and maintenance by vehicle</b><span class="mut"><span style="color:var(--accent)">&#9632;</span> Fuel &nbsp; <span style="color:var(--warn)">&#9632;</span> Maintenance</span></div><div class="hb" data-part="bars"></div></div>'; },
      parts:{
        kpis:function(st){
          var tot=st.fuelMonth+st.mntMonth;
          return kpi('Fuel', R(st.fuelMonth), 'This month')+kpi('Maintenance', R(st.mntMonth), 'This month')+kpi('Kilometres', grp(st.kmMonth), 'This month')+kpi('Cost per km', 'R'+(tot/st.kmMonth).toFixed(2), 'Fuel plus maintenance');
        },
        bars:function(st){
          var max=Math.max.apply(null, st.veh.map(function(v){return v.fuel+v.mnt;}));
          return st.veh.slice().sort(function(a,b){return (b.fuel+b.mnt)-(a.fuel+a.mnt);}).map(function(v){
            return '<div class="hb-row" data-open="veh:'+v.id+'" style="cursor:pointer"><span class="k">'+v.id+'</span><div class="stack" style="width:'+((v.fuel+v.mnt)/max*100)+'%"><i class="a" style="width:'+(v.fuel/(v.fuel+v.mnt)*100)+'%"></i><i class="b" style="width:'+(v.mnt/(v.fuel+v.mnt)*100)+'%"></i></div><span class="num">'+R(v.fuel+v.mnt)+'</span></div>';
          }).join('');
        }
      }
    }
  },
  drawer:function(kind, id, st){
    var v = st.veh.filter(function(x){return x.id===id;})[0]; if(!v) return null;
    var left=v.svc-v.odo;
    return {
      head:'<b>'+v.id+'</b><small>'+v.type+' &middot; '+v.drv+'</small>',
      body:'<div>'+fleetDef.chip(v,st)+'</div>'+
        '<div class="dgrid"><div><small>Where</small><b style="font-size:13px">'+fleetDef.where(v)+'</b></div><div><small>Odometer</small><b>'+grp(v.odo)+' km</b></div><div><small>Next service</small><b>'+(left<0?grp(-left)+' km over':grp(left)+' km')+'</b></div><div><small>Licence disc</small><b style="font-size:13px">'+v.disc+'</b></div><div><small>Fuel this month</small><b>'+R(v.fuel)+'</b></div><div><small>Maintenance</small><b>'+R(v.mnt)+'</b></div></div>'+
        '<div class="dsec">Recent</div><div class="tl"><div><b>Pre-trip check done</b> on the driver\'s phone<time>Today 06:48</time></div><div><b>Fuel slip</b> photographed and saved<time>Yesterday 15:20</time></div><div><b>Service</b> at '+grp(v.svc-10000)+' km<time>Last service</time></div></div>'+
        '<div class="dacts"><button type="button" class="abtn wa" data-act="msgdrv" data-arg="'+v.id+'">'+WAICON+'Message driver</button><button type="button" class="abtn" data-act="book" data-arg="'+v.id+'">'+ic('wrench')+'Book service</button></div>'
    };
  },
  act:function(a, id, st, api){
    if(a==='book'){ st.alerts=st.alerts.filter(function(x){return x.key!=='svc-'+id;}); api.log('Service booked for <b>'+id+'</b>, Thursday 08:00.','info'); api.toast('Service booked for '+id+', Thursday 08:00. Driver notified.','good'); }
    if(a==='renew'){ st.alerts=st.alerts.filter(function(x){return x.key!=='disc-'+id;}); api.log('Disc renewal for <b>'+id+'</b> sent to the office.','info'); api.toast('Renewal task sent to the office for '+id+'.','good'); }
    if(a==='msgdrv'){ api.toast('In your system this opens WhatsApp to the driver of '+id+', with the drop details filled in.','info'); }
    if(a==='late'){ api.toast('In your system this sends the customer a WhatsApp with the new arrival time.','info'); }
  },
  tick:function(st, api){
    st.tickN++;
    var road = st.veh.filter(function(v){return v.st==='road';});
    road.forEach(function(v){ var k=ri(6,14); v.odo+=k; st.kmMonth+=k; if(v.svc-v.odo<1000 && !st.alerts.some(function(a){return a.key==='svc-'+v.id;})){ st.alerts.push({key:'svc-'+v.id,id:v.id,text:'<b>'+v.id+'</b> service due in '+grp(v.svc-v.odo)+' km.',tone:'warn',act:'book',btn:'Book service'}); api.toast(v.id+' is due for a service soon.','warn'); } });
    var r = Math.random();
    if(st.tickN===3){ var k7=st.veh[6]; k7.st='road'; k7.route='n3'; k7.t=.995; k7.dir=-1; k7.sp=.024; api.log('<b>SF 07</b> loaded and left the Durban yard for Estcourt.','info'); api.paint(); return; }
    if(r<.35 && road.length){ var v=pick(road), amt=ri(12,26)*100+ri(0,9)*10; v.fuel+=amt; st.fuelMonth+=amt; api.log('<b>'+v.id+'</b> filled up '+R(amt)+', '+ROUTES[v.route].where(v.t)+'. Slip photo saved.','mute'); }
    else if(r<.5 && !st.lateId && road.length){ var lv=pick(road); st.lateId=lv.id; st.alerts.unshift({key:'late',id:lv.id,text:'<b>'+lv.id+'</b> running 20 min late. Customer not told yet.',tone:'bad',act:'late',btn:'Tell customer'}); api.toast(lv.id+' is running 20 minutes late.','bad'); }
    else if(r<.62){ api.log('Pre-trip check done for <b>'+pick(road.length?road:st.veh).id+'</b>. All OK.','mute'); }
    else if(r<.72 && st.veh[2].st==='wk' && st.tickN>6){ var w=st.veh[2]; w.st='park'; w.svc=w.odo+10000; st.alerts=st.alerts.filter(function(a){return a.key!=='svc-SF 03';}); api.log('<b>SF 03</b> service done. Back at the PMB yard.','good'); api.toast('SF 03 is out of the workshop.','good'); }
  }
};
function mapSVG(){
  return '<svg class="map" viewBox="0 0 640 360" role="img" aria-label="Map of the KZN Midlands and coast with live vehicle positions">'+
    '<rect width="640" height="360" fill="var(--map-land)"/>'+
    '<path d="M0 300 C 60 270, 120 300, 170 330 S 260 360, 300 360 L0 360Z" fill="var(--map-contour)"/>'+
    '<path d="M0 230 C 40 210, 70 230, 110 250 S 190 280, 240 300" fill="none" stroke="var(--map-contour)" stroke-width="18"/>'+
    '<path d="M-10 140 C 20 120, 30 160, 20 200" fill="none" stroke="var(--map-contour)" stroke-width="14"/>'+
    '<path d="M470 360 C 500 330, 525 312, 540 290 S 570 200, 588 150 S 612 50, 624 0 L640 0 L640 360Z" fill="var(--map-sea)"/>'+
    '<text class="sea-l" x="592" y="318">Indian</text><text class="sea-l" x="592" y="332">Ocean</text>'+
    Object.keys(ROUTES).map(function(k){ var d=ROUTES[k].d; return '<path d="'+d+'" fill="none" stroke="var(--map-road)" stroke-width="7" stroke-linecap="round"/><path d="'+d+'" fill="none" stroke="var(--map-road-in)" stroke-width="2.5" stroke-linecap="round"/><path class="flow" d="'+d+'"/><path data-route="'+k+'" d="'+d+'" fill="none" stroke="none"/>'; }).join('')+
    '<g class="shield"><rect x="234" y="208" width="22" height="14" rx="3"/><text x="245" y="218" text-anchor="middle">N3</text></g>'+
    '<g class="shield"><rect x="566" y="160" width="22" height="14" rx="3"/><text x="577" y="170" text-anchor="middle">N2</text></g>'+
    [['Estcourt',70,40,10,-6],['Mooi River',95,85,10,4],['Howick',130,140,10,4],['Pietermaritzburg',185,195,-8,-14],['Camperdown',300,232,-24,-12],['Pinetown',430,262,-20,-12],['Durban',515,292,-46,18],['Umhlanga',535,262,-58,4],['Ballito',553,212,-46,4],['Richards Bay',588,78,-80,0]].map(function(t){
      return '<circle cx="'+t[1]+'" cy="'+t[2]+'" r="3" fill="var(--app-panel)" stroke="var(--map-txt)" stroke-width="1.5"/><text class="town" x="'+(t[1]+t[3])+'" y="'+(t[2]+t[4])+'">'+t[0]+'</text>';
    }).join('')+
    '<g class="trucks"></g></svg>';
}

/* =====================================================================
   DEMO: STOCK (Sample Building Supply)
   ===================================================================== */
var stockDef = {
  id:'stock', name:'Sample Building Supply', kind:'Building supplies', mark:'SB', who:'S', start:9*60+5,
  nav:[{id:'stock',label:'Stock levels',icon:'box'},{id:'orders',label:'Supplier orders',icon:'cart'},{id:'sales',label:'Sales',icon:'chart'}],
  seed:function(){
    var items=[
      {id:'CEM',name:'Cement 50 kg',unit:'bags',on:240,min:150,re:300,price:109,sup:'Cement and aggregate supplier',sell:[6,22]},
      {id:'SND',name:'Building sand',unit:'m³',on:18,min:10,re:20,price:420,sup:'Cement and aggregate supplier',sell:[1,3]},
      {id:'BRK',name:'Clay stock bricks',unit:'bricks',on:12400,min:8000,re:10000,price:2.6,sup:'Brickworks',sell:[200,900],step:100},
      {id:'IBR',name:'IBR roof sheet 3.6 m',unit:'sheets',on:64,min:40,re:80,price:389,sup:'Steel and roofing supplier',sell:[2,10]},
      {id:'MSH',name:'Steel mesh ref 193',unit:'sheets',on:22,min:25,re:60,price:695,sup:'Steel and roofing supplier',sell:[1,4]},
      {id:'ADH',name:'Tile adhesive 20 kg',unit:'bags',on:46,min:40,re:120,price:149,sup:'Tile and adhesive supplier',sell:[2,6]},
      {id:'PVC',name:'PVC pipe 110 mm, 6 m',unit:'lengths',on:58,min:30,re:60,price:279,sup:'Plumbing wholesaler',sell:[1,5]},
      {id:'PVA',name:'PVA paint 20 L',unit:'tins',on:14,min:12,re:24,price:899,sup:'Paint wholesaler',sell:[1,2]},
      {id:'TMB',name:'Pine timber 38 x 114, 6.6 m',unit:'lengths',on:120,min:80,re:150,price:229,sup:'Timber yard',sell:[4,16]},
      {id:'WPF',name:'Waterproofing 20 L',unit:'tins',on:9,min:10,re:24,price:1150,sup:'Paint wholesaler',sell:[1,2]}
    ];
    items.forEach(function(it){ it.hist=[]; for(var i=0;i<7;i++) it.hist.push(Math.round(it.on*(1+ (7-i)*rnd(.02,.06)))); it.hist.push(it.on); });
    return {items:items, orders:[
      {id:'PO-2291',item:'MSH',qty:60,stage:'drafted',at:0},
      {id:'PO-2288',item:'WPF',qty:24,stage:'sent',eta:'Tomorrow',at:0},
      {id:'PO-2286',item:'IBR',qty:80,stage:'sent',eta:'Today',at:0},
      {id:'PO-2284',item:'TMB',qty:150,stage:'done',at:0}
    ], salesToday:6840, sales:[31200,28400,35600,0,22800,41900,38700,33400,36100,29800,0,24600,44300,39200], tickN:0};
  },
  item:function(st,id){ return st.items.filter(function(i){return i.id===id;})[0]; },
  openOrder:function(st,id){ return st.orders.filter(function(o){return o.item===id && o.stage!=='done';})[0]; },
  status:function(st,it){
    var o=stockDef.openOrder(st,it.id);
    if(o && o.stage==='sent') return '<span class="chip info">On order</span>';
    if(o && o.stage==='drafted') return '<span class="chip warn">Order drafted</span>';
    if(it.on<=it.min) return '<span class="chip bad">Running low</span>';
    return '<span class="chip good">In stock</span>';
  },
  counts:function(st){ return {orders:st.orders.filter(function(o){return o.stage==='drafted';}).length}; },
  views:{
    stock:{
      title:'Stock levels', sub:'Counted live as the tills ring up',
      html:function(){ return '<div class="kpis" data-part="kpis"></div><div class="g2"><div class="pan"><div class="tbl st" data-part="table"></div></div><div class="col"><div class="pan"><div class="pan-h"><b>Today</b><span class="mut">Live</span></div><div data-part="feed"></div></div></div></div>'; },
      parts:{
        kpis:function(st){
          var val=st.items.reduce(function(s,i){return s+i.on*i.price;},0), low=st.items.filter(function(i){return i.on<=i.min;}).length, out=st.orders.filter(function(o){return o.stage==='sent';}).length;
          return kpi('Stock on hand', rk(val), 'At selling price')+kpi('Sales today', R(st.salesToday), 'Till and account sales')+kpi('Running low', low, low?'Orders drafted for you':'All above minimum', low?'alert':'')+kpi('Orders on the way', out, 'From suppliers');
        },
        table:function(st){
          return '<div class="tr th"><span>Item</span><span class="num">On hand</span><span>Level</span><span>Status</span><span></span></div>'+st.items.map(function(it){
            var cap=it.min*2.6, pct=Math.max(2,Math.min(100,it.on/cap*100)), mpct=it.min/cap*100, cls=it.on<=it.min?'bad':it.on<=it.min*1.2?'warn':'';
            return '<div class="tr'+(it.flash&&Date.now()-it.flash<1500?' flash':'')+'" tabindex="0" role="button" data-open="item:'+it.id+'"><span><b>'+it.name+'</b></span><span class="num k">'+grp(it.on)+' <span class="s">'+it.unit+'</span></span><span><div class="bar"><i class="'+cls+'" style="width:'+pct+'%"></i><u style="left:'+mpct+'%"></u></div></span><span>'+stockDef.status(st,it)+'</span><span class="s">&#8250;</span></div>';
          }).join('');
        },
        feed:function(st,api){ return feedHTML(st,api,6); }
      }
    },
    orders:{
      title:'Supplier orders', sub:'Drafted when stock drops below your minimum',
      html:function(){ return '<div class="kb k3" data-part="kb"></div>'; },
      parts:{ kb:function(st,api){
        var cols=[['drafted','Drafted, check and send'],['sent','Sent to supplier'],['done','Delivered and counted']];
        return cols.map(function(c){
          var os=st.orders.filter(function(o){return o.stage===c[0];});
          return '<div class="kcol"><div class="kcol-h">'+c[1]+'<span>'+os.length+'</span></div>'+(os.length?os.map(function(o){
            var it=stockDef.item(st,o.item);
            return '<div class="kc'+(api.isNew(o.at)?' nw':'')+'" tabindex="0" role="button" data-open="item:'+it.id+'"><b>'+it.name+'</b><div class="meta"><span>'+o.id+' &middot; '+grp(o.qty)+' '+it.unit+'</span><span class="v">'+R(o.qty*it.price*.72)+'</span></div>'+
              (o.stage==='drafted'?'<button type="button" class="abtn wa" data-act="send" data-arg="'+o.id+'">'+WAICON+'Send to supplier</button>':o.stage==='sent'?'<div class="meta"><span>Arrives '+o.eta+'</span><button type="button" class="abtn" data-act="recv" data-arg="'+o.id+'">Mark received</button></div>':'<div class="meta"><span class="chip good">Counted in</span></div>')+'</div>';
          }).join(''):'<p class="empty">Nothing here.</p>')+'</div>';
        }).join('');
      }}
    },
    sales:{
      title:'Sales', sub:'Last 14 trading days',
      html:function(){ return '<div class="kpis" data-part="kpis"></div><div class="g2"><div class="pan"><div class="pan-h"><b>Sales by day</b><span class="mut">Today in dark blue</span></div><div data-part="chart"></div></div><div class="pan"><div class="pan-h"><b>Top movers this week</b></div><div data-part="top"></div></div></div>'; },
      parts:{
        kpis:function(st){
          var days=st.sales.filter(function(x){return x>0;}), avg=days.reduce(function(a,b){return a+b;},0)/days.length;
          return kpi('Today', R(st.salesToday), 'So far')+kpi('Daily average', R(avg), 'Last 14 days')+kpi('Best day', R(Math.max.apply(null,st.sales)), 'Last 14 days')+kpi('Pace vs average', Math.round(st.salesToday/avg*100)+'%', 'By '+hm(st.clock), '', st.salesToday/avg*100);
        },
        chart:function(st){
          var data=st.sales.slice(1).concat([st.salesToday]), W=420, H=190, pl=36, pb=22, max=50000, bw=(W-pl-8)/data.length;
          var g='', ticks=[0,10000,20000,30000,40000,50000];
          ticks.forEach(function(t){ var y=H-pb-(t/max)*(H-pb-10); g+='<line class="grid" x1="'+pl+'" x2="'+W+'" y1="'+y+'" y2="'+y+'"/><text x="'+(pl-6)+'" y="'+(y+3)+'" text-anchor="end">'+(t/1000)+'k</text>'; });
          data.forEach(function(v,i){ var h=(v/max)*(H-pb-10), x=pl+4+i*bw; g+='<rect class="bx'+(i===data.length-1?' today':'')+'" x="'+(x+2)+'" y="'+(H-pb-h)+'" width="'+(bw-5)+'" height="'+Math.max(0,h)+'" rx="3"/>'; if(i%2===1||i===data.length-1) g+='<text x="'+(x+bw/2)+'" y="'+(H-6)+'" text-anchor="middle">'+(i===data.length-1?'Today':'-'+(data.length-1-i)+'d')+'</text>'; });
          return '<svg class="chart" viewBox="0 0 '+W+' '+H+'" role="img" aria-label="Sales by day for the last 14 days">'+g+'</svg>';
        },
        top:function(st){
          var rows=st.items.map(function(it){ return {it:it, v:(it.hist[0]-it.on)*it.price}; }).sort(function(a,b){return b.v-a.v;}).slice(0,5);
          var max=rows[0].v||1;
          return '<div class="hb">'+rows.map(function(r){ return '<div class="hb-row" style="grid-template-columns:minmax(0,1.2fr) minmax(0,1fr) 70px"><span style="font-size:12px">'+r.it.name+'</span><div class="stack"><i class="a" style="width:'+Math.max(4,r.v/max*100)+'%"></i></div><span class="num">'+rk(Math.max(0,r.v))+'</span></div>'; }).join('')+'</div>';
        }
      }
    }
  },
  drawer:function(kind,id,st){
    var it=stockDef.item(st,id); if(!it) return null;
    var o=stockDef.openOrder(st,id), h=it.hist, mx=Math.max.apply(null,h), mn=Math.min.apply(null,h.concat([it.min]));
    var pts=h.map(function(v,i){ return (i/(h.length-1)*300).toFixed(1)+','+(70-(v-mn)/((mx-mn)||1)*60).toFixed(1); }).join(' ');
    var my=70-(it.min-mn)/((mx-mn)||1)*60;
    return {
      head:'<b>'+it.name+'</b><small>'+it.sup+'</small>',
      body:'<div>'+stockDef.status(st,it)+'</div>'+
        '<div class="dgrid"><div><small>On hand</small><b>'+grp(it.on)+' '+it.unit+'</b></div><div><small>Reorder below</small><b>'+grp(it.min)+'</b></div><div><small>Reorder amount</small><b>'+grp(it.re)+'</b></div><div><small>Selling price</small><b>'+R(it.price)+'</b></div></div>'+
        '<div class="dsec">Last 7 days</div><svg viewBox="0 0 300 80" class="chart" role="img" aria-label="Stock level over the last 7 days"><line class="grid" x1="0" x2="300" y1="'+my.toFixed(1)+'" y2="'+my.toFixed(1)+'" stroke-dasharray="4 4"/><text x="300" y="'+(my-4).toFixed(1)+'" text-anchor="end">Minimum</text><polyline points="'+pts+'" fill="none" stroke="var(--accent)" stroke-width="2"/><circle cx="300" cy="'+pts.split(' ').pop().split(',')[1]+'" r="4" fill="var(--accent)"/></svg>'+
        (o?'<div class="dacts">'+(o.stage==='drafted'?'<button type="button" class="abtn wa" data-act="send" data-arg="'+o.id+'">'+WAICON+'Send '+o.id+' to supplier</button>':'<span class="chip info">'+o.id+' arrives '+o.eta+'</span><button type="button" class="abtn" data-act="recv" data-arg="'+o.id+'">Mark received</button>')+'</div>':'<div class="dacts"><button type="button" class="abtn" data-act="draft" data-arg="'+it.id+'">'+ic('cart')+'Draft an order</button></div>')
    };
  },
  act:function(a,arg,st,api){
    var o=st.orders.filter(function(x){return x.id===arg;})[0];
    if(a==='send' && o){ o.stage='sent'; o.eta=pick(['Tomorrow','Thursday','Friday']); o.at=Date.now(); var it=stockDef.item(st,o.item); api.log(o.id+' sent to supplier on WhatsApp: '+grp(o.qty)+' '+it.unit+' '+it.name+'.','info'); api.toast('Sent. In your system this goes to the supplier on WhatsApp.','good'); }
    if(a==='recv' && o){ var it2=stockDef.item(st,o.item); it2.on+=o.qty; it2.flash=Date.now(); it2.hist.push(it2.on); it2.hist.shift(); o.stage='done'; o.at=Date.now(); api.log('Delivery counted in: <b>'+grp(o.qty)+' '+it2.unit+'</b> '+it2.name+'.','good'); api.toast('Stock updated: +'+grp(o.qty)+' '+it2.unit+' '+it2.name+'.','good'); }
    if(a==='draft'){ var it3=stockDef.item(st,arg); var no={id:'PO-'+(2292+st.orders.length),item:arg,qty:it3.re,stage:'drafted',at:Date.now()}; st.orders.unshift(no); api.log('Order '+no.id+' drafted for '+it3.name+'.','info'); api.toast('Order drafted. Check it under Supplier orders.','good'); }
  },
  tick:function(st,api){
    st.tickN++;
    var n=Math.random()<.4?2:1;
    for(var k=0;k<n;k++){
      var it=pick(st.items.filter(function(i){return i.on>0;}));
      var q=ri(it.sell[0],it.sell[1]); if(it.step) q=Math.round(q/it.step)*it.step; q=Math.min(q,it.on);
      var wasAbove=it.on>it.min; it.on-=q; it.flash=Date.now(); it.hist[it.hist.length-1]=it.on;
      st.salesToday+=q*it.price;
      api.log('Sold '+grp(q)+' '+it.unit+' '+it.name+'. Stock now <b>'+grp(it.on)+'</b>.','mute');
      if(wasAbove && it.on<=it.min && !stockDef.openOrder(st,it.id)){
        var o={id:'PO-'+(2292+st.orders.length),item:it.id,qty:it.re,stage:'drafted',at:Date.now()}; st.orders.unshift(o);
        api.log(it.name+' is below '+grp(it.min)+'. <b>'+o.id+'</b> drafted for '+grp(it.re)+' '+it.unit+'.','warn');
        api.toast(it.name+' is running low. Order for '+grp(it.re)+' '+it.unit+' drafted.','warn');
      }
    }
    if(st.tickN%4===0){ var s=st.orders.filter(function(o){return o.stage==='sent';})[0]; if(s) stockDef.act('recv',s.id,st,api); }
    if(st.tickN%6===0){ var d=st.orders.filter(function(o){return o.stage==='drafted';}).pop(); if(d){ d.stage='sent'; d.eta='Tomorrow'; d.at=Date.now(); api.log('The office sent <b>'+d.id+'</b> to the supplier.','info'); } }
    st.orders=st.orders.filter(function(o,i){ return o.stage!=='done' || i<6; });
  }
};

/* =====================================================================
   DEMO: JOBS, QUOTES AND MONEY (Sample Renovations)
   ===================================================================== */
var STAGES=[['new','New enquiry'],['quote','Quote sent'],['won','Won'],['site','On site'],['paid','Paid']];
var POOL=[
  {what:'Bathroom',where:'Wembley',val:58400,src:'Google ad'},{what:'Retail unit refit',where:'Pinetown',val:212000,src:'Google search'},
  {what:'Extension',where:'Hayfields',val:186500,src:'Facebook ad'},{what:'Kitchen',where:'Lincoln Meade',val:71200,src:'Referral'},
  {what:'Office refit',where:'Hilton',val:134000,src:'Google search'},{what:'Bathroom',where:'Scottsville',val:49800,src:'Facebook ad'},
  {what:'Waterproofing and roof',where:'Northdale',val:42600,src:'WhatsApp'},{what:'Guesthouse bathrooms',where:'Howick',val:118000,src:'Google ad'}
];
var jobsDef = {
  id:'jobs', name:'Sample Renovations', kind:'Renovations and refits', mark:'SR', who:'C', start:10*60+5,
  nav:[{id:'pipe',label:'Jobs board',icon:'kanban'},{id:'quote',label:'Quote check',icon:'file'},{id:'money',label:'Money',icon:'wallet'}],
  seed:function(){
    return {jobs:[
      {id:'J-318',what:'Office refit',where:'Pietermaritzburg CBD',val:186000,src:'Google search',stage:'new',reply:7,at:0,prog:0},
      {id:'J-317',what:'Bathroom',where:'Hilton',val:62400,src:'Facebook ad',stage:'quote',fu:2,at:0,prog:0},
      {id:'J-315',what:'Kitchen',where:'Howick',val:94800,src:'Referral',stage:'quote',fu:5,at:0,prog:0},
      {id:'J-312',what:'Guesthouse rooms',where:'Underberg',val:148000,src:'Google ad',stage:'won',at:0,prog:0},
      {id:'J-309',what:'Shop refit',where:'Scottsville',val:121500,src:'Google search',stage:'site',at:0,prog:.6},
      {id:'J-306',what:'Roof repair',where:'Wembley',val:38900,src:'WhatsApp',stage:'site',at:0,prog:.3},
      {id:'J-301',what:'Restaurant kitchen',where:'Midlands',val:84000,src:'Referral',stage:'paid',at:0,prog:1}
    ], next:319, inMonth:312400, outMonth:198600,
    owed:[{id:'o1',job:'Restaurant kitchen, Midlands',amt:18400,days:12,sent:false},{id:'o2',job:'Shop refit, Scottsville',amt:60750,days:0,sent:false,due:'On handover'},{id:'o3',job:'Roof repair, Wembley',amt:19450,days:3,sent:false}],
    q:{disc:false,prem:false}, tickN:0};
  },
  counts:function(st){ return {pipe:st.jobs.filter(function(j){return j.stage==='new';}).length, money:st.owed.filter(function(o){return o.days>7&&!o.sent;}).length}; },
  views:{
    pipe:{
      title:'Jobs board', sub:'Every enquiry, from first message to final payment',
      html:function(){ return '<div class="kpis" data-part="kpis"></div><div class="kb" data-part="kb"></div><div class="pan" style="margin-top:12px"><div class="pan-h"><b>Today</b><span class="mut">Live</span></div><div data-part="feed"></div></div>'; },
      parts:{
        kpis:function(st){
          var open=st.jobs.filter(function(j){return j.stage==='new'||j.stage==='quote';}).reduce(function(s,j){return s+j.val;},0);
          var won=st.jobs.filter(function(j){return j.stage==='won'||j.stage==='site'||j.stage==='paid';}).reduce(function(s,j){return s+j.val;},0);
          var owed=st.owed.reduce(function(s,o){return s+o.amt;},0);
          return kpi('Open quotes and enquiries', rk(open), st.jobs.filter(function(j){return j.stage==='new'||j.stage==='quote';}).length+' jobs')+kpi('Won this month', rk(won), 'Deposits in')+kpi('Owed to you', R(owed), st.owed.filter(function(o){return o.days>7;}).length+' overdue', owed>0?'':'')+kpi('First reply', '8 min', 'Average this week');
        },
        kb:function(st,api){
          return STAGES.map(function(s){
            var js=st.jobs.filter(function(j){return j.stage===s[0];}), tot=js.reduce(function(a,j){return a+j.val;},0);
            return '<div class="kcol"><div class="kcol-h">'+s[1]+'<span>'+(js.length?rk(tot):'')+'</span></div>'+(js.length?js.map(function(j){
              var sub = j.stage==='new' ? '<span class="chip info plain">'+j.src+'</span>' : j.stage==='quote' ? '<span>Follow-up day '+j.fu+'</span>' : j.stage==='site' ? '' : j.stage==='won' ? '<span>Deposit in</span>' : '<span>Closed</span>';
              return '<div class="kc'+(api.isNew(j.at)?' nw':'')+'" tabindex="0" role="button" data-open="job:'+j.id+'"><b>'+j.what+', '+j.where+'</b><div class="meta"><span>'+j.id+'</span><span class="v">'+rk(j.val)+'</span></div>'+(j.stage==='site'?'<div class="prog"><i style="width:'+Math.round(j.prog*100)+'%"></i></div><div class="meta"><span>'+Math.round(j.prog*100)+'% done</span></div>':'<div class="meta">'+sub+'</div>')+'</div>';
            }).join(''):'<p class="empty">Empty</p>')+'</div>';
          }).join('');
        },
        feed:function(st,api){ return feedHTML(st,api,4); }
      }
    },
    quote:{
      title:'Quote check', sub:'J-317, Bathroom, Hilton',
      html:function(){ return '<div class="g2"><div class="pan"><div class="pan-h"><b>Quote Q-1042</b><span class="mut">Each line costed before it goes out</span></div><div class="tbl qt" data-part="lines"></div>'+
        '<label class="toggle"><input type="checkbox" id="q-prem" data-act="prem">Upgrade to large-format porcelain tiles</label><label class="toggle"><input type="checkbox" id="q-disc" data-act="disc">Give the client 10% off</label></div>'+
        '<div class="col"><div class="pan" data-part="sum"></div></div></div>'; },
      lines:function(st){
        var L=[['Strip out and rubble removal',4200,6500],['Waterproofing, floor and walls',3100,5200],['Wall and floor tiling, 18 m²',9800,14400],['Sanitaryware and taps',11500,14900],['Plumbing',5600,8800],['Supervision and snag list',2400,4500]];
        if(st.q.prem){ L[2]=['Large-format porcelain, 18 m²',13600,19600]; }
        return L;
      },
      calc:function(st){
        var L=this.lines(st), cost=L.reduce(function(s,l){return s+l[1];},0), price=L.reduce(function(s,l){return s+l[2];},0);
        if(st.q.disc) price=price*.9;
        return {L:L,cost:cost,price:price,m:(price-cost)/price};
      },
      parts:{
        lines:function(st){
          var c=jobsDef.views.quote.calc(st);
          return '<div class="tr th"><span>Line</span><span class="num">Cost</span><span class="num">Price</span><span class="num">Margin</span></div>'+c.L.map(function(l){ var m=(l[2]-l[1])/l[2]; return '<div class="tr"><span>'+l[0]+'</span><span class="num s">'+R(l[1])+'</span><span class="num k">'+R(l[2])+'</span><span class="num" style="color:'+(m<.3?'var(--bad)':'var(--good)')+'">'+Math.round(m*100)+'%</span></div>'; }).join('');
        },
        sum:function(st){
          var c=jobsDef.views.quote.calc(st), ok=c.m>=.3, w=Math.max(4,Math.min(100,c.m/.6*100));
          return '<div class="pan-h"><b>Before it goes out</b></div><div class="qsum"><div><small class="mut">Quote total</small><div class="big">'+R(c.price)+'</div></div><div><small class="mut">Your cost</small><div style="font-weight:700;font-variant-numeric:tabular-nums">'+R(c.cost)+'</div></div>'+
            '<div style="margin-top:22px"><div class="mbar"><i class="'+(ok?'':'low')+'" style="width:'+w+'%"></i><u style="left:50%"></u><em style="left:50%">Your 30% floor</em></div><div style="display:flex;justify-content:space-between;margin-top:6px;font-size:12px"><span class="mut">Margin</span><b style="font-variant-numeric:tabular-nums">'+Math.round(c.m*100)+'%</b></div></div>'+
            (ok?'<div class="warnbox good">'+ic('check')+'<span>Margin is above your floor. Safe to send.</span></div>':'<div class="warnbox bad">'+ic('alert')+'<span>Below your 30% floor. You\'d earn '+R(c.price-c.cost)+' on a '+R(c.price)+' job. Check before sending.</span></div>')+
            '<button type="button" class="abtn pri" data-act="sendq" style="justify-content:center;padding:10px">'+ic('send')+'Send quote on WhatsApp</button></div>';
        }
      },
      mount:function(body,st){ var a=body.querySelector('#q-prem'), b=body.querySelector('#q-disc'); if(a) a.checked=st.q.prem; if(b) b.checked=st.q.disc; }
    },
    money:{
      title:'Money', sub:'This month',
      html:function(){ return '<div class="kpis" data-part="kpis"></div><div class="g2b"><div class="pan"><div class="pan-h"><b>In and out this month</b></div><div data-part="io"></div></div><div class="pan"><div class="pan-h"><b>Owed to you</b><span class="mut">Oldest first</span></div><div data-part="owed"></div></div></div><div class="pan" style="margin-top:12px"><div class="pan-h"><b>Today</b><span class="mut">Live</span></div><div data-part="feed"></div></div>'; },
      parts:{
        kpis:function(st){
          var owed=st.owed.reduce(function(s,o){return s+o.amt;},0);
          return kpi('Money in', R(st.inMonth), 'Deposits and final payments')+kpi('Money out', R(st.outMonth), 'Materials, crews, fuel')+kpi('Left over', R(st.inMonth-st.outMonth), Math.round((st.inMonth-st.outMonth)/st.inMonth*100)+'% of money in')+kpi('Owed to you', R(owed), st.owed.length+' invoices', st.owed.some(function(o){return o.days>7&&!o.sent;})?'alert':'');
        },
        io:function(st){
          var mx=Math.max(st.inMonth,st.outMonth)*1.1;
          return '<div class="hb"><div class="hb-row" style="grid-template-columns:44px minmax(0,1fr) 84px"><span class="k">In</span><div class="stack"><i class="a" style="width:'+(st.inMonth/mx*100)+'%;background:var(--good)"></i></div><span class="num">'+R(st.inMonth)+'</span></div><div class="hb-row" style="grid-template-columns:44px minmax(0,1fr) 84px"><span class="k">Out</span><div class="stack"><i class="b" style="width:'+(st.outMonth/mx*100)+'%"></i></div><span class="num">'+R(st.outMonth)+'</span></div></div>'+
            '<p class="mut" style="margin-top:14px">Every deposit and payment is logged against its job, so you see what each job made, not just the bank balance.</p>';
        },
        owed:function(st){
          return '<div class="list">'+st.owed.sort(function(a,b){return b.days-a.days;}).map(function(o){
            var tone=o.days>7?'bad':o.days>0?'warn':'info';
            return '<div class="li"><span class="dot '+tone+'"></span><p><b>'+R(o.amt)+'</b> &middot; '+o.job+'<br><span class="mut">'+(o.due||(o.days?o.days+' days overdue':'Due today'))+'</span></p>'+(o.sent?'<span class="chip good">Reminder sent</span>':o.due?'<span class="chip mute">Not due</span>':'<button type="button" class="abtn" data-act="remind" data-arg="'+o.id+'">'+WAICON.replace('class="ic"','class="ic" style="color:var(--wa)"')+'Send reminder</button>')+'</div>';
          }).join('')+'</div>';
        },
        feed:function(st,api){ return feedHTML(st,api,4); }
      }
    }
  },
  drawer:function(kind,id,st){
    var j=st.jobs.filter(function(x){return x.id===id;})[0]; if(!j) return null;
    var si=STAGES.map(function(s){return s[0];}).indexOf(j.stage);
    var steps=['Enquiry from '+j.src,'Quote sent','Deposit received','Crew on site','Final payment'];
    return {
      head:'<b>'+j.what+'</b><small>'+j.where+' &middot; '+j.id+'</small>',
      body:'<div><span class="chip info">'+STAGES[si][1]+'</span></div>'+
        '<div class="dgrid"><div><small>Job value</small><b>'+R(j.val)+'</b></div><div><small>Came from</small><b style="font-size:13px">'+j.src+'</b></div><div><small>Deposit (40%)</small><b>'+(si>=2?R(j.val*.4):'Not yet')+'</b></div><div><small>Progress</small><b>'+(j.stage==='site'?Math.round(j.prog*100)+'%':si>=4?'Done':'Not started')+'</b></div></div>'+
        '<div class="dsec">Timeline</div><div class="tl">'+steps.slice(0,si+1).map(function(s,i){return '<div><b>'+s+'</b>'+(i===0&&j.reply?'<time>Replied in '+j.reply+' minutes</time>':'')+'</div>';}).join('')+'</div>'+
        (si>=3?'<div class="dsec">Site photos</div><div class="photos"><span>Before</span><span>Progress</span><span>'+(si>=4?'After':'Progress')+'</span></div>':'')+
        '<div class="dacts">'+(si<4?'<button type="button" class="abtn pri" data-act="adv" data-arg="'+j.id+'">Move to '+STAGES[si+1][1].toLowerCase()+'</button>':'')+'<button type="button" class="abtn wa" data-act="wa" data-arg="'+j.id+'">'+WAICON+'Message client</button></div>'
    };
  },
  advance:function(j,st,api,quiet){
    var order=STAGES.map(function(s){return s[0];}), i=order.indexOf(j.stage); if(i>=4) return;
    j.stage=order[i+1]; j.at=Date.now();
    var name=j.what+', '+j.where;
    if(j.stage==='quote'){ j.fu=2; api.log('Quote sent for <b>'+name+'</b>: '+R(j.val)+'. Follow-ups set for day 2, 5 and 10.','info'); if(!quiet) api.toast('Quote sent: '+name+'.','info'); }
    if(j.stage==='won'){ var dep=Math.round(j.val*.4); st.inMonth+=dep; api.log('<b>'+name+'</b> won. Deposit '+R(dep)+' received.','good'); api.toast('Won: '+name+'. Deposit '+R(dep)+' in.','good'); }
    if(j.stage==='site'){ j.prog=.05; st.outMonth+=Math.round(j.val*.18); api.log('Crew on site: <b>'+name+'</b>. Materials ordered.','info'); }
    if(j.stage==='paid'){ var fin=Math.round(j.val*.6); st.inMonth+=fin; j.prog=1; api.log('Final payment received for <b>'+name+'</b>: '+R(fin)+'. Review request sent.','good'); api.toast('Paid in full: '+name+'.','good'); }
  },
  act:function(a,arg,st,api){
    if(a==='adv'){ var j=st.jobs.filter(function(x){return x.id===arg;})[0]; if(j) jobsDef.advance(j,st,api); }
    if(a==='wa'){ api.toast('In your system this opens WhatsApp to the client with the job details filled in.','info'); }
    if(a==='prem'){ st.q.prem=!!arg; }
    if(a==='disc'){ st.q.disc=!!arg; }
    if(a==='sendq'){ var c=jobsDef.views.quote.calc(st); api.toast(c.m<.3?'Sent below your floor. Logged so you can see it in the monthly numbers.':'Quote sent. Follow-ups set for day 2, 5 and 10.', c.m<.3?'warn':'good'); api.log('Quote Q-1042 sent: '+R(c.price)+' at '+Math.round(c.m*100)+'% margin.', c.m<.3?'warn':'info'); }
    if(a==='remind'){ var o=st.owed.filter(function(x){return x.id===arg;})[0]; if(o){ o.sent=true; api.log('Payment reminder sent for '+o.job+': '+R(o.amt)+'.','info'); api.toast('Reminder sent on WhatsApp with the invoice attached.','good'); } }
  },
  tick:function(st,api){
    st.tickN++;
    var r=Math.random();
    var site=st.jobs.filter(function(j){return j.stage==='site';});
    if(st.tickN%3===1 || r<.2){
      var p=POOL[(st.next)%POOL.length]; var nj={id:'J-'+(st.next++),what:p.what,where:p.where,val:p.val,src:p.src,stage:'new',reply:ri(4,14),at:Date.now(),prog:0};
      st.jobs.unshift(nj); api.log('New enquiry ('+p.src+'): <b>'+p.what+', '+p.where+'</b>. Replied in '+nj.reply+' min.','info'); api.toast('New enquiry: '+p.what+', '+p.where+'.','info');
    } else if(r<.55){
      var cand=st.jobs.filter(function(j){return j.stage==='new'||j.stage==='quote'||j.stage==='won';});
      if(cand.length) jobsDef.advance(cand[cand.length-1],st,api,false);
    } else if(site.length){
      var s=pick(site); s.prog=Math.min(1,s.prog+rnd(.12,.22));
      if(s.prog>=1){ jobsDef.advance(s,st,api); st.owed=st.owed.filter(function(o){return o.job.indexOf(s.where)<0;}); }
      else api.log(ri(2,4)+' progress photos added to <b>'+s.what+', '+s.where+'</b>.','mute');
    }
    var paid=st.jobs.filter(function(j){return j.stage==='paid';}); if(paid.length>2) st.jobs.splice(st.jobs.indexOf(paid[paid.length-1]),1);
    var nw=st.jobs.filter(function(j){return j.stage==='new';}); if(nw.length>3) jobsDef.advance(nw[nw.length-1],st,api,true);
  }
};


/* =====================================================================
   DEMO: WORKSHOP (Sample Motors), modelled on the vehicle tracker
   ADA built for a Pietermaritzburg workshop, with made-up cars and figures
   ===================================================================== */
var SHOP_STAGES=[['in','Booked in'],['body','Panel and paint'],['mech','Mechanical'],['ready','Ready for sale'],['sold','Sold']];
var CAR_POOL=['2019 Toyota Corolla Quest 1.8','2018 Kia Picanto 1.2','2017 Isuzu D-Max 250','2020 Renault Kwid 1.0','2016 Mercedes C200','2019 Toyota Fortuner 2.4'];
function carMargin(c){ return (c.sold||c.ask) - c.costIn - c.spent; }
function carPct(c){ return carMargin(c)/(c.sold||c.ask); }
var shopDef = {
  id:'shop', name:'Sample Motors', kind:'Workshop and car sales', mark:'SM', who:'W', start:8*60+20,
  nav:[{id:'board',label:'Workshop board',icon:'kanban'},{id:'margin',label:'Margins',icon:'wallet'},{id:'parts',label:'Parts',icon:'wrench'}],
  seed:function(){
    return {cars:[
      {id:'SM-31',car:'2019 Toyota Hilux 2.4 GD-6',stage:'in',costIn:248000,spent:0,ask:319900,days:1,photos:4,at:0},
      {id:'SM-29',car:'2018 VW Polo 1.0 TSI',stage:'body',costIn:142000,spent:9800,ask:189900,days:6,photos:12,at:0},
      {id:'SM-28',car:'2017 Ford Ranger 2.2 XLS',stage:'body',costIn:205000,spent:21400,ask:259900,days:9,photos:18,at:0},
      {id:'SM-26',car:'2020 Suzuki Swift 1.2 GL',stage:'mech',costIn:118000,spent:6200,ask:159900,days:11,photos:15,at:0},
      {id:'SM-24',car:'2016 Toyota Corolla 1.6',stage:'ready',costIn:126000,spent:14800,ask:169900,days:16,photos:24,at:0},
      {id:'SM-22',car:'2019 Hyundai i20 1.4',stage:'ready',costIn:139000,spent:22900,ask:174900,days:19,photos:22,at:0},
      {id:'SM-19',car:'2018 Nissan NP200 1.6',stage:'sold',costIn:92000,spent:11300,ask:134900,sold:132000,days:21,photos:20,at:0}
    ], parts:[
      {id:'P-118',item:'Headlight, left',from:'2015 VW Polo, from stock',price:1850,st:'shelf'},
      {id:'P-117',item:'Tailgate',from:'2013 Toyota Hilux, from stock',price:4200,st:'shelf'},
      {id:'P-115',item:'Alloy wheel, 15 inch',from:'2016 Toyota Corolla, from stock',price:950,st:'shelf'},
      {id:'P-114',item:'Gearbox, 5-speed',from:'2015 VW Polo, from stock',price:7800,st:'reserved'},
      {id:'P-111',item:'Front bumper',from:'2017 Ford Ranger, from stock',price:2600,st:'sold'}
    ], next:32, pool:0, soldMonth:3, marginMonth:96400, partsMonth:18450, tickN:0, flagged:{}};
  },
  car:function(st,id){ return st.cars.filter(function(c){return c.id===id;})[0]; },
  counts:function(st){ return {board:st.cars.filter(function(c){return c.stage==='in';}).length, margin:st.cars.filter(function(c){return c.stage!=='sold' && carPct(c)<.12;}).length}; },
  marginChip:function(c){ var p=carPct(c); return p<.12?'<span class="chip bad">'+Math.round(p*100)+'% margin</span>':p<.18?'<span class="chip warn">'+Math.round(p*100)+'% margin</span>':'<span class="chip good">'+Math.round(p*100)+'% margin</span>'; },
  views:{
    board:{
      title:'Workshop board', sub:'Every car from booked in to sold',
      html:function(){ return '<div class="kpis" data-part="kpis"></div><div class="kb" data-part="kb"></div><div class="pan" style="margin-top:12px"><div class="pan-h"><b>Today</b><span class="mut">Live</span></div><div data-part="feed"></div></div>'; },
      parts:{
        kpis:function(st){
          var inShop=st.cars.filter(function(c){return c.stage==='in'||c.stage==='body'||c.stage==='mech';});
          var ready=st.cars.filter(function(c){return c.stage==='ready';});
          var avg=ready.length?Math.round(ready.reduce(function(a,c){return a+c.days;},0)/ready.length):0;
          return kpi('In the workshop', inShop.length, 'Booked in, panel, paint, mechanical')+kpi('Ready for sale', ready.length, rk(ready.reduce(function(a,c){return a+c.ask;},0))+' asking')+kpi('Days to ready', avg+' days', 'Average, cars ready now')+kpi('Margin this month', R(st.marginMonth), st.soldMonth+' cars sold');
        },
        kb:function(st,api){
          return SHOP_STAGES.map(function(s){
            var cs=st.cars.filter(function(c){return c.stage===s[0];});
            return '<div class="kcol"><div class="kcol-h">'+s[1]+'<span>'+cs.length+'</span></div>'+(cs.length?cs.map(function(c){
              return '<div class="kc'+(api.isNew(c.at)?' nw':'')+'" tabindex="0" role="button" data-open="car:'+c.id+'"><b>'+c.car+'</b><div class="meta"><span>'+c.id+' &middot; day '+c.days+'</span><span class="v">'+rk(c.sold||c.ask)+'</span></div><div class="meta">'+shopDef.marginChip(c)+'<span>'+c.photos+' photos</span></div></div>';
            }).join(''):'<p class="empty">Empty</p>')+'</div>';
          }).join('');
        },
        feed:function(st,api){ return feedHTML(st,api,4); }
      }
    },
    margin:{
      title:'Margins', sub:'What each car cost, what it needs, what it should make',
      html:function(){ return '<div class="pan"><div class="tbl mt" data-part="table"></div></div><p class="mut" style="margin-top:10px">Cars under 12% margin are flagged before more money goes into them.</p>'; },
      parts:{ table:function(st){
        return '<div class="tr th"><span>Vehicle</span><span class="num">Cost in</span><span class="num">Spent</span><span class="num">Asking</span><span>Margin</span></div>'+
          st.cars.map(function(c){
            var m=carMargin(c), p=carPct(c), cls=p<.12?'bad':p<.18?'warn':'good';
            return '<div class="tr" tabindex="0" role="button" data-open="car:'+c.id+'"><span><b>'+c.car+'</b><br><span class="s">'+c.id+' &middot; '+SHOP_STAGES.filter(function(s){return s[0]===c.stage;})[0][1]+'</span></span><span class="num s">'+R(c.costIn)+'</span><span class="num s">'+R(c.spent)+'</span><span class="num k">'+R(c.sold||c.ask)+'</span><span><div class="bar"><i class="'+cls+'" style="width:'+Math.max(4,Math.min(100,p/.3*100))+'%"></i></div><span class="s">'+R(m)+' &middot; '+Math.round(p*100)+'%</span></span></div>';
          }).join('');
      }}
    },
    parts:{
      title:'Parts', sub:'Taken from cars already in stock, tracked to the car they came from',
      html:function(){ return '<div class="kpis" data-part="kpis"></div><div class="pan" style="margin-top:12px"><div class="tbl ptt" data-part="table"></div></div>'; },
      parts:{
        kpis:function(st){
          var shelf=st.parts.filter(function(p){return p.st==='shelf';});
          return kpi('On the shelf', shelf.length, rk(shelf.reduce(function(a,p){return a+p.price;},0))+' value')+kpi('Reserved', st.parts.filter(function(p){return p.st==='reserved';}).length, 'Waiting for collection')+kpi('Parts sold', R(st.partsMonth), 'This month')+kpi('Sold today', st.parts.filter(function(p){return p.st==='sold'&&p.today;}).length, 'From the counter');
        },
        table:function(st){
          return '<div class="tr th"><span>Part</span><span>From</span><span class="num">Price</span><span>Status</span><span></span></div>'+st.parts.map(function(p){
            var chip=p.st==='shelf'?'<span class="chip good">On the shelf</span>':p.st==='reserved'?'<span class="chip warn">Reserved</span>':'<span class="chip mute">Sold</span>';
            return '<div class="tr'+(p.flash&&Date.now()-p.flash<1500?' flash':'')+'"><span><b>'+p.item+'</b><br><span class="s">'+p.id+'</span></span><span class="s">'+p.from+'</span><span class="num k">'+R(p.price)+'</span><span>'+chip+'</span><span>'+(p.st!=='sold'?'<button type="button" class="abtn" data-act="sellpart" data-arg="'+p.id+'">Mark sold</button>':'')+'</span></div>';
          }).join('');
        }
      }
    }
  },
  drawer:function(kind,id,st){
    var c=shopDef.car(st,id); if(!c) return null;
    var si=SHOP_STAGES.map(function(s){return s[0];}).indexOf(c.stage);
    return {
      head:'<b>'+c.car+'</b><small>'+c.id+' &middot; day '+c.days+' in the workshop</small>',
      body:'<div style="display:flex;gap:8px;flex-wrap:wrap"><span class="chip info">'+SHOP_STAGES[si][1]+'</span>'+shopDef.marginChip(c)+'</div>'+
        '<div class="dgrid"><div><small>Cost in</small><b>'+R(c.costIn)+'</b></div><div><small>Spent so far</small><b>'+R(c.spent)+'</b></div><div><small>'+(c.sold?'Sold for':'Asking')+'</small><b>'+R(c.sold||c.ask)+'</b></div><div><small>Margin</small><b>'+R(carMargin(c))+'</b></div></div>'+
        '<div class="dsec">Progress</div><div class="tl">'+SHOP_STAGES.slice(0,si+1).map(function(s){return '<div><b>'+s[1]+'</b></div>';}).join('')+'</div>'+
        '<div class="dsec">Photos</div><div class="photos"><span>Arrived</span><span>'+(si>=1?'Panel':'Inspection')+'</span><span>'+(si>=3?'Ready':'Progress')+'</span></div>'+
        '<div class="dacts">'+(si<3?'<button type="button" class="abtn pri" data-act="advcar" data-arg="'+c.id+'">Move to '+SHOP_STAGES[si+1][1].toLowerCase()+'</button><button type="button" class="abtn" data-act="cost" data-arg="'+c.id+'">'+ic('wrench')+'Add a cost</button>':'')+(si===3?'<button type="button" class="abtn wa" data-act="share" data-arg="'+c.id+'">'+WAICON+'Send to a buyer</button>':'')+'</div>'
    };
  },
  advance:function(c,st,api){
    var order=SHOP_STAGES.map(function(s){return s[0];}), i=order.indexOf(c.stage); if(i>=3) return;
    c.stage=order[i+1]; c.at=Date.now(); var add=ri(3,7); c.photos+=add;
    api.log('<b>'+c.id+'</b> moved to '+SHOP_STAGES[i+1][1].toLowerCase()+'. '+add+' photos added.','info');
    if(c.stage==='ready') api.toast(c.car+' is ready for sale.','good');
  },
  act:function(a,arg,st,api){
    var c=shopDef.car(st,arg);
    if(a==='advcar' && c) shopDef.advance(c,st,api);
    if(a==='cost' && c){ var amt=ri(8,32)*100; c.spent+=amt; api.log('Cost of '+R(amt)+' booked to <b>'+c.id+'</b>.','mute'); api.toast('Cost added. Margin now '+Math.round(carPct(c)*100)+'%.', carPct(c)<.12?'warn':'info'); }
    if(a==='share' && c) api.toast('In your system this sends the car\'s photos and price to a buyer on WhatsApp.','info');
    if(a==='sellpart'){ var p=st.parts.filter(function(x){return x.id===arg;})[0]; if(p){ p.st='sold'; p.today=true; p.flash=Date.now(); st.partsMonth+=p.price; api.log(p.item+' sold over the counter: '+R(p.price)+'.','good'); api.toast(p.item+' sold. Stock updated.','good'); } }
  },
  tick:function(st,api){
    st.tickN++;
    st.cars.forEach(function(c){ if(c.stage!=='sold' && st.tickN%3===0) c.days++; });
    var r=Math.random(), active=st.cars.filter(function(c){return c.stage==='in'||c.stage==='body'||c.stage==='mech';}), ready=st.cars.filter(function(c){return c.stage==='ready';});
    if(r<.3 && active.length){ shopDef.advance(pick(active),st,api); }
    else if(r<.55 && active.length){
      var c=pick(active), amt=ri(6,32)*100; c.spent+=amt; api.log('Parts '+R(amt)+' booked to <b>'+c.id+'</b>.','mute');
      if(carPct(c)<.12 && !st.flagged[c.id]){ st.flagged[c.id]=1; api.toast(c.id+' margin is down to '+Math.round(carPct(c)*100)+'%. Check before spending more.','warn'); }
    }
    else if(r<.72 && ready.length){
      var s=pick(ready); s.stage='sold'; s.sold=s.ask-ri(0,6)*500; s.at=Date.now(); var m=carMargin(s); st.marginMonth+=m; st.soldMonth++;
      api.log('<b>'+s.id+'</b> sold for '+R(s.sold)+'. Margin '+R(m)+'.','good'); api.toast(s.car+' sold. Margin '+R(m)+'.','good');
    }
    else if(r<.85){
      var nm=CAR_POOL[st.pool++%CAR_POOL.length], ci=ri(90,240)*1000; var nc={id:'SM-'+(st.next++),car:nm,stage:'in',costIn:ci,spent:0,ask:Math.round(ci*1.3/100)*100-100,days:1,photos:4,at:Date.now()};
      st.cars.unshift(nc); api.log('<b>'+nc.id+'</b> booked in: '+nm+'. Arrival photos taken.','info');
    }
    else { var sp=st.parts.filter(function(p){return p.st==='shelf';}); if(sp.length) shopDef.act('sellpart',pick(sp).id,st,api); }
    var sold=st.cars.filter(function(c){return c.stage==='sold';}); if(sold.length>2) st.cars.splice(st.cars.indexOf(sold[sold.length-1]),1);
    if(st.cars.filter(function(c){return c.stage==='in';}).length>2){ shopDef.advance(st.cars.filter(function(c){return c.stage==='in';}).pop(),st,api); }
  }
};

/* ---------- player: tabs, lazy mount, run only while seen ---------- */
var defs={fleet:fleetDef, shop:shopDef, stock:stockDef, jobs:jobsDef}, apps={}, active='fleet', inView=false;
var tabs=[].slice.call(document.querySelectorAll('.ptabs [role=tab]'));
var tabIcons={fleet:'truck',shop:'wrench',stock:'box',jobs:'kanban'}, tabNames={fleet:'Fleet',shop:'Workshop',stock:'Stock',jobs:'Jobs and money'};
tabs.forEach(function(t){ t.innerHTML=ic(tabIcons[t.dataset.app])+'<span>'+tabNames[t.dataset.app]+'</span>'; });
function ensure(k){ if(!apps[k]) apps[k]=App(document.getElementById('pane-'+k), defs[k]); return apps[k]; }
function select(k, focus){
  if(apps[active]) apps[active].stop();
  active=k;
  tabs.forEach(function(t){ var on=t.dataset.app===k; t.setAttribute('aria-selected',String(on)); t.tabIndex=on?0:-1; document.getElementById(t.getAttribute('aria-controls')).hidden=!on; if(on&&focus) t.focus(); });
  ensure(k); if(inView) apps[k].start();
  track('demo_select',{demo:k});
}
tabs.forEach(function(t,i){
  t.addEventListener('click', function(){ select(t.dataset.app); });
  t.addEventListener('keydown', function(e){ var d=e.key==='ArrowRight'?1:e.key==='ArrowLeft'?-1:0; if(d){ e.preventDefault(); select(tabs[(i+d+tabs.length)%tabs.length].dataset.app, true); } });
});
document.querySelectorAll('[data-goapp]').forEach(function(a){ a.addEventListener('click', function(){ select(a.dataset.goapp); document.getElementById('demo').scrollIntoView({behavior:reduce?'auto':'smooth', block:'start'}); }); });
ensure('fleet');
function fromHash(){ var h=(location.hash.match(/^#demo-(\w+)/)||[])[1]; if(h&&defs[h]){ select(h); setTimeout(function(){ document.getElementById('demo').scrollIntoView({block:'start'}); }, 60); } }
fromHash(); addEventListener('hashchange', fromHash);
var player=document.getElementById('player');
if(IO){ new IntersectionObserver(function(es){ inView=es[0].isIntersecting; if(inView && !document.hidden) apps[active].start(); else apps[active].stop(); },{threshold:.2}).observe(player); }
else { inView=true; apps[active].start(); }
document.addEventListener('visibilitychange', function(){ if(document.hidden) apps[active].stop(); else if(inView) apps[active].start(); });

/* ---------- what it replaces: sorts itself once when seen, toggle to compare ---------- */
var chaos=document.querySelector('.chaos'), board=document.getElementById('board'), cards=[].slice.call(board.querySelectorAll('.cc'));
var stBtns=[].slice.call(chaos.querySelectorAll('.state button'));
function ease(x){ return x<.5 ? 4*x*x*x : 1-Math.pow(-2*x+2,3)/2; }
function setP(P){
  cards.forEach(function(c,i){ var p=Math.max(0,Math.min(1,(P-i*.07)/.58)); c.style.setProperty('--p',ease(p).toFixed(3)); });
  stBtns.forEach(function(b){ b.setAttribute('aria-pressed', String((P>.5)===(b.dataset.s==='1'))); });
}
var curP=0, anim=null;
function tween(to){ if(reduce){ curP=to; setP(to); return; } var from=curP, t0=performance.now(), dur=1500; cancelAnimationFrame(anim); (function f(now){ var k=Math.min(1,(now-t0)/dur); curP=from+(to-from)*k; setP(curP); if(k<1) anim=requestAnimationFrame(f); })(t0); }
setP(0);
stBtns.forEach(function(b){ b.addEventListener('click', function(){ tween(+b.dataset.s); }); });
ADA.onView(board, function(){ setTimeout(function(){ tween(1); }, 600); }, .45);

/* ---------- calculator ---------- */
var pe=document.getElementById('people'), ho=document.getElementById('hours'), ra=document.getElementById('rate');
function calc(){
  var p=+pe.value, h=+ho.value, r=+ra.value, hrs=Math.round(p*h*52/12), m=hrs*r;
  document.getElementById('peopleV').textContent=p; document.getElementById('hoursV').textContent=h; document.getElementById('rateV').textContent=R(r);
  document.getElementById('hrsT').textContent=grp(hrs)+' hours a month';
  document.getElementById('amtT').textContent=R(m);
  document.getElementById('yrT').textContent='a month, '+R(m*12)+' a year';
}
[pe,ho,ra].forEach(function(el){ el.addEventListener('input', calc); }); calc();
})();
