# Adtivio - Premium Digital Marketing Agency Landing Page

## Overview

A stunning, ultra-modern landing page for Adtivio featuring premium animations, cybernetic luxury design, and a fully functional programmatic advertising ecosystem showcase.

### 🎨 Features

- **Premium Design**: Deep cybernetic luxury theme with neon gradients (violet → cyan)
- **Smooth Animations**: 60fps Framer Motion animations with zero layout shifts
- **Responsive**: Mobile-first design for all screen sizes
- **Static Deployment**: GitHub Pages optimized (pure HTML/CSS/JS)
- **Modern Icons**: Lucide React for crisp, scalable icons
- **Interactive Elements**: Glassmorphic effects, hover states, scroll animations
- **Lead Generation**: Fully integrated Formspree form submission

### 📋 Sections

1. **Premium Navbar** - Glassmorphic sticky header with smooth interactions
2. **Hero Section** - Explosive entrance with dual CTAs
3. **Services Grid** - Meta Ads & Google Ads solutions with cascade animations
4. **Programmatic Ecosystem** - Interactive tabs (DSP/SSP/CTV) with smooth transitions
5. **Contact Form** - Floating labels, validation, and email integration
6. **Footer** - Contact info and quick links

### 🚀 Getting Started

#### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

#### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/Om-abhyankar/adtivio-landing.git
   cd adtivio-landing
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production**
   ```bash
   npm run build
   ```

### 📦 Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript
- **Deployment**: GitHub Pages

### 🌐 Live Deployment

The site automatically deploys to GitHub Pages via GitHub Actions whenever you push to the `main` branch.

**Live URL**: `https://Om-abhyankar.github.io/adtivio-landing`

### 🔧 Configuration

#### Adding Your Domain

1. Go to your GitHub repository settings
2. Navigate to "Pages" section
3. Under "Custom domain", enter your domain name
4. Add DNS CNAME record pointing to `Om-abhyankar.github.io`

#### Updating Form Endpoint

The contact form uses Formspree for email gateway. To update:

1. Visit [https://formspree.io/](https://formspree.io/)
2. Create a free account
3. Update the form endpoint in `app/components/ContactForm.tsx`:
   ```javascript
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
   ```

#### Editing Contact Information

Update mock contact data in `app/components/Footer.tsx`:
- Email: `hello@adtivio.com`
- Phone: `+1-555-0123`
- Location: `San Francisco, CA`

### 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

### ⚡ Performance

- 60fps animations with hardware acceleration
- Zero layout shifts during scroll
- Optimized SVG particle network background
- Minimal JavaScript bundle size
- CSS transforms for smooth interactions

### 📄 License

This project is private and proprietary to Adtivio.

### 📞 Support

For questions or issues, contact: hello@adtivio.com
