<template>
  <div>
    <div class="home">
      <img src="../assets/logo.png">
      <h1>{{ msg }}</h1>
      <h2>My name is Jiang!</h2>
      <div>
        <img src="../../static/movie.gif" alt="img"/>
      </div>
    </div>
  </div>
</template>

<script>
  import Corner from './Corner.vue'
  export default {
    name: 'home',
    data () {
      return {
        msg: 'Welcome to My Web Site'
      }
    },
    components: {
      'Corner': Corner
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

h1 {
  margin-bottom: 10px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
