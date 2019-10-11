
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
  *{
    padding:0;
    margin: 0;
  }
</style>
