<template>
  <div>
    <section class="jumbotron">
        <h3 class="jumbotron-heading">Search Github Users</h3>
        <div>
          <input type="text" placeholder="enter the name you search" v-model="keyWrold"/>
          <button @click="searchUsers">Search</button>
        </div>
      </section>
  </div>
</template>

<script>
import axios from 'axios';
import pubsub from 'pubsub-js';
export default {
    name:'Search',
    data(){
        return {
            keyWrold:'',
        }
    },
    methods:{
        //发布消息
        searchUsers(){
            //点的时候让欢迎的h1消失，显示loading
            pubsub.publish('sendData',{isWelCome:false,isloading:true,errorMsg:'',cards:[]});
            // this.$http.get(`https://api.github.com/search/users?q=${this.keyWrold}`).then(//请求github的users接口
            axios.get(`https://api.github.com/search/users?q=${this.keyWrold}`).then(//请求github的users接口
                response=>{
                    console.log('请求成功：', response.data);//请求成功loading隐藏显示搜索的信息
                    pubsub.publish('sendData',{isloading:false,errorMsg:'',cards:response.data.items});
                },
                error=>{
                    console.log('请求失败：', error.message);//请求失败显示错误的信息
                    pubsub.publish('sendData',{isloading:false,errorMsg:error.message,cards:[]});
                }
            )
        }
    }
}
</script>

<style>
.jumbotron{
    padding-left: 15px;
}
  
</style>