import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'node:path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    outDir: 'build',
    rollupOptions: {
      // input: {
      //   main: resolve(__dirname, 'index.html'),
      //   demo: resolve(__dirname, 'demo/index.html')
      // },
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    },
    lib: {
      entry: resolve(__dirname, 'core/index.ts'),
      name: 'bubble-widget',
      fileName: 'bubble-widget',
      formats: ['es', 'umd']
    },
    copyPublicDir: false
  }
})
