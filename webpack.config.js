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
            title: "new personal website template",
            filename: "index.html",
            template: "src/template.html",
        }),
        new HtmlWebpackPlugin({
            title: "skills | new personal website template",
            filename: "skills.html",
            template: "src/skills.html",
        }),
        new HtmlWebpackPlugin({
            title: "samples | new personal website template",
            filename: "samples.html",
            template: "src/samples.html",
        }),
        new HtmlWebpackPlugin({
            title: "sample | samples | new personal website template",
            filename: "sample.html",
            template: "src/sample.html",
        }),
        new HtmlWebpackPlugin({
            title: "contact | new personal website template",
            filename: "contact.html",
            template: "src/contact.html",
        }),
    ]
}