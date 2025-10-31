import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/', // 👈 ensures correct base path for deployment
  build: {
    outDir: 'dist', // 👈 required by Vercel
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
})
