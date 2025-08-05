# DayniteJs

A lightweight, modern JavaScript library for toggling light and dark themes with blazing-fast performance, system preference detection, and persistent user settings. Perfect for any web project!

---

## ✨ Features

- 🌗 Toggle between light, dark, or custom themes
- 🖥️ Detects system theme via `prefers-color-scheme`
- 💾 Persists user preference in `localStorage`
- 🎨 Supports Tailwind CSS and smooth CSS transitions
- ⚡ Simple, event-driven API

---

## 🚀 Installation

```bash
npm install daynitejs
```

---

## 🛠️ Usage

### Basic Setup

```js
import DayniteJs from 'daynitejs';

const daynite = new DayniteJs({
  themes: ['light', 'dark'],
  defaultTheme: 'light',
  customStyles: {
    light: { '--bg-color': '#ffffff', '--text-color': '#1f2937' },
    dark: { '--bg-color': '#1f2937', '--text-color': '#f3f4f6' }
  }
});

daynite.toggle();
daynite.onThemeChange(theme => console.log(`Theme changed to: ${theme}`));
```

---

### CSS Setup

Define theme-specific styles using `[data-theme]`:

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

/* Smooth transitions */
.DayniteJs-transition,
.DayniteJs-transition * {
  transition: background-color 0.3s ease, color 0.3s ease;
}
```

---

### HTML Example

```html
<button id="toggle-btn" aria-label="Toggle theme">Toggle Theme</button>
<script type="module">
  import DayniteJs from 'daynitejs';
  const daynite = new DayniteJs();
  document.getElementById('toggle-btn').addEventListener('click', () => daynite.toggle());
</script>
```

---

## 📚 API

- `new DayniteJs(options)` — Initialize with themes, default theme, and custom styles
- `daynite.init()` — Initializes the theme based on system or local preference (called automatically)
- `daynite.toggle()` — Manually toggles theme
- `daynite.setTheme('dark' | 'light')` — Explicitly set the theme
- `daynite.getTheme()` — Returns the current theme
- `daynite.reset()` — Resets to system/default theme
- `daynite.onThemeChange(callback)` — Subscribes to theme change events

### Options

- `themes`: Array of theme names (default: `["light", "dark"]`)
- `defaultTheme`: Fallback theme (default: `'light'`)
- `storageKey`: localStorage key (default: `'DayniteJs-theme'`)
- `customStyles`: CSS variables per theme

---

## 🧑‍💻 Development

Build minified bundle:

```bash
npm run build
```

Run tests:

```bash
npm test
```

---

## 🖥️ Running the Example Demo

To test the theme toggle demo in your browser:

1. Build the library:
   ```bash
   npm run build
   ```
2. Serve the project root with a local HTTP server:
   ```bash
   npm run serve
   ```
3. Open your browser and go to:
   [http://localhost:3000/examples/](http://localhost:3000/examples/)

> **Note:** Opening `examples/index.html` directly from the filesystem will not work due to browser security restrictions. Always use a local server.

---

## 👤 Author

**DayniteJs** is developed and maintained by Suhaib Muhammad Babangida.

> If you like this project, please ⭐ it on GitHub and share it with your friends!

---

## 📄 License

Licensed by MIT
