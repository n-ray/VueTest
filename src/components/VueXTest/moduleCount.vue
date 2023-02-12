<template>
    <div>
      <h1>数字的和是：{{ sum }}</h1>
      <h1>数字的和乘以10是:{{ bigSum }}</h1>
      <h1>学校：{{ school }},名字是：{{ name }}</h1>
      <select v-model.number="tempNum">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
      </select>
      <!-- 如果使用mapActions和mapMutations的话要传递参数不然拿到的是默认的$event -->
      <button @click="addClick(tempNum)">+</button>
      <button @click="reduceClick(tempNum)">—</button>
      <button @click="singleClick(tempNum)">基数才加</button>
      <button @click="waitClick(tempNum)">等下再加</button>
      <!-- 用数组的时候名字用下边的 -->
      <!-- <button @click="ADD(tempNum)">+</button> -->
      <!-- <button @click="REDUCE(tempNum)">—</button> -->
      <!-- <button @click="addOdd(tempNum)">基数才加</button> -->
      <!-- <button @click="addWait(tempNum)">等下再加</button> -->
    </div>
  </template>
  
  <script>
  import { mapState,mapGetters,mapActions,mapMutations } from 'vuex';
  export default {
      name:"Count",
      data() {
          return {
              tempNum:1,
          }
      },
      mounted(){
          console.log(this.$store,"xxx");
      },
      computed: {
          //用mapstate从state中读取数据...解构赋值 computed中写入对象的每一个键值对
          ...mapState('count',{sum:'sum'}),//对象写法 不能使用简写形式{sum,school}因为后边的是字符串不是对象 ==》前边的count是新添加的 在store里要加命名空间
          ...mapState('other',{school:'school',name:'name'}),//对象写法 不能使用简写形式{sum,school}因为后边的是字符串不是对象
          // ...mapState(['sum','school','name'])//数组写法
          // ...mapGetters({bigSum:"bigSum"}),//对象写法
          ...mapGetters('count',['bigSum'])//数组写法
      },
      methods: {
          //借助mapActions生产对应的方法，方法中会调用dispatch去联系actions
          ...mapActions('count',{singleClick:'addOdd',waitClick:'addWait'}),
          // ...mapActions(['addOdd','addWait']),//数组的时候要注意改上边的名字
          //mapMutations会调用commit联系mutations
        //   ...mapMutations('count',{addClick:'ADD',reduceClick:'REDUCE'}),
        ...mapMutations('count',{reduceClick:'REDUCE'}),//在下边用另外的方式添加了ADD
          // ...mapMutations(['ADD','REDUCE'])//数组的时候要注意改上边的名字
          //当不用mapMutation方法的时候写法有些不同要注意
          addClick(){
            this.$store.commit('count/ADD',this.tempNum);//这里是给ADD方法前边加上store中的名字和/构成
        },
      },
  }
  </script>
  
  <style scoped>
  div{
      margin: 15px;
  }
   button{
      margin-left: 5px;
   }
  </style>