<template>
<nav class="navbar is-dark" aria-label="main navigation">
    <div class="navbar-brand">
        <router-link class="navbar-item" to="/">
            <img src="@/assets/logo_transparent2.png" width="30" height="80">
            <p style="font-weight: bold; font-size: 20px; margin-left: .3em; "> SafeSound</p>
        </router-link>
    </div>

    <div class="navbar-menu" v-if="getAuth !== null && getAuth !== undefined">
        <div class="navbar-end">
            <div class="navbar-item">
                <a @click="onMessagesClick()">Messages</a>
            </div>
            <div class='navbar-item'>
                <a @click="onSignOutClick()">Sign Out</a>
            </div>

        </div>
    
    </div>

</nav>
</template>

<script>
import firebase from 'firebase'
import {mapGetters, mapMutations} from 'vuex'

export default {
  name: 'Navbar',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
      ...mapMutations([
          'setAuth'
      ]),
      onMessagesClick() {
          this.$router.push('/messages')
      },
      onSignOutClick() {
          firebase.auth().signOut()
          this.setAuth(null)
          

      }
  }, 
  computed: {
      ...mapGetters([
          'getAuth'
      ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>