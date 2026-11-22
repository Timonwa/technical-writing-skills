---
name: content-planning
description: >-
  Deciding what a blog, newsletter or publication writes next — starting from its profile's purpose and readers, gathering ideas from reader questions and real search demand, scoring them for fit, value, demand, effort and first-hand experience, grouping them into series and clusters, a calendar and cadence the writer can keep, a brief per topic saying what it becomes, and planning updates beside new pieces. Use on "what should I write next", "content plan", "content calendar", "blog ideas", "plan a series", "editorial calendar".
---

# Content planning

A plan decides which topics get written, what each becomes, in what order, and why each one is worth a reader's time. It starts from what the publication is for, draws ideas from what readers actually ask, and commits only to a pace the writer can keep.

## Voice and audience come from the writing's own guide

Before planning, find the publication's `profile.md` and `writing-guide.md` and read them:

- **In a codebase:** the folder the project's `AGENTS.md` names, or, for a guide kept outside the repo, the folder the user's personal agent instructions name (such as `~/.claude/CLAUDE.md`); otherwise the project's `publications/` folder.
- **In a chat app:** the project's files (a Claude Project's knowledge, or the equivalent elsewhere), or files attached to the conversation.
- **Otherwise:** ask for them.

Voice, person, tone, terminology, formatting choices and who the reader is come from that guide, never from this skill.

- Where the guide settles something this skill also covers — piece types, cadence, the topics it never covers — the guide wins.
- Where there's no guide, ask who the reader is and what the publication is for, and offer to build one with `cw:style-guide`.

When a guide changes: in a codebase, save the file where it was found; in a chat app, give the user the updated file to replace in the project. Never write inside the installed plugin.

## Ask first

Read the answers from the publication's `profile.md` (its Defaults above all), `calendar.md`, the topic's `brief.md` if it has one, and the request first; ask only what's missing. Ask with the app's question tool where it has one, so the choices can be picked; otherwise as a numbered list answered by number. Offer choices where the answers are known and a short typed answer otherwise; where the profile has a default, show it and ask whether to use it. Record the answers in the topic's `brief.md` so the next skill doesn't ask again — each in the field it belongs to (the "What this topic becomes" table or a row of "The brief"), and one with no field under "Notes for whoever picks it up next". Planning a period rather than one topic, ask first for the period and the cadence the writer can keep, then these per topic as it's briefed.

1. **What's the topic, and what does the reader ask, in their own words?** A short answer for each.
2. **What does it become?** blog post · newsletter issue · social posts · cross-posts · demo project — pick any. Default: the profile's "A new topic becomes".
3. **Where does each go?** the blog or the original's platform · the newsletter's list or segment · each social platform · each cross-post platform. Defaults: the profile's First published on, Newsletter, Social platforms and Cross-posts.
4. **Full copy or opening excerpt on each cross-post platform?** full copy · opening excerpt, per platform. Default: the profile's Cross-posts.
5. **When does each format publish?** A date per format, or none yet for an idea.
6. **Is it part of a series?** none · a new series · an existing one, named, and which part.
7. **What's the angle — what does it add that the others don't?** A short answer.
8. **What's the one action the reader should take afterwards?** subscribe · try it · reply · read the next one · nothing. Default: the profile's one action per piece.

## Start from the profile

Every idea is judged against three things the profile records:

- **The job the publication does for its readers** — and who it's explicitly not for.
- **The job it does for its owner** — the business, the career, the community it serves.
- **The one action a piece should produce** — subscribe, try the tool, book the call, share it.

An idea that serves none of the three is cut, however popular the topic. Google asks the same question of a piece: whether the audience "would find the content useful if they came directly to you" ([Google: helpful content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)).

## Gather ideas

Collect from what readers do, not from guesses about what they might want.

