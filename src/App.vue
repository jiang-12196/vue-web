<template>
  <div id="app">
    <router-view></router-view>
    <Corner />
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 50px;
}
</style>

