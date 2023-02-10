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
            // sum: 1,
            tempNum:1,
        }
    },
    mounted(){
        console.log(this.$store,"xxx");
    },
    computed: {
        //正常写法
        /* sum() {
            return this.$store.state.sum; 
        },
        school() {
            return this.$store.state.school; 
        },
        name() {
            return this.$store.state.name; 
        },
        bigSum(){
            return this.$store.getters.bigSum;
        }, */
        //用mapstate从state中读取数据...解构赋值 computed中写入对象的每一个键值对
        ...mapState({sum:'sum',school:'school',name:'name'}),//对象写法 不能使用简写形式{sum,school}因为后边的是字符串不是对象
        // ...mapState(['sum','school','name'])//数组写法
        // ...mapGetters({bigSum:"bigSum"}),//对象写法
        ...mapGetters(['bigSum'])//数组写法
    },
    methods: {
       /*  addClick(){
            // this.sum += this.tempNum;
            // this.$store.dispatch('add',this.tempNum);
            this.$store.commit('ADD',this.tempNum);
        },
        reduceClick(){
            // this.sum -= this.tempNum;
            // this.$store.dispatch('reduce',this.tempNum);
            this.$store.commit('REDUCE',this.tempNum);
        },
        singleClick(){
            // if (this.sum % 2) {
                // this.sum += this.tempNum;
                // }
            this.$store.dispatch('addOdd',this.tempNum);
            
        },
        waitClick(){
            // setTimeout(() => {
                // this.sum += this.tempNum;
                // }, 500);
            this.$store.dispatch('addWait',this.tempNum);
        },*/ 
        //借助mapActions生产对应的方法，方法中会调用dispatch去联系actions
        ...mapActions({singleClick:'addOdd',waitClick:'addWait'}),
        // ...mapActions(['addOdd','addWait']),//数组的时候要注意改上边的名字
        //mapMutations会调用commit联系mutations
        ...mapMutations({addClick:'ADD',reduceClick:'REDUCE'}),
        // ...mapMutations(['ADD','REDUCE'])//数组的时候要注意改上边的名字
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