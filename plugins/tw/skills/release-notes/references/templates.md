# Release notes templates

Fill-in templates for each document the skill writes. Replace every `<…>`; omit an empty category rather than writing "None"; keep the categories in the order shown, every release.

## `CHANGELOG.md`

The accumulating history in the repository, newest first, following [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) with Breaking changes added ahead of its six categories.

```markdown
# Changelog

All notable changes to this project are documented in this file. The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project uses [<versioning scheme>](<link explaining it>).

## [Unreleased]

### Added

- <entry>

## [<version>] - <YYYY-MM-DD>

### Breaking changes

- <entry, linking its migration guide>

### Added

### Changed

### Deprecated

### Removed

### Fixed

### Security

[Unreleased]: <repository>/compare/v<version>...HEAD
[<version>]: <repository>/compare/v<previous version>...v<version>
```

A pulled release keeps its section, marked `## [<version>] - <YYYY-MM-DD> [YANKED]`.

## Published release notes

One audience per document. No `Unreleased` section: published notes document what shipped.

```markdown
# <Product> <version> release notes

| Field     | Answer                                            |
| --------- | ------------------------------------------------- |
| Version   | <version>                                         |
| Date      | <YYYY-MM-DD>                                      |
| Audience  | <end users · developers · operators · internal>   |
| Full list | <link to the changelog or the release>            |

## Highlights

- <The change most readers care about, in one line.>
- <The second.>

## Breaking changes

## Added

## Changed

## Deprecated

## Removed

## Fixed

## Security

## Known issues

- <What's broken, who it affects, the workaround.>
```

## An entry

Each entry in this order, as short as the change allows. Who it affects appears only when it isn't everyone; what to do appears when action is needed, or as "No action needed" where the change looks alarming but isn't.

```markdown
- <What changed, from the reader's side — a fix names the symptom and the condition.> <Who it affects, if not everyone.> <What to do, or "No action needed">. [Learn more](<docs link>) ([#<number>](<pull request link>), thanks to <outside contributor>)
```

## Deprecation notice

```markdown
### <The exact endpoint, parameter, option or feature> is deprecated

- **Replaced by:** [<replacement>](<link>)
- **Stops working:** <YYYY-MM-DD or version>
- **If you do nothing:** <what happens on that date>

<A short before-and-after example of the swap.>
```

## Security entry

Published only once whoever owns disclosure agrees the timing.

```markdown
- **<CVE identifier, if any>** — <what was affected>. Severity: <severity in the project's scheme>. Affects <versions>; upgrade to <version>. <Credit to the reporter, where the policy does so.>
```

## Migration guide

One page per breaking release.

```markdown
# Migrate from <old version> to <new version>

## Who's affected

<Versions, plans, platforms or configurations — so readers can rule themselves out.>

## What changes

| Before | After |
| ------ | ----- |
| `<old call, setting or behaviour>` | `<new one>` |

## Steps

1. <A runnable step, in the order it has to happen.>

## Check it worked

<The output, response or state that proves it.>

## Roll back

<How, and what that costs.>

## Dates and help

- **Old behaviour stops:** <YYYY-MM-DD>
- **Help before then:** <channel>
```
