# Theme System Maintenance Guide

This document provides comprehensive instructions for maintaining, adding, and updating themes in the Circuit & Chisel Design System. It is intended for AI assistants and developers working on the theme system.

## Table of Contents
- [Architecture Overview](#architecture-overview)
- [File Structure](#file-structure)
- [Adding a New Theme](#adding-a-new-theme)
- [Updating an Existing Theme](#updating-an-existing-theme)
- [Syncing from Figma](#syncing-from-figma)
- [Testing Procedures](#testing-procedures)
- [Token Reference](#token-reference)
- [Troubleshooting](#troubleshooting)

---

## Architecture Overview

### Design Principles

The theme system follows these core principles:

1. **CSS-First**: CSS custom properties are the single source of truth
2. **Component Agnostic**: Components reference semantic tokens, not specific colors
3. **Zero Runtime Cost**: Theme switching via CSS, no JavaScript recalculation
4. **Figma-Synced**: All themes should match Figma design system
5. **Semantic Naming**: Token names describe purpose, not appearance

### How Themes Work

```
Figma Design System
        ↓
  tokens.css (CSS Variables)
        ↓
  globals.css (@theme directive)
        ↓
  tailwind.config.ts (Utility Classes)
        ↓
  Components (bg-primary, text-foreground, etc.)
```

**Theme Selection**: Controlled by `data-theme` attribute on `<html>` element:
- No attribute: Default (Primary/Light) theme
- `data-theme="dark"`: Dark theme
- `data-theme="atxp"`: ATXP theme
- `data-theme="dbg"`: DBG theme

---

## File Structure

### Critical Files

| File | Purpose | When to Edit |
|------|---------|--------------|
| `src/styles/tokens.css` | Theme definitions (CSS variables) | Add/update themes |
| `src/styles/globals.css` | Tailwind @theme directive | Add new token types |
| `tailwind.config.ts` | Tailwind utility class mapping | Add new token types |
| `src/lib/theme.tsx` | ThemeProvider & useTheme hook | Add new theme names |
| `src/index.ts` | Public exports | Rarely (already exports theme) |
| `THEMES.md` | User-facing documentation | Update when themes change |
| `CLAUDE.md` | This file - maintenance guide | Update procedures/architecture |

### Component Files

Components should **only** reference semantic tokens:
```tsx
// ✅ CORRECT - Semantic tokens
<Button className="bg-primary text-primary-foreground" />

// ❌ WRONG - Hardcoded colors
<Button className="bg-[#5d57f8] text-white" />
```

---

## Adding a New Theme

### Step-by-Step Procedure

#### 1. Fetch Theme from Figma (If Applicable)

If the theme exists in Figma:

```tsx
// Use MCP Figma tool to fetch variable definitions
mcp__figma__get_variable_defs({
  fileKey: "nadcKNlrnZUHbbLwm9GdK4",
  nodeId: "YOUR-NODE-ID",  // Extract from Figma URL
  clientLanguages: "typescript,css",
  clientFrameworks: "react"
})
```

The response will be a JSON object with all color tokens. Example:
```json
{
  "theme/primary": "#5d57f8",
  "theme/background": "#ffffff",
  // ... etc
}
```

#### 2. Add Theme Definition to tokens.css

Add a new theme block to `src/styles/tokens.css`:

```css
/* ============================================
   YOUR THEME NAME
   Figma: node-id=YOUR-NODE-ID (if applicable)
   Description of theme purpose/personality
   ============================================ */
[data-theme="your-theme-name"] {
  /* Base Colors */
  --theme-foreground: #color;
  --theme-background: #color;
  --theme-muted: #color;
  --theme-muted-foreground: #color;
  --theme-border: #color;
  --theme-border-hover: #color;
  --theme-input: #color;
  --theme-ring: #color;

  /* Primary Colors */
  --theme-primary: #color;
  --theme-primary-hover: #color;
  --theme-primary-foreground: #color;

  /* Secondary Colors */
  --theme-secondary: #color;
  --theme-secondary-foreground: #color;

  /* Accent Colors */
  --theme-accent: #color;
  --theme-accent-hover: #color;
  --theme-accent-foreground: #color;
  --theme-accent-muted: #color;

  /* Card */
  --theme-card: #color;
  --theme-card-foreground: #color;

  /* Popover */
  --theme-popover: #color;
  --theme-popover-foreground: #color;

  /* Semantic Colors */
  --theme-destructive: #color;
  --theme-destructive-foreground: #color;

  --theme-success: #color;
  --theme-success-background-fill: #color;

  --theme-warning: #color;
  --theme-warning-foreground: #color;
  --theme-warning-alt: #color;

  --theme-info: #color;
  --theme-info-foreground: #color;

  /* Chart Colors */
  --theme-chart-1: #color;
  --theme-chart-2: #color;
  --theme-chart-3: #color;
  --theme-chart-4: #color;
  --theme-chart-5: #color;

  /* Sidebar */
  --theme-sidebar-background: #color;
  --theme-sidebar-foreground: #color;
  --theme-sidebar-primary: #color;
  --theme-sidebar-primary-foreground: #color;
  --theme-sidebar-accent: #color;
  --theme-sidebar-accent-foreground: #color;
  --theme-sidebar-border: #color;
}
```

**Important**:
- Use kebab-case for theme names (e.g., `my-theme`, not `myTheme`)
- Place new themes BEFORE the "Automatic Dark Mode" section
- Include all tokens, even if some inherit from default

#### 3. Update TypeScript Types

Update `src/lib/theme.tsx`:

```tsx
// Update Theme type
export type Theme = 'light' | 'dark' | 'atxp' | 'dbg' | 'your-theme-name' | 'auto';

// Update actualTheme type in ThemeContextValue
interface ThemeContextValue {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  actualTheme: 'light' | 'dark' | 'atxp' | 'dbg' | 'your-theme-name';
}

// Update actualTheme state type in ThemeProvider
const [actualTheme, setActualTheme] = React.useState<'light' | 'dark' | 'atxp' | 'dbg' | 'your-theme-name'>(() => {
  // ... existing logic
});

// Update isValidTheme function
function isValidTheme(value: string): value is Theme {
  return ['light', 'dark', 'atxp', 'dbg', 'your-theme-name', 'auto'].includes(value);
}
```

#### 4. Add Storybook Story

Update `src/components/Theme/Theme.stories.tsx`:

```tsx
// Update theme array in ThemeShowcase
const themes: Theme[] = ['light', 'dark', 'atxp', 'dbg', 'your-theme-name', 'auto'];

// Add new story export
/**
 * Your Theme Name - Description of theme
 */
export const YourThemeNameStory: Story = {
  render: () => (
    <ThemeProvider defaultTheme="your-theme-name">
      <ThemeShowcase />
    </ThemeProvider>
  ),
};
```

Also update the JSDoc comment at the top with the new theme description.

#### 5. Update Documentation

Update `THEMES.md`:

```markdown
## Available Themes

### Built-in Themes

- **`light`** (default) - Primary brand theme from Figma design system
- **`dark`** - Dark mode optimized for low-light environments
- **`atxp`** - Professional black primary with blue accents
- **`dbg`** - Cyan/turquoise primary with modern, fresh aesthetic
- **`your-theme-name`** - Description of your theme
- **`auto`** - Automatically adapts to system preference (light/dark)
```

Update all code examples that list themes:
- React examples with setTheme buttons
- Vanilla JS examples with data-theme values
- Theme testing examples

#### 6. Test the Theme

Run the testing checklist (see [Testing Procedures](#testing-procedures)).

#### 7. Build and Verify

```bash
pnpm exec tsc --noEmit  # Type check
pnpm build:css          # Build CSS with new theme
pnpm build              # Full build
pnpm storybook          # Visual verification
```

#### 8. Commit Changes

```bash
git add -A
git commit -m "Add [theme-name] theme

- Add theme definition to tokens.css
- Update TypeScript types in theme.tsx
- Add Storybook story
- Update documentation

Theme characteristics:
- Primary: #color (description)
- Use case: [when to use this theme]
"
```

---

## Updating an Existing Theme

### Step-by-Step Procedure

#### 1. Identify What Needs Updating

Common reasons:
- Figma design tokens changed
- Color accessibility improvements
- New token types added to the system
- Bug fixes (wrong colors, typos)

#### 2. Sync from Figma (If Applicable)

If updating based on Figma changes:

```tsx
// Fetch latest from Figma
mcp__figma__get_variable_defs({
  fileKey: "nadcKNlrnZUHbbLwm9GdK4",
  nodeId: "NODE-ID-FOR-THEME",
  clientLanguages: "typescript,css",
  clientFrameworks: "react"
})
```

Compare the response with current values in `tokens.css`.

#### 3. Update tokens.css

Locate the theme block in `src/styles/tokens.css` and update the relevant tokens:

```css
[data-theme="theme-name"] {
  /* Update only the tokens that changed */
  --theme-primary: #new-color;  /* Changed from #old-color */
  --theme-border: #new-color;   /* Changed from #old-color */
  /* ... keep other tokens unchanged ... */
}
```

**Best Practice**: Add a comment explaining why the change was made:
```css
/* Updated to match Figma 2025-01-15 - improved contrast */
--theme-primary: #new-color;
```

#### 4. Check for Breaking Changes

Visual breaking changes include:
- Primary color changes (affects buttons, links, focus states)
- Background/foreground changes (affects readability)
- Border color changes (affects visual hierarchy)

If breaking, document in commit message and consider:
- Adding migration notes to THEMES.md
- Bumping package version appropriately

#### 5. Test Updated Theme

Run full testing checklist (see [Testing Procedures](#testing-procedures)).

Pay special attention to:
- Components that heavily use the changed tokens
- Color contrast (use WebAIM checker)
- Dark mode compatibility (if updating light theme)

#### 6. Update Documentation (If Needed)

If the theme's purpose or characteristics changed significantly:
- Update description in THEMES.md
- Update Storybook story JSDoc comment
- Update this file (CLAUDE.md) if maintenance procedures changed

#### 7. Build and Verify

```bash
pnpm exec tsc --noEmit  # Type check
pnpm build:css          # Rebuild CSS
pnpm build              # Full build
pnpm storybook          # Visual verification
```

#### 8. Commit Changes

```bash
git add -A
git commit -m "Update [theme-name] theme colors

- Update theme-primary from #old to #new
- Update theme-border from #old to #new
- Reason: [why - Figma sync, accessibility, bug fix, etc.]

Breaking changes: [Yes/No]
Contrast ratios verified: [Yes/No]
"
```

---

## Syncing from Figma

### Figma Integration

The design system uses the Figma MCP server to fetch theme definitions.

#### Figma File Structure

- **File**: `C-C-Design-System---Components`
- **File Key**: `nadcKNlrnZUHbbLwm9GdK4`
- **Theme Nodes**:
  - Primary: `4800-7262`
  - ATXP: `4800-7424`
  - DBG: `2984-2314`

#### Extracting Node IDs from Figma URLs

Figma URLs have this format:
```
https://www.figma.com/design/[fileKey]/[fileName]?node-id=[nodeId]&m=dev
```

Example:
```
https://www.figma.com/design/nadcKNlrnZUHbbLwm9GdK4/C-C-Design-System---Components?node-id=4800-7262&m=dev
```
- File Key: `nadcKNlrnZUHbbLwm9GdK4`
- Node ID: `4800-7262` (note the hyphen, not colon)

**Important**: When using the node ID in API calls, use the format from the URL exactly.

#### Fetching Theme Variables

```tsx
// Example: Fetch ATXP theme
const variables = await mcp__figma__get_variable_defs({
  fileKey: "nadcKNlrnZUHbbLwm9GdK4",
  nodeId: "4800-7424",
  clientLanguages: "typescript,css",
  clientFrameworks: "react"
});

// Result is a flat object:
{
  "theme/primary": "#000000",
  "theme/background": "#ffffff",
  "theme/border": "#90a1b9",
  // ... etc
}
```

#### Mapping Figma Variables to CSS Tokens

Figma variable names → CSS custom properties:

| Figma Variable | CSS Token |
|----------------|-----------|
| `theme/primary` | `--theme-primary` |
| `theme/foreground` | `--theme-foreground` |
| `theme/muted-foreground` | `--theme-muted-foreground` |
| `color/gray/500` | Not used (raw color, not theme token) |

**Pattern**: Replace `/` with `-` and prefix with `--`.

#### Handling Missing Tokens

If Figma doesn't provide a token that exists in other themes:

1. **Check if it's new**: Did you add a new token type that Figma doesn't have?
   - If yes: Calculate an appropriate value based on the theme's other colors
   - Document that it's not from Figma

2. **Use intelligent defaults**: Copy from a similar theme and adjust

3. **Hover states**: If Figma doesn't provide hover states:
   ```css
   /* Lighten by ~10% for light themes, darken for dark themes */
   --theme-primary: #5d57f8;
   --theme-primary-hover: #5751e2;  /* Slightly darker */
   ```

#### Sync Workflow

**Regular Sync (Recommended: Monthly)**

1. Check for Figma updates in design system file
2. Fetch all theme definitions using MCP tool
3. Compare with current `tokens.css`
4. Update any differences
5. Test all themes
6. Commit with "Sync from Figma [date]" message

**On-Demand Sync**

When designer notifies of changes:
1. Ask for specific node IDs that changed
2. Fetch only those themes
3. Update and test
4. Commit with reference to design change request

---

## Testing Procedures

### Pre-Commit Testing Checklist

Before committing theme changes, verify:

#### 1. Build Tests
```bash
☐ pnpm exec tsc --noEmit     # TypeScript compiles
☐ pnpm build:css              # CSS builds without errors
☐ pnpm build                  # Full build succeeds
```

#### 2. Visual Tests in Storybook

```bash
pnpm storybook
```

For **each theme** (light, dark, atxp, dbg):

☐ Navigate to "Theme/Theme System" story
☐ Select the theme from theme selector
☐ Verify:
  - ☐ Primary color displays correctly
  - ☐ Secondary/muted colors have proper contrast
  - ☐ All badges render correctly (Default, Secondary, Destructive, Outline)
  - ☐ All button variants render correctly
  - ☐ Alerts are readable (Default and Destructive)
  - ☐ Typography has proper contrast
  - ☐ No visual glitches or missing colors

#### 3. Contrast Ratio Tests

For **each theme**, verify WCAG AA compliance:

☐ Normal text (16px): Minimum 4.5:1 contrast
  - Test: foreground on background
  - Test: secondary-foreground on secondary
  - Test: muted-foreground on muted

☐ Large text (18pt+/14pt+ bold): Minimum 3:1 contrast
  - Test: All heading combinations

☐ Interactive elements: Minimum 3:1 contrast
  - Test: border on background
  - Test: primary on background

**Tool**: Use [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

#### 4. Cross-Theme Consistency

☐ Semantic colors are consistent:
  - Success color has similar hue across themes
  - Warning color has similar hue across themes
  - Destructive color has similar hue across themes
  - Info color has similar hue across themes

☐ All themes define the same tokens (no missing variables)

#### 5. Integration Tests

If you have a test application:

☐ Import the design system
☐ Wrap with ThemeProvider
☐ Toggle between all themes
☐ Verify no console errors
☐ Verify localStorage persistence works
☐ Verify auto theme respects system preference

### Regression Testing

When updating existing themes:

☐ Compare before/after screenshots
☐ Check that existing components don't break
☐ Verify no hardcoded colors were introduced
☐ Test with actual application (if available)

---

## Token Reference

### Complete Token List

All themes must define these tokens:

#### Base Tokens
```css
--theme-foreground          /* Main text color */
--theme-background          /* Page background */
--theme-muted               /* Muted background */
--theme-muted-foreground    /* Muted text/borders */
--theme-border              /* Default border color */
--theme-border-hover        /* Border color on hover */
--theme-input               /* Input field background */
--theme-ring                /* Focus ring color */
```

#### Primary Tokens
```css
--theme-primary             /* Primary brand color */
--theme-primary-hover       /* Primary hover state */
--theme-primary-foreground  /* Text on primary background */
```

#### Secondary Tokens
```css
--theme-secondary           /* Secondary background */
--theme-secondary-foreground /* Text on secondary background */
```

#### Accent Tokens
```css
--theme-accent              /* Accent background */
--theme-accent-hover        /* Accent hover state */
--theme-accent-foreground   /* Text on accent background */
--theme-accent-muted        /* Subtle accent background */
```

#### Card Tokens
```css
--theme-card                /* Card background */
--theme-card-foreground     /* Card text color */
```

#### Popover Tokens
```css
--theme-popover             /* Popover background */
--theme-popover-foreground  /* Popover text color */
```

#### Semantic Tokens
```css
--theme-destructive         /* Error/danger color */
--theme-destructive-foreground /* Text on destructive background */

--theme-success             /* Success color */
--theme-success-background-fill /* Success background tint */

--theme-warning             /* Warning color (high priority) */
--theme-warning-foreground  /* Text on warning background */
--theme-warning-alt         /* Warning color (medium priority) */

--theme-info                /* Info/accent color */
--theme-info-foreground     /* Text on info background */
```

#### Chart Tokens
```css
--theme-chart-1             /* Chart color 1 */
--theme-chart-2             /* Chart color 2 */
--theme-chart-3             /* Chart color 3 */
--theme-chart-4             /* Chart color 4 */
--theme-chart-5             /* Chart color 5 */
```

#### Sidebar Tokens
```css
--theme-sidebar-background  /* Sidebar background */
--theme-sidebar-foreground  /* Sidebar text */
--theme-sidebar-primary     /* Sidebar primary element */
--theme-sidebar-primary-foreground /* Text on sidebar primary */
--theme-sidebar-accent      /* Sidebar accent background */
--theme-sidebar-accent-foreground /* Text on sidebar accent */
--theme-sidebar-border      /* Sidebar borders */
```

### Token Naming Conventions

#### Format
`--theme-[element]-[variant]-[state]`

Examples:
- `--theme-primary` (element)
- `--theme-primary-foreground` (element + variant)
- `--theme-primary-hover` (element + state)

#### Semantic vs. Descriptive

**✅ Use Semantic Names** (describes purpose):
```css
--theme-destructive
--theme-success
--theme-primary
```

**❌ Avoid Descriptive Names** (describes appearance):
```css
--theme-red     /* Bad - what if design changes to orange? */
--theme-blue
--theme-dark-bg
```

### Adding New Token Types

If you need to add a new token type to the system:

#### 1. Add to ALL Themes

Add the new token to **every theme** in `tokens.css`:
```css
:root {
  --theme-new-token: #value;
}

[data-theme="dark"] {
  --theme-new-token: #value;
}

[data-theme="atxp"] {
  --theme-new-token: #value;
}

/* ... etc for all themes */
```

#### 2. Add to globals.css

Add to the `@theme` directive in `src/styles/globals.css`:
```css
@theme {
  --color-new-token: var(--theme-new-token);
}
```

#### 3. Add to Tailwind Config

Add to `tailwind.config.ts`:
```typescript
extend: {
  colors: {
    // ... existing colors
    'new-token': 'var(--theme-new-token)',
  }
}
```

#### 4. Document in THEMES.md

Add to the "Theme Token Reference" section.

#### 5. Update This File

Add to the "Complete Token List" section above.

---

## Troubleshooting

### Theme Not Applying

**Symptom**: Theme doesn't change when `data-theme` attribute is set.

**Causes**:
1. CSS not rebuilt after token changes
   - **Solution**: Run `pnpm build:css`

2. Token not defined in the theme
   - **Solution**: Check that ALL tokens are defined in the theme block

3. Component using hardcoded color instead of token
   - **Solution**: Search codebase for `bg-[#` or `text-[#` patterns
   - **Fix**: Replace with semantic token classes

4. Specificity issue
   - **Solution**: Ensure theme selectors have `[data-theme="name"]` format
   - **Check**: No `!important` in theme definitions

### Type Errors

**Symptom**: TypeScript errors about theme type.

**Causes**:
1. Theme name not added to `Theme` type
   - **Solution**: Update all 3 locations in `src/lib/theme.tsx`:
     - `export type Theme`
     - `actualTheme` type in interface
     - `isValidTheme` function

2. Storybook story using wrong theme type
   - **Solution**: Update story file to import and use correct `Theme` type

### Colors Look Wrong

**Symptom**: Colors don't match Figma or look incorrect.

**Causes**:
1. Typo in hex color
   - **Solution**: Verify hex codes match Figma exactly (copy-paste)

2. Using wrong token
   - **Solution**: Check component uses correct semantic token
   - Example: Button should use `bg-primary` not `bg-accent`

3. Token mapping incorrect in globals.css or tailwind.config.ts
   - **Solution**: Verify mapping chain:
     - `tokens.css` → `globals.css` → `tailwind.config.ts`

4. Browser cache
   - **Solution**: Hard refresh (Cmd+Shift+R / Ctrl+Shift+F5)

### Missing Hover States

**Symptom**: Hover states don't work or use wrong color.

**Causes**:
1. `*-hover` token not defined
   - **Solution**: Add hover variant to theme
   - Calculate: Darken by 5-10% for light themes, lighten for dark themes

2. Component not using hover token
   - **Solution**: Update component to use `hover:bg-primary-hover` class

### Storybook Theme Selector Not Working

**Symptom**: Clicking theme buttons doesn't change theme.

**Causes**:
1. Theme name mismatch between `theme.tsx` and story
   - **Solution**: Verify theme names match exactly (case-sensitive, kebab-case)

2. ThemeProvider not wrapping showcase
   - **Solution**: Check story render function includes `<ThemeProvider>`

3. Theme button using wrong `setTheme` value
   - **Solution**: Check button onClick passes valid theme name

### Build Fails

**Symptom**: `pnpm build` or `pnpm build:css` fails.

**Causes**:
1. Invalid CSS syntax
   - **Solution**: Check for missing semicolons, braces, or quotes
   - **Tool**: Use CSS validator or IDE linter

2. Malformed @theme directive
   - **Solution**: Verify globals.css @theme block syntax

3. TypeScript errors
   - **Solution**: Run `pnpm exec tsc --noEmit` for detailed errors

### Dark Mode Not Auto-Detecting

**Symptom**: `theme="auto"` doesn't respect system preference.

**Causes**:
1. Media query not at end of tokens.css
   - **Solution**: Ensure `@media (prefers-color-scheme: dark)` block is LAST

2. Selector specificity issue
   - **Solution**: Media query should target `:root:not([data-theme])`

3. Browser doesn't support `prefers-color-scheme`
   - **Solution**: Check browser compatibility (should work in all modern browsers)

---

## Common Patterns

### Creating Theme Variations

**Pattern**: Light and dark versions of the same brand

```css
/* Light version */
[data-theme="brand"] {
  --theme-primary: #5d57f8;
  --theme-background: #ffffff;
  --theme-foreground: #020618;
}

/* Dark version */
[data-theme="brand-dark"] {
  --theme-primary: #7c77ff;  /* Lighter shade for dark bg */
  --theme-background: #020618;
  --theme-foreground: #f8fafc;
}
```

### High Contrast Themes

For accessibility:

```css
[data-theme="high-contrast"] {
  /* Use pure black/white with no grays */
  --theme-foreground: #000000;
  --theme-background: #ffffff;
  --theme-border: #000000;

  /* Increase border widths via additional tokens if needed */
  --theme-border-width: 2px;
}
```

### Seasonal Themes

```css
[data-theme="holiday"] {
  /* Override only accent colors, keep base colors */
  --theme-primary: #c41e3a;  /* Festive red */
  --theme-accent: #0c7c59;   /* Festive green */
  /* Inherit all other tokens from default */
}
```

### Per-Component Theme Overrides

Use CSS cascade:

```css
[data-theme="special"] .button-primary {
  /* Override specific component in this theme */
  --theme-primary: #different-color;
}
```

---

## Best Practices

### DO ✅

- Keep semantic colors consistent across themes (success = greenish, destructive = reddish)
- Test color contrast ratios for accessibility
- Use Figma as source of truth when possible
- Document why colors were chosen (personality, brand alignment)
- Commit theme changes separately from component changes
- Add comments for non-obvious color choices
- Test in Storybook before committing

### DON'T ❌

- Hardcode colors in components (`bg-[#5d57f8]`)
- Skip testing in all themes
- Add theme-specific logic to components (themes should be automatic)
- Use overly specific selectors (`.my-component[data-theme="dark"]`)
- Forget to update TypeScript types
- Mix theme updates with feature work in same commit
- Add new tokens without updating all themes

---

## Quick Reference

### File Locations
```
src/styles/tokens.css          # Theme definitions
src/styles/globals.css          # Tailwind @theme
src/lib/theme.tsx               # ThemeProvider
tailwind.config.ts              # Utility classes
src/components/Theme/           # Storybook stories
THEMES.md                       # User docs
CLAUDE.md                       # This file
```

### Commands
```bash
pnpm build:css                  # Build CSS only
pnpm build                      # Full build
pnpm exec tsc --noEmit         # Type check
pnpm storybook                  # Visual testing
```

### Figma MCP Tool
```tsx
mcp__figma__get_variable_defs({
  fileKey: "nadcKNlrnZUHbbLwm9GdK4",
  nodeId: "4800-7262",
  clientLanguages: "typescript,css",
  clientFrameworks: "react"
})
```

---

## Version History

| Date | Author | Change |
|------|--------|--------|
| 2025-01-XX | Claude | Initial creation |
| | | Added comprehensive theme maintenance guide |

---

## Questions?

If you encounter issues not covered here:
1. Check the Troubleshooting section
2. Review recent commits for theme changes
3. Consult THEMES.md for user-facing documentation
4. Check Figma design system for reference
5. Ask the team or create a GitHub issue

For AI assistants: This document should be sufficient to handle most theme-related tasks. Follow procedures carefully and test thoroughly.
