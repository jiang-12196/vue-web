<template>  
  <v-breadcrumb>
    <v-breadcrumb-item href="./home"><v-icon :type="'home'"></v-icon>首页</v-breadcrumb-item>
    <v-breadcrumb-item href="./demo"><v-icon :type="'user'"></v-icon>Demon</v-breadcrumb-item>
  </v-breadcrumb>
  <child />
</template>

<script>
export default {
  name: 'layout'
}
</script>