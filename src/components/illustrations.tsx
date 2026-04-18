import type { ReactElement, SVGProps } from 'react';

type Ill = (p: SVGProps<SVGSVGElement>) => ReactElement;

const base = {
  strokeWidth: 1.4,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  fill: 'none',
};

export const IllLavash: Ill = (p) => (
  <svg viewBox="0 0 120 120" {...p}>
    <defs>
      <radialGradient id="lavBg" cx="50%" cy="40%" r="70%">
        <stop offset="0%" stopColor="#3a2817" />
        <stop offset="100%" stopColor="#170d06" />
      </radialGradient>
    </defs>
    <circle cx="60" cy="60" r="58" fill="url(#lavBg)" />
    <g stroke="#d8b27a" {...base}>
      <ellipse cx="60" cy="62" rx="38" ry="24" />
      <ellipse cx="60" cy="62" rx="30" ry="18" strokeOpacity="0.6" />
      <path d="M30 60c6-4 14-6 30-6s24 2 30 6" strokeOpacity="0.5" />
      <path d="M34 66c8 4 18 6 26 6s18-2 26-6" strokeOpacity="0.5" />
      <path d="M42 55l2 14M60 52l1 18M78 55l-2 14" strokeOpacity="0.4" />
    </g>
    <g fill="#d8b27a" opacity="0.7">
      <circle cx="48" cy="58" r="1" />
      <circle cx="70" cy="62" r="1" />
      <circle cx="58" cy="68" r="1" />
      <circle cx="66" cy="54" r="0.8" />
    </g>
  </svg>
);

export const IllGata: Ill = (p) => (
  <svg viewBox="0 0 120 120" {...p}>
    <defs>
      <radialGradient id="gataBg" cx="50%" cy="40%" r="70%">
        <stop offset="0%" stopColor="#3a2817" />
        <stop offset="100%" stopColor="#170d06" />
      </radialGradient>
    </defs>
    <circle cx="60" cy="60" r="58" fill="url(#gataBg)" />
    <g stroke="#e1b87a" {...base}>
      <ellipse cx="60" cy="66" rx="30" ry="18" fill="#8a5a2a" />
      <ellipse cx="60" cy="64" rx="28" ry="16" strokeOpacity="0.6" />
      <path d="M40 60c4-3 14-5 20-5s16 2 20 5" strokeOpacity="0.5" />
      <path d="M46 58c6 2 14 3 14 3s8-1 14-3" strokeOpacity="0.5" />
      <path d="M52 54l3 12M60 52l1 14M68 54l-3 12M44 62l2 10M76 62l-2 10" strokeOpacity="0.5" />
    </g>
  </svg>
);

export const IllBasturma: Ill = (p) => (
  <svg viewBox="0 0 120 120" {...p}>
    <defs>
      <radialGradient id="bastBg" cx="50%" cy="40%" r="70%">
        <stop offset="0%" stopColor="#3a1210" />
        <stop offset="100%" stopColor="#180606" />
      </radialGradient>
    </defs>
    <circle cx="60" cy="60" r="58" fill="url(#bastBg)" />
    <g {...base}>
      <path
        d="M30 55c8-10 20-14 30-14s22 4 30 14-4 22-14 26-30 4-38 0-16-16-8-26z"
        fill="#7a1a24"
        stroke="#c9945a"
      />
      <path
        d="M36 58c8-8 18-12 24-12s18 4 24 12"
        stroke="#c9945a"
        strokeOpacity="0.7"
      />
      <path
        d="M42 66c6-2 14-3 18-3s12 1 18 3"
        stroke="#c9945a"
        strokeOpacity="0.5"
      />
      <path d="M46 50l2 4M56 46l1 4M68 48l2 4M74 54l1 3M50 70l1 3M62 72l1 3M72 68l2 3" stroke="#e6c088" strokeOpacity="0.7" />
    </g>
  </svg>
);

