# Blind Owl Flavour Co. - Content Website Frontend

A modern, responsive content website built with Next.js 15 and Tailwind CSS v4, featuring the rustic, artisanal aesthetics of Blind Owl Flavour Co. - a premium extract and syrup company based in Vancouver, BC.

## Features

- 🎨 **Artisanal Design**: Warm, rustic design that matches the craft food aesthetic
- 📱 **Responsive**: Mobile-first approach with responsive grid layouts
- ⚡ **Fast Performance**: Built with Next.js 15 for optimal performance
- 🎭 **Smooth Animations**: Subtle animations and hover effects
- 🔧 **Component-Based**: Modular React components for easy maintenance
- 🎯 **SEO Optimized**: Proper metadata and semantic HTML structure

## Brand Identity

### Blind Owl Flavour Co.

- **Tagline**: "Bold. Elevated. Effortless."
- **Mission**: Crafting bold, premium extracts and syrups that elevate everything they touch
- **Location**: Vancouver, BC (Strathcona)
- **Values**: No preservatives, flavour forward, nothing artificial, made in Vancouver

## Components

### Core Components

- **Header**: Navigation with mobile menu support
- **HeroSection**: Compelling hero with "Bold. Elevated. Effortless." tagline
- **FeaturesSection**: Feature showcase highlighting product benefits
- **TestimonialsSection**: Customer feedback from chefs and food professionals
- **BlogPreview**: Recipe and cooking inspiration content
- **CTASection**: Call-to-action encouraging visitors to shop
- **Footer**: Comprehensive footer with product links and company info

### Pages

- **Home**: Complete landing page with all sections
- **About**: Company information and brand story

## Design System

### Colors

- Primary: Amber (#d2691e) - Warm, earthy tones
- Secondary: Orange (#cd853f) - Rich, natural accents
- Background: Cream (#faf9f6) - Soft, warm base
- Text: Dark Brown (#2d1810) - Rich, readable text
- Accent: Warm Brown (#a0522d) - Natural, rustic feel

### Typography

- Font Family: Geist Sans (Google Fonts)
- Headings: Bold weights with responsive sizing
- Body: Optimized line heights for readability

### Layout

- Container: Max-width 120rem with responsive padding
- Grid: CSS Grid with responsive breakpoints
- Spacing: Consistent spacing scale (0.5rem to 2.5rem)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd content-website
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── about/
│   │   └── page.tsx          # About page
│   ├── globals.css            # Global styles and CSS variables
│   ├── layout.tsx             # Root layout
│   └── page.tsx               # Home page
└── components/
    ├── Header.tsx             # Navigation header
    ├── HeroSection.tsx        # Hero section with tagline
    ├── FeaturesSection.tsx    # Product features showcase
    ├── TestimonialsSection.tsx # Customer testimonials
    ├── BlogPreview.tsx        # Recipe and cooking content
    ├── CTASection.tsx         # Call-to-action
    └── Footer.tsx             # Site footer
```

## Customization

### Branding

- Update company name in Header and Footer components
- Modify color scheme in `globals.css` CSS variables
- Replace placeholder content with your actual content

### Content

- Edit component content in respective `.tsx` files
- Update metadata in `layout.tsx`
- Modify images and icons as needed

### Styling

- Customize CSS variables in `globals.css`
- Modify Tailwind classes in components
- Add custom animations and transitions

## Product Focus

This website is designed for a food company specializing in:

- **Simple Syrups**: For coffee, cocktails, and beverages
- **Culinary Extracts**: For baking and cooking
- **Savory Products**: For cooking and marinades
- **Breakfast Boosters**: For morning meals and beverages

## Target Audience

- Professional chefs and bakers
- Coffee shop owners and baristas
- Home cooks and food enthusiasts
- Bartenders and cocktail makers
- Food bloggers and content creators

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support or questions, please open an issue in the repository.
