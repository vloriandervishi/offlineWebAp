const path =require('path');
const { webpack } = require('webpack');

module.exports={
    entry: './public/js/index.js',
    output:{
        path: path.resolve(__dirname,'dist'),
        filename: 'main.bundle.js'
    },
    plugins:[
        new webpack.ProvidePlugin(
            {
                $: ""
            }
        )
    ],

    mode: 'development'
};