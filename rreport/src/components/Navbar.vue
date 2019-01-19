<template>
<nav class="navbar is-dark" aria-label="main navigation">
    <div class="navbar-brand">
        <router-link class="navbar-item" to="/">
            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
        </router-link>
    </div>
    <div class="navbar-menu">
        <div class="navbar-start">
            <a>Home</a>
        </div>
        
    </div>
    

</nav>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
