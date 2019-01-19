<template>
  <div id="app">
    <img src="./assets/logo.png">


    <a class="button is-white">White</a>
    <a class="button is-light">Light</a>
    <a class="button is-dark">Dark</a>
    <a class="button is-black">Black</a>
    <a class="button is-text">Text</a>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
