---
name: localization
description: >-
  Writing source content so it survives translation, and running a documentation set across locales — short explicit sentences, consistent terminology, no idiom or culture-bound examples, never building a sentence from fragments, keeping text out of images, locale-varying dates, numbers, currency and units, text expansion, do-not-translate lists, and stopping locales from drifting. Use on "localization", "translate the docs", "write for translation", "i18n", "l10n".
---

# Writing for translation

Two jobs live here: writing source content that translates cleanly, and running a set of documents across several languages. The first one costs nothing if you do it from the start and a great deal if you retrofit it — so apply the source rules even when translation is only a possibility.

The cost of translation is driven by the source. Inconsistent terminology, long sentences and cultural references multiply both the price and the error rate across every language at once.

## Decide early

- **Ask whether translation is planned**, for which languages, for which content, and by whom. The answers change what you write today.
- **Translate by priority, not by completeness.** Getting-started content, anything involving money, safety or legal obligation, and the most-used pages first. A fully translated set that's 30% stale serves readers worse than a small current one.
- **Check whether the product itself is localized**, because it decides how you write every UI label. If the interface is only in the source language, translated guides keep the labels in that language and gloss them; if it's localized, labels have to match the localized strings exactly, which means someone has to supply them.

## Write the source to be translated

- **Short sentences, one idea each.** Long sentences with embedded clauses are where translation errors concentrate, and the error is invisible to anyone who reads only the source.
- **Consistent terminology, without exception.** One term per concept is a style rule in any language and a cost rule here: a synonym forces a fresh translation, breaks translation-memory reuse, and reads as a different concept to someone working from the translated text alone.
- **Explicit subjects and complete sentences.** Dropped subjects and clipped headings are ambiguous out of context, and a translator often works line by line without the surrounding page.
- **Avoid ambiguous pronouns.** Repeat the noun where "it" or "this" could point at more than one thing — gendered languages force a choice the translator may get wrong.
- **No idiom, metaphor, slang, or humour.** "Out of the box", "under the hood", "a piece of cake", "hit the ground running" — each translates literally into nonsense. Say what it means.
- **No puns or wordplay**, ever, including in headings.
- **Cut culture-bound references** — sports, holidays, local institutions, films, regional food. An example anchored to one culture excludes every other one.
- **Avoid negatives, and never double negatives.** "Don't forget to disable the option" is three errors waiting to happen; "leave the option off" is one clear instruction.
- **Prefer simple verb forms** — present tense, active voice, imperative for instructions. Phrasal verbs ("set up", "turn on", "back up") are a known trouble spot; where a single-word equivalent reads naturally, use it.
- **Write out abbreviations** on first use, and don't invent new ones.
- **Keep headings full and grammatical**, not fragments.

## Don't build sentences from parts

- **Never concatenate a sentence from fragments** or inject variables mid-sentence in a way that assumes word order. Word order, grammatical gender, and number agreement all differ; a sentence assembled from two strings is untranslatable in some target language.
- **Keep a whole sentence as one unit** of content wherever the platform allows it.
- **Watch reusable snippets and variables** that get dropped into different grammatical positions on different pages. What works as one insertion breaks as another.
- **Plurals are not a suffix.** Don't write logic or text that assumes one form for one and another for many; languages vary in how many plural forms they have.

## Keep text out of images

Text inside an image can't be translated without recreating the image, in every language, forever.

- **Put explanatory text in the page**, not baked into a diagram or screenshot.
- **Where a diagram needs labels**, keep them minimal and keep the source file so labels can be replaced — or use numbered callouts with the legend in the page text.
- **Screenshots of a localized product** need recapturing per locale, which is real work: plan for it or accept source-language screenshots with a note.

## Locale-varying data

Don't hard-code the conventions of one locale into the source text:

- **Dates** — write them unambiguously in source and expect the format to change per locale. A date that could be read two ways is a support ticket in every language.
- **Numbers** — decimal and thousands separators differ, including which character means which.
- **Currency** — symbol, placement, and decimal conventions all vary, and so do the actual prices and available payment methods.
- **Units** — state the unit explicitly and consider whether the target market uses a different system.
- **Names and addresses** — don't assume a given-name-then-family-name order, a fixed number of name parts, a postcode format, or that a region exists.
- **Phone numbers, time zones, paper sizes, keyboard shortcuts** — each varies and each breaks an instruction that assumed otherwise.
- **Sort order** is not the same everywhere; an alphabetized list in source may need reordering.

## Layout and expansion

- **Translated text runs longer than English**, commonly by a third and sometimes far more for short strings. Anything laid out tightly — a table with narrow columns, a diagram label, a button, a heading beside an icon — will break.
- **Leave room**, avoid layouts that depend on a specific text length, and check the longest target language rather than the shortest.
- **Some languages read right to left**, and some need taller line heights for their characters. Where your platform supports them, check a page in one before declaring the template done.

## Terminology and what not to translate

- **Maintain a do-not-translate list** — product names, feature names that are trademarks, code identifiers, commands, file paths, UI labels that aren't localized, and any term the business has decided stays in the source language.
- **Supply the approved translation** for each domain term, per language, rather than letting each translator decide. Two translations of the same concept in one language is the same defect as two terms in the source.
- **Get terminology reviewed in-market before bulk translation starts**, not after — retranslating a term that appears on every page is the expensive way to learn it was wrong.

## Running the set

- **Translate from a stable source.** Continuous edits to a page that's mid-translation produce versions that never converge; agree a point where the source is done.
- **Propagate changes, or mark the page.** When a source page changes, the translated versions are stale from that moment. Either queue the update or show the reader that they're viewing an older version and link the current source — silently serving outdated content is the worst option, and it's the default one.
- **A stale translation is worse than no translation**, especially for anything involving money, safety, legal terms or destructive actions. Prefer an untranslated current page.
- **Get an in-market review** — a native speaker who knows the product, checking that it reads naturally and that examples make sense locally. Fluent translation of a misunderstood source still reads as wrong.
- **State your machine-translation policy** and make it visible to readers where you use it. Post-editing by a human is the usual minimum; for legal, safety, financial and security content, machine translation without review is not acceptable.
- **Track coverage and freshness per locale**, and be honest in the interface about which pages are current.
- **Don't let a locale become a fork.** Local additions that only exist in one language drift out of the set entirely; either they belong in the source for everyone, or they're documented as locale-specific on purpose.

## Boundaries

- **Terminology decisions and the glossary** the do-not-translate list and approved translations extend → `style-guide`.
- **The voice rules every document obeys** — sentences, claims, prose before code, concrete over vague, formatting, never hard-wrap → [`writing-standards`'s house-voice.md](../writing-standards/references/house-voice.md). Short sentences, one idea and active voice are already required there; this skill adds what changes once a second language is involved.
- **Images with text in them** → `images-and-diagrams` for the capture and authoring side.
- **Software string localization** — resource files, message formatting, pluralization rules in code — is an engineering concern. This skill covers documentation and the source-text discipline that serves both.
- **Choosing target languages and markets** is a business decision, asked for rather than assumed.
