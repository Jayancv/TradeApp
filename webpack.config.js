var path = require('path');

module.exports = {
    entry: './src/main/js/app.js',
    devtool: 'sourcemaps',
    cache: true,
    mode: 'development',
    resolve: {
        alias: {
            'stompjs': __dirname + '/node_modules' + '/stompjs/lib/stomp.js',
        },
        extensions: ['.js', '.jsx', '.scss', '.css' , '.eot' ,'.ttf', '.woff2', '.woff']
    },
    output: {
        path: __dirname,
        filename: './src/main/resources/static/built/bundle.js'
    },
    module: {
        rules: [
            {
                test: path.join(__dirname, '.'),
                exclude: /(node_modules)/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                        plugins: [
                            ["@babel/plugin-proposal-decorators", { "legacy": true }],
                            ["@babel/plugin-proposal-class-properties", { "loose": true }]
                        ]
                    }
                }]
            },
            // {
            //     test: /\.(png|svg|jpg|gif)$/,
            //     use: [
            //         'file-loader'
            //     ]
            // },
            {
                // test: /\.(gif|png|jpe?g|svg)$/i,
                // use: [
                //     'file-loader',
                //     {
                //         loader: 'image-webpack-loader',
                //         options: {
                //             bypassOnDebug: true, // webpack@1.x
                //             disable: true, // webpack@2.x and newer
                //         },
                //     },
                // ],
                test: /\.(png|jpg|gif|svg)$/,
                loader: "url-loader",
                options: {
                    limit: 8192,
                    fallback: "file-loader",

                    // fallback options
                    name: '[name].[hash].[ext]',
                    outputPath: 'images/css-urls/',
                },
            },
            {
                test: /(\.css)$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                    }
                ]
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000'
            },
            {
                test: /\.scss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            }

        ]
    }
};