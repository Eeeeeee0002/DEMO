import './Logo.css';

interface LogoProps {
  size?: number;
  variant?: 'mark' | 'stacked';
  className?: string;
  animated?: boolean;
}

/**
 * Живое фото граната в мягком круглом кадре с тонкой золотой обводкой.
 * Для маленьких размеров (хедер/футер) используется более тесный кроп,
 * для крупных (hero) — более просторный с природным боке.
 */
export function Logo({
  size = 44,
  variant = 'mark',
  className,
  animated = true,
}: LogoProps) {
  // Мелкий логотип — плотно обрезанная квадратная версия; крупный — просторная
  const src = size > 90 ? '/img/pomegranate.jpg' : '/img/pomegranate-small.jpg';
  return (
    <span
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: variant === 'stacked' ? 12 : 10,
      }}
    >
      <span
        className={animated ? 'armlogo-photo armlogo-photo--animated' : 'armlogo-photo'}
        style={{ width: size, height: size }}
        aria-hidden
      >
        <img src={src} alt="Гранат" draggable={false} />
        <span className="armlogo-photo__ring" />
        <span className="armlogo-photo__gloss" />
      </span>

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
