<template>
  <div>
    <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header"><h2>Vue Router Demo</h2></div>
        <button @click="forwardClick">前进</button>
        <button @click="backClick">后退</button>
        <button @click="goClick">GO</button>
  </div>
    </div>
   
</template>

<script>
export default {
    name:'Banner',
    methods: {
      forwardClick() {
        this.$router.forward();
      },
      backClick(){
        this.$router.back();
      },
      goClick(){
        this.$router.go(1);
      }
    },
}
</script>

<style>

</style>