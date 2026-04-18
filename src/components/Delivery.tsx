import './Delivery.css';

export function Delivery() {
  return (
    <section className="delivery" id="delivery">
      <div className="container">
        <div className="delivery__row">
          <div className="delivery__item" data-reveal data-reveal-delay="0">
            <span className="delivery__ico" aria-hidden>
              🚴
            </span>
            <div>
              <strong>90 мин по Москве</strong>
              <span>Курьер в термосумке</span>
            </div>
          </div>
          <div className="delivery__item" data-reveal data-reveal-delay="100">
            <span className="delivery__ico" aria-hidden>
              🎁
            </span>
            <div>
              <strong>Бесплатно от 3 500&nbsp;₽</strong>
              <span>Иначе 390&nbsp;₽ по Москве</span>
            </div>
          </div>
          <div className="delivery__item" data-reveal data-reveal-delay="200">
            <span className="delivery__ico" aria-hidden>
              💳
            </span>
            <div>
              <strong>Оплата по СБП</strong>
              <span>или наличными курьеру</span>
            </div>
          </div>
          <div className="delivery__item" data-reveal data-reveal-delay="300">
            <span className="delivery__ico" aria-hidden>
              🇦🇲
            </span>
            <div>
              <strong>Прямо из Армении</strong>
              <span>От фермеров и виноделен</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
