var todos = ['item 1', 'item 2', 'item 3']

// It should display the todo list
function displayTodos() {
	console.log('My todos:', todos );
}

// It should add a new todo to the list
function addTodo(todo) {
	todos.push(todo);
	displayTodos();
}

// It should change a todo item 
function changeTodo(position, newValue) {
	todos[position] = newValue;
	displayTodos();
}

// It should delete a todo item
function deleteTodo(position) {
	todos.splice(position, 1)
	displayTodos();
}

displayTodos()

addTodo('new one')

changeTodo(0, 'new two')

deleteTodo(0)