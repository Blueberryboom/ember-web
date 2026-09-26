import type { Metadata } from 'next';
import { Activity, CheckCircle2, Clock3, Server, Terminal, BookOpenText, LayoutDashboard } from 'lucide-react';
import { placeholderStats } from '@/lib/config';

export const metadata: Metadata = { title: 'Status', description: 'Ember service status.' };

const services = [
  { name: 'Bot Gateway', desc: 'Discord connection & event handling', state: 'Operational', tone: 'green' },
  { name: 'Application Commands', desc: 'Slash commands & interactions', state: 'Operational', tone: 'green' },
  { name: 'Dashboard', desc: 'Server configuration & logs', state: 'Operational', tone: 'green' },
  { name: 'Documentation', desc: 'Guides & command reference', state: 'Operational', tone: 'green' },
] as const;

const metrics = [
  ['Uptime', placeholderStats.uptime, CheckCircle2],
  ['Response time', placeholderStats.responseTime, Clock3],
  ['Servers', placeholderStats.servers, Server],
] as const;

export default function Page() {
  return (
    <section className="section min-h-[65vh]">
      <p className="eyebrow">Service health</p>
      <h1 className="mt-3 max-w-xl text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
        Ember status
      </h1>
      <p className="mt-4 max-w-xl leading-7 text-zinc-400">
        A simple public overview. Values below are placeholders until a live
        monitoring source is connected.
      </p>

      <div className="mt-10 flex items-center gap-4 rounded-2xl border border-emerald-400/20 bg-emerald-400/[.05] p-6">
        <span className="grid h-11 w-11 place-items-center rounded-xl border border-emerald-400/25 bg-emerald-400/10 text-emerald-300">
          <Activity size={20} />
        </span>
        <div>
          <h2 className="font-semibold tracking-tight text-white">All systems operational</h2>
          <p className="mt-1 text-sm text-emerald-300/90">Ember Bot · last checked just now</p>
        </div>
        <span className="ml-auto hidden items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1.5 text-xs font-medium text-emerald-300 sm:inline-flex">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" /> Live
        </span>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-3">
        {metrics.map(([label, value, Icon]) => (
          <div key={label} className="panel p-5">
            <Icon size={19} className="text-ember-400" />
            <p className="mt-4 text-2xl font-semibold tracking-tight text-white">{value}</p>
            <p className="mt-1 text-sm text-zinc-400">{label}</p>
          </div>
        ))}
      </div>

      <div className="panel mt-5 divide-y divide-white/[.06] overflow-hidden p-0">
        {services.map((s) => (
          <div key={s.name} className="flex items-center gap-4 px-6 py-4">
            <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_10px_rgb(52_211_153/.8)]" />
            <div className="min-w-0">
              <p className="font-medium text-white">{s.name}</p>
              <p className="truncate text-sm text-zinc-500">{s.desc}</p>
            </div>
            <span className="ml-auto shrink-0 text-sm text-emerald-300">{s.state}</span>
          </div>
        ))}
      </div>

      <div className="panel mt-5 flex flex-col gap-4 p-6 sm:flex-row sm:items-center">
        <div className="flex gap-3">
          <span className="icon-chip"><Terminal size={17} /></span>
          <span className="icon-chip"><LayoutDashboard size={17} /></span>
          <span className="icon-chip"><BookOpenText size={17} /></span>
        </div>
        <div>
          <h2 className="font-semibold tracking-tight text-white">Incident history</h2>
          <p className="mt-1 text-sm text-zinc-400">No incidents in the last 7 days. Anything longer-lived will be listed here.</p>
        </div>
      </div>
    </section>
  );
}
