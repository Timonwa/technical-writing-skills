---
name: newsletter-standards
description: >-
  Drafting or reviewing an email newsletter issue — finding the one narrative that holds a period together, subject lines and preview text, the shape of an issue, skimmability for a phone read, the one-CTA rule, and the legal, accessibility and deliverability obligations an email carries that a web page doesn't. Reads the publication's profile rather than assuming a house voice. Use on "write the newsletter", "draft this month's issue", "review this issue before it sends", "subject line".
---

# Newsletter standards

An issue is not a list of links, and not an article. It's one narrative that makes a period of work worth reading about, and it has to survive being opened in an inbox, on a phone, by someone giving it a minute.

Email also carries obligations a blog post doesn't. Someone handed over their inbox, which is both a legal relationship and a fragile one — so an issue that reads well can still fail if it can't be unsubscribed from, can't be read with images off, or isn't what the reader signed up for.

## Load the publication profile first

Establish **which publication this issue belongs to**, then find its folder — from the path the user's `CLAUDE.md` gives, otherwise the project's own `publications/` folder, otherwise ask — and read both files in it: `profile.md` for who it's for and what the newsletter promised, `writing-guide.md` for how it reads. The voice is the publication's, not the newsletter's: an issue and a blog post should read as the same person.

Four fields decide the issue before a word is written:

- **The promise made at signup.** Whatever the subscribe form said is the contract. An issue that delivers something else is mis-sold however well it reads, and it's the most common reason someone leaves a newsletter they once wanted.
- **Cadence.** A monthly issue and a weekly one carry different amounts and a different urgency.
- **Relationship to the other channels** — whether an issue digests the blog, stands alone, or reports on work. A roundup and a letter are different products.
- **Sign-off and subject-line format**, which stay the same issue to issue. Consistency is how a subscriber recognizes you in a crowded inbox.

Where a field reads `unset`, ask and write the answer back to the profile.

**When the publication has no folder yet**, build it with `cw:style-guide` before drafting — from an existing guide, two or three past issues, then an interview — and get it confirmed.

### A first issue is a different job

When the newsletter hasn't sent before, there's no pattern to follow and you're setting one. Say that out loud, and decide deliberately rather than by accident: subject-line format, sign-off, section shape, and what an issue does and doesn't contain. Write those decisions into the profile, because issue two has to match issue one.

A first issue also carries an introduction the rest won't — who you are, what they signed up for, how often it comes, how to leave. Deliver the promise in it rather than describing it.

## What earns a place

- **One narrative, not a changelog.** Find the thread connecting the period — a theme, a lesson, a question you kept hitting — and hang the issue on it. "Here are five things I published" is a list; "I spent this month fighting caching, and here's what finally worked" is an issue.
- **Every section carries a takeaway.** A reader who opens it and reads nothing else should still get something. Cut any section that only announces a thing exists.
- **Three to five items, not everything.** A complete inventory of the period is an archive page's job.
- **Link out, don't reproduce.** Summarise the piece and give a reason to click; never paste an article into an email.
- **The promise outranks the inventory.** A thin month means a shorter issue, not a padded one.

## The shape of an issue

- **Subject line** — the highest-leverage line in the whole thing. Concrete over clever: name the thing or the tension, not the category. **30 to 50 characters, roughly 6 to 9 words**, because mobile clients display around 30 to 43 and most email is opened on a phone — so the load-bearing word goes first, not last. Never deceptive: a subject that misrepresents the contents is a trust problem and, in most jurisdictions, unlawful.
- **Preview text** — the second thing they see, and it falls back to the first line of the body unless you set it. Setting it deliberately is one of the clearest markers of a well-run send. Extend the subject rather than repeating it.
- **Opening — two or three sentences.** Get to the thread immediately. No "hope you've all been well", no apology for the gap since the last issue.
- **Body — three to five sections**, each with a bolded lead so it survives skimming, each ending somewhere the reader can act or think.
- **One CTA.** Pick the single thing you want — read it, reply, share — and ask once. Three competing asks get none of them.
- **Sign-off** — short, in the publication's voice, the same every issue.
- **Footer** — who's sending, why they're receiving it, and how to stop.

## What the numbers say

Benchmarks describe patterns, not targets. A publication's own trend line beats any cross-industry average, and a small engaged list outperforms a large indifferent one on every measure that matters. Use these to spot something badly wrong, not to chase a figure.