export const IllSujuk: Ill = (p) => (
  <svg viewBox="0 0 120 120" {...p}>
    <defs>
      <radialGradient id="sujBg" cx="50%" cy="40%" r="70%">
        <stop offset="0%" stopColor="#3a1210" />
        <stop offset="100%" stopColor="#180606" />
      </radialGradient>
    </defs>
    <circle cx="60" cy="60" r="58" fill="url(#sujBg)" />
    <g {...base}>
      <path
        d="M28 60c0-10 8-18 20-18s16 10 28 10 16-8 16-8"
        stroke="#c64a3a"
        strokeWidth="12"
        opacity="0.95"
      />
      <path
        d="M28 60c0-10 8-18 20-18s16 10 28 10 16-8 16-8"
        stroke="#8a1a20"
        strokeWidth="12"
        strokeDasharray="2 5"
        opacity="0.9"
      />
      <path
        d="M28 60c0-10 8-18 20-18s16 10 28 10"
        stroke="#e6c088"
        strokeOpacity="0.5"
        strokeWidth="1"
      />
    </g>
  </svg>
);

export const IllBeef: Ill = (p) => (
  <svg viewBox="0 0 120 120" {...p}>
    <defs>
      <radialGradient id="beefBg" cx="50%" cy="40%" r="70%">
        <stop offset="0%" stopColor="#3a1210" />
        <stop offset="100%" stopColor="#180606" />
      </radialGradient>
    </defs>
    <circle cx="60" cy="60" r="58" fill="url(#beefBg)" />
    <g {...base}>
      <path
        d="M34 50c4-8 18-14 30-12s22 10 22 22-10 20-24 22-28-4-30-16 2-16 2-16z"
        fill="#8a1a26"
        stroke="#c9945a"
      />
      <path
        d="M48 48c3 6 4 12 3 18M60 46c3 8 3 16 0 24M72 50c2 6 2 14-2 20"
        stroke="#e6c088"
        strokeOpacity="0.6"
      />
      <path d="M40 62c4-3 10-4 18-4s14 2 20 4" stroke="#c9945a" strokeOpacity="0.5" />
    </g>
  </svg>
);

export const IllChechil: Ill = (p) => (
  <svg viewBox="0 0 120 120" {...p}>
    <defs>
      <radialGradient id="chechBg" cx="50%" cy="40%" r="70%">
        <stop offset="0%" stopColor="#3a2817" />
        <stop offset="100%" stopColor="#170d06" />
      </radialGradient>
    </defs>
    <circle cx="60" cy="60" r="58" fill="url(#chechBg)" />
    <g stroke="#f0d9a5" {...base}>
      <path d="M32 50c8 4 12 10 12 16s-4 12-8 14M40 46c8 6 14 12 12 22M50 44c10 8 14 18 10 28M58 44c10 10 12 22 6 30M68 46c8 10 10 22 2 28M76 50c6 10 6 20-2 26M84 56c4 8 2 16-6 20" />
      <path d="M36 46c14 4 44 4 48 0" strokeWidth="2" fill="#f0d9a5" fillOpacity="0.2" />
      <path d="M36 76c14-4 44-4 48 0" strokeWidth="2" />
    </g>
  </svg>
);

export const IllCheese: Ill = (p) => (
  <svg viewBox="0 0 120 120" {...p}>
    <defs>
      <radialGradient id="chsBg" cx="50%" cy="40%" r="70%">
        <stop offset="0%" stopColor="#3a2817" />
        <stop offset="100%" stopColor="#170d06" />
      </radialGradient>
    </defs>
    <circle cx="60" cy="60" r="58" fill="url(#chsBg)" />
    <g {...base}>
      <path
        d="M28 76l32-30 36 8-4 26z"
        fill="#e6c07a"
        stroke="#fbe0a0"
      />
      <path d="M60 46l-2 30M92 54l-8 26" stroke="#fbe0a0" strokeOpacity="0.6" />
      <circle cx="50" cy="64" r="2" fill="#fbe0a0" />
      <circle cx="68" cy="60" r="1.6" fill="#fbe0a0" />
      <circle cx="80" cy="70" r="1.8" fill="#fbe0a0" />
      <circle cx="62" cy="72" r="1.4" fill="#fbe0a0" />
    </g>
  </svg>
);

