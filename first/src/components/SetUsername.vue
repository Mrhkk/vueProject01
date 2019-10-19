<template>
    <div id="l_setUsername">
      <div id="l_head_top">
        <router-link class="l_text_left" :to="{path:'/info'}">
          <i class="iconfont icon-zuojiankuohao"></i>
        </router-link>
        <span class="l_text_right">修改用户名</span>
      </div>
     <div class="l_center">
       <input type="text" placeholder="输入用户名" v-model="input">
       <p>用户名只能修改一次(5-24字符之间)</p>
       <button class="btn btn-info" @click="changeUsername()">确认修改</button>
     </div>
    </div>
</template>

<script>
    export default {
        name: "SetUsername",
      data(){
          return{
            input:''
          }
      },
      methods:{
        changeUsername(){
          //vuex存值
          this.$store.commit("deng",this.input);
          this.$router.push({path:'/info'});
        }
      }
    }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1296443_mvbvtwm32f.css";
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
  .l_center{
    color: #666;
    font-size: 1.03rem;
    padding: 0.59rem 0.59rem 0 0.59rem;
  }
  .l_center p{
    font-size: .75rem;
    padding: 0.59rem 0 1.465rem 0;
    margin-bottom: 0;
  }
  input{
    padding: 0.29rem 0.15rem;
    width: 100%;
    background: none;
    border: 1px solid #ddd;
    border-radius: 0.1rem;
  }
  .btn{
    background: #3190e8;
    border: 1px solid #3190e8;
    width: 100%;
    border-radius: 0;
  }
</style>
