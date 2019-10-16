<template>
    <div id="address">
      <div id="l_head_top">
      <router-link class="l_text_left" :to="{path:'/info'}">
        <i class="iconfont icon-right1"></i>
      </router-link>
      <span class="l_text_right">编辑地址</span>
      <span class="l_text_u">编辑</span>
    </div>
      <hr style="border: 0.05rem solid #d9d9d9; margin:0.59rem 0 0.59rem 0 ;">
      <div class="l_bot">
        <span>新增地址</span>
        <router-link :to="{path:'/add'}">
          <i class="iconfont icon-aright"></i>
        </router-link>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Address"
    }
</script>

<style scoped>
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
  .l_text_u{
    display: block;
    font-size: 1.2rem;
    position: absolute;
    right: 0.5rem;
    top: 0.9rem;
    color: #fff;
  }
  .l_bot{
    background: white;
    font-size: 1.03rem;
    padding: 0.29rem 0.59rem;
    border: 0.05rem solid #d9d9d9;
    line-height: 2.1rem;
  }
  .l_bot a{
    color: rgb(216, 216, 216);
    float: right;
    font-weight: 700;
  }
</style>
