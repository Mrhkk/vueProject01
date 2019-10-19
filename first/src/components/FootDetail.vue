<template>
    <div id="footDetail">
      <div class="header">
        <router-link :to="{path:'/confirmOrder'}">
          <i class="iconfont icon-right1 icon1"></i>
        </router-link>
        <span>{{data1.name}}</span>
      </div>
      <div class="l_center">
        <img :src="'http://elm.cangdu.org/img/'+ data1.image_path">
        <ul>
          <li>{{data1.description}}</li>
          <li>{{data1.name}}</li>
          <li>
            <span class="l_score">评分</span>
            <van-rate
              v-model="value"
              allow-half
              void-icon="star"
              void-color="#d1d1d1"
              size="0.5rem"
              gutter="0"
              color="#ff9a0d"
            />
            <span>4.4</span>
          </li>
          <li>
            <span>月售{{data1.month_sales}}</span>
            <span class="l_price">售价￥{{data1.specfoods[0].price}} 起</span>
          </li>
          <li>
            <span>评论数497</span>
            <span>好评率{{data1.satisfy_rate}}</span>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: "FootDetail",
      methods:{

      },
      data(){
          return {
            data1:{}
          }
      },
      created(){
          this.data1=this.$route.query;
      },
      data() {
        return {
          value: 4.7
        }
      }
    }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  #footDetail{
    background: #fff;
    width: 100%;
    height: 41.6875rem;
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

  .l_center{
    margin-top: 2.8575rem;
  }
  .l_center img{
    width:100% ;
    height: 23.4375rem;
  }

  ul{
    margin-top: 0.73rem;
    padding:0 0.59rem 0.59rem 0.59rem;
    color: #666;
    font-size: 0.88rem;
  }

  ul li:nth-child(2){
    padding: 0.73rem 0 0.29rem 0;
    font-size: 1.03rem;
    color:#333;
  }
  ul li:nth-child(3){
    font-size: 0.81rem;
    color:#ff6600;
  }
  ul li:nth-child(4){
   margin: 0.44rem 0;
  }
.l_score{
  font-size: 0.88rem;
  color: #666;
}
.l_price{
  color: #ff6600;
}
</style>
