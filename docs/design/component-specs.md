# SIVEC Component Specifications

> Production-ready component specs for the SIVEC website.
> All code is Next.js 16 · React 19 · Tailwind CSS v4 · TypeScript.
> Import design tokens from `docs/design/design-tokens.css` via `globals.css`.

---

## How to Read This Document

Each component spec includes:
- **Anatomy** — structural breakdown
- **Variants** — all supported configurations
- **States** — interactive states to implement
- **Tailwind classes** — ready-to-use class strings
- **Code** — reference implementation

---

## 1. Button

### Anatomy
`[Icon?] [Label] [Arrow Icon?]`

Button uses a **pill shape** (`rounded-full`) universally — this is the single consistent button shape across the system. It signals approachability within an otherwise structured, industrial interface.

### Variants

#### Primary (Teal — default)
Solid teal background. Used for the main CTA on any given view.

```tsx
// Tailwind classes
const primary = [
  'inline-flex items-center gap-2',
  'rounded-full px-6 h-12',
  'bg-[#48A9A6] text-white',
  'text-base font-medium',
  'transition-colors duration-[150ms]',
  'hover:bg-[#3A8E8B]',
  'hover:shadow-[0_4px_24px_rgba(72,169,166,0.25)]',
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#48A9A6]',
  'active:scale-[0.98] transition-transform',
].join(' ');
```

#### Secondary (Yellow — on dark backgrounds)
Yellow-lime background with dark text. Appears in hero sections and dark CTAs.

```tsx
const secondary = [
  'inline-flex items-center gap-2',
  'rounded-full px-6 h-12',
  'bg-[#F4F7D5] text-[#171717]',
  'text-base font-medium',
  'transition-colors duration-[150ms]',
  'hover:bg-[#E8ED9F]',
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F4F7D5]',
].join(' ');
```

#### Ghost (Outline — on light backgrounds)
Border-only button. Used for secondary actions next to a primary.

```tsx
const ghost = [
  'inline-flex items-center gap-2',
  'rounded-full px-6 h-12',
  'border border-black/[0.12] bg-transparent text-[#171717]',
  'text-base font-medium',
  'transition-colors duration-[150ms]',
  'hover:border-transparent hover:bg-black/[0.05]',
].join(' ');
```

#### Ghost Dark (Outline — on dark backgrounds)
```tsx
const ghostDark = [
  'inline-flex items-center gap-2',
  'rounded-full px-6 h-12',
  'border border-white/[0.15] bg-transparent text-white',
  'text-base font-medium',
  'transition-colors duration-[150ms]',
  'hover:border-transparent hover:bg-white/[0.08]',
].join(' ');
```

### States
| State | Visual change |
|---|---|
| Default | Solid fill, no shadow |
| Hover | Darken fill by one step + teal shadow glow (primary only) |
| Focus | 2px teal ring, 2px offset |
| Active | `scale(0.98)` — 50ms |
| Disabled | `opacity-40 cursor-not-allowed pointer-events-none` |
| Loading | Replace label with spinner + "Loading…" text |

### Reference Implementation

```tsx
// app/components/ui/Button.tsx
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'ghost-dark';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  withArrow?: boolean;
  loading?: boolean;
  asChild?: boolean;
}

const variants: Record<ButtonVariant, string> = {
  primary:    'bg-[#48A9A6] text-white hover:bg-[#3A8E8B] hover:shadow-[0_4px_24px_rgba(72,169,166,0.25)]',
  secondary:  'bg-[#F4F7D5] text-[#171717] hover:bg-[#E8ED9F]',
  ghost:      'border border-black/[0.12] text-[#171717] hover:border-transparent hover:bg-black/[0.05]',
  'ghost-dark': 'border border-white/[0.15] text-white hover:border-transparent hover:bg-white/[0.08]',
};

const sizes: Record<ButtonSize, string> = {
  sm: 'h-10 px-5 text-sm gap-1.5',
  md: 'h-12 px-6 text-base gap-2',
  lg: 'h-14 px-8 text-lg gap-2',
};

export function Button({
  variant = 'primary',
  size = 'md',
  withArrow = false,
  loading = false,
  disabled,
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-full font-medium',
        'transition-all duration-150',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#48A9A6]',
        'active:scale-[0.98]',
        'disabled:opacity-40 disabled:pointer-events-none',
        variants[variant],
        sizes[size],
        className,
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <>
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
          <span>Loading…</span>
        </>
      ) : (
        <>
          {children}
          {withArrow && <ArrowRight size={16} strokeWidth={1.5} />}
        </>
      )}
    </button>
  );
}
```

