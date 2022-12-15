<template>
  <div>
    <h1>数字的和是：{{ sum }}</h1>
    <h1>数字的和乘以10是：{{ bigSum }}</h1>
    <h1>学校：{{ school }},名字是：{{ name }}</h1>
    <select v-model.number="tempNum">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
    </select>
    <button @click="addClick">+</button>
    <button @click="reduceClick">—</button>
    <button @click="sigleClick">基数才加</button>
    <button @click="waitClick">等下再加</button>
  </div>
</template>

<script>
import { mapState,mapGetters } from 'vuex';
export default {
    name:"Count",
    data() {
        return {
            // sum: 1,
            tempNum:1
        }
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
        ...mapState({sum:'sum',school:'school',name:'name'}),//对象写法
        // ...mapState(['sum','school','name'])//数组写法
        // ...mapGetters({bigSum:"bigSum"}),//对象写法
        ...mapGetters(['bigSum'])//数组写法
    },
    methods: {
        addClick(){
            // this.sum += this.tempNum;
            // this.$store.dispatch('add',this.tempNum);
            this.$store.commit('ADD',this.tempNum);
        },
        reduceClick(){
            // this.sum -= this.tempNum;
            // this.$store.dispatch('reduce',this.tempNum);
            this.$store.commit('REDUCE',this.tempNum);
        },
        sigleClick(){
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
        },
    },
}
</script>

<style scoped>
 button{
    margin-left: 5px;
 }
</style>