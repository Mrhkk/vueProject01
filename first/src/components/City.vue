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
      <p class="p4"><span v-for="(v,i) in cHotArr" :key="i">{{v.name}}</span></p>
    </div>
    <div class="swx1-two">
      <ul>
        <li v-for="(d,index) in cCharArr" :key="index" >
          <p class="p5">{{d}}</p>
          <div class="div1">
            <span class="span1" v-for="(v,i) in cGroupArr[d]" >{{v.name}}</span>
          </div>
        </li>
      </ul>
    </div>

  </div>



</template>

<script>
  export default {
    name: "City",
    data(){
      return{
        cCharArr:[],
        cGroupArr:[],
        cHotArr:[]
      }
    },
    created(){
      this.getCity();
      this.getHotCity();
    },
    methods:{
      getCity(){
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
          this.cGroupArr=data;
          for(let i in data){
            arr.push(i);
          }
          this.cCharArr=arr.sort();
        });
      },
      getHotCity(){
        this.myHttp.get("/v1/cities?type=hot",(data)=>{
          console.log(data);
          this.cHotArr=data;
        })
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
    padding: 1rem 0.6rem;
  }
  .p2{
    width: 100%;
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    padding: 1rem 0.6rem;
    font-size: 0.7rem;
  }
  .p3{
    width: 100%;
    padding: 1.2rem 0.6rem;
  }
  .swx1-one{
    border: 1px solid rgba(0,0,0,0.3);
  }
  .swx1-two{
    margin-top: 1rem;
    border: 1px solid rgba(0,0,0,0.3);
  }
  .p4{
    width: 100%;
    text-align: center;
    font-size: 0.9rem;
    color: blue;
  }
  .p4 span{
    box-sizing: border-box;
    display: inline-block;
    width: 25%;
    border: 1px solid rgba(0,0,0,0.3);
    padding: 0.5rem 0px;
  }
  .p5{
    padding: 0.6rem 0.6rem;
    font-size: 0.8rem;
    color: rgba(0,0,0,0.7);
  }
  .span1{
    box-sizing: border-box;
    display: inline-block;
    width: 25%;
    margin: -0.2rem 0;
    border: 1px solid rgba(0,0,0,0.3);
    padding: 0.5rem 0px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
    color: rgba(0,0,0,0.7);
    font-size: 1rem;
  }
</style>
