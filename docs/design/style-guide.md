# SIVEC Style Guide

> Design system for SIVEC — Saudi industrial electrical, automation & engineering company.
> Stack: **Next.js 16 · React 19 · Tailwind CSS v4 · TypeScript**

---

## Aesthetic Direction

**Concept: Precision Industrial**

SIVEC operates at the intersection of high-voltage infrastructure and digital modernity. The design system reflects that duality: the weight and reliability of industrial engineering paired with the clarity and intelligence of modern B2B software design.

- **Dark sections** feel powerful and authoritative (dark navy `#0D0F14`)
- **Light sections** feel clean and approachable (white `#FFFFFF` / near-white `#F5F5F5`)
- **Teal** is the energy — it activates, calls to action, signals progress
- **Yellow-lime** is the accent — used sparingly for selection, highlight, and delight
- **Purple** is the secondary brand presence — badges, tags, decorative callouts

All components alternate between light and dark surfaces. No two adjacent sections share the same surface.

---

## 1. Color Palette

### Primary — Teal

| Token | Hex | Usage |
|---|---|---|
| `--color-teal-400` | `#48A9A6` | Primary action, CTAs, active states, icons |
| `--color-teal-500` | `#3A8E8B` | Hover state for primary buttons |
| `--brand-primary-light` | `#8DCFCD` | Icon backgrounds, soft highlights |
| `--color-teal-50` | `#E8F5F5` | Very light teal backgrounds, tinted chips |

**Usage rule:** Teal appears on interactive elements and key brand moments. Not every section needs teal — let it breathe.

### Accent — Yellow-Lime

| Token | Hex | Usage |
|---|---|---|
| `--color-yellow-200` | `#F4F7D5` | Text selection, badge backgrounds, section accents |
| `--color-yellow-300` | `#E8ED9F` | Hover state for accent elements |

**Usage rule:** Yellow is the surprise. Use it as a highlight color, for `::selection`, for active chip/badge backgrounds, or as a button variant on dark backgrounds. Never as a primary surface fill.

### Secondary — Purple

| Token | Hex | Usage |
|---|---|---|
| `--color-purple-600` | `#736795` | Service tags, category labels, decorative accents |
| `--color-purple-100` | `#DEDEF7` | Purple hover states, chip backgrounds |

### Neutral

| Token | Value | Usage |
|---|---|---|
| `--color-neutral-950` | `#0D0F14` | Dark section background |
| `--color-neutral-900` | `#171717` | Primary body text (light sections) |
| `--color-neutral-600` | `#62615A` | Secondary text, captions |
| `--color-neutral-400` | `#9B9B9B` | Muted / placeholder text |
| `--color-neutral-200` | `#C6C6C6` | Borders, dividers |
| `--color-neutral-50` | `#F5F5F5` | Subtle page backgrounds, table stripes |
| `--color-neutral-0` | `#FFFFFF` | Cards, page background |

### Do / Don't

| Do | Don't |
|---|---|
| Use teal for primary CTAs | Use teal as a background fill for full sections |
| Use yellow sparingly for delight | Use yellow for body text (contrast is insufficient) |
| Alternate light/dark sections | Stack two dark or two light sections together |
| Use purple for categorization | Use purple for primary CTAs |

---

## 2. Typography

