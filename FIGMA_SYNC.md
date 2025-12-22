# Figma Sync Workflow

This document describes the standardized process for keeping the component library in sync with the Figma design system.

## Figma File

**Design System URL**: https://www.figma.com/design/nadcKNlrnZUHbbLwm9GdK4/C-C-Design-System---Components

## Prerequisites

### 1. Figma MCP Setup

Make sure you have authenticated with the Figma MCP server in Claude Code:

```bash
# Add Figma MCP (if not already added)
claude mcp add --transport http figma https://mcp.figma.com/mcp

# Authenticate
# Type /mcp in Claude Code, select figma, then Authenticate
```

Verify you have access:
```
In Claude Code, run: Check my Figma MCP access by running whoami
```

### 2. Figma Access

Ensure your Figma account has access to the design file and preferably has a Dev or Full seat for better rate limits.

## Regular Sync Process

### When to Sync

Sync the component library when:
- Designers publish updates to components in Figma
- New design tokens (colors, spacing, typography) are added
- New components are created
- Component variants or states are modified

### Step 1: Identify Changes

1. Check Figma for updates (designers should notify when they publish changes)
2. Note which components were updated
3. For each updated component, copy its Figma URL:
   - Right-click the component in Figma
   - Select "Copy link"

### Step 2: Update Design Tokens

If colors, spacing, typography, or other tokens changed:

```
Open Claude Code in this directory and prompt:

"Extract the latest design tokens from the Figma design system at:
https://www.figma.com/design/nadcKNlrnZUHbbLwm9GdK4?node-id=0-1

Compare them with the tokens in src/styles/tokens.css and update any that have changed.
Also update tailwind.config.js if the token structure changed."
```

### Step 3: Update Components

For each component that changed:

```
"Update the [ComponentName] component to match the latest Figma design at:
[paste component Figma URL]

Requirements:
- Preserve the existing component API (props interface) unless there are breaking changes
- Update visual styles to match Figma exactly
- Keep using class-variance-authority for managing variants
- Update Storybook stories if new variants or props were added
- Add JSDoc comments explaining any API changes"
```

### Step 4: Add New Components

For completely new components:

```
"Create a new [ComponentName] component from the Figma design at:
[paste component Figma URL]

Follow these patterns:
- Create src/components/[ComponentName]/[ComponentName].tsx
- Use TypeScript with proper prop types
- Use class-variance-authority for variants
- Create comprehensive Storybook stories in [ComponentName].stories.tsx
- Export from src/components/[ComponentName]/index.ts
- Add exports to src/index.ts"
```

### Step 5: Review and Test

1. **Build the library**:
   ```bash
   pnpm build
   ```

2. **Start Storybook**:
   ```bash
   pnpm storybook
   ```

3. **Visual QA**:
   - Compare each updated component in Storybook side-by-side with Figma
   - Use the embedded Figma designs in Storybook's Design tab (see "Embedding Figma in Storybook" below)
   - Test all variants, sizes, and states
   - Check responsive behavior
   - Verify accessibility (keyboard navigation, screen readers)

4. **Test in a consuming app**:
   ```bash
   # In a test app
   npm link @circuitandchisel/design-system

   # Test the components in real application context
   ```

### Step 6: Document Changes

Update the changelog and version:

1. Create/update `CHANGELOG.md`:
   ```markdown
   ## [0.2.0] - 2024-01-15

   ### Added
   - New Button component with primary, secondary, and ghost variants

   ### Changed
   - Badge component: Updated colors to match new brand palette
   - Badge component: Added new 'success' variant

   ### Fixed
   - Badge hover states now match Figma specs
   ```

2. Update version in `package.json` following semver:
   - **PATCH** (0.1.0 → 0.1.1): Bug fixes, minor styling tweaks, no API changes
   - **MINOR** (0.1.0 → 0.2.0): New components, new variants, backwards-compatible additions
   - **MAJOR** (0.1.0 → 1.0.0): Breaking changes to component APIs

### Step 7: Publish

```bash
# Final build
pnpm build

# Publish to npm (requires npm access)
pnpm publish

# Tag the release in git
git tag v0.2.0
git push origin v0.2.0
```

