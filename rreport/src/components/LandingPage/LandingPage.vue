<template lang="html">
	<div>
	<header class="Title">Safe Sound</header>
	<div class="tile is-ancestor Description">
	  <div class="tile is-vertical is-7 ">
	   


		<div class="tile is-parent is-vertical">
	        <article class="tile is-child notification is-info">
	          <p class="title Welcome">Did you know?</p>
	          <p class="subtitle Welcome">
	        	About  <span class="fact">85 to 90</span> percent of sexual assaults reported by college women are perpetrated by someone  <span class="fact">known to the victim </span>.
	          </p>
	          <p class="subtitle Welcome">
	        	 <span class="fact">One in 5 Women</span> and  <span class="fact">One in 16 Men</span> are sexually assaulted while in college.
	      	  </p>
	        </article>
	        <article class="tile is-child notification is-primary">
	          <p class="title Welcome">Our Goal</p>
	          <p class="subtitle Welcome">We am to unite victims of sexual assult in a safe space. We provide resources for you to find on campus help and aid you in reporting your assault to Title IX. Most importantly we give you a place to enter in your assulters name and find other victims of the assaulter. Your name is kept anonymous throughout this whole process and so are other victims. Our goals are to help you find relief, community, and help you to strengthen a case against a perpertrater by uniting with other victims.</p>
	        </article>
	        <article class="tile is-child notification is-danger">
	          <p class="title Welcome">Safety</p>
	          <p class="subtitle Welcome">We aim to ensure your safery by using only '.ucsc.edu' emails, we ensure that a perpertrater cannot report themselves in the system in order to converse with their victims.</p>
	        </article>
	    </div>



	  </div>
	  <div class="tile is-vertical is-4">
	   
	    <div class="tile is-parent">
	      <article class="tile is-child">
	      	<div class="tile">
    		<!-- Add content or other tiles -->
  			</div>
	        <div class="content">
		    	<section>
			        <b-tabs  b-tabs type="is-boxed" expanded class="is-dark" position="is-right" size="is-large">
			        <!-- v-model="activeTab"> -->
			            <b-tab-item label="Sign Up" style="padding-left: 2em">
			                <section>
						        <b-field class="Welcome" label="Name">
						            <b-input placeholder="Optional"  v-model="name" ></b-input>
						        </b-field>

						        <b-field class="Welcome" label="Email">
 									<div class="field has-addons">
 										<p class="control is-expanded">
									    <input class="input" type="text" placeholder="Cruzid" v-model="email" >
										  </p>
										  <p class="control">
										    <a class="button is-static">
										      @ucsc.edu
										    </a>
										  </p>  	
									</div>
						        </b-field>

						       

						        <b-field class="Welcome" label="Password"
						            type="is-danger"
						            :message='passwordLength'>
						            <b-input placeholder="password" type="password" v-model="password" maxlength="30"></b-input>
						        </b-field>


						        <b-field class="Welcome" label="Confirm Password"
						            type="is-danger"
						            :message='PasswordCheck'
						        >
						            <b-input placeholder="password" type="password" v-model="rePassword" maxlength="30"></b-input>
						        </b-field>

    						</section>
    						<a class="button Continue is-medium is-danger" @click="signUp()">Continue</a>
			            </b-tab-item>

			            <b-tab-item class="Welcome" label="Login"">
							<b-field label="Email">
					            <b-input type="email"v-model="email">
					            </b-input>
					        </b-field>

					        <b-field class="Welcome" label="Password">
					            <b-input type="password" v-model="password"></b-input>
						    </b-field>
						    <a class="button Continue is-medium is-primary" @click="login()">Login</a>
			            </b-tab-item>

			        </b-tabs>
			        
		    </section>


	        </div>
	      </article>
	    </div>
	  </div>




	</div>
</div>


</template>


<script>
// import router from '@/router/index'

// import {mapActions, mapGetters, mapMutations} from 'vuex'
// import HomeFeed from '@/components/home/HomeFeed'

import firebase from 'firebase'
import db from '@/firebase/init'

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
		user: {},
        email: '',
        name: '',
        password: '',
        rePassword: '',

        invalidEmail: false,
        emailInUse: false,
        invalidPassword: false,
        invalidRePassword: false,

       

	    }
	  },
	  computed: {
	    // ...mapGetters([
	    //   'getUserInfo',
	    // ]),
	    passwordLength: function(){
	    	if ( 8 > this.password.length )
	        	return ['Password is too short.','Password must have at least 8 characters']
	        return ''

	    },
	   	PasswordCheck: function(){
	       	if ( this.rePassword != this.password )
	        	return ["Passwords don't match"]
	        return ''
	    },

	  },

	  methods: {
	  	login() {
	  		firebase.auth().signInWithEmailAndPassword(this.email, this.password)
	  		.then( cred => {
          		this.$router.push('WelcomePage')
        	})
	  		.catch(function(error) {
			  // Handle Errors here.
			  var errorCode = error.code;
			  var errorMessage = error.message;
			  // ...
			});
	  	},
	  	signUp() {
			this.email = this.email + '@ucsc.edu'
			console.log(this.email)
			console.log(this.password)
			console.log(this.rePassword)

			if (this.password == this.rePassword) {
				firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
				.then( cred => {
          			this.$router.push('WelcomePage')
        		})
				.catch(function(error) {
					// Handle Errors here.
					var errorCode = error.code;
					var errorMessage = error.message;
					console.log(errorCode)
					console.log(errorMessage)
					// ...
				});
		    }
		}

	}
}
  

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Title{
	font: Helvetica;
	font-style: italic;
	font-weight: bold;
	font-size: 4em;
	text-align: left;
	position: relative;
	z-index: 2;
	left: 1em;
}
.Welcome{
	text-align: left;
}
.Continue{
	position: relative;
	z-index: 2;
	top: .4em;
}
.Login_B{
/*	position: relative;
	z-index: 2;
	left: 18em;*/
}
.fact{
	font-weight: bold;
}
.Login{
	text-align: right;
}
.Description{
	position: relative;
	z-index: 2;
	left: 3em;
}
</style>