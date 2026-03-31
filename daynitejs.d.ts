export interface DayniteJsOptions {
    /** List of available themes. Default: ['light', 'dark'] */
    themes?: string[];
    /** Default theme name. Default: 'light' */
    defaultTheme?: string;
    /** LocalStorage key for saving theme. Default: 'DayniteJs-theme' */
    storageKey?: string;
    /** Custom CSS variables mapped per theme */
    customStyles?: Record<string, Record<string, string>>;
}

export default class DayniteJs {
    /** Allowed themes array */
    themes: string[];
    /** Default theme */
    defaultTheme: string;
    /** Key used to persist preference in localStorage */
    storageKey: string;
    /** Custom style object */
    customStyles: Record<string, Record<string, string>>;

    /**
     * Initializes a new instance of DayniteJs.
     */
    constructor(options?: DayniteJsOptions);

    /** Initialize system preference listeners and initial theme applying. */
    init(): void;

    /** Destroy the instance and remove memory/event listeners. Must be used in SPAs on unmount. */
    destroy(): void;

    /** Set the theme to a specific value. */
    setTheme(theme: string): void;

    /** Get the current theme. */
    getTheme(): string;

    /** Reset the theme back to system preference or default. */
    reset(): void;

    /** Cycle to the next available theme. */
    toggle(): void;

    /**
     * Subscribes to theme change events.
     * @param callback Function to execute with the new theme
     * @returns Unsubscribe function to remove the listener
     */
    onThemeChange(callback: (theme: string) => void): () => void;

    /** Applies defined custom CSS styles for the given theme. */
    applyCustomStyles(theme: string): void;
}
