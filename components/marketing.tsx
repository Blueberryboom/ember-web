import Link from 'next/link';
import {
  ArrowRight,
  Check,
  LayoutDashboard,
  Network,
  ServerCog,
  ShieldCheck,
  SlidersHorizontal,
  Terminal,
  Ticket,
  Unlock,
} from 'lucide-react';
import { placeholderStats, pricingPlans } from '@/lib/config';
import { Reveal } from './reveal';
import { DashboardShowcase } from './dashboard-showcase';

/* ---------------- Hero ---------------- */

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* faint grid backdrop */}
      <div className="hero-grid absolute inset-0" aria-hidden />

      <div className="relative mx-auto max-w-[88rem] px-5 pb-16 pt-20 sm:px-8 sm:pt-28 lg:pt-24">
        <div className="lg:grid lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-14">
          <div className="text-center lg:text-left">
            <Reveal delay={90}>
              <h1 className="mx-auto mt-7 max-w-4xl text-balance text-5xl font-semibold leading-[1.02] tracking-[-0.045em] text-white sm:text-6xl lg:mx-0 xl:text-7xl">
                A calmer, safer Discord server,{' '}
                <span className="text-ember-400">
                  powered by Ember.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={170}>
              <p className="lead mx-auto mt-6 max-w-2xl text-pretty lg:mx-0">
                Ember is a modern moderation and utility bot for communities that
                take trust seriously: clear automod, useful commands, and honest
                logs, without the clutter.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
                <Link href="/invite" className="button-primary w-full px-6 py-3 text-[15px] sm:w-auto">
                  Add Ember to Discord <ArrowRight size={16} aria-hidden />
                </Link>
                <Link href="#features" className="button-secondary w-full px-6 py-3 text-[15px] sm:w-auto">
                  Explore Features
                </Link>
              </div>
              <p className="mt-5 text-[13px] text-zinc-500">
                Free for small servers · Set up in minutes · No credit card
              </p>
            </Reveal>
          </div>

          <Reveal delay={300} className="relative mt-14 w-full text-left lg:mt-0">
            <DashboardShowcase />
            <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[12px] text-zinc-500 lg:justify-start">
              <span className="inline-flex items-center gap-1.5"><ShieldCheck size={13} className="text-ember-400" /> Automod + logging</span>
              <span className="inline-flex items-center gap-1.5"><Terminal size={13} className="text-ember-400" /> Slash commands</span>
              <span className="inline-flex items-center gap-1.5"><ServerCog size={13} className="text-ember-400" /> Per-server config</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Why Ember? ---------------- */

const whyEmber = [
  { icon: SlidersHorizontal, title: 'Truly Customizable', desc: "Configure commands, messages, and behavior to match your server's unique needs!" },
  { icon: Unlock, title: 'No Paywalls', desc: 'All features are completely free with generous limits. We only charge you for features that genuinely cost us money.' },
  { icon: Network, title: 'Server Networks', desc: 'Link multiple servers together for unified moderation, synchronized bans, and centralized management.' },
  { icon: Ticket, title: 'Professional Tickets', desc: 'Create a ticket system that feels like a custom-built system, not a generic bot feature.' },
  { icon: LayoutDashboard, title: 'Clean Dashboard', desc: 'Manage everything from an intuitive control panel, with no complex discord commands necessary.' },
  { icon: ShieldCheck, title: 'Protect Your Server', desc: 'Keep your server safe with our advanced verification, automod, and moderation systems!' },
];

