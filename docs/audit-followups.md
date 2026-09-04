# Audit Follow-ups

## nextjs-migration merge (2026-09-04)

- **`app/ada/acg-case-study/page.tsx`** — Branch's whole-company ACG/Vantara/ADA narrative content, discarded during merge on 2026-09-04, may be worth mining for the future ACG home rebuild — not for `/ada/acg-case-study`, which should stay ADA-scoped. Sections that existed in the discarded version: a 9-section timeline (Brief, Phase One build, Discovery, the audit tool tension section, What Was Built deliverables list, the Stack breakdown, What Comes Next, Results, and a closing founder quote block), plus an extended Results section with more GSC screenshots and copy than the ADA-scoped version kept on main.

- **`app/ada/seo-agency-durban/page.tsx`** — Exists on the nextjs-migration branch (319 lines, old dark theme, pre-rebuild) but was excluded from the 2026-09-04 merge. This page needs a full white-design-system rebuild before it goes live at `/ada/seo-agency-durban`. It was referenced by the branch's now-discarded FAQ/related-links content on `web-design-pietermaritzburg`, so check whether that link target needs restoring once this page is rebuilt.

- **"ADA — Asset Development Automation" em dash** — The hero label and Service schema org name use "ADA — Asset Development Automation" with an em dash. This likely appears sitewide across every ADA page as a shared component/constant, not just this file. Needs to be found and fixed in one pass (find the shared source, e.g. a layout component or schema constant, rather than fixing per-page) as part of the full ADA-world audit. Replace with "ADA: Asset Development Automation" or a rephrase, per the no-em-dash rule.