**Font family:** [Almarai](https://fonts.google.com/specimen/Almarai) — chosen for bilingual Arabic/Latin support, clean geometric structure, and strong industrial character.

Load in `layout.tsx`:

```tsx
import { Almarai } from 'next/font/google';

const almarai = Almarai({
  weight: ['300', '400', '700'],
  subsets: ['latin', 'arabic'],
  variable: '--font-almarai',
  display: 'swap',
});
```

### Type Scale

| Role | Token | Size | Weight | Line Height | Tracking |
|---|---|---|---|---|---|
| Display / Hero | `--text-4xl` | 4rem (64px) | 400 | 1.20 | –0.02em |
| H1 | `--text-3xl` | 3rem (48px) | 400 | 1.20 | –0.01em |
| H2 | `--text-2xl` | 2rem (32px) | 400 | 1.25 | –0.01em |
| H3 | `--text-xl` | 1.5rem (24px) | 400 | 1.33 | 0 |
| H4 / Lead | `--text-lg` | 1.25rem (20px) | 400 | 1.40 | 0 |
| Body | `--text-base` | 1rem (16px) | 400 | 1.50 | 0 |
| Small | `--text-sm` | 0.875rem (14px) | 400 | 1.50 | 0 |
| Caption / Label | `--text-xs` | 0.75rem (12px) | 700 | 1.33 | +0.10em |
| Micro | `--text-2xs` | 0.675rem (10.8px) | 700 | 1.33 | +0.15em |
| Stat Display | `--text-display` | 10rem (160px) | 300 | 1.00 | –0.02em |

### Typographic Patterns

**Section eyebrow (uppercase label above heading):**
```
font-size: var(--text-xs)
font-weight: var(--weight-bold)
letter-spacing: var(--tracking-wider)
text-transform: uppercase
color: var(--brand-primary)
```

**Hero heading:**
```
font-size: var(--text-4xl)
font-weight: var(--weight-regular)
line-height: var(--leading-tight)
letter-spacing: var(--tracking-tighter)
```

**Stat number:**
```
font-size: var(--text-display)
font-weight: var(--weight-light)
line-height: 1
letter-spacing: var(--tracking-tighter)
color: var(--brand-primary)
```

---

## 3. Spacing & Layout

### Spacing Scale

| Token | Rem | Px |
|---|---|---|
| `--space-1` | 0.25rem | 4px |
| `--space-2` | 0.5rem | 8px |
| `--space-3` | 0.75rem | 12px |
| `--space-4` | 1rem | 16px |
| `--space-5` | 1.25rem | 20px |
| `--space-6` | 1.5rem | 24px |
| `--space-8` | 2rem | 32px |
| `--space-10` | 2.5rem | 40px |
| `--space-12` | 3rem | 48px |
| `--space-16` | 4rem | 64px |
| `--space-20` | 5rem | 80px |
| `--space-24` | 6rem | 96px |

### Section Rhythm

Every full-width section uses consistent vertical padding:

| Variant | Padding Y | Use case |
|---|---|---|
| Compact | `var(--section-gap-sm)` = 4rem | Inline stats, banner strips |
| Standard | `var(--section-gap-md)` = 6.25rem | Most content sections |
| Spacious | `var(--section-gap-lg)` = 8rem | Hero, marquee moments |

### Container

Max-width: `1360px` (`--container-2xl`). Horizontal padding: `1.25rem` on mobile, `2.5rem` on tablet, `5rem` on desktop.

```css
.container {
  width: 100%;
  max-width: var(--container-2xl);
  margin-inline: auto;
  padding-inline: var(--space-5);
}

@media (min-width: 768px)  { .container { padding-inline: var(--space-10); } }
@media (min-width: 1024px) { .container { padding-inline: var(--space-20); } }
```

### Grid

- **12-column grid** for desktop, collapsing to 4 on mobile
- Standard 2-col content: `grid-cols-[1fr_1fr]` desktop → `grid-cols-1` mobile
- Content-heavy 3-col: `grid-cols-3` desktop → `grid-cols-1` mobile, gap `2rem`
- Asymmetric hero split: `grid-cols-[1fr_1.2fr]` — text slightly narrower than visual

---

## 4. Border Radius

| Token | Value | Usage |
|---|---|---|
| `--radius-sm` | 0.375rem | Chips, tags, small badges |
| `--radius-md` | 0.5rem | Input fields, small cards |
| `--radius-lg` | 0.75rem | Standard cards, dropdowns |
| `--radius-xl` | 1rem | Large cards, modal dialogs |
| `--radius-2xl` | 1.5rem | Feature panels, hero images |
| `--radius-full` | 9999px | Pills, avatar circles, CTA buttons |

Buttons use `--radius-full` (pill shape) — a deliberate, premium B2B choice.

---

## 5. Elevation & Shadows

Shadows are used to signal interactivity and depth, not decoration.

| Token | Value | Usage |
|---|---|---|
| `--shadow-xs` | `0 1px 3px rgba(0,0,0,0.06)` | Subtle card lift |
| `--shadow-sm` | `0 2px 8px rgba(0,0,0,0.08)` | Default cards |
| `--shadow-md` | `0 4px 16px rgba(0,0,0,0.10)` | Hovered cards, dropdowns |
| `--shadow-lg` | `0 8px 32px rgba(0,0,0,0.12)` | Modals, popovers |
| `--shadow-teal` | `0 4px 24px rgba(72,169,166,0.25)` | Teal button hover glow |
| `--shadow-teal-strong` | `0 8px 40px rgba(72,169,166,0.35)` | Focus state on dark bg |

---

## 6. Motion & Animation

**Philosophy:** Purposeful and mechanical — like a control system actuating. No decorative bounce. Animations should signal state change, not demand attention.

| Token | Duration | Easing | Use |
|---|---|---|---|
| Instant | 50ms | linear | Selection, checkbox |
| Fast | 150ms | ease-out | Button hover |
| Normal | 200ms | ease-out | Background color, border |
| Slow | 300ms | ease-out | Dropdown open, card reveal |
| Slower | 500ms | ease-out | Section entrance (scroll) |
| Slowest | 800ms | ease-out | Hero text stagger |

**Scroll entrance pattern** (use with Intersection Observer):
```css
.reveal {
  opacity: 0;
  transform: translateY(1.5rem);
  transition:
    opacity var(--duration-slower) var(--ease-out),
    transform var(--duration-slower) var(--ease-out);
}
.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}
```

**Stagger children** (delay each child by 60ms):
```tsx
style={{ transitionDelay: `${index * 60}ms` }}
```

---

## 7. Iconography

Use **Lucide React** (`lucide-react`) for all UI icons — thin stroke style matches Almarai's clean geometry.

- Standard size: `20px` (`w-5 h-5`)
- Large / hero: `24px` (`w-6 h-6`)
- Stroke width: `1.5` (default)

Arrow icon used in CTAs:
```tsx
import { ArrowRight } from 'lucide-react';
<ArrowRight size={16} strokeWidth={1.5} />
```

---

## 8. Section Alternation Pattern

Every page follows a strict dark/light alternation to create visual rhythm:

```
Navbar          → transparent / white
Hero            → DARK  (#0D0F14)
Stats Strip     → LIGHT (#F5F5F5)
Services        → DARK  (#0D0F14)
Clients/Logos   → LIGHT (#FFFFFF)
About / Mission → DARK  (#0D0F14)
Case Studies    → LIGHT (#FFFFFF)
CTA Banner      → TEAL  (#48A9A6) — used once only
Footer          → DARK  (#0D0F14)
```

---

## 9. Photography Guidelines

Photos in the reference show real industrial job sites, team portraits, and product shots:

- Prefer **black-and-white or desaturated** images in dark sections — teal overlays or duotone
- **Full-color** photography in light sections
- Always use `object-cover` with defined aspect ratios (`aspect-video`, `aspect-square`)
- Avoid stock photo aesthetics — use authentic project photography where possible
- Overlay text needs minimum `4.5:1` contrast ratio (WCAG AA)

---

## 10. Accessibility

| Requirement | Standard |
|---|---|
| Text contrast | WCAG AA (4.5:1 normal, 3:1 large) |
| Focus indicators | 2px teal ring, 3px offset |
| Interactive target size | 44×44px minimum |
| Reduced motion | Respect `prefers-reduced-motion` |
| RTL support | All components work in RTL (Almarai supports Arabic) |

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```
