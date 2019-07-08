<template>
  <input
    type="text"
    class="input"
    :value="value"
    v-on="listeners"
  >
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: '',
    }
  },
  computed: {
    listeners () {
      return {
        // Passa todas as escutas do componente diretamente ao input
        ...this.$listeners,
        // Sobrescreve a escuta `input` para funcionar com v-model
        input: event => this.$emit('input', event.target.value)
      }
    }
  }
}
</script>

<style scoped>
.input {
  width: 100%;
  padding: 8px 10px;
  border: 1px solid blue;
}
</style>
