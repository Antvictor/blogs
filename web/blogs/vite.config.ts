import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:6006/blogs', // 后端 API 的地址
        changeOrigin: true,              // 是否改变源头
        secure: true,                   // 如果目标服务器是 https，需要设置为 false
        rewrite: (path) => path.replace(/^\/api/, '') // 可选，去除请求路径中的 `/api` 前缀
      }
    }
  }
})
