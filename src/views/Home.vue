<template>
  <div>
    <v-list>

      <v-subheader inset>Minhas Anotações</v-subheader>

      <v-divider
        light
        class="mb-2"></v-divider>

      <v-card
        class="mx-auto"
        elevation="5"
        max-width="400"
        >
        <v-list-item-group
          mandatory
          color="indigo"
        >

        <template v-if="notas.length > 0">
        <draggable v-model="notas" group="notas" :options="{delay:400}" @start="drag=true" @end="drag=false" >
          <v-list-item
            v-for="nota in notas"
            :key="nota.id"
          >
            <v-list-item-avatar @click="verNota(nota.id)">
              <v-icon
                color="#AAAAFF"
                dark
              >mdi-note-text-outline</v-icon>
            </v-list-item-avatar>

            <v-list-item-content @click="verNota(nota.id)">
              <v-list-item-title v-text="nota.titulo"></v-list-item-title>

              <v-list-item-subtitle v-text="nota.desc"></v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-icon v-if="nota.lembrete">
              <v-icon
                color="#AAAAFF"
                dark
              >mdi-alarm</v-icon>
            </v-list-item-icon>

            <v-list-item-action>
              <v-btn icon
                color="red lighten-2"
                dark
                @click="dialog = true; excluiNota(nota.id)"
              >
                <v-icon
                  color="red lighten-2"
                >mdi-trash-can</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </draggable>
        </template>
        <template v-else>
          <v-list-item>
            Nada aqui ainda.
            <v-icon
                color="#AAAAFF"
                >mdi-emoticon-wink-outline</v-icon>
          </v-list-item>
        </template>
        </v-list-item-group>
      </v-card>

    </v-list>

    <v-btn
        dark
        fixed
        bottom
        right
        fab
        elevation="5"
        class="mb-5"
        color="#AAAAFF"
        @click="novaNota()"
      >
      <v-icon>mdi-plus</v-icon>
    </v-btn>

    <v-dialog
      v-model="dialog"
      persistent
      max-width="290"
    >
      <v-card>
        <v-card-title class="text-h5">
          Excluir
        </v-card-title>
        <v-card-text>Deseja exlcuir a nota?</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="red darken-1"
            text
            @click="dialog = false"
          >
            Cancelar
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="confirmaExcluiNota()"
          >
            Excluir
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>

</template>

<script>

import draggable from 'vuedraggable'

export default {
	name: 'home',
	components: {
		draggable,
	},
	data() {
		return{
			dialog: false,
			idNota: null,
			itvl: 0
		}
	},
	methods:{
		novaNota(){
			this.$router.push('/novaNota')
		},
		verNota(idNota){
			this.$router.push(`/verNota/${idNota}`)
		},
		excluiNota(idNota){
			if(idNota){
				this.idNota = idNota
			}
		},
		confirmaExcluiNota(){

			let idNota = this.idNota
			let array = this.$store.state.notas.map(nota => nota.id)
			let idx = array.indexOf(idNota)
			if (idx > -1) { // only splice array when item is found
				this.$store.state.notas.splice(idx, 1); // 2nd parameter means remove one item only
			}

			localStorage.dbAnote = JSON.stringify(this.$store.state.notas)

			this.dialog = false
		},
		runBackground(){

			// clearInterval(this.itvl)
			// this.itvl = setInterval(() => {

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
								// window.cordova.plugins.notification.local.schedule({
								// 	id: nota.id,
								// 	title: nota.titulo,
								// 	text: nota.desc,
								// 	foreground: true
								// });

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
			// }, 1000);
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

		// var success = function(message) { alert("Success ID: " + JSON.stringify(message)); }
		// var error = function(message) { alert("Error: " + message); };

		// window.plugins.calendar.listCalendars(success,error)


		this.runBackground()
	},
}
</script>

<style>

</style>
