<template>
    <div id="l_choose">
      <div id="l_head_top">
        <router-link class="l_text_left" :to="{path:'/confirmOrder'}">
          <i class="iconfont icon-right1"></i>
        </router-link>
        <span class="l_text_right">选择地址</span>
      </div>
      <i class="iconfont icon-duiha" v-if="arr"></i>
      <ul>
        <li v-for="(v,i) in arr">
         <router-link :to="{path:'/confirmOrder',query:arr}">
           <div class="l_top">
             <span>{{v.name}}</span>
             <span>{{v.sex}}</span>
             <span>{{v.phone}}</span>
           </div>
           <div class="l_bottom">
             <span v-if="isShow">{{v.label}}</span>
             <span>{{v.address}}</span>
           </div>
         </router-link>
        </li>
      </ul>
      <router-link class="l_add" :to="{path:'/addAddress'}">
        <i class="iconfont icon-jiahao"></i>
        <span>新增收货地址</span>
      </router-link>
    </div>
</template>

<script>
    export default {
        name: "ChooseAddress",
      data(){
          return {
            isShow:true,
          name:"",
            //电话
            phone:"",
            //地址
            // detailedAddress:"",
            //详细地址
            address:"",
            //标签
            label:"",
            //性别
            sex:"",
            arr:[]
        }
      },
      created(){
        this.arr=JSON.parse(localStorage.getItem("dataArr"));
      }
    }
</script>

<style scoped>
 #l_choose{
    width: 100%;
    height: 41.6875rem;
    background-color: #fff;
  }
  #l_head_top{
    width: 100%;
    color: white;
    font-size:1.17rem;
    position: relative;
    padding: 0.8rem 0 0.65rem 0.2rem;
    border-bottom: 1px solid rgba(255,255,255,0.3);
    box-sizing: border-box;
    background-color:#3190e8 ;
    text-align: center;
    position: fixed;
    top: 0;
    left: 0;
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
  .l_add{
    display: block;
    width: 100%;
    text-align: center;
    color: #3190e8;
    font-size: 1.03rem;
    position: fixed;
    bottom: 5rem;
    left: 0;
    line-height: 1.5rem;
  }
  .l_add i{
    font-size: 1.5rem;
  }
  .l_add span{
    padding-bottom: -0.6rem;
  }
.icon-duiha{
  position: absolute;
  top: 4.5rem;
  left: 1rem;
  color: #4cd964;
  font-size: 1.17rem;
}
  ul{
    margin-top: 2.86rem;
    background-color: #fff;
  }
  li{
    border-bottom: .031rem solid #f5f5f5;
    padding: 1.03rem 1.03rem 1.03rem 2.45rem;
    color: #333;
  }
  li a{
    color: #333;
  }
  .l_top{
    font-size: 1.03rem;
  }
  .l_top span:nth-child(1){
    font-size: 1.17rem;
    font-weight: bold;
  }
  .l_bottom span:nth-child(1){
    font-size: .75rem;
    color: #fff;
    border-radius: .1875rem;
    background-color: #ff5722;
    height: .75rem;
    line-height: .75rem;
    padding: 0 .29rem;
    margin-right: .44rem;
  }
  .l_bottom span:nth-child(2){
    font-size: .88rem;
    color: #777;
  }
</style>
