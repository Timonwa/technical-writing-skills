# AI check output format

Write one report per page or topic, creating the folder if it doesn't exist, and summarise the findings in chat. Tell the user the path when you're done.

- **Documentation:** `_reports/ai-check-<page-slug>.md`, where the slug is the page's path under the docs folder with slashes as hyphens and no extension (`docs/guides/webhooks.md` → `_reports/ai-check-guides-webhooks.md`).
- **Content:** the topic's `reports/ai-check.md` (`topics/<yyyy-mm>-<slug>/reports/ai-check.md`), one report covering every format file checked. In a chat app, hand it back as `<topic folder>--ai-check.md`.
- **Pasted text** with no file or topic behind it: report in chat only, in the same shape.

Every field below is always present; a value that doesn't apply is left blank, never removed. Locations name the file and the section or paragraph (`newsletter.md`, para 3; `social.md`, LinkedIn post), so a report covering several format files is unambiguous.

```markdown
# AI check — <page or topic>

**Checked:** <files, or the format files from brief.md> · **Date:** <YYYY-MM-DD> · **Guide:** <path, or "none — defaults"> · **Words:** <N> · **Tell density:** <N per 1,000 words> · **Overall:** <X>/10

## Score change (previous → current)

| Metric  | Previous         | Current  | Δ             | Trend             |
| ------- | ---------------- | -------- | ------------- | ----------------- |
| Overall | <prev/10 or N/A> | <cur/10> | <+N / -N / 0> | <▲ / ▼ / ■ / N/A> |

## Summary

| Category           | Count | Severity              |
| ------------------ | ----- | --------------------- |
| Punctuation rhythm | <N>   | <High / Medium / Low> |
| Vocabulary         | <N>   |                       |
| Phrases            | <N>   |                       |
| Structure          | <N>   |                       |
| Substance          | <N>   |                       |

## Findings

| ID  | Category | Tell | Status | Location |
| --- | -------- | ---- | ------ | -------- |

### A1 — <tell>

- **Now:** <the current text>
- **Why it reads as generated:** <the specific pattern>
- **Proposed:** <the rewrite>

## Deliberate — left alone

Patterns that match a tell but are the author's or the house's choice.

| Pattern | Where | Why it was left |
| ------- | ----- | --------------- |

## Scorecard

Higher means it reads more like a person wrote it.

| Category           | Score  | Notes |
| ------------------ | ------ | ----- |
| Punctuation rhythm | <X>/10 |       |
| Vocabulary         | <X>/10 |       |
| Phrases            | <X>/10 |       |
| Structure          | <X>/10 |       |
| Substance          | <X>/10 |       |
```

## In chat

- **Findings** with a rewrite for each, grouped by category, worst-first.
- **Tell density** per 1,000 words, so a long piece isn't flagged merely for being long.
- **The rewrites you were asked for**, and a note of what was deliberately left.
