# Test plan — WOW scroll effects (Armenian style)

## What changed (user-visible)
Пользователь просил: *«сделай wow эффекты чтобы когда сайт делаешь вниз что то двигалось или появлялось но в стиле армении»*.

Добавлены:
1. **Parallax-слой** — фиксированный `<div class="scroll-decor">` с 5 армянскими SVG-декорами (гранат, хачкар, пшеничный колос, виноградная лоза, силуэт Арарата). Каждый перемещается по вертикали со своей скоростью (`-scrollY * speed`) через `transform: translate3d(0, Y, 0) rotate(deg)` в `requestAnimationFrame`.
2. **Floating pomegranates** — 3 рубиновые капельки «плывут» снизу вверх (`@keyframes sdRise`, 18-30 s, цикл).
3. **Reveal-on-scroll** — у элементов с `data-reveal` `opacity:0; translateY(28px)`, при попадании во viewport IntersectionObserver добавляет `.is-inview` → opacity:1, translate:none (transition 0.9s). Поддерживаются варианты `zoom`/`left`/`right` и `data-reveal-delay` для каскада.
4. **OrnamentDivider** — армянский орнамент между секциями Catalog и Delivery; линия рисуется через `stroke-dashoffset: 420 → 0` (1.6 s), медальон появляется с масштабом/поворотом (0.9 s delay), точки и подпись — последними.
5. **Hero** элементы выходят каскадом 0/80/180/260/360/120 ms. **Catalog** карточки — zoom-in с stagger `min(i,10)*70 ms`. **Delivery** пункты — stagger 0/100/200/300 ms.

Все эффекты уважают `prefers-reduced-motion`.

## Environment
- Live preview: https://dist-qopuwvnz.devinapps.com (только что задеплоено)
- Desktop viewport 1366×768+ для записи, затем мобильный 390×844 коротко

## Primary flow — scroll walkthrough (recorded video)

Запись делается в Chrome в полноэкранном браузере, максимизированном через `wmctrl`. Все ассерты — либо визуальные по видео, либо через `computer(action="console", content=...)` чтобы прочитать DOM/computed style и подтвердить конкретные числа.

### 1. Precondition — «Эффекты спят в топ-позиции»
- Открыть https://dist-qopuwvnz.devinapps.com, `window.scrollTo(0,0)`.
- **Console ассерт 1a:** `document.querySelector('.scroll-decor')` — существует (не `null`). **Pass если** возвращается HTMLDivElement, **Fail** если null (= ScrollDecor не смонтирован).
- **Console ассерт 1b:** `document.querySelectorAll('[data-parallax]').length` → **должно быть ≥ 5** (pom, khach, wheat, vine, ararat). **Fail** при < 5.
- **Console ассерт 1c:** `document.querySelectorAll('.sd-floater').length` → **должно быть === 3**.
- **Console ассерт 1d:** hero-заголовок уже in-view: `document.querySelector('.hero__title').classList.contains('is-inview')` → **true**.
- **Console ассерт 1e:** карточки внизу страницы ещё не in-view: `[...document.querySelectorAll('.catalog__grid > [data-reveal]')].slice(-5).every(el => !el.classList.contains('is-inview'))` → **true** (должны быть скрыты, opacity 0).

Если сломано: `null`/`0`/`false` означает что хук или декоратор не подключён — тест проваливается.

### 2. Parallax drift — декор движется на скролле
- Замерить transform гранатового силуэта в верхнем-правом углу **до** скролла:
  ```js
  getComputedStyle(document.querySelector('.sd-shape--pom')).transform
  ```
  Ожидается `matrix(1, 0, 0, 1, 0, 0)` или `matrix3d(…, 0, 0, 0, 1)` с `ty ≈ 0`.
- Проскроллить на 800 px: `window.scrollTo(0, 800)`, подождать 300 ms.
- Прочитать transform снова. **Pass если** `ty ≈ -800 * 0.18 = -144` (±10 px), **Fail если** `ty` остался 0 (парализе не работает).
- Проверить хачкар (`.sd-shape--khach`, speed 0.28): ожидается `ty ≈ -224` (±10). И колос (`.sd-shape--wheat`, speed 0.35): `ty ≈ -280` (±10).
- **Key assert:** три разных декора должны дрифтовать на три разных расстояния при одном и том же scrollY. Если бы фича была сломана, все три transform были бы одинаковыми (или нулями).

### 3. Reveal на скролле — каскад карточек каталога
- Вернуться в топ `window.scrollTo(0,0)`, подождать чтобы карточки вышли из viewport → сняли класс? (нет, unobserve — класс остаётся, это ок; это проверка, что нижние карточки ещё не были в viewport).
- Записать scroll-down к секции Catalog: `document.querySelector('.catalog').scrollIntoView({behavior:'smooth'})`.
- Визуально на видео: карточки выезжают волной с эффектом zoom (scale 0.92 → 1), **не все сразу**, а по нарастающей — наблюдатель видит «волну».
- **Console ассерт 3a (после остановки скролла):** все видимые карточки получили `is-inview`:
  ```js
  [...document.querySelectorAll('.catalog__grid > [data-reveal]')]
    .slice(0, 6)
    .every(el => el.classList.contains('is-inview'))
  ```
  → **true**.
