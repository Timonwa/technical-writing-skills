# writing-skills

Forty-one Claude Code skills for writers, in three plugins: `write` for the craft every writer shares, `tw` for technical writing and `cw` for content writing.

Most of what goes wrong in writing isn't the sentences. It's a claim nobody checked, a figure lifted from a summary instead of the study, a page that mixes a tutorial with a reference, a tutorial whose code no longer runs, a headline the piece doesn't deliver, a voice that drifts until the archive reads like five writers. These skills hold the rules that prevent those — where a claim comes from, what a page is for, how a piece is edited and reviewed, how it's found — and the commands check existing writing against them.

Thirty-two of them are model-invoked: Claude loads one when the work matches, so asking for a newsletter issue pulls in the newsletter standard without you naming it. The other nine are commands you run deliberately over writing that already exists — audits, reviews and checks.

**The skills hold the craft; the voice is always yours.** Documentation follows the project's own style guide, and content follows the publication's writing guide and profile, whatever the subject: software, food, finance, careers. Where neither exists, documentation falls back to `tw:docs-standards` and a content skill asks who the reader is before writing. Each rule follows the current published standard — Google's and Microsoft's style guides, GOV.UK, WCAG, the SPJ Code of Ethics, Google Search Central — not one writer's habits.

## Install

**In the Claude app (web or desktop):**

1. Open **Customize > Plugins**, then **Add > Add marketplace**, and enter `Timonwa/writing-skills`.
2. Add **cw** for a blog or newsletter, **tw** for documentation, or both. Each brings in **write**.
3. Skills need file creation turned on: **Settings > Capabilities > Code execution and file creation** (on Team and Enterprise plans, an admin turns it on).

Installed plugins are saved to your account, so they also work in chat on mobile.

**In Claude Code:**

```shell
/plugin marketplace add Timonwa/writing-skills
/plugin install cw@writing-skills
/plugin install tw@writing-skills
```

Pick a scope when it asks. **User** makes the skills available everywhere, which suits a writer working across projects. **Project** shares them with everyone who clones a repo. **Local** installs for the current repo only.

## Your publication's guide

`cw` writes for a publication — a blog, a newsletter, or both — and reads two files about it before it writes, edits or reviews anything:

- **`profile.md`** — who it's for, what it's for, and what a piece should make a reader do.
- **`writing-guide.md`** — how it sounds: voice, person, titles, openings, recurring parts, formatting.

**In the Claude app:**

1. Create a **Project** for each blog or newsletter.
2. In that Project, say "set up my publication". `cw:style-guide` asks you about it, or reads a style guide or past pieces you paste in, and gives you `profile.md` and `writing-guide.md`. Anything you haven't decided stays `unset` rather than guessed.
3. Add both files to the Project's files.
4. Write from that Project: "plan my next posts", "edit this draft", "turn this into LinkedIn posts". When Claude gives you an updated file, replace the old one in the Project.

Outside a Project, attach the two files to the chat, or Claude asks for them.

**In a codebase:** keep one folder per publication, ideally in a private repository, and name it in the project's `AGENTS.md`, which every coding agent reads:

```text
Publications (profile, writing guide, sources per publication): publications/
```

For a folder kept outside the repo, put the same line in your personal agent instructions, such as `~/.claude/CLAUDE.md`. A `CLAUDE.md` can import `AGENTS.md` with `@AGENTS.md`. Where nothing names a folder, the skills look for `publications/` in the project, then ask.

**For documentation,** the same applies to the project's style guide: in the app, put it in the Project's files; in a repo, name it in `AGENTS.md`. With no style guide, `tw` uses the documentation defaults in `tw:docs-standards`.

## Skills

### write — every writer

| Skill               | What it's for                                                                                                                                                |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `writing-standards` | The rules under any piece — the reader named first, plain language, claims sourced and credited, certainty that matches the evidence, structure for scanning |
| `code-samples`      | Code in a docs page or a tutorial that runs as shown — elided with a comment, placeholders, expected output, borrowed code credited                          |

