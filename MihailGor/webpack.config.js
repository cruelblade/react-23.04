const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
   entry: "./src/index.jsx",
   output: {
       path: path.resolve(__dirname, "build"),
       filename: "[name].js",
   },
   resolve: {
    extensions: [".js", ".jsx"],
   },
   module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                        plugins: ["@babel/plugin-proposal-class-properties"],
                    },
                },
            },
            {
                test: /\.css$/i,
                use: [
                    'style=loader', 
                    {
                        loader: 'css-loader',
                        options: {
                          modules: {
                             localIdentName: '[path][name]__[local]--[hash:base64:5]',
                          },
                        },
                    },
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  'style-loader',
                  // Translates CSS into CommonJS
                  'css-loader',
                  // Compiles Sass to CSS
                  'sass-loader',
                ],
              },
        ],
    },
    devServer: {
        contentBase: path.join(__dirname, "build"),
        compress: true,
        port: 9000,
    },
   plugins: [
       new HtmlWebpackPlugin({
            filename: "index.html",
            template: "src/index.html",
        }),
        new MiniCssExtractPlugin(),
    ],
};