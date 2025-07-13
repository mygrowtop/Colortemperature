import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // 生成sourcemaps以便更好的调试
    sourcemap: true,
    // 优化输出文件大小
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    // 静态资源输出目录配置
    assetsDir: 'assets',
    // 分块策略
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          colorUtils: ['color-temperature']
        }
      }
    }
  },
  // 使用绝对路径导入
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  // 开发服务器配置
  server: {
    port: 3000,
    open: true
  }
}); 