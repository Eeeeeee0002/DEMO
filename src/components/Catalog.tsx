import { useEffect, useMemo, useState } from 'react';
import { categories, products } from '../data/products';
import type { Category } from '../types';
import { ProductCard } from './ProductCard';
import './Catalog.css';

type Filter = Category | 'all';

const validFilters: Filter[] = [
  'all',
  'bread',
  'meat',
  'cheese',
  'sweets',
  'drinks',
  'wine',
  'preserves',
  'spices',
];

function filterFromHash(hash: string): Filter | null {
  const match = hash.match(/^#cat-(.+)$/);
  if (!match) return null;
  const candidate = match[1] as Filter;
  return validFilters.includes(candidate) ? candidate : null;
}

export function Catalog() {
  const [filter, setFilter] = useState<Filter>('all');
  const [query, setQuery] = useState('');

  useEffect(() => {
    const apply = () => {
      const fromHash = filterFromHash(window.location.hash);
      if (fromHash) setFilter(fromHash);
    };
    apply();
    window.addEventListener('hashchange', apply);
    return () => window.removeEventListener('hashchange', apply);
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      const okCat = filter === 'all' || p.category === filter;
      const okQ =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.nameArm?.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q);
      return okCat && okQ;
    });
  }, [filter, query]);

  return (
    <section className="section catalog" id="catalog">
      <div className="container">
        <header className="section-title">
          <span className="eyebrow">Каталог</span>
          <h2>Вкусная Армения — в одном месте</h2>
          <p>
            От лаваша из тандыра до выдержанного коньяка Арарат. Мы сами
            привозим продукты от армянских фермеров и семейных виноделен.
          </p>
        </header>

        <div className="catalog__controls">
          <div className="catalog__search">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden
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
              placeholder="Найти лаваш, бастурму, вино…"
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Поиск по каталогу"
            />
          </div>

          <div
            className="catalog__tabs"
            role="tablist"
            aria-label="Категории товаров"
          >
            {categories.map((c) => (
              <button
                key={c.id}
                role="tab"
                aria-selected={filter === c.id}
                className={`catalog__tab ${filter === c.id ? 'is-active' : ''}`}
                onClick={() => setFilter(c.id)}
              >
                <span className="catalog__tab-emoji" aria-hidden>
                  {c.emoji}
                </span>
                <span>{c.label}</span>
                {c.labelArm && (
                  <em className="catalog__tab-arm">{c.labelArm}</em>
                )}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="catalog__empty">
            <p>По запросу ничего не найдено.</p>
            <button
              className="btn btn-ghost"
              onClick={() => {
                setQuery('');
                setFilter('all');
              }}
            >
              Сбросить фильтры
            </button>
          </div>
        ) : (
          <div className="catalog__grid">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
