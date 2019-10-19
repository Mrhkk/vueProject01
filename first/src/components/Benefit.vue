<template>
  <div id="benefit">
    <div id="l_head_top">
      <router-link class="l_text_left" :to="{path:'/profile'}">
        <i class="iconfont icon-zuojiantou"></i>
      </router-link>
      <span class="l_text_right">我的优惠</span>
    </div>

    <van-tabs @click="onClick" color="#3190e8" title-active-color="#3190e8">
      <van-tab title="红包">
        <div class="p-p">
          <span class="b-span3">有<span class="b-span">{{arrlength}}</span>个红包即将到期</span>
          <router-link :to="{path:'/hbdescription'}" class="b-link">红包说明</router-link>
          <i class="iconfont icon-wenhao b-span1"></i>
          <div class="clear"></div>
        </div>
        <ul class="b-ul">
          <li v-for="(v,i) in Arr1" :key="i">
            <div class="b-div1"></div>
            <div class="zuo">
              <span>￥</span><span>{{Arr[i][0]}}</span><span>.</span><span>{{Arr[i][1]}}</span>
              <p>满{{v.sum_condition}}元可用</p>
            </div>
            <div class="center">
              <p>{{v.name}}</p>
              <p>{{v.end_date}}到期</p>
              <p>限收货手机号是{{v.phone}}</p>
            </div>
            <div class="you">
              <h4>剩3日</h4>
            </div>
            <div class="clear"></div>
            <p class="h-p">{{v.limit_map?v.limit_map.restaurant_flavor_ids:''}}</p>
          </li>
        </ul>
        <div class="div-wei">
          <router-link :to="{path:'/hbhistory'}" class="a-wei">查看历史红包></router-link>
        </div>
        <div class="div-wei1">
          <router-link :to="{path:'/exchange'}" class="a-wei1">兑换红包</router-link>
        </div>
        <div class="div-wei2">
          <router-link :to="{path:'/commend'}" class="a-wei2">推荐有奖</router-link>
        </div>
        <div class="clear"></div>
      </van-tab>
      <van-tab title="商家代金券">
        <div class="p-p1">
          <router-link :to="{path:'/coupon'}" class="b-link">商家代金券说明</router-link>
          <i class="iconfont icon-wenhao b-span1"></i>
          <div class="clear"></div>
        </div>
        <div class="b-div">
          <img src="../assets/tishi.png" alt="" class="b-img">
          <p class="b-p">无法使用代金券</p>
          <p class="b-p1">非客户端或客户端版本过低</p>
          <router-link :to="{path:'/load'}" class="btn btn-success b-button">下载或升级客户端</router-link>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
  export default {
    name: "Benefit",
    data() {
      return {
        arrlength:"",
        hongbao: [],
        amount: [],
        Arr:[],
        Arr1:[],
        // num1:""
      }
    },
    created() {
      this.myHttp.get("/promotion/v2/users/1/hongbaos?limit=20&offset=0", (data) => {
       // console.log(data);
        this.Arr1=data;
        this.arrlength=data.length;
        // this.num1=
        // console.log(Math.floor(data[0].amount));
        for (let i = 0; i < data.length; i++) {
          this.hongbao.push(data[i]);
          this.amount.push(this.hongbao[i].amount.toFixed(1));
          this.Arr.push(this.amount[i].split("."))
        }
        // console.log(this.amount);
        //console.log(this.Arr);
        //console.log(this.Arr[0]);
      })
    },
    methods: {
      onClick(name, title) {
        this.$toast(title);
      }
    },
  }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1296443_mvbvtwm32f.css";
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

  .p-p {
    font-size: 0.8rem;
    padding: 0.5rem 1rem;
    box-sizing: border-box;
  }

  .b-span3 {
    float: left;
  }

  .b-span {
    color: #ff5340;
  }

  .b-span1 {
    float: right;
    display: inline-block;
    color: #3190e8;
    font-size: 1.5rem;
    margin-top: -0.5rem;
  }

  .b-link {
    float: right;
    display: inline-block;
  }

  .clear {
    clear: both;
  }

  .b-ul {
    width: 100%;
  }
  .b-ul li{
    background-color: white;
  }
  .b-ul li:nth-child(2){
  margin-top: 0.8rem;
}
  .b-ul li:nth-child(3){
    margin-top: 0.8rem;
  }
  .b-div1 {
    background: url("../assets/kuang.png") repeat-x;
    background-position: center center;
    background-size: 0.7rem 0.35rem;
    border-radius: 0.25rem;
    height: 0.25rem;
  }

  .zuo {
    width: 27%;
    text-align: center;
    padding: 0.8rem 0;
    box-sizing: border-box;
    display: inline-block;
    float: left;
  }

  .zuo > span {
    letter-spacing: -0.2rem;
  }

  .zuo > span:nth-child(1) {
    color: #ff5340;
    font-size: 1.2rem;
    font-weight: 900;
  }

  .zuo > span:nth-child(2) {
    color: #ff5340;
    font-size: 2.6rem;
    font-weight: 500;
  }

  .zuo > span:nth-child(3) {
    color: #ff5340;
    font-size: 2.5rem;
    font-weight: 900;
    letter-spacing: -0.5rem;
  }

  .zuo > span:nth-child(4) {
    color: #ff5340;
    font-size: 1.7rem;
    font-weight: 900;
  }

  .zuo > p {
    font-size: 0.7rem;
    color: rgba(0, 0, 0, 0.5);
    margin-top: -0.6rem;
  }

  .center {
    width: 56%;
    display: inline-block;
    box-sizing: border-box;
    float: left;
    padding: 1.3rem 0 1.3rem 0;
  }

  .center > p {
    margin: 0;
    padding-left: 1rem;
    border-left: 0.1rem solid rgba(0, 0, 0, 0.3);
  }

  .center > p:nth-child(1) {
    font-size: 1.2rem;
    color: rgba(0, 0, 0, 0.5);
  }

  .center > p:nth-child(2) {
    font-size: 0.65rem;
    color: rgba(0, 0, 0, 0.5);
  }

  .center > p:nth-child(3) {
    font-size: 0.65rem;
    color: rgba(0, 0, 0, 0.5);
  }

  .you {
    width: 17%;
    box-sizing: border-box;
    float: left;
    padding: 1.3rem 0 2.3rem 0;
  }

  .you > h4 {
    color: #ff5340;
    font-size: 1.2rem;
  }
  .h-p{
    font-size: 0.7rem;
    color: rgba(0, 0, 0, 0.4);
    padding: 0 1.5rem;
    margin-top: 0;
    line-height: 2rem;
    background-color: rgba(0, 0, 0, 0.023);
  }
