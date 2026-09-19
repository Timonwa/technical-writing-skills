---
name: docs-audit
description: >-
  Manually invoked. Audits a body of documentation for defects a reader would hit — claims that no longer match the product, broken links and anchors, navigation integrity, duplicated and contradictory content, missing coverage, stale images, and content nobody has verified in months. Works on a docs repo, an exported help centre, or any folder of documents. Verifies each finding and writes a prioritized report. Never edits a page.
argument-hint: '[path] [--source <path-or-url>]'
model: opus
effort: high
disable-model-invocation: true
disallowed-tools: Edit, NotebookEdit
---

# Docs audit

A **manually-invoked audit of documentation that already exists**, looking for the defects that cost a reader their time: something that isn't true any more, something they can't reach, something that contradicts the page next to it, and something nobody has checked since it was written.

It is **self-contained** — every check is spelled out below, so it runs with no other skill loaded. The standards behind the findings live in the skills that ship alongside it: `writing-standards` for the voice rules, `developer-docs`, `user-guides`, `internal-docs`, `readmes` and `api-reference` for each document type's shape, `style-guide` for the project's own terminology, and `code-samples` and `images-and-diagrams` for the parts of a page that aren't prose.

**This audit does not assume a codebase.** Where source is available it is the strongest evidence and gets used; where it isn't, the audit works from the running product, a spec, or what it can establish internally — and says which.

## Arguments

- `[path]` — the content to audit: a directory, a single file, a diff, or an exported set. Omitted → ask what to audit rather than guessing.
- `[--source <path-or-url>]` — where the truth lives, when it isn't the content itself: a code repository, a running product URL, an API spec, a staging login. Omitted → detect a repo if there is one; otherwise run in **unverified mode** and say so.

## Method

**Mindset — read as the reader, not as the author.** The author knows what the page meant. Follow the instructions literally, in order, with no prior knowledge, and report where that fails. A finding is real when you can name the reader it breaks and what happens to them.

1. **Establish the scope and the source of truth.** What is being audited, what you can check it against, and what you can't. State the unverifiable portion up front — an audit that hides its own blind spots is worse than a smaller honest one.
2. **Inventory the content** before checking anything: every page, its type, and where it sits. You cannot find an orphan or a duplicate without the full list.
3. **Load the previous report** if one exists. Carry unresolved findings forward with their original ID and status `UNRESOLVED`, move fixed ones to "Resolved since last audit", and continue the ID numbering. First run → mark everything `NEW`.
4. **Run the checklist** below, collecting findings with a precise location — `file:line`, or the page title and section where there are no line numbers.
5. **Verify each candidate.** Name the concrete reader failure it causes. Drop anything you can't show is real. Where you suspect a defect but can't confirm it — usually because you can't reach the source — mark it **needs confirmation** rather than inflating it into a finding.
6. **Write the report** and post the chat summary. Recommend fixes; never edit a page. Never commit or push without explicit approval.

### Severity

Rank by what it costs the reader, not by how wrong it is:

- **CRITICAL** — the documentation leads a reader into harm: wrong instructions for a destructive or irreversible action, wrong security, privacy, money or legal guidance, a missing warning on something that can't be undone, or an example that damages data.
- **HIGH** — the reader cannot complete the task: a broken quickstart, a missing required step, a wrong signature, value or default, a dead link on the main path, a documented feature that no longer exists.
- **MEDIUM** — the reader is slowed, confused, or sent the wrong way, but can recover: contradictory pages, a duplicate that has drifted, an unfindable page, a stale screenshot, a gap in coverage.
- **LOW** — polish and consistency: terminology drift, formatting, weak link text, a missing next-steps footer.

Findings are ordered worst-first.

### Report format

Write to `_reports/docs-audit.md` where the content lives in a repository. Where it doesn't, ask where the report should go, and fall back to delivering it in chat rather than skipping it.

