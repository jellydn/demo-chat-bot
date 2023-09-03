import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/index.ts'],
    dts: true,
    external: ['react'],
    format: ['cjs'],
    esbuildOptions(options, _context) {
        options.assetNames = 'assets/[name]';
    },
    loader: {
        '.svg': 'dataurl',
    },
});