export const IllChurchkhela: Ill = (p) => (
  <svg viewBox="0 0 120 120" {...p}>
    <defs>
      <radialGradient id="churBg" cx="50%" cy="40%" r="70%">
        <stop offset="0%" stopColor="#3a1816" />
        <stop offset="100%" stopColor="#180606" />
      </radialGradient>
    </defs>
    <circle cx="60" cy="60" r="58" fill="url(#churBg)" />
    <g {...base}>
      <path d="M60 22v12" stroke="#c9945a" />
      <g transform="translate(60 36)" fill="#6a1528" stroke="#a82a3e">
        <ellipse cx="0" cy="6" rx="5" ry="8" />
        <ellipse cx="0" cy="20" rx="6" ry="9" />
        <ellipse cx="0" cy="36" rx="6" ry="9" />
        <ellipse cx="0" cy="52" rx="5" ry="8" />
      </g>
      <path d="M60 72v10" stroke="#c9945a" />
    </g>
  </svg>
);

export const IllHoney: Ill = (p) => (
  <svg viewBox="0 0 120 120" {...p}>
    <defs>
      <radialGradient id="honBg" cx="50%" cy="40%" r="70%">
        <stop offset="0%" stopColor="#3a2817" />
        <stop offset="100%" stopColor="#170d06" />
      </radialGradient>
    </defs>
    <circle cx="60" cy="60" r="58" fill="url(#honBg)" />
    <g {...base}>
      <rect x="40" y="42" width="40" height="12" rx="2" fill="#e6c07a" stroke="#fbe0a0" />
      <path
        d="M42 54h36l-4 40H46z"
        fill="#d49a3c"
        stroke="#fbe0a0"
      />
      <rect x="48" y="62" width="24" height="14" rx="2" fill="#fbe0a0" opacity="0.4" />
      <text
        x="60"
        y="74"
        textAnchor="middle"
        fontSize="7"
        fontFamily="serif"
        fill="#2a1806"
        fontWeight="600"
      >
        Մեղր
      </text>
    </g>
  </svg>
);

export const IllJuice: Ill = (p) => (
  <svg viewBox="0 0 120 120" {...p}>
    <defs>
      <radialGradient id="jucBg" cx="50%" cy="40%" r="70%">
        <stop offset="0%" stopColor="#3a1210" />
        <stop offset="100%" stopColor="#180606" />
      </radialGradient>
    </defs>
    <circle cx="60" cy="60" r="58" fill="url(#jucBg)" />
    <g {...base}>
      <rect x="46" y="28" width="28" height="6" rx="1" fill="#c9945a" />
      <path
        d="M46 34h28v8c0 4 8 6 8 14v38c0 4-3 6-6 6H44c-3 0-6-2-6-6V56c0-8 8-10 8-14z"
        fill="#7a1524"
        stroke="#c9945a"
      />
      <rect x="46" y="62" width="28" height="30" rx="1" fill="#ecdfc6" opacity="0.92" />
      <g fill="#8a1a26" stroke="#5a0f1a">
        <circle cx="60" cy="76" r="6" />
        <path d="M60 70v-3M57 71l-2-2M63 71l2-2" strokeWidth="0.8" fill="none" />
      </g>
      <text
        x="60"
        y="90"
        textAnchor="middle"
        fontSize="4.5"
        fontFamily="serif"
        fill="#5a0f1a"
        fontWeight="700"
        letterSpacing="1"
      >
        ARM MARKET
      </text>
    </g>
  </svg>
);

