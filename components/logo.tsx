import Link from 'next/link';
export function Logo({ href = '/', compact = false }: { href?: string; compact?: boolean }) {
  return <Link href={href} className="group inline-flex items-center gap-2 font-semibold tracking-tight text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-ember-400 rounded-sm" aria-label="Ember home"><span className="relative grid h-8 w-8 place-items-center overflow-hidden rounded-lg border border-orange-300/30 bg-orange-500/10"><span className="h-4 w-3 rounded-t-full rounded-br-full bg-ember-400 shadow-glow [clip-path:polygon(50%_0,100%_55%,73%_100%,28%_87%,0_54%)]" /></span>{!compact && <span>Ember</span>}</Link>;
}
