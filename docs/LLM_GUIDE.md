# ATXP Design System - LLM Agent Quick Start Guide

**Purpose**: This guide helps LLM coding agents effectively use the ATXP Design System to generate correct, accessible React components.

**Target Audience**: AI coding assistants, code generation tools, and LLM agents

**Last Updated**: 2025-12-22

---

## Quick Start

### Installation

```bash
# Install the design system
pnpm add @atxp/design-system

# Install required peer dependencies
pnpm add lucide-react sonner

# or with npm
npm install @atxp/design-system lucide-react sonner
```

**Required Peer Dependencies:**
- `lucide-react`: Icon library (re-exported by the design system)
- `sonner`: Toast notification library (re-exported by the design system)

### Basic Setup

```tsx
// 1. Import styles in your app entry point (main.tsx, _app.tsx, etc.)
import '@atxp/design-system/styles.css';

// 2. Wrap your app with ThemeProvider (optional, for theme switching)
import { ThemeProvider } from '@atxp/design-system';

function App() {
  return (
    <ThemeProvider defaultTheme="auto">
      {/* Your app */}
    </ThemeProvider>
  );
}
```

### Basic Imports

```tsx
// Components
import { Button, Card, Input, Badge } from '@atxp/design-system';

// Theme utilities
import { ThemeProvider, useTheme } from '@atxp/design-system';

// Utility function for class merging
import { cn } from '@atxp/design-system';
```

---

## Core Concepts

### Component Philosophy

All components follow these patterns:
- **forwardRef**: All components support ref forwarding for DOM access
- **Native HTML**: Built on native HTML elements with enhanced styling
- **Tailwind Classes**: Styled with Tailwind utility classes using design tokens
- **TypeScript**: Full type safety with exported prop interfaces

### Styling Pattern

Use the `cn()` utility to merge classes safely:

```tsx
import { Button, cn } from '@atxp/design-system';

<Button className={cn('my-custom-class', isActive && 'opacity-50')}>
  Click me
</Button>
```

### Theme Tokens

All design tokens are available as Tailwind utilities:
- Colors: `bg-primary`, `text-foreground`, `border-border`
- Semantic: `bg-destructive`, `text-success`, `bg-warning`
- State: `hover:bg-primary-hover`, `focus:ring-ring`

> **TIP**: Always use theme tokens (`bg-primary`) instead of arbitrary values (`bg-blue-500`) to maintain theme consistency.

---

## Form Components

### Button

```tsx
import { Button } from '@atxp/design-system';

// Basic
<Button>Click me</Button>

// Variants
<Button variant="destructive">Delete</Button>
<Button variant="outline">Cancel</Button>
<Button variant="ghost">Dismiss</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
<Button size="icon"><Icon icon={Plus} /></Button>
```

**Key Props**: `variant` (default | destructive | outline | secondary | ghost | link | success), `size` (default | sm | lg | icon), `disabled`

### Input

```tsx
import { Input } from '@atxp/design-system';

// Basic
<Input type="email" placeholder="you@example.com" />

// With icon
<Input type="text" icon={<Icon icon={Search} size={16} />} />

// Disabled
<Input disabled value="Read only" />
```

**Key Props**: `type`, `placeholder`, `icon`, `disabled`, extends all standard input attributes

### Label

```tsx
import { Label } from '@atxp/design-system';

<Label htmlFor="email">Email Address</Label>
<Input id="email" type="email" />
```

**Key Props**: `htmlFor` (links to input id)

### Textarea

```tsx
import { Textarea } from '@atxp/design-system';

<Textarea placeholder="Enter your message" rows={4} />
```

**Key Props**: `rows`, `placeholder`, extends all standard textarea attributes

### Checkbox

```tsx
import { Checkbox } from '@atxp/design-system';

<div className="flex items-center gap-2">
  <Checkbox id="terms" onCheckedChange={(checked) => setAccepted(checked)} />
  <label htmlFor="terms">I agree to the terms</label>
</div>
```

**Key Props**: `id`, `checked`, `onCheckedChange`, `disabled`

### Radio

```tsx
import { Radio } from '@atxp/design-system';

<div className="flex items-center gap-2">
  <Radio id="yes" name="notify" value="yes" />
  <label htmlFor="yes">Yes</label>
</div>
```

**Key Props**: `id`, `name`, `value`, `checked`, `onChange`

### Switch

```tsx
import { Switch } from '@atxp/design-system';

<div className="flex items-center gap-2">
  <Switch id="darkMode" />
  <label htmlFor="darkMode">Dark Mode</label>
</div>
```

**Key Props**: `id`, `checked`, `onCheckedChange`, `disabled`

### Select

