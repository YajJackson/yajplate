const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: ['./src/index.tsx'],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.less', '.css'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader'
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|png|jpe?g|gif)$/,
                use: 'file-loader',
            },
        ],
    },
    plugins: [
        new webpack.EnvironmentPlugin({
            API_URL: 'http://localhost:1337'
        }),
    ],
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        compress: true,
        port: 7000,
        historyApiFallback: true,
        clientLogLevel: 'trace', // 'silent' | 'trace' | 'debug' | 'info' | 'warn' | 'error' | 'none' | 'warning'
    },
}
