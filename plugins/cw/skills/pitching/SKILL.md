---
name: pitching
description: >-
  Writing the emails of a writing collaboration and keeping the thread moving — a pitch to write for another publication, a guest post swap, a co-written piece, a reply to someone who wants to write for the writer's blog or newsletter, and a sponsor email: gather what the email needs, write it, follow up, reply, confirm what was agreed, and log it. Use on "pitch an article", "guest post pitch", "write for", "propose a swap", "co-write", "reply to a pitch", "email a sponsor", "follow up on my pitch".
---

# Pitching

Write the emails of a writing collaboration: gather what each one needs, write it in the writer's voice, and keep the thread moving until what was agreed is confirmed in writing. The writer sends every email; never send one or contact the other side.

Five kinds, recorded by these names in the brief and the pitch log:

| Kind             | What it is                                                                                              |
| ---------------- | ------------------------------------------------------------------------------------------------------- |
| writing for them | the writer writes a guest post or a commission for another publication                                  |
| swap             | the writer writes one for the partner's blog or newsletter, and the partner writes one for the writer's |
| co-written       | the writer and the partner write one piece together, published first on one platform                    |
| guest on ours    | someone writes for the writer's blog or newsletter — they pitched, or the writer invited them           |
| sponsored        | a brand appears in a slot in an issue, a whole issue or a sponsored post on the writer's publication    |

## Find the writer's guide

Write every email in the voice of the writer's publication, from its `writing-guide.md`; `profile.md` says who its readers are, and `media-kit.md` holds the audience facts a sponsor email cites. Find them:

- **In a codebase:** the folder the project's `AGENTS.md` names, or, for a guide kept outside the repo, the folder the user's personal agent instructions name; otherwise the project's `publications/` folder.
- **In a chat app:** the project's files, or files attached to the conversation.
- **Otherwise:** ask the writer for them.

The partner's contributor guidelines decide what a pitch to them must contain — the address, the length cap, an outline or a draft, the samples. Follow them exactly where they differ from this skill.

## Ask first

Read the answers from the request, `profile.md`, `media-kit.md`, the partner's guidelines, `pitch-log.md`, the topic's `brief.md` and the email thread first; ask the writer only what's missing. Ask with the app's question tool where it has one, so the choices can be picked; otherwise as a numbered list answered by number. Offer choices where the answers are known and a short typed answer otherwise; where a file already has an answer, show it and ask whether to use it. Record the answers in the email's row in `pitch-log.md` and, once agreed, in the topic's `brief.md` — **Collaboration**, **Partner**, a row of **The brief**, or **Notes for whoever picks it up next** — so the next skill doesn't ask again.

1. **Which kind is it?** writing for them · swap · co-written · guest on ours · sponsored.
2. **Then that kind's questions** in [references/questions.md](references/questions.md): who the email is to, their readers, what their guidelines require, the idea and angle, why the writer, the sample links and the dates. Read a sponsor email's audience facts from `profile.md` and `media-kit.md`; ask for any that are missing or more than a month or two old, and never invent one.

## Write the pitch

Write from the template for each email in [references/emails.md](references/emails.md): the pitch, the follow-up, the withdrawal, the swap proposal, the co-writing proposal, the three replies to an incoming pitch (accept, ask to revise, decline), the sponsor pitch, the two replies to a sponsor, and the confirmation of what was agreed.

