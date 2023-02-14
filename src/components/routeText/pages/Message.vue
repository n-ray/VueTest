<template>
    <div>
        <ul>
            <li v-for="(msg,index) in value" :key="msg.key">
                <!-- 用query传递参数 -->
                <!-- 用字符串拼接 -->
                <!-- <router-link :to="`/home/message/detail?key=${msg.key}&title=${msg.title}`">{{ msg.title }}</router-link> -->
                <!-- 用对象与用字符串是一样的效果 -->
                <!-- <router-link :to="{ -->
                    <!-- // path:'/home/message/detail', -->
                    <!-- name:'detail',//路由命名可以代替path 用于简化多级路由path过长的问题，路由器router中要有对应的name属性 -->
                    <!-- query:{ -->
                        <!-- key:msg.key, -->
                        <!-- title:msg.title -->
                    <!-- } -->
                <!-- }"> -->
                    <!-- {{ msg.title }} -->
                <!-- </router-link> -->

                <!-- 用params传递参数 -->
                <!-- <router-link :to="`/home/message/detail/${msg.key}/${msg.title}`">{{ msg.title }}</router-link> -->
                 <router-link :to="{
                    // path:'/home/message/detail',
                    name:'detail',//用params传递参数时要注意不能用path只能用name☆☆☆
                    params:{
                        key:msg.key,
                        title:msg.title
                    }
                }">
                    {{ msg.title }}
                </router-link>
            </li>
        </ul>
        <router-view></router-view>
</div>
  </template>
  
  <script>
  export default {
      name:'Message',
      data() {
        return {
            value:[
                {key:'001',title:'消息1'},
                {key:'002',title:'消息2'},
                {key:'003',title:'消息3'}
            ]
        }
      },
  }
  </script>
  
  <style>
  
  </style>