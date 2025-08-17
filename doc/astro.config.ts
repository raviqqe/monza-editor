import mdx from "@astrojs/mdx";
import solid from "@astrojs/solid-js";
import { defineConfig } from "astro/config";

export default defineConfig({
  base: "/monza-editor",
  integrations: [mdx(), solid({ include: "**/solid/**" })],
  site: "https://raviqqe.com/monza-editor",
});