.a-wei{
  font-size: 0.65rem;
  color: rgba(0,0,0,0.4);
  padding: 0.3rem 1.3rem;
}
  .a-wei{
    font-size: 0.74rem;
  }
  .div-wei{
    text-align: center;
  }
  .div-wei1{
    background-color: white;
    width: 50%;
    text-align: center;
    margin-top:4rem;
    position: fixed;
    bottom:0;
    left: 0;
  }
  .div-wei2{
    background-color: white;
    width: 50%;
    text-align: center;
    margin-top:4rem;
    position: fixed;
    bottom:0;
    right: 0;
  }
  .a-wei1,.a-wei2{
    font-size: 1.2rem;
    color: rgba(0,0,0,0.6);
    line-height: 3rem;
  }
  /*商家代金券*/
  .p-p1 {
    font-size: 0.8rem;
    padding: 0.85rem 1rem;
    box-sizing: border-box;
  }

  .b-div {
    text-align: center;
    margin-top: 5rem;
  }

  .b-img {
    width: 8rem;
    height: 4.9rem;
    margin-bottom: 1rem;
  }

  .b-p {
    font-size: 1.1rem;
    color: rgba(0, 0, 0, 0.6);
  }

  .b-p1 {
    font-size: 0.8rem;
    color: rgba(0, 0, 0, 0.5);
  }

  .b-button {
    width: 10rem;
    background-color: #56d176;
    font-size: 0.9rem;
  }
>>>.van-ellipsis{
  font-size: 1rem;
}
</style>
