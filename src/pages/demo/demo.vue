<template>
    <div class="home-page">
      <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: 'demo'
}
</script>

<style>
html{
  height: 100%;
}
body{
  margin: 0;
  padding: 0;
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
  background-color: #fff;
}
</style>
