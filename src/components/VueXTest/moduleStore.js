import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

//求和相关的配置
const countOptions = {
    namespaced:true,//开启命名空间 在模板里才能拿到
    actions:{
        addOdd(context,value){
            if(context.state.sum % 2){
                context.commit('ADDODD',value);
            }
        },
        addWait(context,value){
            setTimeout(() => {
                context.commit('ADDWAIT',value);
            }, 500);
        }
    },
    mutations:{
        ADD(state,value){
            state.sum += value;
        },
        REDUCE(state,value){
            state.sum -= value;
        },
        ADDODD(state,value){
            state.sum += value;
        },
        ADDWAIT(state,value){
            state.sum += value; 
        }
    },
    state:{
        sum:0,
       
    },
    getters:{
        bigSum(state){
            return state.sum * 10;
        }
    }
}
//其他的配置
const otherOptions = {
    namespaced:true,
    actions:{

    },
    mutations:{
       
    },
    state:{
        school:'ZZ',
        name:'ass'
    },
    getters:{
        
    }
}
//抛出时候的格式
export default new Vuex.Store({
    modules:{
        count:countOptions,
        other:otherOptions
    }
});