export const IllTarkhun: Ill = (p) => (
  <svg viewBox="0 0 120 120" {...p}>
    <defs>
      <radialGradient id="tarBg" cx="50%" cy="40%" r="70%">
        <stop offset="0%" stopColor="#1b2a1a" />
        <stop offset="100%" stopColor="#0a1508" />
      </radialGradient>
    </defs>
    <circle cx="60" cy="60" r="58" fill="url(#tarBg)" />
    <g {...base}>
      <path
        d="M54 26h12v6c2 0 4 2 4 4v8l4 10v42c0 3-2 5-5 5H51c-3 0-5-2-5-5V54l4-10v-8c0-2 2-4 4-4z"
        fill="#2f6a33"
        stroke="#8fbf62"
      />
      <rect x="50" y="60" width="20" height="32" rx="2" fill="#8fbf62" opacity="0.25" />
      <g stroke="#c9e8a0" strokeOpacity="0.7" strokeWidth="0.8">
        <path d="M52 68c4-3 8-3 12 0" fill="none" />
        <path d="M52 74c4-3 8-3 12 0M52 80c4-3 8-3 12 0" fill="none" />
      </g>
    </g>
  </svg>
);

export const IllWater: Ill = (p) => (
  <svg viewBox="0 0 120 120" {...p}>
    <defs>
      <radialGradient id="watBg" cx="50%" cy="40%" r="70%">
        <stop offset="0%" stopColor="#0e2030" />
        <stop offset="100%" stopColor="#050c14" />
      </radialGradient>
    </defs>
    <circle cx="60" cy="60" r="58" fill="url(#watBg)" />
    <g {...base}>
      <path
        d="M52 26h16v8c0 2 2 4 2 6v4l3 8v40c0 3-2 5-5 5H52c-3 0-5-2-5-5V52l3-8v-4c0-2 2-4 2-6z"
        fill="#2a5b8f"
        stroke="#9dc6ea"
      />
      <rect x="50" y="58" width="20" height="34" rx="2" fill="#9dc6ea" opacity="0.3" />
      <path d="M53 66h14M53 72h14M53 78h14" stroke="#9dc6ea" strokeOpacity="0.5" fill="none" />
    </g>
  </svg>
);

export const IllWine: Ill = (p) => (
  <svg viewBox="0 0 120 120" {...p}>
    <defs>
      <radialGradient id="wineBg" cx="50%" cy="40%" r="70%">
        <stop offset="0%" stopColor="#2b0a12" />
        <stop offset="100%" stopColor="#0f0306" />
      </radialGradient>
    </defs>
    <circle cx="60" cy="60" r="58" fill="url(#wineBg)" />
    <g {...base}>
      <rect x="55" y="18" width="10" height="18" rx="1" fill="#3a1618" stroke="#c9945a" />
      <path
        d="M50 36h20v8c0 3 3 5 3 10v46c0 3-2 5-5 5H52c-3 0-5-2-5-5V54c0-5 3-7 3-10z"
        fill="#1a0508"
        stroke="#c9945a"
      />
      <rect
        x="50"
        y="58"
        width="20"
        height="32"
        rx="1"
        fill="#ecdfc6"
        stroke="#c9945a"
      />
      <text
        x="60"
        y="72"
        textAnchor="middle"
        fontSize="5"
        fontFamily="serif"
        fill="#5a0f1a"
        fontWeight="700"
        letterSpacing="2"
      >
        ARENI
      </text>
      <text
        x="60"
        y="82"
        textAnchor="middle"
        fontSize="3.5"
        fontFamily="serif"
        fill="#5a0f1a"
      >
        RESERVE
      </text>
      <path d="M54 88h12" stroke="#8a1a26" />
    </g>
  </svg>
);

