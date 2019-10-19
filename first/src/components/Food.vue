<template>
    <div id="food">
      <div id="head_top">
        <span><i class=" iconfont icon-suosou charB"></i></span>
        <router-link :to="{path:'/city'}">
          <span class="span2">{{cityn?'郑州':addressName.address}}</span>
        </router-link>
        <router-link :to="{path:'/profile'}" >
          <span v-if="foodLoad"><i class=" iconfont icon-rentou charB1"></i></span>
        </router-link>
        <router-link :to="{path:'/spassword'}">
          <span class="charB2" v-if="!foodLoad">登录/注册</span>
          <div class="clear"></div>
        </router-link>
      </div>

        <van-swipe :autoplay="3000" indicator-color="#1989fa">

          <van-swipe-item>
            <van-grid :column-num="4" icon-size="42">
            <van-grid-item v-for="(v,i) in imgurlArr1" :key="i" :icon="'//fuss10.elemecdn.com/'+v.image_url" :text="v.title" :to="{path:'/fdesc',query:v}"/>
            </van-grid>
          </van-swipe-item>

            <van-swipe-item>
              <van-grid :column-num="4" icon-size="42">
                <van-grid-item v-for="(v,i) in imgurlArr1" :key="i" :icon="'//fuss10.elemecdn.com/'+v.image_url" :text="v.title" />
              </van-grid>
          </van-swipe-item>

        </van-swipe>


<ul class="u1">
  <li class="ul-li"><i class="iconfont icon-shangjia charB3"></i><span class="charB3-span">附近商家</span></li>
 <router-link :to="{path:'/fan',query:v}" v-for="(v,i) in foodArr" :key="i" class="shop-li" >
   <p class="left"><img :src="'//elm.cangdu.org/img/'+v.image_path" class="shop-img">
   </p>
   <div class="shop-right">
     <div class="shop-detail-header"><h4 class="shop_title ellipsis "><span class="premium">品牌</span>{{v.name}}</h4>
       <ul class="shop_detail_ul">
         <li  class="supports" v-for="(j,k) in v.supports" :key="k">{{j.icon_name}}</li>
       </ul>
     </div>
     <p class="rating-order-num">
       <van-rate
         size=5
         v-model="v.rating"
         allow-half
         void-icon="star"
         color="#ff9a0d"
         void-color="#d1d1d1"
         gutter="1"
     />
       <span class="p-span">{{v.rating}}</span>
       <span class="p-span1">月售{{v.recent_order_num}}单</span>
       <span class="p-span3">准时达</span>
       <span class="p-span2">{{v.delivery_mode.text}}</span>
     </p>
     <p class="fee-distance">
       <span>￥{{v.float_minimum_order_amount}}元起送/配送费约{{v.float_delivery_fee}}</span>
       <span>{{v.distance}}/</span>
       <span>{{v.order_lead_time}}</span>
     </p>
   </div>
 </router-link>
</ul>
    <Footer></Footer>
    </div>
</template>

<script>
    import Footer from "./Footer";
    export default {
        name: "Food",
      components: {Footer},
      data(){
         return{
           addressName:"",
           imgurlArr:[],
           imgurlArr1:[],
           imgurlArr2:[],
           foodArr:[],
           foodLoad:false,
           cityn:''
         }
      },
created(){
  this.addressName=this.$route.query;
  this.myHttp.get("/v2/index_entry",(data)=> {
    this.imgurlArr=data;
    for (let i=0;i<this.imgurlArr.length/2;i++){
      this.imgurlArr1.push(this.imgurlArr[i]);
    }
    for (let i=this.imgurlArr.length/2;i<this.imgurlArr.length;i++){
      this.imgurlArr2.push(this.imgurlArr[i]);
    }
  });
  this.myHttp.get("/shopping/restaurants?latitude=31.22967&longitude=121.4762",(data)=> {
      this.foodArr=data;
    //console.log(data);
  });
  this.cityn=this.$store.state.myVuex.deng_data;
  if(this.cityn!=""){
    this.foodLoad=!false;
  }
},

    }
</script>

<style scoped>
  #food{
    padding:2.8rem 0 ;
  }
  #head_top {
    background-color: #3190e8;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    height: 2.8rem;
    padding: 0.5rem 1rem;
  }
  .charB{
    color: white;
    font-size: 1.5rem;
  }
  .charB1, .charB2{
    color: white;
    font-size: 1.2rem;
    line-height: 2rem;
    float: right;
  }
  .span2{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 30%;
    display: inline-block;
    margin-left: 28%;
    font-size: 1.3rem;
    color: white;
    font-weight: 500;
  }
  #head_top span:nth-child(3){
    float: right;
  }
  .u1{
    margin-top: 1rem;
    background-color: white;
  }
  .ul-li{
    display: block;
    padding: 0.6rem;
    padding-bottom: 0;
  }
  .shop-li{
    display: flex;
    border-bottom: .025rem solid #f1f1f1;
    padding: .7rem .4rem;
  }
  .shop-img {
    width: 4rem;
    height: 4rem;
    display: block;
    margin-top: 0.6rem;
    margin-right: 0.4rem;
    margin-left: 0.2rem;
  }
  shop-right{
    flex: auto;
  }
  .shop-right .shop-detail-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .shop-right{
    height: .6rem;
  }
  .shop-right .fee-distance{
    margin-top: .52rem;
    display: flex;
    justify-content: space-between;
    font-size: .5rem;
    color: #333;
  }
  .shop_title {
    width: 8.5rem;
    color: rgba(0,0,0,0.7);
    padding-top: .01rem;
    font-size: 0.95rem;
    font-weight: 700;
  }
  .ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .premium{
    display: inline-block;
    font-size: .6rem;
    color: rgba(0,0,0,0.7);
    background-color: #ffd930;
    padding: 0.1rem;
    border-radius: .1rem;
    margin-right: .2rem;
  }
   .supports{
     display: inline-block;
    font-size: 0.9rem;
    color: #999;
    border: .025rem solid #f1f1f1;
    padding: 0 .04rem;
    border-radius: .08rem;
    margin-left: .05rem;
  }
  .shop_detail_ul{
    display: flex;
    transform: scale(.8);
    margin-left:6.7rem;
  }
  .fee-distance span:nth-child(1){
    color:rgba(0,0,0,0.6);
  }
  .fee-distance span:nth-child(2){
    color:rgba(0,0,0,0.6);
    margin-right: -5.1rem;
  }
  .fee-distance span:nth-child(3){
    color:#3190e8 ;
    margin-right: 0.5rem;
  }
.charB3-span{
  color: rgba(0,0,0,0.6);
  font-size: 0.9rem;
  padding-left: 0.5rem;
}
  .rating-order-num{
    margin: -0.2rem;
  }
  .p-span{
    color: #ff9a0d;
    font-size: 0.8rem;
    font-weight: 600;
  }
  .p-span1{
    color: rgba(0,0,0,0.8);
    font-size: 0.7rem;
  }
  .p-span2{
    color: white;
    padding: 0 0.01rem;
    padding-top: 0.1rem;
    background-color: #3190e8;
    font-size: 0.2rem;
    float: right;
  }
  .p-span3{
    color: #3190e8;
    padding: 0 0.01rem;
    padding-top: 0.1rem;
    border: 0.02rem solid #3190e8;
    background-color: white;
    font-size: 0.1rem;
    float: right;
    margin-right: 0.5rem;
    margin-left: 0.1rem;
  }
  .clear{
    clear: both;
  }

</style>
