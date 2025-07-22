const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const SOURCE_ROOT = __dirname + '/src/main/webpack';

function getStaticClientlibConfigs() {
  const commonProps = {
    watch: true
  };

  const clientlibPaths = [
    {
      name: 'clientlib-base',
      publicPath: '/clientlib-base'
    },
    {
      name: 'clientlib-dependencies',
      publicPath: '/clientlib-dependencies'
    }
  ];

  return clientlibPaths.map(lib => ({
    ...commonProps,
    directory: path.resolve(
      __dirname,
      '..',
      'ui.apps',
      'src',
      'main',
      'content',
      'jcr_root',
      'apps',
      'mysamplesite',
      'clientlibs',
      lib.name
    ),
    publicPath: lib.publicPath
  }));
}


module.exports = env => {

    const writeToDisk = env && Boolean(env.writeToDisk);

    return merge(common, {
        mode: 'development',
        performance: {
            hints: 'warning',
            maxAssetSize: 1048576,
            maxEntrypointSize: 1048576
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, SOURCE_ROOT + '/static/index.html')
            })
        ],
        devServer: {
            client: {
                overlay: {
                    errors: true,
                    warnings: false,
                },
            },
            watchFiles: ['src/**/*'],
            hot: false,
            devMiddleware: {
                writeToDisk: writeToDisk
            },
            static: getStaticClientlibConfigs()
        }
    });
}
