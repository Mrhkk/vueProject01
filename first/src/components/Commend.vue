<template>
  <div class="commend">
    <div id="l_head_top">
      <router-link class="l_text_left" :to="{path:'/benefit'}">
        <i class="iconfont icon-zuojiantou"></i>
      </router-link>
      <span class="l_text_right">推荐有奖</span>
    </div>
    <img src="../assets/activity.png" alt="" class="c-img">
    <div class="c-div">
      <div class="c-div1">
        <i class="iconfont icon-weixin c-i" @click="dianji"></i>
        <p class="c-p">邀请微信好友</p>
      </div>
      <div class="c-div1">
        <i class="iconfont icon-QQ c-i1" @click="dianji"></i>
        <p class="c-p">邀请QQ好友</p>
      </div>
      <div class="c-div1">
        <i class="iconfont icon-mianduimianyaoqing c-i2" @click="dianji"></i>
        <p class="c-p">面对面邀请</p>
      </div>
      <div class="clear"></div>
    </div>
    <div class="c-div2">
      <div class="c-div3">
        <p>累计收益</p>
        <p><span class="c-span">0</span>元</p>
      </div>
      <div class="c-div3">
        <p>成功邀请</p>
        <p><span class="c-span1">0</span>人</p>
      </div>
      <div class="clear"></div>
    </div>
    <div class="c-div4">
      <p>-收益明细-</p>
      <i class="iconfont icon-hongbao c-i3"></i>
      <p>还不赶紧去邀请好友</p>
    </div>
    <!--弹窗-->
    <van-dialog
      v-model="show"
      confirmButtonBackgroundColor="red"
      show-confirm-button
    >
      <div class="divW">
        <div class="centerDiv">
          <van-icon name="warning-o" size="100px" color="#f8cb86"/>
          <p class="title">请在饿了么APP中打开</p>
        </div>
      </div>
    </van-dialog>
  </div>
</template>

<script>
    export default {
        name: "Commend",
      data(){
          return{
            show:false
          }
      },
      methods:{
          dianji(){
            this.show = true;
          }
      }
    }
</script>
<style scoped>
  @import '//at.alicdn.com/t/font_1452428_44xotgrq5gr.css';
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
  .c-img{
    width: 100%;
  }
  .c-div{
    width: 100%;
    background-color: white;
  }
  .c-div1{
    width: 30%;
    text-align: center;
    float: left;
    margin-left: 2.75%;
    margin-top: 1rem;
  }
  .c-i{
    font-size: 3.5rem;
    color: #4cd964;
  }
  .c-p{
    font-size: 0.8rem;
    color: rgba(0,0,0,0.6);
  }
  .c-i1{
    font-size: 3.5rem;
    color: #3190e8;
  }
  .c-i2{
    font-size: 3.5rem;
    color: orange;
  }
  .clear{
    clear: both;
  }
  .c-div2{
    width: 100%;
  }
  .c-div3{
    width: 50%;
    float: left;
    text-align: center;
    font-size: 0.8rem;
    color: rgba(0,0,0,0.7);
    padding: 1.2rem 0;
  }
  .c-div3>p{
    margin: 0;
    border-right: 0.1rem solid rgba(0,0,0,0.1);
  }
  .c-span{
    color: #ff5340;
    font-weight: 800;
    font-size: 1.2rem;
  }
  .c-span1{
    color: rgba(0,0,0,0.8);
    font-weight: 800;
    font-size: 1.2rem;
  }
  .c-div4{
    width: 100%;
    text-align: center;
  }
  .c-div4>p:nth-child(1){
    font-size: 0.8rem;
    color: rgba(0,0,0,0.55);
  }
  .c-div4>p:nth-child(3){
    font-size: 0.8rem;
    color: rgba(0,0,0,0.4);
  }
  .c-i3{
    font-size: 2.5rem;
    color: rgba(0,0,0,0.2);
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
    height: 160px;
    position: relative;
    text-align: center;
    font-size: 1rem;
  }
</style>
