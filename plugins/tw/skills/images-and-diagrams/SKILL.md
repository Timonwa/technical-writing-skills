---
name: images-and-diagrams
description: >-
  Visuals in documentation — deciding whether an image earns its maintenance cost, screenshot capture and annotation conventions, scrubbing personal and customer data, alt text and captions, diagrams as code or theme-able SVG, recordings, file naming and compression, light and dark variants, and keeping images from silently contradicting the text. Use on "docs screenshot", "architecture diagram", "flowchart for the docs", "alt text for this docs page", "annotate this screenshot", "the screenshot is out of date".
---

# Images and diagrams in documentation

Every visual in a document is the most expensive content on the page. It goes stale on a change nobody tells you about, it can't be searched, it can't be translated, it can't be copied from, and a reader using a screen reader gets whatever you wrote in the alt attribute and nothing else. A docs image lives as long as the page does, and every release can make it wrong — so the bar is high and the count is low.

None of that means avoid them. It means each one has to earn the cost, and there are only three kinds worth the money:

- **A screenshot**, when the reader needs to recognize something in a real interface.
- **A diagram**, when the shape of a thing carries meaning prose can't — an architecture, a sequence, a state machine, a decision.
- **A recording**, when motion itself is the point — a drag interaction, a transition, something whose timing matters.

## Voice and audience come from the writing's own guide

Before adding or changing a visual, find the project's style guide and conventions and read them — capture conditions, annotation style, palette and file locations often live there:

- **In a codebase:** the style guide and conventions the project's `AGENTS.md` names, or its contributing docs.
- **In a chat app:** the style guide in the project's files (a Claude Project's knowledge, or the equivalent elsewhere), or attached to the conversation.
- **Otherwise:** ask whether one exists before concluding there isn't one.

Where the guide settles something this skill also covers, the guide wins; where it's silent, `tw:docs-standards` applies.

## Does this visual earn its place?

**Use a screenshot when the reader needs to recognize something visually:**

- Finding a control that's genuinely hard to describe — an unlabelled icon, something buried in a dense interface, a small element among many.
- Confirming they're in the right place before a consequential action.
- Understanding a layout or spatial relationship that prose makes tedious.
- Showing what a result should look like, so they can compare.

**Use a diagram when structure is the content** — how parts relate, how something flows, what happens in parallel, where a decision branches. Before drawing, say in one sentence what the reader will understand from the picture that they wouldn't from the paragraph. If you can't, write the paragraph.

**Don't use either for:**

- **Text.** A screenshot of an error message, a config file, a command or a code block is text that can't be searched, copied, translated or read aloud. Write it out.
- **A form, when what the reader needs is the field list.** Table the fields.
- **Three sequential steps.** That's a numbered list — searchable, translatable, and free to maintain.
- **Every step of a procedure.** A screenshot per step triples maintenance and mostly shows the reader what they're already looking at. Picture the step where the reader is most likely to be lost, and no others.
- **Decoration.** An image carrying no information costs page weight and attention and returns nothing.

**The instructions stay in the text.** A visual supports the steps; it never replaces them. A procedure that only works if you can see the pictures excludes anyone who can't, and breaks the moment the interface shifts. Read the page with the images removed: every step must still be possible.

## Screenshots

### Capture

Consistency across a set matters more than perfection in any one image — a set captured at different zoom levels, themes and window sizes looks broken even when every image is correct.

- **Fix the conditions and write them down**: operating system, browser, theme, zoom level, window size, language, and which plan or role the account is on — where the next person to update an image will find them.
- **Use clean demo data** in a demo account — realistic, plausible, entirely fictional, and the same across pages so the reader recognizes it. Never a real customer's account, names, email addresses, balances or identifiers.
- **Scrub before publishing** — personal data, customer names, internal hostnames and URLs, account numbers, tokens in a URL bar, browser bookmarks, notifications, the rest of your desktop. Check the whole frame, not the part you were looking at.
- **Crop to the region that matters**, with just enough surrounding context to orient. A full-screen capture to show one button wastes the reader's attention on finding it.
- **Keep aspect ratios and widths consistent** within a set, and **capture at a resolution that stays sharp** when scaled down — never upscale a small capture.
- **Never crop out something you didn't understand** — an unexpected warning or error in the frame is either part of the flow and belongs in the docs, or a bug worth reporting.

