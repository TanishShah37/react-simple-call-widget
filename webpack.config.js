const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
var copyWebpackPlugin = require('copy-webpack-plugin');
const bundleOutputDir = './build';

module.exports = (env) => {

    return [{
        entry: ['@babel/polyfill', './src/index.js'],
        mode: 'production',
        output: {
            filename: 'widget.js',
            path: path.resolve(bundleOutputDir),
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: ['babel-loader']
                },
                {
                    test: /\.css$/,
                    use: [
                      'style-loader',
                      {
                        loader: 'css-loader',
                        options: {
                          importLoaders: 1,
                          modules: true
                        }
                      }
                    ],
                    include: /\.module\.css$/
                  },
                  {
                    test: /\.css$/,
                    use: [
                      'style-loader',
                      'css-loader'
                    ],
                    exclude: /\.module\.css$/
                  }
            ],
        },
        devServer: {
            contentBase: bundleOutputDir
        },
        plugins: [
            new copyWebpackPlugin([{ from: 'demo/' }]),
            new HTMLWebpackPlugin({
                template: "./src/index.html",
                filename: "index.html"
            }),
        ]
    }];
};