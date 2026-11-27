---
name: release-notes
description: >-
  Writing release notes and changelogs that tell readers what changed from their side — choosing the audience, the entry shape (what changed, who it affects, what to do, where to learn more), a consistent category set, breaking changes and migration steps, deprecation notices, describing fixes by symptom rather than cause, filtering a commit log down to what anyone would notice, and security-fix handling. Use on "release notes", "changelog", "what shipped", "announce this release", "deprecation notice", "migration guide".
---

# Release notes

Release notes answer one question: **what changed for me, and do I need to do anything?** Everything else in a release — the refactors, the internal cleanups, the commit count — is invisible to the reader by design.

They are read by people deciding whether to upgrade, people debugging something that worked yesterday, and people who asked for a fix six months ago. None of them are reading for pleasure, and none of them want the commit log.

## Voice and audience come from the writing's own guide

Before writing the notes, find the project's style guide and conventions and read them:

- **In a codebase:** the style guide and conventions the project's `AGENTS.md` names, or its contributing docs.
- **In a chat app:** the style guide in the project's files, or attached to the conversation.
- **Otherwise:** ask whether one exists before concluding there isn't one.

Voice, person, tone, terminology and formatting come from that guide. Where it settles something this skill also covers, the guide wins; where it's silent or there isn't one, `docs-standards` applies without asking.

## Ask first

Read the answers from the request, the change list, the existing `CHANGELOG.md` and the project first; ask only what's missing. Ask with the app's question tool where it has one, so the choices can be picked; otherwise as a numbered list answered by number. Offer choices where the answers are known and a short typed answer otherwise.

1. **Who are these notes for?** End users · developers integrating · operators · internal readers. One audience per document; "everyone" means two or more documents.
2. **What's being written?** A `CHANGELOG.md` entry · published release notes · a deprecation notice · a migration guide.
3. **Which version, and which release date?** A short answer — `2.1.0`, `2026-12-04`.
4. **Where's the change list?** Merged pull requests · a commit range or tags · a release tool's draft · a list in hand.
5. **Which versioning scheme?** Semantic Versioning · calendar versioning · another (name it). Default: what the project already uses.
6. **Does the release carry a breaking change, a deprecation or a security fix?** None · breaking · deprecation · security — and for security, who owns disclosure.
7. **Is the project's history public?** Yes — link each pull request and credit outside contributors · no.

## Decide the audience first

One release usually needs more than one set of notes, and merging them serves nobody:

- **End users** — what they can now do, in the product's own words. No version numbers in the body, no internal names, no API detail.
- **Developers integrating against you** — what changed in the surface they call, what breaks, what to migrate, and by when. This audience needs precision and dates above all.
- **Operators running your software** — what changed in deployment, configuration, dependencies, and resource behaviour.
- **Internal readers** — what shipped, for teams whose work depends on it.

Ask who these notes are for before writing a line. If the answer is "everyone", you have at least two documents.

## Filter before you write

The default failure is publishing the change list instead of the notes. For every change, ask: **would a reader notice this, or have to act on it?** If neither, it doesn't appear.

- **Include** — anything visible in the interface or the API; anything that changes behaviour, defaults, limits or performance in a way someone could observe; anything requiring action; fixes for problems people actually hit; security fixes; deprecations and removals.
- **Exclude** — internal refactors, test changes, dependency bumps with no visible effect, documentation edits, and work in progress behind a flag that nobody can reach.
- **A long release with three user-visible changes gets three entries.** Padding the list to look productive trains readers to skim past the entry that mattered.
- **Work from the change list, but verify it shipped.** An entry for something that was reverted or held back is the one error that costs you the reader's trust in the whole document.

## The entry

The release notes page, the `CHANGELOG.md` file, the entry, the deprecation notice, the security entry and the migration guide each have a fill-in template in [references/templates.md](references/templates.md).

Each entry, in this order, as short as the change allows:

1. **What changed, from the reader's side.** "You can now export a report as CSV", not "Added `CsvExportService`". Lead with the capability or the behaviour, not the component.
2. **Who it affects**, when it isn't everyone — a plan, a platform, a configuration, a version range.
3. **What they need to do**, when anything is required. Say "no action needed" explicitly where a change looks alarming but isn't.
4. **Where to learn more** — a link to the documentation page, which is updated before the notes publish, not after.

Rules that hold across all of them:

- **Describe a fix by the symptom, not the cause.** "Fixed an issue where uploads over 10 MB failed silently" — the reader recognizes their own problem in that sentence. "Fixed a null pointer in the upload handler" tells them nothing about whether it was theirs.
- **Be specific about conditions.** A fix "in some cases" is unusable; name the case.
- **Plain and factual, not promotional.** Release notes are reference material. No "we're thrilled", no "game-changing", no exclamation marks per entry.
- **Present tense, active voice, and the reader as "you".**
- **One entry per change.** A single entry covering four things can't be scanned or linked to.
- **Link the issue or pull request** behind each entry where the project's history is public, and credit outside contributors by name (common practice in open source).

**Open each release with two or three lines of highlights** — the changes most readers care about — above the categories, so someone skimming knows in seconds whether to read on (common practice).

## Categories

Use a fixed set in a fixed order, every release. Readers learn where to look and stop reading the rest.

