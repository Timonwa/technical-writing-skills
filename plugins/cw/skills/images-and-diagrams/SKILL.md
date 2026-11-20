---
name: images-and-diagrams
description: >-
  Visuals in content — articles, tutorials, features, essays and newsletter issues on any subject: which visuals earn their place, photos of the real thing, licences and image credits, consent for identifiable people, alt text written from the image's purpose, honest charts, diagrams, tutorial screenshots, recordings and GIFs, images in email, and labelling edited or AI-generated images. Use on "add a photo", "image credit", "can I use this image", "chart for my article", "alt text", "diagram for this post", "GIFs in my newsletter".
---

# Images and diagrams in content

In a lot of content the image isn't support for the text — it's part of what the reader came for: the finished dish, the place, the person interviewed, the result, the evidence. Every visual still has a cost. It can't be searched or translated, it goes stale when what it shows changes, a reader on a screen reader gets only its alt text, and in an email it may never load at all. So each one has to earn its place.

## Voice and audience come from the writing's own guide

Before applying this skill, find the publication's `profile.md` and `writing-guide.md` and read them:

- **In a codebase:** the folder the project's `AGENTS.md` names, or, for a guide kept outside the repo, the folder the user's personal agent instructions name (such as `~/.claude/CLAUDE.md`); otherwise the project's `publications/` folder.
- **In a chat app:** the project's files (a Claude Project's knowledge, or the equivalent elsewhere), or files attached to the conversation.
- **Otherwise:** ask for them.

Its image policy — credits, photo rights, AI-generated images — and its palette and type come from that guide, never from this skill.

- Where the guide settles something this skill also covers, the guide wins.
- Where there's no guide, ask who the reader is and what the piece is for, and offer to build one with `cw:style-guide`.

When a guide changes: in a codebase, save the file where it was found; in a chat app, give the user the updated file to replace in the project. Never write inside the installed plugin.

## Which visuals earn their place

Say in one sentence what the reader gets from the picture that they wouldn't from the paragraph. If you can't, write the paragraph.

