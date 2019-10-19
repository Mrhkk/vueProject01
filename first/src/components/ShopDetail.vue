<template>
    <div id="shopDetail">
      <div class="header">
        <router-link :to="{}">
        <i class="iconfont icon-right1 icon1"></i>
        </router-link>
        <span>商家详情</span>
      </div>
      <ul>
        <li class="line_h">
          <span>活动与属性</span>
        </li>
        <li>
          <div class="li_active1">
            <span class="icon_bao">保</span>
            <p>已加入“外卖保”计划，食品安全有保障(APP专享)</p>
            <div style="clear:both;"></div>
          </div>
          <div class="li_active1">
            <span class="icon_zhun">准</span>
            <p>准时必达，超时秒赔(APP专享)</p>
            <div style="clear:both;"></div>
          </div>
          <div class="li_active1">
            <span class="icon_piao">票</span>
            <p>该商家支持开发票，请在下单时填写好发票抬头(APP专享)</p>
            <div style="clear:both;"></div>
          </div>
        </li>
        <li class="line_h">
          <router-link :to="{path:'/shopSafe'}" class="link1">
            <span>食品监督安全公示</span>
            <div class="link1_div">
              <span>企业认证详情</span>
              <i class="iconfont icon-aright"></i>
            </div>
            <div style="clear:both;"></div>
          </router-link>
        </li>
        <li>
          <i class="iconfont icon-jinlingyingcaiwangtubiao21 icon_xiao"></i>
          <div class="check">
            <div>
              <span>监督检测结果：</span>
              <span class="check_green">良好</span>
            </div>
            <div>
              <span>检查日期：</span>
              <span></span>
            </div>
          </div>
          <div style="clear:both;"></div>
        </li>
        <li class="line_h">
            <span>商家信息</span>
        </li>
        <li class="line_h1">
          <div class="info">
            <p>
              <span>效果演示</span>
            </p>
            <p class="posi">
              <span>地址：</span>
              <span>广东省广州市越秀区中山五路219号华联购物中心F1</span>
              <i class="iconfont icon-jia"></i>
            </p>
            <p>
              <span>营业时间：</span>
              <span>[8:30/20:30]</span>
            </p>
            <p @click="isShow=!isShow">
              <span>营业执照</span>
              <i class="iconfont icon-aright"></i>
            </p>
            <p @click="isShow1=!isShow1">
              <span>餐饮服务许可证</span>
              <i class="iconfont icon-aright"></i>
            </p>
          </div>
        </li>
      </ul>
      <div class="l_mark" v-if="isShow" @click="isShow=!isShow">
        <img src="../assets/zp.jpg" alt="">
      </div>
      <div class="l_mark" v-if="isShow1" @click="isShow1=!isShow1">
        <img src="../assets/zp.jpg" alt="">
      </div>
    </div>
</template>

<script>
    export default {
        name: "ShopDetail",
      data(){
          return{
            isShow:false,
            isShow1:false
          }
      }
    }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1296443_nj3zl13v1sf.css";
  *{
    padding: 0;
    margin: 0;
  }

  .header{
    font-size: 1.17rem;
    color: #fff;
    text-align: center;
    font-weight: 700;
    background-color: #3190e8;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    height: 2.86rem;
    line-height: 2.86rem;
  }
  .header a{
    position: absolute;
    top: 0;
    left: 0.59rem;
    color: white;
  }
  ul{
    margin-top: 3.5rem;
  }
  li{
    font-size: .9375rem;
    color: #333;
    line-height: 2.25rem;
    padding:0  .88rem;
    border-bottom: 1px solid #f1f1f1;
    background: white;
  }
  .line_h{
    line-height: 2.7rem;
  }
  .li_active1 p{
    width: 90%;
    float: left;
    font-size: 0.8rem;
    color: #666;
  }
  .icon_bao,.icon_zhun,.icon_piao{
    color: #fff;
    font-size: .75rem;
    float: left;
    margin:0.5rem 0.6rem 0 0;
    background: #999;
    border-radius:3px;
    /*width:1.04rem ;*/
    /*height:1.29rem ;*/
    line-height: 1.3rem;
    padding: 0 0.15rem;
    text-align: center;
  }
  .icon_zhun{
    background-color: rgb(87, 169, 255);
  }
  ul li:nth-child(2){
    margin-bottom: 0.59rem;
  }
  .link1{
    font-size: .9375rem;
    color: #333;
    line-height: 2.25rem;
  }
  .link1 span:nth-child(1){
    float: left;
  }
  .link1_div{
    float: right;
    color: #bbb;
  }

  .icon_xiao{
    font-size: 2.9rem;
    color:rgb(126, 211, 33) ;
    float: left;
    margin-top: 0.76rem;
  }
  .check{
    float: left;
    font-size:.81rem ;
    margin-left: 0.88rem;
  }
  ul li:nth-child(4){
    padding: 0.88rem;
    margin-bottom: 0.59rem;
  }
  .check_green{
    color: #7ed321;
  }

  .line_h1{
    padding: 0 0 0 0.88rem;
  }
  .info p{
    font-size: .88rem;
    color: #666;
    padding: 1.03rem 0.88rem 1.03rem 0;
    border-bottom: 0.031rem solid #f5f5f5;
    line-height: 1.2rem;
  }
  .icon-aright{
    float: right;
  }
  .icon-jia{
    color: #3190e8;
    float: right;
    font-size: 1.31rem;
    position: absolute;
    bottom: 0.4rem;
    right: 0.8rem;
  }
  .posi{
    position: relative;
  }

  .l_mark{
    position: fixed;
    background: rgba(0,0,0,0.2);
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
  }
  .l_mark img{
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
</style>
