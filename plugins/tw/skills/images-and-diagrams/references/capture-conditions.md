# Capture conditions record — template

One file per docs set, kept where the docs' images live, so whoever updates an image next captures it the same way. A field with no answer stays, left blank; the image log gains a row for every visual added and loses one when its page goes.

```markdown
# Capture conditions — <docs set>

| Field                 | Answer                                                     |
| --------------------- | ---------------------------------------------------------- |
| Operating system      |                                                            |
| Browser               |                                                            |
| Theme                 | <light · dark · both>                                      |
| Zoom level            |                                                            |
| Window size           | <width × height>                                           |
| Language              |                                                            |
| Account               | <the demo account — never a real customer's>               |
| Plan or role          |                                                            |
| Demo data             | <the names, amounts and records used across every page>    |
| Capture scale         | <2× captured, shown at 1×, no wider than the content column> |
| Format                | <PNG or lossless WebP for interface captures>              |
| Size budget           | <per-image ceiling, such as 200 KB>                        |
| Annotation            | <shape, colour, line weight, numbered callouts>            |
| Diagram tool          | <Mermaid · PlantUML · D2 · hand-authored SVG>              |
| Image folder          | <beside the page, or one images directory>                 |
| Source files          | <where annotated and diagram sources are kept>             |

## Image log

| File | Page | Shows | Kind | Product version | Captured | Source file |
| ---- | ---- | ----- | ---- | --------------- | -------- | ----------- |
|      |      |       |      |                 |          |             |
```

The **Kind** column is screenshot, diagram or recording; **Captured** is the date, `YYYY-MM-DD`. A release that touches a page re-checks every row for that page.
