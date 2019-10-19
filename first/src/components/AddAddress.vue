<template>
    <div id="l_addAddress">
      <div id="l_head_top">
        <router-link class="l_text_left" :to="{path:'/chooseAddress'}">
          <i class="iconfont icon-right1"></i>
        </router-link>
        <span class="l_text_right">添加地址</span>
      </div>
      <ul>
        <li>
          <span>联系人</span>
          <input type="text" placeholder="你的名字" class="input1" v-model="name">
          <div class="l_radio">
            <i class="iconfont icon-duiha" :class="isShow?'icon_green':'icon_hui'" @click="changeB()" v-model="sex"></i>
            <span>先生</span>
            <i class="iconfont icon-duiha" :class="isGreen?'icon_green':'icon_hui'" @click="changeG()" v-model="sex"></i>
            <span>女士</span>
            <p style="clear:both;"></p>
          </div>
          <p style="clear:both;"></p>
        </li>
        <li>
          <span>联系电话</span>
          <i class="iconfont icon-hao"></i>
          <input type="text" placeholder="你的手机号" class="input1 input2" v-model="phone">
          <div class="l_radio">
            <input type="text" class="input1 input3" placeholder="备选电话" v-model="phone1">
          </div>
          <p style="clear:both;"></p>
        </li>
        <li>
          <span>送餐地址</span>
          <router-link :to="{}" class="input1">
            <input type="text" placeholder="小区/写字楼/学校等" class="input1 input3"  v-model="address">
          </router-link>
          <div class="l_radio">
            <input type="text" class="input1 input3" placeholder="详细地址(如门牌号等)" v-model="detailedAddress">
          </div>
          <p style="clear:both;"></p>
        </li>
        <li>
          <span>标签</span>
          <input type="text" placeholder="无/家/学校/公司" class="input1" v-model="label">
          <p style="clear:both;"></p>
        </li>
      </ul>
        <div class="l_bottom">
          <button @click="GetInfors" class="btn btn-danger l_btn_dan">确定</button>
        </div>
      <div class="l_alter"v-if="isShow1">
        <i class="iconfont icon-gantanhao"></i>
        <p style="font-size: 1.03rem">请输入姓名</p>
        <div class="l_btn1">
          <button @click="isShow1=!isShow1" class="btn btn-danger l_btn_dan">确认</button>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "AddAddress",
      data(){
          return {
            isShow:true,
            isGreen:false,
            isShow1:false,
            //名字
            name:"",
            //电话
            phone:"",
            //备选电话
            phone1:"",
            //地址
            detailedAddress:"",
             //详细地址
            address:"",
            //标签
            label:"",
            //性别
            sex:"先生",
            dataArr:[]
          }
      },
      created(){
          if(JSON.parse(localStorage.getItem("dataArr"))){
            this.dataArr=JSON.parse(localStorage.getItem("dataArr"));
          }
        // this.dataArr=;
        // console.log();
      },
      methods:{
          //先生
        changeB(){
          this.isShow = true;
          this.isGreen = false;
          this.sex = "先生";
        },
        //女士
        changeG(){
          this.isShow = false;
          this.isGreen = true;
          this.sex = "女士";
        },
        GetInfors(){
          let reg1=/^1[356789]\d{9}$/;
          if (this.name!="" && reg1.test(this.phone)  && this.detailedAddress !=""  && this.label != "" && this.sex != ""){
            if (this.label == "无"){
              console.log({name:this.name,phone:this.phone,address:this.address,sex:this.sex,label:this.label})

              if(!JSON.parse(localStorage.getItem("dataArr"))){
              this.dataArr.push({name:this.name,phone:this.phone,address:this.address,sex:this.sex,label:this.label})
              }else {
                this.dataArr=JSON.parse(localStorage.getItem("dataArr"));
                this.dataArr.push({name:this.name,phone:this.phone,address:this.address,sex:this.sex,label:this.label})
              }
              localStorage.setItem("dataArr",JSON.stringify(this.dataArr));
              this.$router.push({path:"/chooseAddress",query:this.dataArr});
            }
          }else {
            this.isShow1 = true;
          }
        }

      }
    }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  #l_head_top{
    color: white;
    font-size:1.17rem;
    position: relative;
    padding: 0.8rem 0 0.65rem 0.2rem;
    border-bottom: 1px solid rgba(255,255,255,0.3);
    box-sizing: border-box;
    background-color:#3190e8 ;
    text-align: center;
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
  ul{
    padding:0 1.03rem;
    background: white;
  }
  li{
    border-bottom: 0.03rem solid rgba(0,0,0,0.08);
    position: relative;
    padding: 0;
  }
  input{
    border: none;
  }
  .input1{
    border-bottom: 0.03rem solid #eee;
    float: right;
    height: 3.66rem;
    color: #999;
    background: none;
    width: 70%;
  }
  li span{
    line-height: 3.66rem;
    color: #333;
    width: 30%;
  }
  .l_radio{
    width: 70%;
    float: right;
    height: 3.625rem;
  }
  .icon_green{
    color: #4cd964;
    font-size: 1.17rem;
  }
  .icon_hui{
    color: #ddd;
    font-size: 1.17rem;
  }
  .icon-hao{
    float: right;
    position: absolute;
    right: 0;
    top: .9rem;
    color: #3190e8;
    font-size: 1.25rem;
  }
  .input3{
    width: 100%;
  }

  /*尾部*/
  .l_alter{
    position: fixed;
    width: 17.58rem;
    background: white;
    text-align: center;
    font-size: 1.875rem;
    color: #575757;
    font-weight: 500;
    top: 13.3rem;
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
  .l_btn_dan{
    width: 100%;
    background: #4cd964;
    border: none;
    margin: 0;
    line-height: 1.5rem;
  }
  .l_bottom{
    box-sizing: border-box;
    margin: 0.88rem 1.03rem 0 1.03rem;
  }
  .l_bottom button{
    line-height: 2.5rem;
  }
</style>
