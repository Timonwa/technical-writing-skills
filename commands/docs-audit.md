---
name: docs-audit
description: >-
  Manually invoked. Documentation audit of a repo's docs site, doc pages and READMEs — stale claims versus code, broken links and anchors, navigation integrity (orphaned pages, ghost entries), duplicated content, missing pages for the public surface, formatting and frontmatter consistency, README accuracy, and doc freshness against recent code changes. Verifies each finding and writes a prioritized report.
argument-hint: "[phase] [path]"
model: opus
effort: high
---

# Docs audit

A **manually-invoked, red-team documentation audit** of an app or a specific diff/PR. It is **self-contained** — every check is spelled out inline, so it runs a full review with zero other skills installed — and each finding is verified against the real code before it lands in a phase-aware, scored report at `_reports/docs-audit.md`.

> **Self-contained** — this checklist is comprehensive on its own and needs no other skill installed. Where the house standard(s) **`docs-standards`** and **`writing-standards`** ARE present, also apply their house-specific rules as an enhancement.

## Arguments

- `[phase]` — `development` | `production`; sets the action-item tiers. Omitted → `production` (assume the app is live until told otherwise — the safer default).
- `[path]` — a file, directory, or PR/diff to scope the audit to; omitted → the whole repo.

## Audit protocol

**Mindset — reviewer/attacker first.** Don't assume code is fine because it looks careful; find the sequence that breaks it. Report only findings you can justify as real, each verified before it lands.

### Method

1. **Resolve phase** — use a phase arg (`development` | `production`) if given; else default `production` — assume the app is live with real users until told otherwise, so a CRITICAL finding gets Fix-Now urgency instead of a pre-launch discount. Phase sets the action-item tiers.
2. **Load the previous report** — if `_reports/docs-audit.md` exists, read it: carry unresolved findings forward (same ID, status `UNRESOLVED`), move fixed ones to "Resolved since last audit", and continue ID numbering. First run → skip Resolved and mark all `NEW`.
3. **Run the checklist** (below), collecting findings with `file:line` evidence.
4. **Verify** each candidate — construct the concrete failure/abuse case; drop what you can't show is real; mark uncertain ones "needs confirmation" rather than inflating.
5. **Write the report** to `_reports/docs-audit.md` (overwrite) and post the **chat summary** (see Output). Recommend fixes in the report; never modify code. Never commit or push without explicit approval.

### Severity

- **CRITICAL** — actively exploitable or broken now: data loss/leak, security breach, or total failure of the audited concern. Fix immediately.
- **HIGH** — a serious defect that will bite in production or blocks launch. Fix before shipping.
- **MEDIUM** — a real issue with a workaround or limited blast radius. Schedule it.
- **LOW** — minor, polish, or defense-in-depth.

Findings are ordered worst-first in the report.

### Report format

Write to `_reports/docs-audit.md`:

```
# Docs audit — <app/scope>

**Date:** <YYYY-MM-DD> · **Phase:** <phase> · **Mode:** Report-only · **Branch:** `<branch>` · **Scope:** <what was audited> · **Overall:** <X>/10

## Score change (previous → current)
| Metric | Previous | Current | Δ | Trend |
| --- | --- | --- | --- | --- |
| Overall | <prev/10 or N/A> | <cur/10> | <+N / -N / 0> | <▲ / ▼ / ■ / N/A> |

## Findings
| ID | Severity | Category | Status | Issue | Location |
| --- | --- | --- | --- | --- | --- |
| 1 | HIGH | <category> | NEW | <one-line issue> | `file/path:line` |

### F1 — <title>
- **What:** <the defect, and the concrete evidence that proves it real>
- **Why it matters:** <impact / who it affects> <· optional standard or criterion ref, e.g. WCAG 2.1.2 / OWASP A01>
- **Fix:** <the specific remediation>

## Scorecard
| Category | Score | Notes |
| --- | --- | --- |
| Stale claims | <X>/10 | <one-line justification> |
| Links & URLs | <X>/10 | <one-line justification> |
| Navigation | <X>/10 | <one-line justification> |
| Duplication | <X>/10 | <one-line justification> |
| Coverage | <X>/10 | <one-line justification> |
| Consistency | <X>/10 | <one-line justification> |
| README accuracy | <X>/10 | <one-line justification> |
| Freshness | <X>/10 | <one-line justification> |

## Action items
Tiers by phase — `development` → **Fix Now / Before Launch / Post-Launch**; `production` → **Fix Now / Next Release / Backlog**. Each task references a finding ID.

### <Tier>
| # | Priority | Task (finding ID) | Effort |
| --- | --- | --- | --- |

## Resolved since last audit
| ID | Issue | How it was resolved |
| --- | --- | --- |
```

