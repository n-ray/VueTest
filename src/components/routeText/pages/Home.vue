<template>
    <div>
        <h2>我是Home的内容</h2>
        <ul class="nav nav-tabs">
          <li>
            <router-link  class="list-group-item" active-class="active" to="/home/news">News</router-link>
          </li>
          <li>
            <router-link  class="list-group-item" active-class="active" to="/home/message">Message</router-link>
          </li>
        </ul>
        <keep-alive include="News">
          <!-- 让News组件不销毁，输入的东西可以得以保存 News是组件名称，多个的时候写成数组:include="[News,Message]"-->
          <router-view></router-view>
        </keep-alive>
    </div>
  </template>
  
  <script>
  export default {
      name:'Home',
  }
  </script>
  
  <style>
  
  </style>