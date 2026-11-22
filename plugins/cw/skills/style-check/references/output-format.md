# Style check output format

Write to the publication's `reports/style-check.md` (`publications/<publication>/reports/style-check.md`), creating the folder if it doesn't exist. In a chat app, hand it back as `style-check.md`. Tell the user the path when you're done.

Every field in the header is always present; one that doesn't apply says so rather than being removed.

```markdown
# Style check — <publication>

**Checked:** <formats swept — blog posts, newsletter issues, social posts> in <folder or export>, <published only / drafts included> · **Date:** <YYYY-MM-DD> · **Against:** <writing-guide.md path, or "derived from the writing">

**Pieces:** <N> · **Dates covered:** <first – last> · **Mode:** Report-only · **Consistency:** <X>/10

## Score change (previous → current)
| Metric | Previous | Current | Δ | Trend |
| --- | --- | --- | --- | --- |
| Consistency | <prev/10 or N/A> | <cur/10> | <+N / -N / 0> | <▲ / ▼ / ■ / N/A> |

## Terminology drift
| ID | Concept | Variants (count) | Recommended | Confidence | Occurrences | Status |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | <concept> | `<a>` (74), `<b>` (9), `<c>` (2) | `<a>` | High | 11 | OPEN |

### T1 — <concept>
- **Variants:** `<a>` ×74 · `<b>` ×9 · `<c>` ×2
- **What the subject or its owner calls it:** <the canonical form, or "unverified">
- **Recommendation:** <winner, and why>
- **Locations to change:** `topics/<topic folder>/<file>:<line>` …

## Open decisions
Splits too close to call, and voices that changed over time — these need the owner.

| # | Question | Variant A (count, dates) | Variant B (count, dates) | Recommendation |
| --- | --- | --- | --- | --- |

## Mechanics drift
| # | Category | Dominant convention | Exceptions | Locations |
| --- | --- | --- | --- | --- |

## Recurring parts
| # | Part | Dominant form | Variants | Locations |
| --- | --- | --- | --- | --- |

## Voice
Findings where the guide settles it; proposals where it's silent.

| # | Kind | Issue | Count | Example | Locations |
| --- | --- | --- | --- | --- | --- |
| 1 | Finding / Proposal | <issue> | <n> | <quote> | <where> |

## Proposed terminology entries
Ready to paste into the writing guide.

| Term | Definition | Use | Don't use | Notes |
| --- | --- | --- | --- | --- |

## Scorecard
| Category | Score | Notes |
| --- | --- | --- |
| Terminology | <X>/10 | |
| Titles & headings | <X>/10 | |
| Recurring parts | <X>/10 | |
| Voice & person | <X>/10 | |
| Lists & punctuation | <X>/10 | |
| Numbers, dates & units | <X>/10 | |
| Link text | <X>/10 | |
| Code formatting | <X>/10 or N/A | |
```
