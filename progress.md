# Project Progress & Learnings

## WEB-azjsiudq — Client feedback iteration

### Learnings

#### CSS text wrapping: preventing orphaned words

**Context:** Client feedback noted that single words ("Freiheit", "Augenhöhe") were sitting alone on their own line in quote and body text sections.

**What I learned:** Line breaks are always viewport/font-size dependent — you can never fully guarantee behavior across all devices. But there are CSS tools to help:

- **`text-wrap: pretty`** — modern CSS property specifically designed to avoid orphans (lone words on the last line). Works at the browser level, no content changes needed. Good browser support in Chromium-based browsers, growing elsewhere.
- **`text-wrap: balance`** — balances line lengths across all lines. Better suited for headings than long body text.
- **Non-breaking space (`&nbsp;`)** — placed between the last two words, forces them to stay together. Most reliable, but baked into content — needs manual re-checking if text changes.

**Approach used:** `text-wrap: pretty` on `p` in global.css as a general fix. Decided against `&nbsp;` to keep content clean — accepted that Safari won't benefit until it supports the property.

**Browser support note:** Chrome/Edge ✅ (2023), Firefox ✅ (2024), Safari ❌ — degrades gracefully.

---

#### Where to put global typography rules

Global rules that apply site-wide (like `text-wrap`, `line-height`, `color`) belong in `global.css` on the element selector (`p`, `h1` etc.). Component-specific overrides go in the component's `<style>` block. Per-section layout rules (like `text-align: center` on an intro block) live in the component — not globally — to avoid unintended side effects.

---

#### Controlling content width on desktop

The `.container` class in `global.css` sets `max-width` for all sections. Started at `1152px`, felt too wide for a content-focused site. Settled on `1000px` as a good balance. Common values to try: `960px`, `1000px`, `1024px`, `1080px`. No need to use "standard" breakpoint values — any pixel value works.

---

#### Structured data vs flat strings in component props

When a list needs more than one piece of information per item (e.g. a bold title + a subtitle), use an array of objects instead of plain strings:

```js
// Before
aboutEducationList: string[]

// After
aboutEducationList: { title: string; subtitle: string }[]
```

Update the `interface Props` in the component and the `.map()` rendering accordingly.

---

#### Making icons clickable instead of text

Wrap the icon `<div>` in an `<a>` tag and change the text value from `<a>` to `<p>`. Always add `aria-label` to icon-only links for accessibility since they have no visible text. Add a subtle hover state (e.g. background color change) to signal interactivity.

---

#### Image best practices for web

- Use JPEG or WebP source files — PNG is unnecessarily large for photos
- Astro's `<Image>` component auto-converts to WebP at build time
- ~200KB JPEG source is fine; Astro will compress further on output
- Files under ~1MB are acceptable to commit to git
