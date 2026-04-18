import { useEffect, useState } from 'react';
import { Pomegranate } from './Pomegranate';
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
      <div className="container hero__wrap">
        <div className="hero__content">
          <span className="hero__eyebrow">
            <span className="hero__dot" /> Доставка из Еревана за 90 минут
          </span>
          <h1 className="hero__title">
            Армянские продукты — <em>к вашему столу</em>
          </h1>
          <p className="hero__lead">
            Лаваш, сыры, бастурма, вина Арени и гранатовый соус. Собираем заказ
            от армянских фермеров и привозим в термосумке.
          </p>

          <form className="hero__search" onSubmit={onSubmit} role="search">
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
              placeholder="Лаваш, бастурма, вино Арени…"
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Поиск по каталогу"
            />
            <button type="submit" className="hero__search-btn">
              Найти
            </button>
          </form>

          <div className="hero__badges">
            <span className="hero__badge">
              <span aria-hidden>🚴</span> Бесплатно от 3 500 ₽
            </span>
            <span className="hero__badge">
              <span aria-hidden>⏱</span> 90 мин по Москве
            </span>
            <span className="hero__badge">
              <span aria-hidden>★</span> 4.9 · 2 400+ заказов
            </span>
          </div>
        </div>

        <div className="hero__visual" aria-hidden>
          <div className="hero__pom">
            <Pomegranate size={260} open />
          </div>
          <div className="hero__pom hero__pom--sm">
            <Pomegranate size={140} />
          </div>
        </div>
      </div>
    </section>
  );
}
