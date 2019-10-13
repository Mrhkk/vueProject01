<template>
  <div id="l_detail">
    <div id="l_head_top">
      <router-link class="l_text_left" :to="{path:'/balance'}">
        <i class="iconfont icon-zuojiantou"></i>
      </router-link>
      <span class="l_text_right">余额问题</span>
    </div>
    <ul>
      <li>
        <h3>Q1:使用余额的条件</h3>
        <p>为了保护账户安全，使用余额前必须先绑定手机号。</p>
      </li>
      <li>
        <h3>Q2:余额怎么可以用?</h3>
        <p>余额可以在饿了么平台上提现，当余额大于等于待支付金额时可以在支持在线支付的商家中进行消费。提现功能将于2016年12月25日00:00全面开放。</p>
      </li>
      <li>
        <h3>Q3:我要如何提现?</h3>
        <p>为了保护账户和资金安全，您在提现前需要输 入真实姓名和用该姓名开通的银行卡号、选择开户行，并验证已绑走饿了么账号的手机号，每日只能提现1次每次限额50 元。若提现金额超过50元击[提现]时系统会提示您已超额，请您怜改提现全额。</p>
      </li>
      <li>
        <h3>Q4:为什么会提现失败?</h3>
        <p>可能原因有:您的姓名于户行、银石一号等信息不四配:您当日的提现次实和会项超二眼制日的政户存在异常，被风控扫载。</p>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "Detail"
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
    /*box-sizing: border-box;*/
    width: 100%;
    height: 38.55rem;
    color: #666;
    font-size: 0.88rem;
    background: white;
    margin: 0 auto;
    padding: 0 0.73rem 0.73rem 0.73rem;
  }
  li h3{
    font-weight: 400;
    font-size: 1.03rem;
    line-height: 2.875rem;
    margin: 0;
    color: #333;
  }
  li p{
    margin: 0;
  }

</style>
