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
                        path: 'detail', 
                        component: Detail 
                      }
                ]
            },
          ]
        },
    ]
});