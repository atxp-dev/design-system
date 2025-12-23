# ATXP Design System - Vanilla HTML/CSS/JS

A complete collection of design system components built with pure HTML, CSS, and vanilla JavaScript. **No React required!**

This directory contains vanilla HTML/CSS/JS versions of the ATXP Design System components, perfect for projects that cannot use React or prefer a framework-free approach.

## 🚀 Quick Start

### Option 1: Download the Archive

Download the complete vanilla package as a compressed archive:

```bash
# The build script creates: atxp-design-system-vanilla.tar.gz (~136KB)
# Contains: HTML files, CSS, JavaScript, and all components

tar -xzf atxp-design-system-vanilla.tar.gz
cd atxp-design-system-vanilla
# Open index.html in your browser!
```

The archive includes everything you need to get started with zero configuration.

### Option 2: Manual Setup

### 1. Include the CSS

```html
<link rel="stylesheet" href="../dist/styles.css">
```

The `styles.css` file contains:
- All Tailwind CSS utilities
- Design tokens (colors, spacing, typography)
- All 4 theme definitions (light, dark, ATXP, DBG)

### 2. Include the JavaScript (for interactive components)

```html
<script src="js/components.js"></script>
```

The `components.js` file provides:
- `Dialog` - Modal dialog functionality
- `ThemeSwitcher` - Theme management and persistence
- `Toast` - Toast notification system
- Auto-initialization for data attributes

### 3. Set the Theme

Add the `data-theme` attribute to your `<html>` tag:

```html
<html data-theme="light">  <!-- Options: light, dark, atxp, dbg, auto -->
```

### 4. Use Components

Copy the HTML markup from the component examples:

```html
<button class="inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-lg text-sm font-medium leading-5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2">
  Click Me
</button>
```

## 📁 Directory Structure

```
vanilla/
├── index.html              # Showcase page with all components
├── README.md              # This file
├── components/            # Individual component examples
│   ├── button.html
│   ├── card.html
│   ├── input.html
│   ├── alert.html
│   └── dialog.html
├── js/
│   └── components.js      # Vanilla JS implementations
├── css/                   # (Optional) Additional styles
└── extracted/             # Auto-generated extraction data
    ├── Button.json
    ├── Button.html
    └── ...

extract-components.cjs     # Script to extract class names from React components
```

## 🎨 Available Components

### Static Components (HTML/CSS only)

- **Button** - Interactive buttons with multiple variants and sizes
- **Card** - Container components with header, content, and footer
- **Input** - Form inputs with various types and icon support
- **Alert** - Notification and message components

### Interactive Components (Requires JavaScript)

- **Dialog** - Modal dialogs with overlay and keyboard support
- **Toast** - Toast notifications (success, error, info)
- **Theme Switcher** - Live theme switching with localStorage persistence

## 📋 Component List

### Form Components
- **Checkbox** - Checkboxes for multi-select options
- **Radio** - Radio buttons for single-select options
- **Select** - Dropdown select menus
- **Textarea** - Multi-line text input
- **Input** - Single-line text inputs with icon support

### UI Elements
- **Badge** - Small labels for status, tags, or counts (5 variants, 2 sizes)
- **Avatar** - User profile images with fallback initials
- **Separator** - Horizontal and vertical content dividers

### Interactive Components
- **Tabs** - Tabbed content with vanilla JS
- **Accordion** - Collapsible content sections
- **Progress** - Progress bars with percentage indicators
- **Skeleton** - Loading placeholders

### Layout Components
- **Button** - Buttons with multiple variants and sizes
- **Card** - Container cards with header/content/footer
- **Alert** - Notification and message components
- **Dialog** - Modal dialogs with overlay

## 🎯 Component Examples

### Button

```html
<!-- Default Button -->
<button class="inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-lg text-sm font-medium leading-5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2">
  Default
</button>

<!-- Destructive Button -->
<button class="inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-lg text-sm font-medium leading-5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-destructive text-destructive-foreground hover:bg-destructive/90 h-9 px-4 py-2">
  Destructive
</button>

<!-- Outline Button -->
<button class="inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-lg text-sm font-medium leading-5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-2 border-border bg-background text-accent-foreground shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] hover:bg-muted h-9 px-4 py-2">
  Outline
</button>
```

### Checkbox

```html
<div class="checkbox-item">
  <div class="relative inline-flex items-center">
    <input type="checkbox" id="checkbox-1" class="peer sr-only" />
    <label for="checkbox-1" class="flex h-4 w-4 shrink-0 items-center justify-center rounded-sm border border-primary transition-colors cursor-pointer peer-checked:bg-primary peer-checked:text-primary-foreground peer-focus-visible:outline-none peer-focus-visible:ring-2 peer-focus-visible:ring-ring peer-focus-visible:ring-offset-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="hidden peer-checked:block">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
    </label>
  </div>
  <label for="checkbox-1" class="text-sm cursor-pointer">Accept terms</label>
</div>
```

