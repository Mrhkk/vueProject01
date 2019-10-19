<template>
  <div id="l_detail">
    <div id="l_head_top">
      <router-link class="l_text_left" :to="{path:'/Benefit'}">
        <i class="iconfont icon-zuojiantou"></i>
      </router-link>
      <span class="l_text_right">代金券说明</span>
    </div>
    <ul>
      <li v-for="(v,i) in NewArr" :key="i">
        <h3>{{v[0]}}</h3>
        <p>{{v[1]}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Coupon",
    data(){
      return{
        QandA:[],
        NewArr:[],
      }
    },
    created(){
      this.myHttp.get("/v3/profile/explain",(data)=>{
       // console.log(data);
        this.QandA = data.couponContent.split("###");
        for (let i = 1; i < this.QandA.length; i++) {
          this.QandA[i] = this.QandA[i].replace(/(?<=[\u4e00-\u9fa5]+)\s/g, "？");
          this.NewArr.push(this.QandA[i].split("？"));
        }
        //console.log(this.NewArr);
      });
    }
  }
</script>

<style scoped>
  /*头部*/
  @import "//at.alicdn.com/t/font_1452428_ayycl45ybab.css";
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
  /*详细*/
  ul{
    /*box-sizing: border-box;*/
    width: 100%;
    height: 38.55rem;
    color: #666;
    font-size: 0.88rem;
    background: white;
    margin: 0 auto;
    padding: 0 0.73rem 0.73rem 0.73rem;
  }
  li h3{
    font-weight: 400;
    font-size: 1.03rem;
    line-height: 2.875rem;
    margin: 0;
    color: #333;
  }
  li p{
    margin: 0;
  }

</style>
