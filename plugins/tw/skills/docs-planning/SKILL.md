---
name: docs-planning
description: >-
  Deciding what a documentation set should contain before anything is written — audience and task inventory, auditing what already exists, gap analysis, information architecture and navigation grouping, prioritizing by reader impact, the minimum doc set a release ships with, defining done, and retiring content. Use on "plan the docs", "what docs do we need", "content audit", "restructure the docs site", "information architecture", "table of contents", "docs strategy", "where should this page go".
---

# Docs planning

Most documentation problems are planning problems wearing a writing costume. A page nobody can find, three pages covering the same thing differently, a missing page the support queue answers forty times a month — none of those are fixed by better sentences.

Plan the set before writing the page. The output of this skill is a list of documents to write, in order, with a home for each.

## Start from reader tasks, not the product

The two organizing principles that fail are the feature list and the org chart. Both describe how the product was built, and neither matches how anyone looks for help.

- **Inventory the audiences.** Who reads this, what do they already know, and what are they trying to accomplish? Two audiences with different prior knowledge need different documents, not one document with a warning at the top.
- **List the tasks per audience** — the things a reader wants to be able to do, in their words, not the feature that enables them. "Connect a payment method", not "Payments module".
- **Find the real questions.** Support tickets and their volume, search queries on the docs site and in the product, the questions asked repeatedly in community and internal channels, the steps where people abandon. These are evidence; assumptions about what readers need are not.
- **Ask what a reader does immediately before and after each task.** That sequence is the backbone of both the navigation and the next-steps links.

## Audit what exists

Never plan a docs set without knowing what's already there — the most common outcome of skipping this is a new page competing with an old one.

Build an inventory, one row per document:

| Field              | Why it's there                                                            |
| ------------------ | ------------------------------------------------------------------------- |
| Title and location | What it is and where it lives                                             |
| Type               | Which document type it is, or which it drifts between                     |
| Audience and task  | Who it's for and what it lets them do                                     |
| Owner              | Who is accountable; blank is itself a finding                             |
| Last verified      | When someone last checked it against reality, not when it was last edited |
| Traffic or usage   | Whatever signal exists                                                    |
| Verdict            | Keep, update, merge, split, rewrite, or retire                            |

- **Judge each page on whether it does a job a reader has**, not on whether it's well written. A polished page for a task nobody performs is still a candidate for retirement.
- **Cluster duplicates.** Where several pages cover the same ground, pick the canonical one and mark the rest for merging into it — in the plan, before anyone edits.
- **Flag the orphans** — pages nothing links to — and the ghosts — nav entries pointing at nothing.

## Gap analysis

Lay the task list against the inventory. Three findings come out of it:

- **Tasks with no page.** These are the writing queue.
- **Tasks with the wrong page** — a task documented only inside a page about something else, or documented as a reference entry when it needs a procedure.
- **Pages with no task.** Background nobody needs, or a job that was never named. Either it serves a task you missed, or it goes.

**Prioritize by impact, not by ease.** For each gap, weigh how many readers hit it against what it costs them when it's missing — a rare task that loses someone's data outranks a common one that costs a minute. Resolve ties with whatever is already generating support load.

## Structure the set

- **Group by what the reader is trying to do**, or by the stage they're at, or by role — in that order of preference. Group by product area only when the product areas genuinely map to separate audiences.
- **Name sections and pages the way readers search.** A nav label is a search result. Descriptive over clever, and the reader's word over the internal name.
- **Keep the hierarchy shallow.** Two levels of nesting handles most sets; three is a warning; four means the grouping is wrong. A reader scanning a sidebar gives it seconds.
- **Give every page one job**, and decide up front what each page excludes and where that content lives instead.
- **Sequence within a section** from what a newcomer needs first to what only an advanced reader reaches. Alphabetical order is right for reference material and wrong for everything else.
- **Plan the entry points**, not just the tree. Where does a reader land from search, from the product, from a README, from a support reply? Each of those is a front door that has to work cold.
- **Draft the table of contents and review it before writing a page.** A structure is cheap to change as a list and expensive to change as forty files with inbound links.

## What a change ships with

Agree a minimum set so documentation isn't renegotiated per release:

- **A new feature** — how to do the main task, the reference material for its surface, and an entry in whatever announces changes. Anything conceptually new gets an explanation page.
- **A changed behaviour** — every page that describes the old behaviour, found by searching, not by memory.
- **A removed feature** — its pages retired and redirected, and inbound links updated.
- **A new failure mode** — the troubleshooting entry, placed where someone hitting the error will look.

**Name the trigger.** Whatever starts the work — an issue label, a checklist item in the change template, a step in the release process — has to exist somewhere other than a writer's goodwill, or the docs will always be late.

## Define done, and keep it done

- **State what "documented" means** for your set: verified against the real thing, in the navigation, linked from at least one existing page, with next-steps links out, reviewed by someone who knows the subject.
- **Set a review cadence** and attach it to pages, not to a calendar reminder — a last-verified date on the page makes staleness visible to readers and writers at once.
- **Plan retirement.** Decide in advance what triggers removing a page, and handle the mechanics — inbound links, redirects, navigation — as part of the plan rather than as a cleanup task nobody schedules.
- **Decide what you'll measure.** Whatever signals you can actually get — search terms returning nothing, ticket volume on a documented task, traffic to a page you expected to matter — chosen before the work, so the next plan has evidence.

## Boundaries

- **Writing the pages the plan calls for** → `developer-docs`, `user-guides`, `internal-docs`, `api-reference`, `readmes`, `release-notes`.
- **Which type a planned page should be**, and why mixing types fails → `writing-standards`.
- **The mechanics of moving, renaming and redirecting** a page the plan retires or relocates → [`developer-docs`'s site-mechanics.md](../developer-docs/references/site-mechanics.md).
- **Finding out what's actually true** about the product before you can list its tasks → `sme-interviews`.
- **Auditing an existing set for defects** — stale claims, broken links, orphans — rather than planning its shape → `docs-audit`.
- **Naming and terminology decisions** the structure depends on → `style-guide`.
