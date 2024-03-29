import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: ['**/*.pdf'],
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      }
    })
  ],
  build: {
    rollupOptions: {
      output: {
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: ({name}) => {
          if (/\.(gif|jpg|png|svg|webp|ico)$/.test(name ?? '')){
            return `assets/images/${name.split('.')[0]}-[hash][extname]`;
          }

          if (/\.(mp4)$/.test(name ?? '')){
            return `assets/videos/${name.split('.')[0]}-[hash][extname]`;
          }

          if (/\.(pdf)$/.test(name ?? '')){
            return `assets/files/${name.split('.')[0]}-[hash][extname]`;
          }
          
          if (/\.css$/.test(name ?? '')) {
            return `assets/css/${name.split('.')[0]}-[hash][extname]`;   
          }
 
          // default value
          // ref: https://rollupjs.org/guide/en/#outputassetfilenames
          return `assets/${name.split('.')[0]}-[hash][extname]`;
        },
      },
    }
  },
  base: '/pwa-demo/'
})
