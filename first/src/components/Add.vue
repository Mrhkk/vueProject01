<template>
    <div id="l_add">
      <div id="l_head_top">
        <router-link class="l_text_left" :to="{path:'/address'}">
          <i class="iconfont icon-right1"></i>
        </router-link>
        <span class="l_text_right">新增地址</span>
      </div>
      <div class="l_write">
        <input type="text" placeholder="请填写你的姓名">
        <router-link :to="{path:'/addDetail'}">
          <input type="text" placeholder="小区/写字楼/学校等">
        </router-link>
        <input type="text" placeholder="请填写详细送餐地址">
        <input type="text" placeholder="请填写能够联系到您的手机号">
        <input type="text" placeholder="备用联系电话">
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
          isOpacity:false
        }
      },
      methods:{
        getCancel(){
          let in1=document.querySelector("input");
          let value0=in1[0].value;
          let value1=in1[1].value;
          let value2=in1[2].value;
          let value3=in1[3].value;
          let value4=in1[4].value;
          let reg1=/^1[356789]\d{9}$/;
          let reg2=/^1[356789]\d{9}$/;
          if (value0 != ""&& value1 != ""&& value2 != ""&& reg1.test(value3) || reg2.test(value4)){
            this.isShow = false;
            this.isOpacity = true;
          }else {
            this.isShow = true;
            this.isOpacity = false;
          }


        },
        GetWait(){
          this.isShow = false;
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
</style>