export function Features() {
  return (
    <section className="section pb-0" id="features" aria-label="Why Ember?">
      <Reveal>
        <div className="section-heading">
          <p className="eyebrow">Why Ember?</p>
          <h2>Everything your server needs, nothing it doesn&apos;t.</h2>
          <p>Six reasons communities choose Ember, from deep customization to serious protection.</p>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {whyEmber.map((f, i) => (
          <Reveal key={f.title} delay={(i % 3) * 80}>
            <article className="feature-card h-full">
              <div className="icon-chip"><f.icon size={19} /></div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------------- How it works ---------------- */

const steps = [
  { n: '1', title: 'Add Ember', desc: 'Invite Ember with the permissions it needs. It joins quietly. No spam, no setup walls.' },
  { n: '2', title: 'Tune it once', desc: 'Pick automod strictness, log channels and roles in the dashboard. Sensible defaults included.' },
  { n: '3', title: 'Stay in control', desc: 'Ember handles the noise while your mods handle the humans. Check the logs any time.' },
];

export function HowItWorks() {
  return (
    <section className="section" aria-label="How it works">
      <Reveal>
        <div className="section-heading">
          <p className="eyebrow">Setup</p>
          <h2>Live in three short steps.</h2>
          <p>From invite to protected in minutes. Most servers never touch a config file.</p>
        </div>
      </Reveal>
      <ol className="mt-10 grid gap-4 md:grid-cols-3">
        {steps.map((s, i) => (
          <Reveal key={s.n} delay={i * 90}>
            <li className="panel panel-hover relative h-full p-6">
              <span className="font-mono text-[13px] font-semibold text-ember-400">Step {s.n}</span>
              <h3 className="mt-2.5 text-lg font-semibold tracking-tight text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-400">{s.desc}</p>
              {i < 2 && (
                <ArrowRight size={16} aria-hidden className="absolute right-5 top-6 hidden text-zinc-600 md:block" />
              )}
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}

/* ---------------- Stats ---------------- */

export function Stats() {
  const items = [
    { value: placeholderStats.servers, label: 'Servers protected' },
    { value: placeholderStats.commands, label: 'Commands available' },
    { value: placeholderStats.uptime, label: 'Uptime' },
  ];
  return (
    <section className="border-y border-white/[.06] bg-white/[.015]" aria-label="Trust">
      <div className="mx-auto max-w-[88rem] px-5 py-14 sm:px-8 sm:py-16">
        <Reveal>
          <div className="grid gap-10 text-center sm:grid-cols-3">
            {items.map((s) => (
              <div key={s.label}>
                <p className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                  {s.value}
                </p>
                <p className="mt-2 text-sm text-zinc-400">{s.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-xs text-zinc-600">
            Illustrative preview figures. Live network stats will appear here once connected.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Pricing ---------------- */

const planFeatures: Record<string, string[]> = {
  Free: ['Core moderation tools', 'Essential utility commands', '1 log channel', 'Community support'],
  Pro: ['Everything in Free', 'Advanced automod rules', 'Custom commands', 'Priority support'],
  Unlimited: ['Everything in Pro', 'Highest limits', 'Early feature access', 'Dedicated support'],
};

export function Pricing({ full = false }: { full?: boolean }) {
  return (
    <section className={full ? 'section pt-16' : 'section'} aria-label="Pricing">
      <Reveal>
        <div className="section-heading mx-auto text-center">
          <p className="eyebrow justify-center">Simple plans</p>
          <h2>Start free. Grow when you&apos;re ready.</h2>
          <p className="mx-auto">Plans below are placeholders while final pricing is confirmed; the structure is what matters.</p>
        </div>
      </Reveal>
      <div className="mt-12 grid items-stretch gap-5 lg:grid-cols-3">
        {pricingPlans.map((p, i) => (
          <Reveal key={p.name} delay={i * 90} className="h-full">
            <article className={`pricing-card h-full ${p.featured ? 'featured' : ''}`}>
              {p.featured && (
                <span className="badge absolute right-5 top-5">Most popular</span>
              )}
              <h3 className="text-[15px] font-semibold text-white">{p.name}</h3>
              <p className="mt-3 text-4xl font-semibold tracking-tight text-white">
                {p.price}
                <span className="text-base font-normal text-zinc-500">/month</span>
              </p>
              <p className="mt-3 min-h-12 text-sm leading-6 text-zinc-400">{p.description}</p>
              <ul className="mt-5 space-y-2.5 border-t border-white/[.07] pt-5 text-sm">
                {(planFeatures[p.name] ?? []).map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-zinc-300">
                    <Check size={15} className={`mt-0.5 shrink-0 ${p.featured ? 'text-ember-300' : 'text-emerald-400'}`} aria-hidden />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/invite"
                className={`${p.featured ? 'button-primary' : 'button-secondary'} mt-7 w-full`}
              >
                Get started
              </Link>
            </article>
          </Reveal>
        ))}
      </div>
      {!full && (
        <Reveal delay={120}>
          <div className="mt-8 text-center">
            <Link href="/pricing" className="inline-flex items-center gap-1.5 text-sm font-medium text-ember-300 transition hover:text-ember-200">
              Compare plans in detail <ArrowRight size={15} aria-hidden />
            </Link>
          </div>
        </Reveal>
      )}
    </section>
  );
}

/* ---------------- CTA ---------------- */

export function CTA() {
  return (
    <section className="section pt-0" aria-label="Get started">
      <Reveal>
        <div className="noise relative overflow-hidden rounded-3xl border border-white/[.09] bg-[#141010] px-6 py-16 text-center sm:px-12 sm:py-20">
          <div className="relative">
            <p className="eyebrow justify-center">Get started</p>
            <h2 className="mx-auto mt-4 max-w-2xl text-balance text-3xl font-semibold tracking-[-0.035em] text-white sm:text-5xl">
              Ready to make your Discord server better?
            </h2>
            <p className="mx-auto mt-4 max-w-lg leading-7 text-zinc-400">
              Join the communities already running calmer, cleaner servers with Ember.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/invite" className="button-primary px-6 py-3 text-[15px]">
                Add Ember to Discord <ArrowRight size={16} aria-hidden />
              </Link>
              <Link href="/docs" className="button-secondary px-6 py-3 text-[15px]">
                Read the docs
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
