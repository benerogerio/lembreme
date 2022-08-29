<template>
    <div>
      <v-btn
        color="#BBBBFF"
        elevation="2"
        @click="abreLista()"
        class="mb-3 mr-2"
      >
          <v-icon color="white">mdi-arrow-u-left-top</v-icon>
      </v-btn>

      <v-btn
        color="#BBBBFF"
        elevation="2"
        @click="editaNota()"
        class="mb-3"
        right
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
                      v-model="nota.titulo"></v-text-field>

                    <v-textarea
                        readonly
                        v-model="nota.desc"
                        auto-grow>
                    </v-textarea>
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
        nota:null
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
