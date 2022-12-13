<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <slot :objInfo="objInfo" name="slot1">当插槽里没有东西的时候这句话就会显示</slot>
    <slot :objInfo="objInfo" name="slot2">当插槽里没有东西的时候这句话就会显示</slot>
  </div>
</template>

<script>
export default {
    name:'Category',
    props: ['title'],
   data() {
    return {
      objInfo: ["哈哈","临时","多大","地方","水电费"]
    }
   },
    
}
</script>

<style>
    .category{
        background-color: skyblue;
        width: 200px;
        height: 300px;
    }
    h3{
        text-align: center;
        background-color: orange;
    }
</style>