import { pluginBabel } from "@rsbuild/plugin-babel";
import { pluginSolid } from "@rsbuild/plugin-solid";
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
  plugins: [
    pluginBabel({ include: /\.tsx$/ }),
    pluginSolid({
      solidPresetOptions: {
        generate: "ssr",
        hydratable: true,
      },
    }),
  ],
});
