<template lang="html">
	<div>

		<a class="button is-white">White</a>
		<a class="button is-light">Light</a>
		<a class="button is-dark">Dark</a>
		<a class="button is-black">Black</a>
		<a class="button is-text">Text</a>

	</div>
</template>


<script>
// import router from '@/router/index'

// import {mapActions, mapGetters, mapMutations} from 'vuex'
// import HomeFeed from '@/components/home/HomeFeed'

// import firebase from 'firebase'
// import db from '@/firebase/init'

export default {
	name: 'HomePage',
	components: {
		// 'HomeFeed': HomeFeed,
	},
	props: {
		// user: Object,
	},
	data() {
	    return {
	        // open: false,
	        // newBio:'', 
	        // openPhoto: false,
	        // openFriends: false,
	        // friends: [],
        	// openWritePost: false,
        	// openPhotoPost: false
	    }
	  },
	  computed: {
	    // ...mapGetters([
	    //   'getUserInfo',
	    // ]),
	    // textRemaining: function(){
	    //     return 200 - this.newBio.length
	    //   },
	  },

	  methods: {

	    // toggle: function(){
	    //   this.newBio = this.getUserInfo.bio
	    //   this.open = !this.open;
	    // },
	    // toggleWritePost: function(){
	    //   this.openWritePost = !this.openWritePost;
	    // },
	   	// togglePhotoPost: function(){
	    //   this.openPhotoPost = !this.openPhotoPost;
	    // },
	    // saveNewBio(){
	    //   db.collection('users').doc(this.getUserInfo.uid).update({bio: this.newBio})
	    //   .then(() =>{
	    //           this.open = !this.open;
	    //   })
	    //   .catch(err => {
	    //     console.log(err)
	    //   })

	    // },
	    // togglePhoto: function(){
	    //   this.openPhoto = !this.openPhoto;
	    // },
	    // savePhoto(){
	    //   this.openPhoto = !this.openPhoto;
	    // },
	    // toggleFriends: function(){
	    //   this.openFriends = !this.openFriends;
	    // },

	}
}
  

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.FriendButton{
  position: relative;
  z-index: 2;
  top: 10px;
}
</style>