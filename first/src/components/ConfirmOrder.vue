<template>
    <div id="l_confirmOrder">
      <div id="l_head_top">
        <router-link class="l_text_left" :to="{path:'/address'}">
          <i class="iconfont icon-right1"></i>
        </router-link>
        <span class="l_text_right">确认订单</span>
        <router-link :to="{}" class="l_link">登录/注册</router-link>
      </div>
      <div style="height: 3.375rem"></div>
      <ul>
        <li>
          <router-link :to="{path:'/chooseAddress'}" class="l_link_add">
            <i class="iconfont icon-ditu"></i>
            <span>请添加一个收货地址</span>
            <i class="iconfont icon-aright"></i>
            <img src="../assets/x.png" class="l_img1">
          </router-link>
        </li>
        <li class="l_li_time">
          <p>送达时间</p>
          <p>尽快送达|预计21:47</p>
          <p>蜂鸟专送</p>
          <div style="clear: both"></div>
        </li>
        <li>
          <div class="l_li_pay" @click="isPay=!isPay">
            <span class="l_li_left">支付方式</span>
            <i class="iconfont icon-aright"></i>
            <span class="l_li_right">在线支付</span>
            <p style="clear: both"></p>
          </div>
          <div class="l_li_hb">
            <span>红包</span>
            <span class="l_li_right">暂时只在饿了么APP中支持</span>
            <p style="clear: both"></p>
          </div>
        </li>
        <li>
          <img src="../assets/t.png" class="l_img_result">
          <span>效果演示</span>
        </li>
        <li class="l_li_info">
          <div class="l_li_i">
            <span class="l_span_n">222</span>
            <div class="li_div_np">
              <span class="l_span_num">x2</span>
              <span class="l_span_p">￥20</span>
              <p style="clear: both"></p>
            </div>
            <p style="clear: both"></p>
          </div>
          <div class="l_li_i">
            <span class="l_span_n">餐盒</span>
            <span class="l_span_p">￥2</span>
            <p style="clear: both"></p>
          </div>
          <div class="l_li_i">
            <span class="l_span_n">配送费</span>
            <span class="l_span_p">￥4</span>
            <p style="clear: both"></p>
          </div>
        </li>
        <li>
          <p class="l_dd">订单￥7372</p>
          <div class="l_pay2">
            <p class="l_p1">待支付</p>
            <p>￥7123</p>
          </div>
          <p style="clear:both;"></p>
        </li>
        <li>
          <router-link class="l_li_pay" :to="{}">
            <span class="l_li_left">订单备注</span>
            <i class="iconfont icon-aright"></i>
            <span class="l_li_right">口味、偏好等</span>
            <p style="clear: both"></p>
          </router-link>
          <router-link class="l_li_pay" to="{}">
            <span class="l_li_left">发票抬头</span>
            <i class="iconfont icon-aright"></i>
            <span class="l_li_right">不需要开发票</span>
            <p style="clear: both"></p>
          </router-link>
        </li>
        <div style="margin: 5rem"></div>
      </ul>
      <div class="l_bottom">
        <p class="l_bottom_p1">待支付￥7552</p>
        <p class="l_bottom_p2" @click="getCancel()">确认下单</p>
        <p style="clear:both;"></p>
      </div>
      <div class="l_alter"v-if="isShow">
        <i class="iconfont icon-gantanhao"></i>
        <p style="font-size: 1.03rem">请添加一个收货地址</p>
        <div class="l_btn1">
          <button @click="GetWait()" class="btn btn-danger l_btn_dan">确认</button>
        </div>
      </div>
      <transition enter-activity-class="animated bounceInUp" leave-active-class="animated bounceInDown">
      <div class="l_method" v-if="isPay" @click="isPay=!isPay">
        <div class="l_method_info">
          <p class="l_method_top">支付方式</p>
          <div class="l_goods">
            <span>货到付款(商家不支持货到付款)</span>
            <i class="iconfont icon-duiha gray"></i>
          </div>
          <div class="l_line">
            <span>在线支付</span>
            <i class="iconfont icon-duiha green"></i>
          </div>
        </div>
      </div>
      </transition>
    </div>
</template>

<script>
    export default {
        name: "ConfirmOrder",
      data(){
          return{
            isShow:false,
            isPay:false
          }
      },
      methods:{
        getCancel(){
         this.isShow = true;
        },
        GetWait(){
          this.isShow = false;
        },

      }
    }
</script>

<style scoped>

 #l_confirmOrder{
    position: relative;
  }
