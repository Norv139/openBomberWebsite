import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vite";
import paths from "vite-tsconfig-paths";

export default defineConfig({
  root: './src',
  base: './',
  build: {
    outDir: '../dist',
  },
  server: {
    host: '0.0.0.0',
    port: 3000
  },
  plugins: [
    svelte({ configFile: '../svelte.config.js' }),
    paths({ projects: ['../tsconfig.json'] })
  ],
});
