import { categories, products } from '../data/products';
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
  const countByCat = new Map<string, number>();
  for (const p of products) {
    countByCat.set(p.category, (countByCat.get(p.category) ?? 0) + 1);
  }

  return (
    <section className="cat-strip" aria-label="Категории каталога">
      <div className="container cat-strip__wrap">
        <div className="cat-strip__head">
          <div>
            <span className="eyebrow">Каталог · Ծաղկեփունջ</span>
            <h2 className="cat-strip__title">
              <span>{products.length} позиций,</span>
              <br />
              <em>собранных у&nbsp;армянских мастеров</em>
            </h2>
          </div>
          <button
            type="button"
            className="cat-strip__all"
            onClick={() => scrollToCatalog('#cat-all')}
          >
            Весь каталог <span aria-hidden>→</span>
          </button>
        </div>

        <div className="cat-strip__scroller">
          {categories
            .filter((c) => c.id !== 'all')
            .map((c, i) => (
              <button
                key={c.id}
                type="button"
                className={`cat-strip__card cat-strip__card--${c.id}`}
                onClick={() => scrollToCatalog(`#cat-${c.id}`)}
              >
                <span className="cat-strip__num">{String(i + 1).padStart(2, '0')}</span>
                <span className="cat-strip__icon" aria-hidden>
                  <CatIcon id={c.id as string} />
                </span>
                <span className="cat-strip__labels">
                  <span className="cat-strip__label">{c.label}</span>
                  {c.labelArm && (
                    <em className="cat-strip__arm">{c.labelArm}</em>
                  )}
                </span>
                <span className="cat-strip__count">
                  {countByCat.get(c.id) ?? 0} позиций
                </span>
                <span className="cat-strip__arrow" aria-hidden>→</span>
              </button>
            ))}
        </div>
      </div>
    </section>
  );
}
