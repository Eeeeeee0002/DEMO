import { useCart } from '../context/CartContext';
import type { Product } from '../types';
import { illustrationMap } from './illustrations';
import './ProductCard.css';

interface Props {
  product: Product;
  variant?: 'standard' | 'featured' | 'wide';
}

export function ProductCard({ product, variant = 'standard' }: Props) {
  const { add, items, inc, dec } = useCart();
  const inCart = items.find((i) => i.product.id === product.id);
  const Illustration = illustrationMap[product.id];

  return (
    <article
      className={`pcard pcard--${variant} pcard--${product.accent ?? 'burgundy'}`}
    >
      <div className="pcard__visual" aria-hidden>
        {Illustration ? (
          <Illustration className="pcard__ill" />
        ) : (
          <div className="pcard__ill-fallback">{product.emoji}</div>
        )}
        <div className="pcard__visual-glow" />
        <svg className="pcard__corner" viewBox="0 0 24 24" aria-hidden>
          <path
            d="M0 0h24M0 0v24M24 0l-6 6M0 24l6-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>
      </div>

      {product.tag && (
        <span className="pcard__tag">
          <span className="pcard__tag-dot" />
          {product.tag}
        </span>
      )}

      <div className="pcard__body">
        {product.origin && (
          <span className="pcard__origin">
            <span aria-hidden>⟡</span> {product.origin}
          </span>
        )}

        <div className="pcard__titles">
          <h3 className="pcard__title">{product.name}</h3>
          {product.nameArm && (
            <span className="pcard__arm">{product.nameArm}</span>
          )}
        </div>

        <p className="pcard__desc">{product.description}</p>

        <div className="pcard__footer">
          <div className="pcard__price">
            <strong>{product.price.toLocaleString('ru-RU')}</strong>
            <span>
              ₽<em>/ {product.unit}</em>
            </span>
          </div>

          <div className="pcard__meta-row">
            {product.rating !== undefined && (
              <div
                className="pcard__rating"
                aria-label={`Рейтинг ${product.rating}`}
              >
                <span aria-hidden>★</span>
                <strong>{product.rating.toFixed(1)}</strong>
              </div>
            )}

            {inCart ? (
              <div
                className="pcard__qty"
                role="group"
                aria-label="Количество"
              >
                <button
                  type="button"
                  onClick={() => dec(product.id)}
                  aria-label="Убрать один"
                >
                  −
                </button>
                <span>{inCart.quantity}</span>
                <button
                  type="button"
                  onClick={() => inc(product.id)}
                  aria-label="Добавить один"
                >
                  +
                </button>
              </div>
            ) : (
              <button
                type="button"
                className="pcard__add"
                onClick={() => add(product)}
              >
                <span>В корзину</span>
                <svg viewBox="0 0 14 14" aria-hidden>
                  <path
                    d="M1 7h12M7 1v12"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
