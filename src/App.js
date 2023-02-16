import React from 'react';
import './App.css';
import TodoContainer from './components/TodoContainer';
import TodoInput from './components/TodoInput';

class App extends React.Component {
  //todo app structure {status, description, title, id}
  constructor() {
    super(); //initialize
    this.state = {
      todos: [
        //create
        {
          id: 1,
          title: 'test title',
          description: 'another test  description',
          status: 'PENDING',
        },
      ],
      currentlyEditingTodo: null,
    };
    this.addTodo = this.addTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
  }

  addTodo(todoObject) {
    debugger;
    const newTodos = JSON.parse(JSON.stringify(this.state.todos));
    newTodos.push(todoObject);
    return this.setState({
      todos: newTodos,
    });
  }

  editTodo(editTodoObject) {
    debugger;
    const newTodos = JSON.parse(JSON.stringify(this.state.todos));
    newTodos.map((todo) => {
      if (todo.id === editTodoObject.id) {
        todo.title = editTodoObject.title;
        todo.description = editTodoObject.description;
        todo.status = editTodoObject.status;
      }
      return todo;
    });
    return this.setState({
      todos: newTodos,
    });
  }

  deleteTodo(toToDelete) {
    debugger;
    const newTodos = JSON.parse(JSON.stringify(this.state.todos));
    newTodos.map((todo) => {
      if (todo.id === toToDelete.id) {
        newTodos.splice(newTodos.indexOf(todo), 1);
      }
      return todo;
    });
  }

  handleEditCallBack = (todo) => this.setState({ currentlyEditingTodo: todo });

  render() {
    return (
      <div>
        <TodoInput
          todo={this.state.currentlyEditingTodo}
          todoAmount={this.state.todos.length}
          handleSaveClick={this.addTodo}
          handleEditClick={this.editTodo}
          buttonText={this.state.currentlyEditingTodo ? 'Edit' : 'Add'}
        />
        <TodoContainer
          todos={this.state.todos}
          handleEditCallBack={this.handleEditCallBack}
          handleDelete={this.deleteTodo}
        />
      </div>
    );
  }
}

export default App;
