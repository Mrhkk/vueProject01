<template>
  <div id="remarks">
    <div class="header">
      <router-link :to="{path:'/confirmOrder'}">
        <i class="iconfont icon-right1 icon1"></i>
      </router-link>
      <span>订单备注</span>
    </div>
    <div class="l_center">
      <p class="l_text">快速备注</p>
      <span class="l_text2">
        <button>不要辣</button>
        <button>少点辣</button>
        <button>多点辣</button>
      </span>
      <button class="l_left">不要香菜</button>
      <button class="l_left">不要洋葱</button>
      <button class="l_left">多点醋</button>
      <button class="l_left">多点葱</button>
      <span class="l_text2">
        <button>去冰</button>
        <button>少冰</button>
      </span>
      <div style="clear:both;"></div>
    </div>
    <div class="l_center">
      <p class="l_text">其他备注</p>
      <textarea placeholder="请输入备注内容(可不填)"></textarea>
    </div>
    <div class="bottom">
      <button @click="Revert">确定</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Remarks",
    methods:{
      Revert(){
        this.$router.push({path:'/confirmOrder'});
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

  .l_center{
    margin-top: 3.59rem;
    background: #fff;
    padding: 0 0.88rem 1.465rem 0.88rem;
    color: #333;
    font-size: .88rem;
  }
  .l_text{
    line-height: 2.9rem;
    font-size: 0.95rem;
  }
  .l_text2{
    border: 0.08rem solid #3190e8;
    border-radius: 0.25rem;
    float: left;
    margin: 0 0.88rem 0.88rem 0;
  }
  .l_text2 button{
    border: none;
    border-left: 0.08rem solid #3190e8;
    padding: 0.31rem 0.88rem;
    background: white;

  }
  .l_left{
    border: 0.08rem solid #3190e8;
    padding: 0.34rem 0.88rem;
    border-radius: 0.25rem;
    float: left;
    margin: 0 0.88rem 0.88rem 0;
    background: white;
  }
  .l_text2 button:nth-child(1){
    border-left: none;
  }
  textarea{
    width: 100%;
    background-color: #f9f9f9;
    border: .04rem solid #eee;
    resize: none;
    min-height: 5.625rem;
    border-radius: .25rem;
    font-size: .75rem;
    color: #666;
    padding: .625rem;
  }
  .bottom{
    width: 100%;
    padding: 0 1.03rem;
  }
  .bottom button{
    border: none;
    background-color: #4cd964;
    font-size: 1.03rem;
    width: 100%;
    line-height: 2.25rem;
    color: white;
    border-radius: 0.25rem;
  }
</style>
