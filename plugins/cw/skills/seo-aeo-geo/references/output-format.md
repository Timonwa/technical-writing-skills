# SEO check output format

Write to the topic's `reports/seo.md` (`topics/<yyyy-mm>-<slug>/reports/seo.md`), creating the folder if it doesn't exist, and summarise the findings in chat. In a chat app, hand it back as `<topic folder>--seo.md`. Tell the user the path when you're done. Each run overwrites the file and reports the current state only.

Every field in the header is always present; one that doesn't apply says so rather than being removed.

```markdown
# SEO check — <working title>

**Checked:** <topic folder> — <blog.md / newsletter.md's web version> · **Date:** <YYYY-MM-DD> · **Against:** <writing-guide.md path, or "none found">

**Question:** <the reader's question, in their words> · **Search query:** <the query, and the kind of page that ranks> · **Site name added to titles:** <yes, after "<separator>" / no / not sure> · **Mode:** <report only / report and fix>

## Title, description and slug

| Field       | Now   | Length | Proposed | Length |
| ----------- | ----- | ------ | -------- | ------ |
| Title       | <...> | <N>    | <...>    | <N>    |
| Description | <...> | <N>    | <...>    | <N>    |
| Slug        | <...> | <N> words | <...> | <N> words |

Targets: title about 50–60 characters; description about 150–160, the point in the first 120; slug 3–5 words — working targets, not platform rules.

## Findings

| ID | Area | Status | Issue | Location |
| --- | --- | --- | --- | --- |
| 1 | SEO / AEO / GEO / Copies | OPEN | <one line> | <file — section or paragraph> |

### S1 — <title>
- **Area:** <SEO, AEO, GEO or Copies>
- **Problem:** <what it costs: the click, the snippet, the citation>
- **Now:** <the current text>
- **Proposed:** <the replacement>

## Questions for the writer

<facts only the writer can supply — first-hand data, dates, sources — batched>

## Checked with whoever runs the site

<crawler access, structured data, sitemap — what was asked, and the answer, or "not checked">
```

`Status` is `OPEN` for anything still present and `FIXED` for anything fixed in this run after the writer chose it.
