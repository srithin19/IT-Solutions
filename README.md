# IT Consulting Website

A modern, responsive IT consulting website built with React, TypeScript, Tailwind CSS, and Framer Motion. Inspired by TLS-IT services, this boilerplate provides a professional foundation for IT service companies.

## 🚀 Features

- ⚡ **Vite** - Lightning-fast build tool
- ⚛️ **React 19** - Latest React version with improved performance
- 🔷 **TypeScript** - Type-safe code
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🎭 **Framer Motion** - Smooth animations and transitions
- 🧭 **React Router** - Client-side routing
- ✅ **Vitest** - Fast unit testing framework
- 📱 **Fully Responsive** - Mobile-first design approach
- 🎯 **SEO Optimized** - Clean semantic HTML structure
- ♿ **Accessible** - WCAG compliant components

## 📁 Project Structure

```
it-consulting-website/
├── public/                      # Static assets
├── src/
│   ├── components/             # Reusable components
│   │   ├── layout/            # Layout components
│   │   │   ├── __tests__/     # Layout component tests
│   │   │   ├── Header.tsx     # Navigation header
│   │   │   ├── Footer.tsx     # Site footer
│   │   │   └── Layout.tsx     # Main layout wrapper
│   │   └── ui/                # UI components
│   │       ├── __tests__/     # UI component tests
│   │       ├── Button.tsx     # Reusable button
│   │       ├── ServiceCard.tsx # Service card component
│   │       └── Section.tsx    # Section wrapper
│   ├── pages/                 # Page components
│   │   ├── Home.tsx          # Homepage
│   │   ├── About.tsx         # About page
│   │   ├── Services.tsx      # Services listing
│   │   ├── Solutions.tsx     # Solutions listing
│   │   ├── DigitalMarketing.tsx # Digital marketing services
│   │   └── Contact.tsx       # Contact form
│   ├── data/                 # Static data and constants
│   │   └── constants.ts      # Navigation, services, solutions data
│   ├── types/                # TypeScript type definitions
│   │   └── index.ts          # Type definitions
│   ├── utils/                # Utility functions
│   │   └── helpers.ts        # Helper functions
│   ├── test/                 # Test configuration
│   │   └── setup.ts          # Test setup file
│   ├── App.tsx               # Main App component with routing
│   ├── main.tsx              # Application entry point
│   └── index.css             # Global styles and Tailwind imports
├── .gitignore
├── package.json
├── tsconfig.json
├── tailwind.config.js         # Tailwind configuration
├── postcss.config.js          # PostCSS configuration
├── vite.config.ts             # Vite configuration
├── vitest.config.ts           # Vitest configuration
└── README.md
```

## 🛠️ Tech Stack

- **Frontend Framework:** React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Routing:** React Router DOM
- **Build Tool:** Vite
- **Testing:** Vitest, React Testing Library
- **Code Quality:** Oxlint

## 📦 Installation

1. **Navigate to the project directory:**

   ```bash
   cd it-consulting-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

## 🚀 Getting Started

### Development Server

Start the development server with hot reload:

```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

### Build for Production

Create an optimized production build:

```bash
npm run build
```

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

### Run Tests

Run unit tests:

```bash
npm run test
```

Run tests with UI:

```bash
npm run test:ui
```

Run tests with coverage:

```bash
npm run test:coverage
```

### Linting

Run the linter:

```bash
npm run lint
```

## 📄 Pages

### Home (`/`)

- Hero section with call-to-action
- Services overview
- Why choose us section
- Statistics showcase
- CTA section

### About (`/about`)

- Company overview
- Mission and vision
- Core values
- Team showcase (ready to add)

### Services (`/services`)

- IT Consultancy
- IT Support
- IT Audit
- Managed IT Services
- Cloud Solutions
- Cybersecurity

### Solutions (`/solutions`)

- Server Solutions
- Software Solutions
- Cloud Solutions (Microsoft 365, AWS, Azure)
- Data Solutions
- IP Telephony
- PBX Setup

### Digital Marketing (`/digital-marketing`)

- SEO Services
- Social Media Marketing
- Web Development
- Mobile App Development
- Google Ads Services
- Reputation Management

### Contact (`/contact`)

- Contact form
- Company information
- Business hours
- Location map (ready to add)

## 🎨 Customization

### Colors

Edit the color scheme in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Your primary colors
  },
  secondary: {
    // Your secondary colors
  },
}
```

### Fonts

The project uses Google Fonts (Inter and Poppins). To change fonts, update the import in `src/index.css`:

```css
@import url("https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700&display=swap");
```

### Content

Update company information in `src/data/constants.ts`:

```typescript
export const contactInfo: ContactInfo = {
  address: "Your address",
  phone: "Your phone",
  email: "Your email",
};
```

## 🧩 Component Usage

### Button Component

```tsx
import Button from "@/components/ui/Button";

<Button to="/contact" variant="primary">
  Contact Us
</Button>;
```

### Service Card

```tsx
import ServiceCard from "@/components/ui/ServiceCard";

<ServiceCard
  title="IT Consultancy"
  description="Expert IT consulting services"
  icon={<YourIcon />}
/>;
```

### Section Wrapper

```tsx
import Section from "@/components/ui/Section";

<Section className="bg-white">{/* Your content */}</Section>;
```

## 🧪 Testing

The project includes test examples for components. To add new tests:

1. Create a `__tests__` folder in your component directory
2. Create a test file: `ComponentName.test.tsx`
3. Write your tests using Vitest and React Testing Library

Example:

```tsx
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import YourComponent from "../YourComponent";

describe("YourComponent", () => {
  it("renders correctly", () => {
    render(<YourComponent />);
    expect(screen.getByText("Hello")).toBeInTheDocument();
  });
});
```

## 🎯 Best Practices Implemented

1. **Component Organization** - Logical separation of layout, UI, and page components
2. **Type Safety** - Full TypeScript implementation with proper types
3. **Reusability** - DRY principle with reusable components
4. **Performance** - Code splitting and lazy loading ready
5. **Accessibility** - Semantic HTML and ARIA attributes
6. **Responsive Design** - Mobile-first approach
7. **Testing** - Comprehensive test setup
8. **Clean Code** - ESLint configuration and consistent formatting

## 📱 Responsive Breakpoints

- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Design inspiration from [TLS-IT](https://www.tls-it.com/)
- Icons from Heroicons
- Fonts from Google Fonts

---

**Built with ❤️ using React + TypeScript + Tailwind CSS**
