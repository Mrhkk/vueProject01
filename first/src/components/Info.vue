
<template>
    <div id="l_info">
      <div id="l_head_top">
        <router-link class="l_text_left" :to="{path: 'profile'}">
          <i class="iconfont icon-zuojiantou"></i>
        </router-link>
        <span class="l_text_right">帐户信息</span>
      </div>
      <ul class="l_ul">
        <li @click.stop="uploadHeadImg">
          <input type="file" accept="image/*" @change="handleFile" class="hiddenInput">
          <div class="l_li_head">
            <span>头像</span>
            <i class="iconfont icon-youjiantou l_icon2 l_iconr"></i>
            <!--图片地址动态绑定-->
            <img :src="userInfo.avatar">
            <p style="clear:both;"></p>
          </div>
        </li>
        <li>
         <router-link :to="{path:'/setUsername'}">
           <span>用户名</span>
           <i class="iconfont icon-youjiantou l_icon2"></i>
           <p class="l_phone">12345678</p>
           <p style="clear:both;"></p>
         </router-link>
        </li>
      <li>
        <router-link :to="{path:'/address'}">
          <span>收货地址</span>
          <i class="iconfont icon-youjiantou l_icon2"></i>
          <p style="clear:both;"></p>
        </router-link>
      </li>
        <li id="l_num">账号绑定</li>
      <li @click="isPhone=!isPhone">
        <router-link :to="{}">
          <i class="iconfont icon-shouji l_iconb"></i>
          <span>手机</span>
          <i class="iconfont icon-youjiantou l_icon2"></i>
          <p style="clear:both;"></p>
        </router-link>
      </li>
        <li id="l_num1">安全设置</li>
      <li>
        <router-link :to="{}">
          <span>登录密码</span>
          <i class="iconfont icon-youjiantou l_icon2"></i>
          <p class="l_phone">修改</p>
          <p style="clear:both;"></p>
        </router-link>
      </li>
      </ul>
      <button class="btn btn-danger l_btn" @click="getCancel()">退出登录</button>
     <div class="l_masking" v-if="isShow">
       <div class="l_alter">
         <i class="iconfont icon-gantanhao"></i>
         <h2>是否退出登录</h2>
         <div class="l_btn1">
           <button @click="GetWait()" class="btn btn-danger" v-if="">再等等</button>
           <button @click="LoginOut()" class="btn btn-danger">退出登录</button>
         </div>
       </div>
     </div>
      <div class="l_alter1"v-if="isPhone">
        <i class="iconfont icon-gantanhao"></i>
        <p style="font-size: 1.03rem">请在手机APP中设置</p>
        <div class="l_btn1">
          <button @click="isPhone=!isPhone" class="btn btn-danger">确认</button>
        </div>
      </div>
    </div>
</template>

<script>
    import {Dialog} from "vant";

    export default {
        name: "Info",
      data(){
          return{
            isShow:false,
            isPhone:false,
           userInfo:{
              //初始图片
             avatar:'http://elm.cangdu.org/img/default.jpg'
           }
          }
      },
      methods:{
          getCancel(){
            this.isShow = true;
          },
        GetWait(){
            this.isShow = false;
        },
        LoginOut(){
            this.$router.push({path:"/profile"});
        },
        //打开文件上传
        uploadHeadImg() {
          this.$el.querySelector('.hiddenInput').click()
        },
        //将头像显示
        handleFile(e){
            let $target = e.target || e.srcElement;
            let file = $target.files[0];
            var reader = new  FileReader();
            reader.onload = (data) =>{
              let res = data.target || data.srcElement;
              this.userInfo.avatar = res.result;
            }
            reader.readAsDataURL(file);
        }
      }
    }
</script>

<style scoped>
@import "//at.alicdn.com/t/font_1296443_aq2gswhv2kw.css";
@import "//at.alicdn.com/t/font_1296443_mo2tjlhhdg.css";
@import "//at.alicdn.com/t/font_1296443_r7q7vt5un0t.css";
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
  #l_info{
    position: relative;
}
  li img{
    border-radius: 50% 50%;
    width: 3rem;
    height: 3rem;
    float: right;

  }
  .l_ul{
    margin-top:0.7rem;
    font-size: 1.03rem;
    color: #333;
}
  .l_ul li{
    box-sizing: border-box;
    background-color: white;
    border-top:1px solid rgba(0,0,0,0.1);
    padding:0.46rem 0.59rem;
    font-size: 0.88rem;
    line-height: 2rem;
}
  p{
    margin: 0;
  }
  .l_icon2{
    color: rgb(216, 216, 216);
    font-size: 0.9rem;
    float: right;
    font-weight: 600;
    margin-left: 0.4rem;
}
  .l_iconr{
    line-height: 3rem;
}
  .l_ul li:nth-child(1){
    position: relative;
    padding:0;
}
  input{
    box-sizing: border-box;
    width: 100%;
    height:4.5rem;
    padding:0.635rem  0.39rem 0.635rem 0;
    border: none;
}
  .l_li_head{
    box-sizing: border-box;
    width: 100%;
    position: absolute;
    top: 0.8rem;
    left: 0;
    padding:0 0.59rem;

}
  .l_li_head span{
    line-height: 3rem;
  }
  .l_phone{
  font-size:1.03rem;
  float: right;
  color: #999;
}
  li a{
    color: #333;
  }
  #l_num,#l_num1{
    font-size: 0.75rem;
    background-color:#f5f5f5;
    color: #666;
  }
  .l_iconb{
  color: dodgerblue;
  font-size:1.2rem;
}
  .l_btn{
    width:96%;
    margin: 1.7rem 2%;
    font-size: 0.87rem;
    text-align: center;
    color: #fff;
    padding: 0.5rem 0;
    /*border-radius: 5px;*/
  }
  .l_masking{
    width:100%;
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;
    background: rgba(0,0,0,0.2);
  }
  .l_alter{
    width: 94%;
    background: white;
    text-align: center;
    padding: 1.063rem;
    font-size: 1.875rem;
    color: #575757;
    font-weight: 500;
    margin: 1.56rem 0;
    position: absolute;
    top: 20%;
    left: 3%;
    z-index: 100;
    border-radius: 5px;
}
  .icon-gantanhao{
    color: #f8bb86;
    font-size: 5.65rem;
  }
  .l_alter button{
    display: inline-block;
    padding: .59rem 1.46rem;
    border-radius: 5px;
    font-size: .88rem;
    color: #fff;
    letter-spacing: 1px;
    margin-top: 26px;
    background:#C1C1C1 ;
    border-color:#C1C1C1 ;
  }
  .l_alter button:nth-child(1){
     margin-right: 0.5rem;
}
  .l_alter button:nth-child(2){
    background: #dd6b55;
    border-color:#dd6b55 ;
  }
  .hiddenInput{
    opacity: 0;
  }
.l_alter1{
  position: absolute;
  width: 17.58rem;
  background: white;
  text-align: center;
  font-size: 1.875rem;
  color: #575757;
  font-weight: 500;
  top: 12.79rem;
  left: 2.93rem;
  z-index: 100;
  border-radius: 5px;
}
.l_alter1 .icon-gantanhao{
  color: #f8bb86;
  font-size: 4.65rem;
}
.l_alter1 button{
  width: 100%;
  display: inline-block;
  padding: .59rem 1.46rem;
  border-radius: 5px;
  font-size: 1.17rem;
  color: #fff;
  letter-spacing: 1px;
  margin-top: 26px;
  background:#4cd964;
  font-weight: 700;
  border-color:#4cd964;
}
.l_alter1 button:nth-child(1){
  margin-right: 0.5rem;
}

</style>
