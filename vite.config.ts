/// <reference types="vitest" />

import { defineConfig } from 'vite';

export default defineConfig({
    test: {
        root: './tests',
        environment: 'node',
        clearMocks: true,
        coverage: {
            reportsDirectory: '../coverage',
        },
    },
});