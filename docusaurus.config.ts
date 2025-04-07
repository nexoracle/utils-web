import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Utils",
  tagline: "Documentation & guide for the @nexoracle/utils library. @nexoracle/utils is a Utilities library for JavaScript and TypeScript.",
  favicon: "https://cdn.nexoracle.com/__dirname/images/nexoracle/__icon32.ico",

  url: "https://nexoracle-utils.vercel.app/",
  baseUrl: "/",

  organizationName: "maher-xubair", // Usually your GitHub org/user name.
  projectName: "utils-web", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl:
          'https://github.com/nexoracle/utils-web/tree/main/',
          remarkPlugins: [
            [
              require("@docusaurus/remark-plugin-npm2yarn"),
              {
                sync: true,
                converters: ["pnpm", "yarn", "bun"],
              },
            ],
          ],
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "https://cdn.nexoracle.com/__dirname/images/nexoracle/logo__1200x630__white_bg.png",
    navbar: {
      title: "NexOracle/Utils",
      logo: {
        alt: "NexOracle Logo",
        src: "https://cdn.nexoracle.com/__dirname/images/nexoracle/logo300.png",
        style: {
          transform: "scale(1.25)",
          padding: "0 0.5rem",
        },
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "docsSidebar",
          position: "left",
          label: "Docs",
        },

        {
          to: "https://patreon.com/nexoracle",
          target: "_blank",
          position: "right",
          className: "header-sponsor-link",
          "aria-label": "Support",
          title: "Support",
          label: "Support",
        },
        {
          to: "https://github.com/maher-xubair/utils",
          target: "_blank",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub",

          title: "GitHub",
          label: "GitHub",
        },
      ],
    },
    footer: {
      style: "dark",

      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/introduction",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/maher-xubair/utils",
            },
            {
              label: "Npm",
              href: "https://npmjs.com/package/@nexoracle/utils",
            },
          ],
        },
      ],
      copyright: `Copyright © 2025 NexOracle - Utils`,
    },
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    prism: {
      theme: prismThemes.vsLight,
      darkTheme: prismThemes.vsDark,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
