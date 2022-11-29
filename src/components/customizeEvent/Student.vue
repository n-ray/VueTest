<template>
  <div>
    <span> {{ name }} </span>
    <button @click="sendName">点击</button>
  </div>
</template>

<script>
export default {
    name:'Student',
    props:['getName'],
    data(){
        return {
            name:'张三'
        }
    },
    methods:{
        sendName(){
            this.getName(this.name);
        },
       
    }
}
</script>

<style scoped>

</style>