### Badge

```html
<!-- Default Badge -->
<div class="inline-flex items-center justify-center rounded-lg border border-primary bg-primary text-primary-foreground px-2 py-0.5 text-xs font-semibold">
  New
</div>

<!-- Success Badge -->
<div class="inline-flex items-center justify-center rounded-lg border border-success bg-success-background text-foreground px-2 py-0.5 text-xs font-semibold">
  Active
</div>

<!-- Outline Badge -->
<div class="inline-flex items-center justify-center rounded-lg border border-border bg-transparent text-foreground px-2 py-0.5 text-xs font-semibold">
  Pending
</div>
```

### Avatar

```html
<!-- Avatar with Image -->
<div class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
  <img src="avatar.jpg" alt="User" class="aspect-square h-full w-full object-cover" />
</div>

<!-- Avatar with Fallback -->
<div class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
  <div class="flex h-full w-full items-center justify-center rounded-full bg-muted text-sm font-semibold leading-5 text-foreground">
    JD
  </div>
</div>
```

### Tabs

```html
<!-- Tabs List -->
<div role="tablist" data-tabs="my-tabs">
  <button role="tab" data-tab-trigger="account" class="inline-flex items-center justify-center whitespace-nowrap rounded-xs px-3 py-1.5 text-sm font-medium bg-background text-foreground shadow-sm">
    Account
  </button>
  <button role="tab" data-tab-trigger="password" class="inline-flex items-center justify-center whitespace-nowrap rounded-xs px-3 py-1.5 text-sm font-medium text-muted-foreground">
    Password
  </button>
</div>

<!-- Tabs Content -->
<div class="tabs-content active" id="tab-account" role="tabpanel">
  Account content here
</div>
<div class="tabs-content" id="tab-password" role="tabpanel">
  Password content here
</div>

<!-- JavaScript (inline in components/interactive.html) -->
```

### Accordion

```html
<div class="border-b border-border">
  <button class="accordion-trigger flex flex-1 items-center justify-between py-4 text-base font-medium" data-accordion-trigger="item-1">
    <span>Question?</span>
    <svg><!-- Chevron icon --></svg>
  </button>
  <div class="accordion-content text-sm" data-accordion-content="item-1">
    <div class="pb-4 pt-0">Answer content here</div>
  </div>
</div>
```

### Progress

```html
<div class="relative h-4 w-full overflow-hidden rounded-full bg-secondary" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="60">
  <div class="h-full bg-primary transition-all duration-300 ease-in-out" style="width: 60%"></div>
</div>
```

### Card

```html
<div class="rounded-lg border border-border bg-card text-card-foreground shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
  <!-- Header -->
  <div class="flex flex-col gap-1 p-6">
    <h3 class="text-xl font-semibold leading-7 tracking-normal text-card-foreground">
      Card Title
    </h3>
    <p class="text-sm font-normal leading-5 text-muted-foreground">
      Card Description
    </p>
  </div>

  <!-- Content -->
  <div class="px-6 pb-6 pt-0">
    <p>Card content goes here.</p>
  </div>

  <!-- Footer -->
  <div class="flex items-center justify-end gap-2 px-6 pb-6 pt-0">
    <button class="...">Action</button>
  </div>
</div>
```

### Dialog

```html
<!-- Dialog Trigger -->
<button data-dialog-trigger="my-dialog">Open Dialog</button>

<!-- Dialog Definition -->
<div id="my-dialog" data-dialog-id="my-dialog" style="display: none;">
  <div class="fixed inset-0 z-50 flex items-center justify-center" data-dialog-overlay>
    <!-- Overlay -->
    <div class="fixed inset-0 bg-black/80" aria-hidden="true"></div>

    <!-- Dialog Content -->
    <div
      data-dialog-content
      role="dialog"
      aria-modal="true"
      class="relative z-50 flex w-[512px] flex-col gap-4 overflow-hidden rounded-lg border border-border bg-background p-6 shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-2px_rgba(0,0,0,0.05)]"
    >
      <!-- Close Button -->
      <button data-dialog-close class="absolute right-[15px] top-[15px] rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus-ring-offset-2" aria-label="Close">
        <svg><!-- X icon --></svg>
      </button>

      <!-- Header -->
      <div class="flex flex-col gap-1.5">
        <h2 class="text-lg font-semibold leading-7 text-foreground">Dialog Title</h2>
        <p class="text-sm leading-5 text-muted-foreground">Dialog description</p>
      </div>

      <!-- Content -->
      <div>
        <p>Dialog content</p>
      </div>

      <!-- Footer -->
      <div class="flex items-center justify-end gap-2">
        <button data-dialog-close>Close</button>
      </div>
    </div>
  </div>
</div>
```

