<template>
  <div>
    <span>{{ name }}</span>
    <button @click="sendName">点击</button>
    <button @click="unbindEvent">解绑事件</button>
  </div>
</template>

<script>
export default {
    name:'School',
    data(){
        return {
            name:'学校'
        }
    },
    methods:{
        sendName(){
           this.$emit('getName',this.name,99,88,77);//这里发出事件
        },
        unbindEvent(){
            this.$off('getName');//解除自定义事件绑定 
            // this.$off(['getName','getOther']);//解除多个自定义事件绑定
            // this.$off();//解绑全部自定义事件
        }
    }
}
</script>

<style scoped>

</style>

