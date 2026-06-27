# AI Coding Instructions for enabledby.cloud Portfolio

## Project Overview
This is a professional CV/portfolio website for Marvyn Zalewski (enabledby.cloud), built with Next.js 15 and deployed via GitHub Pages. The site features an animated particle system background, a comprehensive career showcase, and is prepared for future blog integration.

**Target Audience**: Engineering leaders, CTOs, and hiring managers looking for cloud architects, Engineering Manager for Cloud Platformss, or principal DevOps engineers.

## Tech Stack
- **Framework**: Next.js 15.5 (App Router, Turbopack)
- **Language**: TypeScript 5.x
- **Styling**: Tailwind CSS 3.4+ with custom design tokens
- **UI Components**: Custom component library built on Radix UI primitives
- **Testing**: Vitest with React Testing Library
- **Fonts**: IBM Plex Sans (headings/body), JetBrains Mono (code)

## Restrictions
- Client-side only rendering (`'use client'` components)
- No backend or API routes
- No external state management (React state only)
- All content stored as TypeScript data files
- Do not keep a changelog in any files

## Architecture & File Structure
```
src/
├── app/                      # Next.js App Router
│   ├── layout.tsx            # Root layout with fonts
│   ├── page.tsx              # Main page composition
│   ├── globals.css           # Global styles & CSS variables
│   └── components/           # Legacy components (being migrated)
│       └── ParticleBackground/
├── components/
│   ├── ui/                   # Reusable UI primitives
│   │   ├── button.tsx        # Button with variants
│   │   ├── card.tsx          # Card components
│   │   ├── badge.tsx         # Badge/tag component
│   │   ├── section.tsx       # Section wrapper
│   │   ├── typography.tsx    # Text components
│   │   ├── avatar.tsx        # Avatar with fallback
│   │   └── separator.tsx     # Divider component
│   ├── sections/             # Page section components
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── CaseStudiesSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   └── ContactSection.tsx
│   ├── layout/               # Layout components
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── common/               # Common components
│   │   └── CookieConsent.tsx
│   └── icons/                # SVG icon components
├── data/                     # Content data layer
│   ├── types.ts              # TypeScript interfaces
│   ├── site.ts               # Site config, nav, hero
│   ├── content.ts            # Services, case studies, testimonials
│   ├── experience.ts         # CV/career data
│   └── index.ts              # Barrel export
├── lib/                      # Utility functions
│   ├── utils.ts              # cn() class merger
│   └── cookies.ts            # Cookie consent utilities
└── test/                     # Test setup
    └── setup.ts
```

## Design System

### Color Palette
```css
/* Background (GitHub-inspired dark theme) */
--color-bg-primary: #0D1117;
--color-bg-secondary: #161B22;
--color-bg-tertiary: #21262D;

/* Text */
--color-text-primary: #F0F6FC;
--color-text-secondary: #C9D1D9;
--color-text-muted: #8B949E;

/* Brand Colors (Scale, Simplify, Enable) */
--color-brand-pink: #F778BA;   /* Scale */
--color-brand-purple: #A093FF; /* Simplify */
--color-brand-blue: #58A6FF;   /* Enable */

/* Gradient */
--gradient-primary: linear-gradient(90deg, #F778BA, #A093FF, #58A6FF);
```

### Typography Guidelines
- **Never use**: Inter, Roboto, Open Sans, Lato, system fonts
- **Current choice**: IBM Plex Sans (professional, technical feel)
- **Monospace**: JetBrains Mono for code elements
- **Font weights**: Use extremes (300 vs 700/800), not middle values
- **Size jumps**: 3x+ difference between heading levels

### Component Patterns
```tsx
// Use the cn() utility for conditional classes
import { cn } from '@/lib/utils';

// Use design system components
import { Button, Card, Badge, Section, Text } from '@/components/ui';

// Data-driven components
import { servicesData } from '@/data';
```

### Brand Icons (Principles)
- **Scale**: Triangle icon with pink gradient (#F778BA)
- **Simplify**: Circle icon with purple gradient (#A093FF)
- **Enable**: Hexagon icon with blue gradient (#58A6FF)

## Development Workflow

### Commands
```bash
yarn dev          # Start dev server with Turbopack
yarn build        # Production build
yarn test         # Run tests in watch mode
yarn test:ci      # Run tests once (CI)
```

### Testing Standards
- Co-locate tests with components (`*.test.tsx`)
- Test component rendering and user interactions
- Use `@testing-library/react` best practices
- Maintain tests for all UI primitives and sections

### Adding New Content
1. Update type definitions in `src/data/types.ts` if needed
2. Add content to appropriate data file (`site.ts`, `content.ts`, `experience.ts`)
3. Import data in section component
4. Content changes require no component modification

### Creating New UI Components
1. Create in `src/components/ui/`
2. Use `class-variance-authority` for variants
3. Forward refs with `React.forwardRef`
4. Add to barrel export in `index.ts`
5. Write tests in `*.test.tsx`

## Cookie Consent
The site includes a GDPR-ready cookie consent banner:
```tsx
import { CookieConsent } from '@/components/common';

// In page.tsx
<CookieConsent position="bottom" />
```

Listen for consent changes:
```ts
window.addEventListener('cookie-consent-updated', (e) => {
  const { analytics, marketing } = e.detail;
  // Initialize Google Analytics if analytics === true
});
```

## Particle Background
Canvas-based animation preserved from original design:
```tsx
import ParticleBackground from './components/ParticleBackground/Background';

<ParticleBackground mouseEffectEnabled={true} />
```

## Future Considerations
- **Blog**: Content data types can be added when needed
- **Projects**: Content data types can be added when needed
- **Analytics**: Cookie consent ready for Google Analytics integration
- **i18n**: Content centralized for easy internationalization

## Code Style
- Use TypeScript strict mode
- Prefer functional components with hooks
- Use `async/await` over promises
- Follow Tailwind class ordering conventions
- Keep components single-responsibility