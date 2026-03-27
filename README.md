# DayniteJs

A lightweight, modern JavaScript library for toggling light and dark themes with blazing-fast performance, system preference detection, and persistent user settings. Perfect for any web project including SSR frameworks like Next.js and Nuxt.js!

---

## ✨ Features

- 🌗 Toggle between light, dark, or custom themes
- 🖥️ Detects system theme via `prefers-color-scheme`
- 💾 Persists user preference in `localStorage`
- 🎨 Supports Tailwind CSS and smooth CSS transitions
- ⚡ **SSR Safe**: Will not crash your Next.js or Nuxt.js app on the server.
- 🧹 **Zero Memory Leaks**: Includes a `.destroy()` method for single page apps (SPA).
- 📦 **Universal Modules**: Supports ESM, CommonJS, and UMD directly via CDN.

---

## 🚀 Installation

Via NPM:
```bash
npm install daynitejs
```

Via CDN (UMD):
```html
<script src="https://unpkg.com/daynitejs/dist/daynitejs.umd.js"></script>
```

---

## 🛠️ Usage

### 1. Basic Setup (ESM)

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

// Toggle the theme
daynite.toggle();

// Listen to changes
daynite.onThemeChange(theme => console.log(`Theme changed to: ${theme}`));
```

### 2. Auto-Initialization via HTML
For a zero-JS-config setup, just add `data-daynitejs-auto` to the script tag!

```html
<script type="module" src="https://unpkg.com/daynitejs/dist/daynitejs.esm.js" data-daynitejs-auto></script>

<button onclick="window.daynite.toggle()">Toggle Theme</button>
```

---

### React / Next.js Setup

DayniteJs is fully SSR safe. Make sure you initialize it on the client side (e.g., inside `useEffect`).

```jsx
import { useEffect, useState } from 'react';
import DayniteJs from 'daynitejs';

export default function App() {
  const [daynite, setDaynite] = useState(null);

  useEffect(() => {
    // Initialize daynite on the client side
    const instance = new DayniteJs();
    setDaynite(instance);

    // Clean up event listeners on unmount
    return () => instance.destroy();
  }, []);

  return (
    <button onClick={() => daynite?.toggle()}>
      Toggle Theme
    </button>
  );
}
```

---

## 📚 API Reference

- `new DayniteJs(options)` — Initialize with themes, default theme, and custom styles
- `daynite.init()` — Initializes the theme based on system or local preference
- `daynite.toggle()` — Manually toggles theme
- `daynite.setTheme('dark' | 'light')` — Explicitly set the theme
- `daynite.getTheme()` — Returns the current theme
- `daynite.reset()` — Resets to system/default theme
- `daynite.onThemeChange(callback)` — Subscribes to theme change events
- `daynite.destroy()` — Cleans up event listeners and prevents memory leaks

---

## 🧰 Troubleshooting

**Q: I get "Module not found" or case-sensitivity errors on Linux/Vercel.**
A: *Update to v1.1.0 or later!* Earlier versions had a known bug with export path casing.

**Q: ReferenceError: document is not defined**
A: *Update to v1.1.0 or later!* The library is now fully SSR compatible and safely checks for the document object.

---

## 🖥️ Running the Local Demo

1. Clone and build the library:
   ```bash
   npm install
   npm run build
   ```
2. Serve the root directory:
   ```bash
   npm run serve
   ```
3. Open `http://localhost:3000/demo/` in your browser.

---

## 👤 Author

**DayniteJs** is developed and maintained by Suhaib Muhammad Babangida.

> If you like this project, please ⭐ it on GitHub and share it with your friends!

---

## 📄 License

Licensed by MIT
