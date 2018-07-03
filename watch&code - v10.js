var todoList = {
  todos: [],
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
  },
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
  },
  deleteTodo: function (position) {
    this.todos.splice(position, 1)
  },
  toggleCompleted: function (position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
  },
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

var handlers = {
  toggleAll: function() {
    todoList.toggleAll();
    view.displayTodos();
  },
  addTodo: function() {
    var addTextTodoInput = document.getElementById('addTodoTextInput');
    todoList.addTodo(addTextTodoInput.value);
    addTextTodoInput.value = '';
    view.displayTodos();
  },
  changeTodo: function() {
    var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    var changeTodoTextInput = document.getElementById('changeTodoTextInput');
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoPositionInput.value = '';
    changeTodoTextInput.value = '';
    view.displayTodos();
  },
  deleteTodo: function() {
    var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
    todoList.deleteTodo(deleteTodoPositionInput.value);
    deleteTodoPositionInput.value = '';
    view.displayTodos();
  },
  toggleTodo: function() {
    var toggleTodoPositionInput = document.getElementById('toggleTodoPositionInput');
    todoList.toggleCompleted(toggleTodoPositionInput.valueAsNumber);
    toggleTodoPositionInput.value = '';
    view.displayTodos();
  }
};

var view = {
  displayTodos: function() {
    var todosUl = document.querySelector('ul');
    todosUl.innerHTML = '';
    for (var i = 0; i < todoList.todos.length; i++) {
      var todoLi = document.createElement('li');
      var todo = todoList.todos[i];
      var todoTextWithCompletion = '';

      if (todo.completed) {
        todoTextWithCompletion = '(x) ' + todo.todoText; 
      } else {
        todoTextWithCompletion = '( ) ' + todo.todoText; 
      }
      
      todoLi.textContent = todoTextWithCompletion;
      todosUl.appendChild(todoLi);      
    }
  }
};