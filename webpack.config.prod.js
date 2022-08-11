const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const base = require('./webpack.config.base');
module.exports = {
    ...base,
    mode: 'production',
    plugins: [
        ...base.plugins,
        new MiniCssExtractPlugin({
                filename: '[name].[contenthash].css',
                chunkFilename: '[id].[contenthash].css',
            }
        )],
    module: {
        rules: [
            ...base.module.rules,
            {
                test: /\.css$/,
                // use: ['style-loader', 'css-loader']
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            }
        ]
    }

};
