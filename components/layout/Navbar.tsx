'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { presenceCompanies } from '@/lib/presence';

type NavItem =
  | { label: string; href: string }
  | { label: string; items: string[] };

const navLinks: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Products', href: '/products' },
  { label: 'Our Presence', items: presenceCompanies },
  { label: 'Contact Us', href: '/contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-[200] h-[4.5rem] flex items-center',
        'transition-all duration-300',
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-black/[0.08] shadow-[0_1px_3px_rgba(0,0,0,0.06)]'
          : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex w-full max-w-[1360px] items-center justify-between px-5 lg:px-20">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <div className="relative h-12 w-44">
            <Image
              src="/Sivec%20logo%20Whtie.png"
              alt="SIVEC Engineering"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) =>
            'items' in link ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
                onKeyDown={(e) => e.key === 'Escape' && setDropdownOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setDropdownOpen((v) => !v)}
                  aria-expanded={dropdownOpen}
                  aria-haspopup="true"
                  className={cn(
                    'flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200',
                    scrolled
                      ? 'text-[#171717] hover:bg-black/[0.05]'
                      : 'text-white/90 hover:text-white hover:bg-white/[0.08]',
                  )}
                >
                  {link.label}
                  <ChevronDown
                    size={14}
                    className={cn('transition-transform duration-200', dropdownOpen && 'rotate-180')}
                  />
                </button>

                {dropdownOpen && (
                  <div className="absolute left-1/2 top-full w-[22rem] -translate-x-1/2 pt-2">
                    <ul className="rounded-2xl border border-black/[0.08] bg-white p-2 shadow-lg">
                      {link.items.map((item, i) => (
                        <li
                          key={item}
                          className="flex gap-3 rounded-lg px-3 py-2.5 text-sm text-[#171717] transition-colors duration-200 hover:bg-[#48A9A6]/10"
                        >
                          <span className="font-semibold text-[#48A9A6]">
                            {String(i + 1).padStart(2, '0')}.
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200',
                  isActive(link.href)
                    ? 'bg-[#48A9A6] text-white'
                    : scrolled
                    ? 'text-[#171717] hover:bg-black/[0.05]'
                    : 'text-white/90 hover:text-white hover:bg-white/[0.08]',
                )}
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className={cn(
            'flex h-10 w-10 items-center justify-center rounded-full md:hidden',
            'transition-colors duration-200',
            scrolled ? 'hover:bg-black/[0.05] text-[#171717]' : 'hover:bg-white/[0.08] text-white',
          )}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile overlay */}
      {menuOpen && (
        <div className="absolute inset-x-0 top-full bg-white border-b border-black/[0.08] shadow-lg md:hidden">
          <nav className="flex flex-col gap-1 px-5 py-4">
            {navLinks.map((link) =>
              'items' in link ? (
                <div key={link.label}>
                  <button
                    type="button"
                    onClick={() => setMobileDropdownOpen((v) => !v)}
                    aria-expanded={mobileDropdownOpen}
                    className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-base font-medium text-[#171717] transition-colors duration-200 hover:bg-black/[0.04]"
                  >
                    {link.label}
                    <ChevronDown
                      size={18}
                      className={cn('transition-transform duration-200', mobileDropdownOpen && 'rotate-180')}
                    />
                  </button>
                  {mobileDropdownOpen && (
                    <ul className="flex flex-col gap-1 pb-2 pl-4">
                      {link.items.map((item, i) => (
                        <li key={item} className="flex gap-3 rounded-lg px-4 py-2 text-sm text-[#171717]">
                          <span className="font-semibold text-[#48A9A6]">
                            {String(i + 1).padStart(2, '0')}.
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'rounded-lg px-4 py-3 text-base font-medium transition-colors duration-200',
                    isActive(link.href)
                      ? 'bg-[#48A9A6]/10 text-[#48A9A6]'
                      : 'text-[#171717] hover:bg-black/[0.04]',
                  )}
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