---

## 2. Card

### Anatomy
```
┌──────────────────────────────────┐
│  [Image / Icon Area — optional]  │
│  ──────────────────────────────  │
│  [Eyebrow label]                 │
│  [Heading]                       │
│  [Body text]                     │
│  [Footer / CTA — optional]       │
└──────────────────────────────────┘
```

### Variants

#### Service Card (dark surface, icon top)
Used in the Services grid section on a dark background.

```tsx
const serviceCard = [
  'group relative flex flex-col gap-5 rounded-xl p-7',
  'bg-[#1A1E28] border border-white/[0.08]',
  'transition-all duration-300',
  'hover:border-[#48A9A6]/40 hover:shadow-[0_8px_32px_rgba(72,169,166,0.12)]',
  'hover:-translate-y-1',
].join(' ');
```

```tsx
// Icon wrapper
const iconWrap = 'w-12 h-12 rounded-lg bg-[#48A9A6]/10 flex items-center justify-center text-[#48A9A6]';

// Eyebrow
const eyebrow = 'text-xs font-bold tracking-widest uppercase text-[#48A9A6]';

// Heading
const heading = 'text-xl font-regular text-white leading-snug';

// Body
const body = 'text-sm text-white/60 leading-relaxed';
```

#### Insight / Blog Card (light surface, image top)
```tsx
const insightCard = [
  'group flex flex-col rounded-xl overflow-hidden',
  'bg-white border border-black/[0.08]',
  'shadow-[0_2px_8px_rgba(0,0,0,0.06)]',
  'transition-all duration-300',
  'hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)]',
  'hover:-translate-y-1',
].join(' ');
```

Image area: `aspect-video w-full object-cover`
Card body: `flex flex-col gap-3 p-6`

#### Stat Card (dark, large number)
Used in stats sections.
```tsx
const statCard = [
  'flex flex-col gap-1 py-8 px-6 rounded-xl',
  'bg-[#1A1E28] border border-white/[0.06]',
].join(' ');
```

### States
| State | Effect |
|---|---|
| Default | Flat or minimal shadow |
| Hover | Lift (`-translate-y-1`), deeper shadow, teal border tint |
| Focus-within | Teal ring on focusable child |

---

## 3. Navbar

### Anatomy
```
┌─────────────────────────────────────────────────────────────────┐
│  [Logo SVG]   [Nav Links]   [Contact CTA]   [☰ Menu Toggle]    │
└─────────────────────────────────────────────────────────────────┘
```

### Behavior
- **Transparent** when at page top on dark hero sections
- **White + border-bottom** after 80px scroll on light sections
- **Mobile**: Hidden links → full-screen overlay menu (same pattern as reference)
- Max container width: `1360px`
- Height: `72px` (`h-18`)

### States

| State | Background | Border | Logo |
|---|---|---|---|
| Top of page (dark hero) | `transparent` | none | White variant |
| Scrolled (dark hero) | `rgba(13,15,20,0.9)` + blur | `white/10` | White variant |
| Scrolled (light page) | `white` | `black/10` | Dark variant |

### Tailwind Classes

