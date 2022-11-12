<template>
  <div class="hello">
    <div v-for="(key, index) in arr" :key="index" v-show="index == 1">
      {{ key.name }}
    </div>
    <div>{{ msg }}</div>
    <a href="www.baidu.com" @click.stop.prevent="clickInfo"></a>
    <div class="ax" @click.self="clickInfo">
      <button @click="clickInfo"></button>
    </div>
    <div>
      姓：<input type="text" v-model=" firstName">
      名：<input type="text" v-model=" lastName">
      全名：<span>{{ fullName | filterName('aa') }}</span>
    </div>
    <div>
      <span>今天天气{{ weatherInfo }}</span>
      <button style="height:30px;width:50px;margin-top:10px;" @click="weatherClick">切换</button>
      <hr/>
      <h3>a的值是{{ numbers.a }}</h3>
      <h3 v-big="numbers.a"></h3>
      <button style="height:20px;width:90px;" @click="numbers.a++">点击A+1</button>
      <hr/>
      <h3>b的值是{{ numbers.b }}</h3>
      <button style="height:20px;width:90px;" @click="numbers.b++">点击B+1</button>
      <hr/>
    </div>
    <div>
      <div class="basic" :class="nameClass" @click="changeClass"></div>
      <div style="fontsize:40px;"></div>
      <div :style="{fontsize:fSize+'px'}"></div>
    </div>
    <input type="text" v-model="sortStr">
    <input type="text" v-fBind="">
    <button @click="sortNumber = 1">升序</button>
    <button @click="sortNumber = 2">降序</button>
    <button @click="sortNumber = 0">正常</button>
    <ul>
      <li v-for="(person,index) in sortArr" :key="person.id">
        {{ person.name }} : {{ person.age }} : {{ index }}
        <input type="text" placeholder="输入撒">
      </li>
    </ul>
    <button @click="destroy">销毁</button>
  </div>
  
</template>

<script>

