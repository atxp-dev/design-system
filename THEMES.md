# Theme System

Circuit & Chisel Design System supports multiple themes with easy runtime switching.

## Available Themes

### Built-in Themes

- **`light`** (default) - Primary brand theme from Figma design system (purple/blue primary)
- **`dark`** - Dark mode optimized for low-light environments
- **`atxp`** - Professional black primary with blue accents
- **`dbg`** - Cyan/turquoise primary with modern, fresh aesthetic
- **`auto`** - Automatically adapts to system preference (light/dark)

## Usage

### React Applications

The easiest way to use themes in a React application is with the `ThemeProvider`:

```tsx
import { ThemeProvider } from '@circuitandchisel/design-system';
import '@circuitandchisel/design-system/styles.css';

function App() {
  return (
    <ThemeProvider defaultTheme="auto" enablePersistence>
      <YourApp />
    </ThemeProvider>
  );
}
```

#### ThemeProvider Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `defaultTheme` | `'light' \| 'dark' \| 'ocean' \| 'forest' \| 'auto'` | `'auto'` | Initial theme |
| `storageKey` | `string` | `'cc-theme'` | localStorage key for persistence |
| `enablePersistence` | `boolean` | `true` | Save theme preference to localStorage |

### Using the useTheme Hook

Access and control themes from any component:

```tsx
import { useTheme } from '@circuitandchisel/design-system';

function ThemeToggle() {
  const { theme, setTheme, actualTheme } = useTheme();

  return (
    <div>
      <p>Current theme: {actualTheme}</p>
      <button onClick={() => setTheme('light')}>Light</button>
      <button onClick={() => setTheme('dark')}>Dark</button>
      <button onClick={() => setTheme('atxp')}>ATXP</button>
      <button onClick={() => setTheme('dbg')}>DBG</button>
      <button onClick={() => setTheme('auto')}>Auto</button>
    </div>
  );
}
```

#### useTheme Return Value

| Property | Type | Description |
|----------|------|-------------|
| `theme` | `Theme` | Current theme setting (may be 'auto') |
| `setTheme` | `(theme: Theme) => void` | Function to change theme |
| `actualTheme` | `'light' \| 'dark' \| 'atxp' \| 'dbg'` | Resolved theme (never 'auto') |

### Vanilla JavaScript / Other Frameworks

Set the theme by adding a `data-theme` attribute to the `<html>` element:

```html
<!-- Light theme (default) -->
<html>

<!-- Dark theme -->
<html data-theme="dark">

<!-- ATXP theme -->
<html data-theme="atxp">

<!-- DBG theme -->
<html data-theme="dbg">
```

#### JavaScript Theme Switching

```javascript
// Set theme
document.documentElement.setAttribute('data-theme', 'dark');

// Get current theme
const theme = document.documentElement.getAttribute('data-theme') || 'light';

// Remove theme (uses auto/system preference)
document.documentElement.removeAttribute('data-theme');

// Listen for system preference changes
const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
mediaQuery.addEventListener('change', (e) => {
  console.log('System theme changed to:', e.matches ? 'dark' : 'light');
});
```

## Creating Custom Themes

You can create custom themes by adding CSS with data attribute selectors:

### 1. Create a custom CSS file

```css
/* custom-theme.css */
[data-theme="custom"] {
  /* Base Colors */
  --theme-foreground: #1a1a1a;
  --theme-background: #ffffff;
  --theme-muted: #f5f5f5;
  --theme-border: #e0e0e0;

  /* Primary Colors */
  --theme-primary: #ff6b6b;
  --theme-primary-foreground: #ffffff;

  /* Secondary Colors */
  --theme-secondary: #f0f0f0;
  --theme-secondary-foreground: #333333;

  /* Semantic Colors */
  --theme-destructive: #dc3545;
  --theme-destructive-foreground: #ffffff;

  --theme-success: #28a745;
  --theme-success-background-fill: #d4edda;

  --theme-warning: #ffc107;
  --theme-warning-foreground: #212529;
  --theme-warning-alt: #fd7e14;

  --theme-info: #17a2b8;
  --theme-info-foreground: #ffffff;

  /* Muted Colors */
  --theme-muted-foreground: #d0d0d0;
  --theme-accent-muted: #e8e8e8;
}
```

### 2. Import your custom theme

```tsx
import '@circuitandchisel/design-system/styles.css';
import './custom-theme.css';
```

### 3. Use your custom theme

```tsx
<ThemeProvider defaultTheme="custom">
  <YourApp />
</ThemeProvider>
```

Or with vanilla JS:

```javascript
document.documentElement.setAttribute('data-theme', 'custom');
```

## Theme Token Reference

All themes must define these CSS custom properties:

### Base Colors
- `--theme-foreground` - Main text color
- `--theme-background` - Page background color
- `--theme-muted` - Muted background color
- `--theme-border` - Border color

