<template>
    <div id="address">
      <div id="l_head_top">
      <router-link class="l_text_left" :to="{path:'/info'}">
        <i class="iconfont icon-zuojiankuohao"></i>
      </router-link>
      <span class="l_text_right">编辑地址</span>
      <span class="l_text_u" @click="adit">{{add1}}</span>
    </div>
      <hr style="border: 0.05rem solid #d9d9d9; margin:0.59rem 0 0.59rem 0 ;">
      <ul>
        <li class="a-li" v-for="(v,i) in dizhiInfo" :key="i">
          <p>{{v.name}}</p>
          <p>{{v.phone}}</p>
          <i class="iconfont icon-cha div3-i" v-if="del" @click="deladdress(v)"></i>
        </li>
      </ul>
      <div class="l_bot">
        <span>新增地址</span>
        <router-link :to="{path:'/add'}">
          <i class="iconfont icon-aright"></i>
        </router-link>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Address",
      data(){
          return{
            add1:'',
            //地址信息
            dizhiInfo:[],
            //删除按钮
            del:false
        }
      },
      created(){
        this.add1="编辑";
        //接收编辑的信息
        this.dizhiInfo=this.$store.state.myVuex.dizhi_data;
      },
      methods:{
          //编辑点击事件
        adit(){
          if(this.add1=='编辑'){
            this.add1="完成";
            //显示删除按钮
            this.del=!false;
          }else{
            this.add1="编辑";
            //隐藏删除按钮
            this.del=false;
          }
      },
        deladdress(id){
          this.$store.commit("deldizhi",id);
        },
    }
    }
</script>

<style scoped>
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
  .l_text_u{
    display: block;
    font-size: 1.2rem;
    position: absolute;
    right: 0.5rem;
    top: 0.9rem;
    color: #fff;
  }
  .l_bot{
    background: white;
    font-size: 1.03rem;
    padding: 0.29rem 0.59rem;
    border: 0.05rem solid #d9d9d9;
    line-height: 2.1rem;
  }
  .l_bot a{
    color: rgb(216, 216, 216);
    float: right;
    font-weight: 700;
  }
  .a-li{
    border-top: 0.03rem solid rgba(0,0,0,0.3);
    background-color: white;
    font-size: 0.9rem;
    padding: 0.4rem 1rem;
    color: rgba(0,0,0,0.7);
    position: relative;
  }
  .a-li:nth-child(1){
    background-color: #fff8c3;
  }
  .div3-i{
    position: absolute;
    font-size: 0.8rem;
    top: 1.7rem;
    right: 1rem;
    color: red;
  }
</style>
