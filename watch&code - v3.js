
var todoList = {
  todos: ['item 1', 'item 2', 'item 3'],
  displayTodos: function() {
    console.log('My Todos', this.todos)
  },
  addTodo: function(todo) {
    this.todos.push(todo);
    this.displayTodos();
  },
  changeTodo: function(position, newValue) {
    this.todos[position] = newValue;
    this.displayTodos();
  },
  deleteTodo: function (position) {
	  this.todos.splice(position, 1)
	  this.displayTodos();
  }
};

todoList.displayTodos()
todoList.addTodo('this is a new item')
todoList.changeTodo(0, 'this is it')
todoList.addTodo('this is a new item 2')
todoList.deleteTodo(0)
