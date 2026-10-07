import Link from 'next/link';
import { Logo } from './logo';
import { siteConfig } from '@/lib/config';

const groups = [
  {
    title: 'Product',
    links: [
      ['Features', '/#features'],
      ['Limit Increase', '/limit-increase'],
      ['Custom Branding', '/custom-branding'],
      ['Dashboard', '/dashboard'],
      ['Status', '/status'],
    ],
  },
  {
    title: 'Resources',
    links: [
      ['Documentation', '/docs'],
      ['Support', siteConfig.supportUrl],
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

const WAVE = 'M0 40C240 0 480 0 720 40C960 80 1200 80 1440 40';

function FooterWave() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 2880 80"
      preserveAspectRatio="none"
      className="pointer-events-none absolute left-0 top-0 h-16 w-[200%] sm:h-24"
    >
      <path
        d={WAVE}
        fill="none"
        stroke="rgb(255 255 255 / 0.1)"
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d={WAVE}
        transform="translate(1440 0)"
        fill="none"
        stroke="rgb(255 255 255 / 0.1)"
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-[#080606]">
      <FooterWave />
      <div className="mx-auto grid max-w-[88rem] gap-10 px-5 pb-14 pt-28 sm:px-8 sm:pt-32 md:grid-cols-[1.6fr_repeat(3,1fr)]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-6 text-zinc-400">
            Discord moderation and utility, designed for communities that take
            trust seriously.
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
        <div className="mx-auto flex max-w-[88rem] flex-col gap-2 px-5 py-6 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© 2026 Ember. Built for better communities.</p>
        </div>
      </div>
    </footer>
  );
}
