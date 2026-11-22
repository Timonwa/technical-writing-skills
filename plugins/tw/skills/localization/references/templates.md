# Localization templates

Three files a translated docs set keeps, each extending the terminology list (`tw:style-guide`) rather than replacing it. A cell with no answer yet stays, left blank, never removed. Name locales with BCP 47 tags throughout.

## Do-not-translate list

```markdown
# Do not translate — <docs set>

| Field         | Answer       |
| ------------- | ------------ |
| Owner         |              |
| Last reviewed | <YYYY-MM-DD> |

| Term | Kind | Why it stays | Notes |
| ---- | ---- | ------------ | ----- |
|      | <product name · trademarked feature · code identifier · command · file path · unlocalized UI label · business decision> | | |
```

## Approved translations

One row per domain term, one column per locale. A term with no approved translation in a locale is a blank cell, and stops bulk translation into that locale until it's filled.

```markdown
# Approved translations — <docs set>

| Field             | Answer       |
| ----------------- | ------------ |
| Owner             |              |
| Last reviewed     | <YYYY-MM-DD> |
| In-market reviews | <locale: reviewer role, date> |

| Source term | Definition | <locale> | <locale> | Decided | Notes |
| ----------- | ---------- | -------- | -------- | ------- | ----- |
|             |            |          |          | <YYYY-MM-DD> |  |
```

## Locale coverage tracker

One row per page per locale, so readers and maintainers can see what's current.

```markdown
# Locale coverage — <docs set>

| Field                  | Answer                                                         |
| ---------------------- | -------------------------------------------------------------- |
| Source locale          |                                                                |
| Machine-translation policy | <none · machine with human post-editing · per content type> |
| Last updated           | <YYYY-MM-DD>                                                   |

| Page | Priority | Source updated | Locale | Translated | Reviewed in-market | Status |
| ---- | -------- | -------------- | ------ | ---------- | ------------------ | ------ |
|      | <1 · 2 · 3> | <YYYY-MM-DD> |      | <YYYY-MM-DD> | <YYYY-MM-DD>     | <current · stale · not translated> |
```

A page is **stale** in a locale from the moment its source updated date is later than its translated date; the page then shows readers it's an older version and links the current source.
