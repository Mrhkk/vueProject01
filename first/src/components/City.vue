<template>
  <div class="swx1">
    <div class="swx1-one">
      <p class="p1"><span>ele.me</span><span>登录|注册</span></p>
      <p class="p2"><span>当前定位城市：</span><span>定位不准时，请在城市列表中选择</span></p>
      <hr>
      <p class="p3"></p>
    </div>
    <div class="swx1-two">
      <p class="p2">热门城市</p>
      <hr>
      <p class="p4"><span>上海</span><span>哈尔滨</span><span>南京</span><span>广州</span></p>
      <p class="p4"><span>厦门</span><span>杭州</span><span>天津</span><span>青岛</span></p>
    </div>
    <div class="swx1-two">
      <ul>
        <li v-for="(d,index) in arr1" :key="index" >
          <p class="p5">{{d}}</p>
          <div class="div1">
            <span class="span1" v-for="(v,i) in arr2[d]" >{{v.name}}</span>
          </div>
        </li>
      </ul>
    </div>
    <button @click="add">点击获取数据</button>

  </div>



</template>

<script>
  export default {
    name: "City",
    data(){
      return{
        arr1:[],
        arr2:[]
      }
    },
    methods:{
      add(){
        let arr=[];
        // this.axios.get("https://elm.cangdu.org/v1/cities?type=group").then((result)=>{
        //   console.log(result.data.A[0].name);
        //   this.arr2=result.data;
        //   for(let i in result.data){
        //     arr.push(i);
        //   }
        //   this.arr1=arr.sort();
        // })
        this.myHttp.get("/v1/cities?type=group",(data)=>{
          this.arr2=data;
          for(let i in data){
            arr.push(i);
          }
          this.arr1=arr.sort();
        });
      }
    }
  }
</script>

<style scoped>
  .p1{
    width: 100%;
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    background-color: blue;
    color: white;
    padding: 15px 10px;
  }
  .p2{
    width: 100%;
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    padding: 15px 10px;
    font-size: 12px;
  }
  .p3{
    width: 100%;
    padding: 20px 10px;
  }
  .swx1-one{
    border: 1px solid rgba(0,0,0,0.3);
    box-shadow: 1px 1px rgba(0,0,0,0.1);
  }
  .swx1-two{
    margin-top: 15px;
    border: 1px solid rgba(0,0,0,0.3);
    box-shadow: 1px 1px rgba(0,0,0,0.1);
  }
  .p4{
    width: 100%;
    display: flex;
    box-sizing: border-box;
    text-align: center;
    font-size: 14px;
    color: blue;
  }
  .p4 span{
    flex: 1;
    border: 1px solid rgba(0,0,0,0.3);
    padding: 7px 0px;
  }
  .p5{
    padding: 10px 10px;
    font-size: 12px;
  }
  .span1{
    box-sizing: border-box;
    display: inline-block;
    width: 25%;
    margin:-2px 0;
    border: .5px solid rgba(0,0,0,0.3);
    padding: 7px 0px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
  }
</style>