export default {
  name: "HelloWorld",
  props: {
    //从父组件获取的数据
    msg: String,
  },
  data() {
    return {
      fSize:40,
      sortStr:'',
      sortNumber:0,
      persons:[
        {id:'001',name:"张三",age:18},
        {id:'002',name:"李四",age:14},
        {id:'003',name:"李六",age:12},
        {id:'004',name:"王五",age:17}
      ],
      arr: [
        {
          name: "a",
        },
        {
          name: "b",
        },
        {
          name: "c",
        },
      ],
      firstName:"zhang",
      lastName:"san",
      isHot:true,
      numbers:{
        a:1,
        b:2
      },
      nameClass:'normal'
    };
  },
  beforeCreate(){//无法访问到data中的数据、methods中的方法 vue在初始化生命周期、事件 但数据代理还未开始
    console.log('beforeCreate');
  },
  created(){//可以访问到data数据和methods方法   以此到beforeMount之间vue开始解析模版生成虚拟DOM（内存中）页面还不能显示解析好的内容
    console.log('created');
  },
  beforeMount(){//页面是未经VUE编译的DOM结构 所有对DOM的操作不奏效  以此和mounted之间将虚拟DOM转换成真实DOM插入页面
    console.log('beforeMount');
  },
  mounted(){//页面是vue编译过的DOM  初始化完毕
    console.log('mounted');
    this.$watch('isHot',{
        immediate:true,//初始化的时候让hanlder调用
        handler(newValue,oldValue){
          console.log(newValue,oldValue,1);
        }
    })
    let arr = ["苹果", "橘子", "梨", "香蕉", "西瓜"];
    arr.push("榴莲"); //添加到数组最后并返回数组的新长度
    arr.pop(); //删除数组最后一个值
    arr.shift(); //删除数组第一个值
    arr.unshift("土豆"); //添加元素到数组最前边并返回数组的新长度
    let index = arr.indexOf("橘子"); //查找数组中元素的索引
    console.log(arr, index);
    //根据索引删除对应元素 第2个参数代表删除的个数 第3个参数是要添加的元素 改变原数组 返回已删除元素的数组
    let spliceArr = arr.splice(index, 1, "黄瓜");
    console.log(arr, spliceArr);
    //选取一部分并返回一个新数组 不改变原来数组
    let sliceArr = arr.slice(0, 2); //选取一部分并返回一个新数组
    console.log(arr, sliceArr);
    sliceArr[3] = "西红柿";
    let str = "HELLO!";
    //将伪数组对象或可迭代对象转化为数组
    let fromArr = Array.from(str);
    console.log(fromArr);
    //使用值填充数组
    let length = 3;
    let initFromArr0 = Array.from({ length }, () => 0);
    let initFromArr1 = Array.from({ length }, () => ({}));
    console.log(initFromArr0, initFromArr1);

    function func() {
      console.log(a);
      // let a = 15;
      var a = 5; //变量提升
      console.log(a);
    }
    console.log(func, "aaaaa");
  },
  beforeUpdate(){//数据发生改变时   数据是新的但是页面是旧的  页面尚未和数据保持同步    以此和updated进行新旧DOM对比，完成页面的更新
    console.log('beforeUpdate');
  },
  updated(){//数据和页面保持同步已经都更新
    console.log('updated');
  },
  beforeDestroy(){//还能读到数据 但是再进行数据的操作就不会触发更新的流程也就是修改无效了  一般进行关闭定时器、取消订阅消息、解绑自定义事件等操作 销毁后自定义事件会失效 但是DOM原生事件依然有效
    console.log('beforeDestroy');
  },
  destroyed(){
    console.log('destroy');
  },
  methods: {
    changeClass(){
      let arr = ['normal','sad','happy'];
      this.nameClass = arr[Math.floor(Math.random() * 3)];
    }, 
    clickInfo(){
      console.log(123);
    },
    weatherClick(){
      this.isHot = !this.isHot;
     console.log(this.isHot);
    },
    destroy(){
      this.$destroy();
    }
  },
  computed:{
    fullName:{
      get(){
        return this.firstName+ '-' +this.lastName;
      },
      set(value){
        let arr = value.split('-');
        this.firstName = arr[0];
        this.lastName = arr[1];
      }
    },
    //当只计算获取不改写的时候可以简写为
    // fullName(){
    //   return this.firstName+ '-' +this.lastName;
    // }
    weatherInfo(){
      return this.isHot ? '炎热' : '凉爽';
    },
    sortArr:{
      get(){
        let arr = [];
        arr = this.persons.filter((p)=>{
          return p.name.indexOf(this.sortStr) !== -1;
        })
        if(this.sortNumber != 0){
          arr.sort((a,b)=>{
            return this.sortNumber === 1 ? a.age - b.age : b.age - a.age;
          });
        }
        return arr;
      }
    }
  },
  watch:{
    isHot:{
      immediate:true,//初始化的时候让hanlder调用
      handler(newValue,oldValue){
        console.log(newValue,oldValue,"??");
      }
    },
    'numbers.a':{//监视多级结构中某一个值的变化
      handler(now,old){

      }
    },
    numbers:{
      deep:true,//开启监视多级结构中每一个值的变化
      handler(now,old){

      }
    }
    //简写
   /* isHot(now,old){
    
    }*/
  },
  filters:{
    filterName(value,name){
      return value + name;
    }
  },
  directives:{
    big(element,binding){
      console.log(element,binding,"//////////");
      element.innerText = 'a的值是' + binding.value * 10
    },
    fBind:{
      bind(element,binding){//指令与元素绑定时调用 （一上来的时候）
        // element.value = binding.value;
      },
      inserted(element,binding){//指令所在元素插入页面时调用
        element.focus();
      },
      update(element,binding){//指令所在模版被重新解析时
        // element.value = binding.value;
      }
    }
  }
  

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button{
  width:50px;
  height:40px;
  margin: 5px;
}
.ax{
  height:50px;
  background-color: #42b983;
}

h3 {
  margin: 10px 0 0;
}
ul {
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
.basic{
  border: 2px solid black;
  width: 100px;
  height:40px;
}
.normal{
  background-color: burlywood;
}
.happy{
  background-color: red;
}
.sad{
  background-color: blue;
}
</style>
