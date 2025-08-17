import mdx from "@astrojs/mdx";
import preact from "@astrojs/preact";
import react from "@astrojs/react";
import solid from "@astrojs/solid-js";
import { defineConfig } from "astro/config";

export default defineConfig({
  base: "/monza-editor",
  integrations: [
    mdx(),
    preact({ include: "**/preact/**/*.tsx" }),
    react({ include: "**/react/**/*.tsx" }),
    solid({ include: "**/solid/**/*.tsx" }),
  ],
  site: "https://raviqqe.com/monza-editor",
});
