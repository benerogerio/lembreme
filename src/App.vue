<template>
	<!-- App.vue -->

	<v-app>
		<v-navigation-drawer app>
			<!-- -->
		</v-navigation-drawer>

		<v-app-bar color="green" app>
			<v-app-bar-title>
				Meu app
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

		<v-footer app>
			<!-- -->
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
