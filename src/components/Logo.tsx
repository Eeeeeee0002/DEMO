import './Logo.css';

interface LogoProps {
  size?: number;
  variant?: 'mark' | 'stacked';
  className?: string;
  animated?: boolean;
}

/**
 * Beautiful animated pomegranate logo — ripe fruit with a golden crown,
 * cutaway revealing ruby seeds, and a small green leaf. Gently floats,
 * wobbles, and the seeds softly glint.
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
          <radialGradient id={`${uid}-body`} cx="38%" cy="32%" r="78%">
            <stop offset="0%" stopColor="#c83656" />
            <stop offset="35%" stopColor="#8d1a36" />
            <stop offset="75%" stopColor="#5a0f24" />
            <stop offset="100%" stopColor="#2c060f" />
          </radialGradient>
          <radialGradient id={`${uid}-shine`} cx="30%" cy="22%" r="26%">
            <stop offset="0%" stopColor="rgba(255, 220, 200, 0.8)" />
            <stop offset="100%" stopColor="rgba(255, 220, 200, 0)" />
          </radialGradient>
          <linearGradient id={`${uid}-crown`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e7c572" />
            <stop offset="50%" stopColor="#b28932" />
            <stop offset="100%" stopColor="#6d4f15" />
          </linearGradient>
          <radialGradient id={`${uid}-seed`} cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#ff5a7a" />
            <stop offset="55%" stopColor="#c4163a" />
            <stop offset="100%" stopColor="#6a0a1e" />
          </radialGradient>
          <linearGradient id={`${uid}-leaf`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#5ea148" />
            <stop offset="100%" stopColor="#2a5b1f" />
          </linearGradient>
        </defs>

        {/* Soft ground shadow */}
        <ellipse
          className="armlogo__shadow"
          cx="50"
          cy="92"
          rx="26"
          ry="3.5"
          fill="rgba(42, 6, 16, 0.35)"
        />

        {/* Small green leaf behind the crown */}
        <g className="armlogo__leaf">
          <path
            d="M62 18 C 72 10, 82 14, 80 26 C 72 28, 64 24, 62 18 Z"
            fill={`url(#${uid}-leaf)`}
          />
          <path
            d="M64 21 C 70 19, 75 19, 78 23"
            stroke="#8bc270"
            strokeWidth="0.8"
            strokeLinecap="round"
            fill="none"
            opacity="0.7"
          />
        </g>

        {/* Whole pomegranate body — rich and ripe */}
        <g className="armlogo__body">
          <path
            d="M50 22
               C 28 22, 16 40, 16 58
               C 16 78, 34 90, 50 90
               C 66 90, 84 78, 84 58
               C 84 40, 72 22, 50 22 Z"
            fill={`url(#${uid}-body)`}
          />
          {/* Subtle vertical segment lines (left + right) for volume */}
          <path
            d="M30 42 C 30 60, 32 76, 40 88"
            stroke="rgba(20, 4, 12, 0.32)"
            strokeWidth="0.7"
            fill="none"
          />
          <path
            d="M70 42 C 70 60, 68 76, 60 88"
            stroke="rgba(20, 4, 12, 0.32)"
            strokeWidth="0.7"
            fill="none"
          />
          {/* Center vertical line */}
          <path
            d="M50 30 C 51 52, 51 72, 50 88"
            stroke="rgba(20, 4, 12, 0.22)"
            strokeWidth="0.5"
            fill="none"
          />
          {/* Warm rim light on the right side */}
          <path
            d="M78 46 C 84 58, 82 72, 72 84"
            stroke="rgba(255, 170, 150, 0.35)"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
            opacity="0.85"
          />
          {/* Top-left sheen */}
          <ellipse
            cx="38"
            cy="38"
            rx="15"
            ry="11"
            fill={`url(#${uid}-shine)`}
            opacity="0.9"
          />
          {/* Small secondary highlight */}
          <ellipse
            cx="33"
            cy="54"
            rx="3"
            ry="8"
            fill="rgba(255, 220, 200, 0.18)"
          />
          {/* Animated twinkle points on the skin */}
          <circle className="armlogo__glint armlogo__glint--1" cx="36" cy="34" r="1.1" fill="#fff3da" />
          <circle className="armlogo__glint armlogo__glint--2" cx="44" cy="44" r="0.7" fill="#fff3da" />
          <circle className="armlogo__glint armlogo__glint--3" cx="29" cy="62" r="0.6" fill="#fff3da" />
        </g>

        {/* Golden crown / calyx on top */}
        <g className="armlogo__crown">
          <path
            d="M40 24
               L44 10 L46 22
               L49 8 L51 22
               L54 10 L56 22
               L60 12 L60 24 Z"
            fill={`url(#${uid}-crown)`}
            stroke="#5b3f10"
            strokeWidth="0.6"
            strokeLinejoin="round"
          />
          <circle cx="50" cy="24" r="3.2" fill="#e0b854" stroke="#6d4f15" strokeWidth="0.5" />
          <circle cx="50" cy="24" r="1.2" fill="#6d4f15" />
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
