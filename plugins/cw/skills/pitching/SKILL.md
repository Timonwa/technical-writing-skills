---
name: pitching
description: >-
  Writing for another publication — guest posts, paid technical writing programs, magazines and newsletters that take contributors: choosing the outlet, the pitch email and outline, simultaneous pitches and follow-ups, the brief and agreement (fee, rights, kill fee, deadline, byline), writing to the outlet's style guide, republishing rights, invoicing and a pitch log. Use on "pitch an article", "guest post", "write for", "paid technical writing", "editor outline", "they accepted my pitch".
---

# Pitching

A pitch sells one idea to one editor, for their readers, in a few short paragraphs. Everything after it — the brief, the draft, the payment — rests on what was agreed in writing before the work started.

## Voice and audience come from the writing's own guide

Before pitching, read two things. **Whether to pitch at all** comes from the writer's own publication `profile.md`: what the writer is building, which audiences and topics serve it. Find it here:

- **In a codebase:** the folder the project's `AGENTS.md` names, or, for a guide kept outside the repo, the folder the user's personal agent instructions name (such as `~/.claude/CLAUDE.md`); otherwise the project's `publications/` folder.
- **In a chat app:** the project's files (a Claude Project's knowledge, or the equivalent elsewhere), or files attached to the conversation.
- **Otherwise:** ask for them.

**How the piece reads** comes from the outlet: its contributor guidelines and style guide, which replace the writer's own writing guide for this piece.

- Where the outlet's guidelines settle something this skill also covers — how to pitch, length, format, exclusivity — the outlet wins.
- Where the outlet has no written guide, build a short profile and guide for it with `cw:style-guide`, from its recent pieces, and confirm it with the editor.

## Ask first

Read the answers from the writer's `profile.md`, the outlet's contributor guidelines and `pitch-log.md` first; ask only what's missing. Ask with the app's question tool where it has one, so the choices can be picked; otherwise as a numbered list answered by number. Offer choices where the answers are known and a short typed answer otherwise; where the profile has a default, show it and ask whether to use it. Record the answers in the pitch's row in `pitch-log.md`, and, once it's accepted, in the `brief.md` field each belongs to — the **What this topic becomes** table or a row of **The brief** — with an answer that has no field under **Notes for whoever picks it up next**, so the next skill doesn't ask again.

1. **Which outlet, and where are its contributor guidelines?** Short answer: the outlet and a link.
2. **What does writing for it serve?** audience · portfolio · income. Default: the goals in `profile.md`.
3. **What's the idea, in one or two sentences?** Short answer: what the reader will be able to do or understand.
4. **What first-hand experience or data do you bring to it?** Short answer.
5. **Why now?** a release · a change · a common question · no particular reason.
6. **What length, and when can you deliver?** Short answer: words and a date.
7. **Which two or three published pieces show you can write it?** Links.
8. **Has this idea gone to another outlet?** no · yes, still open (which) · yes, declined.

## Work in the topic folder

An outlet or client written for gets its own publication folder beside the writer's own, with its `profile.md` and `writing-guide.md` built from its guidelines and brief. A commissioned piece is a topic folder under it — `topics/<yyyy-mm>-<slug>/` — with its [`brief.md`](../style-guide/references/publication-template/topics/_template/brief.md) holding the agreed scope and deadline, a Blog post row whose Where it goes is the outlet, and the piece itself in `blog.md`. Claim it as any topic: read `brief.md`, and if **Held by** names someone else and the status isn't `paused`, leave it and say so; otherwise set **Held by** and the date, and change only its line in the outlet's `calendar.md`. In a chat app, its files are named `<topic folder>--<file>`.

## Choose the outlet

- **Read what it has published recently**, ten pieces or more: the piece types it runs, length, depth, how technical, whether it takes first person, and what it has already covered — a pitch that repeats a recent piece is declined.
- **Read its contributor guidelines in full** and follow them exactly: where to send, what to include, what it doesn't take. Programs open and close; a page that says "not accepting new applicants" means wait, not pitch anyway.
- **Check the fit with your own profile**: does writing for this outlet serve the writer's goals — audience, portfolio, income — and is the topic one the writer has first-hand experience of?
- **Find the right editor** for the section, by name where the outlet lists one.

## The pitch