## Embedding Figma in Storybook

This project uses `@storybook/addon-designs` to embed Figma designs directly in Storybook, making it easy to compare implementations with designs.

### How It Works

When you view a component story in Storybook, you'll see a "Design" tab in the addon panel that shows the corresponding Figma design embedded inline.

### Adding Figma Embeds to Stories

To embed a Figma design in a component story, add the `design` parameter to the story metadata:

```typescript
import type { Meta, StoryObj } from '@storybook/react';
import { YourComponent } from './YourComponent';

const meta = {
  title: 'Components/YourComponent',
  component: YourComponent,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/nadcKNlrnZUHbbLwm9GdK4/C-C-Design-System---Components?node-id=2673-1675',
    },
  },
} satisfies Meta<typeof YourComponent>;

export default meta;
```

### Getting the Figma URL

1. Open your Figma file
2. Select the frame or component you want to embed
3. Right-click and select "Copy link" (or use Cmd/Ctrl + L)
4. Paste the URL into the `design.url` parameter

### Benefits

- **Side-by-side comparison**: View design and implementation together
- **No context switching**: Designers and developers can review in one place
- **Always up-to-date**: The embed shows the current state of the Figma design
- **Works for anyone**: Collaborators can view based on their Figma permissions

### Per-Story Overrides

You can also add design embeds to individual stories instead of the entire component:

```typescript
export const Primary: Story = {
  args: {
    variant: 'primary',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/...?node-id=123-456',
    },
  },
};
```

## Automated Checks

Before publishing, always run:

```bash
# Type checking
pnpm typecheck

# Linting
pnpm lint

# Build (to catch any build errors)
pnpm build

# Build Storybook (to ensure docs are working)
pnpm build-storybook
```

## Figma MCP Tools Reference

### Available Tools

The Figma MCP provides these tools for syncing:

1. **get_screenshot**: Get a visual preview of a Figma node
2. **get_design_context**: Extract full React/Tailwind code from a component
3. **get_variable_defs**: Get all design token values
4. **get_metadata**: Get component structure and hierarchy (use sparingly, returns large XML)

### Common Prompts for Claude Code

**Extract a specific component:**
```
Get the design context for the Badge component at:
https://www.figma.com/design/nadcKNlrnZUHbbLwm9GdK4?node-id=2673-1675
```

**Get design tokens:**
```
Get all variable definitions from the design system at:
https://www.figma.com/design/nadcKNlrnZUHbbLwm9GdK4?node-id=0-1
```

**Visual comparison:**
```
Show me a screenshot of the Button component at:
https://www.figma.com/design/nadcKNlrnZUHbbLwm9GdK4?node-id=[node-id]
```

## Best Practices

1. **Sync regularly**: Don't let the codebase drift too far from Figma
2. **Communicate with designers**: Set up a notification system when designs are updated
3. **Version consistently**: Use semantic versioning and keep a changelog
4. **Test thoroughly**: Always test components in Storybook and a real app before publishing
5. **Preserve APIs**: Try to keep component APIs stable to avoid breaking changes
6. **Document breaking changes**: If you must make breaking changes, document them clearly
7. **Use git tags**: Tag each release for easy rollback if needed

## Troubleshooting

### Figma MCP Issues

**"File could not be accessed"**:
- Verify you're authenticated: Type `/mcp` in Claude Code
- Check file sharing: Make sure your Figma account can access the file
- Check rate limits: View seats have limited API calls (6/month)

**Rate limit exceeded**:
- Wait for the limit to reset
- Upgrade to a Dev or Full seat for higher limits

### Build Issues

**CSS not generating**:
```bash
# Manually build CSS
pnpm build:css

# Check Tailwind config
pnpm exec tailwindcss -i ./src/styles/globals.css -o ./dist/styles.css
```

**TypeScript errors**:
```bash
# Check for errors
pnpm typecheck

# Regenerate type declarations
pnpm build
```

## Support

For questions or issues:
- Check the main README.md
- Review Figma MCP documentation: https://www.figma.com/mcp-catalog/
- Contact the design system team

---

**Last Updated**: 2024-12-19
**Maintainers**: ATXP Team