```markdown
# Docs audit — <scope>

**Date:** <YYYY-MM-DD> · **Scope:** <what was audited> · **Verified against:** <source, or "unverified — no source available"> · **Mode:** Report-only · **Overall:** <X>/10

## Score change (previous → current)
| Metric | Previous | Current | Δ | Trend |
| --- | --- | --- | --- | --- |
| Overall | <prev/10 or N/A> | <cur/10> | <+N / -N / 0> | <▲ / ▼ / ■ / N/A> |

## Findings
| ID | Severity | Category | Status | Issue | Location |
| --- | --- | --- | --- | --- | --- |
| 1 | HIGH | Stale claims | NEW | <one-line issue> | `<path>:<line>` or <page › section> |

### F1 — <title>
- **What:** <the defect, and the evidence that proves it real>
- **Who it breaks:** <the reader, and what happens to them>
- **Fix:** <the specific remediation>

## Scorecard
| Category | Score | Notes |
| --- | --- | --- |
| Accuracy | <X>/10 | <one-line justification> |
| Links & anchors | <X>/10 | <one-line justification> |
| Navigation & findability | <X>/10 | <one-line justification> |
| Duplication & contradiction | <X>/10 | <one-line justification> |
| Coverage | <X>/10 | <one-line justification> |
| Structure & type discipline | <X>/10 | <one-line justification> |
| Examples & images | <X>/10 | <one-line justification> |
| Freshness & ownership | <X>/10 | <one-line justification> |

## Action items
| # | Priority | Task (finding ID) | Effort |
| --- | --- | --- | --- |

## Needs confirmation
| ID | Suspected issue | What would settle it | Who to ask |
| --- | --- | --- | --- |

## Resolved since last audit
| ID | Issue | How it was resolved |
| --- | --- | --- |
```

### Output

- **Full report** at the path above, overwriting the previous run.
- **Chat summary** — the overall `<X>/10` with the change since last run, a severity count, the top findings worst-first (id · severity · one-line · location), anything in "needs confirmation", and the report path.

**Report-only** — this audit recommends fixes; it never edits a page.

## Checklist

### Accuracy — is it still true?

- **Claims against the product** — every documented step, label, menu path, setting, command, option, limit, price and error message still exists and still behaves as described. Where the source is code, check the real exports, signatures, defaults and flags; where it's a running product, check the actual screens.
- **Examples still work** — commands run, code compiles, requests return what the page says they return, imports resolve to current paths.
- **Setup and quickstart succeed verbatim.** Follow them literally. This is the highest-value check in the audit, because it is the page every new reader hits.
- **Version claims agree** — requirements, supported versions and compatibility statements say the same thing on every page, and match what the product actually enforces.
- **Numbers are real** — limits, quotas, timings, prices and thresholds match the source rather than a figure that was true once.
- **Nothing documents what doesn't exist** — removed features, renamed surfaces, roadmap items described as shipped.
- **Nothing is undocumented that should be** — surfaces the product exposes with no page at all.

### Links, anchors and navigation

- **Every internal link resolves**, including deep links to headings; every anchor still matches a heading that exists.
- **External links resolve** and still point at what the sentence claims.
- **No orphans** — every page is reachable from at least one other page, not only from the navigation.
- **No ghosts** — every navigation entry points at a page that exists.
- **Redirects exist** for pages that moved, and nothing redirects to a generic landing page in place of a real destination.
- **Link text is descriptive** — never "click here", never a bare URL.

### Duplication and contradiction

- **The same topic covered in more than one place** — identify the canonical page and flag the rest; duplicates always drift, and the drift is what hurts.
- **Pages that contradict each other** on a fact, a step, a limit, or a name. Flag both, and say which is right if you can establish it.
- **One term per concept** — the same thing called several things across the set, or one word used for two different things.

### Coverage and structure

- **Gaps on the main paths** — a task a reader plainly needs with no page, or a page that stops before the task is finished.
- **Missing failure coverage** — the errors readers actually hit, with no troubleshooting entry.
- **Type discipline** — pages that drift between types: a tutorial offering choices, a how-to lecturing on theory, a reference giving advice, an explanation with numbered steps.
- **Pages too thin to stand alone**, and pages doing several unrelated jobs.
- **Dead ends** — pages with no next step for the reader.

### Examples and images

- **Code blocks are complete and runnable** — no undefined variables, no placeholder standing in for the part that matters, every fence labelled.
- **No secrets in examples** — keys, tokens, credentials, real internal hostnames, real customer data.
- **Samples don't model unsafe practice** readers will copy.
- **Images still show what the text says they show** — a screenshot of a UI that has since changed is a defect, not a cosmetic issue.
- **Every image has appropriate alt text**, and no instruction exists only inside an image.

### Freshness and ownership

- **Last-verified dates**, where the set tracks them, and which pages are past their review cadence.
- **Pages with no owner**, where the set tracks ownership.
- **Content changed long after the thing it documents last changed** — or, more often, content untouched while the thing it documents changed repeatedly.
- **Frontmatter and metadata** — present, valid, and consistent: titles, descriptions, and whatever the platform requires.

## Boundaries

- **Auditing the shape of the set** rather than defects in its pages — what's missing, what should merge, what should be retired → `/tw:content-audit`.
- **Terminology and style drift** as its own sweep → `/tw:style-check`.
- **Deep editorial review of one document** → `/tw:doc-review`.
- **Auditing code** — its structure, security, performance, dependencies — is not this command's job, even when the docs describe it. Report what the docs get wrong, not what the code should do differently.
