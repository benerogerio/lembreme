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
	methods:{
		runBackground(){

			clearInterval(this.itvl)
			this.itvl = setInterval(() => {

				if(this.notas.length){

				//captura a hora atual
				let dataAtual = new Date();

					this.notas.forEach(nota => {
						if(nota.hasOwnProperty("lembreteSave") && nota.lembreteSave && typeof nota.lembreteSave !== "undefined"
							&& nota.hasOwnProperty("date") && nota.hasOwnProperty("time")
							&& nota.date != "" && nota.time != ""){

							// Data do agendamento
							let dataNota = new Date(nota.date +" "+ nota.time)

							// Compara tempos
							if(dataNota.getTime() <= dataAtual.getTime()){

								// Dispara notificação
								window.cordova.plugins.notification.local.schedule({
									id: nota.id,
									title: nota.titulo,
									text: nota.desc,
									foreground: true
								});

								// Limpa dados no formulário
								let notaAux = nota
								notaAux.lembrete = false
								notaAux.lembreteSave = false
								notaAux.date = ''
								notaAux.time = ''

								// Salva na store
								const idx = this.$store.state.notas.map(nota => nota.id).indexOf(nota.id)
								this.notas[idx] = notaAux
								this.$store.state.notas[idx] = notaAux
								// Salva no localstorage
								localStorage.dbAnote = JSON.stringify(this.$store.state.notas)
							}
						}
					});
				}
			}, 10000);
		}
	},
	computed: {
		notas: {
			get() {
				return this.$store.state.notas
			},
			set(value) {
				this.$store.state.notas = value
				localStorage.dbAnote = JSON.stringify(this.$store.state.notas)
			}
		}
	},
	created(){

		window.cordova.plugins.notification.local.setDummyNotifications();

		// habilita o start do app automaticamente
		window.cordova.plugins.autoStart.enable();

		// habilita o app para funcionamento em segundo plano
		window.cordova.plugins.backgroundMode.enable();

		// window.cordova.plugins.backgroundMode.permissionOnTop();

		window.cordova.plugins.backgroundMode.disableBatteryOptimizations();

		window.cordova.plugins.backgroundMode.disableWebViewOptimizations();

		// window.cordova.plugins.backgroundMode.setDefaults({
		// 	title: "LembreMe",
		// 	text: "Rodando",
		// 	icon: 'ldpi.png', // this will look for icon.png in platforms/android/res/drawable|mipmap
		// 	color: 'AAAAFF', // hex format like 'F14F4D'
		// 	resume: true,
		// 	hidden: true,
		// 	bigText: true
		// })

		// Foreground service
		window.cordova.plugins.foregroundService.start('LembreMe', 'Rodando','ldpi');

		this.runBackground()

	},
	beforeCreate(){
		// Recupera dados do localstorage para o store
		if (localStorage.dbAnote) {
			this.$store.state.notas = JSON.parse(localStorage.dbAnote)
		}
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
