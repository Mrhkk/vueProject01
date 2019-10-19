<template>
    <div class="load">
      <div id="l_head_top">
        <router-link class="l_text_left" :to="{path:'/profile'}">
          <i class="iconfont icon-zuojiantou"></i>
        </router-link>
        <span class="l_text_right">下载</span>
      </div>
      <div class="load-div">
        <i class="iconfont icon-eliaomo div-i"></i>
        <p class="div-p">下载饿了么App</p>
        <button class="btn btn-success div-btn" @click="btnOnclick">下载</button>
        <van-dialog
          v-model="show"
          confirmButtonBackgroundColor="red"
          show-confirm-button
        >
          <div class="divW">
            <div class="centerDiv">
              <van-icon name="warning-o" size="100px" color="#f8cb86"/>
              <p class="title">IOS用户请前往AppStore下载</p>
            </div>
          </div>
        </van-dialog>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Load",
      data(){
          return{
            show:false,
          }
      },
      methods:{
          btnOnclick(){
            this.show = true;
          }
      }
    }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1452428_ayycl45ybab.css";
  #l_head_top{
    color: white;
    font-size:1.17rem;
    text-align: center;
    position: relative;
    padding: 0.8rem 0 0.65rem 0.2rem;
    border-bottom: 1px solid rgba(255,255,255,0.3);
    box-sizing: border-box;
    background-color:#3190e8;
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
  .load-div{
    text-align: center;
  }
  .div-i{
    font-size:10rem;
    color: #3190e8;
  }
  .div-p{
    margin-top: -1.5rem;
    font-size: 1.3rem;
    color: rgba(0,0,0,0.7);
  }
  .div-btn{
    width: 90%;
    font-size: 1.2rem;
    margin-top: 1rem;
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
    height: 160px;
    position: relative;
    text-align: center;
    font-size: 1rem;
  }
</style>
