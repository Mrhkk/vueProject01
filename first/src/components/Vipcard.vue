<template>
    <div id="l_vipcard">
      <div id="l_head_top">
        <router-link class="l_text_left" :to="{path:'profile'}">
          <i class="iconfont icon-zuojiantou"></i>
        </router-link>
        <span class="l_text_right">会员中心</span>
      </div>
      <div class="l_center_vip">
        <p>为账户<span>123344</span>购买会员</p>
      </div>
      <ul>
        <li>
          <span>会员特权</span>
          <span>会员说明</span>
          <i></i>
        </li>
        <li>
          <img src="" alt="">
          <div class="l_right">
            <p>减免配送费</p>
            <p>每月减免30单，每日可减免3单，每单最高减4元蜂鸟专送专享</p>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "Vipcard"
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
  .l_center_vip{
    padding-left: 1.03rem;
    font-size: .88rem;
    color: #666;
    line-height: 2.875rem;
  }
  ul{
    background: white;
  }
ul li{
  line-height: 2.95rem;
  padding-left: 1.03rem;
  color: #333;
}
</style>
