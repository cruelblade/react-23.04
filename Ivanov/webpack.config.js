const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: "./src/index.jsx",
    output: {
        path: path.resolve(__dirname,"build"),
        filename:"[name].js",
        publicPath: '/',
    },
    devServer: {
        hot: true,
        contentBase: path.join(__dirname, 'build'),
        compress: true,
        port: 9000,
        historyApiFallback: true
    },
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html"
        }),
        new MiniCssExtractPlugin(),
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env',"@babel/preset-react"],
                        plugins: ['@babel/plugin-proposal-class-properties'],
                    }
                }
            },
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[name]__[local]--[hash:base64:5]',
                            }
                        }
                    }
                ],
            },
        ]
    }
};