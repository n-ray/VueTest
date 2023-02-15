// import Vue from 'vue';
import VueRouter from 'vue-router';
import About from '../components/routeText/pages/About';
import Home from '../components/routeText/pages/Home';
import News from '../components/routeText/pages/News.vue';
import Message from '../components/routeText/pages/Message.vue';
import Detail from '../components/routeText/pages/Detail.vue'
// Vue.use(VueRouter);
export default new VueRouter({
    routes: [
        { 
          name:'about',
          path: '/about', 
          component: About 
        },
        { 
          path: '/home', 
          component: Home,
          children:[
            { 
                path: 'news', 
                component: News 
            },
            { 
                path: 'message', 
                component: Message,
                children:[
                    { 
                        name:'detail',
                        path: 'detail', //用query传递参数
                        // path:'detail/:id/:title',//用params传递参数
                        component: Detail,
                        //第一种写法：props值为对象，该对象中所有的key-value的组合最终都会通过props传给Detail组件
                        // props:{a:200}//这种只能传递写死的值
                        //第二种：props为布尔值，为true时则把路由收到的所有params参数通过props传给Detail组件
                        // props:true,
                        //第三种：props为函数，返回的每一组key-value都会通过props传给Detail组件
                        props($route){//props让路由组件更方便的接收到参数
                            return {
                                id:$route.query.id,
                                title:$route.query.title
                            }
                        }
                      }
                ]
            },
          ]
        },
    ]
});