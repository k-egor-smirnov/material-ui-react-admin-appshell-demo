import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        modulePreload: false,
    },
    plugins: [
        react(),
        VitePWA({
            devOptions: { enabled: true },
            registerType: 'autoUpdate',
            injectRegister: 'inline',
            strategies: 'generateSW',
            workbox: {
                globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
            },
        }),
    ],
    define: {
        'process.env': process.env,
    },
    server: {
        host: true,
    },
    base: './',
});