export const IllBrandy: Ill = (p) => (
  <svg viewBox="0 0 120 120" {...p}>
    <defs>
      <radialGradient id="brBg" cx="50%" cy="40%" r="70%">
        <stop offset="0%" stopColor="#2a1a0a" />
        <stop offset="100%" stopColor="#0f0704" />
      </radialGradient>
    </defs>
    <circle cx="60" cy="60" r="58" fill="url(#brBg)" />
    <g {...base}>
      <rect x="54" y="16" width="12" height="8" fill="#3a2618" stroke="#c9945a" />
      <path
        d="M48 24h24l2 18v10c0 3 3 5 3 10v40c0 3-2 5-5 5H48c-3 0-5-2-5-5V62c0-5 3-7 3-10V42z"
        fill="#241404"
        stroke="#c9945a"
      />
      <rect x="50" y="60" width="20" height="30" rx="1" fill="#c9945a" opacity="0.25" />
      <g fill="#fbe0a0">
        <path d="M60 68l1.5 4h4l-3 2.5 1 4L60 76l-3.5 2.5 1-4-3-2.5h4z" />
      </g>
      <text
        x="60"
        y="86"
        textAnchor="middle"
        fontSize="5"
        fontFamily="serif"
        fill="#fbe0a0"
        letterSpacing="2"
      >
        ARARAT
      </text>
    </g>
  </svg>
);

export const IllTutovka: Ill = (p) => (
  <svg viewBox="0 0 120 120" {...p}>
    <defs>
      <radialGradient id="tutBg" cx="50%" cy="40%" r="70%">
        <stop offset="0%" stopColor="#2a0a12" />
        <stop offset="100%" stopColor="#0f0306" />
      </radialGradient>
    </defs>
    <circle cx="60" cy="60" r="58" fill="url(#tutBg)" />
    <g {...base}>
      <path
        d="M56 20c-2 4-4 8-4 12s2 4 2 10H46c-3 0-6 2-6 6v46c0 3 2 5 5 5h30c3 0 5-2 5-5V48c0-4-3-6-6-6H66c0-6 2-6 2-10s-2-8-4-12z"
        fill="#18060a"
        stroke="#c9945a"
      />
      <rect x="48" y="58" width="24" height="28" rx="1" fill="#ecdfc6" />
      <text
        x="60"
        y="75"
        textAnchor="middle"
        fontSize="5"
        fontFamily="serif"
        fill="#5a0f1a"
        fontWeight="700"
      >
        Թթի օղի
      </text>
      <text
        x="60"
        y="83"
        textAnchor="middle"
        fontSize="3.2"
        fontFamily="serif"
        fill="#5a0f1a"
      >
        HANDMADE
      </text>
    </g>
  </svg>
);

export const IllNarsharab: Ill = (p) => (
  <svg viewBox="0 0 120 120" {...p}>
    <defs>
      <radialGradient id="narBg" cx="50%" cy="40%" r="70%">
        <stop offset="0%" stopColor="#2a0a12" />
        <stop offset="100%" stopColor="#0f0306" />
      </radialGradient>
    </defs>
    <circle cx="60" cy="60" r="58" fill="url(#narBg)" />
    <g {...base}>
      <rect x="52" y="22" width="16" height="6" fill="#c9945a" />
      <path
        d="M46 28h28l2 12v8c0 4 3 8 3 14v28c0 3-2 5-5 5H44c-3 0-5-2-5-5V62c0-6 3-10 3-14v-8z"
        fill="#3a0a14"
        stroke="#c9945a"
      />
      <rect x="48" y="54" width="24" height="28" rx="1" fill="#ecdfc6" />
      <g fill="#8a1a26">
        <circle cx="60" cy="66" r="5" />
        <path d="M60 61v-2" stroke="#c9945a" strokeWidth="0.8" fill="none" />
      </g>
      <text
        x="60"
        y="78"
        textAnchor="middle"
        fontSize="3.6"
        fontFamily="serif"
        fill="#5a0f1a"
        fontWeight="700"
        letterSpacing="1"
      >
        НАРШАРАБ
      </text>
    </g>
  </svg>
);

