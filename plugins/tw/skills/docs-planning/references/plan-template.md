# Docs plan template

The plan this skill produces: the documents to write, in order, with a home for each. Write it where the project keeps its docs plans, or to `_reports/docs-planning.md` where it keeps none, and tell the user the path. The header records the answers to the skill's Ask first questions; leave a cell blank rather than guessing, and drop a section only when the plan's scope doesn't reach it (placing one page needs no inventory).

```markdown
# Docs plan — <the set, release or feature>

**Date:** <YYYY-MM-DD> · **Scope:** <new set / restructure / a release or feature / placing one page> · **Product version:** <version> · **Lives in:** <platform or framework, repo and path> · **Guide:** <path, or "none found — tw:docs-standards"> · **Task evidence:** <tickets / search logs / community questions / analytics — or "assumed"> · **Existing set:** <path or URL, or "none — from scratch">

## Audiences
| Audience | What they already know | What they're trying to do |
| --- | --- | --- |

## Reader tasks
| # | Task, in the reader's words | Audience | Evidence | Before it | After it |
| --- | --- | --- | --- | --- | --- |

## Inventory
| Title | Location | Type | Audience and task | Owner | Last verified | Usage | Verdict |
| --- | --- | --- | --- | --- | --- | --- | --- |

## Gaps
| Task | Finding | Readers affected | Cost when missing | Priority |
| --- | --- | --- | --- | --- |

Finding is one of: no page · wrong page · page with no task.

## Proposed structure
<the table of contents as a nested list: section labels and page titles as readers search for them, file names beside each, kept shallow>

## Writing queue
| Order | Page | Type | Audience | Home (path) | Replaces or merges | Links in | Links out |
| --- | --- | --- | --- | --- | --- | --- | --- |

## Retirements and moves
| Page | Action (retire / merge / move / rename) | Target | Redirect | Inbound links to update |
| --- | --- | --- | --- | --- |

## What a change ships with
<the minimum set for a new feature, a changed behaviour, a removed feature and a new failure mode, and the trigger that starts the docs work>

## Definition of done
<what "documented" means for this set, the review cadence, and what will be measured>

## Open questions
| # | Question | Who can answer it | What it blocks |
| --- | --- | --- | --- |
```