### Output

Every run produces two things:

- **Full report** → `_reports/docs-audit.md`, in the format above, overwriting the prior run.
- **Chat summary** → a short recap posted in chat: the overall `<X>/10` (with Δ vs last run), a severity count (Critical / High / Medium / Low, i.e. C / H / M / L), the top findings worst-first (id · severity · one-line · `file:line`), and the report path. Note any "needs confirmation" items.

**Report-only** — this audit recommends fixes in the report; it never modifies code.

## Checklist

The criteria below are the audit's full working rules — self-contained. For house specifics, if installed → `docs-standards` and `writing-standards`. Audit every `.md`/`.mdx` surface: the docs-site content directory, READMEs at every level, and inline doc folders (`_docs/`, `docs/`).

### Stale claims

- **Docs vs code** — every documented command, CLI flag, API, config option, and env var still exists in the code with the documented name and behavior; flag docs describing removed or renamed surface.
- **Examples still valid** — code examples import from current paths and use current APIs; flag removed/renamed symbols and deprecated names in examples (old model names, dead package versions, retired flags).
- **Setup steps work** — install and quick-start commands match the current package manager, scripts, and entry points; a reader following them verbatim must succeed.
- **Version claims consistent** — runtime/tool version requirements (Node, package manager) say the same thing on every page and match what the repo enforces (`engines`, CI config); flag any page stating an older requirement.

### Links & URLs

- **Internal links and anchors resolve** — every relative link points at an existing page and every `#anchor` at an existing heading; flag links through renamed/moved files.
- **One canonical URL per destination** — repo, docs site, package registry, and community links each have one canonical form used everywhere; flag variants (wrong org casing, old domains, redirecting forms).
- **External links alive** — spot-check external links in high-traffic pages (README, getting-started) for 404s and dead redirects.

### Navigation

- **No ghost entries** — every page listed in the navigation config (`meta.json` / sidebar / nav file) exists as a real `.md`/`.mdx` file.
- **No orphaned pages** — every page file in the content directory appears in the navigation (index pages and intentionally hidden pages excepted); an unreachable page is unmaintained by definition.

### Duplication

- **One home per fact** — the same substantive content maintained in 2+ pages should live in one page that the others link; duplicated copies are drift waiting to happen. Flag near-identical sections across pages that aren't declared templated siblings.
- **Docs don't restate an owned standard** — a page that restates conventions owned elsewhere (a standards file, `AGENTS.md`, another doc) should link the owner instead.

### Coverage

- **Public surface is documented** — every exported API, CLI command, endpoint, and user-facing config option has a doc page or section; flag undocumented public surface.
- **Shipped features have pages** — features visible in recent history/releases that no doc mentions.

### Consistency

- **Frontmatter complete** — every docs-site page has the fields the site requires (at minimum `title` and `description`); flag missing ones.
- **One product name** — the product/brand written one canonical way in prose (no bare-abbreviation drift, no casing variants); the tagline identical wherever it appears.
- **Uniform formatting** — heading hierarchy starts at the right level and doesn't skip; callout/tab/card components used consistently for the same purpose across pages.

### README accuracy

- **Archetype compliance** — each README matches the repo's declared archetype for its location (root vs package vs app vs template): expected header, badges (or their intentional absence), and section set. Consistent-but-inadequate is still a finding: if the archetype itself omits what a reader needs (what it is, install/setup, usage), flag the archetype, not just drift from it.
- **Badges and metadata current** — badges point at the right package/pipeline; described commands exist in `package.json`.
- **Templated siblings in sync** — sibling READMEs generated from one template share their boilerplate sections without drift (only declared per-template substitutions differ).

### Freshness

- **Docs move with the code** — pages whose subject code changed significantly since the page was last touched (compare `git log` on both); flag high-churn areas with untouched docs.
- **No expired stubs** — "coming soon" / "stub — integration pending" / TODO notes that outlived the shipped feature.

## Boundaries

- **Report-only** — this audit recommends fixes in the report; it never modifies code.
- **Verify each finding is real** — construct the concrete case; drop what you can't show; mark uncertain ones "needs confirmation" rather than inflating.
- **Suggest fixes using the repo's existing helpers** — but only where those helpers themselves conform to the standard; when the repo's own convention is the violation, the suggestion is the standard, not a tidier copy of the drift.
- **Never commit or push without explicit approval.**