- **Keep it short** — readable without scrolling: about 150–300 words (common practice), no more than about 500 even with an outline. A cap the partner sets is a rule; [The Open Notebook](https://www.theopennotebook.com/submissions-guidelines/) asks for no more than 3,000 characters.
- **State the idea in the subject line:** `Pitch: Rotating API keys without downtime, a step-by-step guide`.
- **Address a named person** — the editor the guidelines name, the blog's writer, the brand's partnerships contact. Ask the writer for the name rather than writing a generic greeting.

A pitch to write for another publication, in this order:

1. **The idea in one or two sentences** — what their reader will be able to do or understand.
2. **Why their readers** — who needs it, and how it differs from what they've already published.
3. **Why now**, where there's a reason, and **why the writer** — first-hand experience or data, in one or two lines.
4. **A proposed title and an outline**, in the form the outlet asks for. [Smashing Magazine](https://www.smashingmagazine.com/write-for-us/) asks for "your proposed outline" of 200–300 words, "rather than a complete article"; [LogRocket](https://blog.logrocket.com/become-a-logrocket-guest-author/) asks for "a bulleted outline of the points you plan to cover".
5. **The length, when the writer can deliver, and two or three links** to their published work.

Pitch the idea, not a finished article, unless the guidelines ask for a draft, and attach nothing unless asked. Never pitch a published piece as new — Smashing asks for "an original piece of work for Smashing Magazine, not something you have published elsewhere".

## Write the other emails

- **A swap proposal** names both topics, both formats, both dates and what each side gets back — a bio link, a social or newsletter mention.
- **A co-writing proposal** says why the piece is better written by both, who writes which part, where it runs first and how the bylines read.
- **A sponsor pitch or reply** says why the product fits the writer's readers, without any claim the writer hasn't checked, then gives who reads the publication and its numbers, each with the date measured, and what a sponsor can appear in, from `media-kit.md`. Lead with subscribers and click rate: open rates are inflated by mail clients that pre-fetch images (`cw:newsletter-standards`).
- **A reply to an incoming pitch** is one of three: accept, with the angle, length and dates; ask to revise, naming the specific change; or decline in a line.

## Keep the thread moving

Common practice; the partner's own guidelines override it.

- **One outlet at a time** for an idea, unless its guidelines welcome simultaneous pitches. Where the writer sends several, say so in each pitch, and write the withdrawal to the others the moment one accepts.
- **Follow up once**, after the partner's stated response time, or after about two weeks if none is stated. Treat no answer after that as a no; the idea can go elsewhere.
- **Answer every pitch the writer receives**, within the response time their contributor guidelines state, or within two weeks.
- **Confirm what was agreed in one email** once the thread settles it — topic, length, dates, byline and links, edit rounds, and for a sponsor the label the piece carries — asking the partner to reply if anything is wrong. Draw it from the thread; ask the writer only about a point the thread doesn't settle.
- **Send a guest or a swap partner the writer's [contributor guidelines and a guest brief](references/contributor-guidelines.md)** with the acceptance or the confirmation.
- **Write a note in the same thread as soon as a date will slip.**
- **Log every email** in `pitch-log.md` at the root of the publications folder (in a chat app, a file in the project), by the [template](references/pitch-log.md): one row per pitch or proposal, sent or received, with its status and follow-up date updated as the thread moves.

## Where the piece goes

Once a collaboration is agreed, start its topic folder so the writing skills can pick it up:

- **Writing for them:** the outlet gets its own publication folder beside the writer's, with a `profile.md` and `writing-guide.md` built from its guidelines (`cw:style-guide`). The piece is a topic folder under it, `topics/<yyyy-mm>-<slug>/`, with a [`brief.md`](../style-guide/references/publication-template/topics/_template/brief.md) holding the agreed scope and dates.
- **Every other kind** is a topic folder in the writer's own publication (for example `topics/2026-12-sourdough-starter/`), its brief's **Collaboration** set to the kind and **Partner** to the partner.
- **A swap** has two folders in the writer's publication, one per piece, each naming the other under **Partner**. Each half is written in its author's own voice; the writer's half follows their own `writing-guide.md` and only the partner's house rules — length, format, links, the topics they take — recorded in its brief.
- **Claim the topic** as any skill does: read `brief.md`, and if **Held by** names someone else and the status isn't `paused`, leave it and say so; otherwise set **Held by** and the date, and change only its line in that publication's `calendar.md`. In a chat app, name the topic's files `<topic folder>--<file>`.

## Before handing an email to the writer

- [ ] The kind is known, and its questions are answered or read from the files and the thread.
- [ ] The partner's guidelines are followed exactly, within any cap they set.
- [ ] The email follows its template, every blank filled.
- [ ] Every audience number in a sponsor email comes from `media-kit.md` or the writer, with the date measured.
- [ ] The row in `pitch-log.md` is added or updated, with the follow-up date.

## Boundaries

- **The emails and the thread only.** Talks, podcasts and events are out of scope.
- **Writing the piece** → `cw:article-standards`, `cw:newsletter-standards`, which also cover the sponsored label. **Editing** → `cw:editing-standards`. **Deciding what to write and when** → `cw:content-planning`.
- **Republishing on other platforms** → `cw:cross-posting`. **Promoting the piece** → `cw:social-media-posts`. **A tutorial's code repository** → `cw:demo-project`.
- **The publication's profile, guide and media kit** → `cw:style-guide`.