## 🔧 JavaScript API

### Dialog

```javascript
// Create a dialog instance
const dialog = new Dialog('my-dialog');

// Open the dialog
dialog.open();

// Close the dialog
dialog.close();

// Toggle the dialog
dialog.toggle();

// Listen for events
document.getElementById('my-dialog').addEventListener('dialog:open', (e) => {
  console.log('Dialog opened:', e.detail.dialogId);
});

document.getElementById('my-dialog').addEventListener('dialog:close', (e) => {
  console.log('Dialog closed:', e.detail.dialogId);
});
```

### ThemeSwitcher

```javascript
// Create a theme switcher instance
const themeSwitcher = new ThemeSwitcher();

// Get current theme
const currentTheme = themeSwitcher.getTheme();

// Set theme
themeSwitcher.setTheme('dark');

// Dispatch theme change event (triggers all listeners)
document.dispatchEvent(new CustomEvent('theme:change', {
  detail: { theme: 'dark' }
}));
```

### Toast

```javascript
// Show a toast
window.toast.show('This is a message!', {
  duration: 3000,
  variant: 'default', // 'default', 'success', 'destructive'
  title: 'Optional Title'
});

// Success toast
window.toast.show('Operation completed!', {
  variant: 'success',
  title: 'Success'
});

// Error toast
window.toast.show('Something went wrong', {
  variant: 'destructive',
  title: 'Error'
});
```

## 🎨 Theme System

The design system includes 4 built-in themes:

1. **Light** (default) - Clean, bright theme
2. **Dark** - Dark mode with high contrast
3. **ATXP** - ATXP brand theme with black primary color
4. **DBG** - DBG brand theme with cyan/teal accent
5. **Auto** - Automatically switches between light/dark based on system preference

### Theme Switching

#### Using Data Attributes

```html
<!-- Theme selector -->
<select data-theme-control>
  <option value="light">Light</option>
  <option value="dark">Dark</option>
  <option value="atxp">ATXP</option>
  <option value="dbg">DBG</option>
  <option value="auto">Auto</option>
</select>

<!-- Theme buttons -->
<button data-theme-control data-theme-value="light">Light</button>
<button data-theme-control data-theme-value="dark">Dark</button>
```

#### Programmatically

```javascript
// Change theme via JavaScript
window.themeSwitcher.setTheme('dark');

// Or dispatch event
document.dispatchEvent(new CustomEvent('theme:change', {
  detail: { theme: 'dark' }
}));
```

### Custom Themes

To create a custom theme, define CSS variables with the `data-theme` attribute:

```css
[data-theme="custom"] {
  --theme-primary: #ff0000;
  --theme-primary-foreground: #ffffff;
  --theme-background: #ffffff;
  --theme-foreground: #000000;
  /* ... all other theme tokens */
}
```

See `src/styles/themes/` for complete token lists.

## 🛠️ Extraction Script

Use the extraction script to automatically generate HTML templates from React components:

```bash
# Extract a single component
node vanilla/extract-components.cjs Button

# Extract all components
node vanilla/extract-components.cjs --all
```

The script generates:
- JSON files with extracted class names and variants
- HTML template files
- A comprehensive class reference guide

## 📦 Distribution

### For Static Sites

1. Copy `/dist/styles.css` to your project
2. Copy `/vanilla/js/components.js` to your project
3. Copy component markup from `/vanilla/components/`

### For CDN Usage

```html
<!-- CSS -->
<link rel="stylesheet" href="https://unpkg.com/@atxp/design-system/dist/styles.css">

<!-- JavaScript -->
<script src="https://unpkg.com/@atxp/design-system/vanilla/js/components.js"></script>
```

## 🔍 Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)

Requires:
- CSS Variables support
- ES6+ JavaScript features
- LocalStorage (for theme persistence)

## 📚 Full Documentation

- [Main Documentation](../README.md)
- [Theme Guide](../THEMES.md)
- [Component Examples](./index.html)
- [Individual Components](./components/)

## 🤝 Contributing

To add a new vanilla component:

1. Create a new HTML file in `components/`
2. Extract classes using `extract-components.cjs`
3. Add JavaScript functionality to `js/components.js` if needed
4. Update this README with examples
5. Add link to main `index.html` showcase

## 📄 License

MIT License - see [LICENSE](../LICENSE) for details

## 🙋 Support

For issues and questions:
- GitHub Issues: https://github.com/atxp/design-system/issues
- Documentation: https://design-system.atxp.com

---

**Built with ❤️ using HTML, CSS, and vanilla JavaScript**
