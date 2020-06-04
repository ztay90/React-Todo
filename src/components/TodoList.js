import React from 'react'

import Todo from './Todo';

const TodoList = props => {
  return (
    <div className="todo-list">
      {props.toDoTask.map(item => (
        <Todo key={item.id} item={item} toggleTask={props.toggleTask} />
      ))}
      <button className="clear-btn btn2" onClick={props.clearCompleted}>
        Clear Completed
      </button>
    </div>
  )
}

export default TodoList
































// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js