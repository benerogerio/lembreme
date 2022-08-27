<template>
    <div>

      <v-btn
        color="primary"
        elevation="2"
        @click="abreLista()"
        class="mb-3 mr-2"
      >
          <v-icon color="white">mdi-arrow-u-left-top</v-icon>
      </v-btn>

      <v-btn
        color="primary"
        elevation="2"
        @click="editaNota()"
        class="mb-3"
        right
      >
          <v-icon color="white">mdi-playlist-edit</v-icon>
      </v-btn>



      <v-divider class="mb-3"></v-divider>

      <v-card
          class="mx-auto"
          max-width="400"
          elevation="5"
          tile
        >
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>{{ nota.titulo }}</v-list-item-title>
              <v-list-item-subtitle>{{ nota.desc }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
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
