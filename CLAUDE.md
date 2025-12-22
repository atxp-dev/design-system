# Theme System Maintenance Guide

Quick reference for maintaining themes in the Circuit & Chisel Design System.

## File Structure

- `src/styles/tokens.css` - Theme definitions (CSS variables)
- `src/styles/globals.css` - Tailwind @theme directive
- `tailwind.config.ts` - Tailwind utility mappings
- `src/lib/theme.tsx` - ThemeProvider & useTheme hook
- `THEMES.md` - User documentation

---

## Adding a New Theme

1. **Fetch from Figma** (if applicable):
```tsx
mcp__figma__get_variable_defs({
  fileKey: "nadcKNlrnZUHbbLwm9GdK4",
  nodeId: "YOUR-NODE-ID",  // From Figma URL: ?node-id=4800-7262
  clientLanguages: "typescript,css",
  clientFrameworks: "react"
})
```

2. **Add to `tokens.css`**: Copy existing theme block, rename `[data-theme="new-name"]`, update all ~40 color tokens

3. **Update `theme.tsx`**: Add theme name to 3 places:
   - `export type Theme = ... | 'new-name' | ...`
   - `actualTheme: ... | 'new-name'` in interface
   - `isValidTheme` function array

4. **Update `Theme.stories.tsx`**: Add to themes array and create story export

5. **Update `THEMES.md`**: Add to theme list and examples

6. **Test**: `pnpm exec tsc --noEmit && pnpm build && pnpm storybook`

7. **Commit**: Include theme name, colors, and use case

---

## Updating an Existing Theme

1. **Fetch from Figma**: Use same command as above with theme's node ID
2. **Update `tokens.css`**: Change only modified tokens, add comment explaining why
3. **Test**: Run build and check contrast ratios at webaim.org/resources/contrastchecker
4. **Update docs**: If theme purpose changed significantly
5. **Commit**: Note what changed and why

---

## Figma Sync

**Figma File**: `nadcKNlrnZUHbbLwm9GdK4`

**Theme Node IDs**:
- Primary: `4800-7262`
- ATXP: `4800-7424`
- DBG: `2984-2314`

**Extract Node ID from URL**:
```
https://www.figma.com/design/[fileKey]/...?node-id=4800-7262
                                                    ↑ Use this
```

**Map Figma to CSS**: `theme/primary` → `--theme-primary` (replace `/` with `-`, add `--` prefix)

**Monthly Sync**: Fetch all themes, compare with `tokens.css`, update differences, test, commit

---

## Testing Checklist

**Build**:
```bash
☐ pnpm exec tsc --noEmit
☐ pnpm build:css
☐ pnpm build
```

**Visual** (`pnpm storybook`):
- For each theme: ☐ Colors correct ☐ Contrast readable ☐ No glitches

**Contrast** (webaim.org/resources/contrastchecker):
- ☐ foreground/background ≥ 4.5:1
- ☐ primary/background ≥ 3:1

---

## Required Tokens (40+)

Base: `foreground, background, muted, muted-foreground, border, border-hover, input, ring`

Primary: `primary, primary-hover, primary-foreground`

Secondary: `secondary, secondary-foreground`

Accent: `accent, accent-hover, accent-foreground, accent-muted`

Card: `card, card-foreground`

Popover: `popover, popover-foreground`

Semantic: `destructive, destructive-foreground, success, success-background-fill, warning, warning-foreground, warning-alt, info, info-foreground`

Chart: `chart-1, chart-2, chart-3, chart-4, chart-5`

Sidebar: `sidebar-background, sidebar-foreground, sidebar-primary, sidebar-primary-foreground, sidebar-accent, sidebar-accent-foreground, sidebar-border`

All prefixed with `--theme-`

---

## Quick Commands

```bash
pnpm build:css                  # Build CSS only
pnpm build                      # Full build
pnpm exec tsc --noEmit         # Type check
pnpm storybook                  # Visual testing
```
