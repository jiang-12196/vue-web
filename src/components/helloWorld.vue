<template>
<div class="container">
<h1>Hello World</h1>
<p>{{test}}</p>
</div>
</template>

<script>
  export default {
    name: 'Hello World',
    data () {
      return {
        test: '这是一个大的测试'
      }
    }
  }
</script>

<style>
.container {
    color: red;
}
</style>