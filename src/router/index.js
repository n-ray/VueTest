// import Vue from 'vue';
import VueRouter from 'vue-router';
import About from '../components/routeText/pages/About';
import Home from '../components/routeText/pages/Home';
import News from '../components/routeText/pages/News.vue';
import Message from '../components/routeText/pages/Message.vue';
import Detail from '../components/routeText/pages/Detail.vue'
// Vue.use(VueRouter);
import store from '../components/VueXTest/store'
const router = new VueRouter({
    routes: [
        { 
          name:'about',
          path: '/about', 
          component: About,
          meta:{title:'about'},//route中可以随意传递参数用来做路由守卫判断的值
        },
        { 
          path: '/home', 
          component: Home,
          meta:{title:'home'},
          children:[
            { 
                path: 'news', 
                component: News ,
                meta:{title:'news',isAuth:true},
                beforeEnter(to,from,next){
                  if(to.meta.isAuth){//判定是否需要鉴定权限，判断当前路由是否需要进行权限控制
                    if(store.state.sum === 0){//权限控制的具体规则
                      next();//方形
                    }else{
                      alert('不匹配');
                    }
                  }else{
                    next();
                  }
                }
            },
            { 
                path: 'message', 
                component: Message,
                meta:{title:'Message',isAuth:true},
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
//全局前置守卫，初始化时执行，每次路由切换前执行
router.beforeEach((to,from,next)=>{
  if(to.meta.isAuth){//判定是否需要鉴定权限，判断当前路由是否需要进行权限控制
    if(store.state.sum === 0){//权限控制的具体规则
      next();//方形
    }else{
      alert('不匹配');
    }
  }else{
    next();
  }
}),
//全局后置守卫，初始化时执行，每次路由切换后执行
router.afterEach((to,from)=>{
  document.title = to.meta.title || '哈哈'//切换成功后改变网页的title值
})


export default router;