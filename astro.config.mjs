import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Docs",
      social: {
        github: "https://github.com/alfieqashwa",
      },
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "About", slug: "guides/about" },
            { label: "Authorization", slug: "guides/authorization" },
            { label: "Pages", slug: "guides/pages" },
            { label: "Devices", slug: "guides/devices" },
          ],
        },
        // {
        //   label: "Reference",
        //   autogenerate: { directory: "reference" },
        // },
      ],
    }),
  ],
});
