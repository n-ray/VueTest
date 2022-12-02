<template>
  <div id="app">
    <!-- <HelloWorld/> -->
    <!-- <BaseCom name="张三" :age="18" :obj="obj"/> -->
    <!-- 命名驼峰 使用可以短横线 -->
    <!-- <school-name/> -->
   <div class="box">
      <HeaderInput :receive="receive"/>
      <!-- 逐层传递 先传给子元素再由子元素传给下级元素 -->
      <ListInput :todoList="todoList" :changeCheck = "changeCheck" :deleteItem="deleteItem"/>
       <FooterShow :todoList="todoList" :checkAllTodo="checkAllTodo" :deleteFinish="deleteFinish"/>
   </div>

   <div v-if="false">
      <!-- 以下3种方式实现子给父传数据 -->
      <!-- 通过props实现获取子给父传数据 -->
      <student :getName="getName"/>
      <!-- 通过自定义事件获取 先绑定自定义事件 然后在组件内部通过this.$emit触发 子给父传数据-->
      <!-- <school @getName="getName"/> -->
      <!-- 通过ref 直接在父组件获取子组件实例对象然后获取数据 -->
      <school ref="school" @click.native="clickTest"/>
      <!-- 绑定原生事件需要添加native 否则默认是自定义事件 -->
   </div>
   <father v-if="false"/>


  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import BaseCom from './components/BaseCom'
// import SchoolName from './components/SchoolName.vue'
import HeaderInput from './components/TodoList/HeaderInput.vue'
import ListInput from './components/TodoList/ListInput.vue'
import FooterShow from './components/TodoList/FooterShow.vue'
import Student from './components/customizeEvent/Student'
import School from './components/customizeEvent/School'
import Father from './components/pubsub/Father.vue'
export default {
  name: 'App',//当前组件的名称
  // el:'#app',//
  data(){
    return{
      obj:{
        color:'red',
        size:20
      },
      todoList:JSON.parse(window.localStorage.getItem('todoList')) || [//去读取本地存储的数据展示，如果没有的话就用默认的数据展示
        {id:'001',value:'吃饭',isCheck:false},
        {id:'002',value:'喝酒',isCheck:true},
        {id:'003',value:'睡觉',isCheck:false},
      ]
    }
  },
  created:function(){//程序挂载之前执行  例如 初始化data
    
  },
  components: {//组件
    // HelloWorld,
    // BaseCom,
    // SchoolName
    HeaderInput,ListInput,FooterShow,
    Student,School,
    Father
  },
  mounted:function(){//页面渲染完成 可以写代码了 操作DOM
  //  console.log(this,"APP");
    let school = this.$refs.school;//获取实例对象
    if(school) school.$on('getName',this.getName);//通过实例对象中的自定义方法getName触发 实现子给父传数据  （这里需要注意如果把回调直接写在这里this指向的是school而不是APP！写成箭头函数就没这个问题）
    this.$bus.$on('updateItme',this.updateItem);
  },
  methods:{// 方法
    receive(obj){//定义一个接收方法，然后传给子组件去用 数据却留在父组件这里
      this.todoList.unshift(obj);
    },
    updateItem(id,value){
      console.log(id);
      this.todoList.forEach(item=>{
        if(item.id == id){
          item.value = value;
        }
      })
    },
    changeCheck(id){
      this.todoList.forEach((item)=>{
        if(item.id===id){
          item.isCheck = !item.isCheck;
        }
      })
    },
    deleteItem(id){
      this.todoList = this.todoList.filter(item=>item.id!=id);

     /*  let idx;
      this.todoList.forEach((item,index)=>{
        if(item.id===id){
          idx = index;
        }
      })
      this.todoList.splice(idx,1); */
    },
    checkAllTodo(boo){
      this.todoList.forEach(item=>{
        item.isCheck = boo;
      })
    },
    deleteFinish(){
      this.todoList = this.todoList.filter(item=>item.isCheck===false);
    },
    getName(name,...args){//用解构赋值的方式接收后边的参数
      console.log(name);
      console.log(arguments);
      console.log(args);
    },
    clickTest(){

    }
  },
  watch:{//观察数据
    todoList:{
      deep:true,//开启监控数组内部元素的变化
      handler(value){
        window.localStorage.setItem('todoList',JSON.stringify(value));//改变todolist的时候就把内容放到localStorage中
      }
    }
  },
  beforeDestroy(){
    this.$bus.$off('updateItme');
  }





  

}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 30px;
  
}
.box{
  width: 90%;
  /* height: 100%; */
  /* text-align: left; */
  margin-left:3rem;
  border: 0.1rem solid rgba(00,00,00,0.3);
  border-radius:0.4rem;
}
</style>
