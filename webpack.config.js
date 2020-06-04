const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScssConfigWebpackPlugin = require('scss-config-webpack-plugin');

console.log(__dirname);
module.exports = {
    entry: __dirname + "/src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.html$/,
                use: "html-loader",
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                filename: "index.html",
                template: __dirname + "/src/index.html",
                inject: true
            }
        ),

    ],
    devServer: {
        port: 5500,
    }
}