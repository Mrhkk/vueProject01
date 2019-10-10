<template>
    <div id="header">
  <router-link :to="{path:'/swx'}">点击去child1</router-link>
    </div>
</template>

<script>
    export default {
        name: "Pro"
    }
</script>

<style scoped>
#header{
  width: 100%;
  height: 200px;
  background-color: gold;
  text-align: center;
}
</style>
