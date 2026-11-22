---
name: pitching
description: >-
  Collaborations that end in writing — guest posts and commissions for another publication, swaps, co-written pieces, guests on your blog or newsletter, and sponsorships: the pitch or proposal email, replies, contributor guidelines, the agreement, the media kit, the piece with its disclosure label, the sponsor's results report and a pitch log. Use on "pitch an article", "guest post", "write for", "guest post swap", "co-write", "someone pitched me", "sponsored post", "sponsorship", "media kit".
---

# Pitching and collaborations

A pitch sells one idea to one person, for their readers, in a few short paragraphs. Every collaboration here ends in writing — an email, an agreement, a piece — and everything after the first email rests on what was agreed in writing before the work started. Five kinds, recorded by these names in the brief and the pitch log:

| Kind             | What it is                                                                | Topic folder                              |
| ---------------- | ------------------------------------------------------------------------- | ----------------------------------------- |
| writing for them | a guest post, a paid technical writing program, a commission              | under the outlet's own publication folder |
| swap             | you write one for their blog or newsletter; they write one for yours      | two in your publication, one per piece    |
| co-written       | one piece written together, published first on one platform               | one in your publication                   |
| guest on ours    | someone writes for your blog or newsletter — they pitched, or you invited | one in your publication                   |
| sponsored        | a brand pays for a slot in an issue, a whole issue or a sponsored post    | one in your publication                   |

## Voice and audience come from the writing's own guide

Before anything, read the writer's own publication: `profile.md` decides whether a collaboration serves it, `writing-guide.md` how your side reads, `media-kit.md` what sponsors are shown. Find them here:

- **In a codebase:** the folder the project's `AGENTS.md` names, or, for a guide kept outside the repo, the folder the user's personal agent instructions name (such as `~/.claude/CLAUDE.md`); otherwise the project's `publications/` folder.
- **In a chat app:** the project's files (a Claude Project's knowledge, or the equivalent elsewhere), or files attached to the conversation.
- **Otherwise:** ask for them.

**Whose guide a piece follows** depends on where it's published:

- **Writing for them** (a paid program, a commission, a magazine): the outlet buys a piece for its publication, so its contributor guidelines and style guide replace your writing guide for that piece, and win wherever they settle something this skill also covers. Where they have no written guide, build a short profile and guide with `cw:style-guide` from their recent pieces and confirm it with them.
- **A swap:** each side writes in its own voice, as if for its own blog. Your half follows your `writing-guide.md` and only the partner's house rules — length, format, links, the topics they take — recorded in the brief. Their half keeps their voice and follows your contributor guidelines.
- **A guest or a sponsored piece on yours:** your `writing-guide.md`, through the contributor guidelines you send; a guest keeps their voice where the guide leaves room. A sponsored piece is always in your voice, never the sponsor's.
- **Co-written:** the guide of the platform that publishes it first, unless both agree otherwise point by point.

## Ask first

Read the answers from `profile.md`, `media-kit.md`, the partner's guidelines, `pitch-log.md` and the topic's `brief.md` first; ask only what's missing. Ask with the app's question tool where it has one, so the choices can be picked; otherwise as a numbered list answered by number. Offer choices where the answers are known and a short typed answer otherwise; where the profile or the media kit has an answer, show it and ask whether to use it. Record the answers in the row in `pitch-log.md`, and, once agreed, in the `brief.md` field each belongs to — **Collaboration**, **Partner**, **Disclosure**, the **What this topic becomes** table or a row of **The brief** — with an answer that has no field under **Notes for whoever picks it up next**, so the next skill doesn't ask again.

1. **Which kind is it?** writing for them · swap · co-written · guest on ours · sponsored.
2. **Then the questions for that kind** — 7–8 each, in [references/questions.md](references/questions.md). A sponsorship always asks for current figures and the date they were read; a number is never invented.

## Work in the topic folder