### Primary Colors
- `--theme-primary` - Primary brand color
- `--theme-primary-foreground` - Text color on primary background

### Secondary Colors
- `--theme-secondary` - Secondary background color
- `--theme-secondary-foreground` - Text color on secondary background

### Semantic Colors
- `--theme-destructive` - Error/danger color
- `--theme-destructive-foreground` - Text color on destructive background
- `--theme-success` - Success color
- `--theme-success-background-fill` - Success background color
- `--theme-warning` - Warning color (high priority)
- `--theme-warning-foreground` - Text color on warning background
- `--theme-warning-alt` - Alternative warning color (medium priority)
- `--theme-info` - Info/accent color
- `--theme-info-foreground` - Text color on info background

### Muted Colors
- `--theme-muted-foreground` - Subtle text/border color
- `--theme-accent-muted` - Subtle accent background color

## Best Practices

### 1. Respect System Preferences

Use `defaultTheme="auto"` to respect user's system-level dark mode preference:

```tsx
<ThemeProvider defaultTheme="auto" />
```

### 2. Persist User Choice

Enable persistence to remember user's theme selection:

```tsx
<ThemeProvider defaultTheme="auto" enablePersistence />
```

### 3. Prevent Flash of Wrong Theme (FOWT)

For server-side rendered applications, set the theme before hydration:

```html
<script>
  (function() {
    const theme = localStorage.getItem('cc-theme');
    if (theme && theme !== 'auto') {
      document.documentElement.setAttribute('data-theme', theme);
    }
  })();
</script>
```

### 4. Accessible Color Contrast

When creating custom themes, ensure adequate color contrast:
- Normal text: minimum 4.5:1 contrast ratio
- Large text (18pt+ or 14pt+ bold): minimum 3:1 contrast ratio
- Use tools like [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

### 5. Test All Themes

Ensure your UI works correctly in all available themes:

```tsx
function ThemeTestWrapper({ children }) {
  const themes = ['light', 'dark', 'atxp', 'dbg'];
  const [index, setIndex] = useState(0);

  return (
    <ThemeProvider defaultTheme={themes[index]}>
      <button onClick={() => setIndex((i) => (i + 1) % themes.length)}>
        Current: {themes[index]}
      </button>
      {children}
    </ThemeProvider>
  );
}
```

## Advanced Usage

### Theme-Specific Styles

Target specific themes with CSS:

```css
/* Only in dark theme */
[data-theme="dark"] .my-component {
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
}

/* Only in ATXP theme */
[data-theme="atxp"] .my-component {
  border-width: 2px; /* Professional, defined borders */
}
```

### Conditional Theme Rendering

```tsx
function MyComponent() {
  const { actualTheme } = useTheme();

  return (
    <div>
      {actualTheme === 'dark' && <MoonIcon />}
      {actualTheme === 'light' && <SunIcon />}
      {actualTheme === 'atxp' && <BriefcaseIcon />}
      {actualTheme === 'dbg' && <SparklesIcon />}
    </div>
  );
}
```

### Multiple Theme Providers

You can nest theme providers for different sections:

```tsx
function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <Header />

      {/* Dashboard always uses dark theme */}
      <ThemeProvider defaultTheme="dark">
        <Dashboard />
      </ThemeProvider>

      <Footer />
    </ThemeProvider>
  );
}
```

## Migration Guide

### From Hardcoded Colors

If you have hardcoded colors in your application:

**Before:**
```tsx
<div style={{ color: '#020618', background: '#ffffff' }}>
```

**After:**
```tsx
<div className="text-foreground bg-background">
```

Or use CSS variables directly:
```css
.my-class {
  color: var(--theme-foreground);
  background: var(--theme-background);
}
```

### From Previous Version

If you're upgrading from a version without theme support, the default theme is identical to the previous static colors, so no changes are required unless you want to enable theme switching.

## Troubleshooting

### Theme Not Applying

1. Ensure you've imported the styles:
   ```tsx
   import '@circuitandchisel/design-system/styles.css';
   ```

2. Check that ThemeProvider wraps your app:
   ```tsx
   <ThemeProvider>
     <App />
   </ThemeProvider>
   ```

3. Verify data-theme attribute is set:
   ```javascript
   console.log(document.documentElement.getAttribute('data-theme'));
   ```

### Flash of Wrong Theme (FOWT)

Add the theme script before React hydration (see "Prevent Flash of Wrong Theme" above).

### Custom Theme Not Working

1. Ensure your custom CSS is loaded after the design system styles
2. Verify all required CSS variables are defined
3. Check browser DevTools to confirm variables are being applied

## Support

For issues or questions about theming:
- [GitHub Issues](https://github.com/circuitandchisel/design-system/issues)
- Reference the base theme in `src/styles/tokens.css` for token definitions