- **Reader questions** — comments, replies to the newsletter, emails, community threads, support conversations, questions asked after a talk. Write each down in the reader's own words; those words become titles and headings.
- **What already brings readers in** — the queries in Search Console's Performance report, grouped by "the search query users typed", with clicks, impressions, click-through rate and average position ([Google Search Console help](https://support.google.com/webmasters/answer/7576553)). A query with impressions and no matching piece is a gap.
- **Search demand** —
  - Google Trends shows relative interest, "scaled on a range of 0 to 100" from a sample of searches; it compares topics and seasons, never absolute volume ([Google Trends help](https://support.google.com/trends/answer/4365533)).
  - Autocomplete predictions "reflect real searches that have been done on Google", though Google warns they aren't the most common queries and shouldn't be compared with Trends ([Google autocomplete help](https://support.google.com/websearch/answer/7368877)).
  - The related questions Google shows beside results suggest the follow-up questions a piece should answer (practice).
  - Google Ads' Keyword Planner estimates the number of searches a keyword gets each month ([Keyword Planner help](https://support.google.com/google-ads/answer/7337243)); accounts without active ad spend often see broad ranges, which are still enough to compare two ideas (common practice).
- **What kind of page wins** — search the query and look at what ranks. If the results are product pages, tools or videos, a post won't take the spot; plan the kind of piece the results show the reader wants (common practice).
- **Gaps from the last review** — the findings of `/cw:content-performance`: decayed pieces, missing pieces, queries with no page.
- **The writer's own work** — what they built, broke, measured or learned this month. First-hand material is the hardest to copy and the easiest to trust.

Keep every idea in one list with its source, so a later decision can be traced to a reader.

## Score ideas

Score each idea before it earns a slot. A simple 1–3 on each line is enough; the point is to compare, not to calculate.

| Criterion    | The question                                                                         |
| ------------ | ------------------------------------------------------------------------------------ |
| Fit          | Does it serve the profile's reader and purpose? A 1 here ends it.                    |
| Reader value | Will a reader leave able to do, understand or decide something they couldn't before? |
| Demand       | Do readers ask it — in their own words, in search data, in replies?                  |
| Experience   | Has the writer done, used or measured this first-hand?                               |
| Effort       | What does it cost — research, a demo project, images, an interview?                  |
| Return       | Does it produce the profile's one action, or support pieces that do?                 |

Experience matters because Google asks whether content "clearly demonstrate[s] first-hand expertise and a depth of knowledge"; E-E-A-T "itself isn't a specific ranking factor", and "trust is most important" ([Google: helpful content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)). An idea with high demand and no experience behind it is a candidate for an interview (`cw:interviews`) or research (`cw:content-research`), not for a confident guess.

## What not to plan

- **Topics chosen only because they trend.** Google lists "writing about things simply because they seem trending" and "producing lots of content on many different topics" as signs of search-engine-first content ([Google: helpful content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)).
- **Volume for its own sake.** Scaled content abuse is "when many pages are generated for the primary purpose of manipulating search rankings and not helping users", "no matter how it's created" — including generating many pages with AI "without adding value for users" ([Google spam policies](https://developers.google.com/search/docs/essentials/spam-policies#scaled-content)).
- **Near-duplicate pieces** — one per keyword variant, or the same piece retold for a new year. Update the original instead (`cw:content-refresh`).
- **A fixed word-count target.** Google has no preferred length; size each piece by its job and by what currently ranks for its question. As a reference point, one annual survey of content marketers put the average post at 1,333 words in 2025, with 9% publishing over 2,000 words and those writers more likely to report strong results ([Orbit Media via MarketingProfs](https://www.marketingprofs.com/charts/2025/53736/blogging-benchmarks-2025-word-count-frequency-study-orbit-media)) — an average, not a target.

## Series and clusters

- **A series** is a run of pieces a reader follows in order — a tutorial in parts, a twelve-week training log, a monthly spending report. Plan it whole before publishing the first part: the parts, what each delivers on its own, and the date of the last one. A series that stops halfway is worse than a single piece.
- **A series gets its own file**, `series/<series-slug>.md`, filled from [the template](../style-guide/references/publication-template/series/_template.md): its name, who it's for, what it covers and leaves out, cadence, and a parts table — part · working title · topic folder · publish date · status. Each part is its own topic: create its folder when that part is briefed, with **Series** and **Part** in its brief.
- **A cluster** is a main piece on a topic and the narrower pieces around it — a main piece on a beginner's running plan, with narrower pieces on shoes, pacing and the first 5k. The main piece links to each narrower one, and each links back and to its neighbours. Links "connect your users and search engines to other parts of your site" ([Google SEO starter guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)); the cluster shape itself is practice, not a Google requirement.
- **Each piece still stands alone.** A reader arriving from search at part three gets what part three promises, with a link back for what came before.

## Mix the piece types

Balance what the plan asks of readers and of the writer:

- **By reader intent** — do a task, understand, decide, keep current, share a lived experience (`cw:article-standards`). A plan of only tutorials or only opinion narrows who stays.
- **New pieces and updates** — schedule refreshes of pieces that still bring readers in, beside new ones (`cw:content-refresh`). An update often returns more than a new piece.
- **Long and short** — a demanding piece with a demo project and interviews next to quicker ones, so the cadence holds.

## Calendar and cadence

- **Pick a cadence the writer can keep through a bad month** — weekly, fortnightly, monthly. Consistency builds a readership; a burst and a silence loses it (practice).
- **Work back from each publish date** — research, interview, draft, a demo project where the piece has one (`cw:demo-project`), images (`cw:cover-images`), edit (`cw:editing-standards`), review (`/cw:review`), findability (`cw:seo-aeo-geo`).
- **Keep a buffer** of one or two finished pieces, so a missed week doesn't break the run.
- **Plan the distribution with the topic** — its brief lists what it becomes: the newsletter issue that carries it (`cw:newsletter-standards`), the posts that share it (`cw:social-media-posts`), the copies on other platforms (`cw:cross-posting`), each with its own date.
- **Date the seasonal and the timely** — launches, events, the start of a tax year — far enough ahead to write them well.

## Where the plan lives

`calendar.md` is the publication's editorial calendar, beside its `profile.md` and `writing-guide.md` — one per publication, one line per topic, filled from [the template](../style-guide/references/publication-template/calendar.md). Each line reads first publish date · topic folder · formats · status · held by · series (left out when there's none) · link:

```text
- 2026-12-04 · 2026-12-sourdough-starter · blog, newsletter, social · briefed · — · series: bread-basics (1) · [topics/2026-12-sourdough-starter](topics/2026-12-sourdough-starter/)
```

An idea not yet briefed is a line too, with status `idea`, where it came from and its score, and no folder until it's briefed. Status is one of `idea`, `briefed`, `drafting`, `in review`, `scheduled`, `published`, `paused`, `retired`.

Lines sit in three sections, the usual order for an editorial calendar: **Coming up** — topics with a publish date, soonest first; **Ideas** — no date yet, newest first; **Published** — published or retired, newest first. A new line goes in its place in its section, and a line moves when its topic gets a date or goes live. A topic's other dates, one per format, live in its brief.

`calendar.md` is the one file every topic shares: change only your topic's line, never rewrite the file. Never write it inside the installed plugin — an update replaces the plugin's files and the calendar goes with them.

## A folder and a brief for each topic

A topic is the folder; a piece is one thing published from it — the blog post, the newsletter issue. When an idea is briefed, it gets its own folder in the publication's `topics/`, named `<yyyy-mm>-<slug>` for the month of its first publish date, or the month it's briefed when there's no date yet (`topics/2026-12-sourdough-starter/`) — one level, never `yyyy/mm/slug`. Everything for the topic lives there, so two topics never share a file.

The folder holds only the files for the formats its brief lists — `blog.md`, `newsletter.md`, `social.md`, `copies.md` — beside `sources.md`, `interviews/`, `images/` and `reports/`. File names never change: adding a format later adds its file. A roundup issue or a personal note is a topic whose brief lists only a newsletter; a stand-alone post or thread, one whose brief lists only social posts. Every file comes from [the topic template](../style-guide/references/publication-template/topics/_template/), with each field present and left blank until it's known.

The folder starts with `brief.md`:

- **At the top** — Status, Held by (who, or which agent, and since when), Kind, and Series (name and part, or blank).
- **What this topic becomes** — one row per format: its file, where it goes (for cross-posts, each platform with full copy or opening excerpt), its publish date, its own status, and its link once live. The topic's status is the overall one, `published` once every row is.
- **The brief** (standard editorial practice) — the reader and the question in their words; the search query and the kind of page that ranks for it; the angle; an outline, the sources to check (`cw:content-research`) and the people to interview (`cw:interviews`); the one action; the internal links in and out, including the cluster it belongs to.

## Claiming and pausing a topic

- **Before working on a topic, read its `brief.md`.** If **Held by** names someone else and the status isn't `paused`, leave it and say so.
- **When starting**, set **Held by** to yourself and the date, and the status; change the topic's line in `calendar.md` to match.
- **When stopping**, set the status — `paused`, or the next one — and clear **Held by**.
- **A paused topic keeps everything in its folder.** Resuming starts with its `brief.md`, then the format files and `sources.md`.
- **Read-only checks don't claim.** A review, an AI check, a style check, an SEO check or a performance review that writes only its own file in `reports/` runs while someone holds the topic and never sets Held by; only a skill that edits the format files claims.
- **Starting another topic** never touches the paused one's folder — the new topic gets its own folder and its own line.

In a chat app, a project's files can't hold folders: name a topic's files `<topic folder>--<file>` (`2026-12-sourdough-starter--brief.md`), keep the publication's own files — `profile.md`, `writing-guide.md`, `calendar.md`, the series files — under their names, and hand back only that topic's files and, for `calendar.md`, only the line to add or change.

## Review the plan

- **After each review cycle** (`/cw:content-performance`), move what worked up and what didn't out.
- **When the profile changes**, re-score the list against the new purpose.
- **Retire ideas** that have sat unscheduled through several cycles; the list should stay short enough to read.

## Before committing to a plan

- [ ] Every scheduled idea fits the profile's reader and purpose.
- [ ] Each one comes from a reader question, real search data or the writer's own work.
- [ ] The writer has first-hand experience of it, or a source or research step is planned.
- [ ] No two topics target the same question.
- [ ] Series are planned to the last part, each in its own `series/` file.
- [ ] Updates are scheduled beside new pieces.
- [ ] The cadence survives a bad month, with a buffer.
- [ ] `calendar.md` has one line per topic, in its section and order, and no other topic's line was rewritten.
- [ ] Each briefed topic has its own folder with `brief.md` — status and who holds it at the top, and a row with a date and destination for every format it becomes.
- [ ] Only what the profile and the brief didn't already answer was asked, and the answers are in the brief.
- [ ] In a chat app, only the topic's files and its `calendar.md` line are handed back.

## Boundaries

- **Writing the piece** → `cw:article-standards`; the newsletter issue → `cw:newsletter-standards`.
- **Researching a piece's facts** → `cw:content-research`.
- **Interviewing anyone for a piece** → `cw:interviews`.
- **Pitching a planned piece to another publication** → `cw:pitching`.
- **Getting a piece found** → `cw:seo-aeo-geo`.
- **Reviewing how pieces did** → `/cw:content-performance`.
- **Updating or retiring a published piece** → `cw:content-refresh`.
- **The publication's profile and writing guide** → `cw:style-guide`.
