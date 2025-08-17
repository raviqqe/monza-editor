import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import solid from "@astrojs/solid-js";
import { defineConfig } from "astro/config";

export default defineConfig({
  base: "/monza-editor",
  integrations: [
    mdx(),
    react({ include: "**/react/**" }),
    solid({ include: "**/solid/**" }),
  ],
  site: "https://raviqqe.com/monza-editor",
});
