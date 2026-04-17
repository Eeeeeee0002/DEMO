import { Pomegranate, PomegranateSeed } from './Pomegranate';
import { Ornament } from './Ornament';
import './Hero.css';

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__ornaments" aria-hidden>
        <Pomegranate
          size={220}
          open
          className="hero__pom hero__pom--1"
          style={{ '--r': '-8deg' } as React.CSSProperties}
        />
        <Pomegranate
          size={170}
          className="hero__pom hero__pom--2"
          style={{ '--r': '14deg' } as React.CSSProperties}
        />
        <Pomegranate
          size={130}
          open
          className="hero__pom hero__pom--3"
          style={{ '--r': '22deg' } as React.CSSProperties}
        />
        <span className="hero__seed hero__seed--a">
          <PomegranateSeed size={14} />
        </span>
        <span className="hero__seed hero__seed--b">
          <PomegranateSeed size={18} />
        </span>
        <span className="hero__seed hero__seed--c">
          <PomegranateSeed size={12} />
        </span>
        <span className="hero__seed hero__seed--d">
          <PomegranateSeed size={16} />
        </span>
      </div>

      <div className="container hero__grid">
        <div className="hero__content">
          <span className="eyebrow">Arm Market · Երևանից ձեզ</span>
          <h1>
            Вкус <em>Армении</em>
            <br />
            у вашего порога
          </h1>
          <div className="divider" aria-hidden>
            <Ornament width={160} color="var(--gold)" />
          </div>
          <p className="hero__lead">
            Настоящий лаваш из тандыра, выдержанная бастурма, вина Арени и
            сладости, сделанные вручную. Доставим фермерские деликатесы
            Армении по Москве за 90 минут.
          </p>

          <div className="hero__actions">
            <a href="#catalog" className="btn btn-primary">
              Смотреть каталог
              <span aria-hidden>→</span>
            </a>
            <a href="#story" className="btn btn-ghost">
              Наша история
            </a>
          </div>

          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-num">120+</span>
              <span className="hero__stat-label">армянских продуктов</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-num">90 мин</span>
              <span className="hero__stat-label">доставка по Москве</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-num">4.9 ★</span>
              <span className="hero__stat-label">оценка покупателей</span>
            </div>
          </div>
        </div>

        <div className="hero__visual" aria-hidden>
          <div className="hero__plate">
            <div className="hero__plate-inner">
              <Pomegranate size={260} open />
              <div className="hero__halo" />
            </div>
            <div className="hero__badge hero__badge--1">
              <span>🫓</span>
              <div>
                <strong>Свежий лаваш</strong>
                <small>из тандыра</small>
              </div>
            </div>
            <div className="hero__badge hero__badge--2">
              <span>🍷</span>
              <div>
                <strong>Арени Резерв</strong>
                <small>автохтонный сорт</small>
              </div>
            </div>
            <div className="hero__badge hero__badge--3">
              <span>🫙</span>
              <div>
                <strong>Наршараб</strong>
                <small>гранатовый соус</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
