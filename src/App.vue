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
				<Transition name="slide-fade" mode="out-in">
					<router-view></router-view>
				</Transition>
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

.slide-fade-enter-active {
  transition: all 0.2s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
