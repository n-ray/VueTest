<template>
  <div>
    <h2>{{ $route.query.id }}-1</h2>
    <h2>{{ $route.query.title }}-2</h2>
    <h2>{{ $route.params.id }}-3</h2>
    <h2>{{ $route.params.title }}-4</h2>
    <h2>{{ id }}-5</h2>
    <h2>{{ title }}-6</h2>
  </div>
</template>

<script>
export default {
    name:'Detail',
    props: ['id','title'],
    mounted () {
        console.log(this.$route);
    },
}
</script>

<style>

</style>