.l_methed_op{
   display: block;
}
  #l_head_top{
    width: 100%;
    color: white;
    font-size:1.17rem;
    position: fixed;
    padding: 0.8rem 0 0.65rem 0.2rem;
    border-bottom: 1px solid rgba(255,255,255,0.3);
    box-sizing: border-box;
    background-color:#3190e8 ;
    text-align: center;
    top: 0;
    left: 0;
    z-index: 100;
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

  .l_link{
    color: white;
    font-size:1.17rem;
    position: absolute;
    right: 0.5rem;
    top: 0.9rem;
  }
  li{
    background: white;
    padding: 0 0.88rem;
    font-size:.95rem;
    color: #666;
  }
  .l_link_add{
    display: block;
    color:#333 ;
    font-weight: 700;
    line-height: 5.13rem;
    position: relative;
  }
  .icon-aright{
    color: #999;
    float: right;
  }
  .icon-ditu{
    color: #3190e8;
    float: left;
    margin-right: 0.29rem;
  }
  .l_img1{
    width: 23.4375rem;
    font-size: 0;
    position: absolute;
    bottom: -0.7rem;
    left: -0.88rem;
  }
  .l_li_time{
    margin-top: 0.8rem;
    border-left: .3rem solid #3190e8;
    color: #3190e8;
    font-size:1.02rem;
    padding: .65rem .88rem;
  }

  .l_li_time p:nth-child(1){
    color:#333;
    font-size:1.17rem ;
    line-height:4rem ;
    float: left;
    /*margin: ;*/
  }
  .l_li_time p:nth-child(2){
    float: right;
    width: 14.1rem;
    text-align: right;
    margin:0.35rem 0 0.73rem 0;
  }
  .l_li_time p:nth-child(3){
    float: right;
    text-align: center;
    font-size:.75rem ;
    margin: 0;
    color: #fff;
    background-color: #3190e8;
    width:3.5rem;
    border-radius: .15rem;
    padding: .11rem;

  }

  ul li:nth-child(3){
    margin-top: .59rem;
  }
  ul li:nth-child(7){
    margin-top: .59rem;
  }

  .l_li_pay,.l_li_hb{
    font-size: .88rem;
    color: #aaa;
    border-bottom:1px solid rgba(0,0,0,0.02);
    line-height: 2.3rem;
  }
  .l_li_left{
    font-size:1.03rem ;
    color: #666;
  }
  .l_li_right{
    float: right;
  }
   .l_li_pay{
     display: block;
   }
  ul li:nth-child(4){
    border-bottom: 0.03rem solid #f5f5f5;
    font-size: 1.17rem;
    color: #333;
    margin-top: 0.59rem;
    line-height: 4.13rem;
  }
  .l_img_result{
    width: 1.76rem;
  }
  .l_span_n{
    font-size: .95rem;
    color:#666;
    float: left;
  }
  .li_div_np{
    font-size: .95rem;
    width: 5.27rem;
    float: right;
    height: 1.31rem;
  }
  .l_span_num{
    color:#FF6600;
    float: left;
  }
  .l_span_p{
    color:#666;
    float: right;
  }
  .l_li_info{
    padding:0.73rem 1.03rem 0 1.03rem ;
    border-bottom: 0.03rem solid #f5f5f5;
  }
  .l_li_i{
    padding:0.36rem 0;
  }

  ul li:nth-child(6){
    border-bottom: 0.03rem solid #f5f5f5;
    font-size: .95rem;
    color: #666;
    padding-top: 0.5rem;
  }
  .l_dd{
    float: left;
  }
  .l_pay2{
    width: 5.27rem;
    float: right;
    color:#FF6600;
  }
  .l_pay2 p{
    margin: 0;
  }
  .l_pay2 .l_p1{
    margin-bottom: 1.5rem;
  }

  /*尾部*/
  .l_bottom {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    font-size: 1.1rem;
    color: #fff;
    line-height: 3rem;
  }
  .l_bottom_p1{
    width: 70%;
    background: #3c3c3c;
    float: left;
    padding-left: 1.03rem;
    margin: 0;

  }
  .l_bottom_p2{
    width: 30%;
    background: #56d176;
    float: right;
    text-align: center;
    margin: 0;
  }
  .l_alter{
    position: fixed;
    width: 17.58rem;
    background: white;
    text-align: center;
    font-size: 1.875rem;
    color: #575757;
    font-weight: 500;
    top: 10.3rem;
    left: 2.93rem;
    z-index: 100;
    border-radius: 5px;
  }
  .icon-gantanhao{
    color: #f8bb86;
    font-size: 4.65rem;
  }
  .l_alter button{
    display: inline-block;
    padding: .59rem 1.46rem;
    border-radius: 5px;
    font-size: 1.17rem;
    color: #fff;
    letter-spacing: 1px;
    margin-top: 26px;
    background:#4cd964;
    border-color:#4cd964;
  }
  .l_alter button:nth-child(1){
    margin-right: 0.5rem;
  }
  .l_alter button:nth-child(2){
    background: #dd6b55;
    border-color:#dd6b55 ;
  }
  .l_btn_dan{
    width: 100%;
  }

  .l_method{
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background:rgba(0,0,0,0.1);
  }
  .l_method_info{
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    background: white;
    font-size: 1.03rem;
    color: #333;
    line-height: 3.125rem;
  }
  .l_method_top{
    background: #FaFaFa;
    width: 100%;
    text-align: center;
  }
  .l_goods{
    color: #ccc;
    padding: 0 1.03rem;
  }
  .l_line{
    padding: 0 1.03rem;
    margin-bottom: 4rem;
  }
  .gray{
    color: #eee;
    font-size: 1.17rem;
    float: right;
  }
  .green{
    color: #4cd964;
    font-size: 1.17rem;
    float: right;
  }
</style>
