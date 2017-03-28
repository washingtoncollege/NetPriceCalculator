/**
 * Created by jasontll on 3/22/17.
 */
let webpack = require('webpack');
let path = require('path');
let glob = require('glob');
let inProduction = (process.env.NODE_ENV === 'production');
let ExtractTextPlugin = require("extract-text-webpack-plugin");
let PurifyCSSPlugin = require('purifycss-webpack');
let CleanWebpackPlugin = require('clean-webpack-plugin');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin');
let cssOutputName = inProduction ? '[name].[chunkhash].css' : '[name].css';
let jsOutputName = inProduction ? '[name].[chunkhash].js' : '[name].js';

module.exports = {
    entry: {
        app: [
            './resource/js/main.js',
            './resource/styles/main.scss'
        ]
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        // use '[name].[chunkhash].js' for cache busting
        filename: jsOutputName
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        }
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader', 'sass-loader'],
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.(svg|eot|ttf|woff|woff2)$/,
                use: 'file-loader'
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loaders: [{
                    loader: 'file-loader',
                    options: {
                        name: 'images/[name].[hash].[ext]'
                    }
                },
                    'img-loader'],

            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    postLoaders: {
                        html: 'babel-loader'
                    },
                }
            }
        ]
    },
    plugins: [
        //use '[name].[chunkhash].css' for cache busting
        new ExtractTextPlugin(cssOutputName),
        // new PurifyCSSPlugin({
        //     // Give paths to parse for rules. These should be absolute!
        //     paths: glob.sync(path.join(__dirname, './resource/index.ejs')),
        //     minimize: inProduction
        // }),

        new webpack.LoaderOptionsPlugin({
            minimize: inProduction
        }),
        new CleanWebpackPlugin(['dist'], {
            root: __dirname,
            verbose: true,
            dry: false,
            // exclude: ['shared.js']
        }),
        function () {
            this.plugin('done', stats => {
                require('fs').writeFileSync(
                    path.join(__dirname, 'dist/manifest.json'),
                    JSON.stringify(stats.toJson().assetsByChunkName)
                )
            });
        },
        new webpack.optimize.CommonsChunkPlugin({
            names: ['app']
        }),
        new HtmlWebpackPlugin({
            template: './resource/index.ejs'
        }),
        new InlineManifestWebpackPlugin({
            name: 'webpackManifest'
        })
    ]
};

if (inProduction) {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin()
    );
}