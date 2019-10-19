<template>
  <div id="choose">
    <div class="head">
      <router-link :to="{path:'/city'}"><span><img src="../../src/assets/back.png" alt=""></span></router-link>
      <span>{{cName.name}}</span>
      <span><router-link :to="{path:'/city'}" class="c-qie">切换城市</router-link></span>
    </div>
    <div class="c-div">
      <input type="text" placeholder="输入学校、商务楼、地址" class="inp" v-model="userInfo">
      <button class="btn btn-info info" @click="search()">提交</button>
    </div>
    <p class="c-p" v-if="sw">搜索历史</p>
    <ul v-if="!temp">
      <li class="li1" v-for="(v,i) in history" :key="i" @click="kli1(v)">
        <p>{{v.name}}</p>
        <p>{{v.address}}</p>
      </li>
    </ul>
    <ul v-if="temp">
      <li class="li1" v-for="(v,i) in msgArr" :key="i" @click="kli1(v)">
        <p>{{v.name}}</p>
        <p>{{v.address}}</p>
      </li>
    </ul>
  </div>
</template>

<script>

  export default {
    name: "ChooseCity",
    data() {
      return {
        cName: {},
        userInfo: '',
        msgArr: [],
        sw: true,
        his: [],//临时存储记录
        history: [],//取出历史记录遍历
        temp:false,
      }
    },
    methods: {
      search() {
        this.myHttp.get("/v1/pois?city_id=" + this.cName.id + "&keyword=" + this.userInfo + "&type=search", (data) => {
          this.msgArr = data;
          //console.log(data);
          this.sw = false;
        });
        this.temp=!this.temp
      },
      //  跳转路由 存储本地历史记录
      kli1(v) {
        //存储历史记录
        if (!localStorage.getItem("placeHistory")) {
          this.his.push({"name": v.name, "address": v.address});
        } else {
          this.his = JSON.parse(localStorage.getItem("placeHistory"));
          this.his.push({"name": v.name, "address": v.address});
        }
        localStorage.setItem("placeHistory", JSON.stringify(this.his));
        //跳转路由
        this.$router.push({path: '/food', query: v});
      }
    },
    created() {
      this.cName = this.$route.query;
      console.log(this.cName);
      this.history = JSON.parse(localStorage.getItem("placeHistory"));
    }
  }
</script>

<style scoped>

  .head {
    width: 100%;
    height: 3rem;
    box-sizing: border-box;
    background-color: #3190e8;
    color: white;
    padding: 0.7rem 0.3rem;
  }

  .head img {
    width: 2rem;
    height: 2rem;
    margin-top: -0.5rem;
  }

  .head span:nth-child(2) {
    margin-left: 30%;
    font-size: 1.2rem;
    font-weight: 600;
  }

  .head span:nth-child(3) {
    float: right;
    font-size: 1rem;
  }

  .c-div {
    margin-top: 0.8rem;
    background: white;
    text-align: center;
    padding-bottom: 1rem;
  }

  .inp {
    width: 88%;
    height: 2.3rem;
    margin: 1rem auto;
    border-radius: 3px;
    font-size: 1rem;
    border: 0.03rem solid rgba(0, 0, 0, 0.2);
  }

  .info {
    font-size: 1rem;
    height: 2.3rem;
    display: block;
    width: 88%;
    background-color: #3190e8;
    margin: 0 auto;
  }

  .c-p {
    font-size: 0.8rem;
    margin: 0.5rem 1.2rem;
  }

  ul {
    background-color: white;
  }

  .li1 {
    display: block;
    width: 100%;
    padding: 0.5rem 1rem;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }

  .li1 p:nth-child(1) {
    font-size: 1rem;
    color: rgba(0, 0, 0, 0.7);
  }

  .li1 p:nth-child(2) {
    font-size: 0.8rem;
    color: rgba(0, 0, 0, 0.6);
  }
  .c-qie{
    color: white;
  }
</style>
