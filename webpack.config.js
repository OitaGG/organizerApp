const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const ROOT = path.resolve( __dirname, 'src' );
const DESTINATION = path.resolve( __dirname, 'dist' );

module.exports = {
    context: ROOT,
    entry: {
        app: ['../public/index.js'],
        vendor: ['react', 'react-dom']
    },
    output: {
        filename: '[name].[hash].bundle.js',
        path: DESTINATION
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    devServer : {
        port: 4200,
        historyApiFallback: true
    },
    watchOptions: {
        poll: true,
        ignored: /node_modules/
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx', '.js', '.json'],
        modules: [ path.resolve(__dirname, "src"), "node_modules"]
    },
    module: {
        rules: [
            {
                test: /\.js(x?)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader'
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.svg$/,
                use: ['svg-url-loader'],
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    { loader: 'less-loader', options: { javascriptEnabled: true } }
                ]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: '../public/index.html'
        }),
        new CleanWebpackPlugin(),
        new CopyPlugin([
            { from: '../public/img', to: './' },
        ]),
    ]
};