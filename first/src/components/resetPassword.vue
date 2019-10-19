<template>
  <div class="password">
    <div class="p-div">
      <router-link :to="{path:'/spassword'}"><img src="../assets/back.png" alt="" class="p-img"></router-link>
      <span class="p-span">重置密码</span>
    </div>
    <div class="p-div1">
      <input type="text" placeholder="账号" v-model="input1">
      <input type="text" placeholder="旧密码" v-model="input2">
      <input type="text" placeholder="请输入新密码" v-model="input3">
      <input type="text" placeholder="请确认密码" v-model="input4">
      <input type="text" placeholder="验证码" v-model="input5">
      <div class="p-div2">
        <div class="p-div3">
          <span>看不清</span>
          <span class="p-span1" @click="yanzhengma">换一张</span>
        </div>
        <span class="p-img1"><img :src="yzm" alt=""></span>
      </div>
    </div>
    <button class="btn btn-success p-button" @click="login">确认修改</button>
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
        name: "resetPassword",
      data(){
        return{
          huadong:true,
          yzm:"",
          input1:"",
          input2:"",
          input3:"",
          input4:"",
          input5:"",
          show:false,
          showZi:""
        }
      },
      created(){
        this.yanzhengma();
      },
      methods:{
        yanzhengma(){
          this.myHttp.post("/v1/captchas",{}, (data)=>{
            console.log(data);
            this.yzm=data.code;
          });
        },
        login(){
          if(this.input1==""&&this.input2==""&&this.input3==""&&this.input4==""&&this.input5==""){
            this.show = true;
            this.showZi="请输入账号";
          }else if(this.input1==""){
            if(this.input2!=""||this.input3!=""||this.input4!=""||this.input5!=""){
              this.show = true;
              this.showZi="请输入账号";
            }
          }else if(this.input2==""){
            if(this.input1!=""||this.input3!=""||this.input4!=""||this.input5!=""){
              this.show = true;
              this.showZi="请输入旧密码";
            }
          }else if(this.input3==""){
            if(this.input1!=""||this.input2!=""||this.input4!=""||this.input5!=""){
              this.show = true;
              this.showZi="请输入新密码";
            }
          }else if(this.input4==""){
            if(this.input1!=""||this.input2!=""||this.input3!=""||this.input5!=""){
              this.show = true;
              this.showZi="请输入确认密码";
            }
          }else if(this.input5==""){
            if(this.input1!=""||this.input2!=""&&this.input3!=""||this.input4!=""){
              this.show = true;
              this.showZi="请输入验证码";
            }
          }else{
            let username = this.input1;
            let oldpassword = this.input2;
            let newpassword = this.input3;
            let confirm=this.input4;
            let captcha=this.input5;
            console.log(username);
            console.log(oldpassword);
            console.log(newpassword);
            console.log(confirm);
            console.log(captcha);
            this.myHttp.post("/v2/changepassword",{username :username,oldpassWord:oldpassword,newpassword:newpassword,confirmpassword:confirm,captcha_code:captcha},(data) => {
              console.log(data);
               if (data.status==1){
                 this.show = true;
                 this.showZi="密码修改成功";
               }else{
                 this.show = true;
                 this.showZi="用户名/密码错误";
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
  @import "//at.alicdn.com/t/font_1452428_ayycl45ybab.css";
  .p-div{
    width: 100%;
    height:3.2rem;
    background-color: #3190e8;
    padding: 1rem 1rem;
    box-sizing: border-box;
  }
  .p-img{
    width: 2rem;
    height: 2rem;
  }
  .p-span{
    margin-left: 22%;
    color: white;
    font-size: 1.3rem;
    font-weight: 600;
  }
  .p-div1{
    margin-top: 1rem;
    border-top: 0.04rem solid rgba(0,0,0,0.1);
    position: relative;
  }
  .p-div1 input{
    width: 100%;
    border: none;
    padding: 0.8rem 1.2rem;
    border-bottom: 0.04rem solid rgba(0,0,0,0.1);
    background-color: white;
    font-size: 1.1rem;
    outline:none;
  }
  .p-div2{
    position: absolute;
    bottom: 0rem;
    right: 1.2rem;
    width: 13rem;
  }
  .p-img1{
    width: 38%;
    float: right;
  }
  .p-div3{
    width: 30%;
    float: right;
    font-size: 1rem;
  }
  .p-span1{
    color: #3190e8;
   }
  .p-button{
    width: 90%;
    margin-left:5%;
    font-size: 1.3rem;
    margin-top: 1.2rem;
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
