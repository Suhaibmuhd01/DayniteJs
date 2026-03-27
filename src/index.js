/**
 * DayniteJs entry point.
 * @author Suhaib Muhammad Babangida <suhaibmuhd04@gmail.com>
 * @version 1.1.0
 * @license MIT
 */
import DayniteJs from './core/DayniteJs.js';

if (typeof document !== 'undefined') {
    const scripts = document.getElementsByTagName('script');
    for (let i = 0; i < scripts.length; i++) {
        if (scripts[i].hasAttribute('data-daynitejs-auto')) {
            window.daynite = new DayniteJs();
            break;
        }
    }
}

export default DayniteJs;