export const IllJam: Ill = (p) => (
  <svg viewBox="0 0 120 120" {...p}>
    <defs>
      <radialGradient id="jamBg" cx="50%" cy="40%" r="70%">
        <stop offset="0%" stopColor="#2a1010" />
        <stop offset="100%" stopColor="#0f0606" />
      </radialGradient>
    </defs>
    <circle cx="60" cy="60" r="58" fill="url(#jamBg)" />
    <g {...base}>
      <path d="M44 30h32v8H44z" fill="#c9945a" />
      <path d="M46 30c2-6 26-6 28 0" fill="#c9945a" stroke="#fbe0a0" />
      <path
        d="M44 38h32v50c0 3-2 5-5 5H49c-3 0-5-2-5-5z"
        fill="#8a1a26"
        stroke="#c9945a"
      />
      <g fill="#5a0f1a" opacity="0.7">
        <circle cx="52" cy="56" r="3" />
        <circle cx="66" cy="62" r="3" />
        <circle cx="58" cy="72" r="3" />
        <circle cx="70" cy="78" r="2.5" />
      </g>
      <rect x="48" y="66" width="24" height="10" fill="#ecdfc6" opacity="0.6" />
    </g>
  </svg>
);

export const IllApricot: Ill = (p) => (
  <svg viewBox="0 0 120 120" {...p}>
    <defs>
      <radialGradient id="aprBg" cx="50%" cy="40%" r="70%">
        <stop offset="0%" stopColor="#3a2410" />
        <stop offset="100%" stopColor="#180c06" />
      </radialGradient>
    </defs>
    <circle cx="60" cy="60" r="58" fill="url(#aprBg)" />
    <g {...base}>
      <g fill="#d87a2a" stroke="#fbe0a0">
        <circle cx="44" cy="54" r="12" />
        <circle cx="66" cy="48" r="11" />
        <circle cx="76" cy="66" r="12" />
        <circle cx="54" cy="72" r="11" />
      </g>
      <g stroke="#fbe0a0" strokeOpacity="0.5" fill="none">
        <path d="M44 44v20M66 38v20M76 56v20M54 62v20" />
      </g>
    </g>
  </svg>
);

export const IllSpicePowder: Ill = (p) => (
  <svg viewBox="0 0 120 120" {...p}>
    <defs>
      <radialGradient id="spBg" cx="50%" cy="40%" r="70%">
        <stop offset="0%" stopColor="#2a1208" />
        <stop offset="100%" stopColor="#100503" />
      </radialGradient>
    </defs>
    <circle cx="60" cy="60" r="58" fill="url(#spBg)" />
    <g {...base}>
      <path
        d="M30 72c0-6 6-8 30-8s30 2 30 8-6 18-30 18-30-12-30-18z"
        fill="#8a2018"
        stroke="#c9945a"
      />
      <ellipse cx="60" cy="66" rx="26" ry="6" fill="#c04a2a" stroke="#c9945a" />
      <ellipse cx="60" cy="64" rx="22" ry="3" fill="#e66c3a" opacity="0.7" />
      <g fill="#e6c088" opacity="0.7">
        <circle cx="46" cy="62" r="0.8" />
        <circle cx="56" cy="60" r="0.7" />
        <circle cx="64" cy="62" r="0.8" />
        <circle cx="72" cy="60" r="0.9" />
      </g>
    </g>
  </svg>
);

