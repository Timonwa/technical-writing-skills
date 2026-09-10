# Site mechanics — placement, navigation, and moving pages

The mechanics that keep a content site coherent as a set. They apply to any body of linked pages — a developer docs site or a help centre (`help-center-standards` links here rather than restating them).

## Page scope and placement

- **One clear focus per page** — if a page covers several distinct topics, split it; if a section belongs on a different existing page, move it there. A page that would only be 2–3 paragraphs is too thin to stand alone — merge it into its nearest neighbor with a better title.
- **Don't repeat content documented elsewhere** — remove the duplicate and link the canonical page instead. The same advice on 5+ pages will drift out of sync.
- **The placement ladder for best practices and troubleshooting** — page-specific tips go on the concept page itself; enough section-wide material justifies the section's own best-practices/troubleshooting page; site-wide advice goes in the central guides. If you catch yourself writing a generic tip on a concept page ("always close resources"), move it up the ladder and link it.

## Navigation

- **Register every page in the navigation** — the sidebar config (`meta.json`, `sidebars.js`, `_meta`, whatever the framework uses) in the same change; array order is sidebar order.
- **Every new page is linked FROM at least one existing page** — a page reachable only through the sidebar is half-orphaned; a page reachable through neither is invisible.
- **End every page with next-steps links** to 2–4 related pages — a Cards grid, a "Next steps" list, a Related-articles section — so no page is a dead end. Link only pages that exist.

## Moving, renaming, and removing pages

- **Grep for inbound links first** — before renaming, splitting, moving, or deleting a page, search the entire content directory for links to its path and update every one that would break.
- **Redirect moved or renamed public pages** — old path → new path, permanent. Skip redirects for brand-new pages, for slug-typo fixes on pages not yet indexed, and for internal-only links (just update those links).
- **For a removed page**, redirect to the closest relevant page or the section index — but only if it was linked externally; otherwise just clean up the inbound links.
- **Never blanket-redirect 404s to the home page.** It destroys the signal that a URL is wrong and drops the reader somewhere they didn't ask for. A custom 404 listing the popular sections serves them better; add specific redirects only where a specific page moved.
- **Update the navigation in the same change** — a moved page that still sits at its old sidebar position is a ghost entry.
