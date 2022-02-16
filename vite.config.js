import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {VantResolve,createStyleImportPlugin} from 'vite-plugin-style-import'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      vue(),
      createStyleImportPlugin({
          resolves:[VantResolve()]
      })
  ]
})