```tsx
// Outer wrapper — fixed full width
const navbarWrapper = [
  'fixed top-0 left-0 right-0 z-[200]',
  'h-18 flex items-center',
  'transition-all duration-300',
].join(' ');

// Scrolled state (add via JS on scroll)
const navbarScrolled = 'bg-white/95 backdrop-blur-md border-b border-black/[0.08] shadow-sm';

// Nav link
const navLink = [
  'rounded-full px-4 py-2 text-sm font-medium',
  'transition-colors duration-200',
  'hover:bg-black/[0.05]',
  // Active:
  'aria-[current=page]:bg-[#48A9A6] aria-[current=page]:text-white',
].join(' ');

// Contact button (uses Button component, variant="primary", size="sm")
// Hamburger toggle
const menuToggle = 'flex h-10 w-10 items-center justify-center rounded-full hover:bg-black/[0.05]';
```

### Reference Implementation

```tsx
// app/components/layout/Navbar.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Clients', href: '/clients' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-[200] h-[4.5rem] flex items-center',
        'transition-all duration-300',
        scrolled && 'bg-white/95 backdrop-blur-md border-b border-black/[0.08] shadow-[0_1px_3px_rgba(0,0,0,0.06)]',
      )}
    >
      <div className="container mx-auto flex max-w-[1360px] items-center justify-between px-5 lg:px-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          {/* Replace with actual SVG */}
          <span className="text-lg font-bold tracking-tight text-[#48A9A6]">SIVEC</span>
        </Link>

        {/* Desktop links */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-[#171717] transition-colors duration-200 hover:bg-black/[0.05]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-3">
          <Button variant="primary" size="sm" withArrow className="hidden md:inline-flex">
            Contact us
          </Button>
          <button
            onClick={() => setMenuOpen(v => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-black/[0.05] md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile overlay menu */}
      {menuOpen && (
        <div className="absolute inset-x-0 top-full bg-white border-b border-black/[0.08] shadow-lg md:hidden">
          <nav className="container flex flex-col gap-1 px-5 py-4">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-base font-medium text-[#171717] hover:bg-black/[0.04]"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 pt-3 border-t border-black/[0.08]">
              <Button variant="primary" className="w-full justify-center">
                Contact us
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
```

---

## 4. Hero Section

### Anatomy
```
┌─────────────────────────────────────────────────────┐
│  [Dark background: #0D0F14]                         │
│                                                     │
│  [Eyebrow label]                                    │
│  [Main headline — 2–3 lines]                        │
│  [Supporting paragraph — 1–2 sentences]             │
│                                                     │
│  [Primary CTA]  [Secondary CTA]                     │
│                                                     │
│  ─────────────────────────────────────────────────  │
│  [Client logo strip — scrolling marquee]            │
└─────────────────────────────────────────────────────┘
```

### Design Decisions
- Full viewport height (`min-h-screen`) on desktop
- Dark background makes teal and yellow pop
- Headline uses `font-weight: 400` (not bold) — Almarai's regular weight is already authoritative
- CTA pair: Primary (yellow) + Ghost-dark (outline) — reversed from the standard primary (teal) pairing used elsewhere, because yellow reads better against the dark hero

### Tailwind Classes

```tsx
// Section wrapper
const heroSection = [
  'relative flex flex-col justify-end',
  'min-h-screen pt-[4.5rem]',         // clears navbar
  'bg-[#0D0F14]',
  'overflow-hidden',
].join(' ');

// Eyebrow
const eyebrow = 'text-xs font-bold tracking-[0.15em] uppercase text-[#48A9A6]';

// Headline
const headline = [
  'text-[3rem] leading-[1.2] tracking-[-0.02em]',
  'font-[400] text-white',
  'lg:text-[4rem]',
].join(' ');

// Subheading
const subtext = 'text-lg leading-[1.5] text-white/60 max-w-lg';

// CTA row
const ctaRow = 'flex flex-wrap items-center gap-4';
```

### Reference Implementation

