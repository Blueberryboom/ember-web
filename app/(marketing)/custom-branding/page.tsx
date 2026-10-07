import type { Metadata } from 'next';
import Link from 'next/link';
import { Check } from 'lucide-react';
import { Faq } from '@/components/faq';
import { Reveal } from '@/components/reveal';
import { WaveEdge } from '@/components/wave-edge';

export const metadata: Metadata = {
  title: 'Custom Branding',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
};

const features = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  'Sed do eiusmod tempor incididunt ut labore et dolore magna',
  'Ut enim ad minim veniam, quis nostrud exercitation ullamco',
];

const details = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Duis aute irure dolor in reprehenderit in voluptate velit esse.',
  'Excepteur sint occaecat cupidatat non proident, sunt in culpa.',
];

const faqs = [
  {
    q: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
    a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    q: 'Duis aute irure dolor in reprehenderit in voluptate velit esse?',
    a: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    q: 'Excepteur sint occaecat cupidatat non proident?',
    a: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
  },
];

export default function CustomBrandingPage() {
  return (
    <div className="premium-theme premium-blue">
      <section className="section pt-16" aria-label="Custom Branding">
        <Reveal>
          <div className="section-heading mx-auto text-center">
            <p className="eyebrow justify-center">Premium</p>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
            <p className="mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid items-stretch gap-5 lg:grid-cols-2">
          <Reveal className="h-full">
            <article className="premium-card featured h-full">
              <span className="premium-badge">Placeholder</span>
              <h3 className="text-[15px] font-semibold text-white">
                Custom Branding
              </h3>
              <p className="mt-3 text-4xl font-semibold tracking-tight text-white">
                £X
                <span className="text-base font-normal text-zinc-500">/month</span>
              </p>
              <p className="mt-3 min-h-12 text-sm leading-6 text-zinc-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore.
              </p>
              <ul className="mt-5 space-y-2.5 border-t border-white/[.07] pt-5 text-sm">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-zinc-300">
                    <Check size={15} className="accent-text mt-0.5 shrink-0" aria-hidden />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="https://dash.emberbot.dev/premium/get_started"
                className="button-primary button-accent mt-7 w-full"
              >
                Get started
              </Link>
            </article>
          </Reveal>

          <Reveal delay={90} className="h-full">
            <article className="premium-card h-full">
              <p className="eyebrow">Placeholder</p>
              <h3 className="mt-3 text-[15px] font-semibold text-white">
                Lorem ipsum dolor sit amet
              </h3>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Duis aute irure dolor in reprehenderit in voluptate velit.
              </p>
              <ul className="mt-5 space-y-2.5 border-t border-white/[.07] pt-5 text-sm text-zinc-300">
                {details.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>
      </section>

      <div className="relative isolate overflow-hidden bg-[#1c1f24]">
        <WaveEdge placement="top" />
        <div className="relative z-10 mx-auto max-w-[88rem] px-5 py-20 sm:px-8 sm:py-24">
          <Faq items={faqs} />
        </div>
        <WaveEdge placement="bottom" />
      </div>
    </div>
  );
}
