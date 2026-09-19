---
name: images-and-diagrams
description: >-
  Visuals in documentation — deciding whether an image earns its maintenance cost, screenshot capture and annotation conventions, scrubbing personal and customer data, alt text and captions, hand-authored diagrams and flowcharts as clean theme-able SVG, file naming and compression, light and dark variants, and keeping images from silently contradicting the text. Use on "screenshot", "add an image", "diagram", "flowchart", "architecture diagram", "alt text", "annotate this", "the screenshot is out of date".
---

# Images and diagrams

Every visual in a document is the most expensive content on the page. It goes stale on a change nobody tells you about, it can't be searched, it can't be translated, it can't be copied from, and a reader using a screen reader gets whatever you wrote in the alt attribute and nothing else.

None of that means avoid them. It means each one has to earn the cost, and there are only three kinds worth the money:

- **A screenshot**, when the reader needs to recognize something in a real interface.
- **A diagram**, when the shape of a thing carries meaning prose can't.
- **A recording**, when motion itself is the point.

## Does this visual earn its place?

**Use a screenshot when the reader needs to recognize something visually:**

- Finding a control that's genuinely hard to describe — an unlabelled icon, something buried in a dense interface, a small element among many.
- Confirming they're in the right place before a consequential action.
- Understanding a layout or spatial relationship that prose makes tedious.
- Showing what a result should look like, so they can compare.

**Use a diagram when structure is the content** — how parts relate, how something flows, what happens in parallel, where a decision branches. Before drawing, say in one sentence what the reader will understand from the picture that they wouldn't from the paragraph. If you can't, write the paragraph.

**Don't use either for:**

- Text. A screenshot of an error message, a config file, a command, or a code block is text that can't be searched, copied, translated, or read aloud. Write it out.
- A form, when what the reader needs is the field list. Table the fields.
- Three sequential steps. That's a numbered list — searchable, translatable, and free to maintain.
- Every step of a procedure. A screenshot per step triples maintenance and mostly shows the reader what they're already looking at.
- Decoration. An image carrying no information costs page weight and attention and returns nothing.

**The instructions stay in the text.** A visual supports the steps; it never replaces them. A procedure that only works if you can see the pictures excludes anyone who can't, and breaks the moment the interface shifts.

## Screenshots

### Capture

Consistency across a set matters more than perfection in any one image — a set captured at different zoom levels, themes and window sizes looks broken even when every image is correct.

- **Fix the conditions and write them down**: operating system, browser, theme, zoom level, window size, language, and which plan or role the account is on. The next person to update one image needs to match.
- **Use clean demo data.** Realistic, plausible, and entirely fictional. Never a real customer's account, real names, real email addresses, real balances or real identifiers.
- **Scrub before publishing** — personal data, customer names, internal hostnames and URLs, account numbers, tokens in a URL bar, browser bookmarks, notifications, the rest of your desktop. Check the whole frame, not the part you were looking at.
- **Crop to the region that matters**, with just enough surrounding context to orient. A full-screen capture to show one button wastes the reader's attention on finding it.
- **Keep aspect ratios and widths consistent** within a set.
- **Capture at a resolution that stays sharp** when scaled down, and never upscale a small capture.
- **Never crop out something you didn't understand** — an unexpected warning or error in the frame is either part of the flow and belongs in the docs, or a bug worth reporting.

### Annotation

- **One convention per docs set** — the same shape, colour and line weight for every callout, everywhere.
- **Point, don't cover.** An outline or an arrow beside the target; never a box over the thing the reader is supposed to look at.
- **Number callouts to match the numbered steps** when an image covers several, in the order the reader reads.
- **Two or three annotations per image, at most.** More means the image is doing too much and should be split or replaced with text.
- **Use a colour that contrasts with the interface** and doesn't collide with the product's own UI colours — and never rely on colour alone to distinguish two callouts.
- **Keep the source file.** An annotated image that can only be redone from scratch will not be redone.

## Diagrams

- **Plan before drawing** — purpose, audience, flow direction (left-to-right, top-down, radial), and scale. Scale drives stroke weight, font size and how much detail survives.
- **Consistent node sizes per type**, aligned to a grid with even spacing. Straight lines with right-angle bends beat diagonal spaghetti.
- **Visual hierarchy** — larger or bolder for primary, smaller or lighter for secondary. Group with subtle background fills.
- **Differentiate by treatment** (solid against dashed borders, category fills) and add a legend past three colours or symbols.
- **Label connections** where the relationship isn't obvious, and keep labels short — long labels are the first thing to break in translation.
- **Take the palette and type from the project**, never arbitrary values, and never hardcode a palette that the host theme can't override.

**The SVG authoring detail** — document structure, shapes and paths, text, theming with `currentColor` and custom properties, SVG-level accessibility, arrow markers, optimization, embedding choices, and copy-paste patterns — is in [references/svg-authoring.md](references/svg-authoring.md). Follow it for anything hand-authored.

