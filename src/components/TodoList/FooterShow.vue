<template>
    <div class="footerBox">
        <el-checkbox v-model="isCheck"></el-checkbox>
        <span> &nbsp &nbsp 已完成{{ finishNum }} / 全部{{ totalNum }}</span>
        <button @click="deleteHandler">清除已完成任务</button>
    </div>
  </template> 
  
  <script>
  export default {
      name:"FooterShow",
      data(){
          return {
              finishNum:0,
              totalNum:4,
              isCheck:false
          }
      },
      methods:{
        deleteHandler(){

        }
      }
  }
  </script>
  
  <style scoped>
    .footerBox{
        margin-left: 1rem;
        margin-top: 0.5rem;
        margin-bottom:0.4rem;
    }
    button{
        float: right;
        margin-right: 0.6rem;
    }
  </style>