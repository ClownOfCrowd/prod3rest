# Aurelien Restaurant Website

Production-ready portfolio website concept for a premium restaurant, built with Next.js App Router, TypeScript, and Tailwind CSS.

This project focuses on realistic restaurant UX, multilingual content, and a polished reservation journey. The interface is cinematic and atmospheric, but still practical for daily use.

## What is inside

- Full website structure with core pages:
	- Home
	- Menu
	- About
	- Chef
	- Gallery
	- Reservations
	- Contact
- Deep multilingual support:
	- English
	- Spanish
	- Russian
- Extended interactive menu experience:
	- Rich dish data (ingredients, allergens, calories, macros, tags)
	- Filters and service toggle (Lunch / Dinner)
	- Dish detail modal
	- Seasonal specials, chef picks, wine pairing
- Enhanced homepage storytelling:
	- Philosophy and sourcing
	- Chef story and dining experience
	- Private events and gift cards
	- Gallery split by mood
	- Location and opening-hours intelligence (today + open/closed)
	- FAQ and micro-sections
- Reservation UX improvements:
	- Sticky mobile reserve action
	- Floating reserve button (desktop)
	- Fast reservation modal with improved success state
	- Quick prefill from popular time slots

## Tech stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion (light usage)
- JSON/TS-based i18n content architecture

## Local development

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Quality checks

Lint:

```bash
npm run lint
```

Production build:

```bash
npm run build
```

## Project notes

- Design system is intentionally consistent across pages and was preserved while expanding content and UX.
- Menu module is isolated and reusable, so new dishes/categories can be extended without rewriting UI.
- Content is written to feel realistic and brand-consistent for a premium restaurant concept.

## Repository

Target repository URL:

https://github.com/ClownOfCrowd/prod3rest
