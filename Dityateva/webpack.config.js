const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); 
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.jsx',         
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].[hash].js',
        publicPath: '/',                               
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,                        //регулярки по расширениям, которые нужно находить
                exclude: /(node_modules|bower_components)/, //исключить
                use: {                                      //какой лоадэр и опции использовать 
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: ['@babel/plugin-proposal-class-properties'] 
                    }
                }
            },
            {
                test: [/\.css$/i, /\.s[ac]ss$/i],
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                            localIdentName: "[path][name]__[local]--[hash:base64:5]",   //можно указать только "[hash:base64:5]"
                            },
                        },
                    },
                    "sass-loader",
                ],
            }
        ],
    },
    devServer: {                                    //devServer запускает webpack в watch-режиме
        contentBase: path.join(__dirname, 'build'),
        compress: true,
        port: 9000,
        hot: true,
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html'
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin()
    ]
};