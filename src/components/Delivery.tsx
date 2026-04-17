import './Delivery.css';

const steps = [
  {
    n: '01',
    title: 'Выбираете любимое',
    text: 'Лаваш, бастурма, Арени — добавляйте в корзину всё, что скучали.',
    icon: '🛒',
  },
  {
    n: '02',
    title: 'Мы собираем заказ',
    text: 'Свежие продукты приезжают на склад утром — отправляем их в тот же день.',
    icon: '📦',
  },
  {
    n: '03',
    title: 'Курьер у вашей двери',
    text: 'Доставка по Москве за 90 минут. По России — СДЭК и Boxberry.',
    icon: '🚴',
  },
  {
    n: '04',
    title: 'Ужин по-армянски',
    text: 'Зовите друзей, накрывайте стол — и добро пожаловать в Ереван.',
    icon: '🍽',
  },
];

export function Delivery() {
  return (
    <section className="section delivery" id="delivery">
      <div className="container">
        <header className="section-title">
          <span className="eyebrow">Доставка</span>
          <h2>Из Еревана — к вашему столу</h2>
          <p>
            Мы сделали логистику простой и прозрачной. Никаких «ждите от 2 до 7
            дней» — только свежая еда и понятные сроки.
          </p>
        </header>

        <ol className="delivery__steps">
          {steps.map((s, i) => (
            <li
              key={s.n}
              className="delivery__step"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="delivery__step-top">
                <span className="delivery__step-num">{s.n}</span>
                <span className="delivery__step-icon" aria-hidden>
                  {s.icon}
                </span>
              </div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>

        <div className="delivery__banner">
          <div>
            <h3>Бесплатная доставка от 3 500 ₽</h3>
            <p>
              Заказывайте до 18:00 — привезём сегодня. Оплата картой, СБП или
              наличными курьеру.
            </p>
          </div>
          <a href="#catalog" className="btn btn-gold">
            Собрать корзину
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
