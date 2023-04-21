<template>
	<div>
		<v-btn
			fixed
			top
			right
			fab
			color="#BBBBFF"
			elevation="2"
			@click="abreLista()"
			class="mt-12"
		>
			<v-icon color="white">mdi-arrow-u-left-top</v-icon>
		</v-btn>

		<v-divider
			light
			class="mb-2"></v-divider>

		<v-card
			class="mx-auto mb-3"
			max-width="400"
			elevation="5"
			rounded="20pt"
			>
			<v-list>
				<v-list-item>
					<v-list-item-content>
						<v-row>
							<v-col>
								<v-text-field
									class="sm"
									label="Título"
									hint="Informe o título da anotação"
									v-model="nota.titulo">
								</v-text-field>

								<v-textarea
									label="Descrição"
									hint="Informe a descrição da anotação"
									v-model="nota.desc"
									auto-grow>
								</v-textarea>

								<v-row>
									<v-checkbox class="ml-5" v-model="nota.lembrete" label="Lembre me?"></v-checkbox>

									<v-icon
										class="ml-2"
										color="#AAAAFF"
										dark
									>
										mdi-alarm
									</v-icon>
								</v-row>

								<div v-show="nota.lembrete">
									<v-row>
										<v-col>
											<v-dialog
												ref="dialog"
												v-model="modal"
												:return-value.sync="nota.date"
												persistent
												width="290px"
											>
												<template v-slot:activator="{ on, attrs }">
												<v-text-field
													v-model="nota.date"
													label="Data"
													prepend-icon="mdi-calendar"
													readonly
													v-bind="attrs"
													v-on="on"
												></v-text-field>
												</template>
												<v-date-picker
													v-model="nota.date"
													color="#AAAAFF"
													locale="pt-br"
													scrollable
												>
													<v-spacer></v-spacer>
													<v-btn
														text
														color="red"
														@click="modal = false"
													>
														Cancelar
													</v-btn>
													<v-btn
														text
														color="green"
														@click="$refs.dialog.save(nota.date)"
													>
													OK
												</v-btn>
												</v-date-picker>
											</v-dialog>
										</v-col>

										<v-col>
											<v-dialog
												ref="dialog2"
												v-model="modal2"
												:return-value.sync="nota.time"
												persistent
												width="290px"
											>
												<template v-slot:activator="{ on, attrs }">
												<v-text-field
													v-model="nota.time"
													label="Hora"
													prepend-icon="mdi-clock-time-four-outline"
													readonly
													v-bind="attrs"
													v-on="on"
												></v-text-field>
												</template>
												<v-time-picker
													v-if="modal2"
													v-model="nota.time"
													format="24hr"
													color="#AAAAFF"
													locale="pt-br"
													full-width
												>
													<v-spacer></v-spacer>
													<v-btn
														text
														color="red"
														@click="modal2 = false"
													>
														Cancelar
													</v-btn>
													<v-btn
														text
														color="green"
														@click="$refs.dialog2.save(nota.time)"
													>
														OK
													</v-btn>
												</v-time-picker>
											</v-dialog>
										</v-col>
									</v-row>
								</div>
							</v-col>
						</v-row>
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-card>

		<v-btn
			fixed
			bottom
			right
			fab
			color="red"
			elevation="2"
			@click="abreLista()"
			class="mr-15 mb-5"
		>
			<v-icon color="white">mdi-cancel</v-icon>
		</v-btn>

		<v-btn
			fixed
			bottom
			right
			fab
			color="green"
			elevation="2"
			@click="salvaNota()"
			class="mb-5"
		>
			<v-icon color="white">mdi-check</v-icon>
		</v-btn>
	</div>
</template>

<script>
export default {
data(){
	return{
		nota: {
			id: null,
			titulo: '',
			desc: '',
			lembrete: false,
			lembreteSave: false,
			date: null,
			time: null,
			attrs: null,
			on: null
		},
		idLembreMe: null,
		lembrete: false,
		date: null,
		modal: false,
		time: '08:00',
		modal2: false,
	}
},
methods:{
	abreLista(){
		this.$router.push('/')
	},
	salvaNota(){

		let idNota = null

		if(this.nota.lembrete && (!this.nota.date || !this.nota.time)){
			alert('Informe data e hora')
			return
		}

		// Insert ou update
		if(this.$route.params.id){
			const idx = this.$store.state.notas.map(nota => nota.id).indexOf(this.$route.params.id)
			this.nota.lembreteSave = this.nota.lembrete
			this.$store.state.notas[idx] = this.nota
			idNota = this.$route.params.id
		}else{
			let maiorId = this.$store.getters.getMaiorId
			this.nota.id = maiorId + 1
			this.nota.lembreteSave = this.nota.lembrete
			this.$store.state.notas.push(this.nota)
			idNota = this.nota.id
		}


		// Adiciona no google Calendar para notificação
		if(this.nota.lembreteSave){

			const objdata = new Date(this.nota.date +" "+ this.nota.time)

			const dia = objdata.getDate()
			const mes = objdata.getMonth()
			const ano = objdata.getFullYear()
			const hora = objdata.getHours()
			const minutos = objdata.getMinutes()

			// window.console.log(this.nota.date +" "+ this.nota.time)
			// window.console.log(dia + '/' + mes + '/' + ano + ' ' + hora + ':' + minutos)

			// prep some variables
			var startDate = new Date(ano,mes,dia,hora,minutos,0,0,0); // beware: month 0 = january, 11 = december
			var endDate = new Date(ano,mes,dia,hora,minutos,0,0,0);
			var title = this.nota.titulo
			var eventLocation = null; //Home
			var notes = this.nota.desc;

			// var success = function(message) { window.alert("Success ID: " + JSON.stringify(message)); }
			var error = function(message) { window.alert("Error: " + message); }

			var getIdLembreMe = (dados) => {
				return new Promise((resolve) => {
					var idLembreme = JSON.parse(JSON.stringify(dados)).filter(
					(obj) => obj.name == 'LembreMe'
					).shift().id;
					resolve(idLembreme);
				});
			};

			window.plugins.calendar.listCalendars((calendars) => {
				getIdLembreMe(calendars).then((idLembreMe) => {

					var calOptions = window.plugins.calendar.getCreateCalendarOptions()
					calOptions.calendarName = "LembreMe"
					calOptions.calendarColor = "#AAAAFF"
					calOptions.firstReminderMinutes = 1
					calOptions.calendarId = parseInt(idLembreMe)

					window.plugins.calendar.createEventWithOptions(title,eventLocation,notes,startDate,endDate,calOptions,null,error);
				});
			}, error);
		}

		// Salva no localstorage
		localStorage.dbAnote = JSON.stringify(this.$store.state.notas)

		this.nota = new Object
		this.$router.push(`/verNota/${idNota}`)
	},

	limpaDateTime(nota){
		if(nota.lembrete == false){
			this.nota.date = ''
			this.nota.time = ''
		}
	}
},
	computed:{
		console(){
			return{console}
		},
		window: () => window
	},
	created() {
		if(this.$route.params.id)
			this.nota = this.$store.getters.getNotaById(this.$route.params.id)
		else
			this.nota = new Object
	}

}
</script>

<style>


</style>
