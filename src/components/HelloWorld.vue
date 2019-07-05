<template>
  <div class="hello">
    <h1>A-ha {{ msg }}</h1>
    
    <input type="text" placeholder="mensagem" v-model="msg" />
    
    <TesteComp v-bind:msg="msg"/>
    
  </div>
</template>

<script>

import TesteComp from './TesteComp.vue'

export default {
  name: 'HelloWorld',
  components: {
    TesteComp
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
