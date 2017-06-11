var webpack = require('webpack');
var path = require('path');

var plugins = [];

if (process.env.NODE_ENV == 'dev') {

} else {
    plugins = [
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        })
    ];
}

module.exports = {
    devtool: "#source-map",
    entry: [
        __dirname + "/app/main.js"
    ],
    output: {
        path: __dirname + "/public/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: "style-loader?modules"
            },
            {
                test: /\.css$/,
                loader: "css-loader?modules"
            }
        ]
    },
    devServer: {
        contentBase: "./public",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    },
    plugins: plugins
};

