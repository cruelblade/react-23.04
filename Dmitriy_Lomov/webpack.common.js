const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { GenerateSW, InjectManifest } = require('workbox-webpack-plugin');

module.exports = {
  entry: { app: './src/index.jsx' },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties'],
          },
        },
      },
    ],
  },
  output: {
    filename: '[name]_[hash].js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        default: false,
        commons: {
          test: /node_modules/,
          name: 'js/vendor',
          chunks: 'initial',
        },
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
    }),
    new GenerateSW(),
    new InjectManifest({
      swSrc: './src/sw.js',
    }),
  ],
};
