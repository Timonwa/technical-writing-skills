---
name: content-audit
description: >-
  Manually invoked. Inventories an existing documentation set and judges its shape rather than its defects — every page with its type, audience, owner, last-verified date and usage, a keep/merge/split/rewrite/retire verdict for each, duplicate clusters, orphans and ghosts, navigation depth, and a gap analysis against what readers are actually trying to do. Outputs the inventory and a prioritized writing queue. Never edits a page.
argument-hint: '[path] [--tasks <path-or-list>]'
model: opus
effort: high
disable-model-invocation: true
disallowed-tools: Edit, NotebookEdit
---

# Content audit

A **manually-invoked audit of the shape of a documentation set**: what exists, whether each piece earns its place, and what's missing. This is the first job on inheriting a docs set and the one that decides what everyone writes for the next quarter.

It asks a different question from `/tw:docs-audit`. That one asks whether a page is **true and working**; this one asks whether the set is the **right set** — and a perfectly accurate page for a task nobody performs still fails this audit.

The standard behind it is `docs-planning`; `writing-standards` supplies the document types. Works on any body of content — a docs repo, an exported help centre, a knowledge base, a folder of documents.

## Arguments

- `[path]` — the content set to inventory. Omitted → ask.
- `[--tasks <path-or-list>]` — the reader tasks to measure coverage against, if you already have them. Omitted → derive a task list from the sources below and **present it for confirmation before running the gap analysis**, because every coverage finding depends on it.

## Method

1. **Establish the audiences.** Who reads this set, what they already know, and what they're trying to accomplish. Two audiences with different prior knowledge are audited as two sets that happen to share a home. Ask rather than assume; this is the one input you cannot derive from the content.
2. **Build the task list** — what readers want to be able to do, in their words. Derive it from whatever evidence exists: support tickets and their volume, search queries that return nothing, repeated questions in community or internal channels, the product's own surface, and the existing content. Where there's no evidence available, say so and mark the list as assumed.
3. **Inventory every page.** No verdict is trustworthy without the complete list — duplicates and orphans are invisible from a sample.
4. **Judge each page** against the job it's supposed to do, and assign a verdict.
5. **Cluster the duplicates**, then name the canonical page for each cluster.
6. **Run the gap analysis** — tasks against pages, in both directions.
7. **Prioritize** and produce the writing queue.
8. **Write the report** and post the chat summary. Recommend; never edit, move, merge or delete a page.

### The inventory

One row per document. Leave a cell blank rather than guessing, and treat a blank owner or last-verified as a finding in itself:

| Column        | What it holds                                                            |
| ------------- | ------------------------------------------------------------------------ |
| Title         | As published                                                             |
| Location      | Path or URL                                                              |
| Type          | Tutorial, how-to, reference, explanation — or the type it drifts between |
| Audience      | Who it's for                                                             |
| Task          | What it lets a reader do; blank means no task was identifiable           |
| Owner         | Accountable person or team                                               |
| Last verified | When someone last confirmed it true, not when it was last edited         |
| Usage         | Traffic, search hits, ticket deflection — whatever signal exists         |
| Words         | Rough length, to spot the thin and the bloated                           |
| Verdict       | Keep · Update · Merge · Split · Rewrite · Retire                         |

### Verdicts

- **Keep** — does a real job, in the right shape, currently true.
- **Update** — right page, wrong details.
- **Merge** — covered better elsewhere, or too thin to stand alone. Name the target page.
- **Split** — doing several unrelated jobs, or mixing document types. Name the pages it becomes.
- **Rewrite** — right topic, wrong type, wrong audience, or wrong structure.
- **Retire** — the task is gone, the feature is gone, or nobody has ever needed it. Name what happens to its URL and its inbound links.

**Judge the job, not the prose.** A well-written page for a task nobody has is still a Retire; a scrappy page carrying the main path is a Keep or an Update.

### Gap analysis

Run it in both directions — the second one is the one people skip:

- **Tasks with no page** → the writing queue.
- **Tasks with the wrong page** — documented only inside a page about something else, or as the wrong type for what the reader needs.
- **Tasks split across pages** so no single page completes them.
- **Pages with no task** — either they serve a task you missed, or they're a Retire.

**Prioritize by impact, not by effort.** Weigh how many readers hit a gap against what it costs them when it's missing: a rare task that loses someone's data outranks a common one that costs a minute. Break ties with whatever is generating support load now.

### Structure findings

- **Duplicate clusters** — every group of pages covering the same ground, with the canonical page named.
- **Contradictions between duplicates** — where two copies have drifted apart, flag it as a defect and route it to `/tw:docs-audit` for the accuracy call.
- **Orphans** — pages nothing links to. **Ghosts** — navigation entries pointing at nothing.
- **Depth** — where the hierarchy runs deeper than two levels, and whether the grouping is the reason.
- **Grouping** — whether sections follow reader tasks, or the product's feature list, or the org chart. The last two are findings.
- **Naming** — navigation labels and page titles that don't match what a reader would search for.
- **Entry points** — whether the paths in from search, the product, a README and a support reply each land somewhere that works cold.
- **Sequence** — whether a section runs newcomer-first, and whether anything alphabetical should be ordered by need instead.

### Report format

Write to `_reports/content-audit.md` in a repository; otherwise ask where it should go, and fall back to chat rather than skipping it.

```markdown
# Content audit — <scope>

**Date:** <YYYY-MM-DD> · **Scope:** <what was inventoried> · **Pages:** <N> · **Audiences:** <list> · **Task list:** <confirmed / assumed> · **Mode:** Report-only

## Summary
| Verdict | Count | Share |
| --- | --- | --- |
| Keep / Update / Merge / Split / Rewrite / Retire | <N> | <%> |

**Coverage:** <N> of <M> reader tasks have an adequate page. **Unowned:** <N> pages. **Never verified:** <N> pages.

## Inventory
| Title | Location | Type | Audience | Task | Owner | Last verified | Usage | Words | Verdict |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

## Gaps — the writing queue
| # | Reader task | Audience | Why it matters | Doc type needed | Priority |
| --- | --- | --- | --- | --- | --- |

## Duplicate clusters
| Topic | Pages | Canonical | Action |
| --- | --- | --- | --- |

## Structure findings
| # | Finding | Evidence | Recommendation |
| --- | --- | --- | --- |

## Retire list
| Page | Why | URL disposition | Inbound links to update |
| --- | --- | --- | --- |

## Proposed structure
<the table of contents the set should have, as a nested list>

## Open questions
| # | Question | Who can answer it | What it blocks |
| --- | --- | --- | --- |
```

### Output

- **Full report** at the path above.
- **Chat summary** — coverage as a fraction, the verdict counts, the top five gaps worst-first, the largest duplicate cluster, and the report path.

**Report-only** — it recommends a plan; it never edits, moves, merges or deletes anything.

## Boundaries

- **Defects inside a page** — stale claims, broken links, untested examples → `/tw:docs-audit`.
- **Terminology and voice consistency across the set** → `/tw:style-check`.
- **Writing the pages this queue calls for** → the skill for each document type.
- **The mechanics of a move or a retirement** the plan recommends — inbound links, redirects, navigation → [`developer-docs`'s site-mechanics.md](../developer-docs/references/site-mechanics.md).
- **The audience and task list are asked for, not invented.** Where no evidence is available, the coverage findings are explicitly marked as resting on an assumed task list.
