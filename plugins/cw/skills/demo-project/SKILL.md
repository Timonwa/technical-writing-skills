---
name: demo-project
description: >-
  The companion code repository for a tutorial or article — planning it with the piece, the starter and final branches or a tag per step that match the steps exactly, pinned versions and a lockfile, a clean clone that installs and runs with a smoke check, scheduled CI and dependency updates that catch drift, secrets kept out, a licence readers can reuse, staying in step with the piece, and the README and GitHub About. Use on "demo repo", "companion repo", "tutorial code repo", "starter and final branch".
argument-hint: "[tutorial URL]"
---

# Demo project

The repository a reader clones to follow a tutorial or run an article's code. It works when a reader with a clean machine can clone it, run what the piece says, and get what the piece shows — today and a year from now.

## Voice and audience come from the writing's own guide

Before applying this skill, find the publication's `profile.md` and `writing-guide.md` and read them:

- **In a codebase:** the folder the project's `AGENTS.md` names, or, for a guide kept outside the repo, the folder the user's personal agent instructions name (such as `~/.claude/CLAUDE.md`); otherwise the project's `publications/` folder.
- **In a chat app:** the project's files (a Claude Project's knowledge, or the equivalent elsewhere), or files attached to the conversation.
- **Otherwise:** ask for them.

Voice, person, tone, terminology, formatting choices and who the reader is come from that guide, never from this skill.

- Where the guide settles something this skill also covers, the guide wins.
- Where there's no guide, ask who the reader is and what the piece is for before writing, and offer to build one with `cw:style-guide`.

When a guide changes: in a codebase, save the file where it was found; in a chat app, give the user the updated file to replace in the project. Never write inside the installed plugin.

## Ask first

Read the answers from the topic's `brief.md`, `profile.md` and the repo itself (`git remote get-url origin`, the version files, the lockfile) first; ask only what's missing. Ask with the app's question tool where it has one, so the choices can be picked; otherwise as a numbered list answered by number. Offer choices where the answers are known and a short typed answer otherwise; where the profile has a default, show it and ask whether to use it. Record each answer in the `brief.md` field it belongs to — the **What this topic becomes** table or a row of **The brief** — and an answer with no field under **Notes for whoever picks it up next**, so the next skill doesn't ask again.

1. **Which topic folder is the repo for?** The folder name under `topics/`.
2. **Whose repo is it?** the owner's own · a third party's (whose).
3. **Which branch model?** single branch · starter and final · a tag or branch per step.
4. **What runtime and package manager does it use?** Short answer: the runtime with its version, and the package manager.
5. **Does it need any account or key to run?** none · free tier or test-mode key (which service) · paid account (which service).
6. **Which licence?** MIT · another (which) · the publication's or client's policy.
7. **Where is it hosted?** Short answer: the account or organisation. Default: the git remote.

## Work in the topic folder

The repo is one of the things a topic can become: the brief's **What this topic becomes** table has a Demo project row, with no file in the topic folder. The repo stays its own repository, never inside the publication's folder.

- **Claim it first.** Read [`brief.md`](../style-guide/references/publication-template/topics/_template/brief.md): if **Held by** names someone else and the status isn't `paused`, leave it and say so. Otherwise set **Held by** and the date, and clear it when you stop. Where the table has no Demo project row, say so and ask whether to add one.
- **Fill only the Demo project row**: the repository in Where it goes, its status, and in Link the repo and the tag the piece is written against, so whoever picks the topic up next finds it. The topic's line in `calendar.md` changes only if the row's status changes the topic's.
- **In a chat app**, the brief is `<topic folder>--brief.md`; hand back only its changed Demo project row.

## Resolve the owner first

A demo repo is either the **owner's own** or written **for a third party** (a client, another author, a company). That decides every name and link it promotes.

- **The owner's own** — take the author name, publication URL and audience from the publication's `profile.md`, and the GitHub handle from `git remote get-url origin`. Ask only for what neither has. Where the publication has no folder yet, build one with `cw:style-guide`.
- **A third party's** — their name and links everywhere, never the owner's.

## Plan the repo with the piece

- **One repository per tutorial**, or one folder per piece in a samples repository when a publication runs many small examples. A reader should clone only what the piece needs.
- **Decide what the reader clones before writing step one**, and write the steps against it: the starter state, the commands, the file names.
- **The code in the piece and the code in the repo are the same code.** Every snippet in the piece exists, character for character, at the point in the repo the piece says it does (`write:code-samples`, Code in a tutorial).

## Branches and tags

Pick one model and keep it for the whole repo:

- **Single branch** — the finished code, for an article that shows rather than builds.
- **Starter and final** — a starter branch with what the reader begins from, and the finished code on the default branch. The starter builds and runs, with the work the tutorial covers left out.
- **A tag or branch per step** — for a long build-along or a series: `step-1`, `step-2`… or one branch per part, each matching the piece's step or part exactly, so a reader who falls behind can check out the step they're on.

Name branches and tags after what the piece calls them. Never rewrite a branch or move a tag the published piece links to; publish a new one and update the link instead.

## A clean clone runs

