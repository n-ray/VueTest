<template>
  <div>
    <span> {{ name }} </span>
    <button >点击</button>
  </div>
</template>

<script>
export default {
    name:'Student',
    data(){
        return {
            name:'张三'
        }
    },
    methods:{
        getName(name){
            console.log('得到School发送的name：'+name);
        }
    },
    mounted(){
        this.$bus.$on('sendName',this.getName);//接收自定义事件 通过$bus接收兄弟组件中的数据
    },
    beforeDestroy(){
        this.$bus.$off('sendName');//用完不用了之后销毁自己的自定义事件
    }
}
</script>

<style scoped>

</style>

