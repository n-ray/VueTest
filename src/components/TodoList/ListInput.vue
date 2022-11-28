<template>
    <div class="listBox">
        <ul>
            <li v-for="item in todoList" :key="item.id">
                <ItemList :obj="item" :changeCheck="changeCheck" :deleteItem="deleteItem"/>
            </li>
        </ul>
    </div>
</template>
  
  <script>
  import ItemList from './ItemList.vue'
  export default {
      name:"ListInput",
      components:{ ItemList },
      props:['todoList','changeCheck','deleteItem'],
      data(){
          return {
              
          }
      }
  }
  </script>
  
  <style scoped>
   .listBox{
        margin-top:1rem;
        margin-bottom:1rem;
    }
    li{
        list-style-type: none;
    }
    ul{
        padding-left: 0.4rem;
        margin: 0px;
        width:98%;
    }
  </style>