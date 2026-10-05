const TOP_PATH = 'M0 0H1440V46C1260 4 900 88 720 46C540 88 180 4 0 46Z';
const BOTTOM_PATH = 'M0 100H1440V54C1260 96 900 12 720 54C540 12 180 96 0 54Z';

export function WaveEdge({ placement }: { placement: 'top' | 'bottom' }) {
  const isTop = placement === 'top';
  const d = isTop ? TOP_PATH : BOTTOM_PATH;
  return (
    <svg
      aria-hidden
      viewBox="0 0 2880 100"
      preserveAspectRatio="none"
      className={`wave-edge pointer-events-none absolute left-0 z-0 h-[70px] w-[200%] sm:h-20 ${
        isTop ? 'top-0' : 'wave-edge-reverse bottom-0'
      }`}
    >
      <path fill="var(--ember-bg)" d={d} />
      <path fill="var(--ember-bg)" d={d} transform="translate(1440 0)" />
    </svg>
  );
}
