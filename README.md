# UnboundB2B - Business Solutions Website

A modern, responsive B2B website built with Next.js and React, showcasing business solutions and services for ATSU Information Technology.

## 🚀 Features

- **Fully Responsive Design**: Optimized for all device sizes (mobile, tablet, desktop)
- **Modern UI/UX**: Clean and professional design with smooth animations
- **Component-Based Architecture**: Modular and reusable React components
- **Performance Optimized**: Built with Next.js for optimal loading speeds
- **SEO Friendly**: Structured for search engine optimization
- **Interactive Elements**: Dynamic navigation, FAQ accordions, and contact forms

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) 16.0.3
- **UI Library**: [React](https://react.dev/) 19.2.0
- **Language**: [TypeScript](https://www.typescriptlang.org/) 5
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) 4
- **Image Optimization**: Next.js Image component
- **Code Quality**: ESLint

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

## 🏃 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/PrathamJain2002/UnboundB2B.git
cd UnboundB2B/web
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Run the Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### 4. Build for Production

```bash
npm run build
# or
yarn build
```

### 5. Start Production Server

```bash
npm start
# or
yarn start
```

## 📁 Project Structure

```
web/
├── public/                 # Static assets (images, icons)
│   ├── Grid.png
│   ├── Vector 1.png
│   ├── Image Background.png
│   ├── Image Forground.png
│   ├── Logo-Lift-2022-B.png
│   └── ...
├── src/
│   ├── app/               # Next.js app directory
│   │   ├── page.tsx      # Main page component
│   │   ├── layout.tsx     # Root layout
│   │   └── globals.css    # Global styles
│   └── components/        # React components
│       ├── header.tsx     # Navigation header
│       ├── home.tsx       # Homepage section
│       ├── features.tsx   # Features section
│       ├── who.tsx        # Who we are section
│       ├── growth.tsx     # Growth section
│       ├── projects.tsx   # Projects showcase
│       ├── seo.tsx        # SEO section with FAQ
│       ├── fact.tsx       # Facts section
│       ├── support.tsx    # Support section
│       ├── call.tsx       # Contact form
│       └── footer.tsx     # Footer component
├── package.json
├── tsconfig.json
└── README.md
```

## 🎨 Components Overview

### Header
- Responsive navigation menu
- Mobile hamburger menu
- Active tab highlighting
- Logo integration

### Home
- Hero section with gradient background
- Two-column layout (text + image)
- Partner showcase
- Decorative grid and vector overlays

### Features
- Service features display

### Projects
- Project carousel
- Responsive project cards
- Pagination indicators

### SEO
- SEO optimization section
- Interactive FAQ accordion
- Expandable/collapsible content

### Call
- Contact form
- "Ready to Work Together" section
- Form validation

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🚀 Deployment

### Deploy to Vercel

The easiest way to deploy this Next.js app is to use [Vercel](https://vercel.com/):

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com/new)
3. Vercel will automatically detect Next.js and configure the build settings
4. Your site will be live!

### Manual Deployment

You can also deploy using the Vercel CLI:

```bash
npm i -g vercel
vercel
```

## 🎯 Key Features Implementation

- **Responsive Design**: All components use Tailwind CSS responsive utilities (`sm:`, `md:`, `lg:`, `xl:`)
- **Image Optimization**: Next.js Image component for optimized image loading
- **Type Safety**: Full TypeScript support for type-safe development
- **Modern Styling**: Tailwind CSS utility classes with custom styles
- **Interactive UI**: State management with React hooks for dynamic interactions

## 📝 License

This project is private and proprietary.

## 👤 Author

**Pratham Jain**

- GitHub: [@PrathamJain2002](https://github.com/PrathamJain2002)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons and images from project assets

---

For more information about Next.js, check out the [Next.js documentation](https://nextjs.org/docs).
