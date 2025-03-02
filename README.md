# Hydra | Personal Portfolio Website

![Project Preview](https://i.imgur.com/cXXXXXX.png)

**Live Demo:** [https://batuhanerogl-e1gy0ighl-hhydraaas-projects.vercel.app](https://batuhanerogl-e1gy0ighl-hhydraaas-projects.vercel.app)

## ✨ Overview

This is a modern, responsive personal portfolio website built with Next.js, TypeScript, and Tailwind CSS. It features a clean, professional design with smooth animations, interactive background effects, and support for both English and Turkish languages.

The website is designed to showcase personal information, skills, projects, and provide a contact form for potential clients or employers to get in touch.

## 🚀 Features

- **Responsive Design**: Fully responsive on all devices from mobile to desktop
- **Bilingual Support**: Toggle between English and Turkish with smooth text transitions
- **Interactive UI Elements**:
  - Animated squares background with hover effects
  - Smooth scroll navigation
  - Text transition animations during language changes
- **Modern UI Components**:
  - Hero section with animated text
  - Skills cards
  - Project showcase
  - Contact form with validation
  - Thank you modal after form submission
- **Dark/Light Mode**: Adapts to user's system preferences
- **Performance Optimized**: Fast loading times and smooth interactions

## 🛠️ Technologies Used

- **Frontend Framework**: [Next.js 14](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Form Handling**: FormSubmit
- **Deployment**: [Vercel](https://vercel.com/)
- **Animations**: Custom CSS animations and transitions
- **Icons**: SVG icons

## 📋 Project Structure

```
bio-next/
├── app/              # Main application code
│   ├── components/   # Reusable UI components
│   ├── contexts/     # Context providers (language)
│   ├── lib/          # Utility functions
│   ├── globals.css   # Global styles
│   ├── layout.tsx    # Root layout component
│   └── page.tsx      # Home page component
├── public/           # Static assets
│   └── images/       # Image assets
├── tailwind.config.ts # Tailwind configuration
└── package.json      # Project dependencies
```

## 🔧 Key Components

1. **Language Switcher**: Toggle between English and Turkish languages with smooth text transitions
2. **Navigation**: Responsive navbar with mobile menu
3. **Squares Background**: Interactive animated background with hover effects
4. **Project Cards**: Showcase of personal projects with details
5. **Contact Form**: Form for visitors to send messages directly
6. **Thank You Modal**: Confirmation modal after form submission

## 📦 Installation and Setup

### Prerequisites
- Node.js 18+ and npm

### Installation Steps

1. Clone the repository:
```bash
git clone https://github.com/yourusername/bio-next.git
cd bio-next
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Building for Production

```bash
npm run build
```

### Deployment

The easiest way to deploy this project is using the [Vercel Platform](https://vercel.com):

```bash
npm install -g vercel
vercel
```

## 🎨 Customization

- Edit personal information in `app/contexts/LanguageContext.tsx`
- Modify theme colors in `app/globals.css`
- Update projects in `app/page.tsx`
- Add or modify animations in `tailwind.config.ts`

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

For any questions or inquiries, feel free to reach out:

- **Email**: batuhaneroglu145@gmail.com
- **GitHub**: [https://github.com/hhydraaa](https://github.com/hhydraaa)
- **Instagram**: [https://www.instagram.com/batuhan13485/](https://www.instagram.com/batuhan13485/)

---

Built with ❤️ by Batuhan Eroğlu
