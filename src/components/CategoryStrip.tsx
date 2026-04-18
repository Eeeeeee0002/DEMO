import { useEffect, useState } from 'react';
import { categories } from '../data/products';
import { CatIcon } from './illustrations';
import './CategoryStrip.css';

function scrollToCatalog(hash: string) {
  if (typeof window === 'undefined') return;
  window.location.hash = hash;
  const el = document.getElementById('catalog');
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

export function CategoryStrip() {
  const [active, setActive] = useState<string>('all');

  useEffect(() => {
    const apply = () => {
      const m = window.location.hash.match(/^#cat-(.+)$/);
      setActive(m ? m[1] : 'all');
    };
    apply();
    window.addEventListener('hashchange', apply);
    return () => window.removeEventListener('hashchange', apply);
  }, []);

  return (
    <section className="cat-strip" aria-label="Категории каталога">
      <div className="container">
        <div className="cat-strip__scroller" role="tablist">
          {categories.map((c) => {
            const isActive = active === c.id;
            return (
              <button
                key={c.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`cat-chip ${isActive ? 'is-active' : ''}`}
                onClick={() => scrollToCatalog(`#cat-${c.id}`)}
              >
                <span className="cat-chip__ico" aria-hidden>
                  {c.id === 'all' ? (
                    <svg
                      viewBox="0 0 24 24"
                      width="20"
                      height="20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="3" y="3" width="7" height="7" rx="1.5" />
                      <rect x="14" y="3" width="7" height="7" rx="1.5" />
                      <rect x="3" y="14" width="7" height="7" rx="1.5" />
                      <rect x="14" y="14" width="7" height="7" rx="1.5" />
                    </svg>
                  ) : (
                    <CatIcon id={c.id as string} width={22} height={22} />
                  )}
                </span>
                <span className="cat-chip__label">{c.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
