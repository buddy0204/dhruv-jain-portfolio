import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// IMPORTANT: base must match your GitHub repo name for GitHub Pages to serve
// assets correctly, e.g. "/my-repo-name/". If deploying to a custom domain
// or to <username>.github.io root repo, set base to "/".
export default defineConfig({
  plugins: [react()],
  base: "/dhruv-jain-portfolio/",
});
