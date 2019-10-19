<template>
    <div id="l_add">
      <div id="l_head_top">
        <router-link class="l_text_left" :to="{path:'/address'}">
          <i class="iconfont icon-zuojiankuohao"></i>
        </router-link>
        <span class="l_text_right">新增地址</span>
      </div>
      <div class="l_write">
        <input type="text" placeholder="请填写你的姓名" v-model="show" @input="input1" :class="{'border':inputclick}">
        <p class="i-p" v-if="inputclick">请填写您的姓名</p>
        <router-link :to="{path:'/addDetail'}" class="a-link">
          <input type="text" placeholder="小区/写字楼/学校等" v-model="show1">
        </router-link>
        <input type="text" placeholder="请填写详细送餐地址" v-model="show2" :class="{'border':inputclick1}" @input="input2">
        <p class="i-p" v-if="inputclick1">{{p}}</p>
        <input type="text" placeholder="请填写能够联系到您的手机号" v-model="show3" @input="input3" :class="{'border':inputclick2}">
        <p class="i-p" v-if="inputclick2">请输入正确的手机号</p>
        <input type="text" placeholder="备用联系电话" v-model="show4" @input="input4" :class="{'border':inputclick3}">
        <p class="i-p" v-if="inputclick3">请输入正确的手机号</p>
      </div>
      <div class="l_btn">
        <button class="btn btn-danger" @click="getCancel()" :class="{green:isOpacity}">新增地址</button>
      </div>
      <div class="l_alter"v-if="isShow">
          <i class="iconfont icon-gantanhao"></i>
          <p style="font-size: 1.03rem">地址信息错误</p>
          <div class="l_btn1">
            <button @click="GetWait()" class="btn btn-danger">确认</button>
          </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Add",
      data(){
        return{
          isShow:false,
          isOpacity:false,
          show:"",
          show1:'',
          show2:'',
          show3:"",
          show4:"",
          inputclick:false,
          inputclick1:false,
          inputclick2:false,
          inputclick3:false,
          p:""
        }
      },
      created(){
          this.show1=this.$route.query.adit;
      },
      methods:{
        getCancel(){
          if(this.show==""||this.show1==""||this.show2==""||this.show3==""||this.show4==""){
            this.isShow=!false;
          }else {
            //存值到vuex
            //第一个值为自定义方法名，对象里为需要传的值
            this.$store.commit("dizhi",{name:this.show,phone:this.show3});
            //实现路由跳转
            this.$router.push({path:"/address"});
          }
        },
        GetWait(){
          this.isShow = false;
        },
        input1(){
          if(this.show=="") {
            //为空警示语显示
            this.inputclick = !false;
          }
        },
        input2(){
          if(this.show2==""){
            this.p="请详细填写送餐地址";
          }else if(this.show2.length<3){
            this.inputclick1=!false;
            this.p="送餐地址太短了，不能辨识";
          }else{
            this.inputclick1=false;
          }
        },
        input3(){
          let reg2=/^1[356789]\d{9}$/;
          if(reg2.test(+this.show3)){
            this.inputclick2=false;
          }else{
            this.inputclick2=!false;
          }
        },
        input4(){
          let reg3=/^1[356789]\d{9}$/;
          if(reg3.test(+this.show4)){
            this.inputclick3=false;
          }else{
            this.inputclick3=!false;
          }
          }
        }
    }
</script>

<style scoped>
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
 #l_add{
  position: relative;
}
  .l_write{
    background: white;
    padding: 0.59rem 0.73rem;
    margin-top: .59rem;
  }
  input{
    display: block;
    width: 100%;
    font-size: .88rem;
    margin: 0 auto 0.59rem auto;
    padding: .44rem;
    background: #f2f2f2;
    border: 1px solid #ddd;
    border-radius: 3px;
  }
  input:nth-child(5){
    margin-bottom: 0;
  }
.border{
  border:0.03rem solid red;
}
  .l_btn{
    padding: 0.79rem;
  }
  .btn{
    width: 100%;
    color: #fff;
    background: #11d964;
    border: none;
    font-weight: 700;
    line-height: 1.6rem;
    opacity: 0.7;
  }
  .green{
    background: #4cd964;
    opacity: 1;
  }
  /*.l_masking{*/
    /*width:100%;*/
    /*height: 100%;*/
    /*position: fixed;*/
    /*top: 0;*/
    /*right: 0;*/
    /*background: rgba(0,0,0,0.2);*/
  /*}*/
  .l_alter{
    position: absolute;
    width: 17.58rem;
    background: white;
    text-align: center;
    font-size: 1.875rem;
    color: #575757;
    font-weight: 500;
    top: 8.79rem;
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
  .i-p{
    color: red;
    font-size: 0.5rem;
  }
  .a-link{
    color: rgba(0,0,0,0.9);
  }
</style>
