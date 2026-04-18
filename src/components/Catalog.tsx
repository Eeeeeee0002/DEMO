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

  useEffect(() => {
    const onSearch = (e: Event) => {
      const ce = e as CustomEvent<string>;
      if (typeof ce.detail === 'string') setQuery(ce.detail);
    };
    window.addEventListener('arm-search', onSearch);
    return () => window.removeEventListener('arm-search', onSearch);
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

  const activeCategory = categories.find((c) => c.id === filter);

  return (
    <section className="section catalog" id="catalog">
      <div className="container">
        <header className="catalog__heading">
          <h2>
            {activeCategory && filter !== 'all'
              ? activeCategory.label
              : 'Каталог'}
            {activeCategory?.labelArm && filter !== 'all' && (
              <em className="catalog__heading-arm">
                {' · '}
                {activeCategory.labelArm}
              </em>
            )}
          </h2>
          <span className="catalog__heading-count">
            {filtered.length}{' '}
            {pluralize(filtered.length, ['товар', 'товара', 'товаров'])}
          </span>
        </header>

        {query && (
          <div className="catalog__query">
            Поиск: <strong>«{query}»</strong>
            <button
              type="button"
              className="catalog__query-reset"
              onClick={() => setQuery('')}
            >
              Сбросить
            </button>
          </div>
        )}

        {filtered.length === 0 ? (
          <div className="catalog__empty">
            <p>По запросу ничего не найдено.</p>
            <button
              className="btn btn-ghost"
              onClick={() => {
                setQuery('');
                setFilter('all');
                window.location.hash = '#cat-all';
              }}
            >
              Сбросить фильтры
            </button>
          </div>
        ) : (
          <div className="catalog__grid">
            {filtered.map((p, i) => (
              <div
                key={p.id}
                data-reveal
                data-reveal-variant="zoom"
                data-reveal-delay={String(Math.min(i, 10) * 70)}
                style={{ display: 'contents' }}
              >
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function pluralize(n: number, forms: [string, string, string]) {
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return forms[0];
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return forms[1];
  return forms[2];
}
