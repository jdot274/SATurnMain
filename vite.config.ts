import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: []
      }
    })
  ],
  server: {
    hmr: {
      overlay: false
    }
  },
  preview: {
    port: 4173,
    host: true,
    headers: {
      'Cross-Origin-Embedder-Policy': 'require-corp',
      'Cross-Origin-Opener-Policy': 'same-origin'
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  optimizeDeps: {
    include: ['lucide-react']
  },
});