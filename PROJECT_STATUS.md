# Circuit & Chisel Design System - Project Status

## ✅ Setup Complete

Your design system project is fully set up and ready to use!

## 📁 Project Structure

```
design-system/
├── .storybook/           # Storybook configuration
│   ├── main.ts          # Main Storybook config with Vite path aliases
│   └── preview.ts       # Global Storybook settings
├── src/
│   ├── components/      # React components
│   │   └── Badge/       # Badge component example
│   │       ├── Badge.tsx
│   │       ├── Badge.stories.tsx
│   │       └── index.ts
│   ├── lib/             # Utility functions
│   │   └── utils.ts     # cn() helper for class merging
│   ├── styles/          # Design tokens and styles
│   │   ├── tokens.css   # Design tokens from Figma
│   │   └── globals.css  # Global styles with Tailwind
│   └── index.ts         # Main export file
├── dist/                # Build output (generated)
│   ├── index.js         # CommonJS bundle
│   ├── index.mjs        # ESM bundle
│   ├── index.d.ts       # TypeScript declarations
│   └── styles.css       # Compiled CSS with design tokens
├── package.json         # Package configuration
├── tsconfig.json        # TypeScript configuration
├── tsup.config.ts       # Build configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── vite.config.ts       # Vite configuration for Storybook
├── pnpm-workspace.yaml  # pnpm workspace configuration
├── .npmrc               # npm/pnpm configuration
├── README.md            # Main documentation
├── FIGMA_SYNC.md        # Figma sync workflow guide
└── .gitignore           # Git ignore rules
```

## 🎨 Design System Components

### Current Components

1. **Badge** - Status, category, and label component
   - Variants: `default`, `secondary`, `destructive`, `outline`, `success`
   - Sizes: `sm`, `md`
   - Figma: [View in Figma](https://www.figma.com/design/nadcKNlrnZUHbbLwm9GdK4?node-id=2673-1675)

### Design Tokens

All design tokens are extracted from Figma and stored in `src/styles/tokens.css`:

- **Colors**: Primary, secondary, destructive, success, and semantic colors
- **Typography**: Font families, sizes, weights, line heights
- **Spacing**: 8-point grid system (0.5, 2, 3.5, 4, 5, 6, 8)
- **Border Radius**: Rounded corners with theme support
- **Border Width**: Standard border widths
- **Opacity**: Opacity values for hover states

## 🛠️ Technology Stack

- **React 19** with TypeScript 5 (supports React 18+ via peer deps)
- **Tailwind CSS 4** with CSS-first configuration
- **class-variance-authority** for type-safe component variants
- **tsup** for fast bundling (ESM + CJS)
- **Storybook 10** for component documentation and development
- **pnpm** for package management
- **Figma MCP** for design-to-code workflow

## 🚀 Quick Start

### Development

```bash
# Install dependencies
pnpm install

# Start Storybook (for component development)
pnpm storybook
# Visit: http://localhost:6006

# Build the library
pnpm build
```

### Using the Components

```tsx
import { Badge } from '@circuitandchisel/design-system';
import '@circuitandchisel/design-system/styles.css';

function App() {
  return (
    <>
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="success" size="md">Success</Badge>
    </>
  );
}
```

## 📚 Documentation

- **README.md** - Main documentation, installation, usage
- **FIGMA_SYNC.md** - Step-by-step guide for syncing with Figma updates
- **Storybook** - Interactive component documentation (run `pnpm storybook`)

## 🔄 Figma Integration

Your design system is connected to Figma via the Figma MCP server:

- **Figma File**: https://www.figma.com/design/nadcKNlrnZUHbbLwm9GdK4/C-C-Design-System---Components
- **MCP Setup**: Configured in Claude Code with OAuth authentication
- **Sync Workflow**: Documented in FIGMA_SYNC.md

### How to Sync from Figma

1. Copy the component URL from Figma
2. Open Claude Code in this directory
3. Ask Claude to extract/update the component
4. Review in Storybook
5. Build and publish

See `FIGMA_SYNC.md` for detailed instructions.

## 📦 Publishing

When ready to publish:

```bash
# 1. Update version in package.json (semver)
# 2. Build
pnpm build

# 3. Publish to npm
pnpm publish

# 4. Tag the release
git tag v0.1.0
git push origin v0.1.0
```

## ✨ Next Steps

### Add More Components

As your designers create more components in Figma, use Claude Code with Figma MCP to:

1. Extract component designs
2. Generate React components
3. Create Storybook stories
4. Update the library

### Common Components to Add

Based on typical design systems, consider adding:

- **Button** - Primary actions with variants
- **Input** - Text input fields
- **Card** - Content containers
- **Avatar** - User profile images
- **Checkbox** - Boolean selections
- **Radio** - Single selections from options
- **Select** - Dropdown selections
- **Switch** - Toggle switches
- **Tooltip** - Hover information
- **Alert** - Status messages
- **Modal** - Dialog overlays
- **Tabs** - Content organization

### Expand Design Tokens

As your design system grows, you may want to add:

- **Breakpoints** for responsive design
- **Z-index scale** for layering
- **Animation tokens** for transitions
- **Dark mode** color tokens

## 🔧 Development Scripts

```bash
pnpm dev              # Watch mode for development
pnpm build            # Build the library (JS + CSS)
pnpm build:css        # Build CSS only
pnpm lint             # Run ESLint
pnpm typecheck        # Run TypeScript checks
pnpm storybook        # Start Storybook dev server
pnpm build-storybook  # Build static Storybook site
```

## 📈 Best Practices

1. **Always sync from Figma** - Keep designs and code in sync
2. **Use semantic versioning** - MAJOR.MINOR.PATCH
3. **Document component APIs** - Add JSDoc comments
4. **Write comprehensive stories** - Show all variants in Storybook
5. **Test in real apps** - Use pnpm link to test before publishing
6. **Keep tokens updated** - Sync design tokens regularly
7. **Preserve APIs** - Avoid breaking changes when possible

## 🆘 Troubleshooting

### Build Issues

If CSS isn't generating:
```bash
pnpm build:css
```

If TypeScript errors occur:
```bash
pnpm typecheck
```

### Figma MCP Issues

If you can't access Figma designs:
1. Type `/mcp` in Claude Code
2. Select "figma" and authenticate
3. Verify access with `whoami` tool

### Storybook Issues

If Storybook won't start:
```bash
# Clear cache and restart
rm -rf node_modules/.cache
pnpm storybook
```

## 📝 Notes

- Package name: `@circuitandchisel/design-system`
- Package manager: pnpm (workspace enabled)
- Build target: ES2020
- Supports: React 18+
- License: MIT

## 🎯 Current Status

- ✅ Project structure set up
- ✅ Design tokens extracted from Figma
- ✅ Badge component implemented
- ✅ Storybook configured and working
- ✅ Build process tested (ESM + CJS + CSS)
- ✅ TypeScript types generated
- ✅ pnpm workspace configured
- ✅ Documentation complete
- ✅ All packages upgraded to latest (React 19, Tailwind 4, Storybook 10)
- ✅ Linting passing
- ✅ Type checking passing
- ⏳ Ready to add more components
- ⏳ Ready to publish first version

---

**Created**: December 19, 2025
**Status**: Production Ready
**Next Release**: v0.1.0

For questions or updates, see README.md or FIGMA_SYNC.md.
