var path = require('path');

module.exports = {
    mode: 'production',
    devtool: 'source-map',
    entry: '../Components/Modal.jsx',
    output: {
        path: path.resolve('lib'),
        filename: 'Modal.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: ['babel-loader', 'source-map-loader']
            }
        ]
    },
    externals: {
        react: {
            commonjs: "react",
            commonjs2: "react",
            amd: "React",
            root: "React"
        },
        'styled-components': {
            commonjs: "styled-components",
            commonjs2: "styled-components",
            amd: "styled-components",
            root: "styled-components"
        }
    }
}