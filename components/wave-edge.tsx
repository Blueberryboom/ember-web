const WAVE = 'M0 0H1440V36C1200 36 960 64 720 64C480 64 240 36 0 36Z';
const WAVE_FILLED = 'M0 100H1440V36C1200 36 960 64 720 64C480 64 240 36 0 36Z';

export function WaveEdge({ placement }: { placement: 'top' | 'bottom' }) {
  const isTop = placement === 'top';
  return (
    <svg
      aria-hidden
      viewBox="0 0 2880 100"
      preserveAspectRatio="none"
      className={`pointer-events-none absolute left-0 z-0 h-[70px] w-[200%] sm:h-20 ${
        isTop ? 'top-0' : 'bottom-0'
      }`}
    >
      <path fill="var(--ember-bg)" d={isTop ? WAVE : WAVE_FILLED} />
      <path fill="var(--ember-bg)" d={isTop ? WAVE : WAVE_FILLED} transform="translate(1440 0)" />
    </svg>
  );
}
