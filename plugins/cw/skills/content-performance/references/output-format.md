# Content performance output format

Write to the publication's `reports/content-performance-<yyyy-mm-dd>.md` (`publications/<publication>/reports/`), creating the folder if it doesn't exist, and ask before overwriting a report with the same date. In a chat app, hand it back as `content-performance-<yyyy-mm-dd>.md`. Tell the user the path when you're done.

Every field and section is always present. One the data can't support says so and why, rather than being removed, so a reader can tell "nothing found" from "not checked".

```markdown
# Content performance — <publication>

**Checked:** <each export: platform, file, date range> for <site URL> · **Date:** <YYYY-MM-DD> · **Against:** <profile.md path — the success measure it sets>

**Success means:** <the profile's answer, e.g. subscribers> · **Compared with:** <the earlier export and its date range, or "no earlier export — no trend findings"> · **Formats:** <blog posts / newsletter issues / both> · **Minimum impressions:** <the threshold applied to every finding>

## Data used

| Export | Platform | Date range | Rows | Columns mapped to signals |
| ------ | -------- | ---------- | ---- | ------------------------- |
|        |          |            |      |                           |

## What this data can't answer

| Question | Why not | What would answer it |
| -------- | ------- | -------------------- |
|          |         |                      |

## Do these three first

1. <finding ID — the change, the page, the numbers behind it>
2.
3.

## Findings, grouped by action

### Title and description rewrites

| ID | Page | Topic folder | Numbers (export, range) | Observation | Recommendation | Next skill |
| -- | ---- | ------------ | ----------------------- | ----------- | -------------- | ---------- |
| 1  |      |              |                         |             |                | `cw:seo-aeo-geo` |

### Refreshes

| ID | Page | Topic folder | Numbers (export, range) | Observation | Recommendation | Next skill |
| -- | ---- | ------------ | ----------------------- | ----------- | -------------- | ---------- |
|    |      |              |                         |             |                | `cw:content-refresh` |

### Merges, redirects and retirements

| ID | Pages | Topic folders | Numbers (export, range) | Observation | Recommendation | Next skill |
| -- | ----- | ------------- | ----------------------- | ----------- | -------------- | ---------- |
|    |       |               |                         |             |                | `cw:content-refresh` |

### New pages

| ID | Query | Numbers (export, range) | Existing page checked | Recommendation | Next skill |
| -- | ----- | ----------------------- | --------------------- | -------------- | ---------- |
|    |       |                         |                       |                | `cw:content-planning` |

### Internal links

| ID | Page to link | Link from | Numbers (export, range) | Recommendation |
| -- | ------------ | --------- | ----------------------- | -------------- |
|    |              |           |                         |                |

### Newsletter issues

| ID | Issue | Topic folder | Clicks · click-to-open · unsubscribes | Compared with | Recommendation |
| -- | ----- | ------------ | ------------------------------------- | ------------- | -------------- |
|    |       |              |                                       |               |                |

## AI answer engines

| Source | Kind of data | Figure (export, range) | Note |
| ------ | ------------ | ---------------------- | ---- |
|        |              |                        |      |
```

Findings are ranked by expected impact inside each group and numbered from 1 across the report. The Observation column holds only what the export shows; the Recommendation column holds the judgement, so a reader can accept one and dispute the other.
