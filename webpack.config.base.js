const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.[contenthash].js',
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'Zhoujia22',
        template: 'src/assets/index.html'
    })],
    module: {
        rules: [{
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
        },
            {
                test: /\.styl$/,
                use: ['style-loader', 'css-loader', 'stylus-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader'],
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', {
                    loader: 'sass-loader',
                    options: {
                        implementation: require('dart-sass')
                    }
                },
                ]
            }
        ]
    }
};
