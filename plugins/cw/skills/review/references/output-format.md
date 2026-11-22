# Review output format

Write to the topic's `reports/review.md` (`topics/<yyyy-mm>-<slug>/reports/review.md`), creating the folder if it doesn't exist, and summarise the findings in chat. In a chat app, hand it back as `<topic folder>--review.md`. Tell the user the path when you're done.

Every field in the header is always present; one that doesn't apply says so rather than being removed.

```markdown
# Review — <working title>

**Checked:** <topic folder> — <the files reviewed: blog.md, newsletter.md, social.md, copies.md settings> · **Date:** <YYYY-MM-DD> · **Against:** <writing-guide.md path, profile.md path, or "none found">

**Publication:** <name> · **Kind:** <article / tutorial / essay / feature / roundup> · **Reader:** <who, from the brief or profile> · **Publishes:** <date per format, from the brief> · **Disclosures:** <what the piece must disclose, or "none"> · **Verdict:** <Ready / Ready with fixes / Needs rework> · **Overall:** <X>/10

## Score change (previous → current)
| Metric | Previous | Current | Δ | Trend |
| --- | --- | --- | --- | --- |
| Overall | <prev/10 or N/A> | <cur/10> | <+N / -N / 0> | <▲ / ▼ / ■ / N/A> |

## Findings
| ID | Level | Severity | Status | Issue | Location |
| --- | --- | --- | --- | --- | --- |
| 1 | Accuracy | BLOCKER | OPEN | <one-line> | <file — section or paragraph> |

### R1 — <title>
- **Level:** <which of the five>
- **Problem:** <what it costs the reader, or who it harms>
- **Now:** <the current text>
- **Proposed:** <the replacement>

## Questions for the author
Facts only the author, an expert or a source can settle. Nothing below has been guessed at in the piece.

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
