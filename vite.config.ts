import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // base path for GitHub Pages – replace with your repo name
  base: mode === 'development' ? '/' : '/personal-portfolio/',

  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // build output directory for static hosting
  build: {
    outDir: 'docs',  // you can change to 'docs' if you prefer GH Pages from /docs
  },
}));
