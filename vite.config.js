import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Project Pages: https://jgranda1999.github.io/rta-construction/
// Keep `/` in local `npm run dev` so the site still works at localhost root.
const repoBase = '/rta-construction/'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? repoBase : '/',
}))
