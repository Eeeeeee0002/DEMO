import { Pomegranate } from './Pomegranate';
import { Cross } from './Ornament';
import './Story.css';

export function Story() {
  return (
    <section className="section story" id="story">
      <div className="container story__inner">
        <aside className="story__visual" aria-hidden>
          <div className="story__photo">
            <div className="story__photo-bg" />
            <Pomegranate size={180} open className="story__pom story__pom--a" />
            <Pomegranate size={120} className="story__pom story__pom--b" />
            <div className="story__label">
              <span className="story__label-num">2019</span>
              <span className="story__label-text">в деле с</span>
            </div>
          </div>
          <Cross size={80} color="var(--gold)" />
        </aside>

        <div className="story__content">
          <span className="eyebrow">Наша история</span>
          <h2>
            Семейная традиция <br />
            со склонов Арарата
          </h2>
          <p className="story__lead">
            Arm Market — это маленькая команда из Еревана и Москвы, которая
            привозит настоящую армянскую еду для тех, кто скучает по дому, и
            для тех, кто только открывает для себя Кавказ.
          </p>

          <ul className="story__features">
            <li>
              <span className="story__feature-icon">🏔</span>
              <div>
                <h4>Только армянские фермеры</h4>
                <p>
                  Работаем напрямую с пасечниками Сюника, пекарями Гюмри и
                  виноделами Арени-1.
                </p>
              </div>
            </li>
            <li>
              <span className="story__feature-icon">🫒</span>
              <div>
                <h4>Без консервантов и подделок</h4>
                <p>
                  Каждую партию пробуем лично. Если не нравится нам — не
                  окажется и у вас дома.
                </p>
              </div>
            </li>
            <li>
              <span className="story__feature-icon">🚚</span>
              <div>
                <h4>Холодная доставка за 90 минут</h4>
                <p>
                  Курьеры в термосумках по Москве. Лаваш приедет тёплым, вино —
                  охлаждённым.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
