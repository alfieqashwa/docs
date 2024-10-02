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
            { label: "Features", slug: "guides/features" },
            { label: "Pages", slug: "guides/pages" },
            { label: "Authorization", slug: "guides/authorization" },
            { label: "Devices", slug: "guides/devices" },
            { label: "Subscriptions", slug: "guides/subscriptions" },
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
