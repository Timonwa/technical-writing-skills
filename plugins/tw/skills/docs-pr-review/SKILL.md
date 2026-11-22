---
name: docs-pr-review
description: >-
  Manually invoked. Reviews the documentation in a pull request — docs shipped with a code change, a docs-only update, new pages, or docs for code that lives elsewhere — checking every claim against the right source of truth, finding changes that need docs but have none, and running the five levels of edit on the changed lines. Reports findings with replacements and questions for the author; comments on the PR or fixes only when asked.
argument-hint: '[pr-number | pr-url | branch] [--comment] [--fix]'
model: opus
effort: high
disallowed-tools: Edit, NotebookEdit
disable-model-invocation: true
---

# Docs PR review

A review of the **documentation in a pull request**, for when developers ship a change and draft the docs, and a writer reviews the docs part. Where `/tw:doc-review` reviews a document on its own, this one reviews it against the change it belongs to: is every claim true of what this PR does, and did anything the PR changes go undocumented?

The editorial standard is `/tw:doc-review`'s five levels of edit, `tw:editing-standards`, `tw:docs-standards` and `write:writing-standards`' voice rules, plus the skill for each document type the PR touches.

## Voice and audience come from the writing's own guide

Before reviewing, find the project's style guide and conventions and read them:

- **In a codebase:** the style guide and conventions the project's `AGENTS.md` names, or its contributing docs.
- **In a chat app:** the style guide in the project's files (a Claude Project's knowledge, or the equivalent elsewhere), or attached to the conversation.
- **Otherwise:** ask whether one exists before concluding there isn't one.

Voice, person, tone, terminology and formatting come from that guide. Where it settles something this skill also covers, the guide wins; where it's silent or there isn't one, `tw:docs-standards` applies without asking, and a page that departs from it is a finding.

## Ask first

Read the answers from the request, the arguments, the PR itself, the project and its guide first; ask only what's missing. Ask with the app's question tool where it has one, so the choices can be picked; otherwise as a numbered list answered by number. Offer choices where the answers are known and a short typed answer otherwise; where the project records a default, show it and ask whether to use it. Record the answers in the review's header.

1. **Which PR?** A number · a URL · a branch. Default: the current branch's PR.
2. **What's the source of truth, where the PR doesn't carry it?** the code in this PR · the base branch · the running product · another repo, PR or spec (link) · none — mark claims unverified.
3. **Only if the diff doesn't show it — which shape is the PR?** docs alongside a code change · docs only, updating pages · docs only, new pages · docs for code that lives elsewhere.
4. **Who reads these docs?** Short answer.
5. **Which release does the PR ship in?** Short answer: the product version.
6. **What should happen with the review?** chat only (default) · post it on the PR (`--comment`) · fix the named findings on the PR's branch (`--fix`).

## Arguments

- `[pr-number | pr-url | branch]` — the PR to review; a branch with no PR is compared with its base. Omitted → the current branch's PR, if there is one, otherwise ask.
- `--comment` — post the review on the PR, after the findings have been shown in chat.
- `--fix` — apply the findings the owner names, on the PR's branch.

## Step 1 — Gather

- **The PR:** its title, body, linked issues and their acceptance criteria, its files, and its diff (`gh pr view`, `gh pr diff`).
- **Split the diff** into documentation (docs pages, READMEs, reference prose, comments that are user-facing docs, changelogs) and everything else.
- **The project's standard:** its style guide, terminology list or glossary. Look for one, and ask before concluding there isn't one.

## Step 2 — Classify the PR and name the source of truth

The shape decides what every claim is checked against. Say which shape it is, and the source, at the top of the review.

| The PR                                                                                          | Checked against                                             | Extra checks                                                                                                                 |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| **Docs alongside a code change**                                                                | The code this PR changes                                    | Every change in the code that a reader would notice and the docs don't mention                                               |
| **Docs only, updating existing pages**                                                          | The current code on the base branch, or the running product | The update doesn't contradict other pages; links, anchors and navigation still hold                                          |
| **Docs only, new pages**                                                                        | The current code or product                                 | The right type of page, its place in the navigation, links in and out, no duplicate of an existing page (`tw:docs-planning`) |
| **Docs for code that lives elsewhere** — another repo, a separate code PR, an unreleased change | The linked PR, repo or spec                                 | The same missing-docs check, against that change                                                                             |

- **No source to check against** — docs-only with no access to the code, and nothing linked: ask for one. If none comes, mark each unchecked claim as unverified. Never close the gap with the plausible version.
- **The shape isn't clear** — docs describing behaviour that isn't in the code yet, a code change that might be in another PR: ask rather than guess.
- **Finding the facts in the code** — defaults, limits, labels, error strings, env vars, flags — follows `tw:codebase-research`.

## Step 3 — Review

**Only the documentation the PR adds or changes**, plus what it now contradicts elsewhere. A problem the PR didn't touch is listed once at the end, never as a blocker.

1. **Missing docs** (code-with-docs and docs-elsewhere shapes) — list every change in the code a reader would notice with no doc line: a new or renamed setting, env var, endpoint, flag or command; a changed default, limit or behaviour; a removed feature still documented; a new error a user can hit. Each with the file and line in the code, and where its doc belongs.
2. **The five levels** on the changed lines, from `/tw:doc-review` — substantive, technical accuracy (against this PR's source of truth), line, copy and proof — in that order, and don't skip ahead.
3. **The document type** — each page judged by its type's skill: `tw:developer-docs`, `tw:user-guides`, `tw:api-reference`, `tw:readmes`, `tw:release-notes`, `tw:internal-docs`; samples by `write:code-samples`, images by `tw:images-and-diagrams`.

Use `/tw:doc-review`'s severity scale: **BLOCKER** (untrue, a missing warning on an irreversible action, an example that doesn't work, an undocumented change a reader will hit), **MAJOR**, **MINOR**, **NIT**.

## Step 4 — Report

In chat, worst first. The author is usually a developer, so every finding says what's wrong, gives the replacement, and says why in one line — feedback they can apply and learn from.

The review follows the template in [references/output-format.md](references/output-format.md): a header naming the shape, the source of truth and the scope answers, then missing docs, findings, questions for the author, what's unverified, and problems that aren't this PR's to fix.

Nothing found → say so plainly, with what was checked.

## Step 5 — Only when asked

- **`--comment`** — confirm, then post one review on the PR: the summary as the body, and each finding with a replacement as an inline comment on its line, using a GitHub `suggestion` block so the author can apply it in one click. Missing docs and questions go in the body. Never approve or merge.
- **`--fix`** — list the findings by number and ask which to fix; fix only those, on the PR's branch, and report what changed. Nothing is edited before that answer — this command runs with the editing tools removed while it reviews. Committing is the project's own workflow.

## Boundaries

- **One document outside a PR** → `/tw:doc-review`. **The whole doc set** → `/tw:docs-audit`, `/tw:content-audit`, `/tw:style-check`. A problem across the set that this PR merely exposes is passed there.
- **The code in the PR** is reviewed by the project's code review, not this skill; a code bug found while checking a claim is mentioned once as a question.
- **The author owns the document.** Findings are proposals; on technical content the author often knows something you don't, and a rejected finding isn't re-argued.