- **Open rate is no longer a reliable measure.** Privacy features that pre-fetch images inflate it, so a reported open may be nobody. Treat it as directional and judge the issue on **click-to-open**, where roughly 10 to 15 percent is healthy and 20 percent is strong.
- **Unsubscribes above about 0.3 percent** of a send, or **bounces above 2 percent**, mean something is wrong with the list or the promise — not with the writing.
- **Consistency beats frequency.** Whatever cadence the profile records, holding it matters more than the number. A monthly list that receives three emails in a week is being surprised, and surprise is what people unsubscribe from — receiving too many emails is the most common reason given.
- **Weekly is the most common cadence** for publications that send often, and most readers are content with at least monthly. Below monthly, expect to reintroduce yourself each time.
- **Test send times rather than importing someone's best-day advice.** The published "best" days and hours contradict each other across studies, because they're averaging different audiences.
- **Clean the list every few months.** Sending to people who never open trains filters against you and drags down everyone else's delivery.

## Written for the inbox

- **Skimmable by default.** Bold leads, short paragraphs, bullets for parallel items. Assume a phone, between other things, about 60 seconds. Eye-tracking on web content finds people scan rather than read, most often in an F-shaped pattern — an inbox is a harsher version of the same behaviour.
- **Front-load every section**, and the issue itself. The point goes in the first sentence, not the third; a reader who doesn't find it there skips the paragraph.
- **One idea per section**, and roughly half the words you'd use in print.
- **Plain text survives; layout doesn't.** Clients strip CSS and block images by default. An issue that only works with images loaded is broken for a large share of the list.
- **Write to one person.** A newsletter is one person writing to one person, even at ten thousand subscribers. The profile decides the person and the register.
- **No engagement bait.** No fake urgency, no manufactured scarcity, no "you won't believe". The subscriber gave you their inbox; that's the trust being spent.

## What an email owes the reader

Requirements rather than preferences, and they hold for any publication — so they live here, not in a profile. What follows is the shape of the obligations in the major regimes; a publication with real exposure should confirm the specifics for the markets it sends to.

**Consent and the right to leave**

- **A working unsubscribe in every issue**, obvious and one step. Under US CAN-SPAM the mechanism must keep working for at least 30 days after the send and opt-outs must be honoured within 10 business days; under GDPR, withdrawing consent has to be as easy as giving it. Never make someone log in to leave.
- **A valid physical postal address** in the footer — a CAN-SPAM requirement, not a convention. A PO box or registered agent's address qualifies.
- **Honest headers and subject lines.** The "from" name identifies the sender; the subject represents the contents.
- **A lawful basis for holding the address.** Under GDPR that usually means consent you can evidence — when, how, and what they agreed to. A bought or scraped list fails this before the first send.
- **One-click unsubscribe headers** (`List-Unsubscribe`, RFC 8058), required by the major inbox providers for bulk senders and expected of everyone else. Normally the platform's job — confirm it's on rather than assuming.

**Accessibility**

- **Alt text on every image**, and no image carrying information the text doesn't. A screen-reader user and a reader with images blocked are in the same position.
- **Real text, not text baked into an image.** An image-only issue is unreadable to a screen reader, unsearchable, and blocked by default.
- **Descriptive link text.** "Read the caching write-up", never "click here" — screen readers can list links out of context.
- **Semantic headings and sufficient contrast**, as for any web content.
- **A plain-text alternative** where the platform offers one, saying the same things rather than being a stripped husk.

**Deliverability**

- Authentication — SPF, DKIM, DMARC — is sending setup rather than writing, but an unauthenticated send reaches nobody. Confirm it before a first issue.
- Image-heavy, link-heavy, text-light issues are what spam filters are built to catch.
- List hygiene beats volume. Sending to people who never open trains filters against you.

## Reviewing an issue before it sends

- [ ] It delivers what the signup promised.
- [ ] One narrative, and every section has a takeaway.
- [ ] The subject names something specific, runs 30–50 characters, and front-loads the word that matters.
- [ ] Preview text is set and extends the subject.
- [ ] The opening reaches the point within three sentences.
- [ ] One CTA, asked once.
- [ ] Every link resolves, points at a canonical URL, and has descriptive text.
- [ ] Every image has alt text, and the issue still makes sense with images off.
- [ ] Unsubscribe present and working; postal address present.
- [ ] Sign-off matches the profile.
- [ ] It reads on a phone — no wall of text, no layout that needs images.
- [ ] Nothing sells. Nothing baits.

## Boundaries

- **Audience, cadence, the signup promise and sender details** → the publication's `profile.md`. **Voice, subject format, sign-off and the wording of the ask** → its `writing-guide.md`. Both live in the publication's folder.
- **The long-form pieces an issue links to** → `article-standards`. An issue summarises them; it never reproduces one.
- **Promoting a single piece** → `social-media-posts`. A set of posts about one article is a different job from a periodic issue covering several.
- **The voice rules under every publication** → `write:writing-standards`. **Tightening the draft** → `cw:editing-standards`. **The machine-written sweep** → `/write:ai-check`.
- **Whether the linked pieces are being found** → `content-performance`.
- **Platform setup** — domain authentication, list imports, automation — is the sender's infrastructure. Name what's missing; don't configure it.
