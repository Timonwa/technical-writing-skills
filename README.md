# technical-writing-skills

Claude Code skills for technical writers, covering the whole job — planning a docs set, getting facts out of engineers, writing developer docs, user guides, internal docs, READMEs, API references and release notes, the craft layers underneath them, and the audits that keep a set honest. Nineteen skills: fourteen Claude reaches for on its own, five you run yourself.

Built for both kinds of technical writing team: the one at a software company shipping developer documentation and an API reference, and the one at a company that just needs clear user guides and internal documentation that isn't wrong.

Stack-agnostic by design. Nothing here assumes a framework, a language, a docs platform, or a publishing tool, so it travels into any organization — including a client's, where the conventions are theirs and not yours.

## Install

```shell
/plugin marketplace add Timonwa/technical-writing-skills
/plugin install tw@technical-writing-skills
```

Most skills are model-invoked — Claude reaches for them when the task matches. The five below are yours to run.

Choose a scope when installing: **local** for just this repo (the usual choice in someone else's codebase), **project** to share with collaborators, or **user** for everywhere.

## Skills

### Foundation — the two disciplines

| Skill               | What it covers                                                                                                                              |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `writing-standards` | The discipline — Diátaxis quadrants, audience-first structure, plain language, and the shared house-voice checklist every other skill links |
| `editing-standards` | Editing what exists, in five levels — substantive, accuracy, line, copy, proof — plus an AI-tell sweep                                      |

### Before you write

| Skill            | What it covers                                                                                                                              |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `docs-planning`  | What the set should contain — audience and task inventory, content audit, gap analysis, information architecture, what a release ships with |
| `sme-interviews` | Getting accurate information out of engineers and experts, and turning it into a verified draft                                             |
| `style-guide`    | Owning a style guide, terminology list and glossary — and making them enforceable rather than ignored                                       |

### What you write

| Skill            | What it covers                                                                                                               |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `developer-docs` | Docs-site pages in any framework — one job per page, link integrity, component hygiene, next-steps footers                   |
| `user-guides`    | Help-centre and user-guide content for non-technical readers — answer first, jargon earned, five page types                  |
| `internal-docs`  | Runbooks, SOPs, onboarding, decision records — and the ownership and freshness rules that keep them from going quietly wrong |
| `readmes`        | One fixed README skeleton per repo type, applied the same way every time                                                     |
| `api-reference`  | Endpoint documentation and the pages around it — auth, quickstart, errors, pagination, webhooks, versioning                  |
| `release-notes`  | Release notes and changelogs written from the reader's side, plus breaking changes and deprecation notices                   |

### The craft underneath

| Skill                 | What it covers                                                                                                     |
| --------------------- | ------------------------------------------------------------------------------------------------------------------ |
| `code-samples`        | Code examples that run, stay running, and don't teach bad practice                                                 |
| `images-and-diagrams` | Whether a visual earns its cost, screenshot capture and annotation, alt text, and diagrams as clean theme-able SVG |
| `localization`        | Writing so it survives translation, and running a documentation set across locales                                 |

## Commands

These are skills too, marked `disable-model-invocation` so only you can start them. Claude never runs them on its own.

| Command             | The question it answers                                                                                                                                       |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/tw:docs-audit`    | Is it **true**, and does it **work**? Stale claims, broken links, navigation integrity, duplication, coverage, stale images, freshness                        |
| `/tw:content-audit` | Is this the **right set**? Full inventory with keep/merge/split/rewrite/retire verdicts, duplicate clusters, orphans, and a gap analysis against reader tasks |
| `/tw:style-check`   | Does it read as **one voice**? Terminology drift with counts, capitalization and heading case, forbidden words, link text, format consistency                 |
| `/tw:doc-review`    | Is **this document** good? The five levels of edit over one file, folder or diff                                                                              |
| `/tw:ai-check`      | Does it read as **machine-written**? The specific tells, each with a rewrite                                                                                  |

The audits are report-only and never edit a page. `/tw:doc-review` and `/tw:ai-check` take `--apply` to act on approved findings.

None of them assume a codebase. Where source is available it's used as the strongest evidence; where it isn't, they run against the product, a spec, or the content itself, and say which.

## Conventions come from the project

Every skill asks for the facts it needs rather than assuming them: the product name and its vocabulary, the concept framings, the style guide if one exists, which tools the team publishes with, where drafts go. Nothing is invented, and nothing is inherited from the surrounding docs' habits.

The skills also don't assume you can see the code. Each one has a path for working from a spec, a recording, or a conversation — write only what you were told, ask for the specifics, and mark what you couldn't verify rather than filling the gap with something plausible.

## Related

- [engineering-skills](https://github.com/Timonwa/engineering-skills) — building web apps with Next.js App Router, React and Firebase. The two plugins compose; install both if you write code as well as documentation.

## License

MIT
