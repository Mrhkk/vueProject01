<template>
    <div id="invoice">
      <div class="header">
        <router-link :to="{path:'/confirmOrder'}">
          <i class="iconfont icon-right1 icon1"></i>
        </router-link>
        <span>选择发票抬头</span>
      </div>
      <div class="center">
        <span>{{msg}}</span>
        <i class="iconfont icon-duiha" :class="{green:isShow}" @click="isShow=!isShow"></i>
      </div>
      <div class="bottom">
        <p class="button" @click="SetReturn">确定</p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Invoice",
      data(){
          return{
            isShow:false,
            msg:'不需要开发票'
          }
      },
      methods:{
        SetReturn(){
          this.$router.push({path:'/confirmOrder',query:{msg:this.msg}});

        }
      }
    }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
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

  .center{
    color: #333;
    background: white;
    padding: 0 1.03rem;
    margin: 3.5875rem 0 0.73rem 0;
    line-height: 3rem;
  }
  .icon-duiha{
    color: #999;
    font-size: 1.17rem;
    float: right;
  }
  .green{
    color: #4cd964;
  }
  .bottom{
    font-size: 0.875rem;
    color: #fff;
    text-align: center;
    margin: 0.73rem 1.03rem;
  }
  .button{
    background: #4cd964;
    width: 100%;
    line-height:2rem;
    border-radius: .25rem;
  }
</style>
