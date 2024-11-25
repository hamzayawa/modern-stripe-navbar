# Modern Stripe-Inspired Navigation 🚀

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=white)

A modern, animated navigation component inspired by Stripe's design system. Built with React, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

- 🎯 Pixel-perfect recreation of Stripe's navigation
- 📱 Fully responsive design with mobile-first approach
- 🎨 Smooth animations powered by Framer Motion
- 🌙 Customizable theming with Tailwind CSS
- 🎮 Interactive hover effects and transitions
- 📦 Tree-shakeable and optimized bundle
- 💻 TypeScript support for better developer experience
- 🔍 Accessible by default

## 🚀 Demo

[Live Demo](#) <!-- Add your demo link later -->

![Demo Preview](demo.gif) <!-- Create and add a demo GIF later -->

## 🛠️ Installation

```bash
# Using npm
npm install modern-stripe-nav

# Using yarn
yarn add modern-stripe-nav

# Using pnpm
pnpm add modern-stripe-nav
```

## 💻 Usage

```tsx
import { Navbar } from 'modern-stripe-nav';
import { productItems, solutionItems, developerItems, resourceItems } from './mockData';

function App() {
  return (
    <div className="app">
      <Navbar />
    </div>
  );
}
```

### Customizing Navigation Items

```tsx
// mockData.ts
import { CreditCard, Building2, ShoppingCart /* ... */ } from 'lucide-react';

export const productItems = [
  {
    title: "Global Payments",
    links: [
      { name: "Payments", icon: CreditCard },
      // ... more items
    ]
  }
  // ... more sections
];
```

## 🎨 Customization

The component uses Tailwind CSS for styling and can be customized using your project's `tailwind.config.js`:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        text: 'var(--text)',
        // ... your custom colors
      },
    },
  },
};
```

## 📚 API Reference

### Navbar Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | string | undefined | Additional classes to apply to the navbar |
| logo | ReactNode | 'Stripe' | Custom logo component |
| menuData | MenuData | defaultMenuData | Navigation menu structure |

### DropdownMenu Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| title | string | required | Title of the dropdown section |
| items | MenuItem[] | required | Array of menu items |

## 🤝 Contributing

Contributions are welcome! Please read our [contributing guidelines](CONTRIBUTING.md) to get started.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by [Stripe's](https://stripe.com) navigation design
- Built with [React](https://reactjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- Icons from [Lucide](https://lucide.dev/)

## 🌟 Support

If you found this helpful, please consider giving it a star ⭐️ to show your support!

[Report Bug](https://github.com/yourusername/modern-stripe-nav/issues) · [Request Feature](https://github.com/yourusername/modern-stripe-nav/issues)
