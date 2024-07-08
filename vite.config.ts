import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  plugins: [
    vue(),
    dts(),
    AutoImport({
      imports: ['vue', '@vueuse/core'],
      dts: true,
    }),
  ],
  build: {
    rollupOptions: {
      external: ['vue'],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue',
        },
      },
    },
    lib: {
      entry: resolve(__dirname, 'packages/index.ts'),
      name: 'vue-search-popup',
      fileName: 'index',
      formats: ['es', 'cjs', 'umd'],
    },
  },
})
