import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Project Pages: https://jgranda1999.github.io/rsa-construction-/
// Keep `/` in local `npm run dev` so the site still works at localhost root.
const repoBase = '/rsa-construction-/'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? repoBase : '/',
}))
