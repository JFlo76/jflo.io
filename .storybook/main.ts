import type { StorybookConfig } from "@storybook/experimental-nextjs-vite";

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],

  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
    "@storybook/experimental-addon-test",
    "@storybook/addon-interactions",
    {
      name: '@storybook/addon-styling',
      options: {
        postCss: {
          implementation: require('postcss'),
        },
      },
    },
    "@storybook/addon-mdx-gfm",
    "@storybook/addon-a11y" // Added addon-a11y
  ],

  "framework": {
    "name": "@storybook/experimental-nextjs-vite",
    "options": {}
  },

  "staticDirs": [
    "../public"
  ],

  docs: {
    autodocs: true
  },

  typescript: {
    reactDocgen: "react-docgen-typescript"
  }
};
export default config;