```tsx
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@atxp/design-system';

<Select>
  <SelectTrigger className="w-[200px]">
    <SelectValue placeholder="Choose option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
    <SelectItem value="option2">Option 2</SelectItem>
  </SelectContent>
</Select>
```

**Key Components**: `Select` (root), `SelectTrigger` (button), `SelectValue` (display), `SelectContent` (dropdown), `SelectItem` (option)

### Slider

```tsx
import { Slider } from '@atxp/design-system';

// Single value
<Slider defaultValue={[50]} max={100} step={1} />

// Range
<Slider defaultValue={[25, 75]} max={100} step={1} />
```

**Key Props**: `defaultValue` (array), `max`, `min`, `step`, `disabled`

---

## Layout Components

### Card

```tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@atxp/design-system';

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Supporting text goes here</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Main content area</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

**Key Components**: `Card` (container), `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`

### Tabs

```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@atxp/design-system';

<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content 1</TabsContent>
  <TabsContent value="tab2">Content 2</TabsContent>
</Tabs>
```

**Key Components**: `Tabs` (root with defaultValue), `TabsList` (button group), `TabsTrigger` (tab button), `TabsContent` (panel)

### Separator

```tsx
import { Separator } from '@atxp/design-system';

<div>
  <p>Content above</p>
  <Separator className="my-4" />
  <p>Content below</p>
</div>
```

**Key Props**: `orientation` (horizontal | vertical), `className`

### Accordion

```tsx
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@atxp/design-system';

<Accordion type="single" collapsible>
  <AccordionItem value="item1">
    <AccordionTrigger>Section 1</AccordionTrigger>
    <AccordionContent>Content for section 1</AccordionContent>
  </AccordionItem>
</Accordion>
```

**Key Props**: `type` (single | multiple), `collapsible`

---

## Navigation Components

### NavHeader

```tsx
import {
  NavHeader,
  NavHeaderBrand,
  NavHeaderNav,
  NavHeaderItem,
} from '@atxp/design-system';

<NavHeader>
  <NavHeaderBrand>
    <h1 className="text-xl font-bold">My App</h1>
  </NavHeaderBrand>
  <NavHeaderNav>
    <NavHeaderItem selected>Dashboard</NavHeaderItem>
    <NavHeaderItem>Settings</NavHeaderItem>
  </NavHeaderNav>
</NavHeader>
```

**Key Components**: `NavHeader` (container), `NavHeaderBrand` (logo area), `NavHeaderNav` (links container), `NavHeaderItem` (link with `selected` prop)

### NavSidePanel

```tsx
import {
  NavSidePanel,
  NavSidePanelHeader,
  NavSidePanelBrand,
  NavSidePanelNav,
  NavSidePanelItem,
} from '@atxp/design-system';

<NavSidePanel>
  <NavSidePanelHeader>
    <NavSidePanelBrand>Logo</NavSidePanelBrand>
  </NavSidePanelHeader>
  <NavSidePanelNav>
    <NavSidePanelItem selected icon={<Icon icon={Home} />}>
      Dashboard
    </NavSidePanelItem>
    <NavSidePanelItem icon={<Icon icon={Settings} />}>
      Settings
    </NavSidePanelItem>
  </NavSidePanelNav>
</NavSidePanel>
```

**Key Props**: `selected` (boolean), `icon` (ReactNode)

---

## Feedback Components

### Alert

```tsx
import { Alert, AlertTitle, AlertDescription } from '@atxp/design-system';

<Alert variant="destructive">
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>Something went wrong. Please try again.</AlertDescription>
</Alert>
```

**Variants**: `default`, `destructive`

### Badge

```tsx
import { Badge } from '@atxp/design-system';

<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Error</Badge>
<Badge variant="success">Success</Badge>
```

**Variants**: `default`, `secondary`, `destructive`, `outline`, `success`
**Sizes**: `sm`, `md`

### Dialog

```tsx
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@atxp/design-system';

const [open, setOpen] = useState(false);

<Dialog open={open} onOpenChange={setOpen}>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Confirm Action</DialogTitle>
      <DialogDescription>Are you sure you want to proceed?</DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
      <Button onClick={() => setOpen(false)}>Confirm</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

**Key Props**: `open` (boolean), `onOpenChange` (callback)

### Progress

```tsx
import { Progress } from '@atxp/design-system';

<Progress value={60} />
```

**Key Props**: `value` (0-100)

### Toast

```tsx
import { Toast } from '@atxp/design-system';

// Usage depends on toast implementation
// Check component documentation for specific API
```

---

## Data Display Components

### Table

```tsx
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from '@atxp/design-system';

<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Status</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>John Doe</TableCell>
      <TableCell>Active</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

**Key Components**: `Table`, `TableHeader`, `TableBody`, `TableRow`, `TableHead`, `TableCell`

### Avatar

```tsx
import { Avatar } from '@atxp/design-system';

