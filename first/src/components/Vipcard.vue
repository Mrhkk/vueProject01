<template>
    <div id="l_vipcard">
      <div id="l_head_top">
        <router-link class="l_text_left" :to="{path:'profile'}">
          <i class="iconfont icon-right1"></i>
        </router-link>
        <span class="l_text_right">会员中心</span>
      </div>
      <div class="l_center_vip">
        <p>为账户<span>123344</span>购买会员</p>
      </div>
      <ul>
        <li>
         <router-link :to="{path:'/vipDescription'}">
           <span class="l_vip1">会员特权</span>
           <i class="iconfont icon-aright"></i>
           <span class="l_vip2">会员说明</span>
           <p style="clear:both;"></p>
         </router-link>
        </li>
        <li class="l_li1">
          <img src="../assets/p2.png" alt="">
          <div class="l_right">
            <h4>减免配送费</h4>
            <p>每月减免30单，每日可减免3单，每单最高减4元</p>
            <p>蜂鸟专送专享</p>
          </div>
          <p style="clear:both;"></p>
        </li>
        <li class="l_li1">
          <img src="../assets/p1.png" alt="">
          <div class="l_right">
            <h4>减免配送费</h4>
            <p>每月减免30单，每日可减免3单，每单最高减4元</p>
            <p>蜂鸟专送专享</p>
          </div>
          <p style="clear:both;"></p>
        </li>
        <li>
          <span class="l_open_vip">开通会员</span>
        </li>
        <li>
          <p class="l_buy">1个月<span>￥20</span></p>
          <p class="l_buy1">购买</p>
          <p style="clear:both;"></p>
        </li>
        <li>
          <router-link :to="{path:'/useCart'}">
            <span class="l_vip1">兑换会员</span>
            <i class="iconfont icon-aright"></i>
            <span class="l_vip2">使用卡号卡密</span>
            <p style="clear:both;"></p>
          </router-link>
        </li>
        <li>
          <router-link :to="{path:'/invoiceRecord'}">
            <span class="l_vip1">购买记录</span>
            <i class="iconfont icon-aright"></i>
            <span class="l_vip2">开发票</span>
            <p style="clear:both;"></p>
          </router-link>
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
  /*@import "//at.alicdn.com/t/font_1296443_9pod8ehsni5.css";*/
*{
  padding: 0;
  margin: 0;
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
  .l_center_vip{
    padding-left: 1.03rem;
    font-size: .88rem;
    color: #666;
    line-height: 2.875rem;
  }

ul li{
  padding-left: 1.025rem;
  background: white;
  color: #333;
  font-size: 1.03rem;
  border-bottom:1px solid rgba(0,0,0,0.03);
}
li a{
  line-height: 2.95rem;
  display: block;
  color: #333;;
  font-size: 1.025rem;
  padding-right: 1.03rem;
}
.l_vip1{
  float: left;
}
.l_vip2{
  font-size: .88rem;
  float: right;
  color: #999;
}
  .icon-aright{
    float: right;
    color: rgb(204, 204, 204);
  }
   li img{
     float: left;
     width: 2.32rem;
     height: 2.67rem;
   }
  .l_right{
    float: left;
    font-size: .75rem;
    margin-left:.88rem;
  }
  .l_right h4{
    font-size: 1.03rem;
    color: #333;
  }
  p{
    color: #999;
  }
  .l_li1{
    padding: 1.2rem 0 1.2rem 1.025rem;
  }
  .l_open_vip{
    line-height: 2.9rem;
    margin-top: 0.73rem;
  }
  ul li:nth-child(5){
    padding-right: 1.03rem;
    line-height: 3.75rem;
  }
.l_buy{
  float: left;
  color: #333;
}
  .l_buy span{
    color: #f60;
    font-weight: 700;
  }
  .l_buy1{
    float: right;
    border: .05rem solid #f60;
    border-radius: .3rem;
    line-height: 1.76rem;
    height: 1.76rem;
    width: 3.81rem;
    text-align: center;
    font-size: .88rem;
    color: #f60;
    margin: 0.9rem 0;
  }
ul li:nth-child(6){
  margin:1.03rem 0;
}
  ul li:nth-child(7){
    margin-bottom:1.03rem;
  }
</style>
