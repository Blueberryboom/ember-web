import Link from 'next/link';
import Image from 'next/image';
export function Logo({ href = '/', compact = false }: { href?: string; compact?: boolean }) {
  return <Link href={href} className="group inline-flex items-center gap-2 font-semibold tracking-tight text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-ember-400 rounded-sm" aria-label="Ember home"><Image src="/favicon.png" alt="Ember logo" width={32} height={32} className="h-8 w-8 rounded-lg" />{!compact && <span>Ember</span>}</Link>;
}
