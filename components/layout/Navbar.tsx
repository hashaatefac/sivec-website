'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Products', href: '/products' },
  { label: 'Contact Us', href: '/contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
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
              className={cn(
                'object-contain object-left transition-all duration-300',
                scrolled ? 'brightness-0' : '',
              )}
              priority
            />
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
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
          ))}
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
            {navLinks.map((link) => (
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
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
