/**
 * System preference utilities for DayniteJs.
 * @module System
 */

/**
 * Gets the system theme preference.
 * @returns {string} 'dark' or 'light'.
 */
export function getSystemTheme() {
  if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  return 'light';
}