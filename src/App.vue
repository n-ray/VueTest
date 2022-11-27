<template>
  <div id="app">
    <!-- <HelloWorld/> -->
    <!-- <BaseCom name="张三" :age="18" :obj="obj"/> -->
    <!-- 命名驼峰 使用可以短横线 -->
    <!-- <school-name/> -->
   <div class="box">
      <HeaderInput :receive="receive"/>
      <!-- 逐层传递 先传给子元素再由子元素传给下级元素 -->
      <ListInput :todoList="todoList" :changeCheck = "changeCheck"/>
       <FooterShow/>
   </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import BaseCom from './components/BaseCom'
// import SchoolName from './components/SchoolName.vue'
import HeaderInput from './components/TodoList/HeaderInput.vue'
import ListInput from './components/TodoList/ListInput.vue'
import FooterShow from './components/TodoList/FooterShow.vue'
export default {
  name: 'App',//当前组件的名称
  // el:'#app',//
  data(){
    return{
      obj:{
        color:'red',
        size:20
      },
      todoList:[
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
    HeaderInput,ListInput,FooterShow
  },
  mounted:function(){//页面渲染完成 可以写代码了 操作DOM
  //  console.log(this,"APP");
  },
  methods:{// 方法
    receive(obj){//定义一个接收方法，然后传给子组件去用 数据却留在父组件这里
      this.todoList.unshift(obj);
    },
    changeCheck(id){
      this.todoList.forEach((item)=>{
        console.log(item.id,id,item.id===id);
        if(item.id===id){
          item.isCheck = !item.isCheck;
          console.log(item.isCheck,"zzz");
        }
      })
      console.log(this.todoList);
    }
  },
  watch:{//观察数据
    
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
