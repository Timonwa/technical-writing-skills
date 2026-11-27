# Style guide file — template

The docs set's style guide, kept where the project keeps its docs conventions and named in `AGENTS.md`. Every decision row is present; one nothing has settled yet reads `unset`, never a guess. A row records only a departure from the base guide or something the base doesn't cover, with where the answer came from and the date it was decided.

```markdown
# <Docs set> style guide

## Profile

| Field             | Answer                                                          |
| ----------------- | --------------------------------------------------------------- |
| Readers           | <developers integrating · administrators · end users — and what each already knows> |
| Product           | <name, exactly as written>                                      |
| Versions covered  | <versions, and how older versions are handled>                  |
| Owner             | <who decides when the guide is silent and approves changes>     |
| Lives at          | <path, linked from the contributing guide>                      |
| Base guide        | [<Google developer documentation style guide · Microsoft Writing Style Guide · other>](<link>) |
| Dictionary        | <dictionary, and spelling variant>                              |
| Terminology list  | <path>                                                          |
| Glossary          | <path or URL>                                                   |
| Last reviewed     | <YYYY-MM-DD>                                                    |

Where this guide and the base guide disagree, this guide wins.

## Decisions

| Area                        | Decision | Departs from base | Source | Decided |
| --------------------------- | -------- | ----------------- | ------ | ------- |
| Voice and person            | unset    |                   |        |         |
| Tense and mood              | unset    |                   |        |         |
| Capitalization and headings | unset    |                   |        |         |
| Product and feature names   | unset    |                   |        |         |
| UI element formatting       | unset    |                   |        |         |
| Code formatting and placeholders | unset |                 |        |         |
| Code block file labels | unset |  |  |  |
| Code block length | unset |  |  |  |
| Numbers, dates, times, units | unset   |                   |        |         |
| Lists and punctuation       | unset    |                   |        |         |
| Links                       | unset    |                   |        |         |
| Abbreviations and acronyms  | unset    |                   |        |         |
| Inclusive language          | unset    |                   |        |         |
| Banned words                | unset    |                   |        |         |
| Page types and templates    | unset    |                   |        |         |

## Decision notes

For any close call, the reason, so it isn't reopened.

### <Area> — <short decision>

<The decision, the reason, what it supersedes.> Decided <YYYY-MM-DD>.

## Open conflicts

Where a source and the published docs disagree, both recorded for the owner.

| Area | Source says | Docs say | Raised with | Status |
| ---- | ----------- | -------- | ----------- | ------ |

## Enforcement

| Mechanism                       | Where                    |
| ------------------------------- | ------------------------ |
| Prose linter                    | <config path, or unset>  |
| Page templates                  | <path, or unset>         |
| Review checklist                | <template path, or unset> |
```
