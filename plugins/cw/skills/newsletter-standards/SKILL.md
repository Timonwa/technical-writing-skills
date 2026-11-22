---
name: newsletter-standards
description: >-
  Drafting or reviewing an email newsletter issue — finding the one narrative that holds a period together, subject lines and preview text, the shape of an issue, skimmability for a phone read, Gmail clipping, the one-CTA rule, the legal and accessibility obligations an email carries, and reading the numbers after it sends. Reads the publication's profile rather than assuming a house voice. Use on "write the newsletter", "draft this month's issue", "review this issue before it sends", "subject line".
---

# Newsletter standards

An issue is not a list of links, and not an article. It's one narrative that makes a period of work worth reading about, and it has to survive being opened in an inbox, on a phone, by someone giving it a minute.

Email also carries obligations a blog post doesn't. Someone handed over their inbox, which is both a legal relationship and a fragile one — so an issue that reads well can still fail if it can't be unsubscribed from, can't be read with images off, or isn't what the reader signed up for.

## Voice and audience come from the writing's own guide

Before writing or reviewing, find the publication's `profile.md` and `writing-guide.md` and read them:

- **In a codebase:** the folder the project's `AGENTS.md` names, or, for a guide kept outside the repo, the folder the user's personal agent instructions name (such as `~/.claude/CLAUDE.md`); otherwise the project's `publications/` folder.
- **In a chat app:** the project's files (a Claude Project's knowledge, or the equivalent elsewhere), or files attached to the conversation.
- **Otherwise:** ask for them.

Who it's for, what the newsletter promised and how it reads come from that guide, never from this skill. An issue and a blog post from the same publication read as the same person.

- Where the guide settles something this skill also covers, the guide wins.
- Where there's no guide, ask who the reader is and what the newsletter is for, and offer to build one with `cw:style-guide`.
- Where a field is blank, ask and record the answer in the guide.

When a guide changes: in a codebase, save the file where it was found; in a chat app, give the user the updated file to replace in the project. Never write inside the installed plugin.

Four fields decide the issue before a word is written:

- **The promise made at signup.** Whatever the subscribe form said is the contract. An issue that delivers something else is mis-sold however well it reads, and it's a common reason someone leaves a newsletter they once wanted.
- **Cadence.** A monthly issue and a weekly one carry different amounts and a different urgency.
- **Relationship to the other channels** — whether an issue digests the blog, stands alone, or reports on work. A roundup and a letter are different products.
- **Sign-off and subject-line format**, which stay the same issue to issue. Consistency is how a subscriber recognizes you in a crowded inbox.

### A first issue is a different job

When the newsletter hasn't sent before, there's no pattern to follow and you're setting one. Say that out loud, and decide deliberately rather than by accident: subject-line format, sign-off, section shape, and what an issue does and doesn't contain. Write those decisions into the profile, because issue two has to match issue one.

A first issue also carries an introduction the rest won't — who you are, what they signed up for, how often it comes, how to leave. Deliver the promise in it rather than describing it.

## Ask first

Read the answers from the topic's `brief.md` and `profile.md`'s Defaults first; ask only what's missing. Ask with the app's question tool where it has one, so the choices can be picked; otherwise as a numbered list answered by number. Offer choices where the answers are known and a short typed answer otherwise; where the profile has a default, show it and ask whether to use it. Record each answer in the `brief.md` field it belongs to — the **What this topic becomes** table or a row of **The brief** — and an answer with no field under **Notes for whoever picks it up next**, so the next skill doesn't ask again.

1. **Which topic is the issue about?** a topic folder under `topics/` · none — a roundup or a personal note, which is its own topic.
2. **What kind of issue is it?** sends one new post · a digest · a stand-alone issue · a roundup · a personal note. Default: the profile's Newsletter default.
3. **When does it send?** A date. Default: the Newsletter issue row's publish date in the brief.
4. **Who does it go to?** the whole list · a segment (name it). Default: the brief's Where it goes.
5. **Which items does it cover?** Short answer: three to five links or pieces, for a digest or a roundup.
6. **What's the one call to action?** read it · reply · share · another (short answer). Default: the one action in `profile.md`.
7. **Does it carry a cover image?** the template in `brand.md` · none. Default: the profile's Cover image default.

## Work in the topic folder

An issue is one of the things a topic can become. Each topic has its own folder in the publication's `topics/` (`topics/2026-12-grocery-budget/`), made when it's briefed (`cw:content-planning`).

