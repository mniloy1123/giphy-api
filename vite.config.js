import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";
import { VitePluginNode } from "vite-plugin-node";

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  base: "/giphy-api",
  plugins: [react(), VitePluginNode()],
  define: {
    "process.env": process.env,
  },
});
