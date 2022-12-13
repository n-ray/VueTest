<template>
  <div>
    <h1>数字的和是：{{ $store.state.sum }}</h1>
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
export default {
    name:"Count",
    data() {
        return {
            sum: 1,
            tempNum:1
        }
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