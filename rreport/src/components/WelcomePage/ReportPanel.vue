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
				this.success();
				console.log(this.assailant);
				console.log(this.additionalInfo)
				console.log(String(this.date));

				this.additionalInfo = ''
			  	this.assailant = ''
			  	this.date = null

			} 
		}
	  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/*.fieldName{
	color: red;
}*/
</style>


