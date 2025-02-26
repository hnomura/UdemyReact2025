import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // chnage from default port 5173 to  3000
  // server: {
  //   port: 3000
  // }  
});
