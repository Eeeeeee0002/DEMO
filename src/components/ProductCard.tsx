import { useCart } from '../context/CartContext';
import type { Product } from '../types';
import './ProductCard.css';

export function ProductCard({ product }: { product: Product }) {
  const { add, items, inc, dec } = useCart();
  const inCart = items.find((i) => i.product.id === product.id);

  return (
    <article
      className={`product-card product-card--${product.accent ?? 'burgundy'}`}
    >
      {product.tag && <span className="product-card__tag">{product.tag}</span>}

      <div className="product-card__visual" aria-hidden>
        <div className="product-card__emoji">{product.emoji}</div>
        <div className="product-card__pattern" />
      </div>

      <div className="product-card__body">
        <div className="product-card__titles">
          <h3>{product.name}</h3>
          {product.nameArm && (
            <span className="product-card__arm">{product.nameArm}</span>
          )}
        </div>
        <p className="product-card__desc">{product.description}</p>

        {product.rating !== undefined && (
          <div className="product-card__rating" aria-label={`Рейтинг ${product.rating}`}>
            <span>★</span>
            <strong>{product.rating.toFixed(1)}</strong>
          </div>
        )}

        <div className="product-card__footer">
          <div className="product-card__price">
            <strong>{product.price.toLocaleString('ru-RU')}</strong>
            <span>₽ / {product.unit}</span>
          </div>

          {inCart ? (
            <div className="product-card__qty" role="group" aria-label="Количество">
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
              className="product-card__add"
              onClick={() => add(product)}
            >
              В корзину
              <span aria-hidden>+</span>
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
