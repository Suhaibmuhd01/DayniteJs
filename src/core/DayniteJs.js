/**
 * DayniteJs: Core theme toggle logic.
 * @module DayniteJs
 * @author Suhaib Muhammad Babangida <suhaibmuhd04@gmail.com>
 * @version 1.0.0
 */
import { getStoredTheme, storeTheme } from '../utils/storage.js';
import { isValidTheme } from '../utils/validation.js';
import { DEFAULT_THEMES, DEFAULT_THEME, DEFAULT_STORAGE_KEY } from '../utils/constants.js';
import { getSystemTheme } from '../utils/system.js';

/**
 * Main class for theme toggling and management.
 */
export default class DayniteJs {
    /**
     * Creates a new DayniteJs instance.
     * @param {Object} options - Configuration options.
     * @param {string[]} options.themes - Available themes (default: ['light', 'dark']).
     * @param {string} options.defaultTheme - Default theme (default: 'light').
     * @param {string} options.storageKey - localStorage key (default: 'DayniteJs-theme').
     * @param {Object} options.customStyles - Custom CSS variables per theme.
     */
    constructor(options = {}) {
        this.themes = Array.isArray(options.themes) && options.themes.length > 0 ? options.themes : DEFAULT_THEMES;
        this.defaultTheme = typeof options.defaultTheme === 'string' ? options.defaultTheme : DEFAULT_THEME;
        this.storageKey = typeof options.storageKey === 'string' ? options.storageKey : DEFAULT_STORAGE_KEY;
        this.customStyles = typeof options.customStyles === 'object' && options.customStyles !== null ? options.customStyles : {};
        this.callbacks = [];
        this.init();
    }

    /**
     * Initializes the library and applies the initial theme.
     */
    init() {
        if (!isValidTheme(this.defaultTheme, this.themes)) {
            console.warn(`Invalid defaultTheme "${this.defaultTheme}". Using '${DEFAULT_THEME}'.`);
            this.defaultTheme = DEFAULT_THEME;
        }
        const initialTheme = getStoredTheme(this.storageKey) || this.defaultTheme;
        this.setTheme(initialTheme);

        // Listen for system theme changes
        if (window.matchMedia) {
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
                this.setTheme(e.matches ? 'dark' : 'light');
            });
        }
    }

    /**
     * Sets the active theme.
     * @param {string} theme - Theme to apply.
     */
    setTheme(theme) {
        if (!isValidTheme(theme, this.themes)) {
            console.warn(`Theme "${theme}" is not supported. Falling back to ${this.defaultTheme}.`);
            theme = this.defaultTheme;
        }

        requestAnimationFrame(() => {
            document.documentElement.classList.add('DayniteJs-transition');
            document.documentElement.setAttribute('data-theme', theme);
            // Add/remove Tailwind-compatible 'dark' class
            if (theme === 'dark') {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
            this.applyCustomStyles(theme);
            storeTheme(this.storageKey, theme);
            this.callbacks.forEach((cb) => cb(theme));

            setTimeout(() => {
                document.documentElement.classList.remove('DayniteJs-transition');
            }, 300);
        });
    }

    /**
     * Returns the current theme.
     * @returns {string} The current theme name.
     */
    getTheme() {
        return document.documentElement.getAttribute('data-theme') || this.defaultTheme;
    }

    /**
     * Resets the theme to the system or default theme.
     */
    reset() {
        const systemTheme = getSystemTheme();
        const fallbackTheme = isValidTheme(systemTheme, this.themes) ? systemTheme : this.defaultTheme;
        this.setTheme(fallbackTheme);
    }

    /**
     * Toggles to the next theme.
     */
    toggle() {
        const currentTheme = this.getTheme();
        if (!isValidTheme(currentTheme, this.themes)) {
            console.warn(`Current theme "${currentTheme}" is invalid. Falling back to ${this.defaultTheme}.`);
            this.setTheme(this.defaultTheme);
            return;
        }
        const currentIndex = this.themes.indexOf(currentTheme);
        const nextIndex = (currentIndex + 1) % this.themes.length;
        this.setTheme(this.themes[nextIndex]);
    }

    /**
     * Subscribes to theme change events.
     * @param {Function} callback - Called with the new theme.
     */
    onThemeChange(callback) {
        if (typeof callback === 'function') {
            this.callbacks.push(callback);
        }
    }

    /**
     * Applies custom CSS variables for the current theme.
     * @param {string} theme - Theme name.
     */
    applyCustomStyles(theme) {
        const styles = this.customStyles[theme];
        if (styles && typeof styles === 'object') {
            Object.entries(styles).forEach(([key, value]) => {
                document.documentElement.style.setProperty(key, value);
            });
        }
    }
}
