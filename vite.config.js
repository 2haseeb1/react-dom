import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
          if (id.includes('react-router-dom')) {
            return 'react-router-dom';
          }
          if (id.includes('recharts')) {
            return 'recharts';
          }
          if (id.includes('@fortawesome')) {
            return 'fortawesome';
          }
        }
      }
    },
    chunkSizeWarningLimit: 1000 
  }
});
