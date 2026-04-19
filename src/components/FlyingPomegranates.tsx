import { useMemo } from 'react';
import './FlyingPomegranates.css';

type Seed = {
  id: number;
  top: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  drift: number;
  rotate: number;
  depth: number;
};

function buildSeeds(count: number): Seed[] {
  // Deterministic pseudo-random so hydration/SSR is stable and re-renders are calm.
  let s = 0x9e3779b9;
  const rnd = () => {
    s = (s ^ (s << 13)) >>> 0;
    s = (s ^ (s >>> 17)) >>> 0;
    s = (s ^ (s << 5)) >>> 0;
    return (s & 0xffffffff) / 0x100000000;
  };
  const seeds: Seed[] = [];
  for (let i = 0; i < count; i++) {
    const depth = rnd(); // 0 = far, 1 = near
    const size = 18 + depth * 46; // 18..64 px
    seeds.push({
      id: i,
      top: rnd() * 100,
      left: rnd() * 100,
      size,
      duration: 14 + rnd() * 18, // 14..32s
      delay: -rnd() * 20, // negative so they're already mid-flight
      drift: 40 + rnd() * 140, // px horizontal drift
      rotate: (rnd() * 2 - 1) * 50, // -50..+50deg
      depth,
    });
  }
  return seeds;
}

export function FlyingPomegranates({ count = 18 }: { count?: number }) {
  const seeds = useMemo(() => buildSeeds(count), [count]);

  return (
    <div className="fly-poms" aria-hidden="true">
      {seeds.map((p) => (
        <img
          key={p.id}
          src="/img/pomegranate-small.png"
          alt=""
          className="fly-poms__item"
          style={
            {
              top: `${p.top}%`,
              left: `${p.left}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              opacity: 0.35 + p.depth * 0.55,
              animationDuration: `${p.duration}s, ${p.duration * 0.6}s`,
              animationDelay: `${p.delay}s, ${p.delay * 0.7}s`,
              filter: `drop-shadow(0 6px 10px rgba(42, 6, 16, ${0.18 + p.depth * 0.18})) blur(${(1 - p.depth) * 0.6}px)`,
              '--fly-drift': `${p.drift}px`,
              '--fly-rot': `${p.rotate}deg`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
