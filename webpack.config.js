const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    mode: 'development',
    entry: "./src/app.tsx",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader",
                exclude: /node_modules/
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html"
        })
    ],
    devtool: "source-map",
    devServer: {
        port: 3000,
        contentBase: "./",
        historyApiFallback: true
    }
};

module.exports = config;