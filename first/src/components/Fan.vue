<template>
  <div id="fan">
    <div class="l_masking"  v-if="isShow">
      <h2>肯德基(中山公园店)</h2>
      <p>
        <span class="center">优惠信息</span>
      </p>
      <div class="active">
        <span>减</span>
        <span>满30减5，满60减8(APP专享)</span>
      </div>
      <p>
        <span class="center">商家公告</span>
      </p>
      <div class="active">麦当劳首选</div>
      <span class="wrong" @click="isShow=!isShow">×</span>
    </div>

    <transition
@before-enter="beforeEnter"
@enter="enter"
@after-enter="afterEnter">
  <div class="ball" v-if="ballFlaf"></div>
</transition>
    <div class="fox" :style="{'background':'url(//elm.cangdu.org/img/'+headObj.image_path+')'}">
      <div class="f-div">
        <router-link :to="{path:'/food'}">
           <i class="iconfont icon-zuojiankuohao f-img"></i>
        </router-link>
      <div class="Dleft">
        <img :src="'//elm.cangdu.org/img/'+headObj.image_path" alt="" style="width: 4.5rem;height: 4.5rem;" class="tupian">
      </div>
      <div class="Dright">
        <span class="r-wz1" @click="isShow=!isShow"
        >{{headObj.name}}</span>
        <span class="r-wz2">商家配送 / 分钟送达 / {{headObj.piecewise_agent_fee?headObj.piecewise_agent_fee.tips:''}}</span>
        <span class="r-wz3">{{headObj.promotion_info}}</span>
      </div>
      <div class="huo">
        <i class="iconfont icon-jiankuohao jian"></i>
      </div>
      </div>
    </div>

    <div>
      <van-tabs v-model="active" color="#3190e8" title-active-color="#3190e8">
        <van-tab title="商品" id="Ghei">
          <div class="left">
            <van-sidebar v-model="activeKey">
              <van-sidebar-item :title="v.name" v-for="(v,i) in cateArr" :key="i" :href="'#a'+i"/>
            </van-sidebar>
          </div>
          <div class="right">
            <div v-for="(v,i) in cateArr" :key="i" :id="'a'+i">
              <h4 class="f-h1">{{v.name}}</h4><span class="h1-span">{{v.description}}</span>
              <van-card  v-for="(n,index) in v.foods"
                        :price="n.specfoods[0]?n.specfoods[0].price:0 + '起'"
                        :desc="n.description"
                        :title="n.name"
                        :thumb="'http://elm.cangdu.org/img/'+ n.image_path"
                        :key="index"
                        @click="tiao(n)"
              >
                <div slot="tags" class="month">
                  <span>月售{{n.month_sales}}</span>
                  <span>好评率{{n.satisfy_rate}}</span>
                  <span v-if="n.attributes[1]?true:false" class="f-span1">{{n.attributes[1].icon_name}}</span>
                  <div>
                    <span v-if="n.activity?true:false" class="f-span">{{n.activity.image_text}}</span>
                  </div>
                </div>
                <div slot="footer">
                  <!--选规格-->
                  <span class="f-div1" v-if="n.is_featured>0?true:false" @click.stop="cutP(n,index)">-</span>
                  <span style="color:black;" v-if="n.is_featured>0?true:false">{{n.is_featured}}</span>
                  <span class="f-div1" @click.stop="addP($event,n.item_id,n,index)"