export const IllHerbs: Ill = (p) => (
  <svg viewBox="0 0 120 120" {...p}>
    <defs>
      <radialGradient id="hrbBg" cx="50%" cy="40%" r="70%">
        <stop offset="0%" stopColor="#1b2a1a" />
        <stop offset="100%" stopColor="#0a1508" />
      </radialGradient>
    </defs>
    <circle cx="60" cy="60" r="58" fill="url(#hrbBg)" />
    <g stroke="#8fbf62" {...base}>
      <path d="M60 92V36" />
      <path d="M60 50c-6-4-12-4-16 0c4 2 10 4 16 2M60 58c-8-4-16-4-20 2c6 2 14 4 20 2M60 66c-10-4-18-2-22 4c8 2 16 4 22 2" fill="#2f6a33" />
      <path d="M60 50c6-4 12-4 16 0c-4 2-10 4-16 2M60 58c8-4 16-4 20 2c-6 2-14 4-20 2M60 66c10-4 18-2 22 4c-8 2-16 4-22 2" fill="#2f6a33" />
      <circle cx="60" cy="36" r="4" fill="#8fbf62" />
    </g>
  </svg>
);

// eslint-disable-next-line react-refresh/only-export-components
export const illustrationMap: Record<string, Ill> = {
  'lavash-classic': IllLavash,
  'gata': IllGata,
  'matnakash': IllLavash,
  'basturma': IllBasturma,
  'sujuk': IllSujuk,
  'khashlama': IllBeef,
  'chechil': IllChechil,
  'lori': IllCheese,
  'chanakh': IllCheese,
  'churchkhela': IllChurchkhela,
  'sudjukh-sweet': IllChurchkhela,
  'honey': IllHoney,
  'pomegranate-juice': IllJuice,
  'tarkhun': IllTarkhun,
  'jermuk': IllWater,
  'areni': IllWine,
  'ararat-5': IllBrandy,
  'tutovka': IllTutovka,
  'narsharab': IllNarsharab,
  'jam-cornel': IllJam,
  'jam-walnut': IllJam,
  'apricot': IllApricot,
  'sumakh': IllSpicePowder,
  'chaman': IllSpicePowder,
  'tarragon-dry': IllHerbs,
};

