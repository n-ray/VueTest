<template>
  <div>
    <span>{{ name }}</span>
    <button @click="clickHandler">点击发出name</button>
  </div>
</template>

<script>
import pubsub from 'pubsub-js';
export default {
    name:'School',
    data(){
        return {
            name:'xx学校'
        }
    },
    methods:{
        clickHandler(){
            pubsub.publish('hello',this.name);//发布消息
        }
    },
    mounted(){
       
    }
}
</script>

<style scoped>

</style>

