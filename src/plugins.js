let MyPlugin = {};
MyPlugin.install = function (Vue,options){
    Vue.prototype.showGlobalLog = function(){//原型上添加自定义方法
        console.log("showLog");
    }
    //全局过滤器
    Vue.filter('myFilter',function(value){
        return value.slice(0,2);
    })

    //定义全局指令
    Vue.directive('focus-bind',{
        bind(element,binding){//指令与元素绑定时调用 （一上来的时候）
        // element.value = binding.value;
        },
        inserted(element,binding){//指令所在元素插入页面时调用
        element.focus();
        },
        update(element,binding){//指令所在模版被重新解析时
        // element.value = binding.value;
        }
    });
    //定义全局混入
    Vue.mixin({
        //data  生命周期钩子
    })
    

}
export default MyPlugin;