// @ts-check
import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://spontaneous-nougat-37e09c.netlify.app/",
  integrations: [preact()],
});