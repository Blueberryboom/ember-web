export function WaveEdge({ placement }: { placement: 'top' | 'bottom' }) {
  const isTop = placement === 'top';
  return (
    <svg
      aria-hidden
      viewBox="0 0 1440 100"
      preserveAspectRatio="none"
      className={`pointer-events-none absolute inset-x-0 z-0 h-[70px] w-full sm:h-20 ${
        isTop ? 'top-0' : 'bottom-0'
      }`}
    >
      <path
        fill="var(--ember-bg)"
        d={
          isTop
            ? 'M0 0H1440V42C1190 92 960 8 720 44C470 82 250 14 0 50Z'
            : 'M0 100H1440V56C1180 6 950 94 720 58C470 20 250 86 0 52Z'
        }
      />
    </svg>
  );
}
