interface FlowersProps {
  size?: number;
  className?: string;
  /** 'bouquet' — full coloured cluster (Hero), 'sprig' — small accent (section dividers) */
  variant?: 'bouquet' | 'sprig';
}

/**
 * Botanical bouquet inspired by armenian illuminated manuscripts —
 * coral / yellow / rose / purple blooms with teal and green foliage.
 */
export function Flowers({ size = 260, variant = 'bouquet', className }: FlowersProps) {
  if (variant === 'sprig') {
    return (
      <svg
        width={size}
        height={size * 0.42}
        viewBox="0 0 260 110"
        fill="none"
        aria-hidden
        className={className}
      >
        {/* Stem */}
        <path d="M10 90 C 60 80, 110 50, 170 40 C 210 32, 240 30, 255 28" stroke="var(--bloom-green)" strokeWidth="1.6" strokeLinecap="round" fill="none" />
        {/* Leaves */}
        <path d="M60 78 C 72 62, 92 62, 96 78 C 86 76, 70 82, 60 78 Z" fill="var(--bloom-teal)" opacity="0.85" />
        <path d="M120 62 C 132 46, 152 46, 156 62 C 146 60, 130 66, 120 62 Z" fill="var(--bloom-green)" opacity="0.8" />
        {/* Blooms */}
        <circle cx="40" cy="88" r="6" fill="var(--bloom-rose)" />
        <circle cx="90" cy="66" r="7" fill="var(--bloom-yellow)" />
        <circle cx="150" cy="48" r="8" fill="var(--bloom-coral)" />
        <circle cx="200" cy="36" r="6" fill="var(--bloom-purple)" />
        <circle cx="240" cy="28" r="5" fill="var(--bloom-rose)" />
      </svg>
    );
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 260 260"
      fill="none"
      aria-hidden
      className={className}
    >
      {/* Background leaves — teal and green foliage fan */}
      <g opacity="0.9">
        <path d="M40 140 C 30 100, 60 60, 100 55 C 80 85, 75 120, 90 150 C 70 152, 52 150, 40 140 Z" fill="var(--bloom-teal)" />
        <path d="M215 150 C 235 120, 238 80, 210 55 C 212 90, 200 125, 188 150 C 200 155, 210 154, 215 150 Z" fill="var(--bloom-green)" />
        <path d="M60 200 C 48 175, 55 150, 78 140 C 76 165, 82 185, 95 205 C 82 210, 68 208, 60 200 Z" fill="var(--bloom-teal)" opacity="0.85" />
        <path d="M200 205 C 215 185, 218 160, 205 140 C 205 165, 195 185, 180 205 C 188 212, 196 210, 200 205 Z" fill="var(--bloom-green)" opacity="0.85" />
      </g>

      {/* Big yellow rose (top-left) */}
      <g transform="translate(90 80)">
        <circle r="28" fill="var(--bloom-yellow)" />
        <circle r="20" fill="#f7d36a" />
        <circle r="12" fill="#f8dd83" />
        <circle r="5" fill="#c58c1a" />
        <path d="M-28 0 A 28 28 0 0 1 0 -28" stroke="#c58c1a" strokeWidth="1.2" fill="none" opacity="0.4" />
      </g>

      {/* Coral rose (center-top) */}
      <g transform="translate(160 70)">
        <circle r="30" fill="var(--bloom-coral)" />
        <circle r="22" fill="#ef7556" />
        <circle r="13" fill="#f38e73" />
        <circle r="5" fill="#8f2812" />
      </g>

      {/* Magenta peony (center-right) */}
      <g transform="translate(195 135)">
        <circle r="26" fill="var(--bloom-rose)" />
        <circle r="18" fill="#ec5786" />
        <circle r="10" fill="#f07299" />
        <circle r="4" fill="#8a1d42" />
      </g>

      {/* Purple hydrangea (bottom-center) */}
      <g transform="translate(150 185)">
        <circle cx="-14" cy="-8" r="10" fill="var(--bloom-purple)" />
        <circle cx="8" cy="-12" r="10" fill="#9751bf" />
        <circle cx="-6" cy="10" r="10" fill="#8a4bb0" />
        <circle cx="14" cy="8" r="10" fill="#6d3490" />
        <circle cx="0" cy="0" r="8" fill="#b47dd1" />
      </g>

      {/* Teal pom (left-mid) */}
      <g transform="translate(70 160)">
        <circle r="22" fill="var(--bloom-teal)" />
        <circle r="15" fill="#4dc9b9" />
        <circle r="7" fill="#0f8578" />
      </g>

      {/* Small accent blooms */}
      <circle cx="120" cy="140" r="8" fill="var(--bloom-yellow)" />
      <circle cx="110" cy="210" r="9" fill="var(--bloom-coral)" />
      <circle cx="185" cy="220" r="7" fill="var(--bloom-rose)" />
      <circle cx="55" cy="110" r="6" fill="var(--bloom-rose)" />
      <circle cx="225" cy="100" r="6" fill="var(--bloom-purple)" />
      <circle cx="235" cy="180" r="5" fill="var(--bloom-yellow)" />

      {/* Stem detail — thin dark lines for manuscript feel */}
      <g stroke="#2a1d12" strokeWidth="0.8" fill="none" opacity="0.35">
        <path d="M130 230 C 128 210, 130 190, 135 170" strokeLinecap="round" />
        <path d="M150 230 C 152 210, 148 185, 160 160" strokeLinecap="round" />
        <path d="M120 230 C 115 210, 108 180, 85 170" strokeLinecap="round" />
      </g>
    </svg>
  );
}
