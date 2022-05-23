module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(m?js)$/,

      type: "javascript/auto",
      // Storybook will fail to build if this option is not specified.
      // ModuleParseError: Module parse failed: 'import' and 'export' may appear only with 'sourceType: module' (1:0)
      // File was processed with these loaders:
      //  * ./node_modules/@pmmmwh/react-refresh-webpack-plugin/loader/index.js
      //  * ./node_modules/babel-loader/lib/index.js
      //  * ./node_modules/source-map-loader/dist/cjs.js
      // You may need an additional loader to handle the result of these loaders.

      resolve: {
        fullySpecified: false,
      },
    });

    return config;
  },
}
