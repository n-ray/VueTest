<template>
  <div id="app">
    <!-- <HelloWorld/> -->
    <BaseCom/>
   
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import BaseCom from './components/BaseCom.vue'

export default {
  name: 'App',//当前组件的名称
  // el:'#app',//
  data(){
    return{}
  },
  created:function(){//程序挂载之前执行  例如 初始化data
    
  },
  components: {//组件
    // HelloWorld,
    BaseCom
  },
  mounted:function(){//页面渲染完成 可以写代码了 操作DOM
   
  },
  methods:{// 方法
   
  },
  watch:{//观察数据
    
  }





  

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
