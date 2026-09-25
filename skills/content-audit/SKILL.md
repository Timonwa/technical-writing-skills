---
name: content-audit
description: >-
  Manually invoked. Inventories an existing documentation set and judges its shape rather than its defects — every page with its type, audience, owner, last-verified date and usage, a keep/merge/split/rewrite/retire verdict for each, duplicate clusters, orphans and ghosts, navigation depth, and a gap analysis against what readers are actually trying to do. Outputs the inventory and a prioritized writing queue. Never edits a page.
argument-hint: '[path] [--tasks <path-or-list>] [--fix]'
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
- `[--tasks <path-or-list>]` — the reader tasks to measure coverage against, if you already have them. Omitted → ask whether a task list, journey map or support-ticket export exists before building one, then derive from the sources below and **present the list for confirmation before running the gap analysis**, because every coverage finding depends on it.
- `[--fix]` — don't audit. Read the existing `_reports/content-audit.md`, list what's in it, and ask which findings to fix. For coming back to a report you ran earlier.

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

Write to `_reports/content-audit.md`, creating the directory if it doesn't exist. That's where every audit and report in this set goes. Tell the user the path when you're done.

```markdown
# Content audit — <scope>

**Date:** <YYYY-MM-DD> · **Scope:** <what was inventoried> · **Pages:** <N> · **Audiences:** <list> · **Task list:** <confirmed / assumed> · **Mode:** Report-only · **Overall:** <X>/10

## Score change (previous → current)
| Metric | Previous | Current | Δ | Trend |
| --- | --- | --- | --- | --- |
| Overall | <prev/10 or N/A> | <cur/10> | <+N / -N / 0> | <▲ / ▼ / ■ / N/A> |

## Summary
| Verdict | Count | Share |
| --- | --- | --- |
| Keep / Update / Merge / Split / Rewrite / Retire | <N> | <%> |

**Coverage:** <N> of <M> reader tasks have an adequate page. **Unowned:** <N> pages. **Never verified:** <N> pages.

## Inventory
| Title | Location | Type | Audience | Task | Owner | Last verified | Usage | Words | Verdict |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

## Gaps — the writing queue
| ID | Reader task | Audience | Why it matters | Doc type needed | Priority | Status |
| --- | --- | --- | --- | --- | --- | --- |

## Duplicate clusters
| Topic | Pages | Canonical | Action |
| --- | --- | --- | --- |

## Structure findings
| ID | Finding | Evidence | Recommendation | Status |
| --- | --- | --- | --- | --- |

## Retire list
| Page | Why | URL disposition | Inbound links to update |
| --- | --- | --- | --- |

## Proposed structure
<the table of contents the set should have, as a nested list>

## Open questions
| # | Question | Who can answer it | What it blocks |
| --- | --- | --- | --- |

## Scorecard
| Category | Score | Notes |
| --- | --- | --- |
| Coverage | <X>/10 | reader tasks with an adequate page |
| Ownership | <X>/10 | pages with a named owner |
| Freshness | <X>/10 | pages verified within their cadence |
| Duplication | <X>/10 | topics covered in exactly one place |
| Structure | <X>/10 | grouping, depth, naming |
| Findability | <X>/10 | entry points, orphans, ghosts |

```

### Output

- **Full report** at the path above.
- **Chat summary** — coverage as a fraction, the verdict counts, the top five gaps worst-first, the largest duplicate cluster, and the report path.

**Report-only** — it recommends a plan; it never edits, moves, merges or deletes anything.

## Re-running it

**Every run is a complete, fresh audit.** Never skip a check, and never treat something as absent, because an earlier report said it was resolved. Code regresses, pages get reverted, a fix in one place gets undone in another — a previous report is not evidence about the state of anything today.

- **Report current state only.** What's in the report is what's true now, checked this run.
- **Overwrite the file.** No resolved history accumulates in it. A report dragging a hundred past findings along spends the reader's tokens and attention on problems that are gone.
- **Number findings from 1 each run.** IDs identify a finding inside this report, for the conversation you're having about this run — not across runs.
- **Read the previous report for its scores, and nothing else.** The overall and per-category scores go in the trend row so a reader can see whether the set is improving or degrading. Its findings are never read — those are re-derived from source every run.
- **History is version control's job**, not the report's. The audit says what's wrong today and how today compares.

**Status values:** `OPEN` for anything still present, `FIXED` for anything fixed during this run after the user chose it. Both describe this run only — the next run re-checks everything from scratch.

## Fixing what it found

The report is written first and nothing is edited to produce it. Then:

1. **List the findings by ID** in chat, worst-first, one line each.
2. **Ask which to fix.** Accept IDs (`1, 4, 9`), a range, `all`, or `none`.
3. **Fix only what was named.** Never a default subset, never "the top three", never a severity threshold picked for the user. A verdict they didn't choose stays in the report untouched.
4. **Report back**: what changed, what was skipped, and anything that couldn't be fixed without a decision only they can make.
5. **Update the report.** Mark each fixed verdict `FIXED` in place, with a one-line note of what changed. Leave everything else as it stands. The file on disk has to match reality — a report still listing something that was fixed an hour ago teaches people not to trust it.
6. **Re-score and show the movement.** After fixing, recompute the scores and report the change against where this run started. That's what scoring is for: it tells you whether the work improved things or made them worse. If several findings were fixed and no score moved, say so plainly — the findings that mattered weren't the ones chosen.

Nothing is edited before step 2 is answered. This command runs with the editing tools removed while it produces the report, so that holds on its own rather than resting on the instruction — they come back for the turn after your question, once the answer is in.

### Fixing from an earlier report

`--fix` skips the audit entirely and works from the report already on disk, whatever its age — ten minutes old, an hour, a month. Use it whenever you want to act on findings you've already read rather than generate a new set; re-auditing would renumber them underneath you.

- **Say how old the report is** — its date, and how long ago that was. Someone deciding what to fix needs to know whether they're looking at today's picture or last month's.
- **Verify each finding still exists before fixing it.** Check the actual location; don't trust the report's description of it. Between the audit and now, the page may have changed, someone else may have fixed it, or the thing it described may have moved.
- **Drop anything that's no longer there** and say so. That's a stale entry, not a fix, and it shouldn't be counted as one.
- **Check cheaply whether the content has moved on** — compare the report's date against file modification times, or the version-control log for the paths it covers. That's a count of what changed, not a re-audit, and it costs seconds. If a lot has changed, say how much and offer a fresh audit; the call is theirs, not yours. Where there's no history or timestamps to compare against, say you can't tell rather than implying you checked.
- **If no report exists**, say so and offer to run the audit rather than guessing at what to fix.

Everything else is unchanged: list the findings, ask which, fix only those, update the report, re-score.

## Boundaries

- **Defects inside a page** — stale claims, broken links, untested examples → `/tw:docs-audit`.
- **Terminology and voice consistency across the set** → `/tw:style-check`.
- **Writing the pages this queue calls for** → the skill for each document type.
- **The mechanics of a move or a retirement** the plan recommends — inbound links, redirects, navigation → [`developer-docs`'s site-mechanics.md](../developer-docs/references/site-mechanics.md).
- **The audience and task list are asked for, not invented.** Where no evidence is available, the coverage findings are explicitly marked as resting on an assumed task list.
