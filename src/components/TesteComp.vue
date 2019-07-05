<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ variavel }}</h1>
    <input type="text" placeholder="mensagem" v-model="msg" />
  </div>
</template>

<script>
export default {
  name: 'TesteComp',
  props: {
    msg: String,
    variavel: String
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
