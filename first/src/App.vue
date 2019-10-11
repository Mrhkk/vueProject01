
<template>
  <div id="app">
    <City></City>
  </div>
</template>

<script>

import City from "./components/City";
export default {
  name: 'App',
  components: {City}
}
</script>

<style>
  *{
    padding:0;
    margin: 0;
    list-style: none;
    text-decoration: none;
  }
  body,html{
    width:23.44rem ;
    height: 41.69rem;
  }
</style>
