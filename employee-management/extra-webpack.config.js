const webpack = require('webpack');

module.exports = {
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                APIURL: JSON.stringify(process.env.APIURL)
            }
        })
    ]
}