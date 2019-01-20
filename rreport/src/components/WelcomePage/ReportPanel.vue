<template>
	<article class="tile is-child notification is-link">
		<p class="title">Add Report</p>
		<section style='text-align: left' >


		<div class="columns is-mobile">
		      <div class="column">
				<strong>Assaulter</strong>
					<b-field class='fieldName' label="">
						<b-input placeholder="Name" v-model="assailant"></b-input>
					</b-field>
		      </div>
		      <div class="column">
		        <strong>Date of incident</strong>
				<b-field label="" >		   
					<b-datepicker
		                placeholder="Type or select a date..."
		           		style='text-align: left'
		           		v-model="date">
		            </b-datepicker>
				</b-field>
		      </div>
		    </div>

		

		

		<strong>Additional information</strong>
		<b-field label="" >
			<b-input type="textarea" placeholder="Optional" v-model="additionalInfo" ></b-input>
		</b-field>

		<b-field >
			<p class="control">
				<button class="button" @click='submitReport'>
				  Submit
				</button>
			</p>
		</b-field>

	</section>
	</article>
</template>


<script>
import firebase from 'firebase'
import db from '@/firebase/init'
import { mapGetters } from 'vuex'
export default {
		data() {
		  return {
		  	additionalInfo: '',
		  	assailant: '',
		  	date: null,
		  };
		},
		methods: {
			success() {
                this.$toast.open({
                    message: 'Report submitted',
                    type: 'is-success'
                })
            },
			submitReport() {
				db.collection('reports').add({
					Assailant: this.assailant,
					DateCreate: Date.now(),
					DateOfIncident: this.date,
					Victim: this.getAuth.uid
				})
				.then(() => {
					this.success();
				})
				db.collection('Assailants').doc(this.assailant).get()
				.then(doc => {
					console.log(1)
					if(doc.exists) {
						console.log(2)

						db.collection('Assailants').doc(this.assailant).update({
							"Victims": firebase.firestore.FieldValue.arrayUnion(getAuth.uid) 
						})
					} else {
						console.log(3)
						db.collection('Assailants').doc(this.assailant).set({
							Name: this.assailant,
							Victims: [this.getAuth.uid]
						})

						.then(() => {
							console.log(4)
										  	this.assailant = ''

						})
						.catch(err => {
							console.log(5, err)
						})
						console.log(6)
					}
				})
				console.log(this.assailant);
				console.log(this.additionalInfo)
				console.log(String(this.date));

				this.additionalInfo = ''
			  	// this.assailant = ''
			  	this.date = null

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

/*.fieldName{
	color: red;
}*/
</style>