## Alt text and captions

Every visual needs a text alternative — a diagram as much as a screenshot, and usually more, because a diagram's whole content is the picture.

**The rules both share**

- **Describe what the reader needs from it**, not what it is. "Screenshot of the settings page" and "diagram of the architecture" both tell a screen-reader user nothing.
- **Don't start with "image of" or "screenshot of"** — assistive technology already announces that it's an image.
- **Where the visual only confirms what the surrounding text says**, short alt is correct. The text carries the content, and repeating it wastes the listener's time.
- **Purely decorative images get empty alt** so screen readers skip them, and are usually better deleted.
- **Captions are visible to everyone; alt text isn't.** A caption carries context the image needs — which screen this is, which plan, the state it's in. Don't repeat the caption in the alt.
- **Number a figure only if you reference it from the text.** "Figure 3" with nothing pointing at it is noise.

**Screenshots** — usually one sentence, naming what the reader is meant to find in it: "The Billing tab, with Cancel subscription at the bottom of the plan card."

**Diagrams** — the alternative describes the **structure the diagram encodes, not its appearance**. Shapes, colours, arrow directions and layout are how it's drawn; the relationships are what it means.

- **Write the relationships**: what connects to what, in what order, where it branches, what happens in parallel. A flowchart's text alternative is usually a nested list of steps and branches; a matrix diagram's is usually a table. Those are better alternatives than a paragraph, because a reader can navigate them.
- **A complex diagram gets a short name plus a long description in the page body**, not a 200-word alt. Alt text is announced as one unstoppable block that can't be re-read by section or skimmed — which makes a long alt technically present and practically unusable.
- **A long description in the page serves sighted readers too**, so it isn't accessibility overhead. If writing it out feels redundant, the diagram may not have earned its place.
- **Know which mechanism applies, because they aren't interchangeable.** An image file referenced from the page (`<img src="diagram.svg" alt="…">`) takes its name from `alt`. An SVG written inline into the page has **no `alt` attribute at all** — it takes its name from `role="img"` plus a `<title>` element, and a longer one from `<desc>`. Put alt text on an inline SVG and a screen reader announces nothing. The markup is in [references/svg-authoring.md](references/svg-authoring.md#accessibility).

## Files

- **Descriptive, lowercase, hyphenated names** saying what the image shows, not `screenshot-3-final-v2`. The name is the only clue when someone finds the file a year later.
- **A predictable location**, consistent across the set — beside the page or in one images directory, but the same choice everywhere.
- **Compress every image**, with a ceiling you actually enforce. Uncompressed screenshots are usually the heaviest thing on a docs page.
- **Pick formats deliberately** — a lossless format for interface captures with text and sharp edges, a lossy one for photographs. A screenshot saved as a low-quality lossy image has blurred text, which is the one thing it exists to show.
- **Delete images when their page goes.** Orphaned image files accumulate invisibly.

## Light and dark

- **Pick one theme and use it consistently**, or provide both. A set that mixes themes looks accidental.
- **Where the site has themes**, matching the image to the page theme is worth the extra file; where that's not supported, pick the theme most readers use.
- **Check contrast in whichever theme you publish** — annotations that read clearly on light can vanish on dark, and a diagram using pure black or white holds up in neither.

## Keeping them true

This is where image-heavy documentation fails, and it fails quietly:

- **Record what each image shows and when it was captured** — the version or the date, kept where an updater will see it.
- **A stale visual is worse than none**, because it contradicts the text and the reader trusts the picture. When the interface changes, update the image or remove it.
- **Fewer images means more of them stay current.** The right number is the smallest that does the job.
- **Check images whenever the surrounding page is checked**, and treat an outdated one as a defect rather than cosmetic.

## Video and recordings

- **Use motion only when motion is the point** — a drag interaction, a transition, something whose timing matters.
- **Never the only source of instructions.** The steps stay written; the recording supplements.
- **Keep it short**, a single task, and don't autoplay anything with sound.
- **Caption or transcribe it.** A recording without either is inaccessible and unsearchable.
- **Recordings age worse than screenshots and cost more to redo** — weigh that before recording a flow that's about to change.

## Boundaries

- **Whether the page needs a visual at all**, and where it sits in the structure → `developer-docs`, `user-guides`, or `internal-docs` for that document type.
- **Text inside images breaks translation**, and a localized product needs recapturing per locale → `localization`.
- **Code blocks are not images** — never screenshot code. The rules for code in docs are in `code-samples`.
- **The product's real screens, labels and demo data** are captured from the running product or asked for, never mocked up to look like it. The palette, fonts and type scale come from the project.
- A logo, brand icon or favicon set is a different job: the type has to be outlined and the assets have to survive export at many sizes. Out of scope.