<Avatar src="/profile.jpg" alt="User name" />
```

**Key Props**: `src`, `alt`, `fallback`

### Skeleton

```tsx
import { Skeleton } from '@atxp/design-system';

// Loading placeholder
<Skeleton className="h-4 w-full" />
<Skeleton className="h-10 w-10 rounded-full" />
```

**Key Props**: `className` (for sizing and shape)

### Indicators

```tsx
import { IndicatorDot, IndicatorCircle } from '@atxp/design-system';

<IndicatorDot variant="success" />
<IndicatorCircle variant="warning" />
```

**Variants**: `default`, `success`, `warning`, `destructive`

---

## Theme System

### Available Themes

- `light` - Default light theme
- `dark` - Dark mode (optimized for low-light)
- `atxp` - ATXP brand theme (professional black with blue accents)
- `dbg` - DBG brand theme (cyan/turquoise primary)
- `auto` - Automatically follows system preference

### Theme Provider

```tsx
import { ThemeProvider } from '@atxp/design-system';

<ThemeProvider defaultTheme="auto" enablePersistence>
  <App />
</ThemeProvider>
```

**Props**:
- `defaultTheme`: Initial theme (default: `'auto'`)
- `enablePersistence`: Save theme to localStorage (default: `true`)
- `storageKey`: LocalStorage key (default: `'cc-theme'`)

### Theme Switching

```tsx
import { useTheme } from '@atxp/design-system';

function ThemeToggle() {
  const { theme, setTheme, actualTheme } = useTheme();

  return (
    <Button onClick={() => setTheme(actualTheme === 'dark' ? 'light' : 'dark')}>
      Toggle Theme
    </Button>
  );
}
```

**useTheme Returns**:
- `theme`: Current selection (may be `'auto'`)
- `actualTheme`: Resolved theme (`'light'`, `'dark'`, `'atxp'`, or `'dbg'`)
- `setTheme`: Function to change theme

---

## Common Patterns

### Form with Validation UI

```tsx
<div className="space-y-4">
  <div>
    <Label htmlFor="email">Email</Label>
    <Input id="email" type="email" placeholder="you@example.com" />
    {error && <p className="text-sm text-destructive mt-1">{error}</p>}
  </div>

  <div className="flex items-center gap-2">
    <Checkbox id="terms" />
    <label htmlFor="terms" className="text-sm">I agree to terms</label>
  </div>

  <Button type="submit">Submit</Button>
</div>
```

### Modal/Dialog Pattern

```tsx
function DeleteConfirmation() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="destructive" onClick={() => setOpen(true)}>
        Delete
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
            <DialogDescription>
              This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDelete}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
```

### Card Layout

```tsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  <Card>
    <CardHeader>
      <CardTitle>Total Users</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-3xl font-bold">1,234</p>
    </CardContent>
  </Card>

  <Card>
    <CardHeader>
      <CardTitle>Revenue</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-3xl font-bold">$45,678</p>
    </CardContent>
  </Card>
