<template>
    <div class="password">
      <div class="p-div">
        <router-link :to="{path:'/city'}"><img src="../assets/back.png" alt="" class="p-img"></router-link>
        <span class="p-span">密码登录</span>
      </div>
      <div class="p-div1">
        <input type="text" placeholder="账号" v-model="input1">
        <input :type="intype" placeholder="密码" v-model="input2">
        <input type="text" placeholder="验证码" v-model="input3">
        <i class="iconfont icon-huadonganniux p-i" v-if="huadong" @click="openpassword"></i>
        <i class="iconfont icon-huadonganniuyes p-i" v-else @click="clockpassword"></i>
        <div class="p-div2">
          <span class="p-img1"><img :src="yzm" alt=""></span>
          <div class="p-div3">
            <span>看不清</span>
            <span class="p-span1" @click="yanzheng">换一张</span>
          </div>
        </div>
      </div>
      <p class="p-p">温馨提示：未注册过的账户，登录时将自动注册</p>
      <p class="p-p1">注册过的用户可凭账号密码登录</p>
     <button class="btn btn-success p-button" @click="login">登录</button>
      <router-link :to="{path:'/resetpassword'}" class="reset">重置密码?</router-link>
      <van-dialog
        v-model="show"
        confirmButtonBackgroundColor="red"
        show-confirm-button
      >
        <div class="divW">
          <div class="centerDiv">
            <van-icon name="warning-o" size="100px" color="#f8cb86"/>
            <p class="title">{{showZi}}</p>
          </div>
        </div>
      </van-dialog>
    </div>
</template>

<script>
    import { Dialog } from 'vant';
    export default {
        name: "Spassword",
        data(){
            return{
              huadong:true,
              yzm:"",
              input1:"",
              input2:"",
              input3:"",
              show:false,
              showZi:"",
              intype:'text',
          }
        },
        created(){
           this.yanzheng();
        },
        methods:{
            yanzheng(){this.myHttp.post("/v1/captchas",{}, (data)=>{
                console.log(data);
              this.yzm=data.code;
            });
          },
          openpassword(){
            this.huadong = !this.huadong;
            if(!this.huadong){
              this.intype='password';
            }

          },
          clockpassword(){
            this.huadong = !this.huadong;
            if (this.huadong) {
              this.intype='text';
            }

          },
          login(){
              if(this.input1==""&&this.input2==""&&this.input3==""){
                this.show = true;
                this.showZi="请输入手机号/邮箱/用户名";
              }else if(this.input1==""){
                if(this.input2!=""||this.input3!=""){
                  this.show = true;
                  this.showZi="请输入手机号/邮箱/用户名";
                }
            }else if(this.input2==""){
                if(this.input1!=""||this.input3!=""){
                  this.show = true;
                  this.showZi="请输入密码";
                }
            }else if(this.input3==""){
                if(this.input1!=""||this.input2!=""){
                  this.show = true;
                  this.showZi="请输入验证码";
                }
              }else {
                let username = this.input1;
                let password = this.input2;
                let yanzhengma = this.input3;
                // console.log(username);
                // console.log(password);
                // console.log(yanzhengma);
                this.myHttp.post("/v2/login",{username:username,password:password,captcha_code:yanzhengma},(data) => {
                  console.log(data);
                 if (data.username){
                   //配置路由跳转个人中心页面
                 }else{
                   this.show = true;
                   this.showZi="密码错误";
                 }
                });
              }
          },
      },
      components: {
        [Dialog.Component.name]: Dialog.Component
      }
    }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1452428_atnm2dcb2u4.css";
.p-div{
  width: 100%;
  height:4rem;
  background-color: #3190e8;
  padding: 1rem 1rem;
  box-sizing: border-box;
}
  .p-img{
    width: 3rem;
    height: 3rem;
  }
  .p-span{
    margin-left: 20%;
    color: white;
    font-size: 1.7rem;
    font-weight: 600;
  }
  .p-div1{
    margin-top: 2rem;
    border-top: 0.04rem solid rgba(0,0,0,0.1);
    position: relative;
  }
  .p-div1 input{
    width: 100%;
    height: 4rem;
    border: none;
    padding: 0 1.2rem;
    border-bottom: 0.04rem solid rgba(0,0,0,0.1);
    background-color: white;
    font-size: 1.7rem;
    outline:none;
  }
  .p-i{
    font-size: 2.5rem;
    position: absolute;
    top:4.3rem;
    right: 2rem;
  }
  .p-p{
    color: red;
    font-size: 1rem;
    padding-left:1.2rem;
    padding-top: 1.5rem;
  }
  .p-p1{
    color: red;
    font-size: 1rem;
    padding-left:1.2rem;
  }
  .p-button{
    width: 90%;
    height: 4rem;
    margin-left: 1.2rem;
    font-size: 1.7rem;
  }
  .reset{
    display: block;
    text-align: right;
    padding-right: 1.2rem;
    margin-top: 2rem;
    color: #3b95e9;
  }
  .p-div2{
    position: absolute;
    bottom: 0rem;
    right: 1.2rem;
    width: 13rem;
  }
  .p-img1{
    width: 65%;
    float: left;
  }
  .p-div3{
    width: 35%;
    float: right;
    font-size: 1.2rem;
  }
  .p-span1{
    color: #3190e8;
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
