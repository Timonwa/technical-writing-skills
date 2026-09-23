# technical-writing-skills

Twenty Claude Code skills for technical writers — developer docs, user guides, internal docs, API references, release notes.

Documentation work is mostly not typing. It's deciding what the set should contain, getting the facts out of the people who have them, verifying a default before writing it down, and finding the page that stopped being true three releases ago. These skills cover that whole job, not just the drafting part.

Fifteen of them are model-invoked: Claude loads one when the work matches, so asking for a runbook pulls in the runbook standard without you naming it. The other five are commands you run deliberately over content that already exists.

Nothing here assumes a framework, a language, a docs platform, or a publishing tool. The rules are about documents, so they work the same in a Markdown repo, a help-desk tool, a knowledge base, or someone else's codebase where the conventions belong to the client.

## Install

Run these in Claude Code:

```shell
/plugin marketplace add Timonwa/technical-writing-skills
/plugin install tw@technical-writing-skills
```

Pick a scope when it asks. **Local** installs for the current repo only, which is usually right when you're working in a codebase that isn't yours. **Project** shares the skills with everyone who clones the repo. **User** makes them available everywhere.

## Deciding what to write

| Skill               | What it's for                                                                                                                |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `docs-planning`     | Reader tasks before feature lists — audiences, the real questions from support and search, gap analysis, and what goes where |
| `style-guide`       | The style guide, terminology list and glossary as decision records, and how to make them enforceable instead of ignored      |
| `writing-standards` | Which of the four Diátaxis types a document is, who it serves, and the voice checklist every other skill in the set links to |

## Finding out what's true

| Skill               | What it's for                                                                                                                       |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `sme-interviews`    | Getting what an engineer knows onto the page — preparing from the artifacts, arriving with a wrong draft, protecting their time     |
| `codebase-research` | Hunting the exact default, limit, UI label and error string in a repo you didn't write, and the traps that produce confident errors |

## Writing the document

| Skill            | What it's for                                                                                                          |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `developer-docs` | A docs-site page in any framework — one job per page, verified against source, links that survive a move               |
| `user-guides`    | Help-centre guides for end users — answer first, plain words, five page types, explain rather than sell                |
| `internal-docs`  | Runbooks, SOPs, onboarding and decision records, with the owner and review date that stop them rotting in place        |
| `api-reference`  | Endpoints, parameters, status codes and errors, plus the auth, quickstart, pagination and versioning pages around them |
| `readmes`        | A fixed skeleton per repo type — library, app, CLI, monorepo, package — and a quickstart somebody actually ran         |
| `release-notes`  | What changed for me, and do I have to do anything — separated by audience, with breaking changes and deprecations      |

## The parts that aren't prose

| Skill                 | What it's for                                                                                              |
| --------------------- | ---------------------------------------------------------------------------------------------------------- |
| `code-samples`        | Samples that run on arrival, don't model insecure practice, and get tested so they don't quietly rot       |
| `images-and-diagrams` | Whether a visual earns its cost at all, then capture, annotation, alt text, and diagrams as theme-able SVG |
| `localization`        | Source text that survives translation, and running a set across locales without half of it going stale     |
| `editing-standards`   | Five single-dimension passes over a draft that already exists — substantive, accuracy, line, copy, proof   |

## Checking what already exists

Five commands, each marked `disable-model-invocation`, so Claude never starts one on its own. They take a path and answer one question each.

| Command             | The question                                                                                                         |
| ------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `/tw:docs-audit`    | Is it true and does it work? Claims the product outgrew, dead links, unreachable pages, contradictions, stale images |
| `/tw:content-audit` | Is this the right set? Every page inventoried with a keep, merge, split, rewrite or retire verdict, plus the gaps    |
| `/tw:style-check`   | Does it read as one voice? One concept called three different things across two hundred pages, and the other drift   |
| `/tw:doc-review`    | Is this document good? The five levels of edit over one file, a folder or a diff                                     |
| `/tw:ai-check`      | Does it read as machine-written? The specific tells, each with a rewrite — never a verdict on provenance             |

Each writes a report to `_reports/<name>.md` and tells you the path. A finding carries a severity, the reader it breaks, and a specific fix; the report closes with a scorecard and how the score moved since last time.

None of them edit anything while auditing — editing tools are withheld for that turn. When the report is written, the command lists the findings by ID and asks which you want fixed, so nothing gets silently improved. Passing `--fix` skips the audit entirely and works from the report already on disk, which is how you come back to findings you read yesterday without renumbering them.

They also don't require a codebase. Where source is available it's the strongest evidence and gets used; where it isn't, the audit works from the running product, a spec, or the content itself, and says which in the report.

## What the skills won't do

**Invent a fact to fill a gap.** No access to the code is not permission to guess. Working from a spec, a recording, or a conversation, the skills write only what they were told, ask for the exact names and values, and leave anything unverified visibly marked rather than plausible.

**Assume your product.** The product name, its vocabulary, the concept framings, the support channel, the style guide if one exists — each is asked for, never inherited from the surrounding pages.

**Copy the habits of the docs around them.** When an existing page breaks the standard, the skill corrects it rather than matching it. Matching whatever is already there is how drift spreads.

## Repo layout

```
skills/<skill-name>/
  SKILL.md        # the skill itself
  references/     # longer material, loaded only when needed
  evals/          # prompts and expected behaviour, used when revising the skill
.claude-plugin/   # plugin and marketplace manifests
```

Rules shared across skills live in exactly one file and get linked, never restated: [house-voice.md](skills/writing-standards/references/house-voice.md) holds the voice checklist every document obeys, and [ai-writing-detection.md](skills/editing-standards/references/ai-writing-detection.md) holds the machine-written tells.

## Contributing

Issues and pull requests are welcome. A rule that misfires in your organization is worth reporting, and so is a skill that assumes something it has no business assuming.

| Script                 | What it does                                  |
| ---------------------- | --------------------------------------------- |
| `npm run format`       | Format everything with Prettier               |
| `npm run format:check` | Check formatting without writing              |
| `npm run validate`     | Validate the plugin manifests and skill files |

Keep a change to one skill where you can, and run `npm run validate` before opening a pull request.

## Related

- [engineering-skills](https://github.com/Timonwa/engineering-skills) — the same idea for building web apps with Next.js App Router, React and Firebase. The two plugins compose; install both if you write code as well as documentation.

## License

[MIT](LICENSE)
