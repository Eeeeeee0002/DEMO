import { useCart } from '../context/CartContext';
import './StickyCartBar.css';

interface Props {
  onOpen: () => void;
}

export function StickyCartBar({ onOpen }: Props) {
  const { totalCount, totalPrice } = useCart();
  if (totalCount === 0) return null;

  return (
    <button
      type="button"
      className="sticky-cart"
      onClick={onOpen}
      aria-label={`Открыть корзину, ${totalCount} товаров на ${totalPrice} ₽`}
    >
      <span className="sticky-cart__left">
        <span className="sticky-cart__count">{totalCount}</span>
        <span className="sticky-cart__label">
          {pluralize(totalCount, ['товар', 'товара', 'товаров'])} в корзине
        </span>
      </span>
      <span className="sticky-cart__right">
        <span className="sticky-cart__price">
          {totalPrice.toLocaleString('ru-RU')} ₽
        </span>
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden
        >
          <path
            d="M9 6l6 6-6 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </button>
  );
}

function pluralize(n: number, forms: [string, string, string]) {
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return forms[0];
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return forms[1];
  return forms[2];
}
