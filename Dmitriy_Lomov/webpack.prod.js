const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [{
                    loader: MiniCssExtractPlugin.loader
                },
                {
                    loader: "css-loader",
                    options: {
                        modules: {
                            localIdentName: "[hash:base64:7]",
                        },
                    },
                },
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin(),
    ],
});