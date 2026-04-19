import { useCart } from '../context/CartContext';
import type { Product } from '../types';
import { illustrationMap } from './illustrations';
import './ProductCard.css';

interface Props {
  product: Product;
  variant?: 'standard' | 'featured' | 'wide';
}

export function ProductCard({ product }: Props) {
  const { add, items, inc, dec } = useCart();
  const inCart = items.find((i) => i.product.id === product.id);
  const Illustration = illustrationMap[product.id];

  return (
    <article className="pcard">
      <div className="pcard__visual" aria-hidden>
        {Illustration ? (
          <Illustration className="pcard__ill" />
        ) : (
          <div className="pcard__ill-fallback">{product.emoji}</div>
        )}
      </div>

      {product.tag && <span className="pcard__tag">{product.tag}</span>}

      <div className="pcard__body">
        <h3 className="pcard__title">{product.name}</h3>
        {product.nameArm && (
          <span className="pcard__arm">{product.nameArm}</span>
        )}
        <p className="pcard__desc">{product.description}</p>

        <div className="pcard__footer">
          <div className="pcard__price">
            <strong>{product.price.toLocaleString('ru-RU')}&nbsp;₽</strong>
            <em>/ {product.unit}</em>
          </div>

          {inCart ? (
            <div className="pcard__qty" role="group" aria-label="Количество">
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
              aria-label={`Добавить ${product.name} в корзину`}
            >
              +
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
