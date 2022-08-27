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

			<!-- <v-toolbar
			color="light-blue"
			light
			extended
			> -->

				<!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

				<!-- <v-toolbar-title class="white--text">
					My files
				</v-toolbar-title> -->
				<!-- <v-spacer></v-spacer>
				<v-btn icon>
					<v-icon>mdi-magnify</v-icon>
				</v-btn>
				<v-btn icon>
					<v-icon>mdi-view-module</v-icon>
				</v-btn> -->
				<!-- <template v-slot:extension>
					<v-btn
						fab
						color="green accent-2"
						bottom
						left
						absolute
						@click="dialog = !dialog"
						>
						<v-icon>mdi-plus</v-icon>
					</v-btn>
				</template> -->
			<!-- </v-toolbar> -->
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
				<v-card-text>
					<v-btn
							color="white"
							class="mx-4"
							icon
						>
							<v-icon size="24px">
								mdi-home
							</v-icon>
					</v-btn>

					<v-btn
						color="white"
						class="mx-4"
						icon
					>
						<v-icon size="24px">
							mdi-playlist-plus
						</v-icon>
					</v-btn>
				</v-card-text>

				<v-divider></v-divider>

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
