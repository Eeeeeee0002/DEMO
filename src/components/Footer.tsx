import { Pomegranate } from './Pomegranate';
import { Ornament } from './Ornament';
import './Footer.css';

export function Footer() {
  return (
    <footer className="footer" id="contacts">
      <div className="footer__ornament" aria-hidden>
        <Ornament width={260} color="var(--brass)" />
      </div>
      <div className="container footer__grid">
        <div className="footer__brand">
          <div className="footer__brand-top">
            <Pomegranate size={52} />
            <div>
              <strong>Arm Market</strong>
              <span>Армянские продукты</span>
            </div>
          </div>
          <p>
            «Մեր սեղանը — ձեր սեղանն է». Наш стол — ваш стол. Привозим вкус
            Армении в Россию с 2019 года.
          </p>
          <div className="footer__socials" aria-label="Социальные сети">
            <a href="#" aria-label="Telegram">
              <span>✈</span>
            </a>
            <a href="#" aria-label="Instagram">
              <span>◎</span>
            </a>
            <a href="#" aria-label="WhatsApp">
              <span>✆</span>
            </a>
            <a href="#" aria-label="VK">
              <span>★</span>
            </a>
          </div>
        </div>

        <div className="footer__col">
          <h4>Магазин</h4>
          <ul>
            <li>
              <a href="#catalog">Каталог</a>
            </li>
            <li>
              <a href="#delivery">Доставка и оплата</a>
            </li>
            <li>
              <a href="#story">О нас</a>
            </li>
            <li>
              <a href="#">Подарочные наборы</a>
            </li>
            <li>
              <a href="#">Корпоративным клиентам</a>
            </li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Контакты</h4>
          <ul>
            <li>
              <a href="tel:+74951234567">+7 495 123-45-67</a>
            </li>
            <li>
              <a href="mailto:hello@armmarket.ru">hello@armmarket.ru</a>
            </li>
            <li>Москва, Тверская, 18</li>
            <li>Ежедневно 10:00 — 22:00</li>
          </ul>
        </div>

        <div className="footer__col footer__col--form">
          <h4>Рассылка рецептов</h4>
          <p>Армянские рецепты и скидки. Никакого спама — честное слово.</p>
          <form
            className="footer__form"
            onSubmit={(e) => e.preventDefault()}
            aria-label="Подписка на рассылку"
          >
            <input type="email" placeholder="ваш@email.ru" required />
            <button type="submit" className="btn btn-gold">
              Подписаться
            </button>
          </form>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>© {new Date().getFullYear()} Arm Market · Сделано с ♥ в Ереване</p>
        <p>Политика конфиденциальности · Оферта</p>
      </div>
    </footer>
  );
}
