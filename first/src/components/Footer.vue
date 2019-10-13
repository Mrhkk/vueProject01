<template>
    <div id="footer">
      <van-tabbar v-model="active">
        <van-tabbar-item>
          <span>饿了么</span>
          <img
            slot="icon"  slot-scope="props"
            :src="props.active ? icon.normal : icon.choose"
          >
        </van-tabbar-item>
        <van-tabbar-item icon="search">搜索</van-tabbar-item>
        <van-tabbar-item icon="notes-o">订单</van-tabbar-item>
     <van-tabbar-item icon="user-circle-o" :to="{path:'/profile'}">我的</van-tabbar-item>
      </van-tabbar>
    </div>
</template>

<script>

    export default {
        name: "Footer",
      data() {
        return {
          active: 1,
          icon: {
            normal:require('../assets/e.jpg') ,
            choose: require('../assets/e1.png')
          }
        }
      }
    }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1452428_hekimx54jnn.css";
#footer{
  width: 100%;
  height: 18%;
}
</style>
