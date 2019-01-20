<template>
<nav class="navbar is-dark" aria-label="main navigation">
    <div class="navbar-brand">
        <router-link class="navbar-item" to="/">
            <img src="@/assets/logo_transparent2.png" width="30" height="80">
            <p style="font-weight: bold; font-size: 20px; margin-left: .3em; "> SafeSound</p>
        </router-link>
      </div>
          <div class='navbar-end'>
          <div class='navbar-item' @click="signOut" >Sign Out </div>

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
import firebase from 'firebase'
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
      },
      signOut() {
        firebase.auth().signOut().then(function() {
          console.log("logout Succ");
        }).catch(function(error) {
          console.log("logout FAIL");
      });  
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>