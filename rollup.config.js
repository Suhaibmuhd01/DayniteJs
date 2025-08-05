import terser from '@rollup/plugin-terser';

export default {
    input: 'src/index.js',
    output: {
        file: 'dist/DayniteJs.min.js',
        format: 'esm',
        name: 'DayniteJs',
        sourcemap: true
    },
    plugins: [terser()]
};