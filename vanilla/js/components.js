/**
 * ATXP Design System - Vanilla JavaScript Components
 *
 * This file contains vanilla JavaScript implementations of interactive components
 * from the ATXP Design System.
 */

// ============================================================================
// Dialog Component
// ============================================================================

class Dialog {
  constructor(dialogId) {
    this.dialogId = dialogId;
    this.dialog = document.getElementById(dialogId);
    this.overlay = this.dialog?.querySelector('[data-dialog-overlay]');
    this.content = this.dialog?.querySelector('[data-dialog-content]');
    this.closeBtn = this.dialog?.querySelector('[data-dialog-close]');
    this.isOpen = false;

    this.init();
  }

  init() {
    if (!this.dialog) return;

    // Close button click
    this.closeBtn?.addEventListener('click', () => this.close());

    // Overlay click (close on backdrop click)
    this.overlay?.addEventListener('click', () => this.close());

    // Prevent closing when clicking inside content
    this.content?.addEventListener('click', (e) => e.stopPropagation());

    // ESC key to close
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) {
        this.close();
      }
    });
  }

  open() {
    if (!this.dialog) return;

    this.dialog.style.display = 'block';
    document.body.style.overflow = 'hidden';
    this.isOpen = true;

    // Dispatch custom event
    this.dialog.dispatchEvent(new CustomEvent('dialog:open', { detail: { dialogId: this.dialogId } }));
  }

  close() {
    if (!this.dialog) return;

    this.dialog.style.display = 'none';
    document.body.style.overflow = '';
    this.isOpen = false;

    // Dispatch custom event
    this.dialog.dispatchEvent(new CustomEvent('dialog:close', { detail: { dialogId: this.dialogId } }));
  }

  toggle() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }
}

// ============================================================================
// Theme Switcher
// ============================================================================

class ThemeSwitcher {
  constructor() {
    this.currentTheme = this.getStoredTheme() || 'light';
    this.storageKey = 'atxp-theme';
    this.init();
  }

  init() {
    // Apply stored theme
    this.applyTheme(this.currentTheme);

    // Listen for theme change events
    document.addEventListener('theme:change', (e) => {
      this.setTheme(e.detail.theme);
    });
  }

  getStoredTheme() {
    try {
      return localStorage.getItem(this.storageKey);
    } catch (e) {
      return null;
    }
  }

  storeTheme(theme) {
    try {
      localStorage.setItem(this.storageKey, theme);
    } catch (e) {
      // Silent fail if localStorage is not available
    }
  }

  applyTheme(theme) {
    // Handle 'auto' theme
    if (theme === 'auto') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const actualTheme = prefersDark ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', actualTheme);
    } else {
      document.documentElement.setAttribute('data-theme', theme);
    }
  }

  setTheme(theme) {
    this.currentTheme = theme;
    this.applyTheme(theme);
    this.storeTheme(theme);

    // Update all theme switcher controls
    document.querySelectorAll('[data-theme-control]').forEach(control => {
      if (control.tagName === 'SELECT') {
        control.value = theme;
      } else if (control.tagName === 'BUTTON') {
        const controlTheme = control.getAttribute('data-theme-value');
        if (controlTheme === theme) {
          control.classList.add('active');
        } else {
          control.classList.remove('active');
        }
      }
    });
  }

  getTheme() {
    return this.currentTheme;
  }
}

// ============================================================================
// Toast Notifications
// ============================================================================

class Toast {
  constructor() {
    this.container = this.createContainer();
    this.toasts = [];
  }

  createContainer() {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      container.style.cssText = `
        position: fixed;
        bottom: 0;
        right: 0;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        z-index: 100;
      `;
      document.body.appendChild(container);
    }
    return container;
  }

  show(message, options = {}) {
    const {
      duration = 3000,
      variant = 'default', // 'default', 'success', 'destructive'
      title = null
    } = options;

    const toast = document.createElement('div');
    toast.className = `
      rounded-lg border px-4 py-3 shadow-lg
      ${variant === 'destructive' ? 'bg-destructive text-destructive-foreground border-destructive' : ''}
      ${variant === 'success' ? 'bg-success text-success-foreground border-success' : ''}
      ${variant === 'default' ? 'bg-background text-foreground border-border' : ''}
    `;
    toast.style.cssText = `
      min-width: 300px;
      animation: slideIn 0.2s ease-out;
    `;

    let content = '';
    if (title) {
      content += `<div style="font-weight: 600; margin-bottom: 0.25rem;">${title}</div>`;
    }
    content += `<div style="font-size: 0.875rem;">${message}</div>`;

    toast.innerHTML = content;
    this.container.appendChild(toast);
    this.toasts.push(toast);

    // Auto remove after duration
    if (duration > 0) {
      setTimeout(() => {
        this.remove(toast);
      }, duration);
    }

    return toast;
  }

  remove(toast) {
    toast.style.animation = 'slideOut 0.2s ease-out';
    setTimeout(() => {
      toast.remove();
      this.toasts = this.toasts.filter(t => t !== toast);
    }, 200);
  }
}

// Add toast animations
if (!document.getElementById('toast-animations')) {
  const style = document.createElement('style');
  style.id = 'toast-animations';
  style.textContent = `
    @keyframes slideIn {
      from {
        transform: translateX(100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
    @keyframes slideOut {
      from {
        transform: translateX(0);
        opacity: 1;
      }
      to {
        transform: translateX(100%);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
}

// ============================================================================
// Utility Functions
// ============================================================================

/**
 * Initialize theme switcher controls
 * Looks for elements with [data-theme-control] attribute
 */
function initializeThemeControls() {
  const themeSwitcher = new ThemeSwitcher();

  document.querySelectorAll('[data-theme-control]').forEach(control => {
    if (control.tagName === 'SELECT') {
      control.addEventListener('change', (e) => {
        document.dispatchEvent(new CustomEvent('theme:change', {
          detail: { theme: e.target.value }
        }));
      });
    } else if (control.tagName === 'BUTTON') {
      control.addEventListener('click', (e) => {
        const theme = control.getAttribute('data-theme-value');
        document.dispatchEvent(new CustomEvent('theme:change', {
          detail: { theme }
        }));
      });
    }
  });

  return themeSwitcher;
}

/**
 * Initialize dialog triggers
 * Looks for elements with [data-dialog-trigger] attribute
 */
function initializeDialogs() {
  const dialogs = {};

  // Initialize all dialogs
  document.querySelectorAll('[data-dialog-id]').forEach(element => {
    const dialogId = element.getAttribute('data-dialog-id');
    dialogs[dialogId] = new Dialog(dialogId);
  });

  // Setup triggers
  document.querySelectorAll('[data-dialog-trigger]').forEach(trigger => {
    const dialogId = trigger.getAttribute('data-dialog-trigger');
    trigger.addEventListener('click', () => {
      if (dialogs[dialogId]) {
        dialogs[dialogId].open();
      }
    });
  });

  return dialogs;
}

// ============================================================================
// Auto-initialize on DOMContentLoaded
// ============================================================================

document.addEventListener('DOMContentLoaded', () => {
  // Initialize theme controls
  if (document.querySelector('[data-theme-control]')) {
    window.themeSwitcher = initializeThemeControls();
  }

  // Initialize dialogs
  if (document.querySelector('[data-dialog-id]')) {
    window.dialogs = initializeDialogs();
  }

  // Initialize global toast instance
  window.toast = new Toast();
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    Dialog,
    ThemeSwitcher,
    Toast,
    initializeThemeControls,
    initializeDialogs
  };
}
