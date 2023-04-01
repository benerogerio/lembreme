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

		<v-btn
			fixed
			top
			right
			fab
			color="#BBBBFF"
			elevation="2"
			@click="editaNota()"
			class="mt-12 mr-15"
		>
			<v-icon color="white">mdi-playlist-edit</v-icon>
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
								readonly
								v-model="nota.titulo">
							</v-text-field>

							<v-textarea
								readonly
								v-model="nota.desc"
								auto-grow>
							</v-textarea>

							<!-- <div v-show="nota.lembrete">
								<v-row>
									<v-col>
										<v-text-field
											v-model="nota.date"
											label="Data"
											prepend-icon="mdi-calendar"
											readonly
										></v-text-field>
									</v-col>
									<v-col>
										<v-text-field
											v-model="nota.time"
											label="Hora"
											prepend-icon="mdi-clock-time-four-outline"
											readonly
										></v-text-field>
									</v-col>
								</v-row>
							</div> -->
						</v-col>
					</v-row>
				</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-card>
	</div>
</template>

<script>
export default {
  data(){
      return{
        nota: null,
    }
  },
  methods:{
    abreLista(){
      this.$router.push('/')
    },
    editaNota(){
      this.$router.push(`/editaNota/${this.nota.id}`)
    }
  },
  computed:{
          console(){
              return{console}
          },
          window: () => window
      },
  created() {
    this.nota = this.$store.getters.getNotaById(this.$route.params.id)
  }

}
</script>

<style>

</style>
