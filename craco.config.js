const CracoAlias = require('craco-alias');
const CracoEnvPlugin = require('craco-plugin-env');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  plugins: [
    {
      plugin: {
        overrideWebpackConfig: ({ webpackConfig }) => {
          webpackConfig.resolve.plugins.push(new TsconfigPathsPlugin({}));
          return webpackConfig;
        }
      }
    },
    {
      plugin: CracoEnvPlugin,
      options: {
        variables: {}
      }
    },
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        tsConfigPath: 'tsconfig.paths.json'
      }
    }
  ]
};
