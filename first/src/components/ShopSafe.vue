<template>
    <div id="l_shopSafe">
      <div class="header">
        <router-link :to="{path:'/shopDetail'}">
          <i class="iconfont icon-right1 icon"></i>
        </router-link>
        <span>食品监督安全公示</span>
      </div>
      <ul>
        <li class="line_h">
          <span>食品监督安全公示</span>
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
          <span>工商登记信息</span>
        </li>
        <li class="de_nfo">
          <p>企业名称</p>
          <p>工商执照注册号</p>
          <p>注册资本</p>
          <p>注册地址</p>
          <p>属地监管所</p>
          <p>法定代表人</p>
          <p>经营范围</p>
        </li>
        <li class="line_h">
          <span>餐饮许可证</span>
        </li>
        <li class="de_nfo1">
          <p>营业范围</p>
          <p>许可证有效期</p>
          <p>许可证号</p>
          <p>发证时间</p>
        </li>
      </ul>
      <i class="iconfont icon-jia icon1"></i>
      <i class="iconfont icon-jia icon2"></i>
    </div>
</template>

<script>
    export default {
        name: "ShopSafe",
      data(){
          return{

          }
      }
    }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1296443_nj3zl13v1sf.css";
  @import "//at.alicdn.com/t/font_1296443_mvbvtwm32f.css";
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
    margin-top: 3rem;
  }
  li{
    font-size:.81rem;
    color: #333;
    line-height: 2rem;
    padding:0  .88rem;
    border-bottom: 1px solid #f1f1f1;
    background: white;
  }

  .line_h{
    line-height: 2.64rem;
    font-size: 1.1rem;
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
  ul li:nth-child(2){
    padding: 0.88rem;
    margin-bottom: 0.59rem;
  }
  .check_green{
    color: #7ed321;
  }

  .de_nfo{
    font-size:.81rem;
    margin-bottom: .59rem;
    padding: 0.59rem 0.59rem;
  }
  .de_nfo1{
    padding: 0.59rem 0.59rem;
  }

   .icon1,.icon2{
     color: #3190e8;
     float: right;
     font-size: 1.31rem;
   }
  .icon1{
    position: absolute;
    bottom: 21rem;
    right: 0.8rem;
  }

 .icon2{
   position: absolute;
   bottom: 4rem;
   right: 0.8rem;
 }
</style>
