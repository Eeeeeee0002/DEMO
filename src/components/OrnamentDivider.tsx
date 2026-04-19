import './OrnamentDivider.css';

interface OrnamentDividerProps {
  /** Optional label shown in the middle of the divider */
  label?: string;
}

/**
 * Armenian ornamental divider — a thin symmetric line with a central
 * medallion and interlace curls. Stroke is drawn on scroll reveal via
 * stroke-dashoffset animation.
 */
export function OrnamentDivider({ label }: OrnamentDividerProps) {
  return (
    <div
      className="orn-div"
      data-reveal
      aria-hidden={!label}
    >
      <svg
        className="orn-div__svg"
        viewBox="0 0 600 60"
        preserveAspectRatio="none"
        aria-hidden
      >
        <g
          fill="none"
          stroke="var(--brass)"
          strokeWidth="1.2"
          strokeLinecap="round"
        >
          {/* Left half */}
          <path
            className="orn-path orn-path--l"
            d="M0 30 L 140 30
               C 160 30, 170 18, 190 18
               C 210 18, 215 30, 235 30
               C 255 30, 260 18, 275 22
               C 286 26, 290 30, 300 30"
          />
          {/* Right half (mirror) */}
          <path
            className="orn-path orn-path--r"
            d="M600 30 L 460 30
               C 440 30, 430 18, 410 18
               C 390 18, 385 30, 365 30
               C 345 30, 340 18, 325 22
               C 314 26, 310 30, 300 30"
          />
          {/* Center medallion */}
          <g className="orn-medal" transform="translate(300 30)">
            <circle r="9" />
            <circle r="5" />
            <path d="M0 -9 L0 9 M-9 0 L9 0 M-6.4 -6.4 L6.4 6.4 M-6.4 6.4 L6.4 -6.4" />
          </g>
          {/* Small dot accents */}
          <circle className="orn-dot" cx="140" cy="30" r="1.8" fill="var(--brass)" />
          <circle className="orn-dot" cx="460" cy="30" r="1.8" fill="var(--brass)" />
        </g>
      </svg>
      {label && <span className="orn-div__label">{label}</span>}
    </div>
  );
}
