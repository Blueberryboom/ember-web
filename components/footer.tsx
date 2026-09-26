import Link from 'next/link';
import { Logo } from './logo';
import { siteConfig } from '@/lib/config';

const groups = [
  {
    title: 'Product',
    links: [
      ['Features', '/#features'],
      ['Pricing', '/pricing'],
      ['Dashboard', '/dashboard'],
      ['Status', '/status'],
    ],
  },
  {
    title: 'Resources',
    links: [
      ['Documentation', '/docs'],
      ['Support', siteConfig.supportUrl],
      ['GitHub', siteConfig.githubUrl],
    ],
  },
  {
    title: 'Legal',
    links: [
      ['Privacy', '/privacy'],
      ['Terms', '/terms'],
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/[.07] bg-[#080606]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.6fr_repeat(3,1fr)]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-6 text-zinc-400">
            Discord moderation and utility, designed for communities that take
            trust seriously.
          </p>
          <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.03] px-3 py-1.5 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgb(52_211_153/.9)]" />
            All systems operational
          </p>
        </div>
        {groups.map((g) => (
          <nav key={g.title} aria-label={g.title}>
            <h2 className="text-[13px] font-semibold uppercase tracking-[.12em] text-zinc-500">
              {g.title}
            </h2>
            <ul className="mt-4 space-y-2.5">
              {g.links.map(([label, href]) => (
                <li key={label}>
                  {href.startsWith('/') || href.startsWith('/#') ? (
                    <Link className="footer-link" href={href}>
                      {label}
                    </Link>
                  ) : (
                    <a className="footer-link" href={href}>
                      {label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="border-t border-white/[.06]">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© 2026 Ember. Built for better communities.</p>
          <p className="text-zinc-600">Moderation · Utility · Community</p>
        </div>
      </div>
    </footer>
  );
}
