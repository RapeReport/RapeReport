<template>
	<section style='text-align: left' >
		<b-field label="Assaulter">
			<b-input placeholder="Name" v-model="assailant" expanded></b-input>
		</b-field>

		<b-field label="Date of incident" >		   
			<b-datepicker
                placeholder="Type or select a date..."
                icon="calendar-today"
           		style='text-align: left'
           		v-model="date">
            </b-datepicker>
		</b-field>

		<b-field label="Additional information" >
			<b-input type="textarea" placeholder="Optional" v-model="additionalInfo" ></b-input>
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
			} 
		}
	  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

