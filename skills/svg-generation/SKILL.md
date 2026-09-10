---
name: svg-generation
description: >-
  Use when creating SVGs by hand — icons, technical diagrams, flowcharts, pipeline and architecture visualizations, illustrations, or any vector graphic for a doc or article. Produces clean, optimized, accessible, theme-able SVG that takes its palette and type from the surrounding project.
---

# SVG generation

Well-structured, production-ready SVG: clean source, correct accessibility, and theme-able colors. Plan the visual before writing code; use the project's own palette and type, not arbitrary values.

## Plan first

- **Purpose** — technical diagram, decorative illustration, icon, or data viz? **Audience** — devs in a post, users in a UI, print?
- **Style & layout** — clean/minimal vs playful; flow direction (L→R, top-down, radial, grid).
- **Scale** — icon (small) vs full-width diagram? Drives stroke weight, font size, and detail.

## Structure

- Root `<svg>`: `xmlns="http://www.w3.org/2000/svg"` and an explicit **`viewBox`** (e.g. `0 0 800 400`); prefer `viewBox` over fixed `width`/`height` for responsive scaling. Exception: SVG **inlined in JSX/HTML** doesn't need `xmlns`; **standalone `.svg` files** (and anything served as an image) always do.
- `<defs>` for reusable pieces (markers, gradients, filters, clip paths, patterns).
- Group with `<g>` + descriptive `id`; **position groups with `transform`** rather than absolute coords on every child.
- Paint order is document order (back-to-front). Separate logical sections with comments (`<!-- Nodes -->`, `<!-- Arrows -->`).

## Shapes, paths, text

- Prefer **semantic shapes** (`<rect>`, `<circle>`, `<ellipse>`, `<line>`) over `<path>` where possible — more readable/maintainable; `rx`/`ry` for rounded rects. Use `<path>` (cubic bezier `C`) for curves/custom shapes.
- Text: `<text>` with `text-anchor` (`start`/`middle`/`end`) and `dominant-baseline` (`central`/`middle`/`hanging`); `<tspan dy>` for multi-line. Web-safe fallback stack (`font-family="Inter, system-ui, sans-serif"`). Keep ≥ 12px at display size.

## Color & theming

