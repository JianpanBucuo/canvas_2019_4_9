const path = require('path');


// html 打包
const HtmlWebpackPlugin = require('html-webpack-plugin');
// css 分离 和 图片 路径处理
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
//  使用 MiniCssExtractPlugin 代替  ExtractTextWebpackPlugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// 处理 html 中的图片
const htmlWithinImg = require('html-withimg-loader');
// 清理 dist 仓库
const cleanWebpackPlugin = require("clean-webpack-plugin");
//查看引用模块插件
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const glob = require('glob');
const PurifyCssPlugin = require('purifycss-webpack');
const webpack = require('webpack');
const website = {
    publicPath: "http://localhost:8888/"
    // publicPath:"https://test1.unicompayment.com/partyServer/mouldOne/"
}
module.exports = {
    // mode: 'development',
    entry: {
        main: './src/js/main.js',
        main2: './src/js/main2.js',
        canvas:'./src/js/canvas.js'
    },
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'js/[name].js', //这里[name] 告诉我们，入口进去是什么文件，打包出来同样是什么名字
        publicPath: website.publicPath
    },
    devtool:'source-map',
    // 模块，例如解读 css 图片 如何压缩 转换
    module:{
       rules:[
           //css loader
           {
               test: /\.css$/,
               use:[{
                   loader: MiniCssExtractPlugin.loader,
                   options:{
                    publicPath:'../'
                   },
                }, 'css-loader', {
                    loader:'postcss-loader'
                }
               ]
           },
           {
              test: /\.less$/,
            use:[{
                   loader: MiniCssExtractPlugin.loader
            },'css-loader','less-loader']  
                     
           },
           // 图片处理
// file loader 解决引用路径问题//图片 loader
            {
                test:/\.(png|jpg|gif|jpeg)/,  //是匹配图片文件后缀名称
                use:[{
                    loader:'url-loader', //是指定使用的loader和loader的配置参数
                    options:{
                        limit:500,  //是把小于500B的文件打成Base64的格式，写入JS
                        outputPath:'images/'
                    }
                }]
            },
            {
                test: /\.(htm|html)$/i,
                use:['html-withimg-loader']
            },
            {
                test:/\.(jsx|js)$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:[
                            "env" 
                        ]
                    }
                },
                exclude:/node_modules/
            }
       ]
    },
    plugins:[
        new cleanWebpackPlugin([
            'dist'
        ]),
        new HtmlWebpackPlugin({
            minify:{ //对 html文件进行压缩
              removeAttributeQuotes:true // removeAttributeQuotes 是去除掉属性的双引号
            },
            hash: true, // 因开发中有缓存效果， 所以加入 hash,这样可以有效避免 js缓存
            template:'./src/index.html', //是打包的html 模板路径和文件名称
            chunks:['main','main2'], //主要用于多入口文件，会生成多个打包文件，chunks 可以根据入口选择你要使用的那些js文件
            title:'webpack app', //生成 html的标题
            filename:'index.html' //生成的html的文件名， 默认是 index.html
        }),
        new HtmlWebpackPlugin({
            minify:{ //对 html文件进行压缩
              removeAttributeQuotes:true // removeAttributeQuotes 是去除掉属性的双引号
            },
            hash: true, // 避免 js缓存
            template:'./src/index2.html',
            chunks:['canvas'],
            title:'webpack app',
            filename:'index2.html'
        }), 
        // new ExtractTextWebpackPlugin('css/index.css')
        new MiniCssExtractPlugin({
            filename:'css/[name].css',
            chunkFilename:'css/[id].css'
        }),
        // 去除掉 没有用掉的 css
        new PurifyCssPlugin({
            paths:glob.sync(path.join(__dirname,'src/*.html'))
        }),
        // new BundleAnalyzerPlugin()
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
}