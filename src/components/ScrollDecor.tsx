import { useEffect, useRef } from 'react';
import './ScrollDecor.css';

/**
 * Fixed background layer of Armenian-style decorations that drift with
 * scroll at different rates (parallax). Keeps things subtle — a soft
 * pomegranate silhouette, a khachkar cross motif, a wheat spike, and
 * the Ararat mountain silhouette rising from the bottom.
 */
export function ScrollDecor() {
  const layerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const prefersReduce = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReduce) return;

    const layer = layerRef.current;
    if (!layer) return;

    const items = Array.from(
      layer.querySelectorAll<HTMLElement>('[data-parallax]')
    ).map((el) => ({
      el,
      speed: parseFloat(el.dataset.parallax || '0.2'),
      rotate: parseFloat(el.dataset.parallaxRotate || '0'),
    }));

    const update = () => {
      const y = window.scrollY;
      for (const it of items) {
        const ty = -y * it.speed;
        const r = y * it.rotate;
        it.el.style.transform = `translate3d(0, ${ty}px, 0) rotate(${r}deg)`;
      }
      rafRef.current = null;
    };

    const onScroll = () => {
      if (rafRef.current == null) rafRef.current = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="scroll-decor" ref={layerRef} aria-hidden>
      {/* Гранатовое дерево справа сверху — вместо одинокого плода-тени */}
      <svg
        className="sd-shape sd-shape--tree"
        data-parallax="0.16"
        viewBox="0 0 260 360"
        style={{ top: '-2%', right: '-4%' }}
      >
        {/* Ствол и главные ветви — тонкими тёмно-винными линиями */}
        <g
          stroke="rgba(95, 17, 36, 0.22)"
          strokeWidth="2.2"
          strokeLinecap="round"
          fill="none"
        >
          <path d="M132 360 C 130 300, 136 260, 132 210 C 128 176, 134 140, 130 100 C 128 78, 136 56, 132 30" />
          {/* Боковые ветви */}
          <path d="M132 220 C 108 210, 88 196, 70 176" strokeWidth="1.8" />
          <path d="M132 200 C 156 196, 178 184, 196 168" strokeWidth="1.8" />
          <path d="M130 160 C 110 156, 92 144, 78 124" strokeWidth="1.6" />
          <path d="M132 150 C 154 146, 174 136, 188 118" strokeWidth="1.6" />
          <path d="M130 110 C 114 104, 100 92, 90 74" strokeWidth="1.4" />
          <path d="M132 100 C 148 94, 162 84, 170 66" strokeWidth="1.4" />
          {/* Веточки к плодам */}
          <path d="M70 176 L66 186" strokeWidth="1.2" />
          <path d="M196 168 L202 178" strokeWidth="1.2" />
          <path d="M78 124 L74 134" strokeWidth="1.1" />
          <path d="M188 118 L194 128" strokeWidth="1.1" />
          <path d="M90 74 L88 84" strokeWidth="1" />
          <path d="M170 66 L174 76" strokeWidth="1" />
        </g>

        {/* Листва — мягкие перистые пятна в тёплом зелёном */}
        <g fill="rgba(74, 110, 52, 0.12)">
          <ellipse cx="120" cy="44" rx="46" ry="28" />
          <ellipse cx="76" cy="96" rx="40" ry="24" />
          <ellipse cx="180" cy="90" rx="42" ry="26" />
          <ellipse cx="64" cy="150" rx="38" ry="22" />
          <ellipse cx="198" cy="144" rx="40" ry="24" />
          <ellipse cx="130" cy="156" rx="48" ry="28" />
          <ellipse cx="86" cy="210" rx="36" ry="22" />
          <ellipse cx="176" cy="204" rx="38" ry="24" />
        </g>
        {/* Лёгкие золотые штрихи-листья */}
        <g stroke="rgba(197, 158, 69, 0.26)" strokeWidth="0.7" fill="none" strokeLinecap="round">
          <path d="M92 38 L110 28 M108 54 L126 42 M138 34 L152 26" />
          <path d="M54 90 L72 80 M72 104 L88 96 M86 78 L100 70" />
          <path d="M166 84 L180 76 M180 100 L196 92 M194 78 L208 70" />
          <path d="M50 150 L66 140 M110 160 L130 150 M150 160 L170 150" />
        </g>

        {/* Плоды на ветвях — маленькие, винные, с золотой «короной» */}
        <g>
          {[
            { cx: 66, cy: 192, r: 10 },
            { cx: 202, cy: 184, r: 10 },
            { cx: 74, cy: 140, r: 8 },
            { cx: 194, cy: 134, r: 9 },
            { cx: 88, cy: 90, r: 7 },
            { cx: 174, cy: 82, r: 8 },
            { cx: 132, cy: 216, r: 9 },
            { cx: 110, cy: 166, r: 7 },
            { cx: 156, cy: 162, r: 7 },
          ].map((p, i) => (
            <g key={i}>
              <circle
                cx={p.cx}
                cy={p.cy}
                r={p.r}
                fill="rgba(95, 17, 36, 0.35)"
              />
              <circle
                cx={p.cx - p.r * 0.32}
                cy={p.cy - p.r * 0.3}
                r={p.r * 0.28}
                fill="rgba(214, 160, 110, 0.22)"
              />
              <path
                d={`M${p.cx - 2} ${p.cy - p.r} L${p.cx} ${p.cy - p.r - 2.5} L${p.cx + 2} ${p.cy - p.r}`}
                stroke="rgba(197, 158, 69, 0.55)"
                strokeWidth="0.7"
                fill="none"
                strokeLinecap="round"
              />
            </g>
          ))}
        </g>
      </svg>

      {/* Khachkar cross, mid-left */}
      <svg
        className="sd-shape sd-shape--khach"
        data-parallax="0.28"
        viewBox="0 0 120 160"
        style={{ top: '55%', left: '-2%' }}
      >
        <rect
          x="6" y="6" width="108" height="148" rx="6"
          fill="none" stroke="rgba(95, 17, 36, 0.1)" strokeWidth="1.4"
        />
        <rect
          x="14" y="14" width="92" height="132" rx="4"
          fill="none" stroke="rgba(197, 158, 69, 0.22)" strokeWidth="0.9"
        />
        {/* Cross */}
        <g stroke="rgba(95, 17, 36, 0.14)" strokeWidth="2.4" fill="none" strokeLinecap="round">
          <line x1="60" y1="34" x2="60" y2="130" />
          <line x1="32" y1="62" x2="88" y2="62" />
          <line x1="40" y1="82" x2="80" y2="82" />
        </g>
        {/* Endings */}
        <g fill="rgba(197, 158, 69, 0.25)">
          <circle cx="60" cy="34" r="3.5" />
          <circle cx="60" cy="130" r="3.5" />
          <circle cx="32" cy="62" r="3.5" />
          <circle cx="88" cy="62" r="3.5" />
        </g>
        {/* Rosette */}
        <g transform="translate(60 106)" fill="none" stroke="rgba(197, 158, 69, 0.3)" strokeWidth="0.9">
          <circle r="9" />
          <circle r="5" />
          <path d="M0 -9 L0 9 M-9 0 L9 0 M-6.4 -6.4 L6.4 6.4 M-6.4 6.4 L6.4 -6.4" />
        </g>
      </svg>

      {/* Wheat spike, mid-right */}
      <svg
        className="sd-shape sd-shape--wheat"
        data-parallax="0.35"
        viewBox="0 0 60 160"
        style={{ top: '30%', right: '4%' }}
      >
        <g stroke="rgba(197, 158, 69, 0.35)" strokeWidth="1.2" fill="none" strokeLinecap="round">
          <line x1="30" y1="10" x2="30" y2="150" />
          <path d="M30 20 C 18 26, 14 34, 20 42 C 28 40, 32 34, 30 26" />
          <path d="M30 20 C 42 26, 46 34, 40 42 C 32 40, 28 34, 30 26" />
          <path d="M30 40 C 16 46, 12 54, 18 62 C 26 60, 32 54, 30 46" />
          <path d="M30 40 C 44 46, 48 54, 42 62 C 34 60, 28 54, 30 46" />
          <path d="M30 60 C 14 66, 10 74, 16 82 C 26 80, 32 74, 30 66" />
          <path d="M30 60 C 46 66, 50 74, 44 82 C 34 80, 28 74, 30 66" />
          <path d="M30 80 C 16 86, 12 94, 18 102 C 26 100, 32 94, 30 86" />
          <path d="M30 80 C 44 86, 48 94, 42 102 C 34 100, 28 94, 30 86" />
          <path d="M30 100 C 18 106, 14 114, 20 122 C 28 120, 32 114, 30 106" />
          <path d="M30 100 C 42 106, 46 114, 40 122 C 32 120, 28 114, 30 106" />
        </g>
      </svg>

      {/* Vine — bottom-left */}
      <svg
        className="sd-shape sd-shape--vine"
        data-parallax="0.12"
        viewBox="0 0 180 80"
        style={{ bottom: '20%', left: '5%' }}
      >
        <path
          d="M5 60 C 30 30, 60 70, 90 40 C 120 10, 150 60, 175 30"
          stroke="rgba(95, 17, 36, 0.18)"
          strokeWidth="1.4"
          fill="none"
        />
        {/* Grapes bunch */}
        <g fill="rgba(95, 17, 36, 0.18)">
          <circle cx="94" cy="42" r="3.2" />
          <circle cx="100" cy="40" r="3.2" />
          <circle cx="97" cy="47" r="3.2" />
          <circle cx="91" cy="48" r="3" />
          <circle cx="103" cy="47" r="3" />
          <circle cx="97" cy="53" r="2.8" />
        </g>
        {/* Leaf */}
        <path
          d="M60 58 C 52 50, 58 42, 68 44 C 70 52, 66 58, 60 58 Z"
          fill="rgba(94, 161, 72, 0.18)"
        />
      </svg>

      {/* Ararat silhouette at the very bottom — biggest, slowest parallax */}
      <svg
        className="sd-shape sd-shape--ararat"
        data-parallax="0.06"
        viewBox="0 0 1200 300"
        preserveAspectRatio="none"
        style={{ bottom: '-4%', left: 0, right: 0, width: '100%' }}
      >
        <path
          d="M0 240
             L 140 220
             L 260 140
             L 340 180
             L 420 110
             L 560 60
             L 680 150
             L 780 120
             L 880 40
             L 1020 120
             L 1120 190
             L 1200 210
             L 1200 300 L 0 300 Z"
          fill="rgba(95, 17, 36, 0.08)"
        />
        <path
          d="M 380 145
             L 420 110 L 450 140
             L 560 60 L 600 95
             M 820 90 L 880 40 L 940 95"
          stroke="rgba(255,255,255,0.45)"
          strokeWidth="1.6"
          fill="none"
          strokeLinecap="round"
        />
      </svg>

      {/* Small floating pomegranates that drift across, bottom-right */}
      <div className="sd-floaters" aria-hidden>
        <span className="sd-floater sd-floater--1" />
        <span className="sd-floater sd-floater--2" />
        <span className="sd-floater sd-floater--3" />
      </div>
    </div>
  );
}
