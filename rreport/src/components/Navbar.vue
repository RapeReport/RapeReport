<template>
<nav class="navbar is-dark" aria-label="main navigation">
    <div class="navbar-brand">
        <div class="navbar-item">
            <router-link to="/">
                <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
            </router-link>
        </div>
    </div>
    <div class="navbar-menu">
        <div class="navbar-start">
            <div class="navbar-item">
                <a>Home</a>
            </div>
        </div>
        <div class="navbar-end">
            <div class="navbar-item">
                <a @click="onMessagesClick()">Messages</a>
            </div>
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
  },
  methods: {
      onMessagesClick() {
          this.$router.push('/messages')
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
