<template>
    <div class="slotBox">
 
      <category title="文字">
        <!-- <template slot="slot1" scope="data"> -->
        <!-- 结构赋值 -->
        <template slot="slot1" scope="{objInfo}">
            <ul>
                <!-- <li v-for="(item,index) in data.objInfo" :key="index">{{ item }}</li> -->
                <li v-for="(item,index) in objInfo" :key="index">{{ item }}</li>
            </ul>
        </template>
      </Category>
      <category title="文字">
        <!-- <template slot="slot1" scope="data"> -->
        <!-- 结构赋值 -->
        <template slot="slot1" slot-scope="{objInfo}"><!--slot-scope和scope是一样的新旧写法不同-->
            <ol>
                <!-- <li v-for="(item,index) in data.objInfo" :key="index">{{ item }}</li> -->
                <li v-for="(item,index) in objInfo" :key="index">{{ item }}</li>
            </ol>
        </template>
      </Category>

    </div>
  </template>
  
  <script>
  import Category from './Category.vue'
  export default {
    components: { Category },
      name:'DefaultSlot',
      data() {
          return {
          }
      },
  }
  </script>
  
  <style >
      .slotBox,.footBox{
          display: flex;
          justify-content:space-around;
      }
      img{
          width: 100%;
      }
      video{
          width: 100%;
      }
      h4{
          text-align: center;
      }
  </style>