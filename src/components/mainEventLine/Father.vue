<template>
  <div>
    <Student/>
    <School/>
  </div>
</template>

<script>
import Student from './Student'
import School from './School'
export default {
    name:'Father',
    components:{Student,School},
    data(){
        return {

        }
    }
}
</script>

<style scoped>

</style>