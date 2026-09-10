---
name: help-center-standards
description: >-
  Writing and reviewing help-centre guides for a product's end users — FAQ answers, how-tos, concept explainers, policy pages and troubleshooting — with answer-first openings, write-for-the-least-experienced, the teach-or-cut vocabulary test, one canonical framing per concept, reassure-on-money, warn-at-the-moment-of-risk, and the five page types. Use on "help center article", "support guide", "FAQ answer", "user guide", "explain this to users".
---

# Help-centre standards

Write help-centre guides so a first-time user gets their answer fast and every guide reads like the same person wrote it. Same rules every run, wherever the guides live — a docs folder, a content repo, a help-desk tool, or nothing but a chat window.

**Voice in one line:** plain, calm, friendly, direct. Explain, never sell. Short sentences. Answer first, details after.

## Verify before writing

A guide that describes a button that isn't there, or a flow that changed last sprint, sends the reader in circles and costs support a ticket. So check, at whatever level of access you have:

- **With the app or the code in front of you** — verify the real screen names, button labels, menu paths, limits, and error messages, and use them verbatim. What the UI says wins over what an older guide said or what a spec intended.
- **Without access** — no repo, no staging login, working from a spec, a recording, or a conversation — write only what you were told. Never invent a label, a step, a threshold, or an error message because it sounds like what the product would say; a confident invention is worse than a visible gap.
- **Ask for the specifics in one batch**, and mark anything you couldn't verify so whoever can check it knows where to look.

**The product facts come from you, and are never invented:** the product's name, the domain terms to teach, how each core concept is framed, the one trusted analogy, and the support channel. Ask for them once, up front, alongside the questions above — and if a style guide or glossary is handed over, work from that.

## Who you write for

Readers range from someone who has never used a product like this to experts — write for **all of them at once by writing for the least experienced reader**. Plain writing never slows an expert down (they skim past what they know), but jargon loses a beginner completely. Assume the reader arrived with one specific question, wants it answered fast, and — when money or personal data is involved — feels some uncertainty about whether they're safe.

## Say it the same way every time

A reader learns a concept once and then meets it again three guides later — so the wording can't drift:

- **Each core concept gets one framing, and it's reused word-for-word** in every guide that touches it. Example shape: "a price is a probability — a share that costs 30¢ means about a 30% chance." Settle the wording once, then write it down so the next guide reuses it rather than reinventing it.
- **One trusted analogy per product** — reused, never improvised per guide, and never a framing the product wants to avoid (e.g. gambling framing for a trading product, except to explicitly draw the reassuring contrast).
- **One term per thing.** A second word for the same concept reads as a second concept; if a guide nearby uses a different one, say so rather than adding a third.
- **Where an existing guide contradicts this standard or the agreed framing, correct it** — don't match it, and don't quietly start a second convention alongside it.

## The core rules

1. **Answer first.** The first line answers the question or states the bottom line — no warm-up. A yes/no title gets a yes or no in the opening line, then why.
2. **Write to "you", speak as "we"**, consistently through the whole guide.
3. **One idea per sentence.** Short and declarative. Two "and"s or a comma pile-up means split it.
4. **Teach the product's real terms; explain each on first use.** The domain vocabulary is what readers meet in the app — use it rather than vague substitutes that leave them unprepared. Gloss it in plain language the first time ("the order book — the live list of buy and sell offers"), then use it normally.
5. **The teach-or-cut test for plumbing jargon.** Behind-the-scenes technology terms (infrastructure, protocols, internals) get one test: would a first-time user need this word to complete the task or understand the answer? If yes — it names something they must see, tap, or do — use it and explain it plainly once. If no, cut it; if it genuinely comes up, describe what it does instead of naming it.
6. **Reassure on money and safety, plainly and early.** Say the reassuring thing directly — don't bury it, don't over-explain the technical reason. "Your money stays yours until you choose to trade."
7. **Warn at the moment of risk.** An irreversible or security-sensitive step gets a bold warning **at that step**, not in a paragraph far away: "Double-check the amount before you confirm. This can't be undone."
8. **Keep it short.** Most guides land around 500 words; a concept explainer can run longer, but never pad. A section that doesn't help the reader act or understand gets cut.
9. **Nothing sells; everything explains.** No marketing language ("revolutionary", "empowering", "seamless") anywhere in a help centre.

## Structure of every guide

Write the guide itself; whatever renders it usually adds the breadcrumbs and feedback widget around it:

- **Title** phrased the way a reader would ask or search: questions for concepts and FAQs ("Is my money safe?"), plain actions for how-tos ("How to deposit").
- **Opening line** — the answer, one sentence. The most important sentence in the guide.
- **Intro (optional, 1–2 sentences)** only when the reader needs context before the body; skip it when the opening line is enough.
- **Body sections** under H2 headings, H3 only for sub-steps. One title, never more.
- **Worked example** for concepts — one concrete number example using the canonical framing. One, not three.
- **`## Related articles`** closing section — 2–5 links to guides a reader would naturally go to next, using real titles of guides that exist. Never link a guide that doesn't exist yet.

The five page types (concept explainer / how-to / policy / troubleshooting / FAQ), their skeletons, and a weak-vs-strong example for each are in [references/page-types.md](references/page-types.md) — pick the type first, then follow its skeleton. Formatting, the vocabulary tiers, and the tone checks are in [references/plain-language.md](references/plain-language.md). Site mechanics — placement, navigation registration, inbound-link greps and redirects when a guide moves — are shared with docs sites: follow [`docs-standards`'s site-mechanics.md](../docs-standards/references/site-mechanics.md).

## Pre-publish checklist

- [ ] Every label, path, limit, and error message is verbatim from the product — or flagged as unverified.
- [ ] The first line answers the question or states the bottom line.
- [ ] Written to "you"; the company is "we".
- [ ] No plumbing jargon that fails the teach-or-cut test; every required term glossed on first use.
- [ ] Core concepts use the agreed framing, word-for-word.
- [ ] Steps numbered, buttons and labels in **bold**.
- [ ] Every irreversible or security step has a bold warning at that step.
- [ ] One title, H2 sections, H3 only for sub-steps.
- [ ] Ends with `## Related articles` linking 2–5 existing, genuinely related guides.
- [ ] Nothing sells.

## Boundaries

- **Developer-facing docs sites** (API references, MDX pages, technical guides) → `docs-standards` — same consistency aim, different audience and page types.
- **The shared writing discipline** (audience-first, concrete over vague, prose before code) → `writing-standards`; the voice checklist both share is `writing-standards/references/house-voice.md` — this skill adds the non-technical layer on top, it doesn't replace it.
- **Tightening an existing draft** → `prose-editing`.
- **Product facts** — product name, domain vocabulary, the concept framings, the trusted analogy, support channel — are asked for, never assumed and never invented. They don't live in this skill.
