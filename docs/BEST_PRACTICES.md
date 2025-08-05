# 📘 Project Best Practices

## 1. Project Purpose

DayniteJs is a lightweight, modern JavaScript library for toggling light and dark themes in web applications. It provides system preference detection, persistent user settings, and a simple, event-driven API. The library is designed for easy integration with Tailwind CSS and supports custom theme variables for flexible theming.

## 2. Project Structure

- **Root**: Contains configuration files (`package.json`, `rollup.config.js`, `babel.config.js`, `eslint.config.js`, `jest.config.js`), documentation (`README.md`, `API.md`, `CHANGELOG.md`), and the main output (`dist/`).
- **src/**: Source code for the library.
  - `core/DayniteJs.js`: Main class implementing theme logic.
  - `utils/`: Utility modules for storage, validation, and system preference detection.
  - `index.js`: Entry point exporting the main class.
- **test/**: Unit tests for core logic and utilities, using Jest.
- **dist/**: Bundled and minified output for distribution.
- **examples/**: Demo HTML and CSS for showcasing library usage.
- **docs/**: API documentation and guides.

## 3. Test Strategy

- **Framework**: Jest with jsdom environment for DOM and browser API mocking.
- **Organization**: Tests are colocated in the `test/` directory, with files named after the module under test (e.g., `DayniteJs.test.js`, `storage.test.js`).
- **Mocking**: Extensive use of global mocks for `localStorage`, `document.documentElement`, and `window.matchMedia` to isolate and simulate browser behavior.
- **Philosophy**: Focus on unit tests for core logic and utilities. Each test resets global state to ensure isolation. Console warnings are checked for error handling.
- **Coverage**: Aim for high coverage of all public methods and edge cases, including error scenarios.

## 4. Code Style

- **Language**: Modern JavaScript (ES modules, async/await where needed, arrow functions, destructuring).
- **Linting**: Enforced via ESLint with recommended rules and globals for browser, Node, and Jest.
- **Naming**: CamelCase for classes and functions, lowerCamelCase for variables and methods, UPPER_SNAKE_CASE for constants (if any).
- **Documentation**: JSDoc comments for all public classes, methods, and utilities. Inline comments for complex logic.
- **Error Handling**: Use of `try/catch` for storage access, with warnings logged to the console. Invalid input falls back to safe defaults with warnings.

## 5. Common Patterns

- **Singleton-like usage**: Library is typically instantiated once per app.
- **Event Subscription**: `onThemeChange` allows consumers to react to theme changes.
- **Custom Styles**: CSS variables are applied dynamically for each theme.
- **System Preference Detection**: Uses `window.matchMedia` to auto-switch themes based on OS settings.
- **Graceful Fallbacks**: Invalid themes or storage errors do not break the app; safe defaults are always used.

## 6. Do's and Don'ts

- ✅ Always document new public methods and utilities with JSDoc.
- ✅ Write unit tests for all new features and edge cases.
- ✅ Use the provided utility modules for storage and validation.
- ✅ Reset global mocks and state between tests.
- ✅ Use CSS variables for theming to maximize flexibility.
- ❌ Do not hardcode theme values outside of configuration or CSS variables.
- ❌ Do not access browser APIs (like `window` or `document`) outside of the main class or utilities.
- ❌ Avoid side effects in utility functions; keep them pure where possible.
- ❌ Do not introduce breaking changes to the public API without updating documentation and tests.

## 7. Tools & Dependencies

- **Key Libraries**:
  - `jest`, `babel-jest`, `jest-environment-jsdom`: Testing and mocking browser APIs.
  - `eslint`: Linting and code style enforcement.
  - `rollup`, `@rollup/plugin-terser`: Bundling and minification.
  - `@babel/core`, `@babel/preset-env`: Transpilation for compatibility.
  - `tailwindcss` (for demos/examples): Utility-first CSS framework.
- **Setup**:
  - Install dependencies: `npm install`
  - Build: `npm run build`
  - Run tests: `npm test`
  - Lint: `npm run ls-lint`

## 8. Other Notes

- The library is designed for browser environments and expects DOM APIs to be available.
- All theme logic is encapsulated in the `DayniteJs` class; utilities are stateless and reusable.
- When generating new code, follow the established patterns for error handling, event subscription, and CSS variable usage.
- Edge cases (e.g., storage errors, invalid themes) should always be handled gracefully with user feedback via console warnings.
- The project aims for zero external runtime dependencies (except for development and testing tools).
