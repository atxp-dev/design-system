# Circuit & Chisel Design System

A React component library built with TypeScript, Tailwind CSS, and based on our Figma design system.

## Installation

```bash
pnpm add @circuitandchisel/design-system
```

Or with npm:
```bash
npm install @circuitandchisel/design-system
```

## Usage

### Import Styles

First, import the design system styles in your app's entry point:

```tsx
import '@circuitandchisel/design-system/styles.css';
```

### Use Components

```tsx
import { Badge } from '@circuitandchisel/design-system';

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

This design system is built from our Figma designs. When the design team updates components in Figma, follow this workflow to sync changes:

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

This package is published to npm as `@circuitandchisel/design-system`.

```bash
# Build the package
pnpm build

# Publish (requires npm access)
pnpm publish
```

## License

MIT
