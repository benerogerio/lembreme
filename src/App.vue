<template>
	<!-- App.vue -->

	<v-app>
		<!-- <v-navigation-drawer app>

		</v-navigation-drawer> -->

		<v-app-bar
			color="green"
			fixed
			app>
			<v-app-bar-title
				class="white--text">
				Anote
			</v-app-bar-title>
		</v-app-bar>

		<!-- Sizes your content based upon application components -->
		<v-main>

			<!-- Provides the application the proper gutter -->
			<v-container fluid>

			<!-- If using vue-router -->
			<router-view></router-view>
			</v-container>
		</v-main>

		<v-footer
			app
			fixed
			>
			<v-card
				flat
				tile
				width="100%"
				class="green lighten-1 text-center"
			>
				<v-card-text class="white--text">
				{{ new Date().getFullYear() }} — <strong>Vuetify</strong>
				</v-card-text>
			</v-card>
		</v-footer>
	</v-app>
</template>

<script>

export default {
	name:'App'
}
</script>


<style>

</style>
