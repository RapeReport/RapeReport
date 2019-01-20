<template>
	<section style='text-align: left' >
		<b-field label="Assaulter">
			<b-input name="assulter-name" placeholder="Name" expanded></b-input>
		</b-field>

		<b-field label="Date of incident" >		   
			<b-datepicker
                placeholder="Type or select a date..."
                icon="calendar-today"
           		style='text-align: left'>
            </b-datepicker>
		</b-field>

		<b-field label="Additional information" >
			<b-input type="textarea" placeholder="Optional"></b-input>
		</b-field>

		<b-field >
			<p class="control">
				<button class="button is-danger" @click='submitReport'>
				  Submit Report
				</button>
			</p>
		</b-field>

	</section>
</template>


<script>

export default {
		data() {
		  return {
		  };
		},
		methods: {
			submitReport: function() {
				console.log("Submit button pressed");
			} 
		}
	  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

