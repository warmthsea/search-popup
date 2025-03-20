import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import AutoImport from 'unplugin-auto-import/vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    vue(),
    dts(),
    AutoImport({
      imports: ['vue'],
      dts: true,
    }),
    tailwindcss(),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'packages/index.ts'),
      name: 'vue-search-popup',
      fileName: 'index',
      formats: ['es', 'cjs', 'umd'],
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue',
        },
      },
    },

  },
})
