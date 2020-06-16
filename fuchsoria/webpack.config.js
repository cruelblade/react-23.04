/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CompressionPlugin = require('compression-webpack-plugin');
const chats = require('./src/mocks/api/chats.json');
const profile = require('./src/mocks/api/profile.json');

const isAnalyze = process.env.NODE_ENV === 'analyze';

const babelLoader = {
  loader: 'babel-loader',
  options: {
    presets: ['@babel/env', '@babel/react'],
    plugins: [
      ['@babel/plugin-proposal-class-properties', { loose: true }],
      ['import', { libraryName: 'antd', style: 'css' }],
    ],
  },
};

module.exports = {
  entry: { index: './index.tsx' },
  context: path.resolve(__dirname, 'src'),
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundles/index.[contenthash].js',
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          babelLoader,
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'src'),
        use: [babelLoader],
      },
      {
        test: /\.[sca]{2}ss$/,
        exclude: '/node_modules/',
        loader: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[hash:base64:7]',
              },
              sourceMap: false,
              localsConvention: 'camelCaseOnly',
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: false,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        exclude: '/node_modules/',
        loader: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: false,
            },
          },
        ],
      },
    ],
  },
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    splitChunks: {
      chunks: 'all',
      minSize: 100000,
      maxSize: 300000,
      minChunks: 1,
      maxAsyncRequests: 6,
      maxInitialRequests: 4,
      automaticNameDelimiter: '-',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  plugins: isAnalyze
    ? [
        new MiniCssExtractPlugin({
          filename: 'bundles/[name].[contenthash].css',
        }),
        new HtmlWebpackPlugin({ template: './index.html' }),
        new BundleAnalyzerPlugin(),
      ]
    : [
        new MiniCssExtractPlugin({
          filename: 'bundles/[name].[contenthash].css',
        }),
        new HtmlWebpackPlugin({ template: './index.html' }),
        new CompressionPlugin(),
      ],
  resolve: {
    extensions: ['.ts', '.tsx', '.jsx', '.js'],
  },
  devServer: {
    historyApiFallback: true,
    setup: function(app) {
      app.get('/api/chats.json', function(req, res) {
        res.json(chats);
      });
      app.get('/api/profile.json', function(req, res) {
        res.json(profile);
      });
    }
  },
};
