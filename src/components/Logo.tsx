interface LogoProps {
  size?: number;
  variant?: 'mark' | 'stacked';
  className?: string;
}

/**
 * Premium monogram logo: serif "AM" intertwined letters inside a thin
 * double-ring gold frame on deep burgundy — timeless and elegant.
 */
export function Logo({ size = 44, variant = 'mark', className }: LogoProps) {
  const s = size;
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
        width={s}
        height={s}
        viewBox="0 0 80 80"
        fill="none"
        aria-hidden
        role="img"
      >
        {/* Deep burgundy disc */}
        <circle cx="40" cy="40" r="38" fill="var(--pom-deep)" />
        <circle cx="40" cy="40" r="38" stroke="var(--pom)" strokeOpacity="0.4" strokeWidth="1" />

        {/* Gold double ring */}
        <circle cx="40" cy="40" r="34" stroke="var(--brass-bright)" strokeWidth="0.9" fill="none" opacity="0.9" />
        <circle cx="40" cy="40" r="31" stroke="var(--brass-bright)" strokeWidth="0.6" fill="none" opacity="0.55" />

        {/* Monogram AM — serif, hand-crafted */}
        {/* Letter A */}
        <path
          d="M26 54 L34 26 L38 26 L46 54 M29 47 L43 47"
          stroke="#f3e3b5"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Letter M intertwined */}
        <path
          d="M44 54 V30 L52 46 L60 30 V54"
          stroke="#f3e3b5"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Tiny Armenian cross accent at top */}
        <g transform="translate(40 12)" stroke="var(--brass-bright)" strokeWidth="0.9" strokeLinecap="round">
          <line x1="0" y1="-3" x2="0" y2="3" />
          <line x1="-2" y1="0" x2="2" y2="0" />
        </g>

        {/* Small dot ornaments on the sides of ring */}
        <circle cx="6.5" cy="40" r="1.2" fill="var(--brass-bright)" opacity="0.9" />
        <circle cx="73.5" cy="40" r="1.2" fill="var(--brass-bright)" opacity="0.9" />
        <circle cx="40" cy="73.5" r="1.2" fill="var(--brass-bright)" opacity="0.9" />
      </svg>

      {variant === 'stacked' && (
        <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.05 }}>
          <span
            style={{
              fontFamily: 'var(--serif)',
              fontSize: '1.45rem',
              fontWeight: 500,
              letterSpacing: '0.04em',
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
