<template>
    <div class="itemBox">
        <div class="contentBox">
            <!-- 这里不采用v-model是props中的值不应该轻易的去改 而是调用上级组件中的方法去改变上级组件中的数据 -->
            <!-- 用checked方法不好使 只能改用v-model 然后用一个值去接一下props里过来的值 然后改的时候也要去改父组件中的值  折中的办法。。。 -->
            <el-checkbox v-model="checked" @change="selectHandler(obj.id)"></el-checkbox>
            <span> {{ obj.value }}</span>
            <el-button @click="deleteHandler(obj.id)" size="mini" type="danger">删除</el-button>
        </div>
    </div>
  </template>
  
  <script>
  export default {
      name:"ItemList",
      props:["obj","changeCheck","deleteItem"],
      data(){
          return {  
            checked:this.obj.isCheck
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
        },
        deleteHandler(id){
            this.deleteItem(id);
        }
      },
      watch:{
        'obj.isCheck'(now,old){
           this.checked = now;
        }
      }
  }
  </script>
  
  <style scoped>
    button{
        float: right;
        margin-right:10px;
        display: none;
    }
    .itemBox{
        /* line-height: normal; */
        border: 0.1rem solid rgba(00,00,00,0.2);
        /* border-radius:0.4rem; */
    }
    .contentBox{
        margin-left:0.5rem;
        height: 1.8rem;
    }
    .itemBox:hover{
        background-color: rgba(66, 63, 63,0.2);
    }
    .itemBox:hover button{
        display: block;
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