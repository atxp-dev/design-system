# ATXP Design System

A React component library built with TypeScript, Tailwind CSS, and based on our Figma design system.

## Installation

```bash
pnpm add @atxp/design-system
```

Or with npm:
```bash
npm install @atxp/design-system
```

## Usage

### Import Styles

First, import the design system styles in your app's entry point:

```tsx
import '@atxp/design-system/styles.css';
```

### Use Components

```tsx
import { Badge } from '@atxp/design-system';

function App() {
  return (
    <div>
      <Badge>Default Badge</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Error</Badge>
      <Badge variant="success">Success</Badge>
    </div>
  );
}
```

### Peer Dependencies

This design system requires the following peer dependencies to be installed in your project:

```bash
npm install lucide-react sonner
```

These are included as peer dependencies because:
- **lucide-react**: Icons are re-exported through the design system's API
- **sonner**: Toast notifications are re-exported for direct use

## Optional: Using Design Tokens in Your Own Code

The design system ships with pre-compiled CSS that includes all styles for the components. **You do not need Tailwind CSS installed** to use the components.

However, if you want to use the design system's color tokens (like `bg-primary`, `text-destructive`) and other design tokens in your own custom components, you can optionally set up Tailwind CSS in your project:

### 1. Install Tailwind CSS

```bash
npm install -D tailwindcss autoprefixer postcss
```

### 2. Create a Tailwind Config

Create a `tailwind.config.js` in your project root:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--theme-border))',
        input: 'hsl(var(--theme-input))',
        ring: 'hsl(var(--theme-ring))',
        background: 'hsl(var(--theme-background))',
        foreground: 'hsl(var(--theme-foreground))',
        primary: {
          DEFAULT: 'hsl(var(--theme-primary))',
          foreground: 'hsl(var(--theme-primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--theme-secondary))',
          foreground: 'hsl(var(--theme-secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--theme-destructive))',
          foreground: 'hsl(var(--theme-destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--theme-muted))',
          foreground: 'hsl(var(--theme-muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--theme-accent))',
          foreground: 'hsl(var(--theme-accent-foreground))',
        },
        // Add other tokens as needed
      },
    },
  },
  plugins: [],
}
```

### 3. Create a CSS File

Create a `src/index.css` with Tailwind directives:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 4. Import Both Stylesheets

In your app entry point (e.g., `main.tsx`):

```tsx
import '@atxp/design-system/styles.css'; // Design system styles
import './index.css'; // Your Tailwind utilities
```

### 5. Use Design Tokens in Your Code

Now you can use design tokens in your custom components:

```tsx
function MyCustomComponent() {
  return (
    <div className="bg-primary text-primary-foreground p-4 rounded-lg">
      <h2 className="text-xl font-bold">Custom Component</h2>
      <p className="text-muted-foreground">
        Using design system tokens in custom code
      </p>
    </div>
  );
}
```

**Note**: This is completely optional. The design system components work perfectly without any Tailwind setup in your project.

## Development

### Prerequisites

- Node.js 18+ and npm
- Access to the Figma design file

### Setup

```bash
# Install dependencies
pnpm install

# Start development mode (watches for changes)
pnpm dev

# Start Storybook for component development
pnpm storybook
```

### Build

```bash
# Build the package
pnpm build

# Build Storybook for deployment
pnpm build-storybook
```

### Linting and Type Checking

```bash
# Run ESLint
pnpm lint

# Run TypeScript type checking
pnpm typecheck
```

## Syncing with Figma

This design system is built from Figma designs. When the design team updates components in Figma, follow this workflow to sync changes:

### Prerequisites

1. **Install Claude Code CLI** (if not already installed):
   ```bash
   npm install -g @anthropic-ai/claude-code
   ```

2. **Authenticate with Figma MCP**:
   ```bash
   claude mcp add --transport http figma https://mcp.figma.com/mcp
   ```
   Then type `/mcp` in Claude Code and authenticate with your Figma account.

### Sync Workflow

1. **Identify Updated Components**
   - Open the Figma file: https://www.figma.com/design/nadcKNlrnZUHbbLwm9GdK4/C-C-Design-System---Components
   - Note which components have been updated or added
   - Copy the Figma URL for the specific component (right-click → Copy link)

2. **Extract Design Tokens** (if colors, spacing, typography changed)

   Open Claude Code in this directory and run:
   ```
   Extract the latest design tokens from the Figma file at:
   https://www.figma.com/design/nadcKNlrnZUHbbLwm9GdK4?node-id=0-1

   Update src/styles/tokens.css with any new or changed tokens.
   ```

3. **Update Component Code**

   For each updated component, ask Claude Code:
   ```
   Update the [ComponentName] component from this Figma URL:
   [paste the component's Figma URL]

   Make sure to:
   - Preserve the existing API (props interface)
   - Update the visual styles to match Figma
   - Keep using class-variance-authority for variants
   - Update the Storybook stories if needed
   ```

4. **Review Changes**
   ```bash
   # Start Storybook to review the updated components
   npm run storybook

   # Check that all variants and states work correctly
   # Compare with Figma designs side-by-side
   ```

5. **Update Documentation**
   - Update component JSDoc comments if the API changed
   - Update Storybook stories to show new variants/props
   - Update this README if new components were added

6. **Version and Publish**
   ```bash
   # Update version in package.json following semver:
   # - PATCH: Bug fixes, small styling tweaks
   # - MINOR: New components, new variants, backwards-compatible changes
   # - MAJOR: Breaking changes to component APIs

   # Build and publish
   pnpm build
   pnpm publish
   ```

### Adding New Components

When designers add a completely new component to Figma:

1. Get the component's Figma URL
2. Open Claude Code and run:
   ```
   Create a new [ComponentName] component from this Figma design:
   [paste Figma URL]

   Follow the existing pattern:
   - Create src/components/[ComponentName]/[ComponentName].tsx
   - Use class-variance-authority for variants
   - Create src/components/[ComponentName]/[ComponentName].stories.tsx
   - Export from src/components/[ComponentName]/index.ts
   - Add to src/index.ts
   ```

3. Review in Storybook and test in a consuming application

### Design Token Reference

Our design tokens are defined in `src/styles/tokens.css` and map to Figma variables:

- **Colors**: `--theme-*` (primary, secondary, destructive, success, etc.)
- **Spacing**: `--spacing-*` (0.5, 2, 3.5, 4, 5, 6, 8)
- **Typography**: `--font-*` (sizes, weights, line heights, families)
- **Border Radius**: `--theme-radius`, `--radius-*`
- **Border Width**: `--border-width-*`

These tokens are configured in Tailwind (`tailwind.config.js`) and can be used via Tailwind utilities.

## Component Library

### Current Components

- **Badge**: Display status, categories, or labels
  - Variants: default, secondary, destructive, outline, success
  - Sizes: sm, md
  - [Figma Link](https://www.figma.com/design/nadcKNlrnZUHbbLwm9GdK4?node-id=2673-1675)

*More components coming soon as we sync from Figma...*

## Architecture

- **React 19** with TypeScript 5
- **Tailwind CSS 4** with CSS-first configuration
- **class-variance-authority** for component variants
- **tsup** for bundling (ESM + CJS)
- **Storybook 10** for documentation and development
- **Figma MCP** for design-to-code workflow

## Publishing

This package is published to npm as `@atxp/design-system`.

See [PUBLISHING.md](./PUBLISHING.md) for detailed publishing instructions and requirements.

```bash
# Build the package
pnpm build

# Publish (requires npm access to @atxp organization)
pnpm publish
```

## License

MIT
