<template>
  <div class="payment">
    <div id="l_head_top">
      <router-link class="l_text_left" :to="{path:'/vipcard'}">
        <i class="iconfont icon-zuojiankuohao"></i>
      </router-link>
      <span class="l_text_right">会员中心</span>
    </div>
    <div class="p-div">
      <p>支付剩余时间</p>
      <van-count-down
        :time="time"
        format="HH:mm:ss"
        @finish="finished"
      />
    </div>
    <p class="p-p">选择支付方式</p>
    <div class="p-div1">
      <div class="p-div2">
        <i class="iconfont icon-zhifubao p-zhi"></i>
        <span>支付宝</span>
        <div class="clear"></div>
      </div>
      <div class="p-div3">
        <i class="iconfont icon-huabanfuben" :class="radio?'backgroud':'p-radio'" @click="radioClick"></i>
      </div>
      <div class="clear"></div>
    </div>

    <div class="p-div1">
      <div class="p-div2">
        <i class="iconfont icon-weixin1 p-zhi1"></i>
        <span>微信</span>
        <div class="clear"></div>
      </div>
      <div class="p-div3">
        <i class="iconfont icon-huabanfuben" :class="radio1?'p-radio':'backgroud'" @click="radioClick1"></i>
      </div>
      <div class="clear"></div>
    </div>
    <button class="btn btn-success p-btn" @click="crim">确认支付</button>
    <van-dialog
      v-model="show"
      confirmButtonBackgroundColor="red"
      show-confirm-button
    >
      <div class="divW">
        <div class="centerDiv">
          <van-icon name="warning-o" size="100px" color="#f8cb86"/>
          <p class="title">{{p}}</p>
        </div>
      </div>
    </van-dialog>
  </div>
</template>

<script>
  export default {
    name: "Payment",
    data() {
      return {
        time:  15 * 60 * 1000,
        radio: true,
        radio1: true,
        show:false,
        p:""
      }
    },
    created(){
      this.show = true;
      this.p="暂不开放支付功能";
    },
    methods: {
      //单选按钮点击事件
      radioClick() {
        this.radio = true;
        this.radio1 = true;
      },
      radioClick1() {
        this.radio =false;
        this.radio1 = false;
      },
      //按钮点击事件
      crim(){
        this.show = true;
        this.p="当前环境无法支付，请打开官方APP进行付款";
      },
      //计时器结束时触发
      finished(){
          this.show = true;
          this.p="暂不开放支付功能";
      }
    }
  }
</script>

<style scoped>
  @import '//at.alicdn.com/t/font_1452428_lkoj8vhj6ip.css';
  @import "//at.alicdn.com/t/font_1452428_ayycl45ybab.css";
  #l_head_top {
    color: white;
    font-size: 1.17rem;
    text-align: center;
    position: relative;
    padding: 0.8rem 0 0.65rem 0.2rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    box-sizing: border-box;
    background-color: #3190e8;
  }

  .l_text_left {
    display: block;
    font-size: 1.2rem;
    position: absolute;
    left: 0.5rem;
    top: 0.9rem;
    color: #fff;
  }

  .l_text_right {
    font-weight: 700;
  }

  .p-div {
    text-align: center;
    background-color: white;
    padding: 2.5rem 0;
  }

  .p-div > p {
    font-size: 0.8rem;
    padding-bottom: 0.5rem;
  }

  >>> .van-count-down {
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 1.5rem;
  }

  .p-p {
    padding: 0.8rem 0.8rem;
    font-size: 1rem;
  }

  .p-div1 {
    width: 100%;
    background-color: white;
  }

  .p-div2 {
    width: 70%;
    float: left;
    padding: 0.3rem 0 0.3rem 1rem;
  }

  .p-zhi, .p-zhi1 {
    font-size: 3rem;
    color: #3190e8;
    float: left;
  }

  .p-zhi1 {
    color: #4cd964;
  }

  .p-div2 > span {
    float: left;
    font-size: 1rem;
    margin-top: 1.35rem;
    margin-left: 0.5rem;
  }

  .p-div3 {
    width: 30%;
    text-align: right;
    float: left;
    padding: 1.4rem 1rem;
  }

  .p-radio {
    font-size: 1.5rem;
    color: rgba(0, 0, 0, 0.25);
  }

  .backgroud {
    font-size: 1.5rem;
    color: #4cd964;
  }

  .clear {
    clear: both;
  }

  .p-btn {
    width: 90%;
    margin-left: 5%;
    font-size: 1.2rem;
    font-weight: 700;
    margin-top: 0.8rem;
    background-color: #4cd964;
  }
  .centerDiv {
    position: absolute;
    left: 0;
    right: 0;
    top: 10px;
    bottom: 0;
    margin: auto;
  }
  .divW{
    width: 100%;
    height: 10rem;
    position: relative;
    text-align: center;
    font-size: 1rem;
  }
</style>
