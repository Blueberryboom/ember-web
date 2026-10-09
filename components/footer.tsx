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

const WAVE_FILL = 'M0 0H1440V20C1200 20 960 80 720 80C480 80 240 20 0 20Z';
const WAVE_LINE = 'M0 20C240 20 480 80 720 80C960 80 1200 20 1440 20';

function FooterWave() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 2880 100"
      preserveAspectRatio="none"
      className="pointer-events-none absolute left-0 top-0 h-[70px] w-[200%] sm:h-20"
    >
      {[0, 1440].map((x) => (
        <g key={x} transform={`translate(${x} 0)`}>
          <path d={WAVE_FILL} fill="var(--ember-bg)" />
          <path
            d={WAVE_LINE}
            fill="none"
            stroke="rgb(255 255 255 / 0.08)"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
          />
        </g>
      ))}
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
            The best all-in-one discord bot that your server has ever seen.
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
          <p>© 2026 Blueberryboom. </p>
        </div>
      </div>
    </footer>
  );
}
