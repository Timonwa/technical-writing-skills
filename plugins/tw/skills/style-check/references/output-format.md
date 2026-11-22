# Style check report — template

Write to `_reports/docs-style-check.md`, creating the directory if it doesn't exist, and overwrite it on every run. The header records what was checked, when, against which guide, and the scope answers from **Ask first**; a field with no answer stays in the header, left blank.

```markdown
# Style check — <scope>

| Field          | Answer                                                     |
| -------------- | ---------------------------------------------------------- |
| Date           | <YYYY-MM-DD>                                               |
| Scope          | <the paths swept>                                          |
| Version        | <current only · all versions · a named version>            |
| Excluded       | <generated reference, changelogs, translated locales…>     |
| Pages          | <N>                                                        |
| Standard       | <guide path, or "tw:docs-standards + derived">             |
| Product source | <where the product's own names were checked, or "none">    |
| Mode           | Report-only                                                |
| Consistency    | <X>/10                                                     |

## Score change (previous → current)

| Metric      | Previous         | Current  | Δ             | Trend             |
| ----------- | ---------------- | -------- | ------------- | ----------------- |
| Consistency | <prev/10 or N/A> | <cur/10> | <+N / -N / 0> | <▲ / ▼ / ■ / N/A> |

## Terminology drift

| ID  | Concept   | Variants (count)                 | Recommended | Confidence | Occurrences | Status |
| --- | --------- | -------------------------------- | ----------- | ---------- | ----------- | ------ |
| 1   | <concept> | `<a>` (74), `<b>` (9), `<c>` (2) | `<a>`       | High       | 11          | OPEN   |

### T1 — <concept>

- **Variants:** `<a>` ×74 · `<b>` ×9 · `<c>` ×2
- **What the product calls it:** <the canonical UI or API string, or "unverified">
- **Recommendation:** <winner, and why>
- **Locations to change:** `<path>:<line>` …

## Open decisions

Splits too close to call, and majorities that break a default the project hasn't recorded.

| #   | Question | Variant A (count) | Variant B (count) | Recommendation |
| --- | -------- | ----------------- | ----------------- | -------------- |

## Voice findings

| #   | Issue                           | Count              | Example                          | Locations |
| --- | ------------------------------- | ------------------ | -------------------------------- | --------- |
| V1  | "simply" on pages for newcomers | 41 across 18 pages | `getting-started/install.md:14` | …         |

## Mechanics drift

| #   | Category | Dominant convention | Exceptions | Locations |
| --- | -------- | ------------------- | ---------- | --------- |

## Proposed terminology entries

Ready to paste into the project's terminology list.

| Term | Definition | Use | Don't use | Notes |
| ---- | ---------- | --- | --------- | ----- |

## Scorecard

| Category                  | Score  | Notes |
| ------------------------- | ------ | ----- |
| Terminology               | <X>/10 |       |
| Voice                     | <X>/10 |       |
| Capitalization & headings | <X>/10 |       |
| UI & code formatting      | <X>/10 |       |
| Lists & punctuation       | <X>/10 |       |
| Numbers, dates & units    | <X>/10 |       |
| Link text                 | <X>/10 |       |
```

## Chat summary

The consistency score, the number of concepts with drift, the worst three clusters with their counts, the count of open decisions needing a person, and the report path.
