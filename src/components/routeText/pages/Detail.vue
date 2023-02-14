<template>
  <div>
    <h2>{{ $route.query.key }}</h2>
    <h2>{{ $route.query.title }}</h2>
  </div>
</template>

<script>
export default {
    name:'Detail',
    mounted () {
        console.log(this.$route);
    },
}
</script>

<style>

</style>