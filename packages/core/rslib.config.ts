import { defineConfig } from "@rslib/core";
import { pluginTypedCSSModules } from "@rsbuild/plugin-typed-css-modules";

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
  plugins: [pluginTypedCSSModules()],
  output: {
    target: "web",
  },
});
