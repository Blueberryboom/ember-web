import {
  Bell,
  CheckCircle2,
  Flame,
  Hash,
  Settings2,
  ShieldCheck,
  Sparkles,
  Terminal,
  Users,
} from 'lucide-react';

const actions = [
  { user: 'noisy.robot_42', action: 'Warned · spam', mod: 'Ember Automod', time: '2m', tone: 'amber' },
  { user: 'quiet.guest', action: 'Timeout · 10m', mod: 'Maya', time: '18m', tone: 'red' },
  { user: 'new.member_09', action: 'Verified', mod: 'Ember', time: '41m', tone: 'green' },
  { user: 'helpful.hana', action: 'Slowmode · #general', mod: 'Jonas', time: '1h', tone: 'zinc' },
] as const;

const toneDot: Record<string, string> = {
  amber: 'bg-amber-400',
  red: 'bg-red-400',
  green: 'bg-emerald-400',
  zinc: 'bg-zinc-500',
};

export function DashboardShowcase() {
  return (
    <div className="showcase-frame noise showcase-float" role="img" aria-label="Preview of the Ember dashboard showing moderation overview for a Discord server">
      {/* window chrome */}
      <div className="flex items-center gap-2 border-b border-white/[.07] bg-white/[.02] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <p className="mx-auto hidden items-center gap-2 rounded-md border border-white/[.07] bg-black/30 px-3 py-1 text-[11px] text-zinc-400 sm:flex">
          <Flame size={11} className="text-ember-400" /> dash.emberbot.dev/overview
        </p>
        <span className="w-10" />
      </div>

      <div className="grid md:grid-cols-[220px_1fr]">
        {/* sidebar */}
        <aside className="hidden border-r border-white/[.07] bg-black/25 p-4 md:block">
          <div className="flex items-center gap-2.5 rounded-xl border border-white/[.07] bg-white/[.03] p-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-ember-500 text-white">
              <Flame size={17} />
            </span>
            <div className="min-w-0">
              <p className="truncate text-[13px] font-semibold text-white">Acme Community</p>
              <p className="flex items-center gap-1 text-[11px] text-zinc-500">
                <Users size={10} /> 12,408 members
              </p>
            </div>
          </div>
          <nav className="mt-4 space-y-1 text-[13px]" aria-hidden>
            {[
              ['Overview', true, Sparkles],
              ['Moderation', false, ShieldCheck],
              ['Automod rules', false, Bell],
              ['Commands', false, Terminal],
              ['Settings', false, Settings2],
            ].map(([label, active, Icon]) => {
              const I = Icon as typeof Sparkles;
              return (
                <p
                  key={label as string}
                  className={`flex items-center gap-2.5 rounded-lg px-2.5 py-2 ${
                    active
                      ? 'bg-ember-500/15 text-ember-300 ring-1 ring-inset ring-ember-500/25'
                      : 'text-zinc-400'
                  }`}
                >
                  <I size={14} /> {label as string}
                </p>
              );
            })}
          </nav>
          <div className="mt-4 rounded-xl border border-emerald-400/20 bg-emerald-400/[.06] p-3">
            <p className="flex items-center gap-1.5 text-[12px] font-medium text-emerald-300">
              <CheckCircle2 size={13} /> Protection on
            </p>
            <p className="mt-1 text-[11px] leading-5 text-zinc-400">4 automod rules active in 12 channels.</p>
          </div>
        </aside>

        {/* main */}
        <div className="p-4 sm:p-6">
          <div className="flex flex-wrap items-center gap-3">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[.16em] text-zinc-500">Server overview</p>
              <h3 className="mt-1 text-lg font-semibold tracking-tight text-white">Good evening, Maya</h3>
            </div>
            <div className="ml-auto flex gap-2">
              <span className="pill"><span className="pill-dot" /> Healthy</span>
              <span className="pill hidden sm:inline-flex"><Hash size={12} /> 24 commands</span>
            </div>
          </div>

          {/* stat row */}
          <div className="mt-4 grid grid-cols-3 gap-2.5">
            {[
              ['Actions today', '37'],
              ['Blocked spam', '112'],
              ['Avg. response', '120ms'],
            ].map(([label, value]) => (
              <div key={label} className="rounded-xl border border-white/[.07] bg-white/[.025] px-3 py-3 text-center sm:text-left">
                <p className="text-base font-semibold tracking-tight text-white sm:text-xl">{value}</p>
                <p className="mt-0.5 truncate text-[11px] text-zinc-500">{label}</p>
              </div>
            ))}
          </div>

          {/* recent actions */}
          <div className="mt-3 overflow-hidden rounded-xl border border-white/[.07]">
            <div className="flex items-center justify-between border-b border-white/[.07] bg-white/[.02] px-3.5 py-2.5">
              <p className="text-[12px] font-semibold text-zinc-300">Recent moderation</p>
              <p className="text-[11px] text-ember-300">View audit log →</p>
            </div>
            <ul className="divide-y divide-white/[.05]">
              {actions.map((a) => (
                <li key={a.user} className="flex items-center gap-3 px-3.5 py-2.5">
                  <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${toneDot[a.tone]}`} />
                  <div className="min-w-0">
                    <p className="truncate text-[13px] text-zinc-200">
                      <span className="font-medium text-white">{a.user}</span>
                      <span className="text-zinc-500"> · </span>{a.action}
                    </p>
                    <p className="text-[11px] text-zinc-500">by {a.mod}</p>
                  </div>
                  <span className="ml-auto shrink-0 text-[11px] text-zinc-500">{a.time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* command hint */}
          <div className="mt-3 flex items-center gap-2.5 rounded-xl border border-ember-500/20 bg-ember-500/[.06] px-3.5 py-2.5">
            <Terminal size={14} className="shrink-0 text-ember-300" />
            <p className="truncate font-mono text-[12px] text-zinc-300">
              <span className="text-ember-300">/timeout</span> user:@noisy.robot_42 duration:10m reason:spam
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
