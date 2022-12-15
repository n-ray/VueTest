import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
//用来储存数据
const state = {
 sum:0,
 school:'ZZ',
 name:'ass'
}
const getters = {
    bigSum(state){
        return state.sum * 10;
    }
}
//用来相应动作
const actions = {
    //没有业务逻辑和ajax请求可以直接再组件中commit
    /* add(context,value){
        context.commit('ADD',value);
    },
    reduce(context,value){
        context.commit('REDUCE',value);
    }, */
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
}
//用来操作数据
const mutations = {
    ADD(state,value){
        // console.log(state,value);
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
}

export default new Vuex.Store({state,mutations,actions,getters});