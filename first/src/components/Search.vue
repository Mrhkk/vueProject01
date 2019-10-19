<template>
    <div class="search">
        <div class="l_header">
          <router-link :to="{path:'/profile'}" class="l_head_l">
            <i class="iconfont icon-zuojiantou"></i>
          </router-link>
          <span>搜索</span>
        </div>
      <div class="s-div">
        <input type="text" placeholder="请输入商家或美食名称" v-model="inputValue" @input="inputClick">
        <button class="btn btn-info" @click="sumb">提交</button>
        <i class="iconfont icon-cha div-i" v-if="show3" @click="cha"></i>
      </div>
      <div class="s-div1" v-if="show">
        <p>很抱歉！无搜索结果</p>
      </div>
      <div class="s-div2" v-if="show1">
        <h5>商家</h5>
        <ul>
          <li class="ul-li" v-for="(v,i) in data1" :key="i">
            <img :src="'//elm.cangdu.org/img/'+v.image_path" alt="">
            <div class="li-div">
              <p class="div-p"><span>{{v.name}}</span><span>支付</span></p>
              <p class="div-p1"><span>月售{{v.recent_order_num}}单</span></p>
              <p class="div-p2">{{v.float_minimum_order_amount}}元起送/距离{{v.distance}}公里</p>
            </div>
            <div class="clear"></div>
          </li>
        </ul>
      </div>
      <div class="s-div3" v-if="show2">
        <p>搜索历史</p>
        <ul>
          <li class="div3-li" v-for="(v,i) in inputdata" :key="i">
            <span>{{v}}</span>
            <i class="iconfont icon-cha div3-i" @click="delItem(v)"></i>
            <div class="clear"></div>
          </li>
          <li class="div3-li1" @click="delnull()">
            清空搜索历史
          </li>
        </ul>
      </div>
      <Footer></Footer>
    </div>
</template>

<script>
    import Footer from "./Footer";
    export default {
        name: "Search",
      components: {Footer},
      data(){
          return{
            //提示页面
            show:false,
            //数据页面
            show1:false,
            //历史页面
            show2:false,
            //输入框中的叉
            show3:false,
            //输入框中的值
            inputValue:"",
            //接收接口数据
            data1:[],
            //接收vuex中存储的输入框中的值
            inputdata:[]
          }
      },
      methods:{
          //提交按钮点击事件
          sumb(){
            //发起请求，获取数据
            this.myHttp.get("/v4/restaurants?geohash=31.22967,121.4762&keyword="+this.inputValue,(data)=>{
              //console.log(data);
              //接收数据
              this.data1=data;
              //触发searchShop方法存储输入框中的值
              this.$store.commit("searchShop",this.inputValue);
              //如果获取的数据的length字段不为空，显示加载数据页面
              if(this.data1.length>0){
                  this.show=false;
                  this.show1=!false;
                  this.show2=false;
              }else if(this.data1==""||this.data1.status=="0"){
                //如果获取的数据为空或sattus字段等于零，显示提示页面
                  this.show=!false;
                  this.show1=false;
                  this.show2=false;
              }else{
                console.log("我什么也不执行");
              }
             })
          },
        //输入框点击事件，
        inputClick(){
            //如果输入框置为空，从vuex里接收输入框里的值，并显示历史记录页面，
          if(this.inputValue==""){
            this.show=false;
            this.show2=!false;
            this.show1=false;
            this.inputdata=this.$store.state.myVuex.searchShop_data;
          }else{
            //否则，也就是不为空，显示输入框中的叉
            this.show3=!false;
          }
        },
        //X 把输入框置空，并把数据传给历史记录，展示历史记录页面
        cha(){
            if(this.inputValue!=""){
              this.inputValue="";
              this.show=false;
              this.show2=!false;
              this.show1=false;
              this.show3=false;
              this.inputdata=this.$store.state.myVuex.searchShop_data;
            }
        },
        //删除单个数据
        delItem(id) {
            this.$store.commit("deleteShop",id);
        },
        //清空数据
        delnull(){
          //用原数组接收一下
          this.inputdata=this.$store.commit("deleteShopnull");
        }
     }
    }
</script>

<style scoped>
  @import '//at.alicdn.com/t/font_1452428_ayycl45ybab.css';
  .l_header{
    height:2.86rem;
    background-color:#3190e8 ;
    color: white;
    font-size:1.17rem;
    text-align: center;
    line-height: 2.86rem;
    font-weight: 700;
  }
  .l_header i{
    float: left;
    margin-left: .5rem;
    color: white;
  }
  .s-div{
    width: 100%;
    text-align: center;
    padding: 1rem 0;
    background-color: white;
    position: relative;
  }
  .div-i{
    font-size: 0.9rem;
    position: absolute;
    right: 30%;
    top: 1.7rem;
  }
  .s-div>input{
    width: 70%;
    line-height: 2.6rem;
    font-size: 1rem;
    border: none;
    background-color: rgba(0,0,0,0.05);
    padding-left: 0.3rem;
  }
  .s-div>button{
    width: 20%;
    font-size: 1.2rem;
    background-color: #3190e8;
    margin-top: -0.3rem;
  }
  .s-div1{
    background-color: white;
    text-align: center;
    margin-top: 0.3rem;

  }
  .s-div1>p{
    font-size: 1rem;
    line-height: 3rem;
  }
  .s-div2>h5{
    font-size: 0.95rem;
    padding: 0.4rem 0.7rem;
    color: #000;
  }
  .ul-li{
    width: 100%;
    background-color: white;
    padding: 0.5rem 0.5rem 1rem 0.5rem;
  }
  .ul-li>img{
    width: 13%;
    float: left;
  }
  .li-div{
    width: 80%;
    float: left;
  }
  .li-div>p{
    margin: 0;
    padding-left: 0.3rem;
    font-size: 0.9rem;
    padding-bottom: 0.2rem;
  }
  .div-p>span:nth-child(2){
    color: rgb(255, 96, 0);
    border: 0.03rem solid rgb(255, 96, 0);
    margin-left: 0.5rem;
    border-radius: 0.8rem 0 0.8rem 0;
    font-size: 0.7rem;
  }
  .div-p2{
    border-bottom: 0.03rem solid rgba(0,0,0,0.3);
  }
  .clear{
    clear: both;
  }
  .s-div3>p{
    font-size: 0.8rem;
    padding: 0.4rem 0.8rem;
  }
  .div3-li, .div3-li1{
    background-color: white;
    padding: 0.8rem 0.5rem;
    margin-top: 0.1rem;
  }
  .div3-li>span{
    font-size: 1rem;
    float: left;
  }
  .div3-i{
    float: right;
    font-size: 0.9rem;
    margin-right: 0.5rem;
  }
  .div3-li1{
    text-align: center;
    font-size: 1.1rem;
    color: #3190e8;
    font-weight: 800;
  }
</style>
