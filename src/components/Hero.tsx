import { useEffect, useState } from 'react';
import { FlyingPomegranates } from './FlyingPomegranates';
import './Hero.css';

export function Hero() {
  const [query, setQuery] = useState('');

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) {
      const el = document.getElementById('catalog');
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
    window.dispatchEvent(
      new CustomEvent('arm-search', { detail: query.trim() })
    );
    const el = document.getElementById('catalog');
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Listen to external search resets to sync the hero input (one-way)
  useEffect(() => {
    // no-op; hero only emits
  }, []);

  return (
    <section className="hero" id="top">
      <FlyingPomegranates count={34} />
      <div className="container hero__wrap">
        <div className="hero__content">
          <h1 className="hero__title" data-reveal data-reveal-variant="left" data-reveal-delay="80">
            Вкус Армении — <em>к вашему столу</em>
          </h1>
          <p className="hero__lead" data-reveal data-reveal-variant="left" data-reveal-delay="180">
            Тёплый лаваш, только что вынутый из тандыра. Выдержанная бастурма
            с ароматом горного чамана. Нежные сыры и сладости с грецким
            орехом в мёде. Собрано бережно, привезено тёплым.
          </p>

          <form className="hero__search" onSubmit={onSubmit} role="search" data-reveal data-reveal-delay="260">
            <svg
              aria-hidden
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="none"
            >
              <circle
                cx="11"
                cy="11"
                r="7"
                stroke="currentColor"
                strokeWidth="1.7"
              />
              <path
                d="m20 20-3.5-3.5"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
            </svg>
            <input
              type="search"
              value={query}
              placeholder="Лаваш, бастурма, суджух, гата…"
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Поиск по каталогу"
            />
            <button type="submit" className="hero__search-btn">
              Найти
            </button>
          </form>

          <div className="hero__badges" data-reveal data-reveal-delay="360">
            <span className="hero__badge">
              <span aria-hidden>🚴</span> Бесплатно от 3 500 ₽
            </span>
            <span className="hero__badge">
              <span aria-hidden>⏱</span> 90 мин по Петербургу
            </span>
            <span className="hero__badge">
              <span aria-hidden>★</span> 4.9 · 2 400+ заказов
            </span>
          </div>
        </div>

        <div className="hero__visual" aria-hidden data-reveal data-reveal-variant="zoom" data-reveal-delay="120">
          <div className="hero__halo" />
          <span className="hero__arm" aria-hidden>
            Արմ Մարկետ
          </span>
        </div>
      </div>
    </section>
  );
}
