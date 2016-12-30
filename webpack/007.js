'use strict';
let path = require('path');
let BabiliPlugin = require("babili-webpack-plugin");

module.exports = {
    entry: {
        '007': './src/007/main.js'
    },

    output: {
        path: './dist',
        filename: '[name].min.js'
    },

    module: {
        // rules: [
        //     {
        //         test: /\.js$/,
        //         loader: 'babel-loader',
        //         query: {
        //             babelrc: false,
        //             presets: [["es2015", { "modules": false, "loose": true }]]
        //         }
        //     }
        // ]
    },
    plugins: [
        new BabiliPlugin()
    ],
    resolve: {
        modules: [
            path.join(process.cwd(), 'src'),
            'node_modules'
        ],
        extensions: ['.js']
    },

    devtool: false
};
