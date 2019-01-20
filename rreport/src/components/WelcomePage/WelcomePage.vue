<template lang="html">
	<div>
	<header class="Title">Welcome</header>
	<div class="tile is-ancestor Description">
		<div class="tile is-vertical is-7 ">

		<div class="tile is-parent is-vertical">
	        <p style="font-size:1.3em">
				UCSC and Safe Sound is commited to helping victims of assualt. UCSC offers a variety of options to help cope and report incidents of assault. To get in person help we suggest you check out:
			</p>
			<br/>
			<strong class="CARE" style="font-size:1.3em">
				CARE
			</strong>
			<p style="font-size:1.3em">
				CARE advocates will not share any information with Title IX, the police, parents, or anyone else without explicit permission. The only exceptions are instances of child abuse, elder or dependant abuse and imminent harm to self or others.
			</p>
			<br/>
			<strong class="Title9" style="font-size:1.3em">
				The Title IX Office
			</strong>
			<p style="font-size:1.3em">
				The Title IX Office is committed to fostering a campus climate in which members of our community are protected from all forms of sex discrimination, including sexual harassment, sexual violence, and gender-based harassment and discrimination.
			</p>
			<br/>
			<p style="font-size:1.3em">
				Vicitms may contact <strong class="SHOP">SHOP</strong> (Student Health Outreach and Promotion), the UC Santa Cruz Women’s Center, Counseling and Psychological Services <strong class="CAPS">(CAPS)</strong>, or Employee Assistance Program <strong class="EAP">(EAP)</strong> for more information, emotional support, individual and group counseling.
			</p>
			<br/>
			<p style="font-size:1.3em">
				For off campus aid we suggest looking into the <strong class="Monarch">Monarch Services</strong> and <strong class="Walnut">Walnut Avenue Women’s Center</strong> provide services to victims of sexual assault, dating violence, domestic violence and stalking in Santa Cruz County.
			</p>
			<br/>
			<p style="font-size:1.3em">
				For more information we suggest you visit: <a>https://police.ucsc.edu/community-information/victim-services.html</a>
			</p>
	    </div>

	  </div>
	  <div class="tile is-vertical is-4">


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
.CARE{
	color: #7000E7;
}
.Title9{
	color: #9700E7;
}
.SHOP{
	color: #BD00E7;
}
.CAPS{
	color: #D200E7;
}
.EAP{
	color: #E700E0;
}
.Monarch{
	color: #E700BD;
}
.Walnut{
	color: #EE1082;
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

