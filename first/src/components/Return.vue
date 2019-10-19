<template>
    <div class="return">
      <h3>请重新进入</h3>
      <p>请返回后重新进入积分商城</p>
      <img src="../assets/retrylogin.png" alt="">
    </div>
</template>

<script>
    export default {
        name: "Return"
    }
</script>

<style scoped>
.return{
  text-align: center;
  margin-top: 12rem;
}
  .return>h3{
    color: #0d7fd5;
    font-weight: 900;
  }
  .return>p{
    font-size: 0.7rem;
    color: rgba(0,0,0,0.6);
  }
  .return>img{
    width: 40%;
  }
</style>
