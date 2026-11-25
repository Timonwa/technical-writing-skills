# Docs audit output format

Write to `_reports/docs-audit.md`, with one Overall row in the score change, creating the directory if it doesn't exist. That's where every audit and report in this set goes, so a reader always knows where to look. Tell the user the path when you're done. The header records the answers to the skill's Ask first questions, so a later run or a `--fix` knows what this one covered.

```markdown
# Docs audit — <scope>

**Date:** <YYYY-MM-DD> · **Scope:** <what was audited> · **Product version:** <version or branch the docs describe> · **Readers:** <who reads the set> · **Verified against:** <source, or "unverified — no source available"> · **Guide:** <path, or "none found — docs-standards"> · **Mode:** Report-only · **Overall:** <X>/10

## Score change (previous → current)
| Metric | Previous | Current | Δ | Trend |
| --- | --- | --- | --- | --- |
| Overall | <prev/10 or N/A> | <cur/10> | <+N / -N / 0> | <▲ / ▼ / ■ / N/A> |

## Findings
| ID | Severity | Category | Status | Issue | Location |
| --- | --- | --- | --- | --- | --- |
| 1 | HIGH | Stale claims | NEW | <one-line issue> | `<path>:<line>` or <page › section> |

**Status:** `NEW` — found this run for the first time · `UNRESOLVED` — still present from an earlier run · `FIXED` — fixed after the audit; the note names the commit · `WON'T FIX` — the owner ruled it not a defect, intended, or accepted as it is; the note gives their reason

### F1 — <title>
- **What:** <the defect, and the evidence that proves it real>
- **Who it breaks:** <the reader, and what happens to them>
- **Fix:** <the specific remediation>
- **Note:** <only once `FIXED` (the commit and what changed) or `WON'T FIX` (the owner's reason)>

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
```
