interface PomegranateProps {
  size?: number;
  open?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

/**
 * Декоративный SVG граната.
 * open=true — раскрытый гранат с зёрнами,
 * open=false — целый плод с короной-цветком.
 */
export function Pomegranate({
  size = 120,
  open = false,
  style,
  className,
}: PomegranateProps) {
  const id = open ? 'pom-open' : 'pom-closed';
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 160 160"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id={`${id}-skin`} cx="50%" cy="40%" r="65%">
          <stop offset="0%" stopColor="#e24d67" />
          <stop offset="55%" stopColor="#a62538" />
          <stop offset="100%" stopColor="#4a0f1a" />
        </radialGradient>
        <radialGradient id={`${id}-inner`} cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#fbeadc" />
          <stop offset="100%" stopColor="#f0c8b4" />
        </radialGradient>
        <linearGradient id={`${id}-leaf`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#6fa54a" />
          <stop offset="100%" stopColor="#2d5423" />
        </linearGradient>
        <radialGradient id={`${id}-seed`} cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#ffb3c0" />
          <stop offset="60%" stopColor="#c8334b" />
          <stop offset="100%" stopColor="#6e1523" />
        </radialGradient>
      </defs>

      {/* Stem + leaf */}
      <path
        d="M80 14 C 82 20, 78 26, 74 30 C 80 30, 88 28, 94 22 C 90 18, 85 16, 80 14 Z"
        fill={`url(#${id}-leaf)`}
        opacity="0.95"
      />
      <path
        d="M80 16 C 80 20, 80 26, 80 32"
        stroke="#2d5423"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />

      {open ? (
        <>
          {/* Half fruit body */}
          <path
            d="M30 80 C 30 48, 58 30, 80 30 C 102 30, 130 48, 130 80 C 130 120, 110 146, 80 146 C 50 146, 30 120, 30 80 Z"
            fill={`url(#${id}-skin)`}
          />
          {/* Crown of petals */}
          <g
            stroke="#4a0f1a"
            strokeWidth="1.5"
            fill="#8a1b2b"
            strokeLinejoin="round"
          >
            <path d="M80 30 L72 14 L76 30 Z" />
            <path d="M80 30 L80 10 L84 30 Z" />
            <path d="M80 30 L90 14 L86 30 Z" />
          </g>
          {/* Inner flesh */}
          <ellipse
            cx="80"
            cy="86"
            rx="38"
            ry="46"
            fill={`url(#${id}-inner)`}
            opacity="0.85"
          />
          {/* Partitions */}
          <g
            stroke="#d4a68a"
            strokeWidth="1.2"
            fill="none"
            opacity="0.7"
          >
            <path d="M80 48 L80 130" />
            <path d="M50 80 Q 80 70 110 80" />
            <path d="M55 104 Q 80 96 105 104" />
            <path d="M60 122 Q 80 116 100 122" />
          </g>
          {/* Seeds */}
          {[
            [65, 60],
            [80, 58],
            [95, 62],
            [58, 72],
            [72, 72],
            [88, 72],
            [102, 74],
            [56, 88],
            [70, 88],
            [82, 88],
            [94, 88],
            [106, 88],
            [60, 102],
            [74, 102],
            [86, 102],
            [100, 102],
            [66, 116],
            [80, 116],
            [94, 116],
            [74, 128],
            [86, 128],
          ].map(([cx, cy], i) => (
            <circle
              key={i}
              cx={cx}
              cy={cy}
              r={4.6}
              fill={`url(#${id}-seed)`}
              stroke="#4a0f1a"
              strokeWidth="0.6"
            />
          ))}
          {/* Highlights on a few seeds */}
          {[
            [64, 58],
            [79, 56],
            [57, 70],
            [71, 70],
            [55, 86],
            [69, 86],
            [59, 100],
          ].map(([cx, cy], i) => (
            <circle
              key={`h-${i}`}
              cx={cx}
              cy={cy}
              r={1.3}
              fill="#fff"
              opacity="0.75"
            />
          ))}
        </>
      ) : (
        <>
          <path
            d="M30 86 C 30 54, 58 34, 80 34 C 102 34, 130 54, 130 86 C 130 126, 110 150, 80 150 C 50 150, 30 126, 30 86 Z"
            fill={`url(#${id}-skin)`}
          />
          {/* Crown */}
          <g
            stroke="#2a0610"
            strokeWidth="1.2"
            fill="#6e1523"
            strokeLinejoin="round"
          >
            <path d="M80 34 L68 14 L72 34 Z" />
            <path d="M80 34 L74 10 L80 34 Z" />
            <path d="M80 34 L84 10 L80 34 Z" />
            <path d="M80 34 L88 10 L84 34 Z" />
            <path d="M80 34 L92 14 L88 34 Z" />
          </g>
          {/* Highlight */}
          <ellipse
            cx="58"
            cy="66"
            rx="14"
            ry="22"
            fill="#ffb3c0"
            opacity="0.25"
          />
          <ellipse
            cx="56"
            cy="62"
            rx="6"
            ry="10"
            fill="#fff"
            opacity="0.3"
          />
        </>
      )}
    </svg>
  );
}

export function PomegranateSeed({
  size = 16,
  style,
}: {
  size?: number;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      width={size}
      height={size * 1.25}
      viewBox="0 0 20 25"
      aria-hidden="true"
      style={style}
    >
      <defs>
        <radialGradient id="seed-g" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#ffc4cf" />
          <stop offset="55%" stopColor="#c8334b" />
          <stop offset="100%" stopColor="#5a0f1a" />
        </radialGradient>
      </defs>
      <ellipse cx="10" cy="13" rx="8" ry="11" fill="url(#seed-g)" />
      <ellipse cx="7" cy="9" rx="2" ry="3" fill="#fff" opacity="0.6" />
    </svg>
  );
}