```tsx
// app/components/sections/Hero.tsx
import { Button } from '@/components/ui/Button';

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-[#0D0F14] pt-[4.5rem]">
      {/* Subtle teal glow in background */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#48A9A6]/10 blur-[100px]"
      />

      <div className="container relative mx-auto max-w-[1360px] px-5 py-20 lg:px-20">
        {/* Eyebrow */}
        <p className="mb-6 text-xs font-bold tracking-[0.15em] uppercase text-[#48A9A6]">
          Industrial · Electrical · Automation
        </p>

        {/* Headline */}
        <h1 className="mb-6 max-w-4xl text-[3rem] font-[400] leading-[1.2] tracking-[-0.02em] text-white lg:text-[4rem]">
          Engineering the Infrastructure{' '}
          <span className="text-[#48A9A6]">Saudi Arabia</span>{' '}
          Relies On
        </h1>

        {/* Subtext */}
        <p className="mb-10 max-w-lg text-lg leading-relaxed text-white/60">
          From high-voltage electrical systems to precision automation — SIVEC delivers
          end-to-end engineering solutions for the Kingdom's most critical projects.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-4">
          <Button variant="secondary" size="lg" withArrow>
            Our Services
          </Button>
          <Button variant="ghost-dark" size="lg">
            View Projects
          </Button>
        </div>
      </div>

      {/* Client logo strip */}
      <div className="border-t border-white/[0.08] py-6">
        <div className="container mx-auto max-w-[1360px] px-5 lg:px-20">
          <p className="mb-4 text-xs font-bold tracking-[0.12em] uppercase text-white/30">
            Trusted by Saudi Arabia's leading organisations
          </p>
          {/* Scrolling logo row — replace imgs with actual client logos */}
          <div className="flex items-center gap-10 overflow-hidden opacity-50 grayscale">
            {/* <img src="/logos/saudi-aramco.svg" alt="Saudi Aramco" className="h-7" /> */}
            {/* <img src="/logos/sabic.svg" alt="SABIC" className="h-6" /> */}
            {/* ... */}
          </div>
        </div>
      </div>
    </section>
  );
}
```

---

## 5. Stats Section

### Anatomy
```
┌──────────────────────────────────────────────────────┐
│  [Light gray background: #F5F5F5]                    │
│                                                      │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────┐ │
│  │  47+     │  │  500+    │  │  1,200+  │  │  98% │ │
│  │  Years   │  │  Projects│  │  Products│  │  On  │ │
│  │          │  │          │  │          │  │  time│ │
│  └──────────┘  └──────────┘  └──────────┘  └──────┘ │
└──────────────────────────────────────────────────────┘
```

### Design Decisions
- Numbers are the largest text on the page (`text-[5rem]` to `text-[8rem]`)
- `font-weight: 300` — light weight makes large numbers feel refined, not heavy
- Teal color on the number, neutral text on the label
- 4-column grid on desktop, 2-column on tablet, 1-column on mobile
- Light surface — sandwiched between two dark sections for contrast

### Tailwind Classes

```tsx
// Section
const statsSection = 'bg-[#F5F5F5] py-[6.25rem]';

// Grid
const statsGrid = 'grid grid-cols-2 gap-px bg-[#E8E8E8] lg:grid-cols-4';

// Individual stat cell
const statCell = 'flex flex-col gap-2 bg-[#F5F5F5] px-8 py-10';

// Number
const statNumber = [
  'text-[4rem] lg:text-[5rem]',
  'font-[300] leading-none tracking-[-0.03em]',
  'text-[#48A9A6]',
].join(' ');

// Label
const statLabel = 'text-sm font-medium uppercase tracking-widest text-[#62615A]';

// Description
const statDesc = 'text-base text-[#171717] leading-snug';
```

### Reference Implementation

