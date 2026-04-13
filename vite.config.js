import { defineConfig } from 'vite';
import reactJsxPlugin from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        reactJsxPlugin(),
    ],
    // base: '/' serves from the root of https://yukistillalive.github.io/
    // (only works when the repo is named yukistillalive.github.io)
    base: '/',
    server: {
        port: 8080,
    },
    build: {
        sourcemap: true,
        minify: false
    }
});