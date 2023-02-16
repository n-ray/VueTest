<template>
  <div>
    <h2>我是About的内容</h2>
  </div>
</template>

<script>
export default {
    name:'About',
    //进入守卫，通过路由规则进入该组件时被调用
    beforeEnter(to, from, next) {
      if(to.meta.isAuth){//判定是否需要鉴定权限，判断当前路由是否需要进行权限控制
          if(store.state.sum === 0){//权限控制的具体规则
            next();//方形
          }else{
            alert('不匹配');
          }
        }else{
          next();
        }
    },
    //离开守卫，通过路由规则俩开该组件时调用
    beforeRouteLeave(to, from, next) {
      next();
    },
}
</script>

<style>

</style>