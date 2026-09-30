import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Globe, Share2, ExternalLink } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Products', href: '/products' },
  { label: 'Contact Us', href: '/contact' },
];

const services = [
  'Engineering Designs',
  'Project Management',
  'Energy Management',
  'Project Estimation & BOQs',
  'Engineering Construction',
];

export function Footer() {
  return (
    <footer className="bg-[#0D0F14] text-white">
      <div className="mx-auto max-w-[1360px] px-5 lg:px-20 py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-5 lg:col-span-1">
            <div>
              <Link href="/" className="inline-block">
                <div className="relative h-12 w-44">
                  <Image
                    src="/Sivec%20logo%20Whtie.png"
                    alt="SIVEC Engineering"
                    fill
                    className="object-contain object-left"
                  />
                </div>
              </Link>
              <p className="mt-2 text-xs font-bold uppercase tracking-[0.15em] text-white/40">
                Kadawatha, Sri Lanka
              </p>
            </div>
            <p className="text-sm leading-relaxed text-white/60 max-w-xs">
              Innovative Engineering Solutions for a Sustainable Future. Specialists in design,
              project management, energy management, and construction.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/50 transition-colors hover:border-[#48A9A6] hover:text-[#48A9A6]"
              >
                <Globe size={16} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/50 transition-colors hover:border-[#48A9A6] hover:text-[#48A9A6]"
              >
                <Share2 size={16} />
              </a>
              <a
                href="#"
                aria-label="Twitter / X"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/50 transition-colors hover:border-[#48A9A6] hover:text-[#48A9A6]"
              >
                <ExternalLink size={16} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.15em] text-white/40">
              Navigation
            </p>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-[#48A9A6]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.15em] text-white/40">
              Our Services
            </p>
            <ul className="flex flex-col gap-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-sm text-white/60 transition-colors hover:text-[#48A9A6]"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.15em] text-white/40">
              Contact
            </p>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-sm text-white/60">
                <MapPin size={16} className="mt-0.5 shrink-0 text-[#48A9A6]" />
                <span>536, Bandaranayke Mawatha,<br />Eldeniya, Kadawatha,<br />Sri Lanka</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/60">
                <Phone size={16} className="shrink-0 text-[#48A9A6]" />
                <a href="tel:+94756940358" className="hover:text-[#48A9A6] transition-colors">
                  +94 75 694 0358
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/60">
                <Mail size={16} className="shrink-0 text-[#48A9A6]" />
                <a href="mailto:info@sivecengineering.com" className="hover:text-[#48A9A6] transition-colors">
                  info@sivecengineering.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.06]">
        <div className="mx-auto max-w-[1360px] px-5 lg:px-20 py-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} SIVEC Engineering. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            Engineering Design &amp; Construction · Kadawatha, Sri Lanka
          </p>
        </div>
      </div>
    </footer>
  );
}
