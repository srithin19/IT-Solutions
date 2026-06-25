# Project Structure Documentation

## Overview

This document explains the folder structure and organization of the IT Consulting Website boilerplate.

## Directory Structure

```
it-consulting-website/
│
├── public/                          # Static assets served directly
│   └── (add your images, icons, etc.)
│
├── src/                             # Source code directory
│   │
│   ├── components/                  # React components
│   │   ├── layout/                 # Layout components
│   │   │   ├── __tests__/         # Layout component tests
│   │   │   │   ├── Header.test.tsx
│   │   │   │   └── Footer.test.tsx
│   │   │   ├── Header.tsx          # Main navigation header
│   │   │   ├── Footer.tsx          # Site footer with links
│   │   │   └── Layout.tsx          # Main layout wrapper component
│   │   │
│   │   └── ui/                     # Reusable UI components
│   │       ├── __tests__/          # UI component tests
│   │       │   └── ServiceCard.test.tsx
│   │       ├── Button.tsx          # Customizable button component
│   │       ├── ServiceCard.tsx     # Card for displaying services
│   │       └── Section.tsx         # Animated section wrapper
│   │
│   ├── pages/                      # Page-level components
│   │   ├── Home.tsx               # Homepage with hero, services, stats
│   │   ├── About.tsx              # About page with mission, vision, values
│   │   ├── Services.tsx           # Services listing page
│   │   ├── Solutions.tsx          # IT solutions page
│   │   ├── DigitalMarketing.tsx   # Digital marketing services
│   │   └── Contact.tsx            # Contact form and info
│   │
│   ├── data/                       # Static data and configuration
│   │   └── constants.ts           # Navigation items, services, solutions, contact info
│   │
│   ├── types/                      # TypeScript type definitions
│   │   └── index.ts               # All TypeScript interfaces and types
│   │
│   ├── utils/                      # Utility functions
│   │   └── helpers.ts             # Helper functions (cn, scroll, format)
│   │
│   ├── test/                       # Test setup and configuration
│   │   └── setup.ts               # Vitest setup file
│   │
│   ├── App.tsx                     # Root component with routing
│   ├── main.tsx                    # Application entry point
│   └── index.css                   # Global styles and Tailwind directives
│
├── node_modules/                   # Dependencies (auto-generated)
│
├── .gitignore                      # Git ignore rules
├── package.json                    # Project dependencies and scripts
├── package-lock.json               # Dependency lock file
├── tsconfig.json                   # TypeScript configuration (root)
├── tsconfig.app.json              # TypeScript configuration (app)
├── tsconfig.node.json             # TypeScript configuration (node)
├── tailwind.config.js             # Tailwind CSS configuration
├── postcss.config.js              # PostCSS configuration
├── vite.config.ts                 # Vite build tool configuration
├── vitest.config.ts               # Vitest testing configuration
└── README.md                       # Project documentation
```

## Component Organization

### Layout Components (`src/components/layout/`)

Components that define the overall structure of the application:

- **Header.tsx**: Navigation bar with responsive menu, dropdowns
- **Footer.tsx**: Footer with links, social media, contact info
- **Layout.tsx**: Wrapper that includes Header and Footer

### UI Components (`src/components/ui/`)

Reusable, generic components used throughout the app:

- **Button.tsx**: Versatile button with multiple variants
- **ServiceCard.tsx**: Card component for displaying services
- **Section.tsx**: Animated section wrapper with fade-in effects

### Pages (`src/pages/`)

Full-page components representing different routes:

- **Home.tsx**: Landing page with hero, services, CTA
- **About.tsx**: Company information, mission, vision
- **Services.tsx**: IT services catalog
- **Solutions.tsx**: Technology solutions overview
- **DigitalMarketing.tsx**: Marketing services
- **Contact.tsx**: Contact form and information

## Data Management

### Constants (`src/data/constants.ts`)

Centralized data store containing:

- Navigation menu structure
- Service definitions
- Solution listings
- Contact information

This approach makes it easy to update content without modifying components.

## Type Definitions (`src/types/`)

TypeScript interfaces for:

- Navigation items
- Services and solutions
- Testimonials
- Contact information

## Utilities (`src/utils/`)

Helper functions:

- `cn()`: Class name merger using clsx
- `scrollToTop()`: Smooth scroll to top
- `formatPhoneNumber()`: Phone number formatting

## Testing Structure

Each component directory includes a `__tests__/` folder with test files:

- Tests use Vitest and React Testing Library
- Follow the pattern: `ComponentName.test.tsx`
- Tests check rendering, props, and user interactions

## Configuration Files

### TypeScript (`tsconfig.*.json`)

- `tsconfig.json`: Root configuration
- `tsconfig.app.json`: Application-specific config with path aliases
- `tsconfig.node.json`: Node.js tooling configuration

### Styling (`tailwind.config.js`)

- Custom color schemes (primary, secondary)
- Custom fonts (Inter, Poppins)
- Custom animations
- Extended utilities

### Build Tool (`vite.config.ts`)

- React plugin configuration
- Path alias resolution (@/ → ./src/)
- Build optimizations

### Testing (`vitest.config.ts`)

- Test environment setup (jsdom)
- Path alias support for tests
- Coverage configuration

## Routing Structure

```
/ (Home)
├── /about
├── /services
│   └── /services/:serviceId (dynamic)
├── /solutions
│   └── /solutions/:solutionId (dynamic)
├── /digital-marketing
│   └── /digital-marketing/:serviceId (dynamic)
└── /contact
```

## Best Practices Followed

1. **Separation of Concerns**: Components, pages, data, and utilities are separate
2. **Reusability**: Common components in `ui/` folder
3. **Type Safety**: Comprehensive TypeScript types
4. **Testability**: Test files alongside components
5. **Scalability**: Clear folder structure for growth
6. **Maintainability**: Centralized data and configuration
7. **Performance**: Lazy loading ready, optimized builds

## Adding New Components

### For a new UI component:

1. Create `src/components/ui/NewComponent.tsx`
2. Create `src/components/ui/__tests__/NewComponent.test.tsx`
3. Export from appropriate index if needed

### For a new page:

1. Create `src/pages/NewPage.tsx`
2. Add route in `src/App.tsx`
3. Add navigation link in `src/data/constants.ts` (if needed)

### For new data:

1. Add type definition in `src/types/index.ts`
2. Add data in `src/data/constants.ts`
3. Import and use in components

## Customization Guide

### Changing Colors:

Edit `tailwind.config.js` → `theme.extend.colors`

### Changing Fonts:

1. Update Google Fonts import in `src/index.css`
2. Update font family in `tailwind.config.js`

### Adding Animations:

Define new animations in `tailwind.config.js` → `theme.extend.animation`

### Updating Content:

Modify data in `src/data/constants.ts`

## Scripts Reference

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run tests
- `npm run test:ui` - Run tests with UI
- `npm run lint` - Run linter

---

This structure follows React best practices and is designed for scalability and maintainability.
