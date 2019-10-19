<template>
    <div class="order">
      <div id="l_head_top">
        <router-link class="l_text_left" :to="{path:'/profile'}">
          <i class="iconfont icon-zuojiantou"></i>
        </router-link>
        <span class="l_text_right">订单列表</span>
      </div>
      <Footer></Footer>
    </div>
</template>

<script>
    import Footer from "./Footer";
    export default {
        name: "Order",
      components: {Footer}
    }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1452428_ayycl45ybab.css";
  #l_head_top {
    color: white;
    font-size: 1.17rem;
    text-align: center;
    position: relative;
    padding: 0.8rem 0 0.65rem 0.2rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    box-sizing: border-box;
    background-color: #3190e8;
  }

  .l_text_left {
    display: block;
    font-size: 1.2rem;
    position: absolute;
    left: 0.5rem;
    top: 0.9rem;
    color: #fff;
  }
</style>