</div>
```

### Navigation Setup

```tsx
function Layout() {
  return (
    <div className="flex h-screen">
      <NavSidePanel>
        <NavSidePanelHeader>
          <NavSidePanelBrand>My App</NavSidePanelBrand>
        </NavSidePanelHeader>
        <NavSidePanelNav>
          <NavSidePanelItem selected>Dashboard</NavSidePanelItem>
          <NavSidePanelItem>Settings</NavSidePanelItem>
        </NavSidePanelNav>
      </NavSidePanel>

      <main className="flex-1 overflow-auto">
        <NavHeader>
          <NavHeaderBrand>Page Title</NavHeaderBrand>
          <NavHeaderNav>
            <NavHeaderItem>Profile</NavHeaderItem>
          </NavHeaderNav>
        </NavHeader>

        {/* Page content */}
      </main>
    </div>
  );
}
```

### Table with Actions

```tsx
<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Status</TableHead>
      <TableHead className="text-right">Actions</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {users.map((user) => (
      <TableRow key={user.id}>
        <TableCell>{user.name}</TableCell>
        <TableCell>
          <Badge variant={user.active ? 'success' : 'secondary'}>
            {user.active ? 'Active' : 'Inactive'}
          </Badge>
        </TableCell>
        <TableCell className="text-right">
          <Button size="sm" variant="ghost">Edit</Button>
          <Button size="sm" variant="ghost">Delete</Button>
        </TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>
```

### Loading States

```tsx
function LoadingCard() {
  return (
    <Card>
      <CardHeader>
        <Skeleton className="h-6 w-32" />
        <Skeleton className="h-4 w-48 mt-2" />
      </CardHeader>
      <CardContent>
        <Skeleton className="h-20 w-full" />
      </CardContent>
    </Card>
  );
}
```

---

## Quick Reference

### All Components (38 Total)

| Component | Category | Description |
|-----------|----------|-------------|
| **Accordion** | Layout | Collapsible content sections |
| **Alert** | Feedback | Alert messages with variants |
| **AlertDialog** | Feedback | Modal alert dialog |
| **Avatar** | Data Display | User avatar/profile image |
| **Badge** | Feedback | Status or label badge |
| **Breadcrumb** | Navigation | Breadcrumb navigation trail |
| **Button** | Form | Clickable button with variants |
| **ButtonGroup** | Layout | Group of related buttons |
| **Card** | Layout | Content container with sections |
| **Carousel** | Data Display | Image/content carousel |
| **Checkbox** | Form | Checkbox input |
| **Dialog** | Feedback | Modal dialog overlay |
| **Drawer** | Feedback | Slide-out drawer panel |
| **Header** | Layout | Page header component |
| **HoverCard** | Feedback | Content on hover |
| **Icon** | Utility | Lucide icon wrapper |
| **Indicators** | Data Display | Status indicators (dot/circle) |
| **Input** | Form | Text input field |
| **InputGroup** | Form | Grouped form inputs |
| **Label** | Form | Form label for inputs |
| **Menubar** | Navigation | Horizontal menu bar |
| **NavHeader** | Navigation | Top navigation header |
| **NavSidePanel** | Navigation | Vertical side navigation |
| **Pagination** | Navigation | Pagination controls |
| **Popover** | Feedback | Floating popover content |
| **Progress** | Feedback | Progress bar indicator |
| **Radio** | Form | Radio button input |
| **Select** | Form | Dropdown select menu |
| **Separator** | Layout | Visual divider line |
| **Sheet** | Feedback | Slide-in sheet panel |
| **Skeleton** | Feedback | Loading placeholder |
| **Slider** | Form | Range slider input |
| **Switch** | Form | Toggle switch |
| **Table** | Data Display | Data table with rows/columns |
| **Tabs** | Layout | Tabbed content panels |
| **Textarea** | Form | Multi-line text input |
| **Toast** | Feedback | Toast notification |
| **Toggle** | Form | Two-state toggle button |

### Common Color Tokens

| Token | Tailwind Classes | Usage |
|-------|-----------------|--------|
| Primary | `bg-primary`, `text-primary`, `border-primary` | Brand color, main actions |
| Secondary | `bg-secondary`, `text-secondary-foreground` | Secondary backgrounds |
| Destructive | `bg-destructive`, `text-destructive` | Errors, delete actions |
| Success | `bg-success`, `text-white` | Success states |
| Warning | `bg-warning`, `text-warning-foreground` | Warning states |
| Muted | `bg-muted`, `text-muted-foreground` | Subtle backgrounds, secondary text |
| Accent | `bg-accent`, `text-accent-foreground` | Highlights, hover states |
| Background | `bg-background`, `text-foreground` | Page backgrounds, body text |
| Border | `border-border`, `border-border-hover` | Borders, dividers |

### Button Variants

| Variant | Usage |
|---------|-------|
| `default` | Primary actions (blue/purple) |
| `destructive` | Delete, remove actions (red) |
| `outline` | Secondary actions with border |
| `secondary` | Low-emphasis actions |
| `ghost` | Minimal actions, menu items |
| `link` | Text links styled as buttons |
| `success` | Confirmation actions (green) |

### Badge Variants

| Variant | Usage |
|---------|-------|
| `default` | General labels (primary color) |
| `secondary` | Neutral status |
| `destructive` | Error states |
| `outline` | Bordered badges |
| `success` | Success states |

---

## Important Notes for LLMs

> **TIP**: All components use `React.forwardRef` - you can safely pass `ref` props to any component.

> **TIP**: Use the `cn()` utility to merge classes: `className={cn('base-class', conditionalClass, props.className)}`

> **TIP**: Always import styles in your app entry point: `import '@atxp/design-system/styles.css'`

> **TIP**: Theme tokens (like `bg-primary`) automatically adapt to the active theme - never use hardcoded colors like `bg-blue-500`.

> **TIP**: For compound components (Card, Table, Dialog, Select), always use the provided sub-components rather than custom markup.

> **TIP**: Icons use lucide-react - import icons and pass to the `Icon` component: `<Icon icon={AlertCircle} size={16} />`

---

## Additional Resources

- **Full Theme Documentation**: See `THEMES.md` for complete theme customization guide
- **Component Stories**: All components have Storybook stories with examples
- **TypeScript Types**: All component props are fully typed and exported
- **Figma Designs**: Linked in component story files

---

*This guide is optimized for LLM code generation. For human-readable documentation, see README.md and THEMES.md.*
