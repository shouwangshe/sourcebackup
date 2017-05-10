const path = require('path');
module.exports = {
    entry : path.join(__dirname,'src/main.js'),
    output : {
        path : path.join(__dirname,'dist'),
        filename : 'bundle.js'
    },
    devServer : {
        port : 8888,
        hot : true,
        inline : true
    },
    module : {
        rules : [
            {
                test : /\.js$/,
                loader : 'babel-loader',
                exclude : /node_modules/,
                query : {
                    presets : ['es2015','stage-2']
                }
            }
        ]
    }
}
