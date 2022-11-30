import Vue from 'vue'
import App from './App.vue'
import MyPlugin from './plugins'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
Vue.use(MyPlugin);//使用插件
Vue.use(ElementUI);
new Vue({
  render: h => h(App), 
  beforeCreate(){
    Vue.prototype.$bus = this;//安装全局事件总线  把$bus挂到Vue的prototype上 这样所有的组件都能拿到
  }           
}).$mount('#app')

/* new Vue({
  render(createElement){
    return createElement('h1','你好');
  }
}) */
//不能用template 会报错 因为上边引入的是没有模版解析器的VUE 得用render接收到的createElement去指定内容
/* new Vue({
  el:'#app',
  template:`<h1>你好</h1>`
}) */