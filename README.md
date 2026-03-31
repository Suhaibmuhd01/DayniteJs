<div align="center">
  <h1>🌗 DayniteJs</h1>
  <p><strong>A framework-agnostic, zero-dependency, and hyper-fast theme toggling library.</strong></p>

  <p>
    <a href="https://www.npmjs.com/package/daynitejs"><img src="https://img.shields.io/npm/v/daynitejs?style=flat-square&color=blue" alt="NPM Version" /></a>
    <a href="https://bundlephobia.com/package/daynitejs"><img src="https://img.shields.io/bundlephobia/minzip/daynitejs?style=flat-square&color=success" alt="Bundle Size" /></a>
    <a href="https://github.com/suhaibmuhd01/daynitejs/blob/main/LICENSE"><img src="https://img.shields.io/npm/l/daynitejs?style=flat-square&color=yellow" alt="License" /></a>
    <a href="https://www.npmjs.com/package/daynitejs"><img src="https://img.shields.io/npm/dt/daynitejs?style=flat-square&color=blueviolet" alt="Downloads" /></a>
  </p>

  <p>Perfect for everything from plain HTML sites to complex SSR React, Next.js, and Nuxt.js apps.</p>
</div>

---

## ⚡ Why DayniteJs?

When it comes to dark mode toggling, developers usually face memory leaks in SPAs, hydration mismatches in Next.js/Nuxt.js, and annoying layout shifts.

**DayniteJs solves all of this out of the box.**

- 🚫 **Zero Dependencies**: Pure Vanilla Javascript.
- 💨 **Lightweight**: Extremely small bundle size (~1KB minified).
- 🧠 **Smart Memory Management**: Comes with robust cleanup mechanisms making it 100% leak-free for SPAs.
- 🛡️ **Built-in Security**: Hardened against `localStorage` poisoning.
- 🌍 **Universal Modules**: Out of the box ESM, CommonJS, and UMD support for browsers.
- 🧲 **Full TypeScript Support**: Written with complete `.d.ts` types for rich IDE IntelliSense.

---

## 🚀 Quick Start (Under 30 Seconds)

### Option 1: View CDN (No Build Tool Required)

Drop this into your HTML `<head>` or before the closing `</body>` tag:

```html
<!-- Load Daynite.js automagically! -->
<script type="module" src="https://unpkg.com/daynitejs/dist/daynitejs.esm.js" data-daynitejs-auto></script>

<!-- Use a button to toggle -->
<button onclick="window.daynite.toggle()">Toggle Theme</button>
```

### Option 2: Via NPM (React, Vue, Vite, Next.js)

Install it inside your project:
```bash
npm install daynitejs
```
```bash
pnpm install daynitejs
```

Initialize your theme in your app entry (e.g., `main.js`, `_app.js`, `App.vue` or `useEffect`):

```js
import DayniteJs from 'daynitejs';

// Initialize the magic 🪄
const daynite = new DayniteJs({
  themes: ['light', 'dark'],
  defaultTheme: 'light',
  customStyles: {
    light: { '--bg-color': '#ffffff', '--text-color': '#1f2937' },
    dark: { '--bg-color': '#1f2937', '--text-color': '#f3f4f6' }
  }
});

// Toggle anywhere in your app:
daynite.toggle();
```

---

## 🖥 React & Next.js Implementation

DayniteJs is 100% hydration-safe and SSR-compatible.

```tsx
import { useEffect, useState } from 'react';
import DayniteJs from 'daynitejs';

export default function ThemeToggler() {
  const [daynite, setDaynite] = useState<DayniteJs | null>(null);

  useEffect(() => {
    // 1. Initialize client-side
    const instance = new DayniteJs();
    setDaynite(instance);

    // 2. Prevent memory leaks on unmount
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

**`new DayniteJs(options)`**
Accepts a configuration object to change defaults.
```ts
{
  themes?: string[]; // e.g. ['light', 'dark', 'dim']
  defaultTheme?: string; // fallback theme
  storageKey?: string; // localStorage custom key
  customStyles?: Record<string, object>; // bind CSS vars to specific themes
}
```

**`daynite.toggle()`**
Cycles dynamically to the next installed theme in the array.

**`daynite.setTheme(theme)`**
Explicitly switch to a specified theme name (e.g. `daynite.setTheme('dark')`).

**`daynite.getTheme()`**
Returns the string name of the currently active theme.

**`daynite.reset()`**
Resets the theme layout to follow the system preference (detects `prefers-color-scheme`).

**`daynite.onThemeChange(callback)`**
Subscribes to theme changes. Returns an `unsubscribe` function to help prevent memory leaks.
```js
const unsubscribe = daynite.onThemeChange((activeTheme) => {
  console.log('User swapped to:', activeTheme);
});
// Call unsubscribe() when component unmounts
```

**`daynite.destroy()`**
Removes all system event listeners and forcefully unbinds functions from memory. Essential for routing in SPA frameworks.

---

## 🧰 Troubleshooting / FAQs

<details>
<summary><strong>Q: I get "ReferenceError: document is not defined"</strong></summary>
<br>
<strong>A:</strong> Initialize DayniteJs dynamically inside a client-side hook (like `useEffect` or Vue's `onMounted`), or conditionally check `typeof window !== 'undefined'` before initializing.
</details>

<details>
<summary><strong>Q: Does DayniteJs work with Tailwind CSS?</strong></summary>
<br>
<strong>A:</strong> Yes! DayniteJs appends a `dark` class globally on the `<html>` root specifically mapped to support Tailwind CSS `darkMode: 'class'` configuration effortlessly.
</details>

<details>
<summary><strong>Q: My custom CSS styles aren't appearing!</strong></summary>
<br>
<strong>A:</strong> Make sure you define them inside the `customStyles` configuration during instantiation and verify that your CSS utilizes `var(--your-variable)` correctly.
</details>

---

## 🤝 Community & Contributing

We actively welcome contributions to grow DayniteJs! 

1. Read our [Contributing Guidelines](CONTRIBUTING.md) to get started.
2. Please observe our [Code of Conduct](CODE_OF_CONDUCT.md).
3. If you find a bug, please create a [Bug Report](https://github.com/suhaibmuhd01/daynitejs/issues/new?template=bug_report.md).
4. Have an idea? Open a [Feature Request](https://github.com/suhaibmuhd01/daynitejs/issues/new?template=feature_request.md).

---

## 📄 License

MIT Copyright (c) Suhaib Muhammad Babangida.
