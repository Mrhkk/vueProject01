<template>
 <div id="l_balance">
   <div class="l_header">
     <div id="l_head_top">
       <router-link :to="{path: '/profile'}"><i class="iconfont icon-zuojiantou l_text_left"></i></router-link>
       <span class="l_text_right">我的余额</span>
     </div>
     <div class="l_head_c">
       <div class="l_head_center">
         <div class="l_cen_top">
           <span>当前余额</span>
           <router-link :to="{path:'/detail'}">余额说明</router-link>
           <i class="iconfont icon-wenhao"></i>
           <div style="clear:both;"></div>
       </div>
       <div class="l_cen_cen">
         <span>0.00</span>
         <span>元</span>
       </div>
         <div class="btn_cash">提现</div>
       </div>
     </div>
   </div>
   <p class="l_def">交易明细</p>
   <div class="l_foot">
     <img src="../assets/def.png" alt="">
     <p>暂无明细记录</p>
   </div>
 </div>
</template>

<script>
    export default {
        name: "Balance"
    }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1296443_aq2gswhv2kw.css";
  @import "//at.alicdn.com/t/font_1296443_qbe541wv2m.css";


  .l_header{
    background-color:#3190e8 ;
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
  .l_head_center{
    padding: .4rem;
    background-color: #fff;
    border-radius: .15rem;
  }
  .l_head_c{
    width: 100%;
    padding: 0.44rem;
    font-size: 0.81rem;
    color: #666;
  }
  .l_cen_top a{
    color: #3190e8;
    float: right;
  }
  .icon-wenhao{
    float: right;
    font-size: 1.1rem;
    color: #3190e8;
    margin-right: 0.29rem;
    margin-top:-0.3rem;
  }
  .l_cen_cen{
    font-size: 1.03rem;
    color: #333;
  }
  .l_cen_cen span:nth-child(1){
    font-size: 2.64rem;
  }
  .btn_cash{
  width: 100%;
  height: 2.93rem;
  font-size: 1.17rem;
  color: #fff;
  border-radius: .28rem;
  line-height: 2.93rem;
  margin-top: 1.46rem;
  text-align: center;
  background-color: #ccc;
}
  .l_def{
    font-size: .88rem;
    color: #999;
    line-height: 2.875rem;
    padding-left: .73rem;
  }
  .l_foot{
    text-align: center;
    margin-top: 1.47rem;
    font-size: 1.03rem;
    color: #333;
  }
  .l_foot img{
    width: 11.72rem;
    height:7.32rem;

  }
  .l_foot p{
    margin-top: 0.73rem;
  }
</style>
