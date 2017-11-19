<template>
  <div>
    <div id="layout">
      <v-breadcrumb>
        <v-breadcrumb-item>
          <a href="/">
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
  <home />
  </div>
</template>

<script>
  // import {vBreadcrumb} from 'vue-antd'
//  import Vue from 'vue'
  import home from './Home.vue'
  export default {
    name: 'layout',
    components: {
      home
    }
  }
</script>

<style scoped>
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
  color: #e3e3e3;
}
</style>
