<template>
	<div>
		<BaseInputText
			v-model="newTodoText"
			placeholder="Nova tarefa"
			@keydown.enter="addTodo"
		/>
		<ul v-if="todos.length">
			<TodoListItem
				v-for="todo in todos"
				:key="todo.id"
				:todo="todo"
				@remove="removeTodo"
			/>
		</ul>
		<p v-else>
			Nenhum item na lista.<br>
			Adicione uma nova tarefa usando o campo acima.
		</p>
	</div>
</template>

<script>
import BaseInputText from './BaseInputText.vue'
import TodoListItem from './TodoListItem.vue'

let nextTodoId = 1

export default {
	components: {
		BaseInputText,
		TodoListItem
	},
  data () {
    return {
			newTodoText: '',
      todos: [
				{
					id: nextTodoId++,
					text: 'Aprender Vue'
				},
				{
					id: nextTodoId++,
					text: 'Aprender Componentes Single-File'
				},
				{
					id: nextTodoId++,
					text: 'Se Apaixonar ❤'
				}
			]
    }
  },
	methods: {
		addTodo () {
			const trimmedText = this.newTodoText.trim()
			if (trimmedText) {
				this.todos.push({
					id: nextTodoId++,
					text: trimmedText
				})
				this.newTodoText = ''
			}
		},
		removeTodo (idToRemove) {
			this.todos = this.todos.filter(todo => {
				return todo.id !== idToRemove
			})
		}
	}
}
</script>

<style scoped>
ul {
  padding: 0;
	list-style: square inside;
}
</style>
