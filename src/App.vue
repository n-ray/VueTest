<template>
  <div id="app">
    <div class="row">
      <Banner/>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!-- active-class表示点击当前元素的时候添加哪个class -->
          <router-link class="list-group-item" active-class="active" to='/About'>About</router-link>
          <!-- router-link实现路由的切换 -->
          <router-link class="list-group-item" active-class="active" to='/Home'>Home</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!-- 指定组件呈现的位置 -->
            <keep-alive include="Home">
          <!-- 让News组件不销毁，输入的东西可以得以保存 News是组件名称-->
          <router-view></router-view>
        </keep-alive>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import Banner from './components/routeText/Banner';
export default {
  name: 'App',//当前组件的名称
  // el:'#app',//
  data(){
    return{
     
    }
  },
  created:function(){//程序挂载之前执行  例如 初始化data
    
  },
  components: {//组件
    Banner
  },
  mounted:function(){//页面渲染完成 可以写代码了 操作DOM
  
  },

  

}
</script>

<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 30px;
  
}


</style>
