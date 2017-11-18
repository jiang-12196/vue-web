<template>
  <div id="app">
    <div id="layout">
      <v-breadcrumb>
        <v-breadcrumb-item>
          <a href="./#">
          <v-icon :type="'home'"></v-icon>
            首页
          </a>
        </v-breadcrumb-item>
        <v-breadcrumb-item>
          <a href="./#/demo">
          <v-icon :type="'app'"></v-icon>
            Demo
          </a>
        </v-breadcrumb-item>
      </v-breadcrumb>
    </div>
    <router-view></router-view>
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
}

#layout {
  margin-bottom: 60px;
  font-size: 20px;
}

a {
  text-decoration: none;
  color: #d3d3d3;
  margin: 0 10px;
}

a:hover {
  color: #d4d4d4;
}
</style>