- **A photo or illustration of the real thing** — the finished bake, the room, the person, the product in use. Readers study these. People tend to ignore generic stock photos but look closely at real people and real products ([NN/g](https://www.nngroup.com/articles/photos-as-web-content/)), so a real photo is content and a generic one is decoration.
- **A chart**, when the evidence is a pattern a sentence can't carry.
- **A diagram** — the one picture that makes the argument click.
- **A screenshot in a tutorial**, so a reader following along knows they're on track.
- **A recording or GIF**, when motion is the point — a technique, a drag, a sequence whose timing matters.
- **Never an image of text you could write** — a paragraph, a code block, an error message. Where an image of text is the point — a quote card, a screenshot of a post — its words go in the alt text ([W3C](https://www.w3.org/WAI/tutorials/images/textual/)).
- **Never decoration** — an image that carries nothing costs page weight and attention for no return.

## Rights and credits

- **Licence first.** Finding an image online doesn't give you the right to use it. Use your own, one licensed for this use, or one whose licence terms you follow.
- **Credit Creative Commons images in full** — title, author, source and licence. Credit the author, not the site you found it on, and never "Creative Commons", which isn't the author ([Creative Commons](https://wiki.creativecommons.org/wiki/Recommended_practices_for_attribution)).
- **Consent from identifiable people** before publishing a photo of them, and particular care with children — the publication's policy decides how consent is recorded.
- **Embeds and screenshots of other people's posts** are their words and images: attribute them, and check the platform's terms before reproducing one.

## Photos

- **Alt text says what the photo is for in this piece**, not a neutral inventory. W3C's example for a family photo conveying a mood is "We're family-friendly" ([W3C](https://www.w3.org/WAI/tutorials/images/informative/)); for a bread recipe, "the crumb, open and even", not "a loaf of bread".
- **Keep photos true.** An edit that changes what a photo shows, a composite or an AI-generated image is labelled as such. The SPJ code, revised in 2026, says never publish fabricated content that could be confused with reality, and clearly label illustrations and reenactments.
- **Caption what the image needs** — who, where, when — and the credit where the licence or the guide asks for one. Don't repeat the caption in the alt text.
- **Compress and size for the column it sits in**; a photo straight off a phone is usually the heaviest thing on the page.

## Charts

- **The title states the finding** — "Rents rose faster than wages every year since 2019", not "Rents and wages, 2019–2025".
- **Label lines and bars directly**, next to what they name, rather than in a legend the reader has to match by colour ([Datawrapper](https://www.datawrapper.de/blog/text-in-data-visualizations)).
- **Colours a colour-blind reader can tell apart** — vary them by lightness, and never pair red and green, or orange and green, at the same brightness ([Datawrapper](https://www.datawrapper.de/blog/colorblindness-part2)). Never rely on colour alone.
- **Honest axes** — a bar chart starts at zero; a truncated axis is marked; charts the reader compares share a scale.
- **Source and date in the caption** — where the data came from, and when.
- **Legible at phone width** — labels, numbers and lines still readable on the narrowest screen the piece is read on.
- **The takeaway goes in the alt text**, and the numbers sit in a table beside the chart or linked from it, so a reader who can't see it gets the data.

## Diagrams and tutorial screenshots

- **A diagram makes one idea visible.** Its alt text describes the structure — what connects to what, in what order — not the drawing.
- **In a build-along tutorial, not a screenshot for every step.** Show where a reader is likely to get lost and what success looks like at the end of a stage; the steps stay in the text.
- **Scrub every screenshot** of personal data, account numbers and other people's names, and capture with demo data.

The capture, annotation and drawing craft is in [references/screenshots-and-diagrams.md](references/screenshots-and-diagrams.md), and the SVG markup in [references/svg-authoring.md](references/svg-authoring.md).

## Recordings, GIFs and video

- **Use motion only when motion is the point**, keep it short, and make it a single technique or task.
- **The text still carries it** — the steps or the point are written; the recording supplements.
- **Caption or transcribe any video with speech**, and never autoplay sound.
- **Put the important frame first in a GIF**: some versions of desktop Outlook show only the first frame ([Email on Acid](https://www.emailonacid.com/blog/article/email-development/gifs-and-outlook-what-can-we-do/)).
- **Weigh the size** — a GIF of a few seconds is often heavier than every other image on the page together; a short muted video can be lighter.

## In email

A newsletter's images arrive in mail clients, not a browser you control:

- **The issue makes sense before its images load**, and for readers who never load them. Anything an image says is said in the text too.
- **Alt text matters more, not less** — it's what shows in the image's place while it's blocked.
- **No text baked into an image** — it can't be read until it loads, can't be searched, and won't reflow on a phone.
- **Dark mode**: some clients invert colours, so a dark logo on a transparent background can vanish and a white box can appear around a light one. Test the issue in dark mode, and give images that need it a background or outline in the file itself ([Litmus](https://www.litmus.com/blog/the-ultimate-guide-to-dark-mode-for-email-marketers)).
- **Size for the column, at twice the pixels** — an image shown 600 px wide exported at 1,200 px and set to 600 in the markup, so it's sharp on high-density screens without overflowing on a phone.
- **The first frame of every GIF** carries the message.

## Keeping them true

- **A published tutorial's screenshots go stale** when the product changes. Record the version or date captured, and update or remove an image that no longer matches — with an update note.
- **A dated piece keeps its original photos**; a correction to a caption or a credit is marked like any other correction.

## Before it ships

- [ ] Every visual earns its place; no generic stock as content, no image of text that could be written.
- [ ] Every image is licensed and credited as its licence and the guide ask; identifiable people consented.
- [ ] Alt text serves the piece's purpose; images of text carry their words.
- [ ] Charts state the finding, start at zero, label directly, survive colour blindness and a phone screen, and have a source, a date and their data as text.
- [ ] Edited, composite and AI-generated images are labelled.
- [ ] Screenshots are scrubbed and captured with demo data; a tutorial doesn't screenshot every step.
- [ ] For a newsletter: it reads with images off, survives dark mode, and every GIF works on its first frame.

A worked example — deciding, fixing, crediting and describing every visual in one piece — is in [references/worked-example.md](references/worked-example.md).

## Boundaries

- **A cover image and the cards a link shows when it's shared** → `cw:cover-images`.
- **Code is never an image** — code in a piece follows `write:code-samples`.
- **Whether the piece needs a visual at all, and where it sits** → `cw:article-standards` and `cw:newsletter-standards`.
- **Visuals in documentation** → `tw:images-and-diagrams`.
- **A logo, brand icon or favicon set** is a different job, out of scope.
