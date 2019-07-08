<template>
	<div id="app">
		<link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons">
		<h1>Minha Tarefas!</h1>
		<TodoList/>
	</div>
</template>

<script>
import TodoList from './components/TodoList.vue'

export default {
	components: {
		TodoList
	}
}
</script>

<style>
#app {
	max-width: 400px;
	margin: 0 auto;
	line-height: 1.4;
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: blue;
}

h1 {
	text-align: center;
}
</style>
