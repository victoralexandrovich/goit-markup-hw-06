# GoIT homework 4 - WebStudio landing page

WebStudio landing page interactive elements, vector graphics, positioning & animations — HTML/CSS homework assignment #4 for the GoIT course. Focuses on SVG sprites, CSS transitions, absolute positioning, overlays, pseudo-elements, and multi-layer backgrounds.

**What was done:**
- Created repository `goit-markup-hw-04` using `goit-markup-hw-03` as a Template
- Set up development workflow with Live Server to ensure correct local SVG sprite fetching (`icons.svg`)
- Exported and assembled SVG icons into a single sprite using IcoMoon (`images/icons.svg`), rendering them via `<svg>` and `<use>` with explicit dimensions
- Styled Hero section background with a multi-layered CSS background: linear gradient overlay combined with a centered, non-repeating cover background image (`max-width: 1440px`)
- Built decorative icon containers for the Features section using Flexbox alignment and custom background/border-radius settings
- Implemented social network icon lists in the Team and Footer sections with circular interactive containers, smooth hover/focus color shifts using `currentColor`
- Created active navigation item styling (`.current` / `.active`) with text highlight and decorative underline via positioned `::after` pseudo-element
- Applied soft box shadows (`box-shadow`) to buttons, Team section cards, and hover states for Portfolio cards
- Developed sliding text overlay animation for Portfolio project cards: relative parent container with hidden overflow (`overflow: hidden`), absolute overlay positioning with `transform: translateY(100%)`, sliding up to `0%` on card hover
- Added smooth CSS transitions (`transition: [properties] 250ms cubic-bezier(0.4, 0, 0.2, 1)`) to all interactive state properties (`color`, `background-color`, `box-shadow`, `transform`) on base state selectors
- Aligned Footer blocks using horizontal margin spacing according to requirements
- Validated HTML markup via W3C HTML Validator and formatted all files with Prettier
- Deployed the project on GitHub Pages and updated the live page link in the repository's About section

============================================================================

# Домашнє завдання 4 GoIT — лендінг WebStudio

Декоративні елементи, векторна графіка, позиціонування та анімації лендінгу WebStudio — домашнє завдання #4 з курсу HTML/CSS від GoIT. Реалізовано SVG-спрайт, CSS-переходи, абсолютне позиціонування, оверлей, псевдоелементи та багатошаровий фон.

**Що зроблено:**
- Створено репозиторій `goit-markup-hw-04` на основі шаблону `goit-markup-hw-03`
- Налаштовано робочий процес із запускa сторінки через Live Server для коректного зчитування локального SVG-спрайту (`icons.svg`)
- Експортовано векторні іконки та зібрано їх у єдиний SVG-спрайт через IcoMoon (`images/icons.svg`), підключено їх в HTML за допомогою тегів `<svg>` і `<use>` із явним завданням розмірів
- Оформлено багатошаровий фон секції Hero в CSS: напівпрозорий градієнт поверх відцентрованого фонового зображення без повторів (`max-width: 1440px`)
- Створено однакові декоративні контейнери для іконок у секції Переваги з центруванням посібником Flexbox та відповідними фонами
- Додано списки соціальних мереж у секціях Команда та Футер з круглими інтерактивними посиланнями, що змінюють колір іконки через `currentColor` при hover/focus
- Оформлено активне посилання навігації (`.current` / `.active`) із синім кольором та декоративним підкресленням через псевдоелемент `::after`
- Налаштовано плавні тіні (`box-shadow`) для кнопок, карток Команди та появу тіні при наведенні на картку Портфоліо
- Реалізовано виїжджаючий текстовий overlay у картках Портфоліо: батьківський контейнер з `position: relative` та `overflow: hidden`, позиціонування оверлею через `transform: translateY(100%)` із поверненням у `0%` при hover картки
- Додано плавні CSS-переходи (`transition: [властивості] 250ms cubic-bezier(0.4, 0, 0.2, 1)`) для всіх інтерактивних властивостей (`color`, `background-color`, `box-shadow`, `transform`) у базовому стані елементів
- Згруповано та вирівняно блоки в Footer за допомогою горизонтальних `margin` відповідно до вимог ДЗ
- Перевірено відсутність помилок HTML-коду за допомогою валідатора W3C та відформатовано код через Prettier
- Опубліковано оновлену версію на GitHub Pages, а посилання додано в секцію About репозиторія
