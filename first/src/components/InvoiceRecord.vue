
<template>
    <div id="l_incoiveRecord">
      <div id="l_head_top">
        <router-link class="l_text_left" :to="{path:'/vipcard'}">
          <i class="iconfont icon-right1"></i>
        </router-link>
        <span class="l_text_right">购买记录</span>
      </div>
      <img src="../assets/def2.png" alt="">
    </div>
</template>

<script>
    export default {
        name: "InvoiceRecord"
    }
</script>

<style scoped>
  #l_incoiveRecord{
    width:23‬rem ;
    height:41rem ;
    background: white;
  }
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
  img{
    width: 11.7188rem;
    margin : 7.3244rem 5.86rem 0 5.86rem;
  }
</style>
