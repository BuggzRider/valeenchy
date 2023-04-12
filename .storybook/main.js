const path = require('path');
module.exports = {
  stories: ['../**/*.stories.mdx', '../**/*.stories.@(js|jsx|ts|tsx)'],
  /** Expose public folder to storybook as static */
  staticDirs: ['../public'],
  addons: ["@storybook/addon-actions",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-knobs",
    "@storybook/addon-links"
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  },
  babel: async (options) => {
    options.presets.push('@emotion/babel-preset-css-prop')
    return options
  },
  webpackFinal: async (config) => {
    config.resolve.modules = [
      ...(config.resolve.modules || []),
      path.resolve(__dirname, "../src"), "node_modules"
    ];

    return config;
  },
};