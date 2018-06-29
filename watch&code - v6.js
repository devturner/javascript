
var todoList = {
  todos: [],
  displayTodos: function() {
    if (this.todos.length === 0) {
      console.log('Your todo list is empty, go play!');
    } else {
    console.log('My Todos:');
      for (var i = 0; i < this.todos.length; i++) {
        if (this.todos[i].completed) {
          console.log('(x)', this.todos[i].todoText);
        } else {
          console.log('( )', this.todos[i].todoText);  
        }
      }
    }
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
  },
  // if everything is true, make them false
  toggleAll: function() {
    var completedTodos = 0
    var totalTodos = this.todos.length
    for (var i = 0; i < totalTodos; i++) {
      if (this.todos[i].completed) {
        completedTodos++;
      }
    }

    if (completedTodos === totalTodos) {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false
      }
    } else {
        for (var i = 0; i < totalTodos; i++) {
          this.todos[i].completed = true
        }
    }
  }

};



todoList.addTodo('this is a new item');
todoList.addTodo('this is a new item 2');
todoList.changeTodo(0, 'this is it');

todoList.toggleCompleted(0);
todoList.toggleCompleted(1);
// todoList.addTodo('this is a new item 2')
// todoList.deleteTodo(0)

todoList.toggleAll();

todoList.displayTodos();
todoList.toggleCompleted(1);
todoList.toggleAll();
todoList.displayTodos();