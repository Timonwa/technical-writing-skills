# technical-writing-skills

Claude Code skills for technical writing: 6 skills and one audit command covering developer documentation, docs-site pages, READMEs, help-centre guides, API references, and prose editing.

Stack-agnostic by design. Nothing here assumes a framework, a language, or a docs platform, so it travels into any codebase — including a client's, where the engineering conventions are theirs and not yours.

## Install

```shell
/plugin marketplace add Timonwa/technical-writing-skills
/plugin install tw@technical-writing-skills
```

Skills are model-invoked — Claude reaches for them when the task matches. The audit is yours to run: `/tw:docs-audit`.

Choose a scope when installing: **local** for just this repo (the usual choice in someone else's codebase), **project** to share with collaborators, or **user** for everywhere.

## Skills

| Skill                   | What it covers                                                                                            |
| ----------------------- | --------------------------------------------------------------------------------------------------------- |
| `writing-standards`     | The discipline — Diátaxis quadrants, audience-first structure, plain language, and the shared house voice |
| `docs-standards`        | Docs-site pages in any framework — one job per page, link integrity, MDX hygiene, next-steps footers      |
| `readme-standards`      | One fixed README skeleton per repo type, applied the same way every time                                  |
| `help-center-standards` | Help-centre guides for non-technical readers — answer first, jargon earned, five page types               |
| `api-docs`              | An OpenAPI reference generated from a route registry, plus the group-by-group drift audit                 |
| `prose-editing`         | Focused editing passes over copy that already exists, plus an AI-tell sweep                               |

## Audit command

| Command          | What it checks                                                                                                                    |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `/tw:docs-audit` | Stale claims against the code, broken links and anchors, navigation integrity, duplicated content, README accuracy, doc freshness |

Report-only — it never edits a page.

## Conventions come from the project

Every skill asks for the facts it needs rather than assuming them: the publication name, the product vocabulary, the concept framings, where drafts go. Nothing is invented, and nothing is inherited from the surrounding docs' habits.

## Related

- [engineering-skills](https://github.com/Timonwa/engineering-skills) — building web apps with Next.js App Router, React and Firebase. The two plugins compose; install both if you write code as well as documentation.

## License

MIT
