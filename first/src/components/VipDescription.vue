<template>
  <div id="l_detail">
    <div id="l_head_top">
      <router-link class="l_text_left" :to="{path:'/vipcard'}">
        <i class="iconfont icon-zuojiantou"></i>
      </router-link>
      <span class="l_text_right">我的优惠</span>
    </div>

    <ul>
      <li class="l_top">
        <p>尊敬的用户，随着会员体系逐渐完善，自2016年10月10日起，饿了么会员权益将做如下优化：购卡后31天内，累积享有30单减免配送费服务(每日最多3单，每单最高减免4元。注：已购买的会员服务不受影响，当前会员服务失效前无法购买新卡。</p>
      </li>
      <li>
        <h3>Q1:特权介绍</h3>
        <p>身份标识:饿了么会员服务有效期内，享有专属皇冠标识。</p>
        <p>减免配送费：饿了么会员卡自绑定账户之日起31天内，在「蜂鸟专送」标识商家下单，享有30次减免配送费特权，每日最多减免3单，每单最高可减4元。更多特权，敬请期待!</p>
      </li>
      <li>
        <h3>Q2:资费介绍</h3>
        <p>饿了么会员卡: 20元</p>
      </li>
      <li>
        <h3>Q3:使用说明</h3>
        <p>当用户满足以下任一条件，会员服务自动失效:</p>
        <div class="l_pp">
          <p>自绑定之日起超过31天;</p>
          <p>在31天内累计使用减免配送费的蜂鸟订单数量达到30单</p>
        </div>
      </li>
      <li>
        <h3>Q4:购卡说明?</h3>
        <p>在线购买，我了么App我的饿了么会员卡</p>
      </li>
      <li>
        <h3>Q5:温馨提示</h3>
        <p>用户在当前会员服务失效前，无法购买新卡。</p>
        <p>请认准饿了么官方渠道，任何从其他第三方途径获得的会员卡，饿了么不保证其可用性。</p>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "VipDescription"
  }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1296443_aq2gswhv2kw.css";

  /*头部*/

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
  /*详细*/
  ul{
   font-family: Arial, Helvetica, 'STHeiti STXihei', 'Microsoft YaHei', Tohoma, sans-serif;
    /*box-sizing: border-box;*/
    width: 100%;
    height: 38.55rem;
    color: #666;
    font-size: 0.88rem;
    background: white;
    margin: 0 auto;
    padding: 0 0.88rem 0.88rem 0.88rem;
  }
  li h3{
    font-weight: 600;
    font-size: 1.03rem;
    line-height: 2.875rem;
    margin: 0;
    color: #333;
  }
  li p{
    margin: 0;
  }
.l_top{
  color: #333;
  font-size: .88rem;
  width: 16.39rem;
  margin: 0 auto;
  padding-top:  1.03rem;
}
.l_pp{
  margin: 0.88rem 0;
  padding-left:2.5rem;
}
</style>
