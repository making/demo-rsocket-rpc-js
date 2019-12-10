const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: [
        './src/index.js',
        './src/index.css'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    plugins: [
        new CopyPlugin([{
            from: './*.html'
        }])
    ]
};