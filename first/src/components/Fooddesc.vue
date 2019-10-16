<template>
    <div id="desc">
      <div class="head"><router-link :to="{path:'/food',query:cName}"><span><img src="../../src/assets/back.png" alt=""></span></router-link><span>{{cName.title}}</span>
      </div>
      <van-dropdown-menu>
        <van-dropdown-item v-model="value1" :options="option1" />
        <van-dropdown-item v-model="value2" :options="option2" />
        <van-dropdown-item v-model="value3" :options="option3" />
      </van-dropdown-menu>
      <ul class="u1">
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

    </div>
</template>

<script>
    export default {
        name: "Fooddesc",
      data(){
          return{
            foodArr:[],
            cName:{},
            value1: 0,
            value2: 'a',
            value3:'a1',
            option1: [
              { text: '全部商品', value: 0 },
              { text: '新款商品', value: 1 },
              { text: '活动商品', value: 2 }
            ],
            option2: [
              { text: '默认排序', value: 'a' },
              { text: '好评排序', value: 'b' },
              { text: '销量排序', value: 'c' },
            ],
            option3: [
              { text: '默认排序1', value: 'a1' },
              { text: '好评排序1', value: 'b1' },
              { text: '销量排序1', value: 'c1' },
            ]
          }
      },
      created(){
          this.cName=this.$route.query
        this.myHttp.get("/shopping/restaurants?latitude=31.22967&longitude=121.4762",(data)=> {
          this.foodArr=data;
          console.log(data);
        })
      }
    }
</script>

<style scoped>
  .head{
    width: 100%;
    height: 3rem;
    box-sizing: border-box;
    background-color: #3190e8;
    color: white;
    padding: 0.7rem 0.3rem;
  }
  .head img{
    width: 2rem;
    height: 2rem;
    margin-top: -0.5rem;
  }
  .head span:nth-child(2){
    margin-left:30%;
    font-size: 1.2rem;
    font-weight: 600;
  }
  .down{
    width: 100%;
    display: flex;
    height: 2rem;
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
</style>
