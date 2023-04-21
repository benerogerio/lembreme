<template>
	<!-- App.vue -->
	<v-app>
		<v-app-bar
			color="#AAAAFF"
			fixed
			app>
			<v-app-bar-title
				class="app-title white--text">
				LembreMe
			</v-app-bar-title>
		</v-app-bar>

		<!-- Sizes your content based upon application components -->
		<v-main class="app-main">

			<!-- Provides the application the proper gutter -->
			<v-container fluid>

				<!-- If using vue-router -->
				<v-fade-transition mode="out-in">
					<router-view></router-view>
				</v-fade-transition>
			</v-container>

			<v-container fluid>
				<AdsGoogle />
			</v-container>
		</v-main>
	</v-app>
</template>

<script>

import AdsGoogle from './components/AdsGoogle.vue'

export default {
	name:'LembreMe',
	components: { AdsGoogle },
	beforeCreate(){
		// Recupera dados do localstorage para o store
		if (localStorage.dbAnote) {
			this.$store.state.notas = JSON.parse(localStorage.dbAnote)
		}
	},
	created(){

		var error = function(message) { window.alert("Error: " + message); }
		var calOptions = window.plugins.calendar.getCreateCalendarOptions()
		calOptions.calendarName = "LembreMe"
		calOptions.calendarColor = "#AAAAFF"
		window.plugins.calendar.createCalendar(calOptions,null,error)

	}
}
</script>


<style>
.app-title {
	font-family: "Montez", Times, serif;
	font-size: 20pt;
	}

.app-main {
	font-family: "Montserrat", Times, serif;
	}
</style>
