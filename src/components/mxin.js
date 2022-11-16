
export const myMixin = {
    data(){
        return {
            msg:'mixin'
        }
    },
    computed: {},
    created() {
        console.log("我是mixin中的created生命周期函数");
    },
    mounted() {
        console.log('mountedMixin!!');
    },
    methods: {
        say(){
            console.log('say mixin!');
        }
    },
  };
  
export const myMixin2 = {
    data(){
        return {
            msg:'mixin'
        }
    },
    computed: {},
    created() {
        console.log("我是mixin中的created生命周期函数");
    },
    mounted() {
        console.log('mountedMixin!!');
    },
    methods: {
        say(){
            console.log('say mixin!222');
        }
    },
  };