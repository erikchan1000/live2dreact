import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'ReactLive2DCubism',
      formats: ['es', 'umd'],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'pixi.js'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'pixi.js': 'PIXI',
        },
      },
    },
  },
  test: {
    environment: 'happy-dom',
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
  },
});
