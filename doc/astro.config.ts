import mdx from "@astrojs/mdx";
import solid from "@astrojs/solid-js";
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

export default defineConfig({
  base: "/monza-editor",
  integrations: [mdx(), solid({ include: "**/solid/**" }), react()],
  site: "https://raviqqe.com/monza-editor",
});