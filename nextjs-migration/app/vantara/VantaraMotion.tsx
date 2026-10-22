'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Behaviour for every /vantara route (port of the prototype's site.js). It runs in an effect keyed on the
// pathname, so reveals, counters, gallery, lightbox, currency switch and enquiry form start again on each
// route, and everything attached on the previous route is removed first.

const WA = '27712205313';
const RATES: Record<string, number> = { ZAR: 1, USD: 16.1, EUR: 18.69, GBP: 21.79 };
const SYM: Record<string, string> = { ZAR: 'R', USD: '$', EUR: '€', GBP: '£' };

// Which header link is the current one: each page's own link, and the deal write-ups count as "Deals".
function currentHref(pathname: string): string {
  const p = pathname.replace(/\/+$/, '');
  if (p === '/vantara/automotive' || /^\/vantara\/insight-\d+$/.test(p)) return '/vantara/deals';
  return p || '/vantara';
}

function init(pathname: string): () => void {
  const off: Array<() => void> = [];
  const doc = document.documentElement;
  doc.classList.add('v-js');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const $ = <T extends HTMLElement = HTMLElement>(s: string) => document.querySelector<T>(s);
  const $$ = <T extends HTMLElement = HTMLElement>(s: string) => Array.from(document.querySelectorAll<T>(s));
  const on = (t: HTMLElement | Document | Window, type: string, fn: (e: Event) => void, opts?: AddEventListenerOptions) => {
    t.addEventListener(type, fn, opts);
    off.push(() => t.removeEventListener(type, fn, opts));
  };
  const later = (fn: () => void, ms: number) => {
    const id = window.setTimeout(fn, ms);
    off.push(() => window.clearTimeout(id));
  };

  /* Current page in the header menus */
  const cur = currentHref(pathname);
  $$<HTMLAnchorElement>('header.site a[href]').forEach((a) => {
    const href = a.getAttribute('href');
    const inMenu = a.classList.contains('ml') || a.closest('.menu') !== null;
    if (inMenu && href === cur) a.setAttribute('aria-current', 'page');
    else a.removeAttribute('aria-current');
  });

  /* WhatsApp links with a ref code per placement (the same href is already in the server HTML) */
  $$<HTMLAnchorElement>('[data-wa]').forEach((a) => {
    const msg = "Hi Luyanda, I'm looking for a car and would like to talk to Vantara. (ref " + a.getAttribute('data-wa') + ')';
    a.href = 'https://wa.me/' + WA + '?text=' + encodeURIComponent(msg);
    a.target = '_blank';
    a.rel = 'noopener';
  });

  /* Hero line motif: measure each path for the draw */
  $$<HTMLElement>('.hero-lines path').forEach((p) => {
    try {
      p.style.setProperty('--len', String(Math.ceil((p as unknown as SVGPathElement).getTotalLength())));
    } catch {
      /* not measurable */
    }
  });

  /* Deal file: ticks fill in sequence once on load */
  const items = $$<HTMLElement>('#dfList li');
  if (items.length && !reduce && 'animate' in Element.prototype) {
    items.forEach((li) => {
      li.classList.remove('on');
      const path = li.querySelector('path');
      if (path) path.style.strokeDashoffset = '14';
    });
    items.forEach((li, i) => {
      later(() => {
        li.classList.add('on');
        const path = li.querySelector('path');
        if (path) {
          path.animate([{ strokeDashoffset: 14 }, { strokeDashoffset: 0 }], {
            duration: 320,
            easing: 'cubic-bezier(0.23,1,0.32,1)',
            fill: 'forwards',
          });
        }
      }, 1250 + i * 170);
    });
  }

  /* Header border on scroll */
  const header = $('header.site');
  const onScroll = () => {
    if (header) header.classList.toggle('scrolled', window.scrollY > 8);
  };
  onScroll();
  on(window, 'scroll', onScroll, { passive: true });

  /* Mobile menu (always starts closed on a new route) */
  const mb = $<HTMLButtonElement>('#menuBtn');
  const mm = $('#mobileMenu');
  if (mb && mm) {
    mm.hidden = true;
    mm.classList.remove('open', 'closing');
    mb.setAttribute('aria-expanded', 'false');
    mb.setAttribute('aria-label', 'Open menu');
    const closeMenu = () => {
      if (mm.hidden) return;
      mb.setAttribute('aria-expanded', 'false');
      mb.setAttribute('aria-label', 'Open menu');
      if (reduce) {
        mm.hidden = true;
        return;
      }
      mm.classList.remove('open');
      mm.classList.add('closing');
      later(() => {
        mm.hidden = true;
        mm.classList.remove('closing');
      }, 150);
    };
    on(mb, 'click', () => {
      if (mm.hidden) {
        mm.hidden = false;
        mm.classList.add('open');
        mb.setAttribute('aria-expanded', 'true');
        mb.setAttribute('aria-label', 'Close menu');
      } else closeMenu();
    });
    mm.querySelectorAll('a').forEach((a) => on(a, 'click', closeMenu));
    on(document, 'keydown', (e) => {
      if ((e as KeyboardEvent).key === 'Escape') closeMenu();
    });
  }

  /* Scroll reveals: hide only what starts below the fold, then play once */
  const vh = window.innerHeight;
  const below = (el: Element) => el.getBoundingClientRect().top > vh * 0.92;
  const targets = $$('.rv,.reveal-img,[data-st]');
  const rail = $('#rail');
  const steps = $$('.step');
  const counters = $$('[data-count]');

  const fmt = (n: number, el: HTMLElement) => {
    const p = el.getAttribute('data-prefix') || '';
    const s = el.getAttribute('data-suffix') || '';
    return p + Math.round(n).toLocaleString('en-ZA').replace(/\s/g, ',') + s;
  };
  const count = (el: HTMLElement, delay: number) => {
    const to = Number(el.getAttribute('data-count'));
    el.textContent = fmt(0, el);
    later(() => {
      const t0 = performance.now();
      const d = 1400;
      const tick = (t: number) => {
        const k = Math.min(1, Math.max(0, (t - t0) / d));
        const e = 1 - Math.pow(1 - k, 4);
        el.textContent = fmt(to * e, el);
        if (k < 1) {
          const id = requestAnimationFrame(tick);
          off.push(() => cancelAnimationFrame(id));
        }
      };
      tick(t0);
    }, delay || 0);
  };

  if ('IntersectionObserver' in window && !reduce) {
    const proxy = new WeakMap<Element, Element>();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          const el = en.target as HTMLElement;
          io.unobserve(el);
          if (el === rail) {
            el.classList.remove('pre');
            steps.forEach((s, i) => later(() => s.classList.add('lit'), 300 + i * 260));
            return;
          }
          if (el.hasAttribute('data-count')) {
            count(el, 200);
            return;
          }
          (proxy.get(el) || el).classList.remove('pre');
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    );
    off.push(() => io.disconnect());
    targets.forEach((el) => {
      if (!below(el)) return;
      el.classList.add('pre');
      /* a fully clipped element never intersects, so clip reveals are watched through their figure */
      const watch = el.classList.contains('reveal-img') ? el.closest('figure') || el : el;
      if (watch !== el) proxy.set(watch, el);
      io.observe(watch);
    });
    if (rail && below(rail)) {
      rail.classList.add('pre');
      steps.forEach((s) => s.classList.remove('lit'));
      io.observe(rail);
    }
    counters.forEach((el) => {
      if (below(el)) {
        el.textContent = fmt(0, el);
        io.observe(el);
      } else count(el, 1100);
    });
  }

  /* Gallery arrows */
  const g = $('#gallery');
  const gp = $<HTMLButtonElement>('#gPrev');
  const gn = $<HTMLButtonElement>('#gNext');
  if (g && gp && gn) {
    const stepW = () => {
      const c = g.querySelector('.shot');
      return c ? c.getBoundingClientRect().width + 16 : 300;
    };
    const sync = () => {
      gp.disabled = g.scrollLeft <= 4;
      gn.disabled = g.scrollLeft + g.clientWidth >= g.scrollWidth - 4;
    };
    on(gp, 'click', () => g.scrollBy({ left: -stepW(), behavior: reduce ? 'auto' : 'smooth' }));
    on(gn, 'click', () => g.scrollBy({ left: stepW(), behavior: reduce ? 'auto' : 'smooth' }));
    on(g, 'scroll', sync, { passive: true });
    on(window, 'resize', sync);
    sync();
  }

  /* Lightbox */
  const lb = $<HTMLDialogElement>('#lb');
  const shots = $$<HTMLElement>('[data-lb]');
  if (lb && lb.open) lb.close();
  if (lb && shots.length) {
    const li = $<HTMLImageElement>('#lbImg');
    const lt = $('#lbTitle');
    const ls = $('#lbSub');
    let idx = 0;
    const show = (i: number) => {
      idx = (i + shots.length) % shots.length;
      const b = shots[idx];
      const img = b.querySelector('img');
      const cap = b.closest('figure')?.querySelector('figcaption');
      if (!img || !cap || !li || !lt || !ls) return;
      li.src = img.currentSrc || img.src;
      li.alt = img.alt;
      lt.textContent = cap.querySelector('b')?.textContent ?? '';
      ls.textContent = cap.querySelector('span')?.textContent ?? '';
    };
    const closeLb = () => {
      if (!lb.open) return;
      lb.classList.add('leaving');
      later(() => {
        lb.classList.remove('leaving');
        lb.close();
      }, reduce ? 0 : 160);
    };
    shots.forEach((b, i) =>
      on(b, 'click', () => {
        show(i);
        if (typeof lb.showModal === 'function') lb.showModal();
      }),
    );
    const prev = $('#lbPrev');
    const next = $('#lbNext');
    const close = $('#lbClose');
    if (prev) on(prev, 'click', () => show(idx - 1));
    if (next) on(next, 'click', () => show(idx + 1));
    if (close) on(close, 'click', closeLb);
    on(lb, 'cancel', (e) => {
      e.preventDefault();
      closeLb();
    });
    on(lb, 'click', (e) => {
      if (e.target === lb) closeLb();
    });
    on(lb, 'keydown', (e) => {
      const k = (e as KeyboardEvent).key;
      if (k === 'ArrowRight') show(idx + 1);
      if (k === 'ArrowLeft') show(idx - 1);
    });
  }

  /* Copy email */
  const cb = $<HTMLButtonElement>('#copyEmail');
  const em = $('#email');
  if (cb && em) {
    on(cb, 'click', () => {
      const done = () => {
        cb.textContent = 'Copied';
        later(() => {
          cb.textContent = 'Copy';
        }, 1600);
      };
      const fallback = () => {
        const r = document.createRange();
        r.selectNodeContents(em);
        const s = window.getSelection();
        if (s) {
          s.removeAllRanges();
          s.addRange(r);
        }
        cb.textContent = 'Selected';
      };
      try {
        navigator.clipboard.writeText(em.textContent || '').then(done, fallback);
      } catch {
        fallback();
      }
    });
  }

  /* Mobile dock: shows after the opening section, hides at the close */
  const dock = $('#dock');
  const first = $('main > section');
  const closeSec = $('#start');
  if (dock) dock.classList.remove('show');
  if (dock && first && closeSec && 'IntersectionObserver' in window) {
    let heroOut = false;
    let closeIn = false;
    const upd = () => dock.classList.toggle('show', heroOut && !closeIn);
    const o1 = new IntersectionObserver((e) => {
      heroOut = !e[0].isIntersecting;
      upd();
    });
    const o2 = new IntersectionObserver((e) => {
      closeIn = e[0].isIntersecting;
      upd();
    });
    o1.observe(first);
    o2.observe(closeSec);
    off.push(() => {
      o1.disconnect();
      o2.disconnect();
    });
  }

  /* Currency switch on pricing (rates match the live international-buyers page; approximate, final price in ZAR) */
  const curBox = $('.cur');
  if (curBox) {
    const amts = $$<HTMLElement>('[data-zar]');
    const money = (z: number, c: string) => SYM[c] + Math.round(z / RATES[c]).toLocaleString('en-ZA').replace(/\s/g, ',');
    const set = (c: string, animate: boolean) => {
      curBox.querySelectorAll('button').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.c === c)));
      amts.forEach((el) => {
        const txt = (el.dataset.pre || '') + money(Number(el.dataset.zar), c) + (el.dataset.post || '');
        if (!animate || reduce) {
          el.textContent = txt;
          return;
        }
        el.classList.add('swap');
        later(() => {
          el.textContent = txt;
          el.classList.remove('swap');
        }, 140);
      });
      const n = document.getElementById('curNote');
      if (n) n.hidden = c === 'ZAR';
      try {
        localStorage.setItem('vantara-cur', c);
      } catch {
        /* storage unavailable */
      }
    };
    on(curBox, 'click', (e) => {
      const b = (e.target as HTMLElement).closest('button');
      if (b && b.dataset.c) set(b.dataset.c, true);
    });
    let saved = 'ZAR';
    try {
      saved = localStorage.getItem('vantara-cur') || 'ZAR';
    } catch {
      /* storage unavailable */
    }
    if (!RATES[saved]) saved = 'ZAR';
    set(saved, false);
  }

  /* Enquiry form: builds a ready-to-send WhatsApp message, no backend needed */
  const f = document.getElementById('enqForm') as HTMLFormElement | null;
  if (f) {
    const ready = document.getElementById('enqReady');
    const link = document.getElementById('enqLink') as HTMLAnchorElement | null;
    const err = document.getElementById('enqErr');
    on(f, 'submit', (e) => {
      e.preventDefault();
      if (!ready || !link || !err) return;
      const d = new FormData(f);
      const val = (k: string) => String(d.get(k) || '').trim();
      const name = val('name');
      if (!name || !val('when')) {
        err.hidden = false;
        err.textContent = 'Add your name and when you arrive, then try again.';
        return;
      }
      err.hidden = true;
      const lines = ['Hi Luyanda, I found Vantara and want to buy a car in South Africa.', 'Name: ' + name];
      (
        [
          ['country', 'Coming from'],
          ['when', 'Arriving'],
          ['city', 'Landing in'],
          ['budget', 'Budget'],
          ['car', 'Looking for'],
          ['need', 'I need'],
        ] as const
      ).forEach((p) => {
        const v = val(p[0]);
        if (v) lines.push(p[1] + ': ' + v);
      });
      lines.push('(ref ' + f.dataset.ref + ')');
      link.href = 'https://wa.me/' + WA + '?text=' + encodeURIComponent(lines.join('\n'));
      f.hidden = true;
      ready.hidden = false;
      link.focus();
    });
    const edit = document.getElementById('enqEdit');
    if (edit && ready) {
      on(edit, 'click', () => {
        ready.hidden = true;
        f.hidden = false;
      });
    }
  }

  return () => off.forEach((fn) => fn());
}

export default function VantaraMotion() {
  const pathname = usePathname();
  useEffect(() => init(pathname), [pathname]);
  return null;
}
