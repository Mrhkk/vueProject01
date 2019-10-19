<template>
  <div id="desc">
    <div class="head">
      <router-link :to="{path:'/food',query:cName}"><span><img src="../../src/assets/back.png" alt=""></span>
      </router-link>
      <span>{{title}}</span>
    </div>
    <van-dropdown-menu>
      <!--分类-->
      <van-dropdown-item :title="title">
        <van-tree-select
          :items="items"
          :active-id.sync="activeId"
          :main-active-index.sync="activeIndex"
        >
          <template slot="content">
            <template v-for="(arry,index) in items_info">
              <template v-for="value in arry">
                <van-cell @click="getfood(value.text,value.onlyId)" active-color="#ee0a24"
                          v-if="activeIndex === index"
                          :title="value.text"
                          :value="value.count"/>
                <template>
                </template>
              </template>
            </template>
          </template>
        </van-tree-select>
      </van-dropdown-item>
      <!--排序-->
      <van-dropdown-item :title="'排序'">
        <ul class="item">
          <li @click="sortfood(0)"><i class="iconfont icon-paixu"></i>
            <p>智能排序</p></li>
          <li @click="sortfood(5)"><i class="iconfont icon-position-o"></i>
            <p>距离最近</p></li>
          <li @click="sortfood(6)"><i class="iconfont icon-huore"></i>
            <p>销量最高</p></li>
          <li @click="sortfood(1)"><i class="iconfont icon-ziyuan"></i>
            <p>起送价最低</p></li>
          <li @click="sortfood(2)"><i class="iconfont icon-shijian"></i>
            <p>配送速度最快</p></li>
          <li @click="sortfood(3)"><i class="iconfont icon-xingxing"></i>
            <p>评分最高</p></li>
        </ul>
      </van-dropdown-item>
      <!--筛选-->
      <van-dropdown-item :title="'筛选'">
        <div class="psfs">
          <p>配送方式</p>
          <p class="btnP" :class="{'textcolor':temp}">
            <i v-show="temp" class="iconfont icon-duihao"></i>
            蜂鸟专送</p>
        </div>
        <div class="shopPro">
          <p>商家属性 (可以多选)</p>
          <div>
             <span class="kind" @click="temp=!temp" :class="{'textcolor':temp}">
                <i v-show="temp" class="iconfont icon-duihao"></i>
                <span v-show="!temp" class="pz text">品</span>品牌商家</span>
            <span class="kind" @click="temp1=!temp1" :class="{'textcolor':temp1}">
                <i v-show="temp1" class="iconfont icon-duihao"></i>
                <span v-show="!temp1" class="bp text">保</span>外卖保</span>
            <span class="kind" @click="temp2=!temp2" :class="{'textcolor':temp2}">
                <i v-show="temp2" class="iconfont icon-duihao"></i>
                <span v-show="!temp2" class="pz text">准</span>准时达</span>
          </div>
          <div>
              <span class="kind" @click="temp3=!temp3" :class="{'textcolor':temp3}">
                <i v-show="temp3" class="iconfont icon-duihao"></i>
                <span v-show="!temp3" class="xf text">新</span>新店</span>
            <span class="kind" @click="temp4=!temp4" :class="{'textcolor':temp4}">
                  <i v-show="temp4" class="iconfont icon-duihao"></i>
                <span v-show="!temp4" class="xf text">付</span>在线支付</span>
            <span class="kind" @click="temp5=!temp5" :class="{'textcolor':temp5}">
                  <i v-show="temp5" class="iconfont icon-duihao"></i>
                <span v-show="!temp5" class="bp text">票</span>开发票</span>
          </div>
        </div>
        <div class="bottomBtn">
          <button class="clear">清空</button>
          <button class="sure">确定</button>
        </div>
      </van-dropdown-item>
    </van-dropdown-menu>
    <ul class="u1">
      <router-link :to="{path:'/fan',query:v}" v-for="(v,i) in foodArr" :key="i" class="shop-li">
        <p class="left"><img :src="'//elm.cangdu.org/img/'+v.image_path" class="shop-img">
        </p>
        <div class="shop-right">
          <div class="shop-detail-header"><h4 class="shop_title ellipsis "><span class="premium">品牌</span>{{v.name}}
          </h4>
            <ul class="shop_detail_ul">
              <li class="supports" v-for="(j,k) in v.supports" :key="k">{{j.icon_name}}</li>
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
            <span class="p-span2" v-if="v.delivery_mode">{{v.delivery_mode.text}}</span>
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
    data() {
      return {
        foodArr: [],
        cName: {},
        items: [],
        temp: true,
        items_info: [],
        activeId: 1,
        activeIndex: 0,
        title: "",
        value1: 0,
        value2: 'a',
        value3: 0,
        temp1: false,
        temp2: false,
        temp3: false,
        temp4: false,
        temp5: false,
        temp6: false,
        temp7: false,
      }
    },
    created() {
      this.title = this.$route.query.title
      this.myHttp.get("/shopping/restaurants?latitude=31.22967&longitude=121.4762", (data) => {
        this.foodArr = data;
        console.log(data);
      });
      //获取商铺分类的请求
      this.myHttp.get("/shopping/v2/restaurant/category", data => {
        console.log(data);
        for (var i = 0; i < data.length; i++) {
          this.items_info.push([])
          for (var j = 1; j < data[i].sub_categories.length; j++) {
            if (data[i].sub_categories) {
              this.items_info[i].push({
                text: data[i].sub_categories[j].name,
                count: data[i].sub_categories[j].count,
                id: j,
                onlyId: data[i].sub_categories[j].id,
              });
            }
          }
        }
        for (let i in data) {
          this.items.push({
            text: data[i].name, children: this.items_info[i], info: data[i].count
          });
        }
      });
      //获取排序的请求
      // this.myHttp.get(`/shopping/restaurants?latitude=${this.latitude}&longitude=${this.longitude}`, data => {
      //   console.log(data);
      // })
    },
    methods: {
      getfood(foodName, id) {
        this.title = foodName;
        this.myHttp.get(`/shopping/restaurants?latitude=${this.latitude}&longitude=${this.longitude}&offset=0&limit=20&extras[]=activities&keyword=&restaurant_category_id=&restaurant_category_ids[]=${id}&order_by=null&delivery_mode[]=null`, data => {
          this.foodArr = data;
        });
      },
      //  排序的方法
      sortfood(id) {
        console.log(id);
        this.myHttp.get(`/shopping/restaurants?latitude=${this.latitude}&longitude=${this.longitude}&offset=0&limit=20&extras[]=activities&keyword=&restaurant_category_id=&restaurant_category_ids[]=&order_by=${id}&delivery_mode[]=null`, data => {
          this.foodArr = data;
        });
      }
    }
  }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1281896_d0wkog4xks5.css";
  @import "//at.alicdn.com/t/font_1452428_ayycl45ybab.css";

  .head {
    width: 100%;
    height: 3rem;
    box-sizing: border-box;
    background-color: #3190e8;
    color: white;
    padding: 0.7rem 0.3rem;
  }

  .head img {
    width: 2rem;
    height: 2rem;
    margin-top: -0.5rem;
  }

  .head span:nth-child(2) {
    margin-left: 30%;
    font-size: 1.2rem;
    font-weight: 600;
  }

  .down {
    width: 100%;
    display: flex;
    height: 2rem;
  }

  .u1 {
    margin-top: 1rem;
    background-color: white;
  }

  .ul-li {
    display: block;
    padding: 0.6rem;
    padding-bottom: 0;
  }

  .shop-li {
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

  shop-right {
    flex: auto;
  }

  .shop-right .shop-detail-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .shop-right {
    height: .6rem;
  }

  .shop-right .fee-distance {
    margin-top: .52rem;
    display: flex;
    justify-content: space-between;
    font-size: .5rem;
    color: #333;
  }

  .shop_title {
    width: 8.5rem;
    color: rgba(0, 0, 0, 0.7);
    padding-top: .01rem;
    font-size: 0.95rem;
    font-weight: 700;
  }

  .ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .premium {
    display: inline-block;
    font-size: .6rem;
    color: rgba(0, 0, 0, 0.7);
    background-color: #ffd930;
    padding: 0.1rem;
    border-radius: .1rem;
    margin-right: .2rem;
  }

  .supports {
    display: inline-block;
    font-size: 0.9rem;
    color: #999;
    border: .025rem solid #f1f1f1;
    padding: 0 .04rem;
    border-radius: .08rem;
    margin-left: .05rem;
  }

  .shop_detail_ul {
    display: flex;
    transform: scale(.8);
    margin-left: 6.7rem;
  }

  .fee-distance span:nth-child(1) {
    color: rgba(0, 0, 0, 0.6);
  }

  .fee-distance span:nth-child(2) {
    color: rgba(0, 0, 0, 0.6);
    margin-right: -5.1rem;
  }

  .fee-distance span:nth-child(3) {
    color: #3190e8;
    margin-right: 0.5rem;
  }

  .rating-order-num {
    margin: -0.2rem;
  }

  .p-span {
    color: #ff9a0d;
    font-size: 0.8rem;
    font-weight: 600;
  }

  .p-span1 {
    color: rgba(0, 0, 0, 0.8);
    font-size: 0.7rem;
  }

  .p-span2 {
    color: white;
    padding: 0 0.01rem;
    padding-top: 0.1rem;
    background-color: #3190e8;
    font-size: 0.2rem;
    float: right;
  }

  .p-span3 {
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

  .van-tree-select__nav-item {
    border: none;
  }

  .van-sidebar-item {
    height: 2.1rem;
    font-size: .6rem;
    line-height: .7rem;
  }

  .van-sidebar {
    color: #666;
  }

  .van-tree-select__item--active {
    color: #3190e8;
  }

  >>> .van-ellipsis {
    font-size: .7rem;
  }

  .van-cell {
    font-size: .7rem;
    padding: 0.3rem 1rem;
  }

  .van-icon {
    display: none;
  }

  .van-ellipsis {
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    height: 1.8rem;
    line-height: 1.8rem;
    padding-right: .5rem;
    border-bottom: .025rem solid #e4e4e4;
  }

  >>> .van-ellipsis span {
    color: #666;
  }

  .van-tree-select__nav {
    -webkit-flex: 2;
  }

  >>> .van-info {
    background-color: #ccc;
    right: -4rem;
    top: .5rem;
  }

  .item {
    padding: 0;
    margin: 0;
    list-style: none;
    font-style: normal;
    text-decoration: none;
    border: none;
    color: #333;
    font-weight: 400;
    font-family: Microsoft Yahei;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
  }

  .item p {
    line-height: 2.5rem;
    -ms-flex: auto;
    flex: auto;
    text-align: left;
    text-indent: .25rem;
    border-bottom: .025rem solid #e4e4e4;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-align: center;
    align-items: center;
    padding-left: .2rem;
    font-size: .6rem;
  }

  .pz {
    color: rgb(63, 189, 230);
    border-color: rgb(63, 189, 230) !important;
  }

  .bp {
    color: rgb(153, 153, 153);
    border-color: rgb(153, 153, 153) !important;
  }

  .xf {
    color: rgb(255, 78, 0);
    border-color: rgb(255, 78, 0) !important;
  }

  .kind {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    border: .025rem solid #eee;
    width: 4.9rem;
    height: 1.6rem;
    margin-right: .25rem;
    border-radius: .125rem;
    padding: 0 .3rem;
    margin-bottom: .25rem;
    text-align: center;
  }

  .text {
    width: .8rem;
    height: .8rem;
    font-size: .6rem;
    border: .025rem solid #e4e4e4;
    border-radius: .15rem;
    margin-right: .25rem;
    line-height: .8rem;
    padding: .1rem;
  }

  .psfs > p,
  .shopPro > p {
    font-size: .4rem;
    line-height: 1.5rem;
    height: 1.5rem;
    text-align: left;
    padding-left: .7rem;
  }

  .bottomBtn {
    background: #f5f5f5;
    display: flex;
    justify-content: space-around;
  }

  .clear {
    background: #fff;
    color: black;
  }

  .sure {
    background: #56d176;
    color: #fff;
  }

  .clear,
  .sure {
    margin: .4rem 0;
    width: 8.8rem;
    height: 2.2rem;
    outline: none;
    text-align: center;
    border: none;
    border-radius: 3px;
  }

  .btnP {
    padding-left: .5rem;
    border: .025rem solid #eee;
    width: 4.5rem;
    height: 1.4rem;
    margin-left: .6rem;
    border-radius: .125rem;
    padding: 0 .25rem;
    margin-bottom: .25rem;
  }

  .shopPro div {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    padding: 0 .5rem;
    background-color: #fff;
    font-size: .4rem;
    color: #333;
  }

  .van-dropdown-menu {
    height: 2.3rem;
  }

  .pz {
    color: rgb(63, 189, 230);
    border-color: rgb(63, 189, 230) !important;
  }

  .bp {
    color: rgb(153, 153, 153);
    border-color: rgb(153, 153, 153) !important;
  }

  .xf {
    color: rgb(255, 78, 0);
    border-color: rgb(255, 78, 0) !important;
  }

  .iconfont {
    margin-top: .5rem;
  }

  .icon-paixu {
    color: rgb(59, 135, 200);
  }

  .icon-huore {
    color: rgb(240, 115, 115);
  }

  .icon-ziyuan {
    color: rgb(230, 182, 26);
  }

  .icon-shijian {
    color: rgb(55, 199, 183);
  }

  .icon-position-o {
    color: rgb(42, 155, 211);
  }

  .icon-xingxing {
    color: rgb(235, 165, 59);
  }

  .item li {
    display: flex;
    justify-content: space-between;
    padding-left: .5rem;
    margin-top: .6rem;
  }

</style>
