import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 9090,
    headers: { "Access-Control-Allow-Origin": "*" },
  },
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') }
    ],
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        newtab: 'index.html',
      },
    },
  },
})
