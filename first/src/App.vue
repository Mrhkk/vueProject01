<template>
  <div id="app">
   <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Footer from "./components/Footer";

export default {
  name: 'App',
  components: {Footer},
}
</script>

<style>
  @import "//at.alicdn.com/t/font_1452428_4by149x4xtx.css";
  @import "//at.alicdn.com/t/font_1296443_s3aurqc132.css";
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
