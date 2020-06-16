const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require("path");

module.exports = {
    entry: "./src/index.jsx",
    output: {
        path: path.resolve(__dirname, "build"), //название папки uotput
        filename: "[name].js", //можно назвать файл app.js
    },
    resolve: {
        extensions: [".js", ".jsx"], //чтобы вебпак мог подхватить jsx-файлы
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, //какие файлы с каким расширением брать
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],  //или создать файл .babelrc с этим пресетом
                        plugins: ["@babel/plugin-proposal-class-properties"]
                    },
                },
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            }
        ],
    },
    optimization: {
        minimize: false
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "src/index.html",
        }),
        new MiniCssExtractPlugin(),
    ],
};
