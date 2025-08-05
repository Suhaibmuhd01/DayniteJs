# DayniteJs API Reference

## Constructor

`new DayniteJs(options)`
Creates a new DayniteJs instance.

### Parameters

- `options` (Object, optional):
  - `themes` (string[]): Available themes. Default: ['light', 'dark'].
  - `defaultTheme` (string): Fallback theme. Default: 'light'.
  - `storageKey` (string): localStorage key. Default: 'DayniteJs-theme'.
  - `customStyles` (Object): CSS variables per theme. Example: { dark: { '--bg-color': '#111' } }.

## Methods

- `init()` — Initializes the library, applying the stored or system theme. Called automatically by the constructor.
- `setTheme(theme)` — Sets the active theme.
- `toggle()` — Cycles to the next theme in the themes array.
- `getTheme()` — Returns the current theme.
- `reset()` — Resets to system/default theme.
- `onThemeChange(callback)` — Subscribes to theme change events.

## Example

```js
const daynite = new DayniteJs({
  themes: ['light', 'dark', 'sepia'],
  defaultTheme: 'light',
  customStyles: { dark: { '--bg-color': '#1f2937' } }
});

daynite.toggle();
daynite.setTheme('dark');
console.log(daynite.getTheme());
daynite.reset();
daynite.onThemeChange(theme => console.log(`Theme changed to: ${theme}`));
```

## CSS Setup

Use `[data-theme]` for theming and `.dark` for Tailwind CSS compatibility:

```css
[data-theme="light"] {
  --bg-color: #ffffff;
  --text-color: #1f2937;
}
[data-theme="dark"] {
  --bg-color: #1f2937;
  --text-color: #f3f4f6;
}
body {
  background-color: var(--bg-color);
  color: var(--text-color);
}
  .DayniteJs-transition,
  .DayniteJs-transition * {
  transition: background-color 0.3s ease, color 0.3s ease;
}
```