>{{n.specifications.length>0&&n.specifications[0].name!=undefined?'选'+n.specifications[0].name:'+'}}</span>
                  <div id="specif"  v-if="n.item_id==show">
                <div>  <h5>{{n.specfoods[0].name}}</h5>
                    <van-icon name="cross"  @click="show = false"  color="#333"/>
                    <div class="clear"></div>
                  </div>
                    <p class="Dp">规格</p>
                    <p>
                      <van-tag plain type="primary" >{{n.specfoods[0].specs_name}}</van-tag>
                      <van-tag plain >{{n.specfoods.length > 1 && n.specfoods[1].specs_name!=undefined? n.specfoods[1].specs_name:''}}</van-tag>
                    </p>
                    <div id="spe">
                      <div>￥{{n.specfoods[0].price}}</div>
                      <van-tag type="primary" @click.stop="shopCart(n,index)">加入购物车</van-tag>
                    </div>

                  </div>
                </div>
                <!--规格显隐-->

              </van-card>
            </div>
          </div>
          <div class="clear"></div>
          <!--结算脚-->
          <div class="foot">
             <div class="fLeft">
            <div class="photoB">
              <i class="iconfont icon-gouwuchekong-copy Ti" :class="{'back':arr2.length>0?true:false}" @click="show1=!show1"></i>
              <span v-if="count==0?false:true">{{count}}</span>
            </div>
               <div class="tittle"><div><span>￥</span><span>{{getPrice}}</span></div>配送费￥5</div>
             </div>
            <div class="fRight1" v-if="count==0?true:false">还差20起送</div>
            <router-link class="fRight" v-if="count==0?false:true" :to="{path:'/confirmOrder',query:arr2}"><span>去结算</span></router-link>
          </div>
          <!--购物车-->
          <div class="l_mark" v-if="show1">
            <div class="product">
              <p class="proP">
                <span>购物车</span>
                <span @click="clearArr">
      <van-icon name="delete" class="delete"/>
      清空
    </span>
              </p>
              <div class="Ping" v-for="(v,i) in arr2" :key="i" v-if="v[2]<=0?false:true">
                <span>{{v[0]}}</span>
                <span @click="xJia(v,i)">+</span>
                <span>{{v[2]}}</span>
                <span @click="xJian(v,i)" >-</span>
                <span>￥{{v[1]}}</span>
                <span class="mo">{{v[3]}}</span>
                <div style="clear:both;"></div>
              </div>
            </div>
          </div>

        </van-tab>
        <van-tab title="评价">
          <div class="parent">
            <div class="pLeft">
              <p>{{pJiaObj.overall_score|percentC1(pJiaObj.overall_score)}}</p>
              <p>综合评价</p>
              <p>高于附近商家{{pJiaObj | percentC}}</p>
            </div>
            <div class="pRight">
              <p><span>服务态度</span><span><van-rate v-model="value" size="5" gutter="0"/></span><span>{{pJiaObj.service_score|percentC1(pJiaObj.service_score)}}</span>
              </p>
              <p><span>菜品评价</span><span><van-rate v-model="value" size="5" gutter="0"/></span><span>{{pJiaObj.food_score|percentC1(pJiaObj.food_score)}}</span></p>
              <p><span>送达时间</span><span>{{pJiaObj.deliver_time}}分钟</span></p>
            </div>
            <div class="clear"></div>
          </div>
          <div class="piJia">
            <div class="piJia1" v-for="(v,i) in pFenLei" :key="i">
              <button @click="changeC=v.name" :class="{'changeColor':v.name==changeC?true:false}">
                {{v.name}}({{v.count}})
              </button>
            </div>
          </div>
          <ul class="ul1">
            <li class="li1" v-for="(v,i) in userPing">
              <img :src="v.avatar==''?touDefuitPath:touPath+v.avatar+'.jpeg'">
              <div class="p1">
                <div class="oleft">
                  <p>{{v.username}}</p>
                  <p><span><van-rate v-model="value" size="5" gutter="0"/></span>{{v.time_spent_desc}}</p>
                  <p>
                    <img  v-for="(s,i) in   v.item_ratings" :src="s.image_hash?'https://fuss10.elemecdn.com/'+s.image_hash+'.jpeg':''" alt="">
                  </p>
                  <p class="sP"><span v-for="(s,i) in   v.item_ratings">{{s.food_name}}</span></p>
                </div>
                <div class="oright">{{v.rated_at}}</div>
              </div>
            </li>
          </ul>
        </van-tab>

      </van-tabs>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Fan",
    filters: {
      percentC(v) {
        console.log(v)
        if (v.compare_rating) {
          return (v.compare_rating - 0).toFixed(1) * 100 + "%";
        } else {
          return "100%";
        }
      },
      percentC1(v) {
        // console.log(v)
        if (v) {
          return (v - 0).toFixed(1);
        } else {
          return "4.7";
        }
      },
    },
    data() {
      return {
        Id: "",
        headObj: {},
        active: "0",
        activeKey: 0,
        cateArr: [],
        pJiaObj: {},
        pFenLei: [],
        changeC: "全部",
        userPing: [],
        touDefuitPath: 'http://elm.cangdu.org/img/default.jpg',
        touPath: 'https://fuss10.elemecdn.com/',
        value:5,
       show:"",
        show3:"",
        arr2:[],
        show1:false,
        ballFlaf:false,
        isShow:false

      }
    },
    methods: {
      tiao(n){
        this.$router.push({path:'/footDetail',query:n});
      },
      cutP(i,index){
        if(i.is_featured <= 0){
          i.is_featured = 0;
        }else {
          i.is_featured--;
          this.arr2.forEach((v,i1)=>{
            if (v[0]==i.specfoods[0].name){
              this.arr2.splice(i1,1);
            }
          })
          this.arr2.push([i.specfoods[0].name,i.specfoods[0].price,i.is_featured,i.specfoods[0].specs_name]);

        }
      },
      shopCart(i,index){
        i.is_featured++;
        // console.log(i);
        this.arr2.forEach((v,i1)=>{
          if (v[0]==i.specfoods[0].name){
            this.arr2.splice(i1,1);
          }
        })
        this.arr2.push([i.specfoods[0].name,i.specfoods[0].price,i.is_featured,i.specfoods[0].specs_name]);
        this.show = false
        this.ballFlaf=!this.ballFlaf;
      },
      addP(event,id,i,index){
        if (event.srcElement.innerText=="选规格") {
          this.show=id;

        }else {
        i.is_featured++;
        // this.total++;
        // this.sump += this.products[i].foods[index].specfoods[0].price ;
         this.arr2.forEach((v,i1)=>{
           if (v[0]==i.specfoods[0].name){
             this.arr2.splice(i1,1);
            }
          })

          this.arr2.push([i.specfoods[0].name,i.specfoods[0].price,i.is_featured,""]);
        // console.log(this.arr2);
          this.ballFlaf=!this.ballFlaf;
      }

    },
      xJian(n,i){
       this.arr2[i][2]=n[2]-1;
       this.cateArr.forEach((v,j)=>{
          v.foods.forEach((n1,i1)=>{
            if(n1.specfoods[0].name==n[0]){
              n1.is_featured--;
            }
          })
        })
        this.arr2=[...this.arr2];
        console.log(n[2]);

      },
      xJia(n,i){
        this.arr2[i][2]=n[2]+1;
        this.cateArr.forEach((v,j)=>{
          v.foods.forEach((n1,i1)=>{
            if(n1.specfoods[0].name==n[0]){
              n1.is_featured++;
            }
          })
        })
        this.arr2=[...this.arr2];
        console.log(n[2]);
      },
      clearArr(){
        this.arr2=[];
        this.cateArr.forEach(v=>{
          v.foods.forEach(j=>{
            j.is_featured=0;
          })
        })
      },
      beforeEnter(el){
        el.style.transform="translate(0,0)";
        // el.style.left = "240px";
        // el.style.top = "240px";
      },
      enter(el,done){
        el.offsetWidth;
        // el.style.left = "50px";
        // el.style.top = "576px";
        el.style.transform="translate(-350px,576px)";
        el.style.transition="all 1s ease"
        done();
      },
      afterEnter(el){
        this.ballFlaf=!this.ballFlaf;
      }
    },


    computed:{
      getPrice(){
        let price=0;
        console.log(this.arr2);
        for(let i=0;i<this.arr2.length;i++){
         price+=this.arr2[i][1]*this.arr2[i][2];
       }
       return price;
      },
      count(){
        let count=0;
        for(let i=0;i<this.arr2.length;i++){
          count+=this.arr2[i][2];
        }
        return count;
      }
    },
    created() {
      this.Id = this.$route.query.id;
      // console.log(this.Id)
      this.myHttp.get("/shopping/restaurant/" + this.Id, (data) => {
        this.headObj = data;
        // console.log(data);
      });
      this.myHttp.get("/shopping/v2/menu?restaurant_id=" + this.Id, (data) => {
        // console.log(data);
        this.cateArr = data;
      })
      this.myHttp.get("/ugc/v2/restaurants/" + this.Id + "/ratings/scores", (data) => {
        // console.log(data);
        this.pJiaObj = data;
      })
      this.myHttp.get("/ugc/v2/restaurants/" + this.Id + "/ratings/tags", (data) => {
        // console.log(data);
        this.pFenLei = data;
      })
      this.myHttp.get("/ugc/v2/restaurants/1/ratings?offset=0&limit=10", (data) => {
        // console.log(data);
        this.userPing = data;
      })
    }
  }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1452428_34f7mceb29j.css";
  html,body{
    width: 100%;
    height: 100%;
  }

  /*购物车*/
  .l_mark{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0,.3);
    z-index: 20;
  }
  .product{
    width: 100%;
    position: fixed;
    bottom: 8%;
    background-color: white;
    font-size: 1.03rem;
  }
  .proP{
    display: flex;
    justify-content: space-between;
    background: #eceff1;
    line-height:2.2rem ;
    padding: 0.4rem;
  }
  .Ping{
    padding:0.4rem 1.03rem;
    height: 3rem;
    font-size: 1.1rem;
  }
  .Ping span:nth-child(1){
    display: inline-block;
    width:6rem;
    /*font-size: 1.5rem;*/
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .Ping span:nth-child(5){
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 0 2rem ;
    font-weight: 700;
    color: #f60;
    float: right;
  }
  .Ping span:nth-child(4){
    display: inline-block;
    width:1.16rem;
    height: 1.16rem;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    border-radius: 50%;
    background-color: white;
    border: 1px solid #3190e8 ;
    color: blue;
    float: right;
   text-align: center;
    line-height: 1.16rem;
  }
  .Ping span:nth-child(3){
    text-align: center;
    display: inline-block;
    width: 1.3rem;
    float: right;
  }
  .Ping span:nth-child(2){
    display: inline-block;
    width:1.16rem;
    height: 1.16rem;
    overflow: hidden;
    text-overflow: ellipsis;
   text-align: center;
    white-space: nowrap;
    border-radius: 50%;
    background-color: #3190e8;
    border: 1px solid #3190e8 ;
    color: white;
    float: right;
    line-height: 1.16rem;
  }
 .Ping .mo{
    font-size: 0.75rem;
   display: block;
   margin-top: -0.6rem;
  }

  .fan{
    position: relative;
  }
  .van-card__title {
    font-size: 1.05rem;
    font-weight: 600;
    margin-top: 0.2rem;
    color: rgba(0,0,0,0.7);
  }

  .van-card {
    font-size: 0.7rem;
    color: white;
  }

  .fan1 {
    color: #fff;
    background-color: rgba(119, 103, 137, .43);
  }

  .van-card__desc {
    margin-top: 0.2rem;
    color: #7d7e80;
  }
.clear{
  clear: both;
}
.Ghei{
  height: 100%;
}
  .left {
    display: inline-block;
    margin: 0;
    width: 22%;
    float: left;
    /*overflow: scroll;*/
  }

  .right {
   display: inline-block;
    width: 77%;
    height: 40rem;
    float: right;
    overflow: scroll;
  }

  h1 {
    display: inline-block;
  }

  .month {
    color: #333;
  }

  .parent {
    width: 100%;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: 0.3rem 0;
    color: #666;
    background-color: white;
    font-size: 0.95rem;
  }

  .pLeft {
    width: 44%;
    float: left;
    text-align: center;
  }

  p {
    margin: 0.1rem;
  }

  .pLeft p:nth-child(1) {
    font-size: 1.3rem;
    color: #f60;
  }

  .pRight {
    width: 56%;
    float: left;
    font-size: 1.04rem;
  }

  .clear {
    clear: both;
  }

  .pRight p span:nth-child(3) {
    color: #f60;
  }

  .piJia {
    font-size: 0.9rem;
    padding: 0.5rem 0.2rem;
    background-color: white;
    margin: 0.5rem 0 0 0.1rem;
  }

  .piJia1 {
    display: inline-block;
    margin: 0.15rem;
  }

  .piJia1 button {
    background-color: #ebf5ff;
    color: #6d7885;
    border-radius: 0.5rem;
    padding: 0.15rem;
  }

  .piJia1 .changeColor {
    background-color: #3190e8;
    color: #fff;
    z-index: 100;
  }

  .li1 {
    display: flex;
    padding: 1rem 0rem 1rem 0.7rem;
    color: #666;
  }

  .li1 img {
    width: 2rem;
    height: 2rem;
  }

  .p1 {
    display: flex;
    flex: 1;
    justify-content: space-between;
    margin-left: 0.8rem;
  }

  .oleft {
    flex: 70%;
  }
  .oleft img{
    margin: 0.2rem 0.2rem 0.5rem 0.2rem;
    width: 3rem;
    height: 3rem;

  }
  .oright {
    flex: 30%;
    text-align: center;
  }
  .sP span{
    display: inline-block;
    width: 4rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    border: 1px solid rgba(0,0,0,0.1);
    margin: 0.2rem;
  }
  .ul1{
    font-size: 0.9rem;
    padding: 0.5rem 0.2rem;
    background-color: white;
    border-top: 1px solid rgba(0,0,0,0.1);
    border-bottom: 1px solid rgba(0,0,0,0.1);
  }
  .foot{
    position: fixed;
    color: #fff;
    bottom: 0;
    left: 0;
    width: 100%;
    box-sizing: border-box;
    height: 8%;
    display: flex;
    z-index: 1000;
  }
  .fLeft{
    flex: 68%;
    height: 100%;
    background-color: black;
    display: flex;
  }
  .photoB{
    flex: 30%;
    position: relative;
  }
  .photoB span{
    display: inline-block;
    background-color: red;
    font-size: 1rem;
    padding: 0.3rem;
    border-radius: 50%;
    position: absolute;
    left: 4rem;
    top: -2rem;
  }
  .tittle{
    box-sizing: border-box;
    flex: 70%;
    padding: 0 0.4rem;
  }
  .tittle div:nth-child(1){
    font-size: 1.5rem;
  }
  .tittle div:nth-child(2){
    font-size: 0.4rem;
  }
  .fRight{
    flex: 32%;
    height: 100%;
    background-color: #4cd964;
    display: flex;
    justify-content:center ;
  }
  .fRight1{
    display: block;
    flex: 32%;
    height: 100%;
    background-color: black;
    display: flex;
    justify-content:center ;
    font-size: 1.3rem;
    line-height: 3.5rem;
  }
  .fRight>span{
display: inline-block;
    margin: auto 0;
  }
  .Ti{
    display: inline-block;
    padding: 0.4rem;
    /*background-color:#3190e8;*/
    font-size: 2.2rem;
    border-radius: 50%;
    margin:-1.5rem 0 0 30%;
    background-color:#3d3d3f;
  }
  .back{
    background-color:#3190e8
  }
  .f-div1{
    background-color: #3190e8;
    padding: 0.3rem 0.2rem;
    border-radius: 15%;
    text-align: center;
    display: inline-block;

  }
  .f-span1{
    color: rgb(240, 115, 115);
    padding: 0 0.05rem;
    border: 0.05rem solid rgb(240, 115, 115);
    border-radius: 50%;
    float: right;
  }
  >>>.van-card{
    background-color: white;
  }
  >>>.van-ellipsis{
    font-size: 1rem;
  }
  >>>.van-tabs__wrap{
    height:3rem;
  }
 >>> .van-card__thumb{
   width: 3rem;
   margin-top: -1rem;
 }
  >>>.van-card__desc{
    font-size: 0.8rem;
  }
  >>>.van-card__price{
    margin-top:0.3rem;
    font-size: 1rem;
    font-weight: 600;
  }
.f-span{
  display: inline-block;
  padding: 0 0.1rem;
  color: #ee0a24;
  border: 0.032rem solid #ee0a24;
  border-radius: 10%;
  margin: 0.3rem;
}
  .fox{
    height: 6rem;
    display: flex;
    justify-self: left;
    background: rgba(0,0,0,0.2);
    position: relative;

  }
  .f-div{
    width: 100%;
    height:100%;
    background-color:rgba(0,0,0,0.2);
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  }
  .f-img{
    position: absolute;
    width: 2rem;
    top: 0;
    left: 0.2rem;
    font-size: 1.1rem;
    font-weight: 700;
    color: white;
  }
  .jian{
    position: absolute;
    top: 2rem;
    right: 0.9rem;
    color: white;
    font-size: 1.3rem;
  }
  .f-h1{
    font-size: 1.1rem;
    line-height: 3rem;
    display: inline-block;
    margin: 0;
    font-weight: 600;
    color:rgba(0,0,0,0.6);
    padding-left: 0.8rem;
  }
  .h1-span{
    font-size: 0.8rem;
    padding-left: 0.5rem;
    color:rgba(0,0,0,0.5);
  }
  .Dleft{
    width: 22.5%;
    float: left;
    padding: 0.6rem 0.6rem;
  }
  .tupian{
    width: 6rem;
    height: 6rem;
  }

  .Dright{
    float: left;
    display: flex;
    flex-direction: column;
    width: 65%;
    height: 6rem;
    color: white;
  }

  .r-wz1{
    display: inline-block;
    margin-top: 0.5rem;
    margin-left: 0.5rem;
    font-size: 1.2rem;
    font-weight: 600;
  }
  .r-wz2{
    margin-top: 0.3rem;
    margin-left: 0.5rem;
    font-size:0.5rem;
  }

  .r-wz3{
    margin-top: 0.5rem;
    margin-left: 0.5rem;
    font-size:0.5rem;
  }
  .huo{
    width: 2rem;
    height: 6rem;

  }

  #specif{
    background-color: white;
    position: fixed;
    left: 10%;
    top: 40%;
    width: 80%;
    font-size: 1.5rem;
    text-align: center;
    z-index: 100;
    padding:  0.5rem;
    border: 1px solid cyan;
  }
  #specif h5{
    float: left;
    margin-left: 5rem;
    color: #333;
  }
  #specif i{
    float: right;
    border: 0px;
  }
  #specif p{
    font-size: 1rem;
    text-align: left;
    margin: 0.5rem 0;
  }
  #spe{
    font-size: 0.9rem;
    text-align: right;
    margin: 0.5rem 0;
  }
  #spe div{
    color: orangered;
    float: left;
  }
  #spe span{
    float: right;
    font-size: 0.8rem;
  }
  .Dp{
    color: #333;
  }

  .ball{
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    z-index: 100;
    left: 18rem;
    top: 15rem;
    /*left: 3rem;*/
    /*top: 36rem;*/
  }
  .l_masking{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #262626;
    z-index: 200;
    padding: 1.83rem;
    text-align: center;
    color: #fff;
    font-size: 0.75rem;
  }
  h2{
    font-weight: 400;
    font-size: 1.17rem;
    margin-bottom: 3rem;
  }

  .center{
    border:1px solid #666 ;
    padding:0.29rem 0.59rem ;
    border-radius: 0.8rem;
  }
  .active{
    margin: 1.5rem 0;
    text-align: left;
  }
  .active span:nth-child(1){
    background: rgb(240, 115, 115);
    padding:0 0.029rem;
    border-radius: 2px;
  }
  .wrong{
    box-sizing: border-box;
    width: 50px;
    height: 50px;
    position: fixed;
    bottom: 2rem;
    left: 45%;
    font-size: 2rem;
    color: #777;
    border: 1px solid #666;
    border-radius: 50%;
  }

</style>
