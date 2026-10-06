import type { Metadata } from 'next';
import Link from 'next/link';
import { Check } from 'lucide-react';
import { CTA } from '@/components/marketing';
import { Reveal } from '@/components/reveal';
import { WaveEdge } from '@/components/wave-edge';

export const metadata: Metadata = {
  title: 'Limit Increase',
  description: "Raise Ember's per-server limits with the Max and Supporter plans.",
};

const plans = [
  {
    name: 'Max',
    price: '£2',
    description: 'Higher limits across the board, for servers that have outgrown the free tier.',
    featured: true,
    features: [
      'Everything in Free',
      'Welcome messages: 30 per event',
      'Dynamic images: 30',
      'Automations: 250',
      'Sticky messages: 200',
      'Auto thread messages: 200',
    ],
  },
  {
    name: 'Supporter',
    price: '£4',
    description: 'Everything in Max, plus perks for backing Ember in the Discord.',
    featured: false,
    features: [
      'Everything in Max',
      'Priority support',
      'Supporter role in the Discord',
      'Sneak peeks at new features in the Discord',
    ],
  },
];

const limits = [
  { feature: 'Welcome Messages (per event)', free: '3', paid: '30' },
  { feature: 'Dynamic Images', free: '3', paid: '30' },
  { feature: 'Automations', free: '50', paid: '250' },
  { feature: 'Sticky Messages', free: '30', paid: '200' },
  { feature: 'Auto Thread Messages', free: '30', paid: '200' },
];

export default function LimitIncreasePage() {
  return (
    <>
      <div className="premium-theme premium-green">
        <section className="section pt-16" aria-label="Limit Increase">
          <Reveal>
            <div className="section-heading mx-auto text-center">
              <p className="eyebrow justify-center">Premium</p>
              <h2>More headroom for busy servers.</h2>
              <p className="mx-auto">
                Limit Increase raises what Ember can keep up with: more welcome
                messages, images, automations and sticky posts, on Max or
                Supporter.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid items-stretch gap-5 lg:grid-cols-2">
            {plans.map((p, i) => (
              <Reveal key={p.name} delay={i * 90} className="h-full">
                <article className={`premium-card h-full ${p.featured ? 'featured' : ''}`}>
                  {p.featured && <span className="premium-badge">Best Value</span>}
                  <h3 className="text-[15px] font-semibold text-white">{p.name}</h3>
                  <p className="mt-3 text-4xl font-semibold tracking-tight text-white">
                    {p.price}
                    <span className="text-base font-normal text-zinc-500">/month</span>
                  </p>
                  <p className="mt-3 min-h-12 text-sm leading-6 text-zinc-400">{p.description}</p>
                  <ul className="mt-5 space-y-2.5 border-t border-white/[.07] pt-5 text-sm">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-zinc-300">
                        <Check size={15} className="accent-text mt-0.5 shrink-0" aria-hidden />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/invite"
                    className={`${p.featured ? 'button-primary button-accent' : 'button-secondary'} mt-7 w-full`}
                  >
                    Get started
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <div className="relative isolate overflow-hidden bg-[#1c1f24]">
          <WaveEdge placement="top" />
          <div className="relative z-10 mx-auto max-w-[88rem] overflow-x-auto px-5 py-20 sm:px-8 sm:py-24">
            <table className="w-full min-w-[34rem] border-collapse text-left">
              <caption className="sr-only">Ember limits on the Free plan compared with Max and Supporter</caption>
              <thead>
                <tr className="bg-white/[.03]">
                  <th scope="col" className="px-6 py-4">
                    <span className="sr-only">Feature</span>
                  </th>
                  <th scope="col" className="px-6 py-4 text-xs font-semibold uppercase tracking-[.12em] text-zinc-400">
                    Free
                  </th>
                  <th scope="col" className="accent-text px-6 py-4 text-xs font-semibold uppercase tracking-[.12em]">
                    Max/Supporter
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[.06]">
                {limits.map((row) => (
                  <tr key={row.feature} className="transition hover:bg-white/[.02]">
                    <th scope="row" className="px-6 py-5 text-base font-medium text-zinc-200">
                      {row.feature}
                    </th>
                    <td className="px-6 py-5 text-base text-zinc-400">{row.free}</td>
                    <td className="px-6 py-5 text-base font-semibold text-white">{row.paid}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <WaveEdge placement="bottom" />
        </div>
      </div>
      <CTA />
    </>
  );
}
