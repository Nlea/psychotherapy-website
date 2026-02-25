# Project Progress & Learnings

## WEB-azjsiudq — Client feedback iteration

### Learnings

#### CSS text wrapping: preventing orphaned words

**Context:** Client feedback noted that single words ("Freiheit", "Augenhöhe") were sitting alone on their own line in quote and body text sections.

**What I learned:** Line breaks are always viewport/font-size dependent — you can never fully guarantee behavior across all devices. But there are CSS tools to help:

- **`text-wrap: pretty`** — modern CSS property specifically designed to avoid orphans (lone words on the last line). Works at the browser level, no content changes needed. Good browser support in Chromium-based browsers, growing elsewhere.
- **`text-wrap: balance`** — balances line lengths across all lines. Better suited for headings than long body text.
- **Non-breaking space (`&nbsp;`)** — placed between the last two words, forces them to stay together. Most reliable, but baked into content — needs manual re-checking if text changes.

**Approach used:** `text-wrap: pretty` on body text as a general fix; `&nbsp;` for the quote where the text is static and controlled.
