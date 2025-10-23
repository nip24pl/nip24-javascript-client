const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: './main.js',
    output: {
        filename: 'nip24client-bundle.min.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    target: 'web',
    devtool: 'source-map',
    devServer: {
        port: 8080,
        static: {
            directory: path.join(__dirname, 'public')
        },
        open: true
    },
    resolve: {
        extensions: ['.js', '.json'],
        alias: {
            axios: 'axios/dist/browser/axios.cjs'
        },
        fallback: {
            'buffer': require.resolve('buffer/'),
            'crypto': require.resolve('crypto-browserify'),
            'events': require.resolve('events/'),
            'process/browser': require.resolve('process/browser'),
            'stream': require.resolve('stream-browserify'),
            'util': require.resolve('util/'),
            'vm': require.resolve('vm-browserify')
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            Buffer: ['buffer', 'Buffer']
        }),
        new webpack.ProvidePlugin({
            process: 'process/browser'
        })
    ]
};
