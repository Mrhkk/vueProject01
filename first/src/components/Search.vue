<template>
    <div class="search">
        <div class="l_header">
          <router-link :to="{path:'/profile'}" class="l_head_l">
            <i class="iconfont icon-right"></i>
          </router-link>
          <span>服务中心</span>
        </div>
      <div class="s-div">
        <input type="text" placeholder="请输入商家或美食名称">
        <button class="btn btn-info" @click="sumb">提交</button>
      </div>
      <div class="s-div1" v-if="show">
        <p>很抱歉！无搜索结果</p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Search",
      data(){
          return{
            show:false
          }
      },
      methods:{
          sumb(){
            this.show=!false;
          }
      }
    }
</script>

<style scoped>
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
</style>
