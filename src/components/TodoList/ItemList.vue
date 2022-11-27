<template>
    <div class="itemBox">
        <div class="contentBox">
            <!-- 这里不采用v-model是props中的值不应该轻易的去改 而是调用上级组件中的方法去改变上级组件中的数据 -->
            <el-checkbox :checked="obj.isCheck" @change="selectHandler(obj.id)"></el-checkbox>
            <span> {{ obj.value }}</span>
            <div @mouseout="outHandler" @mouseover="overHandler" class="buttonBox">
                <el-button v-show="isShow" size="mini" type="danger">删除</el-button>
            </div>
            
        </div>
    </div>
  </template>
  
  <script>
  export default {
      name:"ItemList",
      props:["obj","changeCheck"],
      data(){
          return {  
            isShow:false
          }
      },
      methods:{
        overHandler(){
            this.isShow = true;
        },
        outHandler(){
            this.isShow = false;
        },
        selectHandler(id){
            this.changeCheck(id);
        }
      }
  }
  </script>
  
  <style scoped>
    .itemBox{
        /* line-height: normal; */
        border: 0.1rem solid rgba(00,00,00,0.2);
        /* border-radius:0.4rem; */
    }
    .contentBox{
        margin-left:0.5rem;
        height: 1.8rem;
    }
    .buttonBox{
        float: right;
        margin-right:1rem;
        height: 1.8rem;
        width: 6rem;
        /* background-color: #000; */
    }
    button{
        margin-left:1rem;
    }
    
  </style>