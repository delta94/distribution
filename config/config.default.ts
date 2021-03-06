'use strict';
import { EggAppConfig, PowerPartial } from 'beidou';
import { Configuration } from 'webpack';
// 应用本身的配置 Scheme

export interface Config extends EggAppConfig {
  // webpack?: Configuration
}

import * as path from 'path';
export default () => {
  let config: any = {};
  config = {
    keys: 'secret',
    proxy: {
      host: 'https://x-sys.i-counting.cn',
      match: /\/(json|sys|mock)/
    },
    react: {
      assetPath: '/build',
    },

    view: {
      // useHashAsset: true,
      defaultExtension: '.tsx',
    },
    router: {
      entry: 'index',
      exts: ['.tsx'],
    },
    isomorphic: {
      // babel: false,
    },
    webpack: {
      // your webpack config file
      custom: {
        configPath: path.resolve(__dirname, './webpack.config.ts'),
      },
      output: {
        path: path.resolve(__dirname, '../build'),
        filename: '[name].js?[hash]',
        chunkFilename: '[name].js',
        publicPath: '/build/',
      },
      optimization: {
        splitChunks: {
          chunks: 'all',
          minSize: 30000,
          minChunks: 1,
          maxAsyncRequests: 5,
          maxInitialRequests: 6,
          automaticNameDelimiter: '~',
          name: false,
          cacheGroups: {
            default: false,
            corejs: {
              name: 'corejs',
              test: /[\\/]node_modules[\\/]core-js/,
              priority: 8
            },
            react: {
              name: 'base',
              test: /[\\/]node_modules[\\/](react|redux)/,
              priority: 7
            },
            vendors: {
              name: 'vendor',
              test: /[\\/]node_modules[\\/](?!(core-js|react|redux))/,
              priority: 6
            }
          }
        },
        noEmitOnErrors: true,
      },
      devServer: {
        publicPath: '/build/',
        hot: false
      },
      resolve: {
        extensions: ['.json', '.js', '.jsx', '.ts', '.tsx', '.sass'],
        alias: {
          client: path.join(__dirname, '../client'),
        },
      },
    },
    onerror: {
      // 线上页面发生异常时，重定向到这个页面上
      errorPageUrl: '/error',
    },
    notfound: {
      pageUrl: '/404',
    }
  };
  return config
};
