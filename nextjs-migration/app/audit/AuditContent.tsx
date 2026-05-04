'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Nav from '../components/Nav';

// ─── STEP DEFINITIONS ─────────────────────────────────────────
interface StepOpt { v: string; l: string; s?: string; url?: boolean; }
interface Step {
  id: string; meta: string; q: string; sub?: string;
  type: 'single' | 'single-opt' | 'social' | 'radio' | 'radio-url';
  key?: string;
  field?: { k: string; label: string; ph: string };
  fields?: { k: string; label: string; ph: string }[];
  opts?: StepOpt[];
}

const STEPS: Step[] = [
  {
    id:'biz-name', meta:'Step 1 of 13',
    q:"What is your business called?",
    sub:"Use the name your customers know you by.",
    type:'single' as const,
    field:{k:'businessName', label:'Business Name', ph:'e.g. Sunshine Plumbing, Studio North, Nkosi Legal'}
  },
  {
    id:'biz-desc', meta:'Step 2 of 13',
    q:"In one sentence: what does your business do, and where?",
    sub:"Be specific. This personalises every finding in your report.",
    type:'single' as const,
    field:{k:'businessDescription', label:'Business description', ph:'e.g. We supply and install solar systems across KwaZulu-Natal.'}
  },
  {
    id:'website', meta:'Step 3 of 13',
    q:"How would you describe your website?",
    sub:"If you have one, share the URL. We factor in what's actually there.",
    type:'radio-url' as const, key:'websiteStatus',
    opts:[
      {v:"It's live and we're happy with it", l:"Live and confident", s:"Looks good, generates leads", url:true},
      {v:"It's live but outdated or slow", l:"Live - but outdated or slow", url:true},
      {v:"It's live but doesn't generate enquiries", l:"Live - but not converting", s:"Traffic doesn't turn into leads", url:true},
      {v:"We're building one", l:"In development", s:"Coming soon"},
      {v:"We don't have a website yet", l:"No website yet"}
    ]
  },
  {
    id:'google-name', meta:'Step 4 of 13',
    q:"What name do you trade under on Google?",
    sub:"This is what appears on Google Maps and Google Search. Leave blank if you're unsure or not listed.",
    type:'single-opt' as const,
    field:{k:'googleName', label:'Google Business Name', ph:'e.g. Sunshine Plumbing KZN'}
  },
  {
    id:'social', meta:'Step 5 of 13',
    q:"Share your social media handles or page links.",
    sub:"Leave any blank that you're not active on. Handles or full URLs both work.",
    type:'social' as const,
    fields:[
      {k:'facebook', label:'Facebook', ph:'facebook.com/yourpage or @handle'},
      {k:'instagram', label:'Instagram', ph:'@yourhandle'},
      {k:'linkedin', label:'LinkedIn', ph:'linkedin.com/company/yourco'},
      {k:'tiktok', label:'TikTok', ph:'@yourhandle'}
    ]
  },
  {
    id:'search-vis', meta:'Step 6 of 13',
    q:"When a customer searches for what you do in your area: where do you appear?",
    sub:'Try it now: search "[your service] [your city]" on Google.',
    type:'radio' as const, key:'searchVisibility',
    opts:[
      {v:"Consistently in the top 3 results", l:"Top 3 on Google - consistently"},
      {v:"On page 1, but not the top 3 spots", l:"Page 1 - but not top 3"},
      {v:"Appears sometimes, inconsistently", l:"Inconsistent - sometimes there, sometimes not"},
      {v:"Rarely appears — competitors outrank me consistently", l:"Rarely appears - competitors dominate"},
      {v:"Does not appear or has never been checked", l:"Don't appear / never checked"}
    ]
  },
  {
    id:'gmb', meta:'Step 7 of 13',
    q:"What's the state of your Google Business Profile?",
    sub:"The listing on Google Maps with your address, hours, photos, and reviews.",
    type:'radio' as const, key:'googleProfile',
    opts:[
      {v:"Complete — photos, services, hours, and regular updates", l:"Fully optimised", s:"Photos, services, hours, recent posts, and reviews"},
      {v:"Set up but not regularly updated", l:"Set up - but inactive", s:"Claimed and filled in, but rarely touched"},
      {v:"Claimed but barely filled in", l:"Claimed - mostly empty", s:"We have it, it's just not complete"},
      {v:"Not claimed or not sure if I have one", l:"Not claimed / unsure"}
    ]
  },
  {
    id:'social-pres', meta:'Step 8 of 13',
    q:"How would you honestly describe your social media presence?",
    sub:"Pick the one closest to the truth.",
    type:'radio' as const, key:'socialPresence',
    opts:[
      {v:"Active and intentional — consistent content that drives enquiries", l:"Active and strategic", s:"Regular posts, real engagement, leads from social"},
      {v:"Inconsistent — we post when we remember", l:"Inconsistent - ad hoc posting"},
      {v:"Rarely active — accounts exist but barely used", l:"Barely active", s:"Accounts exist but months pass without posts"},
      {v:"Not present on social media", l:"Not on social media"}
    ]
  },
  {
    id:'lead-cap', meta:'Step 9 of 13',
    q:"How easy is it for a potential customer to take action on your digital platforms?",
    sub:"Think about your website, social pages, and Google listing together.",
    type:'radio' as const, key:'leadCapture',
    opts:[
      {v:"Easy — clear call-to-action, WhatsApp link, quote or booking form", l:"Easy - clear path to contact", s:"WhatsApp button, quote form, or click-to-call"},
      {v:"Acceptable — contact options exist but aren't prominent", l:"Acceptable - but not optimised"},
      {v:"Difficult — contact info is buried or hard to find", l:"Difficult - contact is buried"},
      {v:"Unclear — visitors likely leave without knowing what to do", l:"Unclear - no obvious next step"}
    ]
  },
  {
    id:'brand', meta:'Step 10 of 13',
    q:"Does your brand look and feel consistent across all platforms?",
    sub:"Same logo, colours, tone, and message: on your website, social, and Google listing.",
    type:'radio' as const, key:'brandConsistency',
    opts:[
      {v:"Consistent — same look, tone, and message everywhere", l:"Consistent across all platforms"},
      {v:"Mostly consistent — but some platforms feel disconnected", l:"Mostly consistent - minor gaps"},
      {v:"Inconsistent — different look and feel across platforms", l:"Inconsistent - noticeably different"},
      {v:"No real thought given to brand consistency", l:"Not considered yet"}
    ]
  },
  {
    id:'cost', meta:'Step 11 of 13',
    q:"What is your digital presence costing you most right now?",
    sub:"Pick the single biggest issue. This anchors your entire report.",
    type:'radio' as const, key:'biggestCostly',
    opts:[
      {v:"Not appearing in local searches while competitors do", l:"Not being found on Google"},
      {v:"A website that doesn't convert visitors into enquiries", l:"Website that doesn't generate leads"},
      {v:"Looking unprofessional or inconsistent to potential clients", l:"Weak or inconsistent brand impression"},
      {v:"Missing leads because it's too hard to contact me or enquire", l:"Poor lead capture - friction at the point of action"},
      {v:"Social media that looks inactive, abandoned, or amateur", l:"Inactive or poor social media presence"},
      {v:"Competitors being found before me on Google and Google Maps", l:"Losing ground to competitors on search"}
    ]
  },
  {
    id:'industry', meta:'Step 12 of 13',
    q:"What industry or sector is your business in?",
    sub:"Select the category that best describes your business.",
    type:'radio' as const, key:'industry',
    opts:[
      {v:"Retail & Products", l:"Retail & Products"},
      {v:"Professional Services", l:"Professional Services"},
      {v:"Health & Medical", l:"Health & Medical"},
      {v:"Construction & Trades", l:"Construction & Trades"},
      {v:"Hospitality & Food", l:"Hospitality & Food"},
      {v:"Education & Training", l:"Education & Training"},
      {v:"Other", l:"Other"}
    ]
  },
  {
    id:'transaction', meta:'Step 13 of 13',
    q:"Roughly, what is a typical sale or job worth to your business?",
    sub:"This helps us calculate the revenue impact in your report.",
    type:'radio' as const, key:'transactionBracket',
    opts:[
      {v:"Under R1,000", l:"Under R1,000"},
      {v:"R1,000–R5,000", l:"R1,000–R5,000"},
      {v:"R5,000–R20,000", l:"R5,000–R20,000"},
      {v:"R20,000–R100,000", l:"R20,000–R100,000"},
      {v:"Over R100,000", l:"Over R100,000"}
    ]
  }
];

