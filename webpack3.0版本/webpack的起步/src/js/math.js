/*
 * @Author: your name
 * @Date: 2020-06-21 17:47:52
 * @LastEditTime: 2020-06-21 17:54:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue项目demo\webpack3.0版本\webpack的起步\src\math.js
 */
const add = ((a, b) => {
    return a + b
})

const mul = (a, b) => {
    return a * b
}

module.exports = {
    add,
    mul
}