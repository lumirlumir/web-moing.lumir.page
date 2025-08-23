/**
 * @fileoverview Webpack Dev Server and Build.
 * @see https://webpack.js.org/api/node/#stats-object
 */

/* eslint-disable no-console -- CLI */

// --------------------------------------------------------------------------------
// Import
// --------------------------------------------------------------------------------

import { resolve } from 'node:path';
import { loadEnvFile } from 'node:process';

import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import HtmlWebpackPlugin from 'html-webpack-plugin';

// --------------------------------------------------------------------------------
// Typedefs
// --------------------------------------------------------------------------------

/**
 * @import { Configuration as WebpackConfig } from 'webpack';
 */

// --------------------------------------------------------------------------------
// Load Env
// --------------------------------------------------------------------------------

const arg = process.argv[2];

try {
  loadEnvFile(new URL('./.env', import.meta.url));
} catch (e) {
  console.error(`Cannot find \`.env\` file.\n${e.message}\n`);
}

// --------------------------------------------------------------------------------
// Webpack Config
// --------------------------------------------------------------------------------

/** @type {WebpackConfig} */
const webpackConfig = {
  mode: arg === 'dev' ? 'development' : 'production',
  resolve: {
    alias: {
      '@': resolve(import.meta.dirname, 'src'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.css', '.scss', '.sass'],
  },
  entry: resolve(import.meta.dirname, 'src', 'index.tsx'),
  output: {
    path: resolve(import.meta.dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.s?[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              additionalData:
                "@import '@/styles/mixins.scss';\n@import '@/styles/variables.scss';",
            },
          },
        ],
      },
      {
        test: /\.(js|jsx|ts|tsx)$/i,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react',
                '@babel/preset-typescript',
              ],
            },
          },
        ],
        resolve: {
          // If you don't use resolve, you can't recognize .jsx
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
        exclude: ['/node_modules/'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(import.meta.dirname, 'public', 'index.html'),
      filename: 'index.html',
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env),
    }),
  ],
  devServer: {
    open: true,
  },
};

// --------------------------------------------------------------------------------
// Dev Server
// --------------------------------------------------------------------------------

if (arg === 'dev') {
  const server = new WebpackDevServer(webpackConfig.devServer, webpack(webpackConfig));

  server.startCallback(() => {
    console.log('Successfully started server on http://localhost:8080');
  });
}

// --------------------------------------------------------------------------------
// Build
// --------------------------------------------------------------------------------

if (arg === 'build') {
  webpack(webpackConfig, (err, stats) => {
    if (err || stats.hasErrors()) {
      throw new Error(err || stats.toString());
    } else {
      console.warn(stats.hasWarnings() ? stats.toString({ colors: true }) : '');
    }
  });
}
