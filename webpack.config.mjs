import { resolve } from 'node:path';
import { loadEnvFile } from 'node:process';

import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

try {
  loadEnvFile(new URL('./.env', import.meta.url));
} catch (e) {
  console.error(e.message); // eslint-disable-line -- CLI
}

/**
 * @import { Configuration as WebpackConfig } from 'webpack';
 */

/** @type {WebpackConfig} */
export default {
  mode: 'development',
  resolve: {
    alias: {
      '@': resolve(import.meta.dirname, 'src'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.css', '.scss', '.sass'],
  },
  entry: resolve(import.meta.dirname, 'src', 'index.jsx'),
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
                "@import '@/styles/utils/mixins.scss';\n@import '@/styles/utils/variables.scss';",
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
};
