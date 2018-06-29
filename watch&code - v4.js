
var todoList = {
  todos: [],
  displayTodos: function() {
    console.log('My Todos', this.todos)
  },
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
  deleteTodo: function (position) {
	  this.todos.splice(position, 1)
	  this.displayTodos();
  },
  toggleCompleted: function (position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  }
};


todoList.displayTodos();
todoList.addTodo('this is a new item');
todoList.changeTodo(0, 'this is it');
todoList.toggleCompleted(0);


todoList.addTodo('this is a new item 2')
todoList.deleteTodo(0)
