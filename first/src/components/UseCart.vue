<template>
    <div id="l_userCart">
      <div id="l_head_top">
        <router-link class="l_text_left" :to="{path:'/vipcard'}">
          <i class="iconfont icon-zuojiantou"></i>
        </router-link>
        <span class="l_text_right">兑换会员</span>
      </div>
      <ul>
        <li>成功兑换后将关联到当前账号：<span>123453</span></li>
        <li>
          <input type="text" placeholder="请输入10位卡号" class="l_in1" v-model="in1">
        </li>
        <li>
          <input type="text" placeholder="请输入6位卡密" class="l_in1" v-model="in2">
        </li>
      </ul>
      <p class="l_convert" @click="getNum" :class="{changeC:change}">兑换</p>
     <div class="l_tips">
       <i class="iconfont icon-zhixian1"></i><i class="iconfont icon-zhixian1"></i>
       <span>温馨提示</span>
       <i class="iconfont icon-zhixian1"></i><i class="iconfont icon-zhixian1"></i>
     </div>
      <div class="l_bottom">
        <p>新兑换的会员服务，权益以<i class="iconfont icon-zuoshangkuohao"></i>会员说明<i class="iconfont icon-youxiakuohao"></i>为准。</p>
        <p>月卡：30次减免配送费</p>
        <p>季卡：90次减免配送费</p>
        <p>年卡：360次减免配送费</p>
        <p>*仅限蜂鸟专送订单，每日最多减免3单，每单最高减免4元(一个月按31天计算)</p>
      </div>
      <div class="l_alter1"v-if="isPhone">
        <i class="iconfont icon-gantanhao"></i>
        <p style="font-size: 1.03rem">无效兑换码</p>
        <div class="l_btn1">
          <button @click="isPhone=!isPhone" class="btn btn-danger">确认</button>
        </div>
      </div>

    </div>
</template>

<script>
    export default {
        name: "UseCart",
      data(){
          return{
            change:false,
            in1:"",
            in2:"",
            isPhone:false
          }
      },
      updated(){
        if ( /^[0-9]{10}$/.test(this.in1) && /^[0-9]{6}$/.test(this.in2)){
          this.change=true;
        }else{
          this.change=!true;
        }
      },
      methods:{
        getNum(){
          let ze = /^[0-9]{10}$/;
          let pass1= /^[0-9]{6}$/;
          if (ze.test(this.in1) && pass1.test(this.in2)){
            this.isPhone=!this.isPhone
          }

        }
      }
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
  ul li{
    background: white;
    font-size: 1.03rem;
    color: #999;
    border-bottom: 1px solid rgba(0,0,0,0.03);
    padding-left: 1.03rem;
    line-height: 2.9rem;
  }
  li span{
    color: #666;
  }
  ul li:nth-child(1){
    background: none;
  }
  input{
    border: none;
    background: white;
  }
.l_convert{
  background: #ccc;
  text-align: center;
  color: white;
  font-size: 1.03rem;
  margin: 1.03rem 1.03rem 0 1.03rem;
  border-radius: 0.25rem;
  line-height: 2.625rem;
  font-weight: 700;
}
.l_tips{
  text-align: center;
  color: #aaa;
  margin:1rem 0 0.88rem 0;
}
  .l_bottom{
    padding:0 1.03rem 0 2.93rem;
    color: #aaa;
    font-size: 0.75rem;
  }
  .l_bottom p{
    margin: 0;
  }
  .changeC{
    background-color: #4cd964;
  }
  .l_alter1{
    position: absolute;
    width: 17.58rem;
    background: white;
    text-align: center;
    font-size: 1.875rem;
    color: #575757;
    font-weight: 500;
    top: 12.79rem;
    left: 2.93rem;
    z-index: 100;
    border-radius: 5px;
  }
  .l_alter1 .icon-gantanhao{
    color: #f8bb86;
    font-size: 4.65rem;
  }
  .l_alter1 button{
    width: 100%;
    display: inline-block;
    padding: .59rem 1.46rem;
    border-radius: 5px;
    font-size: 1.17rem;
    color: #fff;
    letter-spacing: 1px;
    margin-top: 26px;
    background:#4cd964;
    font-weight: 700;
    border-color:#4cd964;
  }
  .l_alter1 button:nth-child(1){
    margin-right: 0.5rem;
  }

</style>
