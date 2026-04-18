import './Logo.css';

interface LogoProps {
  size?: number;
  variant?: 'mark' | 'stacked';
  className?: string;
  animated?: boolean;
}

/**
 * Старинный гранат в духе армянской манускриптной миниатюры.
 * Глубокий винный корпус с тонкой золотой гравировкой, сухой
 * калиx-корона, патина, мягкое тёплое свечение. Без игрушечного
 * глянца. Плавно парит, корона колышется.
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
        viewBox="0 0 100 100"
        fill="none"
        aria-hidden
        role="img"
      >
        <defs>
          {/* Глубокое вино с тёмной тенью снизу — без розовой «игрушечности» */}
          <radialGradient id={`${uid}-body`} cx="42%" cy="36%" r="78%">
            <stop offset="0%" stopColor="#8a1730" />
            <stop offset="40%" stopColor="#5e1022" />
            <stop offset="75%" stopColor="#380912" />
            <stop offset="100%" stopColor="#1a040a" />
          </radialGradient>
          {/* Мягкая тёплая патина (не белый блик) */}
          <radialGradient id={`${uid}-patina`} cx="34%" cy="26%" r="34%">
            <stop offset="0%" stopColor="rgba(214, 160, 110, 0.32)" />
            <stop offset="60%" stopColor="rgba(214, 160, 110, 0.08)" />
            <stop offset="100%" stopColor="rgba(214, 160, 110, 0)" />
          </radialGradient>
          {/* Состаренная латунь для гравировки и калиxа */}
          <linearGradient id={`${uid}-brass`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e6c682" />
            <stop offset="45%" stopColor="#b8912f" />
            <stop offset="100%" stopColor="#5e4414" />
          </linearGradient>
          <linearGradient id={`${uid}-leaf`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#527e3b" />
            <stop offset="100%" stopColor="#1e3f18" />
          </linearGradient>
          {/* Тёплая кромка-ободок света справа */}
          <linearGradient id={`${uid}-rim`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(214, 160, 110, 0)" />
            <stop offset="100%" stopColor="rgba(233, 188, 125, 0.55)" />
          </linearGradient>
        </defs>

        {/* Мягкая земляная тень */}
        <ellipse
          className="armlogo__shadow"
          cx="50"
          cy="93"
          rx="24"
          ry="3"
          fill="rgba(30, 4, 12, 0.32)"
        />

        {/* Сухой листок за короной */}
        <g className="armlogo__leaf">
          <path
            d="M64 18 C 74 10, 84 14, 82 26 C 74 28, 66 24, 64 18 Z"
            fill={`url(#${uid}-leaf)`}
          />
          <path
            d="M66 21 C 72 19, 77 19, 80 23"
            stroke="rgba(230, 198, 130, 0.7)"
            strokeWidth="0.7"
            strokeLinecap="round"
            fill="none"
          />
          {/* Штриховка прожилок */}
          <path
            d="M70 20 L72 25 M74 19 L75 26 M77 20 L78 25"
            stroke="rgba(20, 40, 12, 0.5)"
            strokeWidth="0.4"
            fill="none"
          />
        </g>

        {/* Тело граната — благородная форма, чуть сплюснутая, без «шарика» */}
        <g className="armlogo__body">
          <path
            d="M50 24
               C 28 24, 17 42, 17 60
               C 17 80, 34 90, 50 90
               C 66 90, 83 80, 83 60
               C 83 42, 72 24, 50 24 Z"
            fill={`url(#${uid}-body)`}
          />

          {/* Тёплая гравированная кромка света — не блик, а «сусальное золото» */}
          <path
            d="M78 42 C 84 54, 84 70, 74 86"
            stroke={`url(#${uid}-rim)`}
            strokeWidth="1.4"
            strokeLinecap="round"
            fill="none"
          />

          {/* Манускриптная золотая гравировка — тончайшие линии сегментов */}
          <g
            stroke="rgba(197, 158, 69, 0.55)"
            strokeWidth="0.55"
            fill="none"
            strokeLinecap="round"
          >
            <path d="M32 38 C 28 54, 30 72, 40 86" />
            <path d="M68 38 C 72 54, 70 72, 60 86" />
            <path d="M50 28 C 51 52, 51 72, 50 88" />
            <path d="M22 58 Q 50 64, 78 58" />
          </g>

          {/* Крошечные золотые «зёрна» проступают сквозь кожу — намёк */}
          <g fill="rgba(197, 158, 69, 0.38)">
            <circle cx="39" cy="52" r="0.7" />
            <circle cx="43" cy="46" r="0.6" />
            <circle cx="47" cy="50" r="0.7" />
            <circle cx="53" cy="47" r="0.7" />
            <circle cx="57" cy="51" r="0.6" />
            <circle cx="61" cy="46" r="0.7" />
            <circle cx="41" cy="64" r="0.6" />
            <circle cx="46" cy="62" r="0.7" />
            <circle cx="52" cy="65" r="0.7" />
            <circle cx="58" cy="62" r="0.6" />
            <circle cx="63" cy="64" r="0.7" />
            <circle cx="44" cy="74" r="0.6" />
            <circle cx="50" cy="76" r="0.7" />
            <circle cx="56" cy="74" r="0.6" />
          </g>

          {/* Мягкая тёплая патина сверху-слева (вместо глянца) */}
          <path
            d="M50 24
               C 28 24, 17 42, 17 60
               C 17 80, 34 90, 50 90
               C 66 90, 83 80, 83 60
               C 83 42, 72 24, 50 24 Z"
            fill={`url(#${uid}-patina)`}
          />

          {/* Мерцающие искры на поверхности */}
          <circle className="armlogo__glint armlogo__glint--1" cx="36" cy="38" r="0.8" fill="#f5e2bb" />
          <circle className="armlogo__glint armlogo__glint--2" cx="58" cy="56" r="0.6" fill="#f5e2bb" />
          <circle className="armlogo__glint armlogo__glint--3" cx="42" cy="74" r="0.5" fill="#f5e2bb" />
        </g>

        {/* Старинный калиx — сухие узкие лепестки, а не зубчатая корона */}
        <g className="armlogo__crown">
          {/* Лепестки — тонкие, сужающиеся, с двойным контуром как на иконах */}
          <g
            fill={`url(#${uid}-brass)`}
            stroke="#3a2808"
            strokeWidth="0.4"
            strokeLinejoin="round"
          >
            <path d="M50 26 L40 10 C 44 14, 46 18, 48 24 Z" />
            <path d="M50 26 L45 6 C 47 12, 48 18, 49 24 Z" />
            <path d="M50 26 L50 4 C 50 12, 50 18, 50 24 Z" />
            <path d="M50 26 L55 6 C 53 12, 52 18, 51 24 Z" />
            <path d="M50 26 L60 10 C 56 14, 54 18, 52 24 Z" />
          </g>
          {/* Центральная золотая «бусина» калиxа с гравировкой */}
          <circle cx="50" cy="24" r="2.6" fill={`url(#${uid}-brass)`} stroke="#3a2808" strokeWidth="0.4" />
          <circle cx="50" cy="24" r="1" fill="#3a2808" />
          <circle cx="49.5" cy="23.3" r="0.35" fill="#f2dba4" />
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
