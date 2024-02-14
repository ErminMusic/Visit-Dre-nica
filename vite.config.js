import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import partytownVite from "@builder.io/partytown/utils";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        partytownVite({
            dest: "partytown",
        }),
    ],
});
