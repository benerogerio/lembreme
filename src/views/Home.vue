<template>
  <div>
    <v-list>

      <v-subheader inset>Minhas Anotações</v-subheader>

      <v-divider
        light
        class="mb-2"></v-divider>

      <v-card>
        <v-list-item-group
          mandatory
          color="indigo"
        >

          <v-list-item
            v-for="nota in notas"
            :key="nota.id"
          >

            <v-list-item-avatar>
              <v-icon
                class="green"
                dark
              >mdi-list-status</v-icon>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title v-text="nota.titulo"></v-list-item-title>

              <v-list-item-subtitle v-text="nota.desc"></v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>
              <v-btn icon @click="verNota(nota.id)">
                <v-icon color="blue lighten-1">mdi-eye</v-icon>
              </v-btn>
            </v-list-item-action>
            <v-list-item-action>
              <v-btn icon>
                <v-icon color="red lighten-1">mdi-playlist-remove</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list-item-group>
      </v-card>

    </v-list>

    <v-btn
        color="green"
        dark
        fixed
        bottom
        right
        fab
        elevation="2"
        style="padding-botton: 100px"
        @click="novaNota()"
      >
      <v-icon>mdi-plus</v-icon>
    </v-btn>

    <v-dialog
      v-model="dialog"
      persistent
      max-width="290"
      activator=""
    >
      <v-card>
        <v-card-title class="text-h5">
          Use Google's location service?
        </v-card-title>
        <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Disagree
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Agree
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>


</template>

<script>

export default {
  name: 'home',
  components: {
    // TodoList
  },
  methods:{
    novaNota(){
      this.$router.push('/novaNota')
    },
    verNota(nota){
      this.$router.push(`/verNota/${nota}`)
    }
  },
  data() {
    return{
      dialog: false,
      notas: this.$store.state.notas
    }
  }
}
</script>
