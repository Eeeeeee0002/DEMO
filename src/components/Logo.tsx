import './Logo.css';

interface LogoProps {
  size?: number;
  variant?: 'mark' | 'stacked';
  className?: string;
  animated?: boolean;
}

/**
 * Реалистичный гранат в духе садовой фотографии: тёплый глянцевый
 * красный корпус с золотистым брюшком, капли влаги, веточка с листком
 * сверху, сухой калиx-корона внизу (сепалии веером вниз).
 */
export function Logo({
  size = 44,
  variant = 'mark',
  className,
  animated = true,
}: LogoProps) {
  const uid = `lg-${Math.random().toString(36).slice(2, 8)}`;
  return (
    <span
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: variant === 'stacked' ? 12 : 10,
      }}
    >
      <svg
        className={animated ? 'armlogo armlogo--animated' : 'armlogo'}
        width={size}
        height={size}
        viewBox="0 0 100 120"
        fill="none"
        aria-hidden
        role="img"
      >
        <defs>
          {/* Корпус: сочный красный сверху → золотистый снизу → коричневая тень у калиxа */}
          <radialGradient id={`${uid}-body`} cx="42%" cy="38%" r="72%">
            <stop offset="0%" stopColor="#ef4a58" />
            <stop offset="35%" stopColor="#c9243b" />
            <stop offset="70%" stopColor="#8b1524" />
            <stop offset="100%" stopColor="#4a0e13" />
          </radialGradient>
          {/* Золотистое «брюшко» снизу — закатное солнце подсвечивает */}
          <radialGradient id={`${uid}-belly`} cx="50%" cy="90%" r="42%">
            <stop offset="0%" stopColor="rgba(240, 186, 95, 0.7)" />
            <stop offset="55%" stopColor="rgba(210, 120, 62, 0.3)" />
            <stop offset="100%" stopColor="rgba(210, 120, 62, 0)" />
          </radialGradient>
          {/* Крупный глянцевый блик сверху */}
          <radialGradient id={`${uid}-gloss`} cx="36%" cy="28%" r="28%">
            <stop offset="0%" stopColor="rgba(255, 230, 210, 0.85)" />
            <stop offset="70%" stopColor="rgba(255, 230, 210, 0.15)" />
            <stop offset="100%" stopColor="rgba(255, 230, 210, 0)" />
          </radialGradient>
          {/* Калиx — сухие ржаво-коричневые сепалии */}
          <linearGradient id={`${uid}-sepal`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#a0582a" />
            <stop offset="60%" stopColor="#6e3415" />
            <stop offset="100%" stopColor="#3a1a08" />
          </linearGradient>
          {/* Лист */}
          <linearGradient id={`${uid}-leaf`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#6a9a42" />
            <stop offset="100%" stopColor="#244a16" />
          </linearGradient>
          {/* Веточка */}
          <linearGradient id={`${uid}-stem`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#6a4420" />
            <stop offset="100%" stopColor="#2d1a08" />
          </linearGradient>
        </defs>

        {/* Земляная тень под плодом */}
        <ellipse
          className="armlogo__shadow"
          cx="50"
          cy="115"
          rx="22"
          ry="2.8"
          fill="rgba(40, 14, 8, 0.28)"
        />

        {/* Веточка и лист — сверху, над плодом */}
        <g className="armlogo__leaf">
          <path
            d="M50 14 C 48 10, 50 6, 54 4"
            stroke={`url(#${uid}-stem)`}
            strokeWidth="2.2"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M54 4 C 62 0, 72 2, 74 10 C 70 14, 60 14, 54 8 Z"
            fill={`url(#${uid}-leaf)`}
            stroke="#1a3a0e"
            strokeWidth="0.4"
          />
          <path
            d="M56 7 C 62 5, 68 5, 72 9"
            stroke="rgba(170, 210, 130, 0.55)"
            strokeWidth="0.6"
            strokeLinecap="round"
            fill="none"
          />
        </g>

        {/* Тело граната — слегка приплюснутая форма, как на фото */}
        <g className="armlogo__body">
          <path
            d="M50 18
               C 26 18, 14 36, 14 58
               C 14 76, 26 90, 38 94
               C 42 94.5, 46 94.5, 50 94.5
               C 54 94.5, 58 94.5, 62 94
               C 74 90, 86 76, 86 58
               C 86 36, 74 18, 50 18 Z"
            fill={`url(#${uid}-body)`}
          />
          {/* Золотистое «брюшко» снизу */}
          <path
            d="M50 18
               C 26 18, 14 36, 14 58
               C 14 76, 26 90, 38 94
               C 42 94.5, 46 94.5, 50 94.5
               C 54 94.5, 58 94.5, 62 94
               C 74 90, 86 76, 86 58
               C 86 36, 74 18, 50 18 Z"
            fill={`url(#${uid}-belly)`}
          />
          {/* Глянцевый блик сверху */}
          <path
            d="M50 18
               C 26 18, 14 36, 14 58
               C 14 76, 26 90, 38 94
               C 42 94.5, 46 94.5, 50 94.5
               C 54 94.5, 58 94.5, 62 94
               C 74 90, 86 76, 86 58
               C 86 36, 74 18, 50 18 Z"
            fill={`url(#${uid}-gloss)`}
          />
          {/* Тонкие вертикальные бороздки — едва заметные */}
          <g stroke="rgba(46, 8, 12, 0.22)" strokeWidth="0.45" fill="none" strokeLinecap="round">
            <path d="M32 34 C 28 52, 30 72, 38 90" />
            <path d="M68 34 C 72 52, 70 72, 62 90" />
            <path d="M50 22 C 51 52, 51 74, 50 92" />
          </g>
          {/* Капли влаги — крошечные глянцевые кружочки */}
          <g>
            {[
              [30, 42, 1.4],
              [40, 32, 1.1],
              [48, 36, 0.9],
              [54, 28, 1.3],
              [38, 50, 0.8],
              [60, 46, 1],
              [42, 60, 0.9],
              [66, 62, 1.2],
              [52, 48, 0.7],
              [28, 58, 1],
              [70, 54, 0.8],
            ].map(([x, y, r], i) => (
              <g key={i}>
                <circle
                  cx={x}
                  cy={y}
                  r={r}
                  fill="rgba(255, 245, 230, 0.55)"
                />
                <circle
                  cx={Number(x) - Number(r) * 0.35}
                  cy={Number(y) - Number(r) * 0.35}
                  r={Number(r) * 0.35}
                  fill="rgba(255, 255, 255, 0.95)"
                />
              </g>
            ))}
          </g>
          {/* Мерцающие искры-подмигивания */}
          <circle className="armlogo__glint armlogo__glint--1" cx="34" cy="34" r="0.9" fill="#fff" />
          <circle className="armlogo__glint armlogo__glint--2" cx="56" cy="52" r="0.7" fill="#fff" />
          <circle className="armlogo__glint armlogo__glint--3" cx="44" cy="68" r="0.6" fill="#fff" />
        </g>

        {/* Калиx ВНИЗУ — сухие ржавые сепалии, раскрытые веером вниз */}
        <g className="armlogo__crown">
          {/* Чаша-основание калиxа (на «пятке» граната) */}
          <path
            d="M38 92 C 38 90, 42 89, 50 89 C 58 89, 62 90, 62 92 C 62 96, 56 98, 50 98 C 44 98, 38 96, 38 92 Z"
            fill={`url(#${uid}-sepal)`}
            stroke="#2a1204"
            strokeWidth="0.5"
          />
          {/* Сепалии — узкие острые лепестки, расходятся вниз-наружу */}
          <g
            fill={`url(#${uid}-sepal)`}
            stroke="#2a1204"
            strokeWidth="0.5"
            strokeLinejoin="round"
          >
            <path d="M40 94 C 34 100, 30 106, 28 112 C 34 108, 38 102, 42 96 Z" />
            <path d="M44 96 C 42 104, 40 110, 40 114 C 44 110, 46 104, 48 96 Z" />
            <path d="M50 96 C 49 104, 49 112, 50 116 C 51 112, 51 104, 50 96 Z" />
            <path d="M56 96 C 58 104, 60 110, 60 114 C 56 110, 54 104, 52 96 Z" />
            <path d="M60 94 C 66 100, 70 106, 72 112 C 66 108, 62 102, 58 96 Z" />
          </g>
          {/* Глубокая тень внутри чаши */}
          <ellipse cx="50" cy="94" rx="8" ry="1.5" fill="rgba(20, 8, 2, 0.6)" />
          {/* Золотистые тёплые блики на сухих лепестках */}
          <g stroke="rgba(240, 186, 95, 0.5)" strokeWidth="0.35" fill="none" strokeLinecap="round">
            <path d="M32 104 L40 96" />
            <path d="M42 108 L46 98" />
            <path d="M50 112 L50 98" />
            <path d="M58 108 L54 98" />
            <path d="M68 104 L60 96" />
          </g>
        </g>
      </svg>

      {variant === 'stacked' && (
        <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.05 }}>
          <span
            style={{
              fontFamily: 'var(--serif)',
              fontSize: '1.45rem',
              fontWeight: 500,
              letterSpacing: '0.02em',
              color: 'var(--bone)',
            }}
          >
            Arm&nbsp;Market
          </span>
          <span
            style={{
              fontSize: '0.62rem',
              letterSpacing: '0.34em',
              textTransform: 'uppercase',
              color: 'var(--brass-bright)',
              fontWeight: 700,
              marginTop: 2,
            }}
          >
            Armenian Fine&nbsp;Foods
          </span>
        </span>
      )}
    </span>
  );
}
