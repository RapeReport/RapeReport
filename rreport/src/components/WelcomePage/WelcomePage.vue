<template lang="html">
	<div>
	<header class="Title">Welcome</header>
	<div class="tile is-ancestor Description">
		<div class="tile is-vertical is-6 ">

		<div class="tile is-parent is-vertical">
	        <p>
				UCSC and Safe Sound is commited to helping victims of assualt. UCSC offers a variety of options to help cope and report incidents of assault. To get in person help we suggest you check out:
			</p>
			<br/>
			<strong>
				CARE
			</strong>
			<p>
				CARE advocates will not share any information with Title IX, the police, parents, or anyone else without explicit permission. The only exceptions are instances of child abuse, elder or dependant abuse and imminent harm to self or others.
			</p>
			<br/>
			<strong>
				The Title IX Office
			</strong>
			<p>
				The Title IX Office is committed to fostering a campus climate in which members of our community are protected from all forms of sex discrimination, including sexual harassment, sexual violence, and gender-based harassment and discrimination.
			</p>
			<br/>
			<p>
				Vicitms may contact <strong>SHOP</strong> (Student Health Outreach and Promotion), the UC Santa Cruz Women’s Center, Counseling and Psychological Services <strong>(CAPS)</strong>, or Employee Assistance Program <strong>(EAP)</strong> for more information, emotional support, individual and group counseling.
			</p>
			<br/>
			<p>
				For off campus aid we suggest looking into the <strong>Monarch Services</strong> and <strong>Walnut Avenue Women’s Center</strong> provide services to victims of sexual assault, dating violence, domestic violence and stalking in Santa Cruz County.
			</p>
			<br/>
			<p>
				For more information we suggest you visit: <a>https://police.ucsc.edu/community-information/victim-services.html</a>
			</p>
	    </div>

	  </div>
	  <div class="tile is-vertical is-5">


	<div class="tile is-parent is-vertical">
			
			<ReportPanel/>
        
        <article class="tile is-child notification is-danger">
			<p class="title">Previous Reports</p>
			<PrevReports/>
        </article>
    </div>


	  </div>




	</div>
</div>


</template>


<script>
// import router from '@/router/index'

import ReportPanel from '@/components/WelcomePage/ReportPanel' 
import PrevReports from '@/components/WelcomePage/PrevReports' 


import firebase from 'firebase'
import db from '@/firebase/init'

export default {
	name: 'HomePage',
	components: {
		'ReportPanel':ReportPanel,
		'PrevReports':PrevReports,
	},
	props: {
		// user: Object,
	},
	data() {
	    return {


	    }
	  },
	  computed: {


	  },

	  methods: {
	  	

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
	left: .7em;
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








<!-- 


<template>

<div>	
<div class="tile is-ancestor pan">
	 <div class="tile is-parent " >
		<article class="tile is-child box">
			<p class="title">Welcome</p>
			<p>
				UCSC and Safe Sound is commited to helping victims of assualt. UCSC offers a variety of options to help cope and report incidents of assault. To get in person help we suggest you check out:
			</p>
			<br/>
			<strong>
				CARE
			</strong>
			<p>
				CARE advocates will not share any information with Title IX, the police, parents, or anyone else without explicit permission. The only exceptions are instances of child abuse, elder or dependant abuse and imminent harm to self or others.
			</p>
			<br/>
			<strong>
				The Title IX Office
			</strong>
			<p>
				The Title IX Office is committed to fostering a campus climate in which members of our community are protected from all forms of sex discrimination, including sexual harassment, sexual violence, and gender-based harassment and discrimination.
			</p>
			<br/>
			<p>
				Vicitms may contact <strong>SHOP</strong> (Student Health Outreach and Promotion), the UC Santa Cruz Women’s Center, Counseling and Psychological Services <strong>(CAPS)</strong>, or Employee Assistance Program <strong>(EAP)</strong> for more information, emotional support, individual and group counseling.
			</p>
			<br/>
			<p>
				For off campus aid we suggest looking into the <strong>Monarch Services</strong> and <strong>Walnut Avenue Women’s Center</strong> provide services to victims of sexual assault, dating violence, domestic violence and stalking in Santa Cruz County.
			</p>
			<br/>
			<p>
				For more information we suggest you visit: <a>https://police.ucsc.edu/community-information/victim-services.html</a>
			</p>
		</article>
	</div>
	<div class="tile is-parent">
		 <article class="tile is-child box">
			<p class="title">Add Report</p>
			<div is="ReportPanel"></div>
		</article>
	</div>
	<div class="tile is-parent">
		<article class="tile is-child box">
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

</style> -->

