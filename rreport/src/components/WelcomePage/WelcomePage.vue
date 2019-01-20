<template >

<div>	
<div class="tile is-ancestor pan">
	 <div class="tile is-parent " >
		<article class="tile is-child box">
			<p class="title">Welcome</p>
			<p>Did shy say mention enabled through elderly improve. As at so believe account evening behaved hearted is. House is tiled we aware. It ye greatest removing concerns an overcame appetite. Manner result square father boy behind its his. Their above spoke match ye mr right oh as first. Be my depending to believing perfectly concealed household. Point could to built no hours smile sense. 

			Throwing consider dwelling bachelor joy her proposal laughter. Raptures returned disposed one entirely her men ham. By to admire vanity county an mutual as roused. Of an thrown am warmly merely result depart supply. Required honoured trifling eat pleasure man relation. Assurance yet bed was improving furniture man. Distrusts delighted she listening mrs extensive admitting far.</p>
		</article>
	</div>
	<div class="tile is-parent">
		 <article class="tile is-child box">
			<p class="title">Add Report</p>
			<div is="ReportPanel"></div>
		</article>
	</div>
	<div class="tile is-parent">
		<article class="tile is-child box">>
			<p class="title">Previous Reports</p>
			<div is="PrevReports"></div>
		</article>
	</div>
	</div>
 

			
		</div>
	</div>
	
</div>
</template>


<script>
import ReportPanel from '@/components/WelcomePage/ReportPanel' 
import PrevReports from '@/components/WelcomePage/PrevReports' 

export default {
	components: {
		'ReportPanel':ReportPanel,
		'PrevReports':PrevReports,
	},
	data() {
		return {
		};
	},
	methods: {
					
	}
}


</script>

<style scoped>
.Description{
		position: relative;
		
}
.pan {

	text-align: left;
	position: relative;
	margin: 1em;
}

</style>

