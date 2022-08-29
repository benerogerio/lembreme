<template>
    <div>
      <v-btn
        color="#BBBBFF"
        elevation="2"
        @click="abreLista()"
        class="mb-3"
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
                    v-model="nota.titulo"></v-text-field>

                  <v-textarea
                    label="Descrição"
                    hint="Informe a descrição da anotação"
                    v-model="nota.desc"
                    auto-grow
                    ></v-textarea>
                </v-col>
              </v-row>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>

      <div
        class="d-flex flex-row-reverse">
          <v-btn
            color="green"
            elevation="2"
            @click="salvaNota()"
            class="mb-3"
          >
            <v-icon color="white">mdi-check</v-icon>
          </v-btn>

          <v-btn
            color="red"
            elevation="2"
            @click="abreLista()"
            class="mr-3 mb-3"
            right
          >
            <v-icon color="white">mdi-cancel</v-icon>
          </v-btn>
        </div>
      </div>
</template>

<script>
export default {
  data(){
    return{
      nota: Object
      }
  },
  methods:{
    abreLista(){
      this.$router.push('/')
    },
    salvaNota(){

      if(this.$route.params.id){
        const idx = this.$store.state.notas.map(nota => nota.id).indexOf(this.$route.params.id)
        this.$store.state.notas[idx] = this.nota
      }else{
        let maiorId = this.$store.getters.getMaiorId
        this.nota.id = maiorId + 1
        this.$store.state.notas.push(this.nota)
      }

      localStorage.dbAnote = JSON.stringify(this.$store.state.notas)

      this.nota = new Object
      this.$router.push('/')
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
