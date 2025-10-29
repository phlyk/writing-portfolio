# CopyWrite Pro Portfolio

A modern, animated React SPA portfolio website for copywriting services. Built with React, TypeScript, Vite, and Framer Motion.

## 🚀 Features

- **Modern Design**: Beautiful gradient color scheme inspired by the brain/tree logo
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Responsive Layout**: Mobile-first design that works on all devices
- **Single Page Application**: Fast navigation with React Router
- **GitHub Pages Ready**: Configured for easy deployment to GitHub Pages
- **TypeScript**: Type-safe development with excellent developer experience

## 🎨 Design

The website uses a stunning gradient color palette:
- Primary: Blue to Cyan gradient (#4facfe → #00f2fe)
- Secondary: Purple gradient (#667eea → #764ba2)
- Accent: Pink to Red gradient (#f093fb → #f5576c)

## 📱 Sections

1. **Landing**: Hero section with services overview
2. **About**: Personal story, skills, and process
3. **Blog**: Content marketing blog with articles
4. **Hire Me**: Contact form and service packages

## 🛠️ Tech Stack

- **React 19** - UI Library
- **TypeScript** - Type Safety
- **Vite** - Build Tool
- **Framer Motion** - Animations
- **React Router** - Navigation
- **CSS3** - Styling with modern features

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd JamesPortfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

## 🌐 Deployment

The project is configured for GitHub Pages deployment:

1. Update the `base` in `vite.config.ts` to match your repository name
2. Run the deployment command:
```bash
npm run deploy
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.tsx      # Navigation component
│   ├── Landing.tsx     # Hero/Landing section
│   ├── About.tsx       # About section
│   ├── Blog.tsx        # Blog section
│   ├── HireMe.tsx      # Contact/Hire section
│   └── Footer.tsx      # Footer component
├── App.tsx             # Main app component
├── App.css             # Global styles
├── index.css           # Base styles
└── main.tsx           # App entry point
```

## 🎯 Customization

### Content
Replace the lorem ipsum text in each component with your actual copy:
- Update service descriptions in `Landing.tsx`
- Add your personal story in `About.tsx`
- Replace blog posts in `Blog.tsx`
- Customize services and form in `HireMe.tsx`

### Styling
- Colors are defined as CSS custom properties in `App.css`
- Component-specific styles are inline for easier customization
- Responsive breakpoints: 768px (tablet) and 480px (mobile)

### Animations
Framer Motion animations are configured with:
- Fade in effects on scroll
- Hover interactions
- Page transitions
- Stagger animations for lists

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📞 Contact

For questions about this portfolio template, please open an issue or contact the developer.
