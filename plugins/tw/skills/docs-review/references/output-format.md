# Doc review output format

Write to `_reports/docs-review-<page-slug>.md`, one report per page, creating the directory if it doesn't exist — the slug is the page's path under the docs folder with slashes as hyphens and no extension (`docs/guides/rotate-keys.md` → `_reports/docs-review-guides-rotate-keys.md`). Summarise the findings in chat, and tell the user the path when you're done. The header records the answers to the skill's Ask first questions, so a later run or a `--fix` knows what this one covered.

```markdown
# Review — <document>

**Date:** <YYYY-MM-DD> · **Document:** <path> · **Type:** <document type> · **Audience:** <who, and what they should be able to do afterward> · **Product version:** <version> · **Checked against:** <source, or "unverified — no source available"> · **Standard:** <guide, or "none found — tw:docs-standards"> · **Verdict:** <Ready / Ready with fixes / Needs rework> · **Overall:** <X>/10

## Score change (previous → current)
| Metric | Previous | Current | Δ | Trend |
| --- | --- | --- | --- | --- |
| Overall | <prev/10 or N/A> | <cur/10> | <+N / -N / 0> | <▲ / ▼ / ■ / N/A> |

## Findings
| ID | Level | Severity | Status | Issue | Location |
| --- | --- | --- | --- | --- | --- |
| 1 | Substantive | MAJOR | OPEN | <one-line> | <section or line> |

### R1 — <title>
- **Level:** <which of the five>
- **Problem:** <what it costs the reader>
- **Now:** <the current text>
- **Proposed:** <the replacement>

## Questions for the author
Facts that can't be settled without you. Nothing below has been guessed at in the draft.

| # | Question | Why it matters | Where |
| --- | --- | --- | --- |

## Verified
What was checked against a real source, and what couldn't be.

| Claim | Checked against | Result |
| --- | --- | --- |

## Scorecard
| Level | Score | Notes |
| --- | --- | --- |
| Substantive | <X>/10 | right document, right order, nothing missing |
| Accuracy | <X>/10 | claims verified against a real source |
| Line | <X>/10 | sentence-level clarity |
| Copy | <X>/10 | consistency with the guide |
| Proof | <X>/10 | links, images, rendering |
```
