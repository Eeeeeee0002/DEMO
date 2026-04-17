import { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';
import { Pomegranate } from './Pomegranate';
import './Cart.css';

interface CartProps {
  open: boolean;
  onClose: () => void;
}

export function Cart({ open, onClose }: CartProps) {
  const { items, totalPrice, totalCount, inc, dec, remove, clear } = useCart();
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [orderDone, setOrderDone] = useState(false);
  const [orderNumber, setOrderNumber] = useState<number | null>(null);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    address: '',
    note: '',
  });

  const delivery = totalPrice >= 3500 || totalPrice === 0 ? 0 : 390;
  const finalPrice = totalPrice + delivery;

  useEffect(() => {
    document.body.style.overflow = open || checkoutOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open, checkoutOpen]);

  const submitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderNumber(Math.floor(Math.random() * 90000) + 10000);
    setOrderDone(true);
  };

  const resetAndClose = () => {
    setCheckoutOpen(false);
    setOrderDone(false);
    setOrderNumber(null);
    setForm({ name: '', phone: '', address: '', note: '' });
    clear();
    onClose();
  };

  return (
    <>
      <div
        className={`cart-backdrop ${open ? 'is-open' : ''}`}
        onClick={onClose}
        aria-hidden={!open}
      />
      <aside
        className={`cart ${open ? 'is-open' : ''}`}
        aria-hidden={!open}
        aria-label="Корзина"
      >
        <header className="cart__header">
          <div>
            <span className="eyebrow">Корзина</span>
            <h3>
              {totalCount === 0
                ? 'Пока пусто'
                : `${totalCount} ${pluralize(totalCount, [
                    'товар',
                    'товара',
                    'товаров',
                  ])}`}
            </h3>
          </div>
          <button
            type="button"
            className="cart__close"
            onClick={onClose}
            aria-label="Закрыть корзину"
          >
            ×
          </button>
        </header>

        {items.length === 0 ? (
          <div className="cart__empty">
            <Pomegranate size={120} />
            <p>Добавьте лаваш, бастурму или гранатовый сок — и мы привезём.</p>
            <button type="button" className="btn btn-ghost" onClick={onClose}>
              В каталог
            </button>
          </div>
        ) : (
          <>
            <ul className="cart__list">
              {items.map(({ product, quantity }) => (
                <li key={product.id} className="cart__item">
                  <span className="cart__emoji" aria-hidden>
                    {product.emoji}
                  </span>
                  <div className="cart__info">
                    <div className="cart__info-top">
                      <strong>{product.name}</strong>
                      <button
                        type="button"
                        className="cart__remove"
                        onClick={() => remove(product.id)}
                        aria-label={`Удалить ${product.name}`}
                      >
                        ×
                      </button>
                    </div>
                    <span className="cart__unit">
                      {product.price.toLocaleString('ru-RU')} ₽ · {product.unit}
                    </span>
                    <div className="cart__controls">
                      <div className="cart__qty">
                        <button
                          type="button"
                          onClick={() => dec(product.id)}
                          aria-label="Убрать один"
                        >
                          −
                        </button>
                        <span>{quantity}</span>
                        <button
                          type="button"
                          onClick={() => inc(product.id)}
                          aria-label="Добавить один"
                        >
                          +
                        </button>
                      </div>
                      <strong className="cart__sum">
                        {(product.price * quantity).toLocaleString('ru-RU')} ₽
                      </strong>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <footer className="cart__summary">
              <div className="cart__row">
                <span>Товары</span>
                <span>{totalPrice.toLocaleString('ru-RU')} ₽</span>
              </div>
              <div className="cart__row">
                <span>Доставка {delivery === 0 && '(бесплатно)'}</span>
                <span>
                  {delivery === 0
                    ? '—'
                    : `${delivery.toLocaleString('ru-RU')} ₽`}
                </span>
              </div>
              <div className="cart__row cart__row--total">
                <span>К оплате</span>
                <span>{finalPrice.toLocaleString('ru-RU')} ₽</span>
              </div>
              {delivery > 0 && (
                <p className="cart__hint">
                  Добавьте ещё на{' '}
                  <strong>
                    {(3500 - totalPrice).toLocaleString('ru-RU')} ₽
                  </strong>{' '}
                  — и доставка бесплатно.
                </p>
              )}
              <button
                type="button"
                className="btn btn-primary cart__checkout"
                onClick={() => setCheckoutOpen(true)}
              >
                Оформить заказ
                <span aria-hidden>→</span>
              </button>
              <button
                type="button"
                className="cart__clear"
                onClick={clear}
              >
                Очистить корзину
              </button>
            </footer>
          </>
        )}
      </aside>

      {checkoutOpen && (
        <div
          className="checkout-backdrop is-open"
          onClick={() => !orderDone && setCheckoutOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="checkout"
            onClick={(e) => e.stopPropagation()}
          >
            {orderDone ? (
              <div className="checkout__done">
                <div className="checkout__done-circle">
                  <Pomegranate size={90} open />
                </div>
                <span className="eyebrow">Շնորհակալություն!</span>
                <h3>Спасибо, {form.name || 'дорогой гость'}!</h3>
                <p>
                  Заказ №{orderNumber} принят. Мы
                  позвоним по номеру <strong>{form.phone}</strong> для
                  подтверждения и привезём ваш армянский вечер за 90 минут.
                </p>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={resetAndClose}
                >
                  Готово
                </button>
              </div>
            ) : (
              <form className="checkout__form" onSubmit={submitOrder}>
                <header>
                  <span className="eyebrow">Оформление</span>
                  <h3>Последний шаг — и мы в пути</h3>
                  <button
                    type="button"
                    className="cart__close"
                    onClick={() => setCheckoutOpen(false)}
                    aria-label="Закрыть"
                  >
                    ×
                  </button>
                </header>

                <label>
                  <span>Как к вам обращаться?</span>
                  <input
                    required
                    type="text"
                    placeholder="Арам"
                    value={form.name}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, name: e.target.value }))
                    }
                  />
                </label>
                <label>
                  <span>Телефон</span>
                  <input
                    required
                    type="tel"
                    placeholder="+7 999 000-00-00"
                    value={form.phone}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, phone: e.target.value }))
                    }
                  />
                </label>
                <label>
                  <span>Адрес доставки</span>
                  <input
                    required
                    type="text"
                    placeholder="Улица, дом, квартира"
                    value={form.address}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, address: e.target.value }))
                    }
                  />
                </label>
                <label>
                  <span>Комментарий курьеру</span>
                  <textarea
                    rows={3}
                    placeholder="Домофон, этаж, особые пожелания"
                    value={form.note}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, note: e.target.value }))
                    }
                  />
                </label>

                <div className="checkout__total">
                  <span>К оплате</span>
                  <strong>{finalPrice.toLocaleString('ru-RU')} ₽</strong>
                </div>

                <button type="submit" className="btn btn-primary">
                  Подтвердить заказ
                </button>
                <p className="checkout__legal">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности.
                </p>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}

function pluralize(n: number, forms: [string, string, string]) {
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return forms[0];
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return forms[1];
  return forms[2];
}
