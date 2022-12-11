<template>
    <div class="row">
        <h1 v-show="dataInfo.isWelCome" style="margin-left:20px">欢迎使用</h1>
        <h1 v-show="dataInfo.isloading" style="margin-left:20px">loading...</h1>
        <!-- 直接用字符串控制显示隐藏 为空的时候是false -->
        <h1 v-show="dataInfo.errorMsg">{{ dataInfo.errorMsg }}</h1>
        <div class="card" v-for="item in dataInfo.cards" :key="item.id" >
          <a :href="item.html_url" target="_blank">
            <img :src="item.avatar_url" style='width:100px'/>
          </a>
          <p class="card-text">{{ item.login }}</p>
        </div>
    </div>
</template>

<script>
import pubsub from 'pubsub-js';
export default {
    name:'List',
    data(){
        return {
            src:"https://cn.vuejs.org/logo.svg",
            dataInfo:{//这里多加一层是为了让下边传参方便
                cards:[],
                isloading:false,
                isWelCome:true,
                errorMsg:''
            }
        }
    },
    mounted () {
        pubsub.subscribe('sendData',this.getData); //订阅消息
    },
    methods: {
        getData(name,dataObj) {//这里传一个对象比挨个传参要舒服很多 
            console.log("收到消息",dataObj.cards);
            //通过解构赋值保持所有的值都在，因为传过来的值的数量有可能会少
            this.dataInfo = {...this.dataInfo,...dataObj}
        }
    },

}
</script>

<style scoped>  
    .album {
        min-height: 50rem; /* Can be removed; just added for demo purposes */
        padding-top: 3rem;
        padding-bottom: 3rem;
        background-color: #f7f7f7;
    }
    .card {
        float: left;
        width: 33.333%;
        padding: .75rem;
        margin-bottom: 2rem;
        border: 1px solid #efefef;
        text-align: center;
    }
    
    .card > img {
        margin-bottom: .75rem;
        border-radius: 100px;
    }
    
    .card-text {
        font-size: 85%;
    }
</style>