module.exports = {
  stories: ['../stories/**/*.stories.jsx'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links', '@storybook/addon-knobs'],
  webpackFinal: async config => {
    // do mutation to the config

    return config;
  },
};
