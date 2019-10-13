<template>
    <div id="benefit">
      <div id="l_head_top">
        <router-link class="l_text_left" :to="{}">
          <i class="iconfont icon-zuojiantou"></i>
        </router-link>
        <span class="l_text_right">超级会员权益说明</span>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Benefit"
    }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1296443_aq2gswhv2kw.css";

  #l_head_top{
    color: white;
    font-size:1.17rem;
    text-align: center;
    position: relative;
    padding: 0.8rem 0 0.65rem 0.2rem;
    border-bottom: 1px solid rgba(255,255,255,0.3);
    box-sizing: border-box;
    background-color:#3190e8 ;
  }
  .l_text_left{
    display: block;
    font-size: 1.2rem;
    position: absolute;
    left: 0.5rem;
    top: 0.9rem;
    color: #fff;
  }
  .l_text_right{
    font-weight: 700;
  }
</style>
