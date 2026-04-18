interface LogoProps {
  size?: number;
  variant?: 'mark' | 'stacked';
  className?: string;
}

/**
 * Arm Market brand mark: Ararat-style mountain peaks rising from a footed
 * bowl (gata / wine goblet), enclosed in a circle. Inspired by the user's
 * reference; redrawn for Arm Market with Armenian typographic setting.
 */
export function Logo({ size = 44, variant = 'mark', className }: LogoProps) {
  const s = size;
  return (
    <span
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: variant === 'stacked' ? 8 : 10,
      }}
    >
      <svg
        width={s}
        height={s}
        viewBox="0 0 64 64"
        fill="none"
        aria-hidden
        role="img"
      >
        {/* Burgundy circle */}
        <circle cx="32" cy="32" r="30" fill="var(--pom)" />
        <circle
          cx="32"
          cy="32"
          r="30"
          stroke="var(--pom-deep)"
          strokeOpacity="0.4"
          strokeWidth="1.2"
        />

        {/* Two mountain peaks (Ararat + small Ararat) */}
        <path
          d="M18 30 L27 15 L33.5 23 L37 19 L46 30 Z"
          fill="#ffffff"
        />
        {/* Snow cap highlight lines */}
        <path
          d="M23 27 L27 22 L30 26"
          stroke="var(--pom)"
          strokeWidth="1.1"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.85"
        />

        {/* Separator line between peaks and bowl */}
        <path
          d="M16 32 H48"
          stroke="#ffffff"
          strokeWidth="1.6"
          strokeLinecap="round"
        />

        {/* Bowl / goblet silhouette */}
        <path
          d="M18 34 C18 42 24 48 32 48 C40 48 46 42 46 34 Z"
          fill="#ffffff"
        />
        {/* Inner crescent shading inside bowl */}
        <path
          d="M22 34 C23.5 40 28 44 32 45 C28 45 24 42 22 34 Z"
          fill="var(--pom)"
          opacity="0.12"
        />

        {/* Stem + foot */}
        <path
          d="M31 48 V52 M29 52 H35"
          stroke="#ffffff"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>

      {variant === 'stacked' && (
        <span
          style={{
            display: 'flex',
            flexDirection: 'column',
            lineHeight: 1.05,
          }}
        >
          <span
            style={{
              fontFamily: 'var(--serif)',
              fontSize: '1.35rem',
              fontWeight: 600,
              letterSpacing: '0.02em',
              color: 'var(--bone)',
            }}
          >
            Arm Market
          </span>
          <span
            style={{
              fontSize: '0.64rem',
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: 'var(--pom)',
              fontWeight: 700,
            }}
          >
            Армянские продукты
          </span>
        </span>
      )}
    </span>
  );
}
