# Page metadata — template

The front matter every docs page carries. Each field appears once per page; one that isn't known yet stays, left as `""`, never removed. Where the docs platform names a field differently, use its name and keep one of each — never add a second title or description for search or sharing.

```yaml
---
title: "" # the H1, the <title> and the share-card title; about 50–60 characters with the product name the site adds, identifying words first
description: "" # the meta description and the share description; about 150–160 characters, the point in the first 120
slug: "" # lowercase, hyphenated, named for the task or the thing — never a position
canonical: "" # blank for a self-referencing canonical; the current version's URL on an equivalent older copy
keywords: [] # readers' words for the site search's synonyms, where the tool reads them — from the search log and tickets
---
```

| Field         | Rule                                                 | Source                                                                                                                        |
| ------------- | ---------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `title`       | About 50–60 characters, unique to the page           | [Google](https://developers.google.com/search/docs/appearance/title-link), [Semrush](https://www.semrush.com/blog/title-tag/) |
| `description` | About 150–160 characters, the point in the first 120 | [Google](https://developers.google.com/search/docs/appearance/snippet), [Ahrefs](https://ahrefs.com/blog/meta-description/)   |
| `slug`        | Words, hyphens, lowercase                            | [Google](https://developers.google.com/search/docs/crawling-indexing/url-structure)                                           |
| `canonical`   | Equivalent pages point at the current version        | [Google](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)                              |

The lengths are working targets from what search results display, not limits.
