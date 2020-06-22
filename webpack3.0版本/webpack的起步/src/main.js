/*
 * @Author: your name
 * @Date: 2020-06-21 17:44:37
 * @LastEditTime: 2020-06-22 23:02:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue项目demo\webpack3.0版本\webpack的起步\src\main.js
 */
const { add, mul } = require('./js/math.js')
console.log(add(20, 30));
console.log(mul(20, 30));

require('./css/normal.css')
require('./css/special.less')

import Vue from 'vue'

new Vue({
    el: "#app",
    template: `
    <div><h2>{{message}}</h2>
    <button @click="btnclick">按钮</button>
    <h2>{{name}}</h2></div>
    
  `,

    data: {
        message: "Hello webpack",
        name: "安排你"
    }
})