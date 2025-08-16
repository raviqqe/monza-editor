import mdx from "@astrojs/mdx";
import { defineConfig } from "astro/config";

export default defineConfig({
  base: "/monza-editor",
  integrations: [mdx()],
  site: "https://raviqqe.com/monza-editor",
});