```tsx
// app/components/sections/Stats.tsx
const stats = [
  { number: '47+', label: 'Years', description: 'of industry experience' },
  { number: '500+', label: 'Projects', description: 'delivered nationwide' },
  { number: '1,200+', label: 'Products', description: 'in our supply catalogue' },
  { number: '98%', label: 'On-time', description: 'project delivery rate' },
];

export function Stats() {
  return (
    <section className="bg-[#F5F5F5] py-[6.25rem]">
      <div className="container mx-auto max-w-[1360px] px-5 lg:px-20">
        <div className="grid grid-cols-2 gap-px bg-[#E8E8E8] rounded-xl overflow-hidden lg:grid-cols-4">
          {stats.map(stat => (
            <div key={stat.label} className="flex flex-col gap-2 bg-[#F5F5F5] px-8 py-10">
              <span className="text-[4rem] font-[300] leading-none tracking-[-0.03em] text-[#48A9A6] lg:text-[5rem]">
                {stat.number}
              </span>
              <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#62615A]">
                {stat.label}
              </span>
              <span className="text-base leading-snug text-[#171717]">
                {stat.description}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

## 6. Form

### Anatomy
```
┌────────────────────────────────────────┐
│  [Label]                               │
│  ┌──────────────────────────────────┐  │
│  │  Input field                     │  │
│  └──────────────────────────────────┘  │
│  [Helper text / Error message]         │
└────────────────────────────────────────┘
```

### Form Variants

#### Input Field
```tsx
// Base input
const inputBase = [
  'w-full h-12 rounded-lg px-4',
  'bg-white border border-black/[0.12] text-[#171717]',
  'text-base placeholder:text-[#9B9B9B]',
  'outline-none',
  'transition-colors duration-200',
  'hover:border-black/[0.20]',
  'focus:border-[#48A9A6] focus:ring-2 focus:ring-[#48A9A6]/20',
  'invalid:border-red-400',
  'disabled:opacity-50 disabled:cursor-not-allowed',
].join(' ');

// Textarea
const textarea = inputBase.replace('h-12', 'min-h-[7.5rem] py-3 resize-y');

// Select
const select = inputBase + ' cursor-pointer appearance-none bg-no-repeat bg-[right_1rem_center]';
```

#### Label
```tsx
const label = 'block text-sm font-medium text-[#171717] mb-1.5';
```

#### Helper / Error Text
```tsx
const helperText = 'mt-1.5 text-xs text-[#9B9B9B]';
const errorText = 'mt-1.5 text-xs text-red-500';
```

### States

| State | Border | Ring |
|---|---|---|
| Default | `black/12` | none |
| Hover | `black/20` | none |
| Focus | `#48A9A6` | `#48A9A6/20` 2px |
| Error | `red-400` | `red-400/20` 2px |
| Disabled | `black/12` | none, opacity 50% |
| Success | `green-500` | `green-500/20` 2px |

### Contact Form Reference Implementation

