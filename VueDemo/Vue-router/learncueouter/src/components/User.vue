<!--
 * @Author: your name
 * @Date: 2020-06-27 20:51:51
 * @LastEditTime: 2020-06-27 21:15:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue项目demo\VueDemo\Vue-router\learncueouter\src\components\User.vue
--> 
<template>
<div class="">
  <h2>
    我是用户界面</h2>
    <p>我是用户的相关信息，嘿嘿嘿</p>
    <h2>{{userId}}</h2></div>  
</template>

<script>
export default {
  name:'User',
  // routes 定义为哪个活跃的路由
  computed:{
    // param  参数
    userId(){
      return this.$route.params.userid
    }
  }
}
</script>

<style>

</style>