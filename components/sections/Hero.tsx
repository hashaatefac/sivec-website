import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export function Hero() {
  return (
    <section
      className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-[4.5rem]"
      style={{
        backgroundImage:
          'linear-gradient(to bottom, rgba(13,15,20,0.75) 0%, rgba(13,15,20,0.65) 60%, rgba(13,15,20,0.90) 100%), url(/images/hero-main.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Teal glow accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#48A9A6]/10 blur-[100px]"
      />

      <div className="relative mx-auto max-w-[1360px] px-5 lg:px-20 py-24 lg:py-32">
        {/* Eyebrow */}
        <p className="mb-6 text-xs font-bold uppercase tracking-[0.15em] text-[#48A9A6]">
          Engineering Excellence in Sri Lanka
        </p>

        {/* Headline */}
        <h1 className="mb-6 max-w-4xl text-[2.75rem] font-[400] leading-[1.15] tracking-[-0.02em] text-white lg:text-[4rem]">
          Innovative Engineering Solutions{' '}
          <span className="text-[#48A9A6]">for a Sustainable Future</span>
        </h1>

        {/* Subtext */}
        <p className="mb-10 max-w-xl text-lg leading-relaxed text-white/60">
          From mini-hydro power plant design to energy management systems — SIVEC Engineering
          delivers precision engineering for Sri Lanka&apos;s most critical infrastructure projects.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-4">
          <Link href="/services">
            <Button variant="secondary" size="lg" withArrow>
              Explore Our Services
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="ghost-dark" size="lg">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div
        aria-hidden
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0D0F14] to-transparent"
      />
    </section>
  );
}
