// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
  },
  server: {
    proxy: {
      '/openfoodapi': {
        target: 'https://world.openfoodfacts.org',
        changeOrigin: true,
        
        rewrite: (path) => path.replace(/^\/openfoodapi/, ''),
        configure: (proxy, _options) => {
          proxy.on('error', (err, _req, _res) => {
            console.log('Proxy Error:', err);
          });
          proxy.on('proxyReq', (proxyReq, req, _res) => {
          
            console.log('Proxying Request:', req.method, req.url, '->', 'https://world.openfoodfacts.org' + proxyReq.path);
          });
          proxy.on('proxyRes', (proxyRes, req, _res) => {
            console.log('Received Response from Target:', proxyRes.statusCode, req.url);
          });
        },
      },
    },
  },
})
