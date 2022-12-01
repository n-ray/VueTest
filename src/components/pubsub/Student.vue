<template>
  <div>
    <span> {{ name }} </span>
    <button >点击</button>
  </div>
</template>

<script>
import pubsub from 'pubsub-js';
export default {
    name:'Student',
    data(){
        return {
            name:'张三'
        }
    },
    methods:{
        getName(msgName,data){
            console.log('得到School发送的name：'+msgName + data);
        }
    },
    mounted(){
        this.subID = pubsub.subscribe('hello',this.getName);//订阅消息
    },
    beforeDestroy(){
        pubsub.unsubscribe(this.subID);//取消订阅
    }
}
</script>

<style scoped>

</style>

