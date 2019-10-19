<template>
  <div id="app">
   <router-view></router-view>
  </div>
</template>

<script>
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Footer from "./components/Footer";

export default {
  name: 'App',
  // components: {Footer},
}
</script>

<style>
  @import "//at.alicdn.com/t/font_1452428_ayycl45ybab.css";
  @import "//at.alicdn.com/t/font_1296443_mvbvtwm32f.css";
  *{
    padding:0;
    margin: 0;
    list-style: none;
    text-decoration: none;
    font-family: "黑体";

  }
  body,html{
    font-size: 16px;
    background-color:#f5f5f5 ;
    width: 100%;
  }
</style>
