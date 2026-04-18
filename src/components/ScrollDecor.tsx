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
      {/* Гранатовое дерево справа — пышная крона, толстый сучковатый ствол, много плодов (в тени) */}
      <svg
        className="sd-shape sd-shape--tree"
        data-parallax="0.14"
        viewBox="0 0 360 440"
        style={{ top: '-4%', right: '-8%' }}
      >
        {/* Мягкая подсветка-ореол за кроной */}
        <ellipse
          cx="180" cy="150" rx="170" ry="130"
          fill="rgba(240, 186, 95, 0.07)"
        />

        {/* Толстый сучковатый ствол и основные ветви — силуэтом */}
        <g fill="rgba(74, 46, 20, 0.28)">
          {/* Основной ствол с флеровыми корнями */}
          <path d="M160 440
                   C 140 430, 130 420, 132 400
                   C 124 380, 130 350, 140 320
                   C 146 290, 150 260, 158 230
                   C 162 210, 166 190, 170 170
                   L 190 170
                   C 194 190, 198 210, 204 230
                   C 212 260, 218 290, 224 320
                   C 232 350, 238 380, 230 400
                   C 232 420, 222 430, 202 440 Z" />
          {/* Корневые «крылья» у основания */}
          <path d="M120 440 C 100 434, 90 420, 110 412 C 125 414, 136 424, 140 440 Z" />
          <path d="M240 440 C 260 434, 270 420, 250 412 C 235 414, 224 424, 220 440 Z" />
          {/* Главные ветви, расходящиеся в стороны */}
          <path d="M170 200 C 130 180, 90 160, 60 140 C 80 150, 120 165, 172 210 Z" />
          <path d="M190 200 C 230 180, 270 160, 300 140 C 280 150, 240 165, 188 210 Z" />
          <path d="M160 170 C 120 140, 88 108, 70 80 C 90 105, 130 140, 168 180 Z" />
          <path d="M200 170 C 240 140, 272 108, 290 80 C 270 105, 230 140, 192 180 Z" />
          <path d="M175 150 C 165 110, 160 70, 162 30 C 172 70, 182 110, 185 150 Z" />
        </g>

        {/* Текстура коры — тонкие тёмные штрихи */}
        <g stroke="rgba(40, 22, 8, 0.35)" strokeWidth="0.9" fill="none" strokeLinecap="round">
          <path d="M150 400 C 154 380, 152 360, 156 340" />
          <path d="M180 420 C 178 390, 182 360, 178 330" />
          <path d="M210 400 C 206 380, 210 360, 206 340" />
          <path d="M168 300 C 172 280, 170 260, 174 240" />
          <path d="M196 300 C 200 280, 198 260, 202 240" />
        </g>

        {/* Большая пышная крона — несколько слоёв мягких зелёных пятен */}
        <g>
          {/* Дальние/тёмные листовые массы */}
          <g fill="rgba(52, 82, 32, 0.22)">
            <ellipse cx="120" cy="90" rx="70" ry="46" />
            <ellipse cx="240" cy="90" rx="70" ry="46" />
            <ellipse cx="180" cy="50" rx="90" ry="42" />
            <ellipse cx="80" cy="140" rx="56" ry="40" />
            <ellipse cx="280" cy="140" rx="56" ry="40" />
            <ellipse cx="180" cy="150" rx="90" ry="48" />
          </g>
          {/* Средний слой листвы */}
          <g fill="rgba(96, 132, 56, 0.2)">
            <ellipse cx="100" cy="70" rx="46" ry="32" />
            <ellipse cx="260" cy="70" rx="46" ry="32" />
            <ellipse cx="150" cy="40" rx="52" ry="28" />
            <ellipse cx="210" cy="40" rx="52" ry="28" />
            <ellipse cx="130" cy="120" rx="50" ry="32" />
            <ellipse cx="230" cy="120" rx="50" ry="32" />
            <ellipse cx="180" cy="110" rx="56" ry="34" />
          </g>
          {/* Верхние светлые блики на листве */}
          <g fill="rgba(180, 210, 120, 0.16)">
            <ellipse cx="140" cy="50" rx="26" ry="16" />
            <ellipse cx="220" cy="50" rx="26" ry="16" />
            <ellipse cx="180" cy="30" rx="30" ry="14" />
            <ellipse cx="90" cy="100" rx="22" ry="14" />
            <ellipse cx="270" cy="100" rx="22" ry="14" />
          </g>
        </g>

        {/* Отдельные штрихи-листочки по краям кроны */}
        <g stroke="rgba(60, 100, 40, 0.45)" strokeWidth="0.8" fill="none" strokeLinecap="round">
          <path d="M60 100 L74 92 M72 116 L86 110 M90 78 L102 72" />
          <path d="M300 100 L286 92 M288 116 L274 110 M270 78 L258 72" />
          <path d="M120 30 L132 22 M160 18 L172 14 M200 18 L212 14 M240 30 L228 22" />
          <path d="M100 152 L116 146 M140 164 L156 160 M204 164 L220 160 M244 152 L260 146" />
        </g>

        {/* Плоды — много висящих гранатов по всей кроне */}
        <g>
          {[
            { cx: 80, cy: 110, r: 13 },
            { cx: 130, cy: 80, r: 15 },
            { cx: 180, cy: 66, r: 14 },
            { cx: 230, cy: 80, r: 15 },
            { cx: 280, cy: 110, r: 13 },
            { cx: 110, cy: 140, r: 12 },
            { cx: 160, cy: 130, r: 13 },
            { cx: 210, cy: 130, r: 13 },
            { cx: 250, cy: 140, r: 12 },
            { cx: 96, cy: 180, r: 11 },
            { cx: 140, cy: 186, r: 12 },
            { cx: 220, cy: 186, r: 12 },
            { cx: 264, cy: 180, r: 11 },
            { cx: 70, cy: 58, r: 10 },
            { cx: 290, cy: 58, r: 10 },
          ].map((p, i) => (
            <g key={i}>
              {/* Тень под плодом */}
              <ellipse
                cx={p.cx}
                cy={p.cy + p.r + 1}
                rx={p.r * 0.72}
                ry={1.8}
                fill="rgba(42, 6, 16, 0.18)"
              />
              {/* Корпус плода */}
              <circle
                cx={p.cx}
                cy={p.cy}
                r={p.r}
                fill="rgba(150, 30, 46, 0.55)"
              />
              {/* Тёплое брюшко снизу */}
              <ellipse
                cx={p.cx}
                cy={p.cy + p.r * 0.45}
                rx={p.r * 0.72}
                ry={p.r * 0.35}
                fill="rgba(230, 140, 70, 0.22)"
              />
              {/* Глянцевый блик сверху-слева */}
              <ellipse
                cx={p.cx - p.r * 0.32}
                cy={p.cy - p.r * 0.32}
                rx={p.r * 0.32}
                ry={p.r * 0.22}
                fill="rgba(255, 230, 210, 0.35)"
              />
              {/* Маленький калиx внизу */}
              <path
                d={`M${p.cx - 2} ${p.cy + p.r - 1}
                    L${p.cx - 1} ${p.cy + p.r + 2}
                    M${p.cx} ${p.cy + p.r - 0.5}
                    L${p.cx} ${p.cy + p.r + 3}
                    M${p.cx + 2} ${p.cy + p.r - 1}
                    L${p.cx + 1} ${p.cy + p.r + 2}`}
                stroke="rgba(90, 40, 15, 0.6)"
                strokeWidth="0.8"
                strokeLinecap="round"
                fill="none"
              />
              {/* Веточка к ветви */}
              <path
                d={`M${p.cx} ${p.cy - p.r} L${p.cx + 1} ${p.cy - p.r - 4}`}
                stroke="rgba(70, 40, 18, 0.5)"
                strokeWidth="0.9"
                strokeLinecap="round"
                fill="none"
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
