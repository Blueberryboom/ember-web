import Link from 'next/link';
import {
  ArrowRight,
  BellRing,
  Check,
  Command,
  FileWarning,
  Flame,
  HeartHandshake,
  Info,
  ListChecks,
  Megaphone,
  ScrollText,
  ServerCog,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Terminal,
  Users,
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
            <Reveal>
              <p className="pill">
                <Flame size={13} className="text-ember-400" />
                <span className="eyebrow">Ember for Discord</span>
                <span className="hidden h-3 w-px bg-white/15 sm:block" />
                <span className="hidden text-zinc-400 sm:inline">Moderation &amp; utility</span>
              </p>
            </Reveal>

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

/* ---------------- Feature sections ---------------- */

const moderationSupport = [
  { icon: BellRing, title: 'Automoderation', desc: 'Catch spam, raids, links and bad words before your mods even wake up.' },
  { icon: ScrollText, title: 'Logging', desc: 'A clear audit trail of who did what, when, and why.' },
  { icon: FileWarning, title: 'Anti-spam', desc: 'Rate limits, duplicate detection and invite guards that stay quiet until needed.' },
];

const utilityItems = [
  { icon: Terminal, title: 'Useful server commands', desc: 'Everyday slash commands your mods and members will actually use.' },
  { icon: Info, title: 'Server information', desc: 'At-a-glance member, channel and role insight when you need it.' },
  { icon: Users, title: 'User information', desc: 'Join history, warnings and notes in one calm profile view.' },
  { icon: SlidersHorizontal, title: 'Management tools', desc: 'Slowmode, lockdowns, purges and channel helpers that respect your setup.' },
];

const communityItems = [
  { icon: HeartHandshake, title: 'Engagement features', desc: 'Levels, streaks and gentle nudges that reward good members.' },
  { icon: Megaphone, title: 'Welcome tools', desc: 'Greet newcomers, verify humans, and point them to the right channels.' },
  { icon: Command, title: 'Custom commands', desc: 'Turn repeated answers into one-word replies your whole team can use.' },
  { icon: Sparkles, title: 'Community utilities', desc: 'Polls, reminders and announcements without a second bot.' },
];

function CategoryHeader({ index, title, desc }: { index: string; title: string; desc: string }) {
  return (
    <div className="flex items-start gap-4">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-ember-500/30 bg-ember-500/10 font-mono text-[13px] font-semibold text-ember-300">
        {index}
      </span>
      <div>
        <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">{title}</h3>
        <p className="mt-1.5 max-w-xl leading-7 text-zinc-400">{desc}</p>
      </div>
    </div>
  );
}

export function Features() {
  return (
    <section className="section pb-0" id="features" aria-label="Features">
      <Reveal>
        <div className="section-heading">
          <p className="eyebrow">What Ember does</p>
          <h2>Everything a well-run server needs. Nothing it doesn&apos;t.</h2>
          <p>Three focused toolkits (moderation, utility, and community) designed to work quietly together.</p>
        </div>
      </Reveal>

      {/* Moderation: large feature + supporting list */}
      <div className="mt-14">
        <Reveal><CategoryHeader index="01" title="Moderation" desc="Keep the server safe with tools your whole mod team can trust: firm when it matters, invisible when it doesn't." /></Reveal>
        <div className="mt-8 grid gap-4 lg:grid-cols-[1.15fr_.85fr]">
          <Reveal delay={60}>
            <article className="panel panel-hover relative h-full overflow-hidden p-7 sm:p-9">
              <div aria-hidden className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-ember-600/15 blur-[80px]" />
              <div className="icon-chip"><ShieldCheck size={19} /></div>
              <h4 className="mt-5 text-2xl font-semibold tracking-tight text-white">Moderation your team will actually enjoy</h4>
              <p className="mt-3 max-w-md leading-7 text-zinc-400">
                Consistent actions, required reasons, and a readable history,
                so decisions are explainable long after the moment passes.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {['Warn', 'Timeout', 'Kick', 'Ban'].map((a) => (
                  <span key={a} className="rounded-full border border-white/10 bg-white/[.04] px-3 py-1 font-mono text-[11px] text-zinc-300">/{a.toLowerCase()}</span>
                ))}
              </div>
              {/* mini log UI */}
              <div className="mt-7 overflow-hidden rounded-xl border border-white/[.08] bg-black/30">
                <div className="flex items-center gap-2 border-b border-white/[.07] px-4 py-2.5 text-[11px] text-zinc-500">
                  <ListChecks size={12} className="text-ember-400" /> mod-log · #staff
                </div>
                <ul className="divide-y divide-white/[.05] font-mono text-[12px]">
                  <li className="flex gap-3 px-4 py-2.5"><span className="text-zinc-600">21:04</span><span className="text-zinc-300"><span className="text-amber-300">warn</span> @noisy.robot_42 · spam ×4</span></li>
                  <li className="flex gap-3 px-4 py-2.5"><span className="text-zinc-600">20:47</span><span className="text-zinc-300"><span className="text-red-300">timeout</span> @quiet.guest · 10m · raid join</span></li>
                </ul>
              </div>
            </article>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {moderationSupport.map((f, i) => (
              <Reveal key={f.title} delay={100 + i * 60}>
                <article className="feature-card h-full">
                  <f.icon size={20} className="text-ember-400" />
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* Utility: alternating two-column */}
      <div className="mt-20">
        <Reveal><CategoryHeader index="02" title="Utility" desc="Day-to-day commands and insight for mods, admins and curious members." /></Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {utilityItems.map((f, i) => (
            <Reveal key={f.title} delay={(i % 2) * 80}>
              <article className="feature-card flex h-full gap-4">
                <div className="icon-chip"><f.icon size={18} /></div>
                <div>
                  <h3 className="mt-0">{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Community: compact strip */}
      <div className="mt-20">
        <Reveal><CategoryHeader index="03" title="Community" desc="Warm touches that make new members stay and regulars feel seen." /></Reveal>
        <Reveal delay={80}>
          <div className="panel mt-8 grid gap-px overflow-hidden bg-white/[.07] p-0 sm:grid-cols-2 lg:grid-cols-4">
            {communityItems.map((f) => (
              <div key={f.title} className="group bg-[#141010] p-6 transition-colors hover:bg-[#1a1514]">
                <f.icon size={20} className="text-ember-400 transition-transform duration-200 group-hover:-translate-y-0.5" />
                <h4 className="mt-4 font-semibold tracking-tight text-white">{f.title}</h4>
                <p className="mt-1.5 text-sm leading-6 text-zinc-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
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
