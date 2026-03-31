/**
 * Storage utilities for DayniteJs.
 * @module Storage
 */

/**
 * Retrieves the stored theme.
 * @param {string} key - localStorage key.
 * @returns {string|null} Stored theme or null.
 */
export function getStoredTheme(key) {
  try {
    const theme = localStorage.getItem(key);
    // Security: Prevent localStorage poisoning (excessively large strings or non-string tampering)
    if (typeof theme === 'string' && theme.length > 0 && theme.length <= 50) {
        return theme;
    }
    return null;
  } catch (e) {
    console.warn('Could not access localStorage:', e);
    return null;
  }
}

/**
 * Stores the theme.
 * @param {string} key - localStorage key.
 * @param {string} theme - Theme to store.
 */
export function storeTheme(key, theme) {
  try {
    localStorage.setItem(key, theme);
  } catch (e) {
    console.warn('Could not store theme in localStorage:', e);
  }
}