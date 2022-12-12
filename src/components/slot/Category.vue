<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <slot name="slot1">当插槽里没有东西的时候这句话就会显示</slot>
    <slot name="slot2">当插槽里没有东西的时候这句话就会显示</slot>
  </div>
</template>

<script>
export default {
    name:'Category',
    props: ['title'],
       
    
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