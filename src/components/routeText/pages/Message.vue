<template>
    <div>
        <ul>
            <li v-for="(msg,index) in value" :key="msg.key">
                <!-- 用字符串拼接 -->
                <!-- <router-link :to="`/home/message/detail?key=${msg.key}&title=${msg.title}`">{{ msg.title }}</router-link> -->
                <!-- 用对象与用字符串是一样的效果 -->
                <router-link :to="{
                    path:'/home/message/detail',
                    query:{
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