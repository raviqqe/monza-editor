import solid from "rolldown-plugin-solid";
import { defineConfig } from "tsdown";

export default defineConfig([
  {
    entry: ["./src/index.tsx"],
    minify: true,
    platform: "neutral",
    plugins: [solid()],
  },
]);
