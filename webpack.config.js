var path = require("path");

var PUBLIC_DIR = path.resolve(__dirname, "public");
var SRC_DIR = path.resolve(__dirname, "src");
const HTMLWebpackPlugin = require("html-webpack-plugin");

var config = {
    entry: SRC_DIR + "/app.js",
    output: {
        path: PUBLIC_DIR ,
        filename: "bundle.js",
    },
    devtool:"cheap-module-source-map",
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader' ]
            },
            {
                test: /\.js?/,
                include: SRC_DIR,
                loader: "babel-loader",
            }
        ]
    },
    mode: "development"
};

module.exports = config;