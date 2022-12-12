<template>
  <div class="slotBox">
    <category title="图片">
        <img src="https://upload.pig66.com/uploadfile/2017/0511/20170511075802322.jpg" alt="">
    </Category>
    <category title="文字">
        <ul>
            <li v-for="(item,index) in objInfo" :key="index">{{ item }}</li>
        </ul>
    </Category>
    <category title="视频">
        <video controls src="https://vipmp4i.vodfile.m1905.com/202212131542/fe165ab2fb2cea46f000ec763cfa4f64/video/2022/11/24/v20221124JAO56EJ0AAW9CXAY/v20221124JAO56EJ0AAW9CXAY.mp4"></video>
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
    .slotBox{
        display: flex;
        justify-content:space-around;
    }
    img{
        width: 100%;
    }
    video{
        width: 100%;
    }
    
</style>