const TOTAL = STEPS.length;

const MSGS = [
  'Analysing your website presence…',
  'Evaluating your search visibility…',
  'Assessing your Google Business Profile…',
  'Scoring your lead capture…',
  'Compiling your personalised report…'
];

type Screen = 'intro' | 'step' | 'contact' | 'loading' | 'report';

interface Answers {
  [key: string]: string;
}

interface DimResult {
  name: string;
  systemLabel: string;
  score: number;
  weight: string;
  severityLabel: string;
  headline: string;
  analysis: string;
  teaser: string;
}

interface ReportData {
  businessName?: string;
  finalScore?: number;
  overallScore?: number;
  biggestCostly?: string;
  openingStatement?: string;
  dimensions?: DimResult[];
  priorityFixes?: string[];
  closingStatement?: string;
}

function scoreClass(s: number) {
  return s <= 3 ? 'poor' : s <= 6 ? 'fair' : s <= 8 ? 'good' : 'excellent';
}

function sysPrompt() {
  return `You are the ADA Growth Diagnostic System — a diagnostic engine built by Avalon Digital Agency (ADA), a division of Avalon Capital Group, based in KwaZulu-Natal, South Africa.

Your function is to process a South African business's self-reported digital inputs and produce a calculated diagnostic report. You do not write like a consultant offering opinions. You output like a system that has processed inputs and returned a verdict.

Every sentence must feel derived from data, not authored by a person.

---

TONE
- Diagnostic, not advisory — you measured something, you are reporting the result
- Specific — every sentence references this business's name, industry, location, and inputs
- Honest and direct — if something is critically broken, name it as such without softening
- Outcome-focused — frame every finding in terms of revenue lost or revenue recoverable
- Lead with the sharpest observation in every dimension — most painful truth first, not the setup
- Never use filler phrases, motivational language, or generic statements that could apply to any business

---

WEIGHTED SCORING ENGINE
Score each dimension from 1 to 10, then calculate the weighted final score.

Dimension weights:
- Website (Traffic Acquisition Layer): 20%
- Search Visibility (Discovery Engine): 20%
- Google Business Profile (Local Presence System): 20%
- Social Media (Trust & Reach Layer): 15%
- Lead Capture (Customer Capture System): 15%
- Brand Consistency (Authority Signal): 10%

Weighted Score Formula:
finalScore = (website × 0.20) + (searchVisibility × 0.20) + (googleProfile × 0.20) + (socialMedia × 0.15) + (leadCapture × 0.15) + (brandConsistency × 0.10)

Round finalScore to 1 decimal place.

Scoring anchors:
1–2: Absent or critically broken. Actively losing business.
3–4: Exists but underperforming. Opportunity being missed daily.
5–6: Functional but not optimised. Leaving money on the table.
7–8: Solid. Refinements will compound results.
9–10: Strong. Maintain and build.

Rules:
- No website → Website scores 1
- Never appears on Google → Search Visibility scores 2
- No Google Business Profile → Google Profile scores 1
- All social handles blank → Social Media scores 1
- Brand Consistency must not score above the average of the other five dimensions for businesses with organically grown, unmanaged presence

---

SEVERITY LABELS
Assign one label per dimension based on score:
- 1–3: Critical Failure
- 4–5: Underperforming
- 6–7: Functional
- 8–10: Optimised

---

BENCHMARK PERCENTILES
Map finalScore to percentile and tier:
- 0.0–2.9: Bottom 15% — Critical Digital Failure
- 3.0–4.4: Bottom 35% — Underperforming
- 4.5–5.9: Middle 40% — Developing
- 6.0–7.4: Top 35% — Competitive
- 7.5–8.9: Top 15% — Strong
- 9.0–10.0: Top 5% — Dominant

---

REVENUE LEAKAGE CALCULATOR
Use industry and transactionBracket to calculate estimated monthly revenue loss.

Step 1 — Set search demand baseline by industry:
- Retail & Products: 2,000 searches/month
- Health & Medical: 1,800 searches/month
- Hospitality & Food: 2,500 searches/month
- Construction & Trades: 1,200 searches/month
- Professional Services: 800 searches/month
- Education & Training: 600 searches/month
- Other: 1,000 searches/month

Step 2 — Set current capture rate from finalScore:
- Score 0–2.9: 4%
- Score 3.0–4.4: 8%
- Score 4.5–5.9: 14%
- Score 6.0–7.4: 20%
- Score 7.5+: 28%

Step 3 — Potential capture rate: 28%

Step 4 — Lost customers per month:
lostCustomers = searchDemand × (0.28 − currentCaptureRate)

Step 5 — Transaction value midpoint:
- Under R1,000: R600
- R1,000–R5,000: R2,500
- R5,000–R20,000: R10,000
- R20,000–R100,000: R45,000
- Over R100,000: R120,000

Step 6 — Revenue loss range:
revenueLossLow = lostCustomers × transactionMidpoint × 0.7
revenueLossHigh = lostCustomers × transactionMidpoint × 1.3
Round both to nearest R1,000. Express as "R[low] – R[high] per month".

Step 7 — Recovery hook (30% close):
recoveryLow = revenueLossLow × 0.30
recoveryHigh = revenueLossHigh × 0.30
Round to nearest R1,000.

---

TEASERS
Each dimension includes a teaser field. These create desire for ADA's action plan without delivering it.

Rules for ALL teasers:
- Never use the phrase "there is a specific system/approach/method/way"
- Every teaser must use a different opening construction
- Reference the business name, industry, or calculated capture rate where it strengthens the line
- End with tension — a statement that makes the business owner think "I need to know what that is"
- Never contain actionable advice

---

REPORT STRUCTURE
Return a valid JSON object with exactly this structure. Return only the JSON — no preamble, no markdown fences.

{
  "businessName": "string",
  "industry": "string",
  "finalScore": number,
  "benchmarkTier": "string",
  "severityLabel": "string",
  "biggestCostly": "string",
  "revenueLossRange": "string",
  "recoveryHook": "string",
  "openingStatement": "string",
  "systemSummary": "string",
  "dimensions": [
    {
      "name": "Website",
      "systemLabel": "Traffic Acquisition Layer",
      "score": number,
      "weight": "20%",
      "severityLabel": "string",
      "headline": "string",
      "analysis": "string",
      "teaser": "string"
    },
    {
      "name": "Search Visibility",
      "systemLabel": "Discovery Engine",
      "score": number,
      "weight": "20%",
      "severityLabel": "string",
      "headline": "string",
      "analysis": "string",
      "teaser": "string"
    },
    {
      "name": "Google Business Profile",
      "systemLabel": "Local Presence System",
      "score": number,
      "weight": "20%",
      "severityLabel": "string",
      "headline": "string",
      "analysis": "string",
      "teaser": "string"
    },
    {
      "name": "Social Media",
      "systemLabel": "Trust & Reach Layer",
      "score": number,
      "weight": "15%",
      "severityLabel": "string",
      "headline": "string",
      "analysis": "string",
      "teaser": "string"
    },
    {
      "name": "Lead Capture",
      "systemLabel": "Customer Capture System",
      "score": number,
      "weight": "15%",
      "severityLabel": "string",
      "headline": "string",
      "analysis": "string",
      "teaser": "string"
    },
    {
      "name": "Brand Consistency",
      "systemLabel": "Authority Signal",
      "score": number,
      "weight": "10%",
      "severityLabel": "string",
      "headline": "string",
      "analysis": "string",
      "teaser": "string"
    }
  ],
  "priorityFixes": [
    "string",
    "string",
    "string"
  ],
  "closingStatement": "string"
}`;
}

