# GoIT homework 5 - WebStudio landing page

WebStudio landing page subscribe form, modal window and custom checkbox — HTML/CSS homework assignment #5 for the GoIT course. Focuses on forms, modal/backdrop patterns, focus-visible accessibility states, and custom form controls.

**What was done:**
- Created repository `goit-markup-hw-05` using `goit-markup-hw-04` as a Template
- Extended `icons.svg` sprite with new icons (send, close, user, phone, email, checkmark) and connected them via `<svg>` + `<use>` with explicit width/height
- Added a separate `modal.css` file, imported in `main.css` after the general styles
- Built a Footer subscribe block: descriptive `<p>Subscribe</p>` text placed before the form, an input with proper `name`, `placeholder` and an accessible label (`label`/`aria-label`), and a `type="submit"` button with an SVG send icon colored via `color` on the interactive parent
- Styled `::placeholder` separately per the Style Guide typography (font-size, line-height, letter-spacing, font-weight, color) and added smooth hover/focus transitions for border, background and color
- Aligned the subscribe block to the right edge of the Footer container per the layout
- Implemented a fixed, full-viewport `backdrop` with a semi-transparent background, hidden by default and non-interactive while hidden, toggled via a manually added `.is-open` class (no JavaScript)
- Centered the modal window inside the backdrop with Flexbox, and set its size, background, border-radius, box-shadow and internal padding directly on the modal element (not on its children)
- Added a round close button in the top-right corner of the modal with a `type="button"`, SVG cross icon, and hover/focus states that smoothly change background, border and icon color via `currentColor`
- Built the request form inside the modal with `Name`, `Phone`, `Email`, `Comment` and a Privacy Policy checkbox, each field using the correct `type`, a descriptive `name`, and a separate `label` connected via `for`/`id`
- For icon fields: wrapped input and SVG in a shared container, positioned the icon absolutely with `top: 50%` + `transform: translateY(-50%)`, added left padding to the input to avoid overlapping the icon, and used an `input:focus + svg` combined selector so the border and icon color change together
- Set `outline: transparent` on inputs while keeping the focus border color change as a clear visible focus indicator
- Styled `Comment` as a `textarea` with `resize: none`, matching typography, height, padding and placeholder color from the Style Guide
- Implemented a custom checkbox: kept the native `input type="checkbox"` visually hidden via the `.sr-only` pattern (not `display: none`), connected to its label via `id`/`for`, with a custom checkbox box, an SVG checkmark (hidden by default via `opacity: 0`) and a `span`-wrapped Privacy Policy link inside the label
- Styled the `:checked` state using a `.checkbox:checked + .checkbox-label` combined selector to update the custom checkbox background/border and reveal the checkmark (`opacity: 1`), plus a visible `:focus-visible` outline for keyboard navigation
- Added explicit `transition` properties (`250ms cubic-bezier(0.4, 0, 0.2, 1)`) in the base state for every property that changes on hover, focus, `:focus-visible` and `:checked`, avoiding `transition: all`
- Verified keyboard accessibility: Tab navigation, visible focus states, and toggling the checkbox with Space
- Validated HTML markup via W3C HTML Validator and formatted all files with Prettier
- Deployed the project on GitHub Pages and updated the live page link in the repository's About section

============================================================================

# Домашнє завдання 5 GoIT — лендінг WebStudio

Форма підписки, модальне вікно та кастомний checkbox лендінгу WebStudio — домашнє завдання #5 з курсу HTML/CSS від GoIT. Реалізовано форми, паттерн backdrop/modal, доступні focus-стани та кастомні елементи форми.

**Що зроблено:**
- Створено репозиторій `goit-markup-hw-05` на основі шаблону `goit-markup-hw-04`
- Доповнено SVG-спрайт `icons.svg` новими іконками (відправлення, закриття, користувача, телефону, електронної пошти, галочки), підключено через `<svg>` і `<use>` з явними `width`/`height`
- Додано окремий файл `modal.css`, підключений у `main.css` після загальних стилів
- Реалізовано блок підписки у Footer: текст `<p>Subscribe</p>` розташований перед формою (не заголовок), поле з описовим `name`, `placeholder` та доступною назвою через `label`/`aria-label`, кнопка `type="submit"` з іконкою відправлення зі спрайту, колір якої задається через `color` інтерактивного батьківського елемента
- Стилізовано `::placeholder` окремо відповідно до типографії Style Guide, додано плавні переходи кольору, рамки та фону для поля й кнопки
- Блок підписки притиснутий до правого краю контейнера Footer відповідно до макета
- Реалізовано зафіксований на весь viewport `backdrop` з напівпрозорим фоном, прихований за замовчуванням і без перехоплення подій у прихованому стані, керований вручну доданим класом `.is-open` (без JavaScript)
- Модальне вікно центроване всередині backdrop через Flexbox, розміри, фон, заокруглення, тінь та внутрішні відступи задані безпосередньо на самому модальному вікні, а не на дочірніх елементах
- Додано круглу кнопку закриття у верхньому правому куті модального вікна з `type="button"`, SVG хрестиком та hover/focus станами, що плавно змінюють фон, рамку і колір іконки через `currentColor`
- Побудовано форму заявки в модальному вікні з полями `Name`, `Phone`, `Email`, `Comment` та чекбоксом Privacy Policy — кожне поле з правильним `type`, описовим `name` та окремим `label`, пов'язаним через `for`/`id`
- Для полів з іконками: input і SVG обгорнуті у спільний контейнер, іконка позиціонована абсолютно з `top: 50%` та `transform: translateY(-50%)`, полю додано лівий внутрішній відступ; комбінований селектор `input:focus + svg` одночасно змінює рамку поля та колір іконки
- Для input задано `outline: transparent`, при цьому зміна кольору рамки залишається чітким індикатором фокусу
- Поле `Comment` оформлено як `textarea` з `resize: none`, типографією, висотою, відступами та кольором placeholder зі Style Guide
- Реалізовано кастомний checkbox: нативний `input type="checkbox"` прихований візуально через патерн `.sr-only` (без `display: none`), пов'язаний з `label` через `id`/`for`; усередині label — кастомний елемент чекбоксу, SVG-галочка (прихована за замовчуванням через `opacity: 0`) та текст із посиланням на Privacy Policy у `span`
- Стан `:checked` оформлено через комбінований селектор `.checkbox:checked + .checkbox-label`, що змінює фон/рамку кастомного чекбоксу та показує галочку (`opacity: 1`), додано помітний `:focus-visible` для навігації з клавіатури
- Додано явні `transition` (`250ms cubic-bezier(0.4, 0, 0.2, 1)`) у базовому стані для всіх властивостей, що змінюються при hover, focus, `:focus-visible` і `:checked`, без використання `transition: all`
- Перевірено доступність з клавіатури: навігація Tab, помітний фокус, увімкнення чекбоксу клавішею Space
- Перевірено відсутність помилок HTML-коду валідатором W3C та відформатовано код через Prettier
- Опубліковано проєкт на GitHub Pages, посилання додано в секцію About репозиторія
