<template>
  <div class="slotBox">
    <category title="图片">
        <img slot="slot1" src="https://upload.pig66.com/uploadfile/2017/0511/20170511075802322.jpg" alt="">
        <a slot="slot2" href="https://www.baidu.com">更多图片</a>
    </Category>
    <category title="文字">
        <ul slot="slot1">
            <li v-for="(item,index) in objInfo" :key="index">{{ item }}</li>
        </ul>
        <div class="footBox" slot="slot2">
            <a href="https://www.baidu.com">网游</a>
            <a href="https://www.baidu.com">页游</a>
        </div>
    </Category>
    <category title="视频">
        <video slot="slot1" controls src="https://vipmp4i.vodfile.m1905.com/202212131542/fe165ab2fb2cea46f000ec763cfa4f64/video/2022/11/24/v20221124JAO56EJ0AAW9CXAY/v20221124JAO56EJ0AAW9CXAY.mp4"></video>
        <!-- 当标签是template的时候可以用v-slot属性 -->
        <template v-slot:slot2>
            <div class="footBox">
                <a href="https://www.baidu.com">经典</a>
                <a href="https://www.baidu.com">动画</a>
                <a href="https://www.baidu.com">喜剧</a>
            </div>
            <h4>欢迎来看！</h4>
        </template>
    </Category>
  </div>
</template>

<script>
import Category from './Category.vue'
export default {
  components: { Category },
    name:'DefaultSlot',
    data() {
        return {
            objInfo: ["哈哈","临时","多大","地方","水电费"]
        }
    },
}
</script>

<style >
    .slotBox,.footBox{
        display: flex;
        justify-content:space-around;
    }
    img{
        width: 100%;
    }
    video{
        width: 100%;
    }
    h4{
        text-align: center;
    }
</style>