**Six of these are the [Keep a Changelog](https://keepachangelog.com/) categories** — Added, Changed, Deprecated, Removed, Fixed, Security. That spec is the de facto standard for release history, and following it means readers arrive already knowing the shape. **Add a Breaking changes category ahead of them**: Keep a Changelog leaves breaking changes inside Changed and Removed, and a reader who misses one has an outage.

In the changelog file, keep an `Unreleased` section at the top to collect changes as they merge, and move its entries into the version's section at release ([Keep a Changelog](https://keepachangelog.com/en/1.1.0/)). Published release notes leave it out: they document what shipped. Where a security entry has a CVE identifier, lead with it.

| Category         | What belongs in it                                                                |
| ---------------- | --------------------------------------------------------------------------------- |
| Breaking changes | Anything that stops working, or works differently, without action from the reader |
| Added            | New capabilities                                                                  |
| Changed          | Existing behaviour that's different but not breaking                              |
| Deprecated       | Still works, scheduled to stop                                                    |
| Removed          | Gone, having previously been deprecated                                           |
| Fixed            | Problems resolved                                                                 |
| Security         | Vulnerabilities addressed                                                         |

- **Omit empty categories** rather than writing "None".
- **Breaking changes go first**, always, however small the list — a reader who misses one has an outage.
- **Don't invent a category per release.** The value of the set is that it's the same every time.

## Breaking changes

These carry the highest cost of being unclear, and get the most space:

- **State plainly what stops working**, and what the reader sees when it does — the error, the status, the failure mode. People search for the symptom, not for the release.
- **Give the migration steps**, concretely, with before and after. A breaking change without a migration path is an announcement of a problem, not a release note.
- **Name the dates** — when it takes effect, and when the old behaviour stops being supported.
- **Say who's affected**, so readers can rule themselves out quickly.
- **Explain briefly why**, when it helps someone accept the work. One sentence.
- **Link a full migration guide** rather than inlining it, when it's substantial. The note announces; the guide instructs.

### The migration guide

One page per breaking release, in this order:

1. **Who's affected** — the versions, plans, platforms or configurations, so readers can rule themselves out.
2. **What changes**, with before and after side by side: the old call, setting or behaviour, and the new one.
3. **The steps**, numbered, in the order they have to happen, each runnable.
4. **How to verify** the migration worked — the output, response or state that proves it.
5. **How to roll back** if it didn't, and what that costs.
6. **The dates** — when the old behaviour stops, and where to get help before then.

## Deprecations

A deprecation notice answers four things, and readers will hunt for each:

- **What is deprecated**, exactly — the specific endpoint, parameter, option or feature.
- **What replaces it**, with a link and enough of an example to start the swap.
- **When it stops working** — a date or a version, not "in a future release".
- **What happens if you do nothing** on that date.

Announce a deprecation as early as you can, repeat it in every release until removal, and announce the removal itself when it lands.

## Security entries

- **Coordinate with whoever owns disclosure** before publishing. The timing of a security note is a decision that isn't the writer's alone.
- **Say enough for a reader to judge urgency** — what was affected, the severity, which versions, and what to upgrade to.
- **Don't publish exploitation detail** ahead of people being able to patch.
- **Credit reporters** where your policy does so, and follow whatever identifier scheme you use consistently.

## Publishing

- **Name the file `CHANGELOG.md`** in a repository, and **write dates as `YYYY-MM-DD`**, which sorts correctly and reads the same everywhere ([Keep a Changelog](https://keepachangelog.com/en/1.1.0/)).
- **Make every version heading linkable**, usually to the diff between it and the previous release (`[1.1.2]: …/compare/v1.1.1...v1.1.2`).
- **Mark a pulled release, never delete it**: `## [0.0.5] - 2014-12-13 [YANKED]` — the loud tag is the point.
- **State the version and the date** on every set of notes, and stick to one versioning scheme with a link explaining it — [Semantic Versioning](https://semver.org/) is the common choice and says what a major, minor and patch bump each promise. Don't invent a scheme in the notes.
- **Keep an accumulating history** in one place, newest first, all versions reachable. Readers arrive by searching for a symptom and need old entries.
- **Make it subscribable** if you can — the audience that most needs breaking changes is the one least likely to visit a page.
- **Link each entry's documentation**, and make sure that page is already updated when the notes go out.
- **Document what shipped, not what's planned.** A roadmap item in release notes reads as available and generates tickets.
- **A "known issues" section is worth more than it costs** — naming the thing that's broken saves the support conversation, and hiding it doesn't make anyone not notice.
- **Don't rewrite history.** Correct a published entry by adding a correction with its date, rather than silently editing it.

## Boundaries

- **Reports belong to their commands:** a review of one document is `/docs-review` and a review of a docs pull request is `/docs-pr-review`. This skill never writes a report or runs a check itself. Run the command, which writes its report from its own template.
- **The documentation pages the notes link to** — the feature's how-to, its reference entry, its migration guide → `developer-docs`, `user-guides`, `api-reference`.
- **A substantial migration guide** is its own page, shaped as above; the note links it, and the how-to pages it points to are → `developer-docs`.
- **The voice rules every document obeys** — sentences, claims, concrete over vague, formatting, never hard-wrap → `docs-writing-standards`; the documentation voice, prose before code and the four document types → `docs-standards`.
- **Generating and categorizing the raw change list** from version control or a release tool is an engineering task; this skill covers what the published notes say.
- **Launch announcements, blog posts and marketing copy** about a release are a different document with a different goal. Release notes stay factual; link the announcement rather than becoming one.
- **Internal "what shipped" summaries** for other teams → `internal-docs`.
