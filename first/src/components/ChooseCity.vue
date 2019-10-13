<template>
    <div id="choose">
      <div class="head"><router-link :to="{path:'/city'}"><span><img src="../../src/assets/back.png" alt=""></span></router-link><span>{{cName.name}}</span><span>切换城市</span></div>
      <div class="c-div">
        <input type="text" placeholder="输入学校、商务楼、地址" class="inp" v-model="userInfo">
        <button class="btn btn-info info"  @click="search()">提交</button>
      </div>
      <p class="c-p" v-if="sw">搜索历史</p>
<ul>
  <router-link :to="{path:'/food',query:v}" v-for="(v,i) in msgArr" :key="i" class="li1"><p>{{v.name}}</p><p>{{v.address}}</p></router-link>
</ul>
    </div>
</template>

<script>

    export default {
        name: "ChooseCity",
      data(){
          return {
            cName:{},
            userInfo:'',
            msgArr:[],
            sw:true
          }
      },
      methods:{
        search(){
          this.myHttp.get("/v1/pois?city_id="+this.cName.id+"&keyword="+this.userInfo+"&type=search",(data)=>{
            this.msgArr=data;
            //console.log(data);
            this.sw=false;
          })
        }
      },
      created(){
            this.cName=this.$route.query;
            console.log(this.cName);
      }
    }
</script>

<style scoped>
.head{
  width: 100%;
  height: 3rem;
  box-sizing: border-box;
  background-color: #3190e8;
  color: white;
  padding: 0.7rem 0.3rem;
}
.head img{
  width: 2rem;
  height: 2rem;
  margin-top: -0.5rem;
}
.head span:nth-child(2){
  margin-left:30%;
  font-size: 1.2rem;
  font-weight: 600;
}
.head span:nth-child(3){
  float: right;
  font-size: 1rem;
}
.c-div{
  margin-top: 0.8rem;
  background: white;
  text-align: center;
  padding-bottom: 1rem;
}
  .inp{
    width: 88%;
    height: 2.3rem;
    margin: 1rem auto;
    border-radius:3px;
    font-size: 1rem;
    border: 0.03rem solid rgba(0,0,0,0.2);
  }
  .info{
    font-size: 1rem;
    height: 2.3rem;
    display: block;
    width: 88%;
    background-color: #3190e8;
    margin: 0 auto;
  }
  .c-p{
    font-size: 0.8rem;
    margin: 0.5rem 1.2rem;
  }
  ul{
    background-color: white;
  }
  .li1{
    display: block;
    width: 100%;
    padding:0.5rem 1rem;
    border-top: 1px solid rgba(0,0,0,0.1);
  }
.li1 p:nth-child(1){
   font-size: 1rem;
  color: rgba(0,0,0,0.7);
 }
.li1 p:nth-child(2){
  font-size: 0.8rem;
  color: rgba(0,0,0,0.6);
}
</style>
