import { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';
import { Logo } from './Logo';
import './Header.css';

interface HeaderProps {
  onOpenCart: () => void;
}

export function Header({ onOpenCart }: HeaderProps) {
  const { totalCount } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const nav = [
    { href: '#catalog', label: 'Каталог' },
    { href: '#delivery', label: 'Доставка' },
    { href: '#contacts', label: 'Контакты' },
  ];

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container site-header__inner">
        <a href="#top" className="brand" aria-label="Arm Market — главная">
          <span className="brand__mark">
            <Logo size={48} />
          </span>
          <span className="brand__text">
            <span className="brand__name">Arm Market</span>
            <span className="brand__sub">Армянские продукты</span>
          </span>
        </a>

        <nav className={`site-nav ${menuOpen ? 'is-open' : ''}`}>
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setMenuOpen(false)}
              className="site-nav__link"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="site-header__actions">
          <a href="tel:+74951234567" className="site-header__phone">
            <span aria-hidden>☏</span>
            <span>+7 495 123-45-67</span>
          </a>
          <button
            className="cart-btn"
            onClick={onOpenCart}
            aria-label={`Открыть корзину, товаров: ${totalCount}`}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden
            >
              <path
                d="M3 4h2l2.5 12.5a2 2 0 0 0 2 1.5h8a2 2 0 0 0 2-1.5L22 8H6"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="10" cy="21" r="1.3" fill="currentColor" />
              <circle cx="18" cy="21" r="1.3" fill="currentColor" />
            </svg>
            <span>Корзина</span>
            {totalCount > 0 && (
              <span className="cart-btn__badge">{totalCount}</span>
            )}
          </button>
          <button
            className="menu-toggle"
            aria-label="Меню"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((m) => !m)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
