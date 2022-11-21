<template>
  <div>
    <el-input  class="headerContent" v-model="input" size="small " placeholder="请输入内容"></el-input>
  </div>
</template>

<script>
export default {
    name:"HeaderInput",
    data(){
        return {
          input: ''
        }
    }
}
</script>

<style scoped>
  .headerContent{
    width:50%;
  }
</style>>

</style>