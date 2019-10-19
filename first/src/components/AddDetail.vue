<template>
    <div id="l_addDetail">
      <div id="l_head_top">
        <router-link class="l_text_left" :to="{path:'/add'}">
          <i class="iconfont icon-right1"></i>
        </router-link>
        <span class="l_text_right">搜索地址</span>
      </div>
      <div class="l_center">
        <input type="text" placeholder="请输入小区/写字楼/学校等" v-model="input">
        <button class="btn btn-danger l_btn" @click="sure">确认</button>
        <p style="clear: both"></p>
      </div>
      <div class="l_pink">
        为了满足商家的送餐要求，建议您从列表中选择地址
      </div>
      <div class="a-div" v-if="adiv">
        <ul>
          <li class="a-li" v-for="(v,i) in shuju" :key="i" @click="liClick(v.name)">
            <p >{{v.name}}</p>
            <p>{{v.address}}</p>
          </li>
        </ul>
      </div>
      <div class="l_bottom" v-if="adiv1">
        <p>找不到地址?</p>
        <p>请尝试输入小区、写字楼或学校名</p>
        <p>消息地址(如门牌号)可稍后输入哦。</p>
      </div>

    </div>
</template>

<script>
    export default {
        name: "AddDetail",
      data(){
          return{
            shuju:[],
            adiv:false,
            adiv1:false,
            input:""
          }
      },
      methods:{
          sure(){
              this.myHttp.get("/v1/pois?city_id=1&keyword="+this.input+"&type=search",(data)=>{
                //console.log(data);
                this.shuju=data;
                this.adiv=!false;
              });
          },
        liClick(v){
          this.$router.push({path:"/add",query:{adit:v}});
        }
      }
    }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1296443_mvbvtwm32f.css";
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
  .l_center{
    background: white;
    padding: 0.73rem;
  }
  input{
    width: 17.285rem;
    font-size: 0.85rem;
    background: #f2f2f2;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 0.59rem;
    float: left;
  }
  .l_btn{
    width: 4.4rem;
    font-size: 0.91rem;
    background: #3199e8;
    line-height: 1.7rem;
    border: none;
    color: white;
    float: right;
  }
  .l_pink{
    background: #fff6e4;
    font-size: .91rem;
    color: #ff883f;
    text-align: center;
    padding: 0.15rem 0;
  }
.l_bottom{
  text-align: center;
  font-size: 1.03rem;
  color: #969696;
  margin-top: 7rem;
}
  .l_bottom p{
    width: 100%;
    margin-bottom: .59rem;
  }
  .a-li{
    border-top: 0.03rem solid rgba(0,0,0,0.3);
    background-color: white;
    font-size: 0.9rem;
    padding: 0.4rem 1rem;
    color: rgba(0,0,0,0.7);
  }
</style>
