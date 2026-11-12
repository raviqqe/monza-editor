import { defineConfig } from "@rslib/core";

export default defineConfig({
  lib: [
    {
      dts: true,
      format: "esm",
      output: {
        minify: true,
      },
      syntax: "esnext",
    },
  ],
  output: {
    target: "web",
  },
});