```tsx
// app/components/sections/ContactForm.tsx
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';

interface FormState {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
}

const services = [
  'Electrical Supplies',
  'Control & Automation',
  'HVAC & Fire Fighting',
  'Electrical Services',
  'Other / General Enquiry',
];

export function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: '', email: '', company: '', service: '', message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const update = (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm(f => ({ ...f, [field]: e.target.value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    // TODO: wire to API endpoint
    await new Promise(r => setTimeout(r, 1200));
    setStatus('success');
  }

  const inputClass = [
    'w-full h-12 rounded-lg px-4 bg-white border border-black/[0.12]',
    'text-base text-[#171717] placeholder:text-[#9B9B9B]',
    'outline-none transition-colors duration-200',
    'hover:border-black/[0.20]',
    'focus:border-[#48A9A6] focus:ring-2 focus:ring-[#48A9A6]/20',
  ].join(' ');

  return (
    <section className="bg-[#F5F5F5] py-[6.25rem]">
      <div className="container mx-auto max-w-[1360px] px-5 lg:px-20">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left — copy */}
          <div className="flex flex-col justify-center gap-6">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#48A9A6]">
              Get in touch
            </p>
            <h2 className="text-[2rem] font-[400] leading-snug tracking-[-0.01em] text-[#171717]">
              Start your next project with SIVEC
            </h2>
            <p className="text-base leading-relaxed text-[#62615A]">
              Our team is ready to discuss your requirements and provide
              expert guidance on the right solution for your project.
            </p>
            <div className="flex flex-col gap-3 text-sm text-[#62615A]">
              <p><span className="font-medium text-[#171717]">Email: </span>info@sivec.com.sa</p>
              <p><span className="font-medium text-[#171717]">Phone: </span>+966 X XXX XXXX</p>
            </div>
          </div>

          {/* Right — form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Row: Name + Email */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-[#171717]">
                  Full name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Ahmed Al-Rashid"
                  value={form.name}
                  onChange={update('name')}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-[#171717]">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="ahmed@company.com"
                  value={form.email}
                  onChange={update('email')}
                  className={inputClass}
                />
              </div>
            </div>

            {/* Company */}
            <div>
              <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-[#171717]">
                Company
              </label>
              <input
                id="company"
                type="text"
                placeholder="Your organisation"
                value={form.company}
                onChange={update('company')}
                className={inputClass}
              />
            </div>

            {/* Service select */}
            <div>
              <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-[#171717]">
                Service interested in
              </label>
              <select
                id="service"
                value={form.service}
                onChange={update('service')}
                className={inputClass + ' cursor-pointer'}
              >
                <option value="">Select a service…</option>
                {services.map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-[#171717]">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                placeholder="Tell us about your project…"
                value={form.message}
                onChange={update('message')}
                className={inputClass.replace('h-12', 'py-3 resize-y min-h-[7.5rem]')}
              />
            </div>

            {/* Submit */}
            <Button
              type="submit"
              variant="primary"
              size="lg"
              loading={status === 'loading'}
              withArrow
              className="self-start"
            >
              Send enquiry
            </Button>

            {status === 'success' && (
              <p className="text-sm font-medium text-[#48A9A6]">
                Message sent — we'll be in touch within 24 hours.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
```

---

## Utility: `cn()` helper

Required by all components above. Create once and import everywhere:

```ts
// lib/utils.ts
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

Install deps:
```bash
npm install clsx tailwind-merge lucide-react
```

---

## globals.css Integration

After importing `design-tokens.css`, surface tokens as Tailwind v4 utilities via `@theme`:

```css
/* app/globals.css */
@import "tailwindcss";
@import "../docs/design/design-tokens.css";

@theme inline {
  /* Fonts */
  --font-sans: var(--font-display);

  /* Brand colors as Tailwind color utilities */
  --color-brand:          #48A9A6;
  --color-brand-hover:    #3A8E8B;
  --color-brand-light:    #8DCFCD;
  --color-accent:         #F4F7D5;
  --color-secondary:      #736795;
  --color-dark:           #0D0F14;

  /* Surface utilities */
  --color-background:     #FFFFFF;
  --color-surface-dark:   #0D0F14;
  --color-surface-card-dark: #1A1E28;
}
```

---

## Component Inventory

| Component | File | Status |
|---|---|---|
| Button | `components/ui/Button.tsx` | Spec complete |
| Card | `components/ui/Card.tsx` | Spec complete |
| Navbar | `components/layout/Navbar.tsx` | Spec complete |
| Hero | `components/sections/Hero.tsx` | Spec complete |
| Stats | `components/sections/Stats.tsx` | Spec complete |
| ContactForm | `components/sections/ContactForm.tsx` | Spec complete |
| Footer | `components/layout/Footer.tsx` | — |
| Services Grid | `components/sections/Services.tsx` | — |
| Client Logos | `components/sections/Clients.tsx` | — |
| Case Studies | `components/sections/CaseStudies.tsx` | — |
