# Changelog

## [1.2.0] - Upcoming
- **SECURITY**: LocalStorage poisoning prevention.
- **FIX**: Memory leak in `window.matchMedia` resolved for SPAs.
- **FIX**: Callback leak in `onThemeChange` resolved via returned unsubscribe function.
- **FEATURE**: Complete TypeScript definitions (`daynitejs.d.ts`) included out of the box.

## [1.1.0] - 2026-03-31
- **FIX**: Package export paths now correctly resolve dist bundles without case-sensitivity errors.
- **FIX**: SSR environments (Next.js/Nuxt) no longer crash from `ReferenceError: document is not defined`.
- **FIX**: Exposing ESM, CommonJS, and UMD builds via Rollup to support all module loaders and environments.
- **FEATURE**: Added `.destroy()` method to easily clean up `matchMedia` event listeners and avoid memory leaks.
- **FEATURE**: Added `data-daynitejs-auto` support for zero-config script initializations right from the DOM.

## [1.0.0] - Initial Release
- Basic theme toggling logic
- Configuration options (`themes`, `defaultTheme`, `customStyles`)
- `localStorage` persistence
- Basic documentation
