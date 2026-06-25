# Quick Start Guide

## 🚀 Getting Started in 3 Steps

### 1. Navigate to the Project

```bash
cd it-consulting-website
```

### 2. Start Development Server

```bash
npm run dev
```

Your site will be available at: **http://localhost:5173/**

### 3. Start Building!

Open the project in your code editor and start customizing.

---

## 📝 Quick Customization Checklist

### Essential Updates

#### 1. Company Information

**File:** `src/data/constants.ts`

```typescript
export const contactInfo: ContactInfo = {
  address: "Your company address",
  phone: "Your phone number",
  email: "your@email.com",
};
```

#### 2. Brand Colors

**File:** `tailwind.config.js`

```javascript
colors: {
  primary: {
    // Update with your brand colors
    500: '#your-color',
    600: '#your-darker-color',
  },
}
```

#### 3. Company Name & Logo

**Files to update:**

- `src/components/layout/Header.tsx` (line 36)
- `src/components/layout/Footer.tsx` (line 16)

Replace "TLS-IT" with your company name.

#### 4. Services & Solutions

**File:** `src/data/constants.ts`

Update the `services` and `solutions` arrays with your offerings.

#### 5. Page Content

Update text in these files:

- `src/pages/Home.tsx` - Homepage hero text
- `src/pages/About.tsx` - Company story
- `src/pages/Services.tsx` - Service descriptions
- `src/pages/Solutions.tsx` - Solution details
- `src/pages/DigitalMarketing.tsx` - Marketing services

---

## 🎨 Styling Guide

### Using Tailwind Classes

```tsx
<div className="bg-primary-600 text-white p-6 rounded-lg">Content</div>
```

### Custom Button Variants

```tsx
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
```

### Responsive Design

```tsx
<div className="text-sm md:text-base lg:text-lg">Responsive text</div>
```

---

## 🧩 Adding New Features

### Add a New Page

1. Create `src/pages/NewPage.tsx`
2. Add route in `src/App.tsx`:

```tsx
<Route path="new-page" element={<NewPage />} />
```

3. Add to navigation in `src/data/constants.ts`

### Add a New Component

1. Create `src/components/ui/NewComponent.tsx`
2. Use it in your pages:

```tsx
import NewComponent from "@/components/ui/NewComponent";
```

---

## 🔧 Common Commands

```bash
# Development
npm run dev              # Start dev server

# Build
npm run build           # Create production build
npm run preview         # Preview production build

# Testing
npm run test            # Run tests
npm run test:ui         # Run tests with UI
npm run test:coverage   # Run tests with coverage

# Code Quality
npm run lint            # Run linter
```

---

## 📁 Key Files to Know

| File                               | Purpose                     |
| ---------------------------------- | --------------------------- |
| `src/App.tsx`                      | Main routing configuration  |
| `src/data/constants.ts`            | All your content data       |
| `tailwind.config.js`               | Design system configuration |
| `src/components/layout/Header.tsx` | Navigation bar              |
| `src/components/layout/Footer.tsx` | Footer section              |
| `src/pages/Home.tsx`               | Homepage                    |

---

## 🎯 Next Steps

1. ✅ Update company information
2. ✅ Customize colors and fonts
3. ✅ Add your content and images
4. ✅ Update services and solutions
5. ✅ Test on mobile devices
6. ✅ Add your logo
7. ✅ Deploy to hosting

---

## 💡 Pro Tips

### Animations

All sections have smooth fade-in animations. They trigger when scrolling into view.

### Path Aliases

Use `@/` to import from `src/`:

```tsx
import Button from "@/components/ui/Button";
```

### Mobile-First

All components are mobile-responsive by default. Test on different screen sizes.

### Performance

Images should be optimized before adding to `public/` folder.

---

## 🆘 Troubleshooting

### Port Already in Use

If port 5173 is busy:

```bash
# Kill the process or Vite will suggest another port
```

### Type Errors

```bash
# Clear TypeScript cache
rm -rf node_modules/.cache
```

### Build Errors

```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

---

## 📚 Learn More

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [React Router](https://reactrouter.com/)

---

**Happy Coding! 🎉**

Need help? Check `README.md` and `PROJECTSTRUCTURE.md` for detailed documentation.
