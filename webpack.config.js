const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const pug = require('./webpack/pug');
const stylus = require('./webpack/stylus');
const extractCSS = require('./webpack/css.extract');
const devserver = require('./webpack/devserver');
const webpack = require('webpack');
const images = require('./webpack/images');

const PATHS = {
    source: path.join(__dirname, 'cv_src'),
    build: path.join(__dirname, 'cv')
};

const common = merge ([
    {
        entry: PATHS.source + '/index.js',
        output: {
            path: PATHS.build,
            filename: '[name].js'
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: PATHS.source + '/index.pug',
            })
        ],
    },
    pug(),
    images()
]);

module.exports = function(env) {
    if (env === 'production') {
        return merge([
            common,
            extractCSS()
        ]);
    }
    if (env === 'development') {
        return merge([
            common,
            devserver(),
            stylus()
        ]);
    }
};