<template>
  <div>
    <span>{{ name }}</span>
    <button @click="clickHandler">点击发出name</button>
  </div>
</template>

<script>
export default {
    name:'School',
    data(){
        return {
            name:'xx学校'
        }
    },
    methods:{
        clickHandler(){
            this.$bus.$emit('sendName',this.name);//通过$bus发送name给兄弟组件
        }
    }
}
</script>

<style scoped>

</style>

