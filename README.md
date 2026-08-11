# GoIT homework 6 - WebStudio landing page (Adaptive & Responsive)

Responsive and adaptive landing page for WebStudio — HTML/CSS homework assignment #6 for the GoIT course. Focuses on Mobile First strategy, media queries (`min-width`), high-DPI (Retina @1x/@2x) graphics, mobile menu modal pattern, and flexible layout without horizontal scrolling down to 320px.

**What was done:**
- Created repository `goit-markup-hw-06` based on the `goit-markup-hw-05` project structure
- Implemented **Mobile First** architecture with breakpoints at `320px`, `768px`, and `1158px` using `min-width` media queries (and precise `(max-width: ...)` bounds where isolated styles were required)
- Added `<meta name="viewport" content="width=device-width, initial-scale=1.0">` for accurate screen scaling across mobile and desktop devices
- Connected minified `modern-normalize.min.css` to ensure cross-browser consistency
- Integrated responsive content images using `src` and `srcset` attributes with `1x` and `2x` resolution descriptors for High-DPI / Retina screens
- Configured dynamic Hero section background images using CSS `image-set()` for mobile, tablet, and desktop viewports in both `@1x` and `@2x` resolutions
- Built an isolated **Mobile Menu** placed directly after `<footer>`:
  - Styled in a separate `mobile-menu.css` file
  - Spans `100vw` / `100vh` full viewport
  - Hidden by default and toggled via the `.is-open` utility class
  - Fully equipped with close button, navigation links, contact details, and social icons
- Controlled mobile Header height organically via vertical `padding` on the logo element
- Fixed "Our Team" section cards to a precise `264px` width across all screen resolutions (mobile, tablet, desktop)
- Ensured the interactive overlay effect on Portfolio cards functions seamlessly across all viewport widths
- Extracted and modularized styles into dedicated files within the `css/` directory (`main.css`, `mobile-menu.css`, `modal.css`, etc.) with clean ASCII naming
- Eliminated horizontal scrollbar across the entire range from `320px` to widescreen monitors
- Validated HTML code via W3C Markup Validation Service and formatted all source files with Prettier
- Deployed the responsive website to GitHub Pages and added the live page URL to the repository's About section

============================================================================

# Домашнє завдання 6 GoIT — Адаптивний лендінг WebStudio

Адаптивна та респонсивна верстка лендінгу WebStudio — домашнє завдання #6 з курсу HTML/CSS від GoIT. Проєкт реалізовано за підходом Mobile First з використанням медіа-запитів (`min-width`), ретіна-графіки (@1x/@2x), адаптивного мобільного меню та повного виключення горизонтальної прокрутки від 320px.

**Що зроблено:**
- Створено репозиторій `goit-markup-hw-06` на основі структури `goit-markup-hw-05`
- Застосовано підхід **Mobile First** із трьома основними точками перелому (breakpoints): `320px` (мобільний), `768px` (планшет) та `1158px` (десктоп) через медіа-запити `min-width`
- Додано обов'язковий метатег `viewport` у блоці `<head>` для правильного масштабування на мобільних пристроях
- Підключено мініфіковану версію нормалізатора `modern-normalize.min.css`
- Реалізовано адаптивну контентну графіку за допомогою атрибутів `src` + `srcset` з дескрипторами щільності пікселів `1x` та `2x` для Retina-екранів
- Налаштовано фонові зображення для секції **Hero** за допомогою CSS-функції `image-set()`, із окремими графічними ресурсами для мобільних пристроїв, планшетів і десктопа у версіях `@1x` та `@2x`
- Створено **Мобільне меню** у вигляді окремого блоку розмітки одразу після `<footer>`:
  - Стилі винесено в окремий файл `mobile-menu.css`
  - Меню займає весь в'юпорт (`100vw` / `100vh`)
  - За замовчуванням приховано, відкриття/закриття регулюється класом `.is-open`
  - Містить кнопку закриття, навігацію, контакти та блок соціальних мереж
- Висота хедера для мобільних пристроїв сформована за рахунок вертикальних падінгів логотипу
- У секції "Our Team" картки мають чітко зафіксовану ширину `264px` на всіх роздільностях екрана
- Збережено та адаптовано анімований оверлей для карток секції Portfolio на всіх ширинах екрана
- Усі стилі розбиті по відповідних файлах у папці `css/` з дотриманням латинських назв без пробілів чи кирилиці
- Перевірено відсутність горизонтальної смуги прокручування на ширинах від 320px і вище
- Код перевірено на відсутність помилок валідатором W3C HTML Validator та відформатовано за допомогою Prettier
- Налаштовано публікацію проєкту на GitHub Pages та додано актуальне посилання на живу сторінку в секцію About репозиторія
