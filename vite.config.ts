import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    outDir: 'dist',
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'MiBackend',
      fileName: 'main',
      formats: ['es']
    },
    rollupOptions: {
      external: ['express', 'cors', 'body-parser'],
      output: {
        globals: {
          express: 'express',
          cors: 'cors',
          'body-parser': 'bodyParser'
        }
      }
    }
  }
});