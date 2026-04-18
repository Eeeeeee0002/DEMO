import { KhachkarPattern } from './illustrations';
import './Hero.css';

export function Hero() {
  return (
    <section className="hero" id="top">
      {/* Full-bleed khachkar stone pattern overlay */}
      <div className="hero__pattern" aria-hidden>
        <KhachkarPattern opacity={0.11} />
      </div>
      <div className="hero__vignette" aria-hidden />

      {/* Vertical Armenian inscription — left rail */}
      <div className="hero__rail" aria-hidden>
        <span>Արարատի փեշերից</span>
        <span className="hero__rail-dot" />
        <span>From the slopes of Ararat</span>
      </div>

      <div className="container hero__grid">
        <div className="hero__content">
          <span className="eyebrow">Est. 2024 · Yerevan → Moscow</span>

          <h1 className="hero__title">
            Вкус Армении,
            <br />
            <span className="accent-serif">высеченный в&nbsp;камне</span>
          </h1>

          <p className="hero__lead">
            Ремесленные продукты из армянских сёл и виноделен. Мы привозим то,
            что веками рождалось у тандыра, в винных кюрях и горных пасеках —
            бастурму, вина Арени, лаваш из огня, гранатовый соус наршараб.
          </p>

          <div className="hero__actions">
            <a href="#catalog" className="btn btn-primary">
              Открыть каталог
              <span aria-hidden>↘</span>
            </a>
            <a href="#story" className="btn btn-ghost">
              Наша история
            </a>
          </div>

          <div className="hero__meta">
            <div className="hero__meta-col">
              <span className="hero__meta-num">27</span>
              <span className="hero__meta-label">
                позиций от<br />ремесленников
              </span>
            </div>
            <div className="hero__meta-col">
              <span className="hero__meta-num">90<em>мин</em></span>
              <span className="hero__meta-label">
                экспресс-доставка<br />по Москве
              </span>
            </div>
            <div className="hero__meta-col">
              <span className="hero__meta-num">
                4.9<em>★</em>
              </span>
              <span className="hero__meta-label">
                оценка<br />покупателей
              </span>
            </div>
          </div>
        </div>

        {/* Right: illuminated manuscript-style composition */}
        <div className="hero__visual" aria-hidden>
          <div className="hero__frame">
            <svg
              viewBox="0 0 500 620"
              className="hero__scene"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <radialGradient id="skyBg" cx="50%" cy="25%" r="85%">
                  <stop offset="0%" stopColor="#4a1822" />
                  <stop offset="45%" stopColor="#1a0a0e" />
                  <stop offset="100%" stopColor="#0a0604" />
                </radialGradient>
                <linearGradient id="mtn" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#2a1b12" />
                  <stop offset="100%" stopColor="#120a06" />
                </linearGradient>
                <radialGradient id="pomRed" cx="40%" cy="35%" r="65%">
                  <stop offset="0%" stopColor="#e8546a" />
                  <stop offset="55%" stopColor="#a7202e" />
                  <stop offset="100%" stopColor="#4a0d16" />
                </radialGradient>
                <radialGradient id="pomRed2" cx="40%" cy="35%" r="65%">
                  <stop offset="0%" stopColor="#d13548" />
                  <stop offset="60%" stopColor="#7a1520" />
                  <stop offset="100%" stopColor="#2a0608" />
                </radialGradient>
                <pattern
                  id="stoneTexture"
                  x="0"
                  y="0"
                  width="3"
                  height="3"
                  patternUnits="userSpaceOnUse"
                >
                  <rect width="3" height="3" fill="transparent" />
                  <circle cx="1" cy="1" r="0.3" fill="#b58a52" opacity="0.08" />
                </pattern>
              </defs>

              {/* Sky / backdrop */}
              <rect width="500" height="620" fill="url(#skyBg)" />
              <rect width="500" height="620" fill="url(#stoneTexture)" />

              {/* Mount Ararat silhouette — two peaks */}
              <path
                d="M0 440L50 400L110 360L160 310L210 350L250 300L290 320L340 280L400 350L450 380L500 410L500 620L0 620Z"
                fill="url(#mtn)"
              />
              <path
                d="M210 350L250 300L290 320L280 340L265 330L245 345L225 340Z"
                fill="#e6c89a"
                opacity="0.6"
              />
              <path
                d="M400 350L450 380L440 395L425 385L410 395Z"
                fill="#e6c89a"
                opacity="0.4"
              />

              {/* Khachkar arch — stone frame / cathedral silhouette */}
              <g
                stroke="#b58a52"
                strokeWidth="1.2"
                fill="none"
                opacity="0.65"
              >
                <path d="M250 100L170 180L170 440L330 440L330 180L250 100Z" />
                <path d="M250 115L190 185L190 420L310 420L310 185L250 115Z" />
                <path
                  d="M210 185Q250 140 290 185"
                  fill="none"
                  strokeWidth="1"
                />
                <path
                  d="M220 200Q250 165 280 200"
                  fill="none"
                  strokeWidth="1"
                />
                {/* Interlocking knot inside arch */}
                <circle cx="250" cy="260" r="42" />
                <circle cx="250" cy="260" r="24" />
                <path d="M208 260h84M250 218v84" />
                <path
                  d="M222 232L278 288M278 232L222 288"
                  strokeOpacity="0.5"
                />
              </g>

              {/* Large pomegranate — center lower */}
              <g transform="translate(250 420)">
                <ellipse
                  cx="0"
                  cy="20"
                  rx="70"
                  ry="18"
                  fill="#000"
                  opacity="0.55"
                />
                <g transform="translate(0 -10)">
                  <path
                    d="M-8 -70c-4-6-6-10-6-14s4-6 8-6 6 2 8 4 4 4 8 4 6-4 10-4 8 4 8 8-4 8-8 12"
                    fill="#5a3318"
                    stroke="#b58a52"
                    strokeWidth="1"
                  />
                  <path
                    d="M0 -80c-6 4-8 10-8 14s2 8 2 12-4 6-4 6"
                    fill="none"
                    stroke="#7a4820"
                  />
                  <ellipse cx="0" cy="0" rx="70" ry="72" fill="url(#pomRed)" />
                  <path
                    d="M-60 -10c20-14 40-16 60-16M-55 20c22 10 44 10 60 4"
                    fill="none"
                    stroke="#7a1520"
                    strokeWidth="1"
                    opacity="0.6"
                  />
                  <ellipse
                    cx="-20"
                    cy="-20"
                    rx="30"
                    ry="14"
                    fill="#e8546a"
                    opacity="0.45"
                  />
                  <circle cx="-28" cy="-24" r="6" fill="#fff" opacity="0.35" />
                  {/* Opened crack with seeds */}
                  <path
                    d="M20 -40Q30 -10 45 10Q55 25 45 40Q30 55 20 50"
                    fill="#2a0608"
                    stroke="#b58a52"
                    strokeWidth="0.8"
                    opacity="0.9"
                  />
                  <g fill="#d13548" stroke="#fff" strokeOpacity="0.3">
                    <circle cx="26" cy="-20" r="3.5" />
                    <circle cx="34" cy="-8" r="3.5" />
                    <circle cx="38" cy="6" r="3.5" />
                    <circle cx="42" cy="20" r="3.5" />
                    <circle cx="34" cy="30" r="3.5" />
                    <circle cx="26" cy="38" r="3.5" />
                    <circle cx="28" cy="6" r="3.2" />
                    <circle cx="32" cy="-4" r="2.8" />
                  </g>
                </g>
              </g>

              {/* Floating second pomegranate */}
              <g transform="translate(385 195) rotate(16)">
                <ellipse cx="0" cy="0" rx="42" ry="44" fill="url(#pomRed2)" />
                <path
                  d="M-4 -44c-2-4-4-6-4-8s2-4 4-4 6 2 8 4 4 2 6-2"
                  fill="#5a3318"
                  stroke="#b58a52"
                />
                <ellipse
                  cx="-10"
                  cy="-12"
                  rx="16"
                  ry="8"
                  fill="#e8546a"
                  opacity="0.35"
                />
              </g>

              {/* Grape cluster — top left */}
              <g transform="translate(110 230)">
                <path
                  d="M-5 -30c-6 0-10 4-8 8s8 6 12 4"
                  fill="none"
                  stroke="#2f6a33"
                  strokeWidth="1.5"
                />
                <g fill="#4a0d16" stroke="#7a1520" strokeWidth="0.6">
                  <circle cx="0" cy="-10" r="7" />
                  <circle cx="10" cy="-6" r="7" />
                  <circle cx="-10" cy="-4" r="7" />
                  <circle cx="5" cy="4" r="7" />
                  <circle cx="-5" cy="6" r="7" />
                  <circle cx="14" cy="8" r="7" />
                  <circle cx="-14" cy="10" r="7" />
                  <circle cx="0" cy="14" r="7" />
                  <circle cx="9" cy="20" r="7" />
                  <circle cx="-9" cy="22" r="7" />
                  <circle cx="4" cy="30" r="7" />
                  <circle cx="-4" cy="32" r="7" />
                </g>
                <g fill="#8a1a26" opacity="0.5">
                  <circle cx="0" cy="-10" r="3" />
                  <circle cx="10" cy="-6" r="3" />
                  <circle cx="-10" cy="-4" r="3" />
                  <circle cx="5" cy="4" r="3" />
                  <circle cx="14" cy="8" r="3" />
                  <circle cx="0" cy="14" r="3" />
                </g>
                <path
                  d="M-20 -40Q-10 -60 10 -55Q25 -50 40 -65"
                  fill="none"
                  stroke="#4a7a3a"
                  strokeWidth="1.2"
                />
                <path
                  d="M30 -50c-6-4-10-2-12 2s0 8 4 8s8-4 8-10z"
                  fill="#2f6a33"
                  stroke="#8fbf62"
                  strokeWidth="0.8"
                />
              </g>

              {/* Wine bottle — right */}
              <g transform="translate(420 340)">
                <rect
                  x="-7"
                  y="-110"
                  width="14"
                  height="22"
                  fill="#2a0608"
                  stroke="#b58a52"
                  strokeWidth="0.6"
                />
                <path
                  d="M-12 -88h24v14c0 4 4 6 4 14v76c0 6-4 10-10 10h-12c-6 0-10-4-10-10v-76c0-8 4-10 4-14z"
                  fill="#0a0302"
                  stroke="#b58a52"
                  strokeWidth="0.8"
                />
                <rect
                  x="-12"
                  y="-50"
                  width="24"
                  height="36"
                  fill="#ece1c7"
                  opacity="0.95"
                />
                <text
                  x="0"
                  y="-34"
                  textAnchor="middle"
                  fontSize="6"
                  fontFamily="Cormorant Garamond, serif"
                  fill="#4a0d16"
                  fontWeight="700"
                  letterSpacing="3"
                >
                  ARENI
                </text>
                <text
                  x="0"
                  y="-26"
                  textAnchor="middle"
                  fontSize="4"
                  fontFamily="Cormorant Garamond, serif"
                  fill="#4a0d16"
                  letterSpacing="2"
                >
                  RESERVE · 2021
                </text>
                <path d="M-9 -20h18" stroke="#7a1520" strokeWidth="0.6" />
                <text
                  x="0"
                  y="-16"
                  textAnchor="middle"
                  fontSize="3.2"
                  fontFamily="Cormorant Garamond, serif"
                  fill="#4a0d16"
                  letterSpacing="1"
                >
                  VAYOTS DZOR · ARM
                </text>
              </g>

              {/* Lavash bread — bottom left */}
              <g transform="translate(95 460) rotate(-12)">
                <ellipse
                  cx="0"
                  cy="8"
                  rx="70"
                  ry="10"
                  fill="#000"
                  opacity="0.5"
                />
                <ellipse
                  cx="0"
                  cy="0"
                  rx="70"
                  ry="18"
                  fill="#d8b27a"
                  stroke="#7a4820"
                />
                <ellipse
                  cx="0"
                  cy="-2"
                  rx="60"
                  ry="13"
                  fill="none"
                  stroke="#a88358"
                  strokeOpacity="0.7"
                  strokeWidth="0.7"
                />
                <g fill="#7a4820" opacity="0.5">
                  <circle cx="-30" cy="-4" r="1" />
                  <circle cx="-15" cy="2" r="0.8" />
                  <circle cx="10" cy="-5" r="1" />
                  <circle cx="30" cy="3" r="0.9" />
                  <circle cx="45" cy="-2" r="0.8" />
                </g>
                <path
                  d="M-50 -6l2 12M-20 -8l1 14M0 -10l1 16M25 -8l1 14M50 -6l2 12"
                  stroke="#7a4820"
                  strokeWidth="0.5"
                  opacity="0.5"
                  fill="none"
                />
              </g>

              {/* Decorative stars / scintilla */}
              <g fill="#d9b275" opacity="0.7">
                <circle cx="60" cy="80" r="1.5" />
                <circle cx="120" cy="120" r="1" />
                <circle cx="440" cy="90" r="1.2" />
                <circle cx="380" cy="130" r="1" />
                <circle cx="70" cy="380" r="1.2" />
                <circle cx="460" cy="500" r="1.5" />
              </g>

              {/* Brass vine flourishes around frame */}
              <g
                fill="none"
                stroke="#b58a52"
                strokeWidth="0.8"
                opacity="0.5"
              >
                <path d="M20 20Q40 30 20 50Q10 40 20 20Z" />
                <path d="M480 20Q460 30 480 50Q490 40 480 20Z" />
                <path d="M20 600Q40 590 20 570Q10 580 20 600Z" />
                <path d="M480 600Q460 590 480 570Q490 580 480 600Z" />
              </g>
            </svg>

            {/* Ornate corner fleurons */}
            <span className="hero__corner hero__corner--tl" />
            <span className="hero__corner hero__corner--tr" />
            <span className="hero__corner hero__corner--bl" />
            <span className="hero__corner hero__corner--br" />

            {/* Stamp */}
            <div className="hero__stamp">
              <svg viewBox="0 0 100 100" aria-hidden>
                <defs>
                  <path
                    id="stampCircle"
                    d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
                  />
                </defs>
                <circle
                  cx="50"
                  cy="50"
                  r="44"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="36"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.8"
                />
                <text fontSize="8" letterSpacing="2" fill="currentColor">
                  <textPath href="#stampCircle" startOffset="0">
                    ARM MARKET · ԵՐԵՎԱՆ · EST 2024 ·
                  </textPath>
                </text>
                <text
                  x="50"
                  y="48"
                  textAnchor="middle"
                  fontSize="10"
                  fill="currentColor"
                  fontFamily="Cormorant Garamond, serif"
                  fontStyle="italic"
                  fontWeight="700"
                >
                  Arm
                </text>
                <text
                  x="50"
                  y="62"
                  textAnchor="middle"
                  fontSize="8"
                  fill="currentColor"
                  fontFamily="Cormorant Garamond, serif"
                  letterSpacing="3"
                >
                  MARKET
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom brass line with Armenian glyphs */}
      <div className="hero__glyphs" aria-hidden>
        <span>Հաց</span>
        <span className="sep">·</span>
        <span>Գինի</span>
        <span className="sep">·</span>
        <span>Միս</span>
        <span className="sep">·</span>
        <span>Պանիր</span>
        <span className="sep">·</span>
        <span>Մեղր</span>
        <span className="sep">·</span>
        <span>Քաղցրավենիք</span>
      </div>
    </section>
  );
}
