---
name: content-performance
description: >-
  Manually invoked. Turns an exported analytics file from any platform into a ranked list of content fixes — titles to rewrite where impressions are high but clicks are not, pages decaying in rank, queries you rank for with no page, orphaned or thin pages, internal links worth adding, and AI-assistant referrals where the export shows them. Works from whatever columns the export actually has. Reports only; never edits a page.
argument-hint: "[path to export(s)] [site URL]"
disable-model-invocation: true
---

# Content performance

Turn exported analytics into a ranked list of what to fix. **This reads data and reports; it never edits a page or invents a number.**

## Arguments

- **`$1` — the export(s)**: a file, several files, or a directory. CSV, TSV, JSON, or a pasted table — from any platform. With nothing, ask for the data.
- **`$2` — the site**: the base URL, so page paths in the export resolve to real pages.

## Voice and audience come from the writing's own guide

Before analysing anything, find the publication's `profile.md` and `writing-guide.md` and read them:

- **In a codebase:** the folder the project's `AGENTS.md` names, or, for a guide kept outside the repo, the folder the user's personal agent instructions name (such as `~/.claude/CLAUDE.md`); otherwise the project's `publications/` folder.
- **In a chat app:** the project's files (a Claude Project's knowledge, or the equivalent elsewhere), or files attached to the conversation.
- **Otherwise:** ask for them.

What the publication is for and what success looks like come from that profile, never from this skill.

- Where the profile settles what success means, rank against it.
- Where there's no profile, ask who the reader is and what the publication is for, and offer to build one with `cw:style-guide`.
- Where success is `unset`, ask before producing a ranked list, and record the answer in the guide.

When a guide changes: in a codebase, save the file where it was found; in a chat app, give the user the updated file to replace in the project. Never write inside the installed plugin.

Traffic is rarely the goal; it's a proxy for one. A publication that exists to drive tool use is failing at 100,000 readers who never open the tool and succeeding at 500 who do. One that exists to attract work is measured in enquiries. One that exists because its author likes writing has no performance problem at all, and an honest report says so rather than inventing one.

Without that answer, the ranking optimises for whatever the export happens to measure, which is almost always reach.

## Read the export before analysing it

Any platform's export is fine, because the analysis keys off **columns, not tools**. Read the header row first, map it to the signals below, and work with what's there.

| Signal you need    | Columns that carry it, whatever they're called                     |
| ------------------ | ------------------------------------------------------------------ |
| **Reach**          | impressions · views · pageviews · sessions · displays              |
| **Engagement**     | clicks · visits · entrances · CTR (or derive it from clicks/reach) |
| **Position**       | position · rank · avg. rank · SERP position                        |
| **Query**          | query · keyword · search term                                      |
| **Page**           | page · URL · address · landing page · path · slug                  |
| **Time**           | date · period · month · week — needed for any trend claim          |
| **Onward journey** | bounce rate · exits · time on page · next page · scroll depth      |

- **Say what the data can't answer.** No click column means no CTR findings; no position column means no decay or striking-distance findings; one date range means no trend findings. Name the sections you're skipping and why, rather than filling them with guesses.
- **Ask when a column is ambiguous** — "views" can mean sessions or pageviews, and the difference changes the conclusion. One question beats a wrong ranking.
- **Never infer a metric you weren't given.** No estimated volumes, no modelled traffic, no "roughly". If it isn't in the export, it isn't in the report. Deriving CTR from clicks ÷ impressions is arithmetic and fine; estimating search volume is invention and isn't.
- **Two windows beat one.** For anything about decay or growth, ask for a second export from an earlier period — a single snapshot cannot show a trend.
- **Attribute every claim** to the export and date range it came from, since a 7-day window and a 12-month window support very different recommendations.

## What to look for

Work through whichever the data supports:

| Finding                     | The signal                                                    | The fix                                                           |
| --------------------------- | ------------------------------------------------------------- | ----------------------------------------------------------------- |
| **Title/snippet mismatch**  | High impressions, low CTR, decent position                    | Rewrite the title and meta description to match the query intent  |
| **Ranking decay**           | Position worse than the earlier window, impressions flat/down | Refresh the page — update facts, add what's now missing           |
| **Striking distance**       | Ranking 5–20 for a query with real impressions                | Strengthen that page on that query; don't write a second one      |
| **Query with no page**      | Impressions on a query the site answers only in passing       | A new page — check it isn't already covered before recommending   |
| **Cannibalisation**         | Two pages trading positions on one query                      | Merge, or differentiate intent and link one to the other          |
| **Orphaned page**           | Indexed, has impressions, no internal links in                | Link it from the pages that should have linked it all along       |
| **Thin or zero-click page** | Indexed, near-zero impressions over a long window             | Improve it, merge it, or remove it — decide, don't leave it       |
| **High-exit page**          | Product analytics show entries but no onward journey          | Fix the next step; the page answered and then stranded the reader |

## Traffic from AI answer engines

Referrals from AI assistants appear in analytics as ordinary referral traffic where they appear at all, and a citation that produces no click produces no row anywhere. Where the export carries referral sources, report what it shows; where it doesn't, say the question can't be answered from this data instead of estimating. Making a piece easier to quote and cite is `cw:seo-aeo-geo`'s work.

## Reporting

- **Ranked by expected impact**, not by severity label — a title rewrite on a page with 50k impressions outranks a perfect fix on a page with 40.
- **Each finding carries the numbers it came from**, the page, and the specific change. "Rewrite the title" is not a finding; "position 6, 12k impressions, 0.4% CTR — the title says _Configuration_ where the query is _how to set environment variables_" is.
- **Group by action**, so a batch of title rewrites can be done in one sitting.
- **Name what you'd do first** if only three things get done.
- **Separate observations from recommendations.** A number in the export is a fact; what to do about it is a judgement, and the report should be readable by someone who wants to disagree with the second part.

Write the report to `_reports/content-performance-[YYYY-MM-DD].md` (ask before overwriting), and summarise the top findings in the chat.

## Never

- Invent, estimate, or round a metric that wasn't in the export.
- Report an AI-citation number the data can't support.
- Recommend a new page without checking whether an existing one already covers the query.
- Recommend republishing with a fresh date as a ranking tactic.
- Mark up structured data that doesn't match what the page shows.
- Edit page content; the fixes are made with the skills named below, once you've decided what to change.
- Treat a single short window as a trend.

## Boundaries

- **What success means for this publication** → its `profile.md`.
- **Rewriting a piece once you know what's wrong** → `cw:article-standards` for structure and framing, `cw:editing-standards` for the line level.
- **The title and opening a rewrite produces** → `cw:article-standards`; this skill says which titles are underperforming, not what they should say. **The title tag, meta description, slug and quotable answer** → `cw:seo-aeo-geo`.
- **Refreshing, merging, redirecting or retiring a piece the findings point at** → `cw:content-refresh`.
- **Promoting a piece that's fine but unseen** → `cw:social-media-posts`. A discovery problem and a quality problem need different fixes.
- **Technical implementation in code** — metadata wiring, robots, sitemaps, JSON-LD validity, crawlability — is the site's developers' work and outside this skill. Name what's wrong; don't change the site.
