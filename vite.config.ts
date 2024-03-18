import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        lib: {
            entry: 'src/index.ts',
            name: 'HituziMisc',
            fileName: (format) => `index.${format}.js`
        },
        rollupOptions: {
            external: [],
            output: {
                globals: {}
            }
        }
    }
});