- **Writing for them:** the outlet or client gets its own publication folder beside the writer's, with its `profile.md` and `writing-guide.md` built from its guidelines and brief. The piece is a topic folder under it, `topics/<yyyy-mm>-<slug>/`, with a [`brief.md`](../style-guide/references/publication-template/topics/_template/brief.md) holding the agreed scope and deadline, a row whose Where it goes is the outlet, and the piece in `blog.md`.
- **Every other kind** is a topic folder in **your** publication, `topics/<yyyy-mm>-<slug>/` (for example `2026-12-sourdough-starter`), with the brief's **Collaboration** set to the kind, **Partner** to the partner, and **Disclosure** to the label a sponsored piece carries. A swap has two folders, one per piece, each naming the other under **Partner**. Your half's Blog post row says it goes to their blog; their half's `blog.md` carries their author details. Either topic can also become your own newsletter issue and social posts, written by you. A co-written piece's copy on the other platform is a row in `copies.md`. A guest's draft goes in `blog.md` or `newsletter.md` and is edited there. A sponsored slot sits in the issue's own `newsletter.md`.
- **Claim it as any topic:** read `brief.md`, and if **Held by** names someone else and the status isn't `paused`, leave it and say so; otherwise set **Held by** and the date, and change only its line in that publication's `calendar.md`. In a chat app, the topic's files are named `<topic folder>--<file>`.
- **Media kit:** `media-kit.md` sits beside `profile.md`, from the [template](../style-guide/references/publication-template/media-kit.md).

## Choose the partner

- **Read what they've published recently**, ten pieces or more: piece types, length, depth, person, and what they've already covered — a pitch that repeats a recent piece is declined.
- **Read their contributor guidelines in full** and follow them exactly. A page that says "not accepting new applicants" means wait, not pitch anyway.
- **Check the fit with your profile**: does it serve the writer's goals — audience, portfolio, income — and does each side's readership want what the other writes? A sponsor fits only if your readers would want the product and it breaks nothing in "What it will never do".
- **Find the right person** by name: the section editor, the writer, the brand's partnerships contact.

## The pitch and the proposal

