import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages requires a base path when the site is served from
  // https://<user>.github.io/<repo>/ — set base accordingly so asset
  // URLs are generated with the repo name prefix.
  base: '/quality-automation-hub/',
  plugins: [react()],
})
