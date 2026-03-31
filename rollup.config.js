import terser from '@rollup/plugin-terser';

export default {
    input: 'src/index.js',
    output: [
        {
            file: 'dist/daynitejs.esm.js',
            format: 'esm',
            sourcemap: true
        },
        {
            file: 'dist/daynitejs.cjs',
            format: 'cjs',
            sourcemap: true,
            exports: 'auto'
        },
        {
            file: 'dist/daynitejs.umd.js',
            format: 'umd',
            name: 'DayniteJs',
            sourcemap: true
        }
    ],
    plugins: [terser()]
};