import * as React from 'react';

/**
 * Available theme options
 */
export type Theme = 'light' | 'dark' | 'atxp' | 'dbg' | 'auto';

/**
 * Theme context value
 */
interface ThemeContextValue {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  actualTheme: 'light' | 'dark' | 'atxp' | 'dbg';
}

const ThemeContext = React.createContext<ThemeContextValue | undefined>(undefined);

/**
 * Props for ThemeProvider component
 */
export interface ThemeProviderProps {
  children: React.ReactNode;
  /**
   * Default theme to use
   * @default 'auto'
   */
  defaultTheme?: Theme;
  /**
   * Storage key for persisting theme preference
   * @default 'cc-theme'
   */
  storageKey?: string;
  /**
   * Enable localStorage persistence
   * @default true
   */
  enablePersistence?: boolean;
}

/**
 * ThemeProvider Component
 *
 * Provides theme context and manages theme switching for the application.
 *
 * @example
 * ```tsx
 * import { ThemeProvider } from '@circuitandchisel/design-system';
 *
 * function App() {
 *   return (
 *     <ThemeProvider defaultTheme="auto" enablePersistence>
 *       <YourApp />
 *     </ThemeProvider>
 *   );
 * }
 * ```
 */
export function ThemeProvider({
  children,
  defaultTheme = 'auto',
  storageKey = 'cc-theme',
  enablePersistence = true,
}: ThemeProviderProps) {
  const [theme, setThemeState] = React.useState<Theme>(() => {
    if (typeof window === 'undefined') return defaultTheme;

    if (enablePersistence) {
      const stored = window.localStorage.getItem(storageKey);
      if (stored && isValidTheme(stored)) {
        return stored as Theme;
      }
    }

    return defaultTheme;
  });

  const [actualTheme, setActualTheme] = React.useState<'light' | 'dark' | 'atxp' | 'dbg'>(() => {
    if (theme === 'auto') {
      return typeof window !== 'undefined' &&
             window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
    }
    return theme;
  });

  // Update data-theme attribute on document element
  React.useEffect(() => {
    const root = window.document.documentElement;

    if (theme === 'auto') {
      // Remove data-theme to let CSS media query handle it
      root.removeAttribute('data-theme');
    } else {
      root.setAttribute('data-theme', theme);
    }
  }, [theme]);

  // Listen for system theme changes when in auto mode
  React.useEffect(() => {
    if (theme !== 'auto') {
      setActualTheme(theme);
      return;
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
      setActualTheme(e.matches ? 'dark' : 'light');
    };

    // Initial check
    handleChange(mediaQuery);

    // Listen for changes
    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [theme]);

  const setTheme = React.useCallback(
    (newTheme: Theme) => {
      setThemeState(newTheme);

      if (enablePersistence && typeof window !== 'undefined') {
        try {
          window.localStorage.setItem(storageKey, newTheme);
        } catch (error) {
          console.warn('Failed to persist theme preference:', error);
        }
      }
    },
    [enablePersistence, storageKey]
  );

  const value = React.useMemo(
    () => ({
      theme,
      setTheme,
      actualTheme,
    }),
    [theme, setTheme, actualTheme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

/**
 * useTheme Hook
 *
 * Access and control the current theme from any component.
 *
 * @example
 * ```tsx
 * function ThemeToggle() {
 *   const { theme, setTheme, actualTheme } = useTheme();
 *
 *   return (
 *     <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
 *       Current theme: {actualTheme}
 *     </button>
 *   );
 * }
 * ```
 */
export function useTheme() {
  const context = React.useContext(ThemeContext);

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
}

/**
 * Type guard to check if a string is a valid theme
 */
function isValidTheme(value: string): value is Theme {
  return ['light', 'dark', 'atxp', 'dbg', 'auto'].includes(value);
}
