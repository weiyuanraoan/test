/*
 * @Author: your name
 * @Date: 2020-06-25 15:03:21
 * @LastEditTime: 2020-06-27 21:10:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue项目demo\VueDemo\Vue-router\learncueouter\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
import about from '../components/About'
import Home from '../components/Home'
import user from '../components/User'
// import { component } from 'vue/types/umd'
//1.通过Vue.use()安装插件
Vue.use(Router)

// 为什么不写url 完整的url协议头：//host/query
const routes = [{
        path: '',
        redirect: '/home'
    }, {

        path: '/home',
        component: Home,

    }, {
        path: '/About',
        component: about
    },
    {
        path: '/user/:userid',
        component: user
    }
]
export default new Router({
    //2.配置路由和组件的应用关系
    routes,
    mode: 'history',
    // linkActiveClass: 'active'
    //默认为hash
})

//3.将router传入到实例中

// export default new Router({
//     // 创建Vuerouter对象

//         routes: [{
//             path: '/',
//             name: 'HelloWorld',
//             component: HelloWorld
//         }]
// })