- **Icons: use `fill="currentColor"`** (and/or `stroke="currentColor"`) so they inherit the surrounding text color — one icon works in light/dark and any context. This is the default for UI icons.
- For multi-color diagrams, use a **cohesive palette from the project tokens**; avoid pure `#000`/`#fff` (use near-black/near-white) so it holds up in both themes. In inline diagrams, expose a small set of CSS custom properties with fallbacks (`--diagram-node-fill`, `--diagram-node-stroke`, `--diagram-line`, `--diagram-text`) so the host theme controls the colors.
- `vector-effect="non-scaling-stroke"` on lines/borders keeps stroke width constant when a diagram scales responsively.
- Apply color via `fill`/`stroke` attributes (not inline `style`) where possible; `fill-opacity`/`stroke-opacity` for transparency.
- Meet **WCAG AA contrast** for text and meaningful graphics (verify it, don't eyeball it).

## Accessibility

- **Informative** SVG (conveys meaning): `role="img"` on root + a `<title>` (short name) as the first child, referenced via `aria-labelledby`; add `<desc>` for a longer description. Example: `<svg role="img" aria-labelledby="t"> <title id="t">Data pipeline</title> …`. The id must be **unique per page** — the same SVG inlined twice with a fixed id breaks the `aria-labelledby` association; derive it from `useId()` in React, hand-author unique ids otherwise.
- Animated SVG respects **`prefers-reduced-motion`** — pause or reduce via a media query.
- **Decorative** SVG (icon next to a text label, pure ornament): mark it `aria-hidden="true"` (and `focusable="false"`) so screen readers skip it — the adjacent text carries the meaning.
- An icon-only control gets its accessible name from the **button/link**, not the SVG (`aria-label` on the control; the SVG stays `aria-hidden`).

## Arrows & markers

- Define arrowheads in `<defs>` with `<marker>`; `orient="auto"` to follow line direction; `refX`/`refY` to place the tip; `overflow="visible"` to avoid clipping; size `markerWidth`/`markerHeight` proportional to stroke width.
- **`markerUnits` defaults to `strokeWidth`** — marker size is multiplied by the line's stroke width, so `markerWidth="10"` on a `stroke-width="2"` line renders 20 user units. Set `markerUnits="userSpaceOnUse"` for absolute sizing, or size the marker for the multiplied result.
- Match marker `fill` to the line `stroke` (separate markers per color). Pull line endpoints back 2–3 units from target shapes so the head doesn't overlap.

## Diagrams & flowcharts

- Consistent node sizes per type; align to a grid with even spacing. Prefer straight lines with right-angle bends over diagonal spaghetti; label connections when the relationship isn't obvious.
- **Visual hierarchy:** larger/bolder = primary, smaller/lighter = secondary. Group with subtle background fills/rounded rects. Consistent flow direction (L→R or top-down).
- Differentiate types by treatment (solid vs dashed border, category fills); add a **legend** when > 3 colors/symbols. Center text inside shapes.

## Optimization

- Strip defaults and cruft: no redundant attributes, empty `<g>`, or unused `<defs>`; 1–2 decimal places on coordinates; attributes over inline `style`.
- Run generated/exported SVGs through **SVGO** (or the editor's "optimize"); in a build pipeline, wire it in via the SVGO CLI, a bundler plugin, or SVGR's `svgo` option. Aim < 10KB for icons, < 50KB for most diagrams.
- **Embedding decision**: **inline** when the SVG is styled/animated/themed (`currentColor`, CSS vars, a11y wiring); **`<img src>`/`background-image`** for static art you want cached and out of the DOM; **sprite + `<use>`** for icons repeated many times on a page.
- **Never inline untrusted/user-uploaded SVG** — it can execute scripts. Sanitize it (DOMPurify) or serve it via `<img>` where scripts don't run.

## Patterns

Flowchart node (colors via `--diagram-*` custom properties so the host theme decides — never a hardcoded palette):

```svg
<g transform="translate(x, y)">
  <rect width="160" height="60" rx="8" fill="var(--diagram-node-fill, transparent)"
        stroke="var(--diagram-node-stroke, currentColor)" stroke-width="2"/>
  <text x="80" y="30" text-anchor="middle" dominant-baseline="central"
        font-family="Inter, system-ui, sans-serif" font-size="14"
        fill="var(--diagram-text, currentColor)">Node Label</text>
</g>
```

Arrow connection:

```svg
<defs>
  <marker id="arrowhead" viewBox="0 0 10 7" refX="9" refY="3.5"
          markerWidth="10" markerHeight="7" markerUnits="userSpaceOnUse"
          orient="auto" overflow="visible">
    <polygon points="0 0, 10 3.5, 0 7" fill="var(--diagram-line, currentColor)"/>
  </marker>
</defs>
<line x1="160" y1="30" x2="237" y2="30" stroke="var(--diagram-line, currentColor)"
      stroke-width="2" marker-end="url(#arrowhead)"/>
```

UI icon (theme-able, decorative next to a label — inline in JSX/HTML, hence no `xmlns`; a standalone `.svg` file would carry it):

```svg
<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor"
     stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
  <path d="M5 12h14M13 6l6 6-6 6"/>
</svg>
```

## Checklist

- [ ] `viewBox` set; dimensions appropriate; scales cleanly.
- [ ] Icons use `currentColor`; diagram colors from project tokens; no pure black/white.
- [ ] Text readable at display size; contrast meets AA.
- [ ] Arrows point correctly; markers positioned, not overlapping.
- [ ] Aligned, evenly spaced; no overlapping/clipped elements.
- [ ] A11y: informative → `role="img"` + `<title>`/`aria-labelledby`; decorative → `aria-hidden="true"`.
- [ ] Optimized — no unused defs/empty groups/redundant attrs; run through SVGO.
- [ ] File named in kebab-case, descriptive.

> **Related:** a logo, brand icon or favicon set is a different job — the type has to be outlined and the assets have to survive export. A diagram for a blog post follows that publication's article craft, not this skill's defaults.
