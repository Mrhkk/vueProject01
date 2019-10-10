
<template>
  <div id="app">
    <Pro></Pro>
    <router-view/>
  </div>
</template>

<script>
import Pro from "./components/Pro";
export default {
  name: 'App',
  components: {Pro}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
