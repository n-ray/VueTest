<template>
    <div>
        <span @click="say">{{msg}}</span>
        <span>{{ name }}</span>
        <span>{{ age+1 }}</span>
        <span>{{ obj.color }}</span>
        <span>{{ obj.size }}</span>
    </div>
</template>
<script>
 import { myMixin, myMixin2 } from './mxin';

    export default{
        name:"BaseCom",
        props:['name','age','obj'],
        data(){
            return {
                msg:"ax"
            }
        },
        mounted(){
            console.log('初始化完毕baseCom');
            this.showGlobalLog();
        },
        methods:{
          
        },
        mixins:[myMixin,myMixin2],
    }
</script>

<style>


</style>