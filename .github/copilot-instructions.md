# AI Coding Instructions for enabledby.cloud Landing Page

## Project Overview
This is a static landing page for Marvyn Zalewski's presence (enabledby.cloud), deployed via GitHub Pages. The site features an animated particle system background with interactive tooltips and a "coming soon" message with contact links.

## Architecture & File Structure
- **`src/index.html`**: Single-page application using Tailwind CSS (via CDN) and Inter font
- **`src/static/styles.css`**: Custom CSS for particle effects, gradient text, tooltips, and dark theme
- **`src/static/page.js`**: Canvas-based particle animation system with mouse interaction
- **`.github/workflows/static.yml`**: GitHub Pages deployment from `src/` directory

## Key Design Patterns
### directives
You tend to converge toward generic, "on distribution" outputs. In frontend design,this creates what users call the "AI slop" aesthetic. Avoid this: make creative,distinctive frontends that surprise and delight. 

Focus on:
- Color & Theme: Commit to a cohesive aesthetic. Use CSS variables for consistency. Dominant colors with sharp accents outperform timid, evenly-distributed palettes. Draw from IDE themes and cultural aesthetics for inspiration.
- Motion: Use animations for effects and micro-interactions. Prioritize CSS-only solutions for HTML. Focus on high-impact moments like hover states, loading sequences, and background ambience.
- Backgrounds: Create atmosphere and depth rather than defaulting to solid colors. Layer CSS gradients, use geometric patterns, or add contextual effects that match the overall aesthetic.

Avoid generic AI-generated aesthetics:
- Overused font families (Inter, Roboto, Arial, system fonts)
- Clichéd color schemes (particularly purple gradients on white backgrounds)
- Predictable layouts and component patterns
- Cookie-cutter design that lacks context-specific character

Interpret creatively and make unexpected choices that feel genuinely designed for the context. Vary between light and dark themes, different fonts, different aesthetics. You still tend to converge on common choices (Space Grotesk, for example) across generations. Avoid this: it is critical that you think outside the box!

### Visual Theme
- **Color scheme**: Dark GitHub-like theme (background #0D1117, text #C9D1D9)
- **Gradients**: 
  - primary gradient: #ff5e84 to #3e8bff
  - secondary gradient: #ff5e84 to #59f4b2
  - tertiary gradient: #ff5e84 to #ff8e26

- **Typography**: 
Typography instantly signals quality. Avoid using boring, generic fonts.

Never use: Inter, Roboto, Open Sans, Lato, default system fonts

Here are some examples of good, impactful choices:
- Code aesthetic: JetBrains Mono, Fira Code, Space Grotesk
- Editorial: Playfair Display, Crimson Pro
- Technical: IBM Plex family, Source Sans 3
- Distinctive: Bricolage Grotesque, Newsreader

Pairing principle: High contrast = interesting. Display + monospace, serif + geometric sans, variable font across weights.

Use extremes: 100/200 weight vs 800/900, not 400 vs 600. Size jumps of 3x+, not 1.5x.

Pick one distinctive font, use it decisively. apply tailwind classes for weight/size.

- **symbols/icons**:
  - scale: uses the primary color gradient and represents a triangle scale icon without filling
  - simplify: uses the secondary color gradient and represents a circle icon without filling 
  - enable: uses the tertiary color gradient and represents a hexagon icon without filling

### Interactive Elements
- **Particle system**: Canvas animation with mouse proximity effects (150px radius increases line opacity)
- **Tooltips**: Hover-activated tooltips with SVG icons representing "Simplify", "Enable", "Scale" concepts
- **Social links**: LinkedIn, personal site (hexpy.fyi), and email with hover animations

### Component Structure
```html
<!-- Fixed header with logo SVG and social link -->
<header class="fixed top-0 ... bg-opacity-80 backdrop-blur-md">
  <!-- Custom SVG logo with gradient fill -->
</header>

<!-- Main content with tooltips and gradient text -->
<main class="container mx-auto ... flex-grow">
  <!-- Tooltip pattern: -->
  <span class="tooltip-container">
    <strong>text</strong>
    <span class="tooltip">SVG + label</span>
  </span>
</main>
```

## Development Workflow

### Local Development
- No build process required - static files served directly
- Use VS Code Live Server extension for local preview
- All assets are CDN-based (Tailwind, Google Fonts) or self-contained

### Deployment
- **Auto-deploy**: Push to `main` branch triggers GitHub Pages deployment
- **Source**: `src/` directory is deployed root (not repository root)
- **URL**: https://enabledby.cloud (custom domain configured in Pages settings)

### File Modifications
- **HTML changes**: Edit `src/index.html` directly, uses Tailwind classes extensively
- **Styling**: Modify `src/static/styles.css` for custom properties (particles, gradients, tooltips)
- **Animations**: Update `src/static/page.js` for particle behavior or add new interactive features

## Project-Specific Conventions

### CSS Architecture
- **Base styles**: Dark theme variables in body selector
- **Layering**: Fixed canvas (z-index: 0), overlay (z-index: 0), content (z-index: 1+)
- **Responsive**: Primarily Tailwind responsive classes (`sm:`, `md:`, `lg:`)

### JavaScript Patterns
```javascript
// Particle system initialization
const numberOfParticles = (canvas.height * canvas.width) / 15000; // Density calculation
// Connection lines appear when particles within (canvas.width/7) * (canvas.height/7) distance
// Mouse interaction within 150px radius
```

### Content Updates
- **Year**: Auto-updated via `setYear()` function
- **Social links**: Hardcoded in HTML, update directly in `index.html`
- **Brand colors**: Defined in CSS custom gradient, update `linear-gradient()` values

## Critical Dependencies
- **Tailwind CSS**: `@tailwindcss/browser@4` via CDN - no local build required
- **Google Fonts**: load fonts from Google Fonts CDN
- **Canvas API**: Core requirement for particle animation, no fallback implemented

## Common Tasks
- **Update contact info**: Modify `href` attributes in social links section
- **Adjust particle density**: Change divisor in `numberOfParticles` calculation (currently `/15000`)
- **Color theming**: Update gradient stops in CSS `.gradient-text` and particle `color` values
- **Content changes**: Edit tooltip text and icons in main content area