export default function AuditContent() {
  const [screen, setScreen] = useState<Screen>('intro');
  const [stepNum, setStepNum] = useState(1);
  const [answers, setAnswers] = useState<Answers>({});
  const [urlInputs, setUrlInputs] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string | number, string>>({});
  const [loadMsg, setLoadMsg] = useState(MSGS[0]);
  const [report, setReport] = useState<ReportData | null>(null);
  const [scoreDisplay, setScoreDisplay] = useState(0);
  const [progPct, setProgPct] = useState(0);
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactLoc, setContactLoc] = useState('');
  const [contactErr, setContactErr] = useState('');
  const [dimBarWidths, setDimBarWidths] = useState<number[]>([]);

  const currentStep = STEPS[stepNum - 1];

  function setProg(n: number) {
    setProgPct(n >= 1 ? (n / (TOTAL + 2)) * 100 : 0);
  }

  function startAudit() {
    setStepNum(1);
    setProg(1);
    setScreen('step');
  }

  function selectOpt(key: string, value: string) {
    setAnswers(prev => ({ ...prev, [key]: value }));
    setErrors(prev => { const n = { ...prev }; delete n[stepNum]; return n; });
  }

  function handleFieldChange(k: string, v: string) {
    setAnswers(prev => ({ ...prev, [k]: v }));
  }

  function nextStep() {
    const s = currentStep;
    const newErrors = { ...errors };

    if (s.type === 'single') {
      if (!answers[s.field!.k]?.trim()) {
        newErrors[stepNum] = 'Please fill in this field to continue.';
        setErrors(newErrors);
        return;
      }
    } else if (s.type === 'radio' || s.type === 'radio-url') {
      if (!answers[s.key!]) {
        newErrors[stepNum] = 'Please make a selection to continue.';
        setErrors(newErrors);
        return;
      }
    }

    delete newErrors[stepNum];
    setErrors(newErrors);

    if (stepNum === TOTAL) {
      setProg(TOTAL + 1);
      setScreen('contact');
    } else {
      const next = stepNum + 1;
      setStepNum(next);
      setProg(next);
      setScreen('step');
    }
  }

  function backStep() {
    if (stepNum <= 1) {
      setProg(0);
      setScreen('intro');
      return;
    }
    const prev = stepNum - 1;
    setStepNum(prev);
    setProg(prev);
    setScreen('step');
  }

  function backFromContact() {
    setStepNum(TOTAL);
    setProg(TOTAL);
    setScreen('step');
  }

  async function submitContact() {
    if (!contactName.trim() || !contactEmail.trim()) {
      setContactErr('Please enter your name and email to continue.');
      return;
    }
    setContactErr('');
    setScreen('loading');

    const fullAnswers: Record<string, string> = {
      ...answers,
      cName: contactName,
      cEmail: contactEmail,
      cPhone: contactPhone,
      cLoc: contactLoc,
      webUrl: urlInputs['webUrl'] || ''
    };

    const buildPrompt = () => JSON.stringify({
      businessName: fullAnswers.businessName || '',
      businessDescription: fullAnswers.businessDescription || '',
      websiteUrl: fullAnswers.webUrl || '',
      googleName: fullAnswers.googleName || '',
      socialHandles: {
        facebook: fullAnswers.facebook || '',
        instagram: fullAnswers.instagram || '',
        linkedin: fullAnswers.linkedin || '',
        tiktok: fullAnswers.tiktok || ''
      },
      websiteStatus: fullAnswers.websiteStatus || '',
      searchVisibility: fullAnswers.searchVisibility || '',
      googleProfile: fullAnswers.googleProfile || '',
      socialPresence: fullAnswers.socialPresence || '',
      leadCapture: fullAnswers.leadCapture || '',
      brandConsistency: fullAnswers.brandConsistency || '',
      biggestCostly: fullAnswers.biggestCostly || '',
      industry: fullAnswers.industry || '',
      transactionBracket: fullAnswers.transactionBracket || ''
    }, null, 2);

    let mi = 0;
    const tick = setInterval(() => {
      mi = (mi + 1) % MSGS.length;
      setLoadMsg(MSGS[mi]);
    }, 2600);

    const attempt = async () => {
      const res = await fetch('/api/audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ systemPrompt: sysPrompt(), userMessage: buildPrompt() })
      });
      if (!res.ok) {
        const d = await res.json();
        throw new Error(d.error || `HTTP ${res.status}`);
      }
      const data = await res.json();
      const raw = data.content[0].text;
      const cleaned = raw.replace(/^```(?:json)?\s*/i, '').replace(/\s*```\s*$/i, '').trim();
      const m = cleaned.match(/\{[\s\S]*\}/);
      if (!m) throw new SyntaxError('no-json-block');
      return JSON.parse(m[0]);
    };

    try {
      let parsed: ReportData;
      try {
        parsed = await attempt();
      } catch (e) {
        if (e instanceof SyntaxError) {
          parsed = await attempt();
        } else {
          throw e;
        }
      }
      clearInterval(tick);
      setReport(parsed);
      setScreen('report');
      // save contact
      fetch('/api/save-contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          business_name: fullAnswers.businessName || '',
          contact_name: fullAnswers.cName || '',
          contact_email: fullAnswers.cEmail || '',
          contact_whatsapp: fullAnswers.cPhone || '',
          contact_city: fullAnswers.cLoc || ''
        })
      }).catch(() => {});
    } catch (err: unknown) {
      clearInterval(tick);
      setScreen('contact');
      const msg = err instanceof SyntaxError
        ? "The report couldn't be formatted correctly: please try again."
        : `Something went wrong: ${err instanceof Error ? err.message : 'Unknown error'}`;
      setContactErr(msg);
    }
  }

  // Animate score counter when report appears
  useEffect(() => {
    if (screen === 'report' && report) {
      const score = parseFloat(String(report.finalScore ?? report.overallScore)) || 0;
      setScoreDisplay(0);
      setDimBarWidths([]);
      setTimeout(() => {
        let c = 0;
        const inc = score / (1500 / 16);
        const t = setInterval(() => {
          c = Math.min(c + inc, score);
          setScoreDisplay(parseFloat(c.toFixed(1)));
          if (c >= score) clearInterval(t);
        }, 16);
        setTimeout(() => {
          if (report.dimensions) {
            setDimBarWidths(report.dimensions.map(d => (d.score / 10) * 100));
          }
        }, 200);
      }, 80);
    }
  }, [screen, report]);

  function restart() {
    setAnswers({});
    setUrlInputs({});
    setErrors({});
    setStepNum(1);
    setReport(null);
    setScoreDisplay(0);
    setDimBarWidths([]);
    setContactName('');
    setContactEmail('');
    setContactPhone('');
    setContactLoc('');
    setContactErr('');
    setProg(0);
    setScreen('intro');
  }

  const score = report ? (parseFloat(String(report.finalScore ?? report.overallScore)) || 0) : 0;
  const sc = scoreClass(score);
  const bizName = report?.businessName || answers.businessName || 'Your Business';
  const waMsg = encodeURIComponent(`Hi Avalon Digital! I just completed my digital presence audit. My business is ${bizName}: I scored ${score}/10 and I'd love to discuss the action plan. My name is ${contactName}.`);

  return (
    <>
      <style suppressHydrationWarning>{`
        .audit-scr { display:none; min-height:100vh; padding:120px 60px 80px; flex-direction:column; align-items:center; justify-content:center; }
        .audit-scr.on { display:flex; }
        #audit-report { min-height:100vh; padding:100px 60px 80px; }
        .audit-inner { width:100%; max-width:640px; }
        .audit-inner.wide { max-width:900px; }
        .audit-meta { font-size:10px; letter-spacing:0.3em; text-transform:uppercase; color:var(--gold); margin-bottom:16px; display:flex; align-items:center; gap:16px; }
        .audit-meta::before { content:''; display:block; width:32px; height:1px; background:var(--gold); }
        .audit-q { font-family:'Cormorant Garamond',serif; font-size:clamp(28px,4.5vw,48px); font-weight:300; line-height:1.1; margin-bottom:14px; color:var(--text); }
        .audit-sub { font-size:13px; color:var(--text-muted); line-height:1.9; margin-bottom:36px; max-width:520px; }
        .audit-opts { display:flex; flex-direction:column; gap:1px; background:var(--border); }
        .audit-opt { display:flex; align-items:center; gap:16px; padding:18px 22px; background:var(--black); cursor:pointer; transition:background 0.3s; user-select:none; position:relative; overflow:hidden; }
        .audit-opt::before { content:''; position:absolute; top:0; left:0; width:2px; height:0; background:var(--gold); transition:height 0.4s; }
        .audit-opt:hover { background:var(--surface); }
        .audit-opt:hover::before { height:100%; }
        .audit-opt.sel { background:var(--surface); }
        .audit-opt.sel::before { height:100%; }
        .audit-oradio { width:14px; height:14px; flex-shrink:0; border:1px solid var(--text-dim); transition:all 0.3s; }
        .audit-opt.sel .audit-oradio { background:var(--gold); border-color:var(--gold); }
        .audit-olabel { font-size:13px; color:var(--text); font-weight:300; }
        .audit-osub { font-size:11px; color:var(--text-muted); margin-top:2px; }
        .audit-igroup { display:flex; flex-direction:column; margin-bottom:20px; }
        .audit-ilabel { font-size:9px; letter-spacing:0.25em; text-transform:uppercase; color:var(--text-dim); margin-bottom:8px; }
        .audit-ifield { width:100%; padding:14px 16px; background:var(--surface); border:1px solid var(--border); color:var(--text); font-family:'Montserrat',sans-serif; font-size:13px; font-weight:300; outline:none; transition:border-color 0.3s; }
        .audit-ifield:focus { border-color:var(--gold-dim); }
        .audit-ifield::placeholder { color:var(--text-dim); }
        .audit-social-grid { display:grid; grid-template-columns:1fr 1fr; gap:16px; }
        .audit-social-platform { font-size:9px; letter-spacing:0.2em; text-transform:uppercase; color:var(--gold); margin-bottom:6px; }
        .audit-navrow { display:flex; align-items:center; gap:16px; margin-top:36px; flex-wrap:wrap; }
        .audit-btn { font-family:'Montserrat',sans-serif; cursor:pointer; border:none; }
        .audit-btn-p { font-size:10px; letter-spacing:0.25em; text-transform:uppercase; color:var(--black); background:var(--gold); border:1px solid var(--gold); padding:16px 36px; font-weight:400; transition:all 0.3s; }
        .audit-btn-p:hover { background:var(--gold-light); border-color:var(--gold-light); }
        .audit-btn-s { font-size:10px; letter-spacing:0.25em; text-transform:uppercase; color:var(--text-muted); background:transparent; border:1px solid var(--border); padding:16px 36px; font-weight:300; transition:all 0.3s; }
        .audit-btn-s:hover { border-color:var(--text-muted); color:var(--text); }
        .audit-errbox { background:rgba(224,90,90,0.07); border:1px solid rgba(224,90,90,0.25); padding:12px 16px; font-size:12px; color:#e05a5a; margin-top:16px; }
        .audit-spin { width:40px; height:40px; border:1px solid var(--border); border-top-color:var(--gold); border-radius:50%; animation:audit-rot 1s linear infinite; margin:0 auto 32px; }
        @keyframes audit-rot { to { transform:rotate(360deg); } }
        .audit-load-t { font-family:'Cormorant Garamond',serif; font-size:28px; font-weight:300; margin-bottom:10px; text-align:center; color:var(--text); }
        .audit-load-s { font-size:12px; color:var(--text-muted); letter-spacing:0.05em; text-align:center; }
        .audit-feats { display:flex; gap:40px; flex-wrap:wrap; margin-bottom:52px; margin-top:32px; }
        .audit-feat { font-size:10px; letter-spacing:0.22em; text-transform:uppercase; color:var(--text-dim); display:flex; align-items:center; gap:12px; }
        .audit-feat::before { content:''; width:20px; height:1px; background:var(--gold); }
        .score-hero { text-align:center; padding:60px 0 48px; }
        .score-biz { font-size:10px; letter-spacing:0.3em; text-transform:uppercase; color:var(--text-muted); margin-bottom:24px; }
        .score-display { display:flex; align-items:flex-start; justify-content:center; gap:6px; margin-bottom:8px; }
        .score-num { font-family:'Cormorant Garamond',serif; font-size:clamp(80px,14vw,120px); font-weight:300; line-height:1; }
        .score-denom { font-family:'Cormorant Garamond',serif; font-size:22px; font-weight:300; color:var(--text-dim); padding-top:22px; }
        .score-lbl { font-size:9px; letter-spacing:0.3em; text-transform:uppercase; color:var(--text-dim); margin-bottom:20px; }
        .score-bar-wrap { max-width:280px; margin:0 auto; height:2px; background:var(--border); }
        .score-bar-fill { height:100%; transition:width 1.6s cubic-bezier(0.4,0,0.2,1); }
        .sc-poor { color:var(--red,#e05a5a); } .sc-fair { color:var(--amber,#e8a84c); } .sc-good { color:var(--gold-light); } .sc-excellent { color:#5aca8e; }
        .sc-bg-poor { background:var(--red,#e05a5a); } .sc-bg-fair { background:var(--amber,#e8a84c); } .sc-bg-good { background:var(--gold); } .sc-bg-excellent { background:#5aca8e; }
        .bc-card { display:flex; align-items:flex-start; gap:20px; background:var(--surface); border:1px solid var(--border); padding:24px 28px; margin-bottom:48px; }
        .bc-icon { font-size:14px; flex-shrink:0; padding-top:2px; color:var(--gold); }
        .bc-label { font-size:9px; letter-spacing:0.25em; text-transform:uppercase; color:var(--gold); margin-bottom:6px; }
        .bc-text { font-size:13px; color:var(--text); line-height:1.7; }
        .opening-stmt { font-family:'Cormorant Garamond',serif; font-size:clamp(16px,2.5vw,20px); font-weight:300; font-style:italic; line-height:1.75; color:var(--text); border-left:2px solid var(--gold); padding:24px 28px; margin-bottom:60px; background:var(--surface); }
        .report-sec { margin-bottom:60px; }
        .sec-hd { font-size:10px; letter-spacing:0.3em; text-transform:uppercase; color:var(--gold); margin-bottom:32px; display:flex; align-items:center; gap:16px; }
        .sec-hd::before { content:''; display:block; width:32px; height:1px; background:var(--gold); }
        .dim-grid { display:flex; flex-direction:column; gap:1px; background:var(--border); }
        .dim-card { background:var(--black); padding:36px 40px; position:relative; overflow:hidden; transition:background 0.4s; }
        .dim-card:hover { background:var(--surface); }
        .dim-card::before { content:''; position:absolute; top:0; left:0; width:2px; height:0; background:var(--gold); transition:height 0.5s; }
        .dim-card:hover::before { height:100%; }
        .dim-top { display:flex; align-items:flex-start; justify-content:space-between; margin-bottom:6px; gap:20px; }
        .dim-name { font-size:9px; letter-spacing:0.3em; text-transform:uppercase; color:var(--gold-dim); padding-top:6px; }
        .dim-score { font-family:'Cormorant Garamond',serif; font-size:30px; font-weight:300; line-height:1; flex-shrink:0; }
        .score-frac { font-size:13px; color:var(--text-dim); font-weight:300; }
        .ds-poor { color:var(--red,#e05a5a); } .ds-fair { color:var(--amber,#e8a84c); } .ds-good { color:var(--gold); } .ds-excellent { color:#5aca8e; }
        .dim-bar { height:1px; background:var(--border); margin-bottom:20px; overflow:hidden; }
        .dim-fill { height:100%; transition:width 1.3s cubic-bezier(0.4,0,0.2,1); }
        .df-poor { background:var(--red,#e05a5a); } .df-fair { background:var(--amber,#e8a84c); } .df-good { background:var(--gold); } .df-excellent { background:#5aca8e; }
        .dim-headline { font-family:'Cormorant Garamond',serif; font-size:20px; font-weight:400; color:var(--text); margin-bottom:12px; line-height:1.3; }
        .dim-analysis { font-size:13px; color:var(--text-muted); line-height:1.85; margin-bottom:16px; }
        .dim-teaser { border-left:2px solid var(--gold); padding:12px 16px; background:rgba(201,168,76,0.05); font-family:'Cormorant Garamond',serif; font-style:italic; font-size:15px; color:var(--gold-light); line-height:1.7; }
        .pfix-list { border-top:1px solid var(--border); }
        .pfix { display:grid; grid-template-columns:64px 1fr; align-items:start; gap:24px; padding:28px 0; border-bottom:1px solid var(--border); transition:all 0.3s; }
        .pfix:hover { background:var(--surface); padding-left:20px; padding-right:20px; margin:0 -20px; }
        .pfix-num { font-family:'Cormorant Garamond',serif; font-size:40px; font-weight:300; color:var(--border-hover); line-height:1; }
        .pfix-text { font-size:14px; color:var(--text); line-height:1.75; padding-top:6px; }
        .closing-wrap { padding:48px 0 32px; max-width:560px; }
        .closing-stmt { font-size:14px; color:var(--text-muted); line-height:1.9; }
        .cta-box { border:1px solid var(--border); padding:64px 40px; text-align:center; margin-top:8px; }
        .cta-t { font-family:'Cormorant Garamond',serif; font-size:clamp(28px,4vw,44px); font-weight:300; margin-bottom:16px; line-height:1.1; }
        .cta-t em { font-style:italic; color:var(--gold-light); }
        .cta-s { font-size:13px; color:var(--text-muted); max-width:400px; margin:0 auto 32px; line-height:1.85; }
        .wa-btn { display:inline-flex; align-items:center; gap:10px; padding:16px 36px; background:#25D366; color:#fff; font-family:'Montserrat',sans-serif; font-size:10px; font-weight:500; letter-spacing:0.2em; text-transform:uppercase; text-decoration:none; transition:background 0.3s; }
        .wa-btn:hover { background:#20bc5a; }
        .cta-sub { font-size:11px; color:var(--text-dim); margin-top:16px; }
        .restart-row { text-align:center; margin:32px 0 24px; }
        .restart-btn { background:transparent; border:1px solid var(--border); color:var(--text-dim); padding:12px 28px; font-family:'Montserrat',sans-serif; font-size:10px; letter-spacing:0.18em; text-transform:uppercase; cursor:pointer; transition:all 0.3s; }
        .restart-btn:hover { border-color:var(--text-muted); color:var(--text); }
        .audit-prog-track { position:fixed; top:72px; left:0; right:0; height:1px; background:var(--border); z-index:99; pointer-events:none; }
        .audit-prog-fill { height:100%; background:var(--gold); transition:width 0.6s cubic-bezier(0.4,0,0.2,1); }
        .audit-back-nav { position:fixed; top:72px; left:60px; z-index:90; padding:16px 0; }
        .back-btn-audit { font-size:10px; letter-spacing:0.2em; text-transform:uppercase; color:var(--text-dim); text-decoration:none; display:inline-flex; align-items:center; gap:10px; transition:color 0.3s; }
        .back-btn-audit:hover { color:var(--gold); }
        .back-btn-audit::before { content:''; }
        @media (max-width:768px) {
          .audit-scr { padding:100px 24px 60px; }
          #audit-report { padding:100px 24px 60px; }
          .audit-social-grid { grid-template-columns:1fr; }
          .audit-feats { gap:20px; flex-direction:column; }
          .pfix { grid-template-columns:48px 1fr; gap:16px; }
          .cta-box { padding:40px 24px; }
          .audit-back-nav { left:20px; }
        }
      `}</style>

      <Nav />

      {/* Progress bar */}
      <div className="audit-prog-track">
        <div className="audit-prog-fill" style={{width:`${progPct.toFixed(1)}%`}}></div>
      </div>

      {/* Back nav (only on steps/contact) */}
      {(screen === 'intro' || screen === 'step' || screen === 'contact') && (
        <div className="audit-back-nav">
          <Link href="/ada" className="back-btn-audit">← Back to ADA</Link>
        </div>
      )}

      {/* ── INTRO ── */}
      <div className={`audit-scr${screen === 'intro' ? ' on' : ''}`}>
        <div className="audit-inner" style={{maxWidth:'720px'}}>
          <div className="section-label">Avalon Digital Agency - Free Audit</div>
          <h1 className="section-title">How visible is your<br />business <em>online?</em></h1>
          <p className="section-body">Answer 13 questions and receive a personalised digital presence report, scored across 6 dimensions and built around your specific situation in South Africa.</p>
          <div className="audit-feats">
            <div className="audit-feat">13 Questions</div>
            <div className="audit-feat">AI-Powered Analysis</div>
            <div className="audit-feat">Scored Report</div>
            <div className="audit-feat">Free &amp; Confidential</div>
          </div>
          <button className="audit-btn audit-btn-p" onClick={startAudit}>Begin My Audit</button>
        </div>
      </div>

      {/* ── STEPS ── */}
      {screen === 'step' && currentStep && (
        <div className="audit-scr on">
          <div className="audit-inner">
            <div className="audit-meta">{currentStep.meta}</div>
            <h2 className="audit-q">{currentStep.q}</h2>
            <p className="audit-sub">{currentStep.sub}</p>

            {/* Single text input */}
            {(currentStep.type === 'single' || currentStep.type === 'single-opt') && (
              <div className="audit-igroup">
                <div className="audit-ilabel">
                  {currentStep.field!.label}
                  {currentStep.type === 'single-opt' && <span style={{color:'var(--text-dim)', marginLeft:'6px', opacity:0.6}}> optional</span>}
                </div>
                <input
                  type="text"
                  className="audit-ifield"
                  placeholder={currentStep.field!.ph}
                  value={answers[currentStep.field!.k] || ''}
                  onChange={e => handleFieldChange(currentStep.field!.k, e.target.value)}
                />
              </div>
            )}

            {/* Social inputs */}
            {currentStep.type === 'social' && (
              <div className="audit-social-grid">
                {currentStep.fields!.map(f => (
                  <div key={f.k} className="audit-igroup">
                    <div className="audit-social-platform">{f.label}</div>
                    <input
                      type="text"
                      className="audit-ifield"
                      placeholder={f.ph}
                      value={answers[f.k] || ''}
                      onChange={e => handleFieldChange(f.k, e.target.value)}
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Radio options */}
            {(currentStep.type === 'radio' || currentStep.type === 'radio-url') && (
              <div className="audit-opts">
                {currentStep.opts!.map(opt => (
                  <div key={opt.v}>
                    <div
                      className={`audit-opt${answers[currentStep.key!] === opt.v ? ' sel' : ''}`}
                      onClick={() => selectOpt(currentStep.key!, opt.v)}
                    >
                      <div className="audit-oradio"></div>
                      <div>
                        <div className="audit-olabel">{opt.l}</div>
                        {opt.s && <div className="audit-osub">{opt.s}</div>}
                      </div>
                    </div>
                    {opt.url && answers[currentStep.key!] === opt.v && (
                      <div style={{marginTop:'8px', padding:'0 22px 12px', background:'var(--surface)'}}>
                        <input
                          type="text"
                          className="audit-ifield"
                          placeholder="https://yourwebsite.co.za"
                          value={urlInputs['webUrl'] || ''}
                          onChange={e => setUrlInputs(prev => ({ ...prev, webUrl: e.target.value }))}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            <div className="audit-navrow">
              {stepNum > 1 && (
                <button className="audit-btn audit-btn-s" onClick={backStep}>← Back</button>
              )}
              <button className="audit-btn audit-btn-p" onClick={nextStep}>
                {stepNum === TOTAL ? 'Next' : 'Continue'}
              </button>
            </div>
            {errors[stepNum] && (
              <div className="audit-errbox">{errors[stepNum]}</div>
            )}
          </div>
        </div>
      )}

      {/* ── CONTACT ── */}
      <div className={`audit-scr${screen === 'contact' ? ' on' : ''}`}>
        <div className="audit-inner">
          <div className="audit-meta">Almost Done</div>
          <h2 className="audit-q">Where should we send your report?</h2>
          <p className="audit-sub">Leave your details and we&apos;ll follow up with a tailored action plan for your business.</p>
          <div className="audit-igroup">
            <div className="audit-ilabel">Full Name *</div>
            <input type="text" className="audit-ifield" placeholder="Your name" value={contactName} onChange={e => setContactName(e.target.value)} />
          </div>
          <div className="audit-igroup">
            <div className="audit-ilabel">Email Address *</div>
            <input type="email" className="audit-ifield" placeholder="your@email.com" value={contactEmail} onChange={e => setContactEmail(e.target.value)} />
          </div>
          <div className="audit-igroup">
            <div className="audit-ilabel">WhatsApp / Phone <span style={{color:'var(--text-dim)', marginLeft:'6px', opacity:0.6}}>optional</span></div>
            <input type="tel" className="audit-ifield" placeholder="+27 71 234 5678" value={contactPhone} onChange={e => setContactPhone(e.target.value)} />
          </div>
          <div className="audit-igroup">
            <div className="audit-ilabel">City / Area <span style={{color:'var(--text-dim)', marginLeft:'6px', opacity:0.6}}>optional</span></div>
            <input type="text" className="audit-ifield" placeholder="e.g. Durban, KwaZulu-Natal" value={contactLoc} onChange={e => setContactLoc(e.target.value)} />
          </div>
          <div className="audit-navrow">
            <button className="audit-btn audit-btn-s" onClick={backFromContact}>← Back</button>
            <button className="audit-btn audit-btn-p" onClick={submitContact}>Generate My Report</button>
          </div>
          {contactErr && <div className="audit-errbox">{contactErr}</div>}
        </div>
      </div>

      {/* ── LOADING ── */}
      <div className={`audit-scr${screen === 'loading' ? ' on' : ''}`}>
        <div className="audit-inner" style={{textAlign:'center'}}>
          <div className="audit-spin"></div>
          <h2 className="audit-load-t">Analysing Your Digital Presence</h2>
          <p className="audit-load-s">{loadMsg}</p>
          <p style={{marginTop:'20px', fontFamily:"'Montserrat',sans-serif", fontWeight:300, fontSize:'12px', color:'#8A8680', textAlign:'center'}}>This takes 20–40 seconds. We&apos;re running a live analysis of your inputs through our AI diagnostic engine, good things take a moment.</p>
        </div>
      </div>

      {/* ── REPORT ── */}
      {screen === 'report' && report && (
        <div id="audit-report">
          <div className="audit-inner wide" style={{margin:'0 auto'}}>
            <div className="score-hero">
              <div className="score-biz">{bizName}</div>
              <div className="score-display">
                <span className={`score-num sc-${sc}`}>{scoreDisplay.toFixed(1)}</span>
                <span className="score-denom">/10</span>
              </div>
              <div className="score-lbl">Overall Digital Presence Score</div>
              <div className="score-bar-wrap">
                <div className={`score-bar-fill sc-bg-${sc}`} style={{width:`${(score/10*100).toFixed(1)}%`}}></div>
              </div>
            </div>

            <div className="bc-card">
              <div className="bc-icon">▲</div>
              <div>
                <div className="bc-label">You identified your biggest cost as</div>
                <div className="bc-text">{report.biggestCostly || answers.biggestCostly || ''}</div>
              </div>
            </div>

            <div className="opening-stmt">{report.openingStatement || ''}</div>

            <div className="report-sec">
              <div className="sec-hd">Dimension Breakdown</div>
              <div className="dim-grid">
                {(report.dimensions || []).map((d, i) => {
                  const cls = scoreClass(d.score);
                  const barW = dimBarWidths[i] ?? 0;
                  return (
                    <div key={d.name} className="dim-card">
                      <div className="dim-top">
                        <div className="dim-name">{d.name}</div>
                        <div className={`dim-score ds-${cls}`}>{d.score}<span className="score-frac">/10</span></div>
                      </div>
                      <div className="dim-bar">
                        <div className={`dim-fill df-${cls}`} style={{width:`${barW.toFixed(1)}%`}}></div>
                      </div>
                      <div className="dim-headline">{d.headline}</div>
                      <div className="dim-analysis">{d.analysis}</div>
                      <div className="dim-teaser">{d.teaser}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="divider"></div>

            <div className="report-sec">
              <div className="sec-hd">Priority Fixes</div>
              <div className="pfix-list">
                {(report.priorityFixes || []).map((f, i) => (
                  <div key={i} className="pfix">
                    <div className="pfix-num">0{i+1}</div>
                    <div className="pfix-text">{f}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="divider"></div>

            <div className="closing-wrap">
              <p className="closing-stmt">{report.closingStatement || ''}</p>
            </div>

            <div className="cta-box">
              <div className="section-label" style={{justifyContent:'center', marginBottom:'20px'}}>Get Your Action Plan</div>
              <h2 className="cta-t">Get your <em>action plan.</em></h2>
              <p className="cta-s">We&apos;ll map out exactly what to fix, in what order, and what each change is worth to your business.</p>
              <a className="wa-btn" href={`https://wa.me/27712205313?text=${waMsg}`} target="_blank" rel="noopener noreferrer">
                <svg width="16" height="16" fill="white" viewBox="0 0 24 24" style={{flexShrink:0}}>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chat on WhatsApp
              </a>
              <p className="cta-sub">+27 71 220 5313 - Avalon Digital Agency, Durban KZN</p>
            </div>

            <div className="restart-row">
              <button className="restart-btn" onClick={restart}>Start a New Audit</button>
            </div>
          </div>

          <footer style={{borderTop:'1px solid var(--border)', padding:'44px 60px', display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:'20px', marginTop:'60px'}}>
            <div style={{fontFamily:"'Cormorant Garamond',serif", fontSize:'15px', fontWeight:400, letterSpacing:'0.12em', textTransform:'uppercase', color:'var(--text-muted)'}}>Avalon Capital Group</div>
            <ul style={{display:'flex', gap:'28px', listStyle:'none'}}>
              <li><Link href="/" style={{fontSize:'10px', letterSpacing:'0.18em', textTransform:'uppercase', color:'var(--text-dim)', textDecoration:'none'}}>Home</Link></li>
              <li><Link href="/vantara" style={{fontSize:'10px', letterSpacing:'0.18em', textTransform:'uppercase', color:'var(--text-dim)', textDecoration:'none'}}>Vantara</Link></li>
              <li><Link href="/ada" style={{fontSize:'10px', letterSpacing:'0.18em', textTransform:'uppercase', color:'var(--text-dim)', textDecoration:'none'}}>ADA</Link></li>
              <li><Link href="/contact" style={{fontSize:'10px', letterSpacing:'0.18em', textTransform:'uppercase', color:'var(--text-dim)', textDecoration:'none'}}>Contact</Link></li>
            </ul>
            <div style={{fontSize:'11px', color:'var(--text-dim)'}}>© 2026 Avalon Capital Group</div>
            <div style={{width:'100%', paddingTop:'20px', borderTop:'1px solid var(--border)', marginTop:'4px'}}>
              <p style={{fontSize:'11px', color:'var(--text-dim)', marginBottom:'8px'}}>Avalon Capital Group (Pty) Ltd &middot; Reg. No. 2025/671885/07 &middot; Durban, KwaZulu-Natal, South Africa</p>
              <p style={{fontSize:'12px', color:'var(--text-dim)', lineHeight:1.7, marginBottom:'12px'}}>Avalon Capital Group does not provide financial, investment, or legal advice. All information shared is for general informational purposes only. Clients are encouraged to consult with licensed professionals before making any investment or business decisions.</p>
              <p style={{fontSize:'11px'}}>
                <Link href="/privacy-policy" style={{color:'var(--gold)', textDecoration:'none', marginRight:'24px'}}>Privacy Policy</Link>
                <Link href="/terms-of-service" style={{color:'var(--gold)', textDecoration:'none'}}>Terms of Service</Link>
              </p>
            </div>
          </footer>
        </div>
      )}
    </>
  );
}
