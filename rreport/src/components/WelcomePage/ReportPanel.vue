<template>
	<article class="tile is-child notification is-link">
		<p class="title">Add Report</p>
		<section style='text-align: left' >


		<div class="columns is-mobile">

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
		      <div class="column">
				<strong>Assaulter</strong>
					<b-field class='fieldName' label="">
						<b-input placeholder="Name" v-model="assailant"></b-input>
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

import {mapGetters} from 'vuex'
import db from '@/firebase/init'
import firebase from 'firebase'

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
            handleAss(){
            	var docRef = db.collection("Assailants").doc(this.assailant);

				docRef.get().then(function(doc) {
				    if (doc.exists) {
				        console.log("Document data:", doc.data());
				    } else {
				        // doc.data() will be undefined in this case
				        this.createAssailant();
				    }
				}).catch(function(error) {
				    console.log("Error getting document:", error);
				});
            },
            createAssailant() {
            	db.collection("Assailants").doc(this.assailant).set({
            		Name: this.assailant,
            		Victims: firebase.firestore.FieldValue.arrayUnion(this.getAuth.uid)
            	}, { merge: true }).then(function() {
				    console.log(" Assailant Succ!");

				})
				.catch(function(error) {
				    console.error("Error Assailant: ", error);
				});
            },
			submitReport() {

// 				console.log('User',this.getAuth.uid)
// 				db.collection("reports").doc(this.assailant).set({
// 			    Victim: this.getAuth.uid,
// 			    Description: this.additionalInfo,
// 			    DateCreated: String(Date().now),
// 			    DateOfIncident: this.date,
// 			    Assailant: this.assailant,
// 				})
// 				.then(function() {
// 				    console.log("Document successfully written!");

// 				})
// 				.catch(function(error) {
// 				    console.error("Error writing document: ", error);
// 				});

// 				this.success();
// =======
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
			

				
				//this.createAssailant();
				this.additionalInfo = ''
			  	// this.assailant = ''
			  	this.date = null


			},
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


