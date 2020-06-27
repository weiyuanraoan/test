<!--
 * @Author: your name
 * @Date: 2020-06-25 15:03:21
 * @LastEditTime: 2020-06-27 21:16:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue项目demo\VueDemo\Vue-router\learncueouter\src\App.vue
--> 
<template>
  <div id="app">
    <h2>我是APP组件</h2>
    <!-- 最终渲染成a标签 -->
    <!-- router-link 的补充
      显示为button tag="button" li
      replace 不可返回
       -->
    <!-- <router-link to="/home"  tag="button" active-class="active"> 首页</router-link>
    <router-link to="/about">关于</router-link> -->
    <button @click="homeclick">首页</button>
    <button @click="aboutclick">关于</button>
    <router-link :to="'/user/'+userId">用户</router-link>
    <router-view></router-view>
    
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
return{
  userId:'zhangsan'
}
  },
  methods:{
    homeclick(){
      // this.$router.push('/home')
      this.$router.replace('./home')
      console.log('homeclick');

      
    },
    aboutclick(){
      this.$router.push('/about')
      console.log('aboutclick');
      
    }
  }
}
</script>

<style>
.active{
  color: red;
}
</style>
