const path = require("path");
const PUBLIC_DIR = "/";
const SRC_DIR = path.resolve(__dirname, "../src");
const BUILD_DIR = path.resolve(__dirname, "../build");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const PORT = 9824;

const webpackDevConfig = {
    mode: "development",
    devtool: "eval",
    entry: {
        index: `${SRC_DIR}/index.js`
    },
    output: {
        publicPath: PUBLIC_DIR,
        path: BUILD_DIR,
        filename: "js/[name].[hash].js",
        library: "[name]_[hash]"
    },
    externals: {
        jquery: "jQuery"
    },
    resolve: {},
    devServer: {
        host: "localhost",
        port: PORT,
        open: true,
        proxy: {}
    },
    module: {
        rules: [{
            test: /.js[x]?$/,
            include: [
                SRC_DIR
            ],
            use: ["babel-loader"]
        }, {
            test: /.css$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader",
                options: {
                    importLoaders: 1
                }
            }, {
                loader: "less-loader"
            }]
        }, {
            test: /.(bmp|png|gif|jpg|jpeg)$/,
            use: [{
                loader: "url-loader",
                options: {
                    limit: 100000
                }
            }]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            publicPath: PUBLIC_DIR,
            filename: "index.html",
            template: `${SRC_DIR}/index.html`,
            chunks: ["index"],
            inject: "body",
            minify: true
        })
    ]
};

module.exports = webpackDevConfig;