var baseConfig = require('./webpackBaseConfig');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');

module.exports = [Object.assign({}, baseConfig, {
    plugins: baseConfig.plugins.concat([
        new ExtractTextPlugin("[name].css")
    ])
}), {
    entry: {
        htmlExport: path.join(__dirname, 'public/js/htmlExport.js')
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'sass-loader' })
        }, {
            test: /\.less$/,
            loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'less-loader' })
        }]
    },
    output: {
        path: path.join(__dirname, 'public/build'),
        publicPath: '/build/',
        filename: '[name].js'
    },
    plugins: [
        new ExtractTextPlugin("html.min.css")
    ]
}];
