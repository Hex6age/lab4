import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  root: 'Frontend',
  server: {
    port: 3001,
    open: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'Frontend'),
    }
  }
})