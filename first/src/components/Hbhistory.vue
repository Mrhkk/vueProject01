<template>
  <div id="benefit">
    <div id="l_head_top">
      <router-link class="l_text_left" :to="{path:'/Benefit'}">
        <i class="iconfont icon-zuojiantou"></i>
      </router-link>
      <span class="l_text_right">历史红包</span>
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
         <i class="iconfont icon-yiguoqi"></i>
        </div>
        <div class="clear"></div>
        <p class="h-p">{{v.limit_map?v.limit_map.restaurant_flavor_ids:''}}</p>
      </li>
    </ul>

  </div>
</template>

<script>
    export default {
        name: "Hbhistory",
      data(){
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
        this.myHttp.get("/promotion/v2/users/1/expired_hongbaos?limit=20&offset=0", (data) => {
          console.log(data);
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
  @import '//at.alicdn.com/t/font_1452428_an0yhvwbd99.css';
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

  .clear {
    clear: both;
  }

  .b-ul {
    width: 100%;
  }
  .b-ul li{
    background-color: white;
    margin-top: 0.8rem;
  }
  .b-div1 {
    background: url("../assets/hongbao1.png") repeat-x;
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
    color:rgba(0, 0, 0, 0.3);
    font-size: 1.2rem;
    font-weight: 900;
  }

  .zuo > span:nth-child(2) {
    color: rgba(0, 0, 0, 0.3);
    font-size: 2.6rem;
    font-weight: 500;
  }

  .zuo > span:nth-child(3) {
    color: rgba(0, 0, 0, 0.3);
    font-size: 2.5rem;
    font-weight: 900;
    letter-spacing: -0.5rem;
  }

  .zuo > span:nth-child(4) {
    color: rgba(0, 0, 0, 0.3);
    font-size: 1.7rem;
    font-weight: 900;
  }

  .zuo > p {
    font-size: 0.7rem;
    color: rgba(0, 0, 0, 0.5);
    margin-top: -0.6rem;
  }

  .center {
    width: 49%;
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
    font-size: 1.3rem;
    color: rgba(0, 0, 0, 0.5);
  }

  .center > p:nth-child(2) {
    font-size: 0.75rem;
    color: rgba(0, 0, 0, 0.5);
  }

  .center > p:nth-child(3) {
    font-size: 0.75rem;
    color: rgba(0, 0, 0, 0.5);
  }

  .you {
    width: 24%;
    box-sizing: border-box;
    float: left;
  }

  .you > i {
    color: rgba(0, 0, 0, 0.4);
    font-size: 4.5rem;
    display: inline-block;
    margin-top: -0.55rem;
  }
  .clear{
    clear: both;
  }
  .h-p{
    font-size: 0.7rem;
    color: rgba(0, 0, 0, 0.4);
    padding: 0 1.5rem;
    margin-top: 0;
    line-height: 2rem;
    background-color: rgba(0, 0, 0, 0.023);
  }
</style>