Short — the whole email readable without scrolling: about 150–300 words is the working length (common practice), no more than about 500 even with an outline. Outlets that set a cap mean it — [The Open Notebook](https://www.theopennotebook.com/submissions-guidelines/) asks for no more than 3,000 characters. Every email has a template in [references/emails.md](references/emails.md): the pitch, the follow-up, the swap proposal, the co-writing proposal, the reply to an incoming pitch, the sponsor pitch, the reply to a sponsor and the sponsor's results report.

A pitch to write for them, in this order:

1. **Subject line** that states the idea: `Pitch: Rotating API keys without downtime, a step-by-step guide`.
2. **The idea in one or two sentences** — what the reader will be able to do or understand.
3. **Why their readers** — who needs it, and how it differs from what they've run.
4. **Why now**, where there is a reason. **Why you** — first-hand experience, in one or two lines.
5. **A proposed title and an outline**, as the outlet asks. [Smashing Magazine](https://www.smashingmagazine.com/write-for-us/) asks for "your proposed outline" of 200–300 words, "rather than a complete article"; [LogRocket](https://blog.logrocket.com/become-a-logrocket-guest-author/) asks for "a bulleted outline of the points you plan to cover".
6. **Length and when you can deliver**, and **two or three links to published work**.

Send the pitch, not the article, unless the guidelines ask for a draft; no attachments unless asked.

## Etiquette

Common practice; a partner's own guidelines override it.

- **One outlet at a time** for an idea, unless its guidelines welcome simultaneous pitches; where you send several, say so, and withdraw from the others the moment one accepts.
- **Follow up once**, after the stated response time, or after about two weeks if none is stated. No answer after that is a no.
- **A declined pitch can go elsewhere**; a declined outline isn't a reason to argue.
- **Never pitch something already published** as new — Smashing asks for "an original piece of work for Smashing Magazine, not something you have published elsewhere".
- **Answer every pitch you receive**, within the response time your guidelines state: accept, ask to revise with the specific change, or decline in a line.

## Swaps, co-written pieces and guests

- **A swap** is two pieces on two dates, each in its author's voice. Propose it with both topics and what each side gives back, send your contributor guidelines and a brief, agree a review of each piece by both sides before it's published, and what happens if one side is late.
- **A co-written piece** has one owner of each part and one final say. Agree who writes what, where it runs first, the bylines and the copy on the other platform, which points to the original (`cw:cross-posting`).
- **A guest on ours** gets the [contributor guidelines and a guest brief](references/contributor-guidelines.md) with the acceptance. Edit their draft to your guide, keep their voice where the guide leaves room, check every claim and link, and send them the final edit and the title before it goes out.

## Sponsorship

Full rules, sources and the label: [references/sponsorship.md](references/sponsorship.md).

- **Pitch with the media kit**, its numbers read and dated that week or confirmed current; never an estimate. Reply to a brand that approaches you the same way.
- **Write it in your voice, for your readers.** The sponsor checks facts in the agreed rounds; a claim you can't check doesn't run.
- **Label it before the reader reaches it.** The FTC wants a connection disclosed "clearly and conspicuously" ([16 CFR 255.5](https://www.law.cornell.edu/cfr/text/16/255.5)) and lists "Ad", "Advertisement" and "Paid Advertisement" as understood labels, in front of or above the headline ([FTC](https://www.ftc.gov/business-guidance/resources/native-advertising-guide-businesses)). The CAP Code wants marketing "obviously identifiable", and advertorials headed, for example, "advertisement feature" ([CAP Code 2.1, 2.4](https://www.asa.org.uk/type/non_broadcast/code_section/02.html)); the ASA advises against "sponsored" alone ([ASA](https://www.asa.org.uk/advice-online/recognising-ads-advertisement-features.html)). Use `Ad: paid for by <brand>` at the top of the slot or before the headline, or `Advertisement feature` for a UK sponsored post.
- **Nigerian readers:** ARCON requires adverts aimed at Nigeria to be approved before they run; agree who obtains it. Its rules on label wording weren't found — see the reference.
- **Send the results report** on the agreed date, every figure from the platform and dated, and add it to `media-kit.md`.

## The agreement

Get the terms in writing before anyone writes — an email both sides confirm is enough where there's no contract. The checklist for each kind, with the Authors Guild's guidance on rights, exclusivity and kill fees, is in [references/agreements.md](references/agreements.md). Every kind settles scope, dates, bylines and links, edit rounds and rights; writing for them adds the fee, payment terms, exclusivity, reversion and a kill fee; a sponsorship adds deliverables, approval rounds, what you won't say, the label, payment and cancellation.

## Writing it

- **Write to the guide the piece follows** — its headings, person, case, code conventions, length. Use `cw:article-standards` or `cw:newsletter-standards` for the structure and `cw:editing-standards` before delivery.
- **Deliver on the agreed date**, or say so as soon as you know you'll miss it.
- **Answer edits on the substance**; push back on a change that makes a claim wrong or removes a label, not on a change of style.
- **Check the published version** against the approved draft: facts, code, links, byline, label.

## Republishing

- **Only within the rights granted**: after the exclusivity period, in the forms agreed.
- **Point the copy at the original** when cross-posting (`cw:cross-posting`).
- **Link to the published piece** from your own site or portfolio from day one; that never needs permission.

## Invoicing and records

- **Invoice on the agreed trigger** — acceptance, publication, or before a sponsored piece runs — with the title or placement, the amount, the date, the terms, payment details and any reference asked for. Chase politely once the terms lapse.
- **Keep the pitch log** in `pitch-log.md` at the root of the publications folder (in a chat app, a file in the project), by the [template](references/pitch-log.md): a row for every pitch and proposal, sent and received, with its **Direction** and **Kind**, and a row in **Agreements** for each accepted one. It shows what to re-pitch, when a follow-up or reply is due, and when a piece can be republished.

## Before sending

- [ ] The kind is known, and its questions are answered or read from the files.
- [ ] The partner is open to it, and you've followed their guidelines exactly.
- [ ] The email follows its template in `references/emails.md`, every blank filled, within any cap they set.
- [ ] Every number is measured, dated and from the platform; a sponsor pitch links the current `media-kit.md`.
- [ ] You know the follow-up date, and the row is in `pitch-log.md`.

## Before writing the piece

- [ ] The agreement for its kind is confirmed in writing (`references/agreements.md`).
- [ ] You have the guide it follows, and a swap partner or guest has your contributor guidelines and brief.
- [ ] The topic folder is in the right publication, and its `brief.md` has **Collaboration**, **Partner** and, for a sponsored piece, **Disclosure**.
- [ ] The row in **Agreements** in `pitch-log.md` is filled.

## Before it goes out

- [ ] A sponsored piece carries its label before the reader reaches the content, in the agreed wording, and its social posts start with `Ad`.
- [ ] Bylines, bios and links back are as agreed; a co-written or swapped piece's partner has seen the final edit.
- [ ] Any regulator approval the agreement names is in hand.

## Boundaries

- **Collaborations that end in writing only.** Talks, podcasts, events, general partnerships and growing subscribers are out of scope.
- **Deciding what to write and when** → `cw:content-planning`. **The structure of the piece** → `cw:article-standards`, `cw:newsletter-standards`. **Editing** → `cw:editing-standards`.
- **Republishing on other platforms** → `cw:cross-posting`. **Promoting the piece** → `cw:social-media-posts`. **A tutorial's code repository** → `cw:demo-project`.
- **The publication's profile, brand and guide** → `cw:style-guide`. **How the publication's pieces perform** → `/cw:content-performance`.
- **Legal advice on a specific contract or a disclosure rule** is a lawyer's or a writers' organisation's job; this skill names what to look for, not what to sign.
