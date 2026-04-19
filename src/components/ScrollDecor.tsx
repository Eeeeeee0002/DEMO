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
      {/* Армянский стол — бутылка вина, бокал, лаваш, сыр, кружка. Анимированный силуэт в тоне сайта */}
      <svg
        className="sd-shape sd-shape--table"
        data-parallax="0.12"
        viewBox="0 0 420 380"
        style={{ top: '6%', right: '-6%' }}
      >
        <defs>
          <linearGradient id="tb-wood" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(95, 55, 28, 0.35)" />
            <stop offset="100%" stopColor="rgba(58, 28, 10, 0.55)" />
          </linearGradient>
          <linearGradient id="tb-wine-glass" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"  stopColor="rgba(180, 30, 50, 0.75)" />
            <stop offset="100%" stopColor="rgba(95, 14, 28, 0.9)" />
          </linearGradient>
          <linearGradient id="tb-bottle" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"  stopColor="rgba(42, 6, 16, 0.85)" />
            <stop offset="100%" stopColor="rgba(20, 2, 8, 0.95)" />
          </linearGradient>
          <linearGradient id="tb-label" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"  stopColor="rgba(240, 220, 170, 0.92)" />
            <stop offset="100%" stopColor="rgba(200, 170, 110, 0.9)" />
          </linearGradient>
          <linearGradient id="tb-lavash" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"  stopColor="rgba(235, 200, 140, 0.92)" />
            <stop offset="100%" stopColor="rgba(180, 125, 65, 0.92)" />
          </linearGradient>
          <linearGradient id="tb-cheese" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"  stopColor="rgba(245, 210, 120, 0.95)" />
            <stop offset="100%" stopColor="rgba(205, 160, 70, 0.95)" />
          </linearGradient>
          <linearGradient id="tb-mug" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"  stopColor="rgba(225, 215, 190, 0.85)" />
            <stop offset="100%" stopColor="rgba(155, 135, 100, 0.9)" />
          </linearGradient>
          <radialGradient id="tb-ambient" cx="50%" cy="55%" r="60%">
            <stop offset="0%" stopColor="rgba(240, 186, 95, 0.22)" />
            <stop offset="100%" stopColor="rgba(240, 186, 95, 0)" />
          </radialGradient>
          <linearGradient id="tb-blade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"  stopColor="rgba(240, 238, 232, 0.95)" />
            <stop offset="50%" stopColor="rgba(195, 195, 190, 0.95)" />
            <stop offset="100%" stopColor="rgba(135, 135, 130, 0.95)" />
          </linearGradient>
          <linearGradient id="tb-handle" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"  stopColor="rgba(110, 62, 28, 0.95)" />
            <stop offset="100%" stopColor="rgba(58, 28, 10, 0.98)" />
          </linearGradient>
          <linearGradient id="tb-board" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"  stopColor="rgba(135, 85, 45, 0.85)" />
            <stop offset="100%" stopColor="rgba(82, 46, 20, 0.95)" />
          </linearGradient>
          <radialGradient id="tb-meat" cx="50%" cy="45%" r="60%">
            <stop offset="0%"  stopColor="rgba(150, 30, 30, 0.95)" />
            <stop offset="70%" stopColor="rgba(95, 17, 36, 0.95)" />
            <stop offset="100%" stopColor="rgba(50, 10, 18, 0.98)" />
          </radialGradient>
        </defs>

        {/* Тёплая окружающая подсветка */}
        <ellipse cx="210" cy="230" rx="200" ry="110" fill="url(#tb-ambient)" className="tb-ambient" />

        {/* Стол — деревянная столешница */}
        <g>
          <path
            d="M20 310 L400 310 L380 340 L40 340 Z"
            fill="url(#tb-wood)"
          />
          {/* Доски */}
          <g stroke="rgba(40, 20, 8, 0.28)" strokeWidth="0.8" fill="none">
            <path d="M110 310 L114 340" />
            <path d="M200 310 L202 340" />
            <path d="M290 310 L292 340" />
          </g>
          {/* Глубокая тень под столом */}
          <ellipse cx="210" cy="348" rx="190" ry="10" fill="rgba(30, 10, 6, 0.32)" />
        </g>

        {/* Лаваш — свёрнутый треугольником слева по центру */}
        <g className="tb-lavash">
          <path
            d="M156 294
               Q 120 280, 110 240
               Q 108 218, 134 212
               Q 170 208, 204 232
               Q 226 252, 214 286
               Q 194 304, 156 294 Z"
            fill="url(#tb-lavash)" />
          {/* Складки */}
          <g stroke="rgba(120, 70, 30, 0.4)" strokeWidth="0.8" fill="none" strokeLinecap="round">
            <path d="M130 240 Q 150 248, 174 248" />
            <path d="M128 262 Q 158 268, 190 264" />
            <path d="M140 282 Q 170 288, 198 280" />
          </g>
          {/* Крошки */}
          <g fill="rgba(120, 70, 30, 0.5)">
            <circle cx="220" cy="292" r="1.2" />
            <circle cx="230" cy="296" r="0.9" />
            <circle cx="102" cy="298" r="1.1" />
          </g>
        </g>

        {/* Доска с бастурмой — справа-внизу перед кружкой */}
        <g className="tb-board">
          {/* Тень доски */}
          <ellipse cx="240" cy="332" rx="68" ry="6" fill="rgba(30, 10, 6, 0.3)" />
          {/* Деревянная разделочная доска */}
          <ellipse cx="240" cy="322" rx="64" ry="11" fill="url(#tb-board)" />
          {/* Жилки дерева */}
          <g stroke="rgba(40, 20, 8, 0.35)" strokeWidth="0.5" fill="none">
            <path d="M184 322 Q 210 320, 236 322 Q 266 324, 296 322" />
            <path d="M190 326 Q 220 324, 250 326 Q 280 328, 294 326" />
          </g>
          {/* Ломтики бастурмы — плоские сыровяленые кружки со светлой оторочкой чамана */}
          <g className="tb-meat">
            <g transform="translate(198, 318) rotate(-6)">
              <ellipse cx="0" cy="0" rx="14" ry="6.5" fill="rgba(150, 100, 40, 0.95)" />
              <ellipse cx="0" cy="0" rx="11" ry="5" fill="url(#tb-meat)" />
              <path d="M-6 -2 Q 0 -4, 6 -2" stroke="rgba(255, 240, 200, 0.25)" strokeWidth="0.5" fill="none" />
            </g>
            <g transform="translate(224, 316) rotate(4)">
              <ellipse cx="0" cy="0" rx="14" ry="6.5" fill="rgba(150, 100, 40, 0.95)" />
              <ellipse cx="0" cy="0" rx="11" ry="5" fill="url(#tb-meat)" />
              <path d="M-6 -2 Q 0 -4, 6 -2" stroke="rgba(255, 240, 200, 0.25)" strokeWidth="0.5" fill="none" />
            </g>
            <g transform="translate(252, 318) rotate(-2)">
              <ellipse cx="0" cy="0" rx="14" ry="6.5" fill="rgba(150, 100, 40, 0.95)" />
              <ellipse cx="0" cy="0" rx="11" ry="5" fill="url(#tb-meat)" />
              <path d="M-6 -2 Q 0 -4, 6 -2" stroke="rgba(255, 240, 200, 0.25)" strokeWidth="0.5" fill="none" />
            </g>
            <g transform="translate(278, 316) rotate(5)">
              <ellipse cx="0" cy="0" rx="14" ry="6.5" fill="rgba(150, 100, 40, 0.95)" />
              <ellipse cx="0" cy="0" rx="11" ry="5" fill="url(#tb-meat)" />
              <path d="M-6 -2 Q 0 -4, 6 -2" stroke="rgba(255, 240, 200, 0.25)" strokeWidth="0.5" fill="none" />
            </g>
          </g>
        </g>

        {/* Клин сыра — справа по центру */}
        <g className="tb-cheese">
          <path
            d="M236 298 L316 298 L276 236 Z"
            fill="url(#tb-cheese)" />
          {/* Боковой срез */}
          <path
            d="M236 298 L276 236 L282 228 L242 290 Z"
            fill="rgba(170, 130, 50, 0.9)" />
          {/* Дырочки */}
          <g fill="rgba(120, 80, 30, 0.55)">
            <circle cx="272" cy="278" r="3.2" />
            <circle cx="286" cy="268" r="2.4" />
            <circle cx="260" cy="288" r="2" />
            <circle cx="298" cy="288" r="2.8" />
          </g>
        </g>

        {/* Капельки, отскакивающие в бокале */}
        <g className="tb-splash">
          <circle cx="148" cy="190" r="1.6" fill="rgba(130, 18, 36, 0.9)" />
          <circle cx="155" cy="188" r="1.1" fill="rgba(130, 18, 36, 0.8)" />
          <circle cx="143" cy="192" r="1" fill="rgba(130, 18, 36, 0.8)" />
        </g>

        {/* Бутылка вина — слева */}
        <g className="tb-bottle">
          {/* Тень на столе под бутылкой */}
          <ellipse cx="80" cy="308" rx="34" ry="5" fill="rgba(30, 10, 6, 0.38)" />
          {/* Тело бутылки */}
          <path
            d="M64 306
               L64 140
               Q 64 120, 74 110
               L 74 70
               Q 74 60, 78 60
               L 82 60
               Q 86 60, 86 70
               L 86 110
               Q 96 120, 96 140
               L 96 306 Z"
            fill="url(#tb-bottle)" />
          {/* Пробка/горлышко */}
          <rect x="73" y="54" width="14" height="10" fill="rgba(120, 80, 40, 0.9)" rx="1" />
          {/* Этикетка */}
          <rect x="62" y="196" width="36" height="76" fill="url(#tb-label)" />
          <g stroke="rgba(95, 17, 36, 0.85)" strokeWidth="0.8" fill="none">
            <line x1="66" y1="210" x2="94" y2="210" />
            <line x1="66" y1="260" x2="94" y2="260" />
          </g>
          {/* Армянская подпись на этикетке */}
          <text x="80" y="232" textAnchor="middle" fontSize="9"
                fill="rgba(95, 17, 36, 0.9)" fontFamily="serif" fontWeight="700">ԱՐԱՐԱՏ</text>
          <text x="80" y="247" textAnchor="middle" fontSize="5"
                fill="rgba(95, 17, 36, 0.75)" fontFamily="serif" letterSpacing="1">ARMENIA</text>
          {/* Блик — движется по стеклу */}
          <rect className="tb-shine" x="70" y="90" width="2.5" height="210"
                fill="rgba(255, 240, 210, 0.35)" />
        </g>

        {/* Бокал с вином — рядом с бутылкой */}
        <g className="tb-glass">
          {/* Тень */}
          <ellipse cx="150" cy="310" rx="28" ry="4" fill="rgba(30, 10, 6, 0.32)" />
          {/* Ножка и основание */}
          <rect x="148" y="270" width="4" height="30" fill="rgba(195, 175, 130, 0.55)" />
          <ellipse cx="150" cy="304" rx="22" ry="3" fill="rgba(195, 175, 130, 0.7)" />
          {/* Чаша бокала — прозрачная */}
          <path
            d="M122 180
               Q 122 254, 150 270
               Q 178 254, 178 180 Z"
            fill="rgba(250, 244, 228, 0.18)"
            stroke="rgba(195, 175, 130, 0.6)"
            strokeWidth="0.8" />
          {/* Вино внутри — колышется */}
          <path className="tb-wine"
            d="M125 210
               Q 150 216, 175 210
               Q 178 254, 150 268
               Q 122 254, 125 210 Z"
            fill="url(#tb-wine-glass)" />
          {/* Блик на чаше */}
          <path d="M134 200 Q 138 236, 146 258"
                stroke="rgba(255, 245, 220, 0.35)" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        </g>

        {/* Кружка — справа с паром */}
        <g className="tb-mug">
          {/* Тень */}
          <ellipse cx="350" cy="310" rx="30" ry="4" fill="rgba(30, 10, 6, 0.32)" />
          {/* Ручка */}
          <path d="M378 260 Q 402 260, 402 282 Q 402 300, 378 300"
                stroke="rgba(155, 135, 100, 0.9)" strokeWidth="6" fill="none" strokeLinecap="round" />
          {/* Корпус кружки */}
          <path
            d="M318 252
               L318 304
               Q 318 314, 328 314
               L 372 314
               Q 382 314, 382 304
               L 382 252 Z"
            fill="url(#tb-mug)" />
          {/* Край */}
          <ellipse cx="350" cy="252" rx="32" ry="6" fill="rgba(195, 175, 130, 0.75)" />
          {/* Внутренняя тень (жидкость тёмная сверху) */}
          <ellipse cx="350" cy="254" rx="28" ry="4.5" fill="rgba(65, 35, 15, 0.6)" />
          {/* Армянский орнамент полосой */}
          <g stroke="rgba(95, 17, 36, 0.85)" strokeWidth="0.8" fill="none">
            <path d="M322 274 Q 330 270, 338 274 Q 346 278, 354 274 Q 362 270, 370 274 Q 378 278, 378 274" />
            <line x1="322" y1="284" x2="378" y2="284" />
          </g>
        </g>

        {/* Пар от кружки */}
        <g className="tb-steam">
          <path className="tb-steam-1"
            d="M338 244 C 336 228, 344 222, 342 202 C 340 184, 346 174, 344 154"
            stroke="rgba(95, 17, 36, 0.22)" strokeWidth="5" fill="none" strokeLinecap="round" />
          <path className="tb-steam-2"
            d="M352 244 C 356 228, 348 222, 354 202 C 358 184, 350 174, 354 154"
            stroke="rgba(95, 17, 36, 0.18)" strokeWidth="4.5" fill="none" strokeLinecap="round" />
          <path className="tb-steam-3"
            d="M366 244 C 364 228, 370 222, 366 202 C 364 184, 370 174, 368 162"
            stroke="rgba(95, 17, 36, 0.14)" strokeWidth="4" fill="none" strokeLinecap="round" />
        </g>

        {/* Свечка-акцент по центру стола (не обязательна, но тёплая точка) */}
        <g className="tb-candle">
          <rect x="206" y="304" width="8" height="10" fill="rgba(200, 170, 110, 0.85)" />
          <path d="M210 304 C 208 300, 212 298, 210 294 C 209 292, 211 290, 210 288"
                stroke="rgba(240, 186, 95, 0.95)" strokeWidth="2.2" fill="none" strokeLinecap="round"
                className="tb-flame-sm" />
        </g>
      </svg>
      <svg
        className="sd-shape sd-shape--tandir-old"
        style={{ display: 'none' }}
      >
        <defs>
          <linearGradient id="td-body" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(95, 17, 36, 0.30)" />
            <stop offset="60%" stopColor="rgba(65, 12, 24, 0.42)" />
            <stop offset="100%" stopColor="rgba(42, 6, 16, 0.50)" />
          </linearGradient>
          <radialGradient id="td-glow" cx="50%" cy="40%" r="55%">
            <stop offset="0%" stopColor="rgba(240, 186, 95, 0.42)" />
            <stop offset="70%" stopColor="rgba(197, 158, 69, 0.08)" />
            <stop offset="100%" stopColor="rgba(197, 158, 69, 0)" />
          </radialGradient>
          <linearGradient id="td-flame" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="rgba(214, 90, 40, 0.85)" />
            <stop offset="55%" stopColor="rgba(240, 186, 95, 0.8)" />
            <stop offset="100%" stopColor="rgba(255, 230, 170, 0.3)" />
          </linearGradient>
          <linearGradient id="td-lavash" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(230, 190, 120, 0.85)" />
            <stop offset="100%" stopColor="rgba(185, 130, 70, 0.85)" />
          </linearGradient>
        </defs>

        {/* Мягкая тёплая подсветка от горла тандыра */}
        <ellipse cx="180" cy="145" rx="155" ry="85" fill="url(#td-glow)" className="td-halo" />

        {/* Дымки, поднимающиеся из горла */}
        <g className="td-smoke">
          <path className="td-smoke-1"
            d="M150 60 C 146 40, 154 30, 150 10 C 148 -6, 156 -14, 154 -32"
            stroke="rgba(95, 17, 36, 0.20)" strokeWidth="6" fill="none" strokeLinecap="round" />
          <path className="td-smoke-2"
            d="M190 70 C 194 50, 186 40, 192 22 C 196 6, 188 -4, 192 -22"
            stroke="rgba(95, 17, 36, 0.18)" strokeWidth="5" fill="none" strokeLinecap="round" />
          <path className="td-smoke-3"
            d="M220 80 C 218 62, 224 52, 220 36 C 218 20, 224 10, 222 -6"
            stroke="rgba(95, 17, 36, 0.14)" strokeWidth="4" fill="none" strokeLinecap="round" />
        </g>

        {/* Корпус тандыра — купол с широкой юбкой */}
        <g>
          {/* Основание-постамент */}
          <ellipse cx="180" cy="430" rx="150" ry="18" fill="rgba(42, 6, 16, 0.32)" />
          <path
            d="M60 430
               C 50 390, 60 360, 72 320
               C 80 280, 78 230, 88 200
               C 94 180, 100 170, 118 164
               L 242 164
               C 260 170, 266 180, 272 200
               C 282 230, 280 280, 288 320
               C 300 360, 310 390, 300 430 Z"
            fill="url(#td-body)"
          />
          {/* Вертикальные полосы кладки */}
          <g stroke="rgba(42, 6, 16, 0.22)" strokeWidth="0.8" fill="none" strokeLinecap="round">
            <path d="M100 200 C 96 270, 92 340, 92 420" />
            <path d="M140 190 C 138 270, 136 340, 134 420" />
            <path d="M180 186 L 180 420" />
            <path d="M220 190 C 222 270, 224 340, 226 420" />
            <path d="M260 200 C 264 270, 268 340, 268 420" />
          </g>
          {/* Горизонтальные ободы */}
          <g stroke="rgba(42, 6, 16, 0.28)" strokeWidth="1.2" fill="none">
            <path d="M80 260 C 140 268, 220 268, 280 260" />
            <path d="M74 340 C 140 348, 220 348, 286 340" />
            <path d="M70 410 C 140 418, 220 418, 290 410" />
          </g>
          {/* Горло — эллипс сверху */}
          <ellipse cx="180" cy="164" rx="62" ry="18" fill="rgba(20, 4, 8, 0.58)" />
          <ellipse cx="180" cy="162" rx="62" ry="18" fill="none"
                   stroke="rgba(197, 158, 69, 0.45)" strokeWidth="1.4" />
          {/* Тёплый отсвет изнутри горла */}
          <ellipse cx="180" cy="167" rx="52" ry="12" fill="url(#td-glow)" className="td-mouth-glow" />
        </g>

        {/* Пламя внутри тандыра — мерцает */}
        <g className="td-flames">
          <path className="td-flame td-flame-1"
            d="M150 400 C 146 370, 154 350, 148 320 C 142 295, 156 280, 152 250 C 150 235, 160 225, 156 210"
            stroke="url(#td-flame)" strokeWidth="5" fill="none" strokeLinecap="round" />
          <path className="td-flame td-flame-2"
            d="M180 410 C 186 380, 176 360, 184 330 C 190 305, 178 290, 184 260 C 188 240, 180 225, 184 210"
            stroke="url(#td-flame)" strokeWidth="6" fill="none" strokeLinecap="round" />
          <path className="td-flame td-flame-3"
            d="M212 400 C 216 370, 208 350, 214 320 C 218 295, 208 280, 214 250 C 218 235, 210 225, 214 210"
            stroke="url(#td-flame)" strokeWidth="5" fill="none" strokeLinecap="round" />
        </g>

        {/* Лаваши на стенках тандыра — по очереди «надуваются» и зарумяниваются */}
        <g className="td-lavashes">
          {/* Лаваш слева */}
          <g className="td-lavash td-lavash-1">
            <path
              d="M96 240 C 92 220, 100 200, 118 196
                 C 130 194, 138 208, 136 228
                 C 134 246, 124 256, 112 258
                 C 102 258, 96 252, 96 240 Z"
              fill="url(#td-lavash)" />
            <path
              d="M104 230 C 108 226, 116 224, 122 228"
              stroke="rgba(120, 70, 30, 0.35)" strokeWidth="0.8" fill="none" strokeLinecap="round" />
            <path
              d="M108 240 C 114 238, 122 238, 128 242"
              stroke="rgba(120, 70, 30, 0.35)" strokeWidth="0.8" fill="none" strokeLinecap="round" />
          </g>
          {/* Лаваш справа */}
          <g className="td-lavash td-lavash-2">
            <path
              d="M264 240 C 268 220, 260 200, 242 196
                 C 230 194, 222 208, 224 228
                 C 226 246, 236 256, 248 258
                 C 258 258, 264 252, 264 240 Z"
              fill="url(#td-lavash)" />
            <path
              d="M256 230 C 252 226, 244 224, 238 228"
              stroke="rgba(120, 70, 30, 0.35)" strokeWidth="0.8" fill="none" strokeLinecap="round" />
            <path
              d="M252 240 C 246 238, 238 238, 232 242"
              stroke="rgba(120, 70, 30, 0.35)" strokeWidth="0.8" fill="none" strokeLinecap="round" />
          </g>
          {/* Лаваш сзади по центру — крупный */}
          <g className="td-lavash td-lavash-3">
            <path
              d="M150 340 C 144 320, 156 300, 180 296
                 C 204 300, 216 320, 210 340
                 C 206 356, 194 364, 180 364
                 C 166 364, 154 356, 150 340 Z"
              fill="url(#td-lavash)" />
            <path
              d="M162 320 C 172 316, 188 316, 198 320"
              stroke="rgba(120, 70, 30, 0.35)" strokeWidth="0.9" fill="none" strokeLinecap="round" />
            <path
              d="M160 336 C 172 334, 188 334, 200 336"
              stroke="rgba(120, 70, 30, 0.35)" strokeWidth="0.9" fill="none" strokeLinecap="round" />
            <path
              d="M162 350 C 172 348, 188 348, 198 350"
              stroke="rgba(120, 70, 30, 0.35)" strokeWidth="0.9" fill="none" strokeLinecap="round" />
          </g>
        </g>

        {/* Деревянная лопатка над горлом */}
        <g className="td-paddle">
          <rect x="176" y="110" width="8" height="60" rx="2" fill="rgba(95, 60, 30, 0.55)" />
          <ellipse cx="180" cy="108" rx="22" ry="8" fill="rgba(95, 60, 30, 0.6)" />
        </g>
      </svg>
      <svg
        className="sd-shape sd-shape--tree"
        data-parallax="0.14"
        viewBox="0 0 360 440"
        style={{ top: '-4%', right: '-8%', display: 'none' }}
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
