# Content audit output format

Write to `_reports/content-audit.md`, creating the directory if it doesn't exist. That's where every audit and report in this set goes. Tell the user the path when you're done. The header records the answers to the skill's Ask first questions, so a later run or a `--fix` knows what this one covered.

```markdown
# Content audit — <scope>

**Date:** <YYYY-MM-DD> · **Scope:** <what was inventoried> · **Product version:** <version the set documents> · **Guide:** <path, or "none found — tw:docs-standards"> · **Pages:** <N> · **Audiences:** <list> · **Task list:** <source — confirmed / assumed> · **Usage data:** <source and period, or "none"> · **Mode:** Report-only · **Overall:** <X>/10

## Score change (previous → current)
| Metric | Previous | Current | Δ | Trend |
| --- | --- | --- | --- | --- |
| Overall | <prev/10 or N/A> | <cur/10> | <+N / -N / 0> | <▲ / ▼ / ■ / N/A> |

## Summary
| Verdict | Count | Share |
| --- | --- | --- |
| Keep / Update / Merge / Split / Rewrite / Retire | <N> | <%> |

**Coverage:** <N> of <M> reader tasks have an adequate page. **Unowned:** <N> pages. **Never verified:** <N> pages.

## Inventory
| Title | Location | Type | Audience | Task | Owner | Last verified | Usage | Words | Verdict |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

## Gaps — the writing queue
| ID | Reader task | Audience | Why it matters | Doc type needed | Priority | Status |
| --- | --- | --- | --- | --- | --- | --- |

## Duplicate clusters
| Topic | Pages | Canonical | Action |
| --- | --- | --- | --- |

## Structure findings
| ID | Finding | Evidence | Recommendation | Status |
| --- | --- | --- | --- | --- |

## Retire list
| Page | Why | URL disposition | Inbound links to update |
| --- | --- | --- | --- |

## Proposed structure
<the table of contents the set should have, as a nested list>

## Open questions
| # | Question | Who can answer it | What it blocks |
| --- | --- | --- | --- |

## Scorecard
| Category | Score | Notes |
| --- | --- | --- |
| Coverage | <X>/10 | reader tasks with an adequate page |
| Ownership | <X>/10 | pages with a named owner |
| Freshness | <X>/10 | pages verified within their cadence |
| Duplication | <X>/10 | topics covered in exactly one place |
| Structure | <X>/10 | grouping, depth, naming |
| Findability | <X>/10 | entry points, orphans, ghosts |
```

Leave a cell blank rather than guessing; a blank owner or last-verified is a finding in itself.
