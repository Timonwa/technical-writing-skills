# Screenshots and diagrams in content

The capture, annotation and drawing craft behind the screenshots and diagrams in an article, a tutorial or a newsletter. The markup for a hand-authored SVG is in [svg-authoring.md](svg-authoring.md).

## Capturing a screenshot

Consistency across a piece, and across a series, matters more than perfection in any one image — captures at different zoom levels, themes and window sizes look broken even when each is correct.

- **Fix the conditions and write them down**: operating system, browser, theme, zoom level, window size, language, and which plan or account the screen is from. The next update needs to match.
- **Use clean demo data** — realistic, plausible and entirely fictional. Never a real person's account, name, email address, balance or identifier.
- **Scrub before publishing** — personal data, other people's names, internal URLs, account numbers, tokens in an address bar, bookmarks, notifications, the rest of your desktop. Check the whole frame, not the part you were looking at.
- **Crop to the region that matters**, with just enough around it to orient the reader.
- **Keep widths and aspect ratios consistent** within a piece, and capture at a resolution that stays sharp when scaled down; never upscale a small capture.
- **Never crop out something you didn't understand** — an unexpected warning in the frame is part of what the reader will see, and belongs in the text.

## In a build-along tutorial

- **Not a screenshot for every step.** Show where a reader is likely to get lost — the first time a screen appears, a setting that's hard to describe, a moment where they need to know they're on track — and the finished result at the end of a stage. Twenty near-identical captures bury the three that matter, and every one is something to recapture when the product changes.
- **The instructions stay in the text.** A reader who can't see the image, or whose screen differs, still follows the steps from the words.
- **Show what success looks like** — the finished page, the working output — so a reader can compare their result to yours.

## Annotation

- **One convention per publication** — the same shape, colour and line weight for every callout.
- **Point, don't cover.** An outline or an arrow beside the target; never a box over the thing the reader is meant to see.
- **Two or three annotations per image at most.** More means the image is doing too much.
- **Use a colour that contrasts with the screen**, and never rely on colour alone to tell two callouts apart.
- **Keep the source file**, so the image can be updated rather than redone.

## Diagrams

A diagram in an article is usually the one picture that makes the argument click — two timelines compared, the decision a reader is weighing, how the parts of a system relate.

- **Plan before drawing** — what the reader should understand from it, which way it flows (left to right, top down), and the size it will be read at, which decides stroke weight and font size.
- **One idea per diagram.** A diagram trying to show everything shows nothing a reader can hold.
- **Consistent shapes for the same kind of thing**, aligned to a grid, with straight connectors that bend at right angles rather than diagonal tangles.
- **Hierarchy by size and weight** — the main idea larger or bolder — and grouping with a subtle background.
- **Label the connections** where the relationship isn't obvious, briefly.
- **A legend past three colours or symbols**, and nothing that relies on colour alone.
- **The palette and type come from the publication**, never arbitrary values, and never a palette the site's theme can't override.
- **Alt text describes the structure, not the drawing** — what connects to what, in what order. A complex diagram gets a short name plus a description in the text, which serves sighted readers too.
- **Inline SVG has no `alt`** — it takes its name from `role="img"` and a `<title>`, and a longer one from `<desc>`. The markup is in [svg-authoring.md](svg-authoring.md#accessibility).

## Files and themes

- **Descriptive, lowercase, hyphenated file names** saying what the image shows.
- **Compress every image** to a ceiling you enforce; a lossless format for screenshots with text, a lossy one for photographs.
- **One theme, or both**, matching the page where the site supports it; check that annotations and diagram lines stay legible in whichever theme is published.
