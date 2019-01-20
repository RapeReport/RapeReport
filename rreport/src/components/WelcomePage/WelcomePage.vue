<template lang="html">
	<div>
	<header class="Title">Welcome</header>
	<div class="tile is-ancestor Description">
		<div class="tile is-vertical is-7 ">

		<div class="tile is-parent is-vertical">
	        <p style="font-size:1.2em">
				UCSC and Safe Sound are commited to helping victims of assualt. Safe Sound allows assault vicitims to unite and communicate anonymously with other vicitms of the same assaulter, to report an incident use the 'Add Report' Form. UCSC offers a variety of options to help cope and report incidents of assault. To get in person help we suggest you check out:
			</p>
			<br/>
			<a href="https://care.ucsc.edu/">
				<strong class="CARE" style="font-size:1.2em" >
					CARE
				</strong>
			</a>
			<p style="font-size:1.2em">
				CARE advocates will not share any information with Title IX, the police, parents, or anyone else without explicit permission. The only exceptions are instances of child abuse, elder or dependant abuse and imminent harm to self or others.
			</p>
			<br/>
			<a href="https://titleix.ucsc.edu/">
				<strong class="Title9" style="font-size:1.2em">
					The Title IX Office
				</strong>
			</a>
			<p style="font-size:1.2em">
				The Title IX Office is committed to fostering a campus climate in which members of our community are protected from all forms of sex discrimination, including sexual harassment, sexual violence, and gender-based harassment and discrimination.
			</p>
			<br/>
			<p style="font-size:1.2em">
				Vicitms may contact 
				<a href="https://shop.ucsc.edu/">
					<strong class="SHOP">
						SHOP
					</strong> 
				</a>

				(Student Health Outreach and Promotion), the UC Santa Cruz Women’s Center, Counseling and Psychological Services 
				<a href="https://caps.ucsc.edu/">
					<strong class="CAPS">
						(CAPS)
					</strong>
				</a>
				, or Employee Assistance Program 
				<a href="https://shr.ucsc.edu/benefits/eap/">
					<strong class="EAP">
						(EAP)
					</strong> 
				</a>
				for more information, emotional support, individual and group counseling.
			</p>
			<br/>
			<p style="font-size:1.2em">
				For off campus aid we suggest looking into the 
				<a href="http://www.monarchscc.org/">
					<strong class="Monarch">
						Monarch Services
					</strong>
				</a>
				and 
				<a href="https://www.wafwc.org/">
					<strong class="Walnut">
						Walnut Avenue Women’s Center
					</strong> 
				</a>
				provide services to victims of sexual assault, dating violence, domestic violence and stalking in Santa Cruz County.
			</p>
			<br/>
			<p style="font-size:1.2em">
				For more information we suggest you visit: <a href="https://police.ucsc.edu/community-information/victim-services.html">https://police.ucsc.edu/community-information/victim-services.html</a>
			</p>
	    </div>

	  </div>
	  <div class="tile is-vertical is-4">


	<div class="tile is-parent is-vertical">
			
		<ReportPanel v-on:newReport="newReportHandler($event)" />
        
        <article class="tile is-child notification is-danger">
			<p class="title">Previous Reports</p>
			<PrevReports :tableData="newData"/>
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
	    	newData: []


	    }
	  },
	  computed: {


	  },

	  methods: {
	  	newReportHandler(reportEvent){
	  		this.newData.push(reportEvent)
	  		   this.$toast.open({
                    message: reportEvent,
                    type: 'is-danger',
                    position: 'is-bottom',
                }) 

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