### Annotation

- **One convention for the whole set** — the same shape, colour and line weight for every callout, everywhere.
- **Point, don't cover.** An outline or an arrow beside the target; never a box over the thing the reader is supposed to look at.
- **Number callouts to match the numbered steps** when an image covers several, in the order the reader reads.
- **Two or three annotations per image, at most.** More means the image is doing too much and should be split or replaced with text.
- **Use a colour that contrasts with the interface** and doesn't collide with the product's own UI colours: a callout outline or arrow needs at least 3:1 against what's around it, and callout text 4.5:1 ([WCAG 1.4.11](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html), [1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)). Never rely on colour alone to distinguish two callouts.
- **Keep the source file.** An annotated image that can only be redone from scratch will not be redone.

## Diagrams

**Choose the tool first.**

- **Diagrams as code by default** for flows, sequences, state machines and simple architecture: a Mermaid block in the page source is reviewed and changed like text, and renders natively on GitHub and in most docs frameworks ([GitHub](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/creating-diagrams)). PlantUML and D2 are the common alternatives where the docs platform supports them.
- **The C4 model for software architecture** — context, containers, components, then code, one level per diagram — is common practice for keeping architecture diagrams at a consistent level of detail.
- **Hand-authored SVG** for anything the text-to-diagram tools can't lay out well: a bespoke illustration, a precise annotated layout.

Then, whichever tool:

- **Plan before drawing** — purpose, audience, flow direction (left-to-right, top-down, radial), and scale. Scale drives stroke weight, font size and how much detail survives.
- **Consistent node sizes per type**, aligned to a grid with even spacing. Straight lines with right-angle bends beat diagonal spaghetti.
- **Visual hierarchy** — larger or bolder for primary, smaller or lighter for secondary. Group with subtle background fills.
- **Differentiate by treatment** (solid against dashed borders, category fills) and add a legend past three colours or symbols.
- **Label connections** where the relationship isn't obvious, and keep labels short — long labels are the first thing to break in translation.
- **Take the palette and type from the project**, never arbitrary values, and never hardcode a palette that the host theme can't override.

**The SVG authoring detail** — document structure, shapes and paths, text, theming with `currentColor` and custom properties, SVG-level accessibility, arrow markers, optimization, embedding choices, and copy-paste patterns — is in [references/svg-authoring.md](references/svg-authoring.md). Follow it for anything hand-authored.

## Recordings

- **Use motion only when motion is the point**, and never as the only source of instructions — the steps stay written.
- **Keep it short**, a single task, and don't autoplay anything with sound. **Caption or transcribe it.**
- **An animation that starts on its own, runs longer than five seconds and sits beside other content needs a way to pause, stop or hide it** — which covers most looping GIFs in a docs page. Prefer a video with controls, or a GIF that stops after a few loops ([WCAG 2.2.2](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html)).
- **Nothing flashes more than three times in any one second** ([WCAG 2.3.1](https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html)) — watch for flickering UI captured mid-render.
- **Recordings age worse than screenshots and cost more to redo** — weigh that before recording a flow that's about to change.

## Alt text and captions

Every visual needs a text alternative — a diagram as much as a screenshot, and usually more, because a diagram's whole content is the picture.

