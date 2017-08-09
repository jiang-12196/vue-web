<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!--<router-view></router-view>-->
    <helloWorld></helloWorld>
  </div>
</template>

<script>
import helloWorld from './components/helloWorld'
export default {
  components: {helloWorld}
}

</script>

