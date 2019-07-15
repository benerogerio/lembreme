<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <TodoList msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import TodoList from '@/components/TodoList.vue'

export default {
  name: 'home',
  components: {
    TodoList
  }
}
</script>
