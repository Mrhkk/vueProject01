<template>
  <div id="exchange">
    <div id="l_head_top">
      <router-link class="l_text_left" :to="{path:'/profile'}">
        <i class="iconfont icon-zuojiantou"></i>
      </router-link>
      <span class="l_text_right">兑换红包</span>
    </div>
    <div class="e-div">
      <input type="text" placeholder="请输入兑换码" class="input1" v-model="input3">
      <input type="text" placeholder="验证码" class="input2" v-model="input4">
      <div class="p-div2">
        <span class="p-img1"><img :src="yzm" alt=""></span>
        <div class="p-div3">
          <span>看不清</span>
          <span class="p-span1" @click="yanzheng">换一张</span>
        </div>
      </div>
      <div class="clear"></div>
      <button class="p-button"  :class="{'backC':show1}"  @click="duihuan">兑换</button>
      <van-dialog
        v-model="show"
        confirmButtonBackgroundColor="red"
        show-confirm-button
      >
        <div class="divW">
          <div class="centerDiv">
            <van-icon name="warning-o" size="100px" color="#f8cb86"/>
            <p class="title">{{duihuan1}}</p>
          </div>
        </div>
      </van-dialog>
    </div>
  </div>
</template>

<script>
    export default {
      name: "Exchange",
      data() {
        return {
          yzm: "",
          show:false,
          input3:"",
          input4:"",
          show1:false,
          duihuan1:""
        }
      },
      updated(){
        if(this.input3!=""&&/^[0-9]{4}$/.test(this.input4)){
          this.show1=!false;
        }else{
          this.show1=!true;
        }
      },
      created(){
        this.yanzheng();
      },
      methods: {
        yanzheng() {
          this.myHttp.post("/v1/captchas", {}, (data) => {
            //console.log(data);
            this.yzm = data.code;
          });
        },
        duihuan(){
          if(this.input3!=""&&/^[0-9]{4}$/.test(this.input4)){
            this.show = true;
            this.myHttp.post("/v1/users/:user_id/hongbao/exchange",{},(data)=>{
              console.log(data);
              this.duihuan1=data.message;
            });
        }
        }
      }
    }
</script>

<style scoped>
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
  .e-div{
    text-align: center;
  }
  .input1{
    border: none;
    width: 90%;
    line-height: 3rem;
    border-radius: 5%;
    margin-top: 1.2rem;
    padding-left: 0.5rem;
  }
  .input2{
    border: none;
    width: 48%;
    line-height: 3rem;
    display: inline-block;
    border-radius: 5%;
    float: left;
    margin-left: 5%;
    margin-top: 1.2rem;
    padding-left: 0.5rem;
  }
  .p-div2{
    background-color: white;
    width: 40%;
    display: inline-block;
    border-radius: 5%;
    float: right;
    margin-right: 5%;
    margin-top: 1.2rem;
  }
  .p-img1{
    width: 45%;
    float: left;
    margin-top: 0.5rem;
  }
  .p-div3{
    width: 45%;
    float: right;
    font-size: 0.85rem;
    padding: 0.35rem 0;
  }
  .p-div3>span{
    display: block;
  }
  .p-span1{
    color: #3190e8;
  }
  .clear{
    clear: both;
  }
  .p-button{
    width: 90%;
    margin-top: 1.2rem;
    background-color: rgba(0,0,0,0.25);
    border: none;
    font-size: 1.25rem;
    color: white;
    line-height: 2.5rem;
  }
  .backC{
    background-color:#4cd964;
  }
</style>
