const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: "production",
    target: "node",
    entry: {
        content: path.resolve(__dirname, "src", "content.ts"),
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, "dist")
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new CopyPlugin({
            patterns: [{from: ".", to: ".", context: "public" }]
        })
    ]
}