import { defineConfig } from "tsdown";

export default defineConfig([
  {
    entry: ["/src/index.tsx"],
    minify: true,
    platform: "neutral",
  },
]);
