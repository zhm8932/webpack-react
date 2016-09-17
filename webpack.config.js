const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


var config = {
    entry:{
        index:path.resolve('src/js/index.jsx'),
        vendor:['jquery','moment'],
    },
    output:{
        filename:'js/[name].js'
    },
    // externals:{
    //     'react': 'React'
    // },
    //指定如何解析加载模块
    resolve:{
        extensions:["",".js",".jsx",".json",".less",".scss"],
        alias:{
            // jquery:'jquery/dist/jquery.js',
            react:'react/dist/react.min.js',
            'react-dom':'react-dom/dist/react-dom.min.js',
            moment:'moment/min/moment-with-locales.min.js',
            bootstrap:'bootstrap/dist/css/bootstrap.css'
        }
    },
    devServer:{
        port:8080,
        contentBase:'build'  //指定服务器的跟目录指向是硬盘的哪个目录
    },
    module:{
        noParse:[/moment-with-locales/],  ////忽略对已知文件的解析 一个模块中没有其它新的依赖 就可以配置这项
        loaders:[
            {
                test:/\.jsx?$/,
                loader:'babel',  //加载器
                include:path.resolve('src'),  //只解析指定目录下的文件
                exclude: /node_modules/  //不解析node_modules的文件
            },{
                test:/\.less$/,
                exclude:/node_modules/,
                loader:ExtractTextPlugin.extract('style','css!less') //在向页面插入style 标签之前把css内容抽离出来
            },{
                test:/\.scss$/,
                exclude:/node_modules/,
                loader:ExtractTextPlugin.extract('style','css!sass')
            },{
                test:/\.css$/,
                loader:ExtractTextPlugin.extract('style','css')
            },{
                test:/\.(png|jpg|bmp)$/,//加载图片
                loader:'url?limit=50000&name=/images/[name].[ext]'
                // loader: 'url-loader?limit=50000&name=/images/[name].[hash].[ext]'
            }
        ]
    },
    plugins:[
        new ExtractTextPlugin('css/[name].css'),
        new webpack.optimize.CommonsChunkPlugin('js/common.js'),
        new webpack.ProvidePlugin({   //webpack内部全局变量  配置完全局的变量，在js中就直接可以用，不需要再require。该全局不是挂载到window对象上，只对webpack打包出来的js有用。
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            moment:'moment',
            ReactDOM:'react-dom',
            React:'react',  //文件用不需要再import React from 'react' 或者require('react)
        }),
    ]
}

module.exports=config;