- **An issue about a topic** is `newsletter.md` in that topic's folder, and the brief's **What this topic becomes** table has a Newsletter issue row.
- **An issue that isn't about one topic** — a roundup, a personal note — is its own topic whose brief lists only a newsletter issue (`topics/2026-12-december-roundup/`). Where it has no folder yet, brief it first with `cw:content-planning`.
- **Claim it before writing.** Read `brief.md`: if **Held by** names someone else and the status isn't `paused`, leave it and say so. Otherwise set **Held by** and the date, the Newsletter issue row's status to `drafting`, and the topic's line in the publication's `calendar.md` to match — that line only. When stopping, set the status and clear **Held by**.
- **Write only the issue.** Fill `newsletter.md` and no other format's file; each has its own skill. Where the table has no Newsletter issue row, say so and ask whether to add one.
- **`newsletter.md` follows the [template](../style-guide/references/publication-template/topics/_template/newsletter.md)**: front matter, then the body. Every field stays present, left `""` until it's known: `subject`, `preview_text`, `send_date`, `audience` (the list or segment), `cover_image`, `cover_alt`, and `web_url`, blank until it's sent. Subject and preview-text lengths are in [The shape of an issue](#the-shape-of-an-issue).
- **Sources go in `sources.md`**, by its [template](../style-guide/references/publication-template/topics/_template/sources.md); images in `images/`.
- **In a chat app**, name the files `<topic folder>--<file>` (`2026-12-grocery-budget--newsletter.md`) and hand back only that topic's files and the line to add or change in `calendar.md`.

## What earns a place

- **One narrative, not a changelog.** Find the thread connecting the period — a theme, a lesson, a question you kept hitting — and hang the issue on it. "Here are five things I published" is a list; "I spent this month trying to cut our grocery bill by a third, and here's what finally worked" is an issue.
- **Every section carries a takeaway.** A reader who opens it and reads nothing else should still get something. Cut any section that only announces a thing exists.
- **Three to five items, not everything.** A complete inventory of the period is an archive page's job.
- **Link out, don't reproduce.** Summarise the piece and give a reason to click; never paste an article into an email.
- **The promise outranks the inventory.** A thin month means a shorter issue, not a padded one.

## The shape of an issue

- **Subject line** — the highest-leverage line in the whole thing. Concrete over clever: name the thing or the tension, not the category. Phone clients cut the subject off early, so the word that matters goes first; 30 to 50 characters is a common rule of thumb, not a standard. Never deceptive: under CAN-SPAM the subject must accurately reflect the content ([FTC](https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business)), and a misleading one spends the trust the issue depends on.
- **Preview text** — the second thing they see, and it falls back to the first line of the body unless you set it. Setting it deliberately is one of the clearest markers of a well-run send. Extend the subject rather than repeating it. Clients show anywhere from none to about 278 characters, so keep it under 90 with the point first ([Litmus](https://www.litmus.com/blog/the-ultimate-guide-to-preview-text-support)).
- **Opening — two or three sentences.** Get to the thread immediately. No "hope you've all been well", no apology for the gap since the last issue.
- **Body — three to five sections**, each with a bolded lead so it survives skimming, each ending somewhere the reader can act or think.
- **A sponsored slot or issue is labelled before the reader reaches it** — `Sponsored by <brand>` or `Ad: <brand>` at the top of the slot, or in a sponsored issue's opening line, naming the brand, never a logo alone — and recorded in the brief's **Disclosure** field. Regulators expect it of newsletter writers, not only brands ([FTC](https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides-what-people-are-asking); [ASA](https://www.asa.org.uk/advice-online/recognising-ads-social-media.html)).
- **One CTA.** Pick the single thing you want — read it, reply, share — and ask once. Three competing asks get none of them.
- **Sign-off** — short, in the publication's voice, the same every issue.
- **Footer** — who's sending, why they're receiving it, and how to stop.

## Written for the inbox

- **Skimmable by default.** Bold leads, short paragraphs, bullets for parallel items. Assume a phone, between other things, about 60 seconds. On text with no structure, readers scan in an F-shaped pattern and skip what isn't at the top or the left edge ([NN/g](https://www.nngroup.com/articles/f-shaped-pattern-reading-web-content/)); an inbox is a harsher version of the same behaviour.
- **Front-load every section**, and the issue itself. The point goes in the first sentence, not the third; a reader who doesn't find it there skips the paragraph.
- **One idea per section**, and roughly half the words you'd use in print.
- **Plain text survives; layout doesn't.** Clients strip CSS and block images by default. An issue that only works with images loaded is broken for a large share of the list, and image-heavy, link-heavy, text-light issues are what spam filters are built to catch.
- **Under Gmail's clipping size.** Gmail clips a message larger than 102 KB behind a "View entire message" link, which hides the footer with the unsubscribe link and stops opens being tracked ([Mailchimp](https://mailchimp.com/help/gmail-is-clipping-my-email/)). Keep the HTML well under it; about 80 KB leaves room (common practice).
- **Built for a phone.** A content width of about 600 pixels, body text of about 14–16 pixels and links or buttons about 44 pixels tall are the usual working sizes (common practice); the platform's template normally sets them, so check rather than assume.
- **Write to one person.** A newsletter is one person writing to one person, even at ten thousand subscribers. The profile decides the person and the register.
- **No engagement bait.** No fake urgency, no manufactured scarcity, no "you won't believe". The subscriber gave you their inbox; that's the trust being spent.

## What an email owes the reader

Requirements rather than preferences, for any publication. What follows is the shape of the obligations in the major regimes; a publication with real exposure confirms the specifics for the markets it sends to.

**The footer and the headers**

- **Every issue's footer has a working unsubscribe link**, and the sender's postal address where the law or the platform requires one — US CAN-SPAM does ([FTC](https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business)).
- **Honest headers and subject lines.** The "from" name identifies the sender; the subject represents the contents.

**Accessibility**

- **Alt text on every image**, and no image carrying information the text doesn't. A screen-reader user and a reader with images blocked are in the same position.
- **Real text, not text baked into an image.** An image-only issue is unreadable to a screen reader, unsearchable, and blocked by default.
- **Descriptive link text.** "Read the grocery-budget breakdown", never "click here" — screen readers can list links out of context.
- **Semantic headings and sufficient contrast**, as for any web content.
- **A plain-text alternative** where the platform offers one, saying the same things rather than being a stripped husk.

## Reviewing an issue before it sends

- [ ] It delivers what the signup promised.
- [ ] One narrative, and every section has a takeaway.
- [ ] The subject names something specific, fits a phone's preview, and front-loads the word that matters.
- [ ] Preview text is set, extends the subject, and is under about 90 characters.
- [ ] The issue's size is under Gmail's 102 KB clipping point.
- [ ] The opening reaches the point within three sentences.
- [ ] One CTA, asked once.
- [ ] Every link resolves, points at a canonical URL, and has descriptive text.
- [ ] Every image has alt text, and the issue still makes sense with images off.
- [ ] Unsubscribe link present and working; postal address present where it's required.
- [ ] Sign-off matches the profile.
- [ ] It reads on a phone — no wall of text, no layout that needs images.
- [ ] Nothing sells. Nothing baits.
- [ ] The issue is in its topic folder's `newsletter.md` with every front-matter field present, and its row in `brief.md` and its line in `calendar.md` show it `scheduled`.

## After it sends

Benchmarks describe patterns, not targets. A publication's own trend line beats any cross-industry average, and a small engaged list outperforms a large indifferent one on every measure that matters. Use these to spot something badly wrong, not to chase a figure.

- **Reference figures, dated.** Mailchimp's all-industry averages are 35.63% opens, 2.62% clicks and 0.22% unsubscribes, from data last updated in December 2023 ([Mailchimp](https://mailchimp.com/resources/email-marketing-benchmarks/)). Read them as a rough floor for spotting something badly wrong, never a goal.
- **Open rate is no longer a reliable measure.** Privacy features that pre-fetch images inflate it, so a reported open may be nobody. Treat it as directional and judge an issue on clicks and click-to-open, against the publication's own previous issues.
- **Unsubscribes are a signal about the promise.** An unsubscribe rate rising above the list's usual level means something is wrong with the list or the promise, not the writing.
- **Consistency beats frequency.** Whatever cadence the profile records, holding it matters more than the number. A monthly list that receives three emails in a week is being surprised, and surprise is what people unsubscribe from.
- **Test send times rather than importing someone's best-day advice.** The published "best" days and hours contradict each other across studies, because they're averaging different audiences.

## Boundaries

- **Audience, cadence, the signup promise and sender details** → the publication's `profile.md`. **Voice, subject format, sign-off and the wording of the ask** → its `writing-guide.md`. Both live in the publication's folder.
- **The long-form pieces an issue links to** → `cw:article-standards`. An issue summarises them; it never reproduces one.
- **Promoting a single piece** → `cw:social-media-posts`. A set of posts about one article is a different job from a periodic issue covering several.
- **The emails with a sponsor** — the pitch, the replies and the confirmation of what was agreed → `cw:pitching`.
- **The voice rules under every publication** → `write:writing-standards`. **Tightening the draft** → `cw:editing-standards`. **The machine-written sweep** → `/write:ai-check`.
- **Whether the linked pieces are being found** → `/cw:content-performance`. **Reviewing an issue before it sends, as a report** → `/cw:review`.
- **List management and deliverability** — consent records, list cleaning, sender authentication, complaint rates, automation → the sending platform. Name what's missing; don't configure it.