Short — the whole email readable without scrolling: about 150–300 words is the working length (common practice), and no more than about 500 words even with an outline. Outlets that set a cap mean it — [The Open Notebook](https://www.theopennotebook.com/submissions-guidelines/) asks for no more than 3,000 characters, about 500 words. In this order:

1. **Subject line** that states the idea, not "Pitch" alone: `Pitch: Rotating API keys without downtime, a step-by-step guide`.
2. **The idea in one or two sentences** — what the reader will be able to do or understand.
3. **Why this outlet's readers** — who among them needs it, and how it differs from what the outlet has already run.
4. **Why now**, where there is a reason: a release, a change, a common question.
5. **Why you** — first-hand experience, a project, data only you have. One or two lines, not a CV.
6. **A proposed title and an outline** — the outline as the outlet asks. [Smashing Magazine](https://www.smashingmagazine.com/write-for-us/) asks for "your proposed outline" of 200–300 words and "an outline initially, rather than a complete article"; [LogRocket](https://blog.logrocket.com/become-a-logrocket-guest-author/) asks for "a bulleted outline of the points you plan to cover", like a table of contents whose bullets become the subheads.
7. **Length and when you can deliver.**
8. **Two or three links to relevant published work** (clips).

Send the pitch, not the article, unless the guidelines ask for a full draft. No attachments unless asked — put the outline in the email body.

## Etiquette

These are common practice; an outlet's own guidelines override them.

- **One outlet at a time** for a given idea, unless the outlet's guidelines say simultaneous pitches are welcome. Where you do pitch several at once, say so, and withdraw from the others the moment one accepts.
- **Follow up once**, after the outlet's stated response time, or after about two weeks if none is stated; a time-sensitive pitch says its date. No answer after that is a no — pitch it elsewhere.
- **A declined pitch can be pitched again elsewhere**; a declined outline isn't a reason to argue.
- **Never pitch an idea already published elsewhere** as new. Outlets that pay expect original work — Smashing asks that the article be "an original piece of work for Smashing Magazine, not something you have published elsewhere".

## The brief and the agreement

Before writing, get the terms in writing — an email confirming them is enough where there's no contract. The [Authors Guild's legal guide to periodical contracts](https://authorsguild.org/app/uploads/2022/11/Chapter-12_Writers-Legal-Guide.pdf) treats the document an editor sends as "an offer" whose "terms are open to negotiation". Confirm:

- **Scope and angle** — the approved outline, the reader, anything the editor added or cut.
- **Length and deadline**, and the date of any outline or draft checkpoint.
- **Fee and when it's paid** — on acceptance or on publication, and how (invoice, platform, bank transfer). Judge the fee per word or per piece against the outlet's published rates and what other writers report it pays; a rate that's well below that for the work asked is a reason to negotiate or decline.
- **Payment terms** — how many days after the invoice; 30 days ("net 30") is the usual term where none is stated (common practice).
- **Rights granted** — which rights, where, in what formats, and for how long. Exclusivity for a period starting on publication is normal; the Guild calls its duration "the key point", because later uses of the piece have value. LogRocket, for example, asks to "keep it exclusive to us for the first month". Avoid granting all rights or work-for-hire unless the fee reflects it; the Guild notes a piece isn't a work made for hire unless you expressly agree in writing that it is.
- **Reversion** — rights return to the writer if the outlet doesn't publish within an agreed time.
- **Kill fee** — what's paid if the outlet commissions the piece and then doesn't run it. The Guild recommends a kill fee of "50 percent (or higher) of the agreed fee", with expenses reimbursed in full, and prefers payment on acceptance that's nonrefundable.
- **Byline, bio, headshot and links** — what's allowed in the bio, whether links are followed.
- **Editing and approval** — how many rounds, whether you see the final edit and the headline before publication.
- **Code and assets** — who hosts the demo repository and under what licence (`cw:demo-project`).

## Writing it

- **Write to the outlet's style guide and piece type**, not the writer's own: its headings, person, title case, code conventions, length. Use `cw:article-standards` for the structure by reader intent and `cw:editing-standards` before delivery.
- **Deliver on the agreed date**, or tell the editor as soon as you know you'll miss it.
- **Answer edits on the substance**; push back on a change that makes a claim wrong, not on a change of style.
- **Check the published version** against the approved draft: facts, code, links, byline.

## Republishing

- **Only within the rights granted**: after the exclusivity period, and in the forms the agreement allows.
- **Point the copy at the original**, the outlet's page, when cross-posting (`cw:cross-posting`).
- **Link to the published piece** from the writer's own site or portfolio from day one; that never needs the outlet's permission.

## Invoicing and records

- **Invoice on the agreed trigger** — acceptance or publication — with the piece title, the agreed fee, the date, the payment terms, payment details and any reference the outlet asked for. Keep a copy, and chase politely once the terms lapse.
- **Keep a pitch log** in `pitch-log.md`, at the root of the publications folder, one for every outlet (in a chat app, a file in the project), by the [pitch log template](references/pitch-log.md): a row per pitch — date, outlet, editor, pitch, status, follow-up date, outcome — and a row per commission with the fee, rights, exclusivity end date, deadline, published URL and payment. It shows which ideas to re-pitch, when a follow-up is due and when a piece can be republished.

## Before sending a pitch

- [ ] The outlet is open to pitches and you've followed its guidelines exactly.
- [ ] The idea is new to this outlet and fits its readers and piece types.
- [ ] Subject line names the idea; idea, why this outlet, why now, why you, title, outline, length, timing, clips — and nothing else, in about 150–300 words, within any cap the outlet sets.
- [ ] The outline is in the format the outlet asked for, in the email body.
- [ ] You know your follow-up date and whether simultaneous pitches are allowed.

## Before writing the piece

- [ ] Scope, length, deadline, fee, payment trigger and terms, rights, exclusivity period, reversion, kill fee, byline and editing process are confirmed in writing.
- [ ] You have the outlet's style guide, or a short one built with `cw:style-guide` and confirmed with the editor.
- [ ] The outlet has its own publication folder, and the piece its topic folder and `brief.md` under it.
- [ ] The pitch and its outcome are in `pitch-log.md`.

## Boundaries

- **Deciding what to write and when** → `cw:content-planning`. **The structure of the piece** → `cw:article-standards`. **Editing before delivery** → `cw:editing-standards`.
- **Republishing a piece on other platforms** → `cw:cross-posting`. **The tutorial's code repository** → `cw:demo-project`.
- **Legal advice on a specific contract** is a lawyer's or a writers' organisation's job; this skill names what to look for, not what to sign.
