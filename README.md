# مصادر (msader-next)

A comprehensive Arabic resource platform built with [Next.js](https://nextjs.org/). The site provides curated articles, book recommendations, useful websites, mobile apps, and computer programs to help users in their work, studies, and personal development.

## Features

- **Curated Content:** Articles, books, websites, and apps, organized by sections and categories.
- **Search:** Quickly find resources using the built-in search functionality.
- **FAQ & Contact:** Dedicated pages for frequently asked questions and contacting the team.
- **Newsletter Subscription:** Users can subscribe to updates via email.
- **Modern UI:** Responsive design with custom cards and layout components.
- **Error Handling:** User-friendly error messages and notifications.

## Project Structure

- `pages/` — Main Next.js pages (home, search, contact, faqs, privacy, suggest, articles, sections)
- `components/` — Reusable UI components (cards, layout, forms, error handling)
- `utils/` — API handling utilities
- `styles/` — SCSS and CSS files for styling
- `public/` — Static assets (images, icons, SVGs)

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

- `npm run dev` — Start the development server
- `npm run build` — Build for production
- `npm start` — Start the production server
- `npm run lint` — Run ESLint

## Tech Stack

- [Next.js 13](https://nextjs.org/)
- [React 18](https://react.dev/)
- [Formik](https://formik.org/) & [Yup](https://github.com/jquense/yup) for forms and validation
- [Axios](https://axios-http.com/) for API requests
- [Sass/SCSS](https://sass-lang.com/) for styling
- [React Toastify](https://fkhadra.github.io/react-toastify/) for notifications
- [Swiper](https://swiperjs.com/) for carousels

## Customization

- Edit content and sections in the `pages/` and `components/` folders.
- Update styles in `styles/globals.scss` and related SCSS files.
- Add or update static assets in the `public/` directory.

## License

This project is private and not licensed for redistribution.
