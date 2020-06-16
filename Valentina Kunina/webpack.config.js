const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = (env, { mode = 'development'}) => {
    const isDev = mode === "development";
    return {
    entry: "./src/index.jsx",
    output: {
        path: path.resolve(__dirname, "build"), //название папки output
        filename: "[name].js", //можно назвать файл app.js
    },
    resolve: {
        extensions: [".js", ".jsx"], //чтобы вебпак мог подхватить jsx-файлы
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, //какие файлы с каким расширением брать
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.css$/i,
                use: [
                    isDev ? "style-loader" : MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            modules: isDev
                                ? {
                                    localIdentName: "[path][name]__[local]--[hash:base64:5]",
                                }
                                : {
                                    localIdentName: "[hash:base64:5]",
                                  },
                        },
                    },
                ],
            },
        ],
    },
    optimization: {
        splitChunks: {
            chunks: "all",
            cacheGroups: {
                default: false,
                commons: {
                    test: /node_modules/,
                    name: "js/vendor",
                    chunks: "initial",
                },
                styles: {
                    name: "styles",
                    test: /\.css$/,
                    chunks: "all",
                    enforce: true,
                },
            },
        },
    },
    devServer: {
        contentBase: path.join(__dirname, "build"),
        compress: true,
        port: 8080,
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "src/index.html",
        }),
        new MiniCssExtractPlugin(),
    ],
};
}