### tw — technical writing

| Skill                 | What it's for                                                                                                         |
| --------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `docs-standards`      | The rules every docs page follows — one Diátaxis need per page, the documentation voice, procedures, accessible pages |
| `docs-planning`       | What a docs set should contain — reader tasks, an audit of what exists, gaps, structure and file naming               |
| `developer-docs`      | Docs-site pages in any framework — verified against source, one focus per page, links that survive a move             |
| `api-reference`       | Endpoints, parameters, status codes and errors, and the auth, quickstart and versioning pages around them             |
| `user-guides`         | Help-centre guides for end users — answer first, plain words, the page types a help centre needs                      |
| `internal-docs`       | Runbooks, SOPs, onboarding and decision records, with the owner and review date that keep them true                   |
| `readmes`             | A README per repo type — library, app, CLI, monorepo, package — with a quickstart somebody ran                        |
| `release-notes`       | What changed from the reader's side, by audience, with breaking changes and deprecations first                        |
| `codebase-research`   | The exact default, limit, label and error string in a codebase you didn't write                                       |
| `sme-interviews`      | Getting what an engineer knows onto the page, verified, without wasting their time                                    |
| `editing-standards`   | Editing an existing docs page in focused passes, down the five levels of edit                                         |
| `style-guide`         | A docs set's style guide, terminology list and glossary — a base guide plus its departures                            |
| `images-and-diagrams` | Screenshots, annotation, diagrams as SVG and alt text, and whether a visual earns its upkeep                          |
| `seo-aeo-geo`         | Docs readers find — titles from the task or error they search, versioned-docs canonicals, site search, AI answers     |
| `localization`        | Source text that survives translation, and a docs set kept in step across locales                                     |

### cw — content writing

| Skill                  | What it's for                                                                                                                         |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `content-planning`     | What to write next — ideas from reader questions and search demand, scored against the publication's purpose, in a cadence that holds |
| `content-research`     | Original sources over summaries, every figure traced to its table, AI-supplied citations checked                                      |
| `sme-interviews`       | Interviewing a source — ground rules, consent, quoting exactly, fairness, checking facts back                                         |
| `article-standards`    | A published piece of any kind — whether it earns its place, its structure by reader intent, trust and disclosure                      |
| `newsletter-standards` | An email issue — one narrative, the subject line and preview, one call to action, the sender rules email carries                      |
| `demo-project`         | A tutorial's companion repo — branches or tags per step, pinned versions, a clean clone that runs, its README                         |
| `images-and-diagrams`  | Photos of the real thing, licences and credits, honest charts, diagrams, and images in email                                          |
| `cover-images`         | A piece's cover and the card its link shows — one file that survives every platform's crop                                            |
| `editing-standards`    | Editing a piece in the author's voice, down the five levels of edit, with narrative craft                                             |
| `seo-aeo-geo`          | Getting a piece found, chosen and cited — title tag, slug, quotable claims, byline and dates                                          |
| `social-media-posts`   | One piece turned into distinct posts by angle, sized for each platform                                                                |
| `cross-posting`        | Republishing on dev.to, Hashnode, Medium or a partner site so the original stays the one that ranks                                   |
| `content-refresh`      | Keeping a published piece true — honest dates, visible correction notes, merging and retiring                                         |
| `pitching`             | Writing for another publication — the outlet, the pitch and outline, the fee, rights and kill fee                                     |
| `style-guide`          | A publication's writing guide and profile, built from what exists and kept current                                                    |

## Commands

Nine commands, each marked `disable-model-invocation`, so Claude never starts one on its own.

