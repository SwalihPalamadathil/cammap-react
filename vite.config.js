import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'node:fs'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'serve-map-page-in-dev',
      configureServer(server) {
        server.middlewares.use(async (req, res, next) => {
          const url = req.url ? req.url.split('?')[0] : '';
          if (url === '/map' || url === '/map/' || url === '/map/index.html') {
            try {
              const rawHtml = fs.readFileSync('map/index.html', 'utf-8');
              const html = await server.transformIndexHtml('/map/index.html', rawHtml);
              res.setHeader('Content-Type', 'text/html');
              res.statusCode = 200;
              res.end(html);
              return;
            } catch (e) {
              next(e);
              return;
            }
          }
          next();
        });
      }
    }
  ],
  base: '/',
  build: {
    cssMinify: true,
    rollupOptions: {
      input: {
        main: 'index.html',
        map: 'map/index.html'
      },
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        }
      }
    }
  }
})
