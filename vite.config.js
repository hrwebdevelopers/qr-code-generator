// vite.config.js
import legacy from '@vitejs/plugin-legacy'
import { defineConfig } from 'vite'

export default defineConfig({
  base: "./",
  plugins: [
    legacy({
      targets: ['defaults', 'not IE 11']
    })
  ],
  optimizeDeps: {
    include: ['qrcodejs']
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/]
    }
  }
})