- **Console ассерт 3b:** первая карточка имеет transitionDelay=0, шестая имеет ≈350 ms:
  ```js
  document.querySelectorAll('.catalog__grid > [data-reveal]')[0].style.transitionDelay
  // ожидаем "0ms"
  document.querySelectorAll('.catalog__grid > [data-reveal]')[5].style.transitionDelay
  // ожидаем "350ms"  (5 * 70)
  ```
  **Fail если** оба равны `""` (stagger не применён — все появятся одновременно).

### 4. OrnamentDivider — орнамент рисуется на скролле
- Проскроллить до первого `.orn-div` (между CategoryStrip и Catalog).
- Визуально на видео: золотая линия «прорисовывается» слева-направо (симметрично от краёв к центру), затем в центре появляется медальон (масштаб 0.2 → 1, поворот -90° → 0°), потом зажигаются точки и подпись «Caтalog · Կատալոգ».
- **Console ассерт 4a:** `document.querySelector('.orn-div').classList.contains('is-inview')` → **true**.
- **Console ассерт 4b:** stroke-dashoffset у орнаментных путей должен стать 0:
  ```js
  getComputedStyle(document.querySelector('.orn-path')).strokeDashoffset
  // ожидаем "0" (или "0px") после завершения transition 1.6s
  ```
  **Fail если** значение ≈ "420" — значит `.is-inview` не был навешан.

### 5. Hero cascade (sanity check, можно записать при обновлении страницы)
- Reload страницы, виден Hero.
- Визуально на видео: eyebrow («ДОСТАВКА…») появляется первым, заголовок «Вкус Армении» — следом, lead, поиск, бейджи, potом граната-виз (справа). Не все одновременно.
- **Console ассерт 5:** разные transitionDelay у 6 hero-элементов:
  ```js
  ['hero__eyebrow','hero__title','hero__lead','hero__search','hero__badges','hero__visual']
    .map(c => document.querySelector('.' + c)?.style.transitionDelay)
  // ожидаем вариации (например ['0ms','80ms','180ms','260ms','360ms','120ms'])
  ```
  **Fail если** все `""` или все одинаковые.

### 6. Mobile (regression, 390×844)
- Переключить окно в ширину ~390 px или открыть через mobile emulation.
- Визуально: хачкар (`.sd-shape--khach`) скрыт (`display:none` в media query ≤760px). Гранат меньше (380 px). Floater-пом остаются и дрейфуют. Контент не прыгает.

### 7. Core functionality (regression — effects don't break site)
Короткая проверка:
- Клик по пилюле «Вина и коньяк» → в каталоге 3 карточки, URL `#cat-wine`.
- Добавить Арени в корзину (qty 1, 2 490 ₽) → корзина показывает «Доставка 390 ₽» и подсказку «осталось 1 010 ₽ до бесплатной».
- qty=2 (4 980 ₽) → доставка «Бесплатно».
- Оформить заказ → появляется экран «Շնորհակալություն · Заказ №\d{5} принят».

## Pass/Fail criteria — short list

| # | Assertion | Pass | Fail |
|---|---|---|---|
| 1 | `.scroll-decor` присутствует | есть элемент | null |
| 2 | ≥5 `[data-parallax]` | true | false |
| 3 | 3 `.sd-floater` | true | false |
| 4 | pom transform ty ≈ -144 ±10 px после scrollY=800 | pass | 0 или другое |
| 5 | khach ty ≈ -224, wheat ty ≈ -280 (разные!) | pass | все 0 или равны |
| 6 | После скролла к каталогу первые 6 карточек получили `.is-inview` | true | false |
| 7 | transitionDelay 1-й карточки "0ms", 6-й — "350ms" | pass | обе "" |
| 8 | `.orn-div.is-inview` после скролла к разделителю | true | false |
| 9 | `stroke-dashoffset` орнамента после reveal = 0 | pass | 420 |
| 10 | Разные delays у 6 hero-элементов | pass | все одинаковые |
| 11 | Хачкар скрыт на 390 px ширине | display:none | viewable |
| 12 | Регресс: корзина, порог 3 500 ₽, чекаут работают | pass | fail |

## Recording
Одна непрерывная запись десктопной прокрутки (сверху до футера) + короткий проезд в обратную сторону + быстрый мобильный snapshot + регресс корзины. Аннотации `setup`/`test_start`/`assertion` помечают каждую проверку.

## Would this look identical if broken?
- Если `useReveal` не вызвался — все карточки/hero остались бы на opacity:0 (пустая страница) → видно невооружённым глазом ⇒ **нет**.
- Если parallax не работал — все `.sd-shape` стояли бы неподвижно; ассерты 4-5 поймают разные/нулевые transform ⇒ **нет**.
- Если stagger сломан — все карточки появятся одним ударом, ассерт 7 поймает пустые `transitionDelay` ⇒ **нет**.
- Если OrnamentDivider не reveal'ится — stroke-dashoffset останется 420 (невидимая линия), ассерт 9 поймает ⇒ **нет**.

Т.е. все тесты различают работающую/сломанную реализацию.
