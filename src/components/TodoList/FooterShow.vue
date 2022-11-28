<template>
    <div class="footerBox" v-show="todoList.length">
        <el-checkbox v-model="checked" @change="clickChange"></el-checkbox>
        <!-- 数据对 但是视图不更新 -->
        <!-- <el-checkbox :checked="isCheck"></el-checkbox> -->
         <!-- <el-checkbox v-model="isCheck"></el-checkbox> -->
        <span> &nbsp &nbsp 已完成{{ finishNum }} / 全部{{ todoList.length }}</span>
        <button @click="deleteHandler">清除已完成任务</button>
    </div>
  </template> 
  
  <script>
  export default {
      name:"FooterShow",
      props:['todoList','checkAllTodo','deleteFinish'],
      data(){
          return {
            checked:false
          }
      },
      computed:{
        finishNum(){
            /* let index=0;
            this.todoList.forEach(item=>{
                if(item.isCheck){
                    index++;
                }
            })
            return index; */
            return this.todoList.reduce((pre,current) => pre + (current.isCheck ? 1: 0),0);
        },
        isCheck:{
            get(){
                if(this.finishNum === this.todoList.length && this.todoList.length > 0){
                    return true; 
                }else{
                    return false;
                }
            },
            set(value){
                if(value === true){
                    this.checkAllTodo();
                }
            }
        }
      },
      methods:{
        deleteHandler(){
            this.deleteFinish();
        },
        clickChange(){
            console.log(this.checked);
            this.checkAllTodo(this.checked);
        }   
      },
      watch:{
        finishNum(now,old){
            if(this.finishNum === this.todoList.length && this.todoList.length > 0){
                this.checked = true;
            }else{
                this.checked = false;
            }
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