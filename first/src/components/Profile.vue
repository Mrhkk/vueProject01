<template>
    <div id="l_profile">
      <div class="l_header">
        <div id="l_head_top">
          <i class="iconfont icon-zuojiantou l_text_left"></i>
          <span class="l_text_right">我的</span>
        </div>
        <router-link class="l_head_center" :to="{path:'/info'}">
          <img :src="photo" alt="" class="l_img_head">
          <div id="l_center_right">
            <p>{{dengname}}</p>
            <p class="l_cen_phone"><i class="iconfont icon-shouji"></i>暂无绑定手机号</p>
          </div>
          <i class="iconfont icon-youjiantou l_center_img"></i>
          <div style="clear:both;"></div>
        </router-link>
      </div>
      <div class="l_ymm">
        <router-link :to="{path:'/balance'}" class="l_link_l">
          <span class="l_text_r">0.00</span>
          <span>元</span>
          <p>我的余额</p>
        </router-link>
        <router-link :to="{path:'/benefit'}">
          <span class="l_text_o">{{gift_amount}}</span>
          <span>个</span>
          <p>我的优惠</p>
        </router-link>
        <router-link :to="{path:'/points'}">
          <span class="l_text_g">{{point}}</span>
          <span>分</span>
          <p>我的积分</p>
        </router-link>
        <div style="clear:both;"></div>
      </div>
      <ul class="l_ul">
        <li>
          <i class="iconfont icon-gengduo l_icon1"></i>
          <div>
            <router-link :to="{path:'/order'}"><span>我的订单</span></router-link>
            <i class="iconfont icon-youjiantou l_icon2"></i>
          </div>
          <p style="clear:both;"></p>
        </li>
        <li>
          <i class="iconfont icon-scheng l_icon1 l_iconj"></i>
          <div>
            <router-link :to="{path:'/return'}">
            <span>积分商城</span>
            <i class="iconfont icon-youjiantou l_icon2"></i>
            </router-link>
          </div>
          <p style="clear:both;"></p>
        </li>
        <li>
          <i class="iconfont icon-huangguan l_icon1 l_icone"></i>
          <div>
           <router-link :to="{path:'/vipcard'}"> <span>饿了么会员卡</span>
            <i class="iconfont icon-youjiantou l_icon2"></i></router-link>
          </div>
          <p style="clear:both;"></p>
        </li>
        <li>
          <i class="iconfont icon-fang l_icon1 l_iconf"></i>
          <div>
           <router-link :to="{path:'service'}"> <span>服务中心</span>
            <i class="iconfont icon-youjiantou l_icon2"></i></router-link>
          </div>
          <p style="clear:both;"></p>
        </li>
        <li>
          <i class="iconfont icon-eliaomo l_icon1 l_iconx"></i>
          <div>
            <router-link :to="{path:'/load'}">下载饿了么APP</router-link>
            <i class="iconfont icon-youjiantou l_icon2"></i>
          </div>
          <p style="clear:both;"></p>
        </li>
      </ul>
      <Footer></Footer>
    </div>
</template>

<script>
    import Footer from "./Footer";
    export default {
        name: "Profile",
        components: {Footer},
      data(){
          return{
            dengname:"",
            //avatar:'http://elm.cangdu.org/img/default.jpg',
            gift_amount:"",
            point:"",
            photo:''
          }
      },
      created(){
          this.photo=this.$store.state.myVuex.photo_data;

          //判断获取的name是否为空
          if(this.$store.state.myVuex.deng_data==""){
            //是的话
            this.dengname="登录/注册";
            this.gift_amount="0";
            this.point="0";
          }else{
            //不是的话
            this.dengname=this.$store.state.myVuex.deng_data;
            //发起网络请求
            this.myHttp.get("/v1/user",(data)=>{
              //console.log(data);
              //接收数据中的gift_amount字段
              this.gift_amount=data.gift_amount;
              //接收数据中的point字段
              this.point=data.point;
            });
          }
      }
    }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1296443_f8gtfz6l7e6.css";
  @import "//at.alicdn.com/t/font_1296443_6hxrdbnewyu.css";
  @import "//at.alicdn.com/t/font_1296443_xmcqct12r5q.css";
  @import "//at.alicdn.com/t/font_1296443_81c7nsg6y58.css";
  @import "//at.alicdn.com/t/font_1296443_imh3uwwguu8.css";

.l_header{
  background-color:#3190e8 ;
  padding-top: 0.46rem;
}
  #l_head_top{
    color: white;
    font-size:1.17rem;
    text-align: center;
    position: relative;
    padding: 0.3rem 0 0.35rem 0.2rem;
    border-bottom: 1px solid rgba(255,255,255,0.3);
    box-sizing: border-box;
  }
  .l_text_left{
    position: absolute;
    left: 0.5rem;
    top: 0.3rem;
  }
.l_text_right{
  font-weight: 700;
}
.l_img_head{
  width: 3.66rem;
  height: 3.66rem;
  border-radius: 50%;
  float: left;
}
  #l_center_right{
    padding-top: 0.4rem;
    float: left;
    margin-left: .4rem;
  }
  .l_head_center{
    display: block;
    padding: 0.98rem 0.89rem;
    color: #fff;
  }
  .l_head_center p{
    margin: 0;
  }
  .l_center_img{
    float: right;
    line-height: 3rem;

  }
  #l_center_right{
    font-size: 1.17rem;
    font-weight:700;
  }
  .l_cen_phone{
    font-size: 0.84rem;
    font-weight: 300;
    margin-top:0.2rem;
  }

  .l_ymm{
    color: #000;
    font-size: 0.6rem;
    box-sizing: border-box;
    background-color: white;
    margin-bottom: .7rem;
  }
  .l_ymm a{
    box-sizing: border-box;
    display: block;
    width: 7.80rem;
    float: left;
    text-align: center;
    border-right: 1px solid rgba(0,0,0,0.2);
  }
  .l_ymm span:nth-child(2n-1){
    font-size: 1.8rem;
    font-weight: 700;
  }
  .l_text_r{
    color: #f90;
  }

  .l_text_o{
    color: #ff5f3e;
  }
  .l_text_g{
    color: #6ac20b;
  }
  .l_ymm span{
    display: inline-block;
    box-sizing: border-box;
    padding: 1.25rem 0 0 0;
  }
  .l_ymm p{
    padding:0.3rem 0 0.66rem 0;
  }
  .l_ymm a:nth-child(3){
    border-right:none;
  }

   .l_ul{
    font-size: 1.03rem;
    color: #333;
  }
   .l_ul li{
     background-color: white;
     height: 2.75rem;
   }
  .l_icon1{
    padding:0.75rem  0.39rem 0.635rem 1.34rem;
    float: left;
    color: rgb(102, 102, 102);
  }
  .l_iconj{
    color: rgb(252, 123, 83);
  }
  .l_icone{
    color: rgb(255, 198, 54);
  }
  .l_iconf{
    color: rgb(0, 160, 255);
  }
  .l_iconx{
    color: rgb(60, 171, 255);
  }
  .l_icon2{
    color: rgb(187, 187, 187);
    font-size: 0.6rem;
    float: right;
  }
  li div{
    box-sizing: border-box;
    width: 20.5rem;
    /*height: 2.64rem;*/
    float: left;
    margin-left: 0.2rem;
    border-bottom:1px solid #f5f5f5;
    padding:0.635rem  0.39rem 0.635rem 0;
    margin-bottom: 0;
  }
  ul li:nth-child(4){
    margin-top:0.7rem;
  }
a{
  color: #333;
}
</style>
