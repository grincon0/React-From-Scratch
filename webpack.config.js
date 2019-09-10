const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //react entry file path
    entry: './src/index.js',
    //location where the compiled scripts will be set
    output: {
        path:path.join(__dirname, '/dist'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            {
                //compile all js + jsx files
                test:/\.(js|jsx)$/,
                //exclude node modules
                exclude:/node_modules/,
                use:['babel-loader']
            }

        ]
    },
    resolve:{
        extensions:['*', '.js', 'jsx']
    },
    plugins: [
        //builds the index.html file after bundling
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]


}