# ООО «Независимость» — React + Vite

Запуск: `npm install` и `npm run dev`.

## Структура

- `src/App.jsx` — маршрутизация страниц.
- `src/pages/Home/Home.jsx` — сборка главной страницы из блоков.
- `src/pages/Services`, `Contacts`, `NotFound` — остальные страницы.
- `src/components/Header`, `Footer`, `Logo` — общие элементы.
- `src/components/Hero`, `EquipmentSection`, `WhyChooseUs`, `ContactBanner`, `AboutSection` — секции главной страницы.
- `src/components/RequestForm`, `EquipmentCard` — переиспользуемые элементы.
- `src/data/equipment.js` — данные каталога.
- `src/assets/main-hero-block.png` — актуальный пользовательский главный баннер (сохранён без изменений).

У каждого компонента и страницы есть отдельные `.jsx` и `.css` файлы. Общие стили пока находятся в `src/App.css`, локальные настройки изображений и размеров — в стилях соответствующих компонентов.