- **Describe what the reader needs from it**, not what it is. "Screenshot of the settings page" and "diagram of the architecture" both tell a screen-reader user nothing.
- **Don't start with "image of" or "screenshot of"** — assistive technology already announces that it's an image.
- **Where the visual only confirms what the surrounding text says**, short alt is correct; repeating the text wastes the listener's time. Purely decorative images get empty alt, and are usually better deleted.
- **Captions are visible to everyone; alt text isn't.** A caption carries context the image needs — which screen, which plan, the state it's in. Don't repeat the caption in the alt.
- **Keep alt text to about 125–150 characters** as a working guideline, with anything longer in the page body. There's no hard limit — the often-repeated screen-reader cut-off at 125 characters is a myth — but accessibility checkers commonly flag alt text over 150 characters, and long alt can't be navigated ([Eric Eggert](https://yatil.net/blog/there-is-no-character-limit-for-alt-text)).
- **Number a figure only if you reference it from the text.**
- **Screenshots** — usually one sentence, naming what the reader is meant to find: "The Billing tab, with Cancel subscription at the bottom of the plan card."
- **Diagrams** — describe the **structure the diagram encodes, not its appearance**: what connects to what, in what order, where it branches, what happens in parallel. A flowchart's alternative is usually a nested list; a matrix diagram's is usually a table — a reader can navigate those.
- **A complex diagram gets a short name plus a long description in the page body**, not a 200-word alt. Alt text is announced as one unstoppable block that can't be re-read by section. A long description in the page serves sighted readers too; if writing it feels redundant, the diagram may not have earned its place.
- **Know which mechanism applies.** An image file referenced from the page (`<img src="diagram.svg" alt="…">`) takes its name from `alt`. An SVG written inline has **no `alt` attribute at all** — it takes its name from `role="img"` plus a `<title>`, and a longer one from `<desc>`. Put alt text on an inline SVG and a screen reader announces nothing. The markup is in [references/svg-authoring.md](references/svg-authoring.md#accessibility).

## Files

- **Descriptive, lowercase, hyphenated names** saying what the image shows, not `screenshot-3-final-v2`.
- **A predictable location**, consistent across the set — beside the page or in one images directory, but the same choice everywhere.
- **Capture at 2× and display at 1×**, no wider than the content column, so text stays sharp on high-density screens — common practice.
- **Compress every image**, with a per-image ceiling you actually enforce — around 200 KB for a screenshot is a common budget. Uncompressed screenshots are usually the heaviest thing on a page.
- **Pick formats deliberately** — PNG or lossless WebP for interface captures with text and sharp edges; WebP or AVIF for photographs, with JPEG where those aren't supported. A screenshot saved as a low-quality lossy image has blurred text, which is the one thing it exists to show.
- **Delete images when their page goes.** Orphaned image files accumulate invisibly.

## Light and dark

- **Pick one theme and use it consistently**, or provide both. A set that mixes themes looks accidental.
- **Where the docs site has themes**, matching the image to the page theme is worth the extra file; otherwise pick the theme most readers use.
- **Check contrast in whichever theme you publish** — 4.5:1 for text, 3:1 for arrows, outlines and diagram strokes. Annotations that read clearly on light can vanish on dark.

## Keeping them current

This is where image-heavy documentation fails, and it fails quietly.

- **Record the product version or date** each image was captured at, beside the image or in the page's source.
- **A stale screenshot is worse than none**, because it contradicts the text and the reader trusts the picture. When the interface changes, update the image or remove it.
- **Check the images on every page a release touches**, and treat an outdated one as a defect, not a cosmetic issue.
- **Fewer images means more of them stay current.** The right number is the smallest that does the job.

## Before it ships

- [ ] Each image is one of the three kinds, and none pictures text, a field list or a simple sequence.
- [ ] Every procedure works with its images removed.
- [ ] No real customer data, personal details, internal hostnames or tokens anywhere in the frame.
- [ ] Capture conditions and demo data match the rest of the set.
- [ ] Alt text says what the reader needs from it; a complex diagram has a longer description in the page body.
- [ ] The version or date captured is recorded, so the next person knows what to re-check.
- [ ] Text and graphics meet 4.5:1 and 3:1 contrast in the theme published; no animation runs over five seconds without a way to stop it.
- [ ] A hand-authored graphic passes the checklist in [references/svg-authoring.md](references/svg-authoring.md).

## Boundaries

- **Whether the page needs a visual at all**, and where it sits in the structure → `tw:developer-docs`, `tw:user-guides` or `tw:internal-docs`.
- **Text inside images breaks translation**, and a localized product needs recapturing per locale → `tw:localization`.
- **Code blocks are not images** — never screenshot code. The rules for code are in `write:code-samples`.
- **Photos, charts and images in an article or newsletter** → `cw:images-and-diagrams`.
- **The product's real screens, labels and demo data** are captured from the running product or asked for, never mocked up to look like it.
- A logo, brand icon or favicon set is a different job: the type has to be outlined and the assets have to survive export at many sizes. Out of scope.
