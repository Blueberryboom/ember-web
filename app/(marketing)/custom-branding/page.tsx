import type { Metadata } from 'next';
import Link from 'next/link';
import { Check } from 'lucide-react';
import { CTA } from '@/components/marketing';
import { Reveal } from '@/components/reveal';
import { WaveEdge } from '@/components/wave-edge';

export const metadata: Metadata = {
  title: 'Custom Branding',
  description: 'Placeholder Ember premium page for custom branding.',
};

const features = [
  'Custom colours on Ember embeds',
  'Branded footer on Ember messages',
  'Your server icon on dynamic images',
];

export default function CustomBrandingPage() {
  return (
    <>
      <div className="relative isolate bg-[#1c1f24] py-6">
        <WaveEdge placement="top" />
        <section className="section premium-theme premium-blue relative z-10 pt-16" aria-label="Custom Branding">
          <Reveal>
            <div className="section-heading mx-auto text-center">
              <p className="eyebrow justify-center">Premium</p>
              <h2>Make Ember look like your server.</h2>
              <p className="mx-auto">
                Custom Branding will let Ember match your community&apos;s look and
                feel. Details below are placeholders while the offering is being
                finalised.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid items-stretch gap-5 lg:grid-cols-2">
            <Reveal className="h-full">
              <article className="premium-card featured h-full">
                <h3 className="text-[15px] font-semibold text-white">Custom Branding</h3>
                <p className="mt-3 text-4xl font-semibold tracking-tight text-white">
                  £X
                  <span className="text-base font-normal text-zinc-500">/month</span>
                </p>
                <p className="mt-3 min-h-12 text-sm leading-6 text-zinc-400">
                  Placeholder plan — pricing and scope are still being confirmed.
                </p>
                <ul className="mt-5 space-y-2.5 border-t border-white/[.07] pt-5 text-sm">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-zinc-300">
                      <Check size={15} className="accent-text mt-0.5 shrink-0" aria-hidden />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/invite" className="button-primary button-accent mt-7 w-full">
                  Get started
                </Link>
              </article>
            </Reveal>

            <Reveal delay={90} className="h-full">
              <article className="premium-card h-full">
                <p className="eyebrow">Placeholder</p>
                <h3 className="mt-3 text-[15px] font-semibold text-white">
                  Still being designed
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  Final options, limits and pricing for Custom Branding are not
                  locked in yet. Everything shown here is a placeholder and will
                  be replaced once the offering is confirmed.
                </p>
                <ul className="mt-5 space-y-2.5 border-t border-white/[.07] pt-5 text-sm text-zinc-300">
                  <li>What Ember will brand: embeds, generated images, message footers.</li>
                  <li>How it is configured: server-level settings in the dashboard.</li>
                  <li>When it ships: to be announced.</li>
                </ul>
              </article>
            </Reveal>
          </div>
        </section>
        <WaveEdge placement="bottom" />
      </div>
      <CTA />
    </>
  );
}
