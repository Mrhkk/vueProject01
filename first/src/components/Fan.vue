<template>
    <div id="fan">
      <van-card

        desc="商家配送／分钟送达／配送费¥5"

        :title="headObj.name"
        :thumb="'//elm.cangdu.org/img/'+headObj.image_path"
      >
      <div slot="tags">
       公告：{{headObj.promotion_info}}
      </div>
      </van-card>
    </div>
</template>

<script>
    export default {
        name: "Fan",
      data(){
          return {
            Id:"",
            headObj:{}
          }
      },
      created(){
          this.Id=this.$route.query.id;
          console.log(this.Id)
          this.myHttp.get("/shopping/restaurant/"+this.Id,(data)=> {
          this.headObj=data;
          console.log(data);
        })
      }
    }
</script>

<style scoped>
  .van-card__title{
    font-size: 1rem;
    color: white;
  }
</style>
