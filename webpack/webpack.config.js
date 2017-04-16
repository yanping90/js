var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: __dirname + "/app/main.js",
    output: {
        path: __dirname + "/public/",
        filename: "bundle.js"
    }
}

