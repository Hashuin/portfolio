import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('lucide-react')) {
              return 'lucide-icons';
            }

            if (id.includes('react-dom')) {
              return 'react-dom';
            }

            if (id.includes('react')) {
              return 'react-vendor';
            }

            return 'vendor';
          }

          return undefined;
        },
      },
    },
  },
});
