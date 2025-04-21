import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 12000,
    host: true,
    cors: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    hmr: {
      clientPort: 12000,
    },
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      'work-1-wkinqiwumgsubhuy.prod-runtime.all-hands.dev',
      'work-2-wkinqiwumgsubhuy.prod-runtime.all-hands.dev',
      '.all-hands.dev'
    ],
  },
})
