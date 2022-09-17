<template>
	<!-- App.vue -->

	<v-app>
		<!-- <v-navigation-drawer app>

		</v-navigation-drawer> -->

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
			<router-view></router-view>
			</v-container>

			<v-container fluid>
				<AdsGoogle />
			</v-container>
		</v-main>

		<!-- <v-footer
			app
			fixed
			color="#AAAAFF"
			>
			<v-card
				tile
				width="100%"
				class="text-center"
				color="#CCCCFF"
			>
				<v-card-text class="white--text">
				{{ new Date().getFullYear() }} - <i> ikkarus </i>
				</v-card-text>
			</v-card>
		</v-footer> -->
	</v-app>
</template>

<script>

import AdsGoogle from './components/AdsGoogle.vue'

export default {
	name:'LembreMe',
	components: { AdsGoogle }
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
