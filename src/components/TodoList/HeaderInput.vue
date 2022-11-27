<template>
  <div>
    <el-input class="headerContent" v-model="input" size="small" @change="enterHandler($event)" placeholder="请输入你的任务名称，按回车确认"></el-input>
  </div>
</template>

<script>
import { nanoid } from 'nanoid';
export default {
    name:"HeaderInput",
    props:['receive'],
    data(){
        return {
          input: ''
        }
    },
    mounted(){
      
    },
    methods:{
      enterHandler(value){
        if(!value) return;
        const todoObj = {id:nanoid(),value:value,isCheck:false};//创建一个新的对象
        this.receive(todoObj);//调用父组件传过来的方法去添加到数组里
        this.input = '';
      }

    }
}
</script>

<style scoped>
  .headerContent{
    width:98%;
    margin-top:0.4rem;
    margin-left:0.4rem;
  }
</style>>

</style>