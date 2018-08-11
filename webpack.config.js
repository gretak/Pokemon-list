const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
const StyleLintPlugin = require('stylelint-webpack-plugin');



module.exports = {
    entry: {
        main: './src/js/index.js'
    },
    output: {
        filename: 'main.js',
        path: path.resolve('./dist')
    },
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.jsx?$/,
                enforce: "pre",
                exclude: /node_modules/,
                use: ["babel-loader", "eslint-loader"]

            },
            {
                test: /\.html$/,
                use: [{
                    loader: "html-loader",
                    options: { minimize: true }
                }]
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new StyleLintPlugin({
            configFile: '.stylelintrc',
            context: 'src',
            files: '**/*.scss',
            failOnError: false,
            quiet: false
        })
    ]
};