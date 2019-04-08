const merge = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');
const webpack = require('webpack');

module.exports = merge(common, {
    devtool:'inline-source-map', 
    devServer:{
        //设置基本目录结构
        contentBase:path.resolve(__dirname,'../dist'),
        //服务器的IP地址，可以使用 Ip 也可以使用 localhost
        host:'localhost',
        //服务端压缩是否开启
        compress: true,
        //配置服务端号
        port: 8888,
        // hot: true
        hot: true
    },   
    plugins:[
        new webpack.DefinePlugin({
            'process.env.NODE_ENV':JSON.stringify('development')
        })
    ]
})