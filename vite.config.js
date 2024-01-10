import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: {
      "~bootstrap": "./node_modules/bootstrap",
      "~images": "./src/lib/images",
    },
  },
  plugins: [sveltekit()],
});
