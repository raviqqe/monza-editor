import solid from "rolldown-plugin-solid";
import { defineConfig } from "tsdown";

export default defineConfig([
  {
    dts: true,
    entry: ["./src/index.tsx"],
    platform: "neutral",
    plugins: [solid()],
  },
]);