const categoryIconBase = {
  width: 28,
  height: 28,
  viewBox: '0 0 28 28',
  fill: 'none' as const,
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

export function CatIcon({
  id,
  ...rest
}: { id: string } & SVGProps<SVGSVGElement>) {
  switch (id) {
    case 'bread':
      return (
        <svg {...categoryIconBase} {...rest}>
          <ellipse cx="14" cy="15" rx="10" ry="6" />
          <path d="M7 15c3-3 11-3 14 0" />
          <path d="M10 12v6M14 11v8M18 12v6" strokeOpacity="0.6" />
        </svg>
      );
    case 'meat':
      return (
        <svg {...categoryIconBase} {...rest}>
          <path d="M6 14c1-4 5-7 10-7s7 3 7 7-3 8-8 8-10-4-9-8z" />
          <path d="M10 12c2 3 3 8 2 10" strokeOpacity="0.6" />
          <path d="M15 11c2 4 3 8 1 11" strokeOpacity="0.6" />
        </svg>
      );
    case 'cheese':
      return (
        <svg {...categoryIconBase} {...rest}>
          <path d="M4 20L16 8l8 2-2 10z" />
          <circle cx="11" cy="15" r="1" />
          <circle cx="17" cy="14" r="0.8" />
          <circle cx="19" cy="18" r="1" />
        </svg>
      );
    case 'sweets':
      return (
        <svg {...categoryIconBase} {...rest}>
          <path d="M14 5v3" />
          <ellipse cx="14" cy="10" rx="3" ry="4" />
          <ellipse cx="14" cy="17" rx="3" ry="4" />
          <ellipse cx="14" cy="23" rx="2.5" ry="3" />
        </svg>
      );
    case 'drinks':
      return (
        <svg {...categoryIconBase} {...rest}>
          <path d="M9 5h10v3c0 1 1 2 1 3v12c0 1-1 2-2 2H10c-1 0-2-1-2-2V11c0-1 1-2 1-3z" />
          <rect x="9" y="13" width="10" height="8" rx="0.5" strokeOpacity="0.6" />
        </svg>
      );
    case 'wine':
      return (
        <svg {...categoryIconBase} {...rest}>
          <rect x="12" y="4" width="4" height="5" />
          <path d="M10 9h8v2c0 1 1 2 1 3v9c0 1-1 2-2 2h-6c-1 0-2-1-2-2v-9c0-1 1-2 1-3z" />
          <path d="M11 14h6" strokeOpacity="0.5" />
        </svg>
      );
    case 'preserves':
      return (
        <svg {...categoryIconBase} {...rest}>
          <path d="M8 7h12v2H8z" />
          <path d="M8 9h12v13c0 1-1 2-2 2h-8c-1 0-2-1-2-2z" />
          <path d="M9 7c.5-2 9.5-2 10 0" />
          <path d="M10 15h8" strokeOpacity="0.5" />
        </svg>
      );
    case 'spices':
      return (
        <svg {...categoryIconBase} {...rest}>
          <path d="M14 4v20" />
          <path d="M14 10c-3-1-5-1-7 1c2 1 5 1 7 0" />
          <path d="M14 10c3-1 5-1 7 1c-2 1-5 1-7 0" />
          <path d="M14 16c-3-1-5-1-7 1c2 1 5 1 7 0" />
          <path d="M14 16c3-1 5-1 7 1c-2 1-5 1-7 0" />
        </svg>
      );
    default:
      return (
        <svg {...categoryIconBase} {...rest}>
          <path d="M14 4l3 7h7l-6 4 2 7-6-4-6 4 2-7-6-4h7z" />
        </svg>
      );
  }
}

export function KhachkarPattern({
  className,
  opacity = 0.18,
}: {
  className?: string;
  opacity?: number;
}) {
  return (
    <svg
      className={className}
      aria-hidden
      width="100%"
      height="100%"
      style={{ opacity }}
    >
      <defs>
        <pattern
          id="khachkar"
          x="0"
          y="0"
          width="120"
          height="120"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(0)"
        >
          <g
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Interlocking eternity knot — simplified khachkar motif */}
            <path d="M60 8c-14 0-26 12-26 26s12 26 26 26 26-12 26-26S74 8 60 8z" />
            <path d="M60 20c-8 0-14 6-14 14s6 14 14 14 14-6 14-14-6-14-14-14z" />
            <path d="M46 34c0-8 6-14 14-14" strokeWidth="1.2" />
            <path d="M74 34c0 8-6 14-14 14" strokeWidth="1.2" />
            <path d="M34 34h52M60 8v52" strokeOpacity="0.5" />
            <circle cx="60" cy="34" r="3" />

            {/* Corner motifs — cross + flourish */}
            <path d="M6 6h8M10 2v8" strokeOpacity="0.6" />
            <path d="M106 6h8M110 2v8" strokeOpacity="0.6" />
            <path d="M6 106h8M10 102v8" strokeOpacity="0.6" />
            <path d="M106 106h8M110 102v8" strokeOpacity="0.6" />

            {/* Diagonal vine */}
            <path
              d="M0 60c10-4 20-4 30 0s20 4 30 0 20-4 30 0 20 4 30 0"
              strokeOpacity="0.35"
              strokeDasharray="2 4"
            />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#khachkar)" />
    </svg>
  );
}

export function ArmenianBorder({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 24"
      className={className}
      aria-hidden
      preserveAspectRatio="none"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M0 12h400" strokeOpacity="0.25" />
        {Array.from({ length: 16 }).map((_, i) => {
          const x = i * 25 + 12.5;
          return (
            <g key={i} transform={`translate(${x} 12)`}>
              <circle r="3" fill="currentColor" fillOpacity="0.25" />
              <path d="M-6 0a6 6 0 0 0 12 0M-6 0a6 6 0 0 1 12 0" strokeOpacity="0.5" />
              <path d="M-10 0L-6 0M6 0L10 0" strokeOpacity="0.5" />
              <path d="M0 -6v-3M0 6v3" strokeOpacity="0.3" />
            </g>
          );
        })}
      </g>
    </svg>
  );
}
