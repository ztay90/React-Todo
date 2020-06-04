import React from 'react';

import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList';
import './components/Todo.css';

const toDoTask = [
  {
    task: 'Organize Garage',
    id: 125,
    compeleted: false
  },
  {
    task: 'Bake Cookies',
    id: 126,
    compeleted: false
  },
  {
    task: 'Clean Room',
    id: 127,
    compeleted: false
  },
  {
    task: 'Study For Test',
    id: 128,
    compeleted: false
  },
  {
    task: 'Check Mail',
    id: 129,
    compeleted: false
  },
  {
    task: 'Get Groceries',
    id: 130,
    compeleted: false
  },
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      toDoTask
    }
  }

  addTask = (e, item) => {
    e.preventDefault()
    const newTask = {
      task: item,
      id: Date.now(),
      compeleted: false
    }
    this.setState({
      toDoTask: [...this.state.toDoTask, newTask]
    })
  }

  toggleTask = itemID => {
    console.log(itemID)
    this.setState({
      toDoTask: this.state.toDoTask.map(item => {
        if (itemID === item.id) {
          return {
            ...item,
            completed: !item.completed
          }
        }
        return item;
      })
    })
  }

  clearCompleted = e => {
    e.preventDefault()
    this.setState({
      toDoTask: this.state.toDoTask.filter(item => !item.completed)
    })
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>ToDo Task</h1>
          <TodoForm addTask={this.addTask} />
        </div>
        <TodoList 
          toDoTask={this.state.toDoTask}
          toggleTask={this.toggleTask}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
