---
name: content-planning
description: >-
  Deciding what a blog, newsletter or publication writes next — starting from its profile's purpose and readers, gathering ideas from reader questions and real search demand, scoring them for fit, value, demand, effort and first-hand experience, grouping them into series and clusters, a calendar and cadence the writer can keep, and planning updates beside new pieces. Use on "what should I write next", "content plan", "content calendar", "blog ideas", "plan a series", "editorial calendar".
---

# Content planning

A plan decides which pieces get written, in what order, and why each one is worth a reader's time. It starts from what the publication is for, draws ideas from what readers actually ask, and commits only to a pace the writer can keep.

## Voice and audience come from the writing's own guide

Before planning, find the publication's `profile.md` and `writing-guide.md` and read them:

- **In a codebase:** the folder the project's `AGENTS.md` names, or, for a guide kept outside the repo, the folder the user's personal agent instructions name (such as `~/.claude/CLAUDE.md`); otherwise the project's `publications/` folder.
- **In a chat app:** the project's files (a Claude Project's knowledge, or the equivalent elsewhere), or files attached to the conversation.
- **Otherwise:** ask for them.

Voice, person, tone, terminology, formatting choices and who the reader is come from that guide, never from this skill.

- Where the guide settles something this skill also covers — piece types, cadence, the topics it never covers — the guide wins.
- Where there's no guide, ask who the reader is and what the publication is for, and offer to build one with `cw:style-guide`.

When a guide changes: in a codebase, save the file where it was found; in a chat app, give the user the updated file to replace in the project. Never write inside the installed plugin.

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

Experience matters because Google asks whether content "clearly demonstrate[s] first-hand expertise and a depth of knowledge"; E-E-A-T "itself isn't a specific ranking factor", and "trust is most important" ([Google: helpful content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)). An idea with high demand and no experience behind it is a candidate for an interview (`cw:sme-interviews`) or research (`cw:content-research`), not for a confident guess.

## What not to plan

- **Topics chosen only because they trend.** Google lists "writing about things simply because they seem trending" and "producing lots of content on many different topics" as signs of search-engine-first content ([Google: helpful content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)).
- **Volume for its own sake.** Scaled content abuse is "when many pages are generated for the primary purpose of manipulating search rankings and not helping users", "no matter how it's created" — including generating many pages with AI "without adding value for users" ([Google spam policies](https://developers.google.com/search/docs/essentials/spam-policies#scaled-content)).
- **Near-duplicate pieces** — one per keyword variant, or the same piece retold for a new year. Update the original instead (`cw:content-refresh`).
- **A fixed word-count target.** Google has no preferred length; size each piece by its job and by what currently ranks for its question. As a reference point, one annual survey of content marketers put the average post at 1,333 words in 2025, with 9% publishing over 2,000 words and those writers more likely to report strong results ([Orbit Media via MarketingProfs](https://www.marketingprofs.com/charts/2025/53736/blogging-benchmarks-2025-word-count-frequency-study-orbit-media)) — an average, not a target.

## Series and clusters

- **A series** is a run of pieces a reader follows in order — a tutorial in parts, a build log, a monthly report. Plan it whole before publishing the first part: the parts, what each delivers on its own, and the date of the last one. A series that stops halfway is worse than a single piece.
- **A cluster** is a main piece on a topic and the narrower pieces around it. The main piece links to each narrower one, and each links back and to its neighbours. Links "connect your users and search engines to other parts of your site" ([Google SEO starter guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)); the cluster shape itself is practice, not a Google requirement.
- **Each piece still stands alone.** A reader arriving from search at part three gets what part three promises, with a link back for what came before.

## Mix the piece types

Balance what the plan asks of readers and of the writer:

- **By reader intent** — do a task, understand, decide, keep current, share a lived experience (`cw:article-standards`). A plan of only tutorials or only opinion narrows who stays.
- **New pieces and updates** — schedule refreshes of pieces that still bring readers in, beside new ones (`cw:content-refresh`). An update often returns more than a new piece.
- **Long and short** — a demanding piece with a demo project and interviews next to quicker ones, so the cadence holds.

## Calendar and cadence

- **Pick a cadence the writer can keep through a bad month** — weekly, fortnightly, monthly. Consistency builds a readership; a burst and a silence loses it (practice).
- **Work back from each publish date** — research, interview, draft, demo project (`cw:demo-project`), images (`cw:cover-images`), edit (`cw:editing-standards`), review (`/cw:review`), findability (`cw:seo-aeo-geo`).
- **Keep a buffer** of one or two finished pieces, so a missed week doesn't break the run.
- **Plan the distribution with the piece** — the newsletter issue that carries it (`cw:newsletter-standards`), the posts that share it (`cw:social-media-posts`), the copies on other platforms (`cw:cross-posting`).
- **Date the seasonal and the timely** — launches, events, the start of a tax year — far enough ahead to write them well.

## A brief for each scheduled piece

Before drafting starts, each scheduled piece gets a short brief (standard editorial practice):

- the reader, and the question in their words;
- the search query and the kind of page that ranks for it;
- the angle — what this piece adds that the others don't;
- an outline, the sources to check (`cw:content-research`) and the people to interview (`cw:sme-interviews`);
- the one action it asks for, and the internal links in and out.

## Where the plan lives

Keep the plan beside the publication's `profile.md` and `writing-guide.md` — a `plan.md` with the idea list, the scores, the series, the calendar and the briefs. In a codebase, save it in the publication's folder; in a chat app, give the user the file to add to the project. Never write it inside the installed plugin: an update replaces the plugin's files and the plan goes with them.

Each entry records:

- the idea in the reader's words, and where it came from;
- its score and intent;
- its status — idea, scheduled, drafting, published, to refresh;
- the publish date and the series or cluster it belongs to.

## Review the plan

- **After each review cycle** (`/cw:content-performance`), move what worked up and what didn't out.
- **When the profile changes**, re-score the list against the new purpose.
- **Retire ideas** that have sat unscheduled through several cycles; the list should stay short enough to read.

## Before committing to a plan

- [ ] Every scheduled idea fits the profile's reader and purpose.
- [ ] Each one comes from a reader question, real search data or the writer's own work.
- [ ] The writer has first-hand experience of it, or a source or research step is planned.
- [ ] No two pieces target the same question.
- [ ] Series are planned to the last part.
- [ ] Updates are scheduled beside new pieces.
- [ ] The cadence survives a bad month, with a buffer.
- [ ] The plan is saved beside the guide, or handed over to add to the project.

## Boundaries

- **Writing the piece** → `cw:article-standards`; the newsletter issue → `cw:newsletter-standards`.
- **Researching a piece's facts** → `cw:content-research`.
- **Interviewing a source** → `cw:sme-interviews`.
- **Pitching a planned piece to another publication** → `cw:pitching`.
- **Getting a piece found** → `cw:seo-aeo-geo`.
- **Reviewing how pieces did** → `/cw:content-performance`.
- **Updating or retiring a published piece** → `cw:content-refresh`.
- **The publication's profile and writing guide** → `cw:style-guide`.
