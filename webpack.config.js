const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    mode: 'development',
    resolve:{
        // alias: {
        //     $: path.resolve(__dirname),
        // },
        extensions: [".js", ".vue"],
    },
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10
                        }
                    }
                ],
            },
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname, './public/index.html'),
            filename: 'index.html',
            title: 'no vue-cli vue project',
        }),
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin(),
    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        hot: true,
        historyApiFallback: true,
        compress: true
    },
}