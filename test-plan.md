# Test Plan — Arm Market Dark Ethnic Redesign (PR #1)

**Target:** https://dist-qopuwvnz.devinapps.com  
**Scope:** Re-verify that visual redesign (dark graphite + pomegranate + SVG illustrations) preserved existing functionality. Primary focus is UI-visible regressions since the change was entirely CSS/TSX rendering layer.

**Evidence from code (files read to ground the plan):**
- `src/components/CategoryStrip.tsx:49` — `scrollToCatalog('#cat-' + c.id)` sets `window.location.hash`
- `src/components/Catalog.tsx:33-41` — `hashchange` listener sets filter; `validFilters` includes `'wine'`
- `src/data/products.ts` — wine category contains 3 items (Арени, Арарат, Тутовка)
- `src/components/Cart.tsx:23` — `delivery = totalPrice >= 3500 || totalPrice === 0 ? 0 : 390`
- `src/components/Cart.tsx:206` — success copy: `Заказ №{orderNumber} принят`

---

## Test 1 — Hero + CategoryStrip visible on first screen (critical user requirement)

Steps:
1. Open https://dist-qopuwvnz.devinapps.com in maximized window.
2. Without scrolling, inspect the viewport — read the very bottom of the viewport.

Assertions:
- Hero headline text contains `Вкус Армении, высеченный в камне` (visible at top).
- Without scrolling, the CategoryStrip heading block is visible — specifically, text `25 позиций, собранных у армянских мастеров` AND the `ВЕСЬ КАТАЛОГ →` button must both be in the viewport. Check via `document.querySelector('section[aria-label="Категории каталога"]').getBoundingClientRect().top < window.innerHeight`.
- No emoji characters (🍷, 🧀, 🍯, 🍞) appear as product icons on the page (the redesign replaced them with SVG).

A broken change (e.g. CategoryStrip accidentally removed or pushed way below) would visibly fail this check — this was the regression fixed in the latest commit.

---

## Test 2 — Category hash-routing drives catalog filter

Steps:
1. On the live preview, scroll down until CategoryStrip is in view.
2. Click the category pill labeled **«Вина и коньяк»** (Գինի).
3. Observe URL and catalog section.

Assertions:
- URL bar shows `#cat-wine` (exact string).
- Page smoothly scrolls so the `#catalog` section header becomes visible.
- In the catalog, the tab **«Вина и коньяк»** is active (pomegranate background / `aria-selected="true"`).
- Exactly **3** product cards are visible in the grid: «Вино Арени Резерв», «Коньяк Арарат 5★», «Тутовая водка». No 4th card, no bread/meat/etc.

A broken hashchange listener or a bug in `validFilters` would produce either `all` (25 cards) or 0 cards — visibly distinct from 3.

---

## Test 3 — Cart + free-delivery threshold (3 500 ₽)

Steps:
1. Still on wine category, click **«В корзину»** button on «Вино Арени Резерв» (2 490 ₽).
2. Open the cart via header «Корзина» button.
3. Observe delivery cost row.
4. Click the `+` button in the cart to bump Арени quantity to 2 (total = 4 980 ₽).
5. Observe delivery cost row again.

Assertions:
- After step 1: cart badge = `1`.
- After step 2: cart sidebar is visible; line item «Вино Арени Резерв» × 1; subtotal `2 490 ₽`; delivery row shows `390 ₽` (NOT "Бесплатно"); there is a progress hint containing `1 010 ₽` (= 3500 − 2490).
- After step 4: cart badge = `2`; subtotal `4 980 ₽`; delivery row shows `Бесплатно` (or `0 ₽`); no more `добавьте ещё…` hint.

A broken threshold (e.g. still comparing to old value, or reversed boolean) would show `390 ₽` at 4 980 ₽ or `Бесплатно` at 2 490 ₽ — both visibly distinct.

---

## Test 4 — Checkout success screen

Steps:
1. With cart containing items (from Test 3, 4 980 ₽), click **«Оформить заказ»** button in cart.
2. Fill the checkout form with test values:
   - Имя: `Тест Тестов`
   - Телефон: `+7 999 123 45 67`
   - Адрес: `Москва, Тверская 18`
3. Click submit button («Оформить» / «Подтвердить»).

Assertions:
- Success screen appears with heading containing `Շնորհակալություն` (Armenian "thank you").
- Body text contains a line matching regex `Заказ №\d{5} принят` — 5-digit order number.
- Cart badge resets to `0` after dismissing the success screen.

A broken checkout handler (missing reducer case, throw, etc.) would produce either no screen change, a stuck modal, or a different number format.

---

## Test 5 — Mobile regression (390×844)

Steps:
1. Open Chrome DevTools → toggle device toolbar → set viewport to 390×844 (iPhone 14 Pro).
2. Reload page.
3. Observe header and CategoryStrip.

Assertions:
- Desktop nav links («Каталог», «О нас», «Доставка», «Контакты») are hidden.
- Hamburger button OR cart button (compact mode) is visible in header.
- CategoryStrip is visible and **horizontally scrollable** — user can drag or scroll horizontally through all 8 category cards.
- Catalog grid collapses to 1 column (each product card spans full width).

A broken responsive rule would either leave desktop nav visible at mobile width or collapse CategoryStrip into a broken vertical stack.

---

## Out of scope (not tested)

- Visual subjective approval (taste) — that's for the user to review via screenshots.
- Search input filtering — not changed in this PR, skipping.
- Footer newsletter form — cosmetic only, skipping.
- All 25 products loading — implicit via Test 2 (3 wine items proves data + filter work).

## Recording plan

One continuous recording covering Tests 1 → 4 on desktop, then switch to mobile DevTools for Test 5. Use structured `record_annotate` at each `test_start`/`assertion`.