| Command                   | The question                                                                                                |
| ------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `/write:ai-check`         | Does this read as machine-written? The specific tells, each with a rewrite, never a verdict on who wrote it |
| `/tw:doc-review`          | Is this document right? The five levels of edit over one page, a folder or a diff                           |
| `/tw:docs-audit`          | Is the docs set true, and does it work? Stale claims, dead links, contradictions, missing coverage          |
| `/tw:content-audit`       | Is this the right set of pages? Every page with a keep, merge, split, rewrite or retire verdict             |
| `/tw:style-check`         | Does the docs set read as one voice? Terms, capitalisation and mechanics that drifted                       |
| `/tw:docs-pr-review`      | Are the docs in this pull request true of what it changes? Claims checked, changes left undocumented        |
| `/cw:review`              | Is this piece ready to publish? The five levels of edit against the publication's guide, with blockers      |
| `/cw:style-check`         | Does the archive read as one writer? Drift across posts and back issues, measured against the guide         |
| `/cw:content-performance` | What should change, given how the pieces did? An analytics export turned into ranked fixes                  |

## How the commands behave

Each writes its report to `_reports/` — `ai-check.md`, `doc-review.md`, `docs-audit.md`, `content-audit.md`, `docs-style-check.md`, `content-review.md`, `content-style-check.md`, and a dated `content-performance-<date>.md` — except `/tw:docs-pr-review`, which reports in chat and posts to the pull request only with `--comment`.

The reviews and audits verify a finding before reporting it, rank it by severity (a blocker stops publishing), and give a specific fix for each. `/tw:docs-audit` marks anything it can't prove from the source as "needs confirmation". The style checks separate findings, where the writing drifts from what the guide settles, from proposals where the guide is silent. Reports close with a scorecard and, on a re-run, how the score moved since the last one.

None of them edit while they check: the Edit tool is withheld for the run, and `/cw:content-performance` never edits a page. Every command except `/cw:content-performance` takes `--fix`, which works from the report already on disk: it lists the findings, asks which to fix, fixes only those, and re-scores.

## What the skills won't do

**Invent a fact.** A figure, a quote or a publication's convention comes from its source or its guide. A field nobody has decided stays `unset`, and the skill asks.

**Impose a voice.** Person, tone, humour and formatting come from the project's style guide or the publication's writing guide. A first-person story or a joke the guide allows is not a defect.

**Copy the habits of the writing around them.** A new piece matches the established terms, not the shape or voice of pages that have drifted.

**Edit while reviewing.** A review or audit reports; changes happen only when you choose which findings to fix.

**Post, publish or schedule for you.** Social posts are written to a file and summarised in chat, and a pull-request review is posted only when you ask.

## Repo layout

```text
plugins/<plugin>/                 # write, tw, cw
  .claude-plugin/plugin.json      # the plugin's manifest and its dependency on write
  skills/<skill-name>/
    SKILL.md                      # the skill or command itself
    references/                   # longer material, loaded only when needed
    evals/evals.json              # prompts and expected behaviour, used when revising the skill
.claude-plugin/marketplace.json   # the marketplace listing all three plugins
```

## Contributing

Issues and pull requests are welcome. A rule that misfires on your writing is worth reporting, and so is one that's fallen behind the standard it cites.

Each skill is a Markdown file, so there's no build step. The scripts only format and check them:

| Script              | What it does                                  | Needs                       |
| ------------------- | --------------------------------------------- | --------------------------- |
| `pnpm format`       | Format everything with Prettier               | `pnpm install` first        |
| `pnpm format:check` | Check formatting without writing              | `pnpm install` first        |
| `pnpm validate`     | Validate the marketplace and plugin manifests | the Claude Code CLI on PATH |

The repo uses [pnpm](https://pnpm.io), and Prettier is its only dependency — install it if you want the format scripts, or run `pnpm dlx prettier --write .` instead.

Keep a change to one skill where you can, update its evals with it, and run `pnpm validate` before opening a pull request.

## Related

- [engineering-skills](https://github.com/Timonwa/engineering-skills) — the same idea for building web apps with Next.js App Router, React and Firebase.

## License

[MIT](LICENSE)
