/*
 * @Author: your name
 * @Date: 2020-06-22 08:59:33
 * @LastEditTime: 2020-06-22 19:36:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue项目demo\webpack3.0版本\webpack的配置\webpack.config.js
 */
const path = require('path')


module.exports = {
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, 'dist'), //绝对路径
        filename: 'bundle.js',
        // publicpath: 'dist/'
    },
    module: {
        rules: [{
                test: /\.css$/,
                //正则表达式
                //css-loader  负责将css加载  style-loader 渲染样式 
                //使用多个loader 从右往左边读
                use: ['style-loader', 'css-loader']
            }, {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }],
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        //当加载的图片，小于limit时，会将图片编译成base64字符串形式。
                        //当加载的图片，大于limit时，需要使用file-loader模块进行加载。
                        limit: 8192,
                        // 8192 8kb
                        name: "img/[name].[hash:8].[ext]"
                    },

                }]
            }


        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    }

}