# Plantocol - Plant Tissue Culture Protocol Library

A clean, laboratory notebook-inspired web application for plant tissue culture protocols. Built with SvelteKit and optimized for Vercel deployment.

🔬 **Live Demo**: [Coming soon after deployment](https://interfaces.rauno.me/).

## Features

- **Clean Typography-Focused Design** using Inter font
- **Vertical Scrolling** with scroll-triggered animations
- **Navigation Between Protocols** using SvelteKit routing
- **Interface Guidelines Applied:**
  - Typography: Antialiasing, fluid clamp() sizing, optimal font weights
  - Motion: Fast animations (<200ms), proportional scales
  - Touch: Proper font sizes (≥16px), hover only on hover-capable devices
  - Accessibility: Box-shadow focus rings, proper ARIA labels
  - Optimizations: GPU rendering for animations, proper will-change usage

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
plantocol-app/
├── src/
│   ├── lib/
│   │   └── components/
│   │       ├── ProtocolLayout.svelte  # Reusable protocol page layout
│   │       └── ContentBlock.svelte    # Content section with animations
│   ├── routes/
│   │   ├── +layout.svelte            # App layout with progress bar
│   │   ├── +page.svelte              # Home page with protocol list
│   │   ├── introduction/
│   │   │   └── +page.svelte          # Introduction page
│   │   └── protocols/
│   │       ├── monstera/
│   │       │   └── +page.svelte      # Monstera protocol
│   │       ├── african-violet/       # Add more protocols here
│   │       ├── begonia/
│   │       ├── tropical/
│   │       ├── succulents/
│   │       └── seeds/
│   ├── app.html                      # HTML template
│   └── app.css                       # Global styles with interface guidelines
└── package.json
```

## Adding New Protocols

1. Create a new folder in `src/routes/protocols/[protocol-name]/`
2. Add `+page.svelte` with the protocol content:

```svelte
<script>
	import ProtocolLayout from '$lib/components/ProtocolLayout.svelte';
	import ContentBlock from '$lib/components/ContentBlock.svelte';
	
	const title = 'Your Protocol<br>Name';
	const badges = ['Difficulty', 'Success Rate', 'Explant Type'];
	const introColumns = ['Column 1', 'Column 2', 'Column 3'];
	const source = 'Source citation';
</script>

<ProtocolLayout {title} {badges} {introColumns} {source}>
	<ContentBlock title="Section Title">
		<!-- Your content -->
	</ContentBlock>
</ProtocolLayout>
```

3. Add to the protocol list in `src/routes/+page.svelte`

## Interface Guidelines Checklist

### Typography
- ✅ `-webkit-font-smoothing: antialiased`
- ✅ `text-rendering: optimizeLegibility`
- ✅ Fluid sizing with `clamp()`
- ✅ Font weights 400-700, no changes on hover
- ✅ Medium headings use 500-600 weight

### Motion
- ✅ Animations < 200ms for immediate feel
- ✅ Proportional scaling (0.98 for button press)
- ✅ Scroll-triggered animations pause offscreen
- ✅ `scroll-behavior: smooth` for in-page navigation

### Touch
- ✅ `@media (hover: hover)` for hover states
- ✅ Input font-size ≥ 16px (prevents iOS zoom)
- ✅ Disabled iOS tap highlight with replacement
- ✅ 44x44px minimum touch targets on mobile

### Accessibility
- ✅ Box-shadow focus rings (respect border-radius)
- ✅ Keyboard navigation (Enter/Space)
- ✅ ARIA labels for icon-only buttons
- ✅ Semantic HTML structure

### Optimizations
- ✅ GPU rendering for animations
- ✅ Intersection Observer for scroll animations
- ✅ No layout shifts from font weight changes
- ✅ Optimized animation performance

## Design Principles

- **Generous Spacing:** 120-150px padding on major sections
- **Typography-First:** Large titles (60-160px), clean hierarchy
- **Minimal Color:** Black/white with subtle grays
- **Scroll Animations:** Fade + slide up on intersection
- **Smooth Transitions:** All interactions feel immediate

## Technologies

- **SvelteKit** - Web framework
- **Vite** - Build tool
- **Inter** - Typeface
- **CSS** - Styling (no frameworks needed)

## License

MIT
