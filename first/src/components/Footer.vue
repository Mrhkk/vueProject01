<template>
    <div id="footer" v-if="true">
      <van-tabbar v-model="active">
        <van-tabbar-item :to="{path:'/food',query:getMsg}">
          <span>饿了么</span>
          <img
            slot="icon"  slot-scope="props"
            :src="props.active ? icon.normal : icon.choose"
          >
        </van-tabbar-item>
        <van-tabbar-item icon="search" :to="{path:'/search'}">搜索</van-tabbar-item>
        <van-tabbar-item icon="notes-o" :to="{path:'/order'}">订单</van-tabbar-item>
     <van-tabbar-item icon="user-circle-o" :to="{path:'/profile',query:getMsg}">我的</van-tabbar-item>
      </van-tabbar>
    </div>
</template>

<script>

    export default {
        name: "Footer",
      data() {
        return {
          foot:false,
          active: 0,
          icon: {
            normal:require('../assets/e.jpg') ,
            choose: require('../assets/e1.png')
          }
        }
      },
      computed:{
          getMsg(){
            return this.$route.query
          }
      }
    }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1452428_hekimx54jnn.css";
  @import "//at.alicdn.com/t/font_1452428_ayycl45ybab.css";
#footer{
  width: 100%;
  height: 18%;
  position: fixed;
  left: 0;
  bottom: 0;
}
</style>
