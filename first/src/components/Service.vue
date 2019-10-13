<template>
    <div id="service">
      <div class="l_header">
        <router-link :to="{path:'/profile'}" class="l_head_l">
          <i class="iconfont icon-right"></i>
        </router-link>
        <span>服务中心</span>
      </div>
      <ul>
        <li class="l_phone">
          <router-link :to="{}">
            <i class="iconfont icon-kefu1 l_icon1"></i>
            <p>在线客服</p>
          </router-link>
          <router-link :to="{}">
            <i class="iconfont icon-dianhua l_icon2"></i>
            <p>在线客服</p>
          </router-link>
          <div style="clear:both;"></div>
        </li>
        <li>
          <p>热门问题</p>
        </li>
        <li class="l_li_fl" v-for="(v,i) in ccc" :key="i">
          <router-link :to="{path:'/detailquestion',query:{Ting:v,Cont:Fname[i]}}">
            <span>{{v}}</span>
            <i class="iconfont icon-aright l_icon_right"></i>
            <p style="clear:both;"></p>
          </router-link>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "Service",
      data(){
        return {
          Fname:[],
          Pro:[],
          ccc:[]
        }
      },
      created(){
        this.myHttp.get('/v3/profile/explain',(data)=>{
          this.Pro = data;
          // console.log(this.Pro);
          let keyArr = Object.keys(this.Pro);
          keyArr.splice(keyArr.indexOf("index"), 1);
          // console.log(keyArr);
          for (let i = 0; i < keyArr.length; i += 2) {
            //存储name
            this.ccc.push(this.Pro[keyArr[i + 1]]);
            //存储内容
            this.Fname.push(this.Pro[keyArr[i]]) ;
            // console.log(this.Fname);
          }
        }, (err) => {
          console.log(err);
        });
      }
    }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1296443_5zju5lsedfn.css";
  @import "//at.alicdn.com/t/font_1296443_3zgqw99j4bc.css";
  @import "//at.alicdn.com/t/font_1296443_i9yq3uhaihp.css";
  @import "//at.alicdn.com/t/font_1296443_fj2msj2q35.css";
  *{
    margin: 0;
    padding: 0;
  }

  /*头部*/
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

  /*热门问题*/
  ul{
    font-size: .88rem;
    color: #333;
    background: white;
  }
  li{
    border-bottom: 1px solid #f5f5f5;
    padding: 0 1.03rem;
  }
  .l_phone{
    text-align: center;
    padding: 0;
  }
  .l_phone a{
    width: 50%;
    float: left;
    display: block;
    border-right: 1px solid #f5f5f5;
    color: #666;
    padding: 0.92rem 0;
  }
  .l_icon2{
    color: rgb(106, 194, 11);
    font-size: 1.456rem;
  }
  .l_icon1{
    color: rgb(255, 123, 82);
    font-size: 1.456rem;
  }
  .l_phone p{
    margin-top:0.59rem;
  }

  ul li:nth-child(2) {
    font-size: 1.1rem;
    line-height:4.4375rem;
  }
  li span{
    float: left;
  }
  .l_icon_right{
    float: right;
    color: rgb(153, 153, 153);
  }
  .l_li_fl{
    line-height: 2.9rem;
  }
  .l_li_fl a{
    display: block;
    font-size: .88rem;
    color: #666;
  }

</style>
