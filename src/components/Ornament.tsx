export function Ornament({
  width = 180,
  color = 'currentColor',
}: {
  width?: number;
  color?: string;
}) {
  return (
    <svg
      width={width}
      height={width * 0.22}
      viewBox="0 0 180 40"
      aria-hidden="true"
    >
      <g fill="none" stroke={color} strokeWidth="1.2" strokeLinecap="round">
        <path d="M10 20 Q 30 2, 50 20 T 90 20 T 130 20 T 170 20" />
        <path
          d="M10 20 Q 30 38, 50 20 T 90 20 T 130 20 T 170 20"
          opacity="0.6"
        />
        <circle cx="90" cy="20" r="4" fill={color} stroke="none" />
        <circle cx="30" cy="20" r="2" fill={color} stroke="none" />
        <circle cx="150" cy="20" r="2" fill={color} stroke="none" />
        <circle cx="10" cy="20" r="1.5" fill={color} stroke="none" />
        <circle cx="170" cy="20" r="1.5" fill={color} stroke="none" />
      </g>
    </svg>
  );
}

export function Cross({
  size = 60,
  color = 'currentColor',
}: {
  size?: number;
  color?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      aria-hidden="true"
    >
      <g
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Armenian khachkar-inspired ornament */}
        <path d="M30 6 L30 54 M6 30 L54 30" />
        <path d="M30 6 Q 24 14, 30 20 Q 36 14, 30 6" />
        <path d="M30 54 Q 24 46, 30 40 Q 36 46, 30 54" />
        <path d="M6 30 Q 14 24, 20 30 Q 14 36, 6 30" />
        <path d="M54 30 Q 46 24, 40 30 Q 46 36, 54 30" />
        <circle cx="30" cy="30" r="5" />
        <circle cx="30" cy="30" r="1.5" fill={color} />
      </g>
    </svg>
  );
}
