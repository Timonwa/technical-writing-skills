# writing-skills

Agent skills that help writers plan, write, edit and review documentation, blogs, newsletters and social posts, in any IDE or AI agent that supports [Agent Skills](https://agentskills.io).

[![License: MIT](https://img.shields.io/github/license/Timonwa/writing-skills)](LICENSE)
[![Agent Skills](https://img.shields.io/badge/Agent%20Skills-compatible-6E56CF)](https://agentskills.io)
[![GitHub stars](https://img.shields.io/github/stars/Timonwa/writing-skills?style=flat)](https://github.com/Timonwa/writing-skills/stargazers)
[![Buy Me a Coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-support-FFDD00?logo=buymeacoffee&logoColor=black)](https://buymeacoffee.com/timonwa)

## Contents

- [The skill sets](#the-skill-sets)
- [How the skills work](#how-the-skills-work)
- [Install](#install)
- [Set up a publication](#set-up-a-publication)
- [Skills](#skills)
- [Commands](#commands)
- [Contributing](#contributing)
- [Support](#support)

## The skill sets

| Set     | For                                                                                  | Install it if you write                                                                     |
| ------- | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------- |
| `tw`    | Technical writing                                                                    | Developer docs, help-centre articles, internal docs, API references, READMEs, release notes |
| `cw`    | Content writing                                                                      | Blog posts, newsletters, social posts and guest posts, on any subject                       |
| `write` | Plain language, sourced claims, code samples that run, and the machine-writing check | Nothing: it comes with `tw` and `cw`                                                        |

## How the skills work

- Your agent picks a skill when your request matches it, so you don't have to name it. Commands run only when you call them.
- To call a skill or command by name, type `$` and its name in Codex (`$readmes`, `$review blog.md`), or `/` in Claude Code (`/readmes`, or `/tw:readmes` with the plugins). In other agents, ask for it by name: "use the readmes skill". To see them all, ask your agent "which writing skills do you have?"
- A skill reads your style guide or your publication's guide first, then asks only what's still missing.
- Every file it writes — a brief, a post, a report — follows a fixed template, so each run looks the same.
- It never invents a fact, figure or quote. A gap stays marked until you fill it.

## Install

### Any IDE or AI agent

```shell
npx skills add Timonwa/writing-skills
```

[`npx skills`](https://github.com/vercel-labs/skills) asks which skills to install and which agents to install them for — Cursor, GitHub Copilot, Codex, Gemini CLI, Claude Code and many more — and installs them in the current project. Add `-g` to install them for every project. To get the latest changes, run `npx skills update`.

To skip the questions, name your agents and take every skill. For example, for Codex and Claude Code in every project:

```shell
npx skills add Timonwa/writing-skills -g -a codex -a claude-code --skill '*'
```

Without Node, copy the folders inside `plugins/write/skills/`, `plugins/tw/skills/` and `plugins/cw/skills/` into `.agents/skills/` in your project, or `~/.agents/skills/` for every project. Many agents read that folder. For the rest, use the skills folder your agent's docs name. To update, copy them again from the latest version of this repo.

### Claude Code as plugins

Claude Code can also install the sets as plugins, which keeps the `tw:` and `cw:` prefixes and runs commands as slash commands:

```shell
/plugin marketplace add Timonwa/writing-skills
/plugin install tw@writing-skills
/plugin install cw@writing-skills
```

When it asks for a scope, pick one:

- **User** — every project on your machine.
- **Project** — everyone who clones the repo.
- **Local** — this repo, for you only.

To get the latest changes, run `/plugin marketplace update writing-skills`, or turn on auto-update for `writing-skills` under **Marketplaces** in `/plugin`.

### Claude app (web or desktop)

Install the plugins once, then work in a Project for each publication (see [Set up a publication](#set-up-a-publication)).

1. Open **Customize > Plugins**.
2. Select **Add > Add marketplace > Add from a repository**, and enter `Timonwa/writing-skills`.
3. Add **tw**, **cw** or both. Each brings in **write**.
4. Turn on **Settings > Capabilities > Create and edit files**. Skills don't run without it. On Team and Enterprise plans, an admin turns it on.

Plugins are saved to your account, so they work in chat on mobile too. To get the latest changes, select **Check for updates** in **Customize > Plugins**, or turn on **Sync automatically** for the marketplace.

### ChatGPT

A custom GPT is coming soon.

## Set up a publication

`cw` writes for a blog or newsletter using what you've recorded about it: who reads it, how it sounds, how it looks. Say "set up my publication" and `cw:style-guide` builds those files with you. Leave anything you haven't decided blank, and a skill asks about it later.

```text
publications/
├── <publication>/
│   ├── profile.md              # who it's for and what it's for
│   ├── writing-guide.md        # how it sounds
│   ├── brand.md                # how it looks
│   ├── media-kit.md            # the audience facts a sponsor email cites
│   ├── sources/                # style guides you already have
│   ├── examples/               # sample covers, logos and typical pieces
│   ├── calendar.md             # one line per topic: date, formats, status, who's on it
│   ├── series/                 # one folder per series: its brief and what its parts share
│   ├── reports/                # performance reviews
│   └── topics/
│       └── <yyyy-mm>-<slug>/   # one folder per topic, e.g. 2026-12-sourdough-starter
│           ├── brief.md        # what the topic becomes, its status and who holds it
│           ├── blog.md         # the blog post
│           ├── newsletter.md   # the newsletter issue
│           ├── social.md       # the social posts
│           ├── copies.md       # copies on other blogging platforms
│           ├── sources.md      # the source log
│           ├── interviews/     # interview notes
│           ├── images/         # cover, share card and diagrams
│           └── reports/        # review, AI-writing check and SEO check
└── pitch-log.md                # every pitch and proposal, sent and received
```

**In a codebase:**

- Name the folder in the project's `AGENTS.md`, which every coding agent reads: `Publications: publications/`.
- For a folder outside the repo, add the same line to your agent's personal instructions file, such as `~/.claude/CLAUDE.md` for Claude Code or `~/.codex/AGENTS.md` for Codex.
- If nothing names a folder, the skills look for `publications/`, then ask.

**In the Claude app:**

- Make one Project per publication. Add its files, your logo, sample covers and any style guide you already have.
- Projects can't hold folders, so a topic's files are named `<topic folder>--<file>`, such as `2026-12-sourdough-starter--blog.md`.
- When the agent gives you an updated file, replace the old one. For `calendar.md`, it gives you only the line to change.
- Outside a Project, attach the files to the chat.

**For documentation,** `tw` finds the project's style guide the same way. Without one, it follows `tw:docs-standards`.

## Skills

### write

| Skill               | Use it to                                                                         |
| ------------------- | --------------------------------------------------------------------------------- |
| `writing-standards` | Check that a piece is clear, plain and backed by sources, whatever you're writing |
| `code-samples`      | Add code to a post or docs page that readers can copy and run                     |

### tw

| Skill                      | Use it to                                                                                     |
| -------------------------- | --------------------------------------------------------------------------------------------- |
| `docs-standards`           | Write docs pages that each do one thing: teach, walk through a task, list facts or explain    |
| `docs-planning`            | Decide which docs pages you need, and find what's missing from the ones you have              |
| `developer-docs`           | Write pages for a developer docs site, checked against the code                               |
| `api-reference`            | Document an API: its endpoints, errors, sign-in and getting-started pages                     |
| `user-guides`              | Write help-centre articles for the people who use a product                                   |
| `internal-docs`            | Write runbooks, team processes, onboarding guides and decision records                        |
| `readmes`                  | Write or update a project's README                                                            |
| `release-notes`            | Write release notes and changelogs that tell users what changed for them                      |
| `codebase-research`        | Find the exact settings, limits and error messages in a product's code, so the docs are right |
| `sme-interviews`           | Prepare to interview an engineer, then turn their answers into checked facts for the docs     |
| `docs-editing-standards`   | Edit a docs page someone has already written                                                  |
| `docs-style-guide`         | Create a style guide and word list for a set of docs                                          |
| `docs-images-and-diagrams` | Add screenshots, diagrams and image descriptions to docs                                      |
| `docs-seo-aeo-geo`         | Help readers find your docs through Google and AI tools like ChatGPT                          |
| `localization`             | Write docs that translate well, and keep translated versions up to date                       |

### cw

| Skill                  | Use it to                                                                                                                                         |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `content-planning`     | Decide what to write next, and plan a publishing calendar you can keep up with                                                                    |
| `content-research`     | Find reliable sources for a piece and check every fact and figure                                                                                 |
| `interviews`           | Interview anyone for a piece — an expert, a customer, a founder, someone with a story — and turn it into quotes, a Q&A, a profile or a case study |
| `article-standards`    | Write a blog post or article                                                                                                                      |
| `newsletter-standards` | Write a newsletter issue, including its subject line                                                                                              |
| `demo-project`         | Build the code project that goes with a coding tutorial                                                                                           |
| `images-and-diagrams`  | Choose photos, charts and diagrams, with the right credits and image descriptions                                                                 |
| `cover-images`         | Make a post's cover image, which also shows when the link is shared                                                                               |
| `editing-standards`    | Edit a post or newsletter issue, keeping the writer's own voice                                                                                   |
| `seo-aeo-geo`          | Help readers find your post through Google and AI tools like ChatGPT                                                                              |
| `social-media-posts`   | Write social posts to promote a piece or share news, for any platform                                                                             |
| `cross-posting`        | Republish a post on Medium, Substack, dev.to or similar, without hurting the original's ranking                                                   |
| `content-refresh`      | Update, correct, merge or remove old posts                                                                                                        |
| `pitching`             | Write pitch emails, guest post and collaboration proposals, sponsor emails and replies                                                            |
| `style-guide`          | Set up your blog or newsletter's profile, writing guide, look and media kit                                                                       |

## Commands

| Command                   | Use it to                                                                        |
| ------------------------- | -------------------------------------------------------------------------------- |
| `/write:ai-check`         | Find what makes a piece sound machine-written, with a suggested rewrite for each |
| `/tw:doc-review`          | Review a docs page before it goes live                                           |
| `/tw:docs-audit`          | Find outdated information, broken links and missing pages across your docs       |
| `/tw:content-audit`       | Decide which docs pages to keep, combine, rewrite or delete                      |
| `/tw:style-check`         | Find words and formatting that differ from page to page across your docs         |
| `/tw:docs-pr-review`      | Check the docs in a pull request against the code it changes                     |
| `/cw:review`              | Check a post or newsletter issue is ready to publish                             |
| `/cw:content-performance` | See which posts to fix first, from your analytics export                         |

- The table uses Claude Code plugin names. With a plain install, Claude Code drops the prefix (`/review blog.md`), and a command runs only when you type its `/` name. In Codex, type `$review blog.md`; in other agents, ask by name, such as "run review on blog.md". Add `--fix` the same way.
- A command reports what it finds and doesn't edit anything while it checks.
- Every command except `/cw:content-performance` takes `--fix`, which fixes only the findings you choose.
- Docs reports go to `_reports/`. Content reports go to the topic's or publication's `reports/`.
- `/tw:docs-pr-review` reports in chat, and comments on the pull request only with `--comment`.
- Nothing is ever posted, published or scheduled for you.

## Contributing

Issues and pull requests are welcome, especially for a rule that misfires on your writing or has fallen behind the standard it cites. In a pull request:

- Change one skill where you can.
- Update its `evals/evals.json`.
- Keep `SKILL.md` under 200 lines and its description under 550 characters, and give a new skill a name no other set uses. Longer material goes in the skill's `references/` folder, which the agent reads only when it needs it.
- Run the checks:

| Script              | Use it to                                                                                                                                     | Needs                       |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| `pnpm format`       | Format everything with Prettier                                                                                                               | `pnpm install` first        |
| `pnpm format:check` | Check formatting without writing                                                                                                              | `pnpm install` first        |
| `pnpm validate`     | Validate the Claude Code marketplace and plugin manifests                                                                                     | the Claude Code CLI on PATH |
| `pnpm check:skills` | Check every skill against the Agent Skills rules and the house limits: 200 lines, a 550-character description, and a name no other skill uses | Node                        |

The skills are Markdown, so there's no build step, and Prettier is the only dependency. Without installing it, run `pnpm dlx prettier --write .` instead.

## Support

If these skills save you time, [buy me a coffee](https://buymeacoffee.com/timonwa).

For web apps built with Next.js, React and Firebase, see [engineering-skills](https://github.com/Timonwa/engineering-skills).

## License

[MIT](LICENSE)
