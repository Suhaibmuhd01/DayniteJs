/**
 * Validation utilities for DayniteJs.
 * @module Validation
 */

/**
 * Validates a theme name.
 * @param {string} theme - Theme to validate.
 * @param {string[]} validThemes - List of valid themes.
 * @returns {boolean} True if theme is valid.
 */
export function isValidTheme(theme, validThemes) {
  return typeof theme === 'string' && validThemes.includes(theme);
}