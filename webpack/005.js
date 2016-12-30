'use strict';
let path = require('path');

module.exports = {
    entry: {
        '005': './src/005/main.js'
    },

    output: {
        path: './dist',
        filename: '[name].min.js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    babelrc: false,
                    presets: [["es2015", { "modules": false, "loose": true }]]
                }
            }
        ]
    },

    resolve: {
        modules: [
            path.join(process.cwd(), 'src'),
            'node_modules'
        ],
        extensions: ['.js']
    },

    devtool: false
};
