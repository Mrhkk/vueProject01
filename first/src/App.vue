
<template>
  <div id="app">
    <City></City>
    <router-view/>
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
</style>
