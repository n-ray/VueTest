<template>
  <div>
    <button @click="isShow = !isShow">点击横移</button>
    <!-- 如果给transition name="xx"的话 下边就得用xx-enter-active xx-leave-active  appear 属性是指上来就执行一下进入的动画-->
    <transition appear>
      <h1 v-show="isShow">横向移动动画</h1>
    </transition>
    <!-- 遇到多个的时候需要用 transition-group标签 切每一个都要有独有的key值 -->
    <!-- 调用第三方库animate.css -->
    <transition 
        appear
        name="animate__animated animate__bounce"
        enter-active-class="animate__swing"
        leave-active-class="animate__backOutUp"
    >
        <h1 v-show="isShow">横向移动动画</h1>
      </transition>
  </div>
</template>

<script>
import 'animate.css';//引入css动画库
export default {
  name: "TransitionAnimate",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
h1 {
  background-color: orange;
}
.v-enter-active {
  animation: moveAnimate 0.5s linear;
}
.v-leave-active {
  animation: moveAnimate 0.5s linear reverse;
}
@keyframes moveAnimate {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0px);
  }
}
/*通过起点和终点的方式实现*/
/* 进入的起点和离开的终点 */
.v-enter,.v-leave-to{
    transform: translateX(-100%);
}
/*添加动画时间和效果*/
.v-enter-active,.v-leave-active{
    transition: 0.5s linear;
}
/*进入的终点和离开的起点*/
.v-leave,.v-enter-to{
    transform: translateX(0);
}
</style>