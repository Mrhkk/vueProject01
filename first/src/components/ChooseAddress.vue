<template>
    <div id="l_choose">
      <div id="l_head_top">
        <router-link class="l_text_left" :to="{path:'/confirmOrder'}">
          <i class="iconfont icon-right1"></i>
        </router-link>
        <span class="l_text_right">选择地址</span>
      </div>
      <router-link class="l_add" :to="{path:'/addAddress'}">
        <i class="iconfont icon-jiahao"></i>
        <span>新增收货地址</span>
      </router-link>
    </div>
</template>

<script>
    export default {
        name: "ChooseAddress"
    }
</script>

<style scoped>
  #l_head_top{
    color: white;
    font-size:1.17rem;
    position: relative;
    padding: 0.8rem 0 0.65rem 0.2rem;
    border-bottom: 1px solid rgba(255,255,255,0.3);
    box-sizing: border-box;
    background-color:#3190e8 ;
    text-align: center;
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
  .l_add{
    display: block;
    width: 100%;
    text-align: center;
    color: #3190e8;
    font-size: 1.03rem;
    position: fixed;
    bottom: 5rem;
    left: 0;
    line-height: 1.5rem;
  }
  .l_add i{
    font-size: 1.5rem;
  }
  .l_add span{
    padding-bottom: -0.6rem;
  }
</style>
