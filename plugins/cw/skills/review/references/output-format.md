# Review output format

Write to the piece's `reports/review.md` (`pieces/<yyyy-mm>-<slug>/reports/review.md`), creating the folder if it doesn't exist, and summarise the findings in chat. In a chat app, hand it back as `<piece folder name>--review.md`. Tell the user the path when you're done.

```markdown
# Review — <piece>

**Date:** <YYYY-MM-DD> · **Kind:** <article / tutorial / essay / feature / newsletter issue> · **Publication:** <name> · **Reader:** <who, from the profile> · **Guide:** <path, or "none found"> · **Verdict:** <Ready / Ready with fixes / Needs rework> · **Overall:** <X>/10

## Score change (previous → current)
| Metric | Previous | Current | Δ | Trend |
| --- | --- | --- | --- | --- |
| Overall | <prev/10 or N/A> | <cur/10> | <+N / -N / 0> | <▲ / ▼ / ■ / N/A> |

## Findings
| ID | Level | Severity | Status | Issue | Location |
| --- | --- | --- | --- | --- | --- |
| 1 | Accuracy | BLOCKER | OPEN | <one-line> | <section or paragraph> |

### R1 — <title>
- **Level:** <which of the five>
- **Problem:** <what it costs the reader, or who it harms>
- **Now:** <the current text>
- **Proposed:** <the replacement>

## Questions for the author
Facts only the author, an expert or a source can settle. Nothing below has been guessed at in the draft.

| # | Question | Why it matters | Where |
| --- | --- | --- | --- |

## Verified
What was checked against a real source, and what couldn't be.

| Claim | Checked against | Result |
| --- | --- | --- |

## Scorecard
| Level | Score | Notes |
| --- | --- | --- |
| Substantive | <X>/10 | the right piece for the publication's reader, in the right order |
| Accuracy | <X>/10 | facts, quotes, code, credit, fairness, disclosure |
| Line | <X>/10 | clear, in the guide's voice |
| Copy | <X>/10 | consistent with the guide |
| Proof | <X>/10 | links, images, preview and test send |
```