- **Pin the runtime** in the file its tools read: `.nvmrc` or `.node-version`, `.python-version`, `.tool-versions`, a `rust-toolchain.toml`. Declaring `engines` in `package.json` documents the range but is advisory unless the installer is set to enforce it ([npm](https://docs.npmjs.com/cli/v11/configuring-npm/package-json)).
- **Commit the lockfile.** npm says `package-lock.json` "is intended to be committed into source repositories" so every install gets the same dependency tree ([npm](https://docs.npmjs.com/cli/v11/configuring-npm/package-lock-json)); the same holds for `pnpm-lock.yaml`, `yarn.lock`, `poetry.lock` and `Cargo.lock` in an application.
- **Install and run in the commands the piece gives**, and nothing else: no global installs it doesn't mention, no step only the author's machine has.
- **A smoke check proves it runs**: a test, a script, or a build that exits non-zero when the demo is broken. The README names the command.
- **Before publishing, run the piece from a fresh clone on a clean environment** — a new directory, a container or a CI job — copying commands from the rendered piece, not from memory.
- **Offer a way in without local setup** where the stack allows: a dev container definition (`.devcontainer/devcontainer.json`) that GitHub Codespaces can open ([GitHub Codespaces](https://docs.github.com/en/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers)), or a link that opens the repo in an online editor. A reader who can't install the toolchain can still follow along (common practice).

## It keeps running

Code rots as dependencies and platforms move on. Catch it before readers do:

- **Run the smoke check in CI** on every push and on a schedule. A scheduled GitHub Actions workflow can run as often as every 5 minutes; a weekly or monthly run is plenty for a demo. In a public repository, scheduled workflows are disabled after 60 days with no repository activity, so a quiet demo repo needs its schedule re-enabled or another trigger ([GitHub Actions](https://docs.github.com/en/actions/writing-workflows/choosing-when-your-workflow-runs/events-that-trigger-workflows)).
- **Turn on dependency updates** with a `dependabot.yml` committed in `.github/` ([GitHub](https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates)) or an equivalent bot, on a slow schedule, with updates grouped into one pull request per run so the bot stays quiet ([Dependabot groups](https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file)). An update that changes what the piece shows is merged only together with an update to the piece.
- **A failing run means the piece may be wrong**, not only the repo. Check the piece's steps against the fix.

## Secrets and environment

- **No real key, token or password is ever committed**, including in history. If one was, revoke it at the issuer first, then remove it.
- **`.env.example` lists every variable** the code reads, with no values, and the README says to copy it to `.env`. `.env` is in `.gitignore`.
- **Placeholders match the piece**: the same names and the same convention in the article, the README and `.env.example` (`write:code-samples` for the convention).
- **Free tiers and test modes first**: a reader shouldn't need a paid account or a production key to finish the tutorial; where one is needed, the piece says so before step one.

## Licence and credit

- **Add a licence file.** Without one, GitHub notes that default copyright applies and "no one may reproduce, distribute, or create derivative works from your work" — so readers can't legally reuse the demo's code ([GitHub](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository)). A permissive licence such as MIT suits code meant to be copied; [choosealicense.com](https://choosealicense.com) compares them. The publication's or client's policy wins where it has one.
- **Borrowed code keeps its licence and its credit** — a comment at the code, and a line in the README (`write:code-samples`, Borrowed code). Assets — images, fonts, data — carry their own licences and credits too.

## In step with the piece

- **The piece links the exact state it was written against**: a tag or a commit, not only the branch, so a reader can always get the version the steps describe.
- **Change both together.** An update to the repo that changes a step, an output or a screenshot is an update to the piece, and the reverse; publish them at the same time.
- **A "Tested with" line** in the README — the runtime and key dependency versions and the date it was last run end to end — tells a reader how fresh it is.
- **Retiring a piece retires its repo**: archive it so it becomes read-only and says so on GitHub ([GitHub](https://docs.github.com/en/repositories/archiving-a-github-repository/archiving-repositories)), and point the README at the replacement if there is one. Updating or retiring the piece itself → `cw:content-refresh`.

## README and GitHub About

Each branch gets a README that links the piece in its first screenful, says which branch or step it is, and gives Getting started, Tested with, Author and License. Write them, and the About metadata, by the workflow and templates in [references/readme.md](references/readme.md). Infer from the repo before asking, ask the gaps in one batch, and write each other branch's README as `README.<branch>.md` rather than switching branches.

## Before it ships

- [ ] The branch or tag model matches the piece's steps, and the piece links a tag or commit.
- [ ] Runtime pinned in its version file; lockfile committed.
- [ ] A fresh clone installs, runs and passes the smoke check with only the piece's commands.
- [ ] CI runs the smoke check on push and on a schedule; dependency updates are on.
- [ ] No secrets in the repo or its history; `.env.example` complete; placeholders match the piece.
- [ ] A licence file; borrowed code and assets credited.
- [ ] README per branch with Tested with and License; `github-about.md` written for the user to paste.
- [ ] The topic's `brief.md` Demo project row links the repo and its tag.

## Boundaries

- **Code shown in the piece** — complete, runnable, elided correctly → `write:code-samples`.
- **Writing the tutorial itself** → `cw:article-standards`. **Tightening it** → `cw:editing-standards`.
- **A README for a project that isn't a tutorial's companion** — a library, an app, a CLI → `tw:readmes`.
- **The author's name, links and audience** → the publication's `profile.md`; never put a third party's details into the owner's profile.
