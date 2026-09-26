'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Logo } from './logo';
import { siteConfig } from '@/lib/config';

const links = [
  { href: '/#features', label: 'Features' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/docs', label: 'Docs' },
  { href: '/status', label: 'Status' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8"
      >
        <Logo />

        <div className="hidden items-center gap-1 md:flex">
          {links.map((x) => (
            <Link key={x.label} href={x.href} className="nav-link">
              {x.label}
            </Link>
          ))}
          <a
            href={siteConfig.githubUrl}
            className="nav-link inline-flex items-center gap-1"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <ArrowUpRight size={13} aria-hidden />
          </a>
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <Link href="/dashboard" className="nav-link">
            Dashboard
          </Link>
          <Link href="/invite" className="button-primary px-3.5 py-2">
            Add to Discord
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(!open)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/[.04] text-zinc-200 md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div
          id="mobile-nav"
          className="border-t border-white/[.07] bg-[#0d0a09]/98 px-5 pb-6 pt-2 backdrop-blur md:hidden"
        >
          {links.map((x) => (
            <Link
              key={x.label}
              onClick={() => setOpen(false)}
              href={x.href}
              className="block border-b border-white/[.05] py-3.5 text-[15px] text-zinc-200"
            >
              {x.label}
            </Link>
          ))}
          <a
            className="block border-b border-white/[.05] py-3.5 text-[15px] text-zinc-200"
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <Link
            onClick={() => setOpen(false)}
            href="/dashboard"
            className="block py-3.5 text-[15px] text-zinc-200"
          >
            Dashboard
          </Link>
          <Link
            onClick={() => setOpen(false)}
            href="/invite"
            className="button-primary mt-3 w-full"
          >
            Add to Discord
          </Link>
        </div>
      )}
    </header>
  );
}
