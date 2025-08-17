import { pluginPreact } from "@rsbuild/plugin-preact";
import { defineConfig } from "@rslib/core";

export default defineConfig({
  lib: [
    {
      dts: true,
      format: "esm",
      output: {
        minify: true,
      },
    },
  ],
  output: {
    target: "web",
  },
  plugins: [pluginPreact()],
});
