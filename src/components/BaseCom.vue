<template>
    <div>
        <span @click="say">{{msg}}</span>
        <span class="name">{{ name }}</span>
        <span>{{ age+1 }}</span>
        <span>{{ obj.color }}</span>
        <span>{{ obj.size }}</span>
        <SonComponent/>
    </div>
</template>
<script>
 import { myMixin, myMixin2 } from './mxin';
 import SonComponent from './SonComponent.vue';
    export default{
        name:"BaseCom",
        props:['name','age','obj'],
        components:{SonComponent},
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
    
<style >
    .name{
        background-color: rgb(138, 138, 221);
    }

</style>