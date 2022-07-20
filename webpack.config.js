const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: "development",
    entry: {
        bundle: path.resolve(__dirname, "src/index.js"),
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name][contenthash].js",
        clean: true,
        assetModuleFilename: 'assets/[name][ext]'
    },
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, "dist"),
        },
        port: 3000,
        open: true,
        compress: true,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(png|jpg|jpeg|svg|gif)$/,
                type: 'asset/resource'
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'styles/fonts/[name][ext]',
                },
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
                generator: {
                    filename: 'styles/[name][ext]',
                },
            },

        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "new personal website plugin",
            filename: "index.html",
            template: "src/template.html",
        })
    ]
}