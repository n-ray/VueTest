<template>
    <div>
        <span @click="say">{{msg}}</span>
        <span>{{ name }}</span>
        <span>{{ age+1 }}</span>
    </div>
</template>
<script>
 import { myMixin, myMixin2 } from './mxin';
    export default{
        name:"BaseCom",
        props:['name','age'],
        data(){
            return {
                msg:"ax"
            }
        },
        mounted(){
            console.log('初始化完毕baseCom');
        },
        methods:{
          
        },
        mixins:[myMixin,myMixin2],
    }
</script>

<style>


</style>