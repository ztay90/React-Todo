import React from 'react';

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      item: ''
    }
  }

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  submitTask = e => {
    e.preventDefault()
    this.setState({ item: '' })
    this.props.addTask(e, this.state.item)
  }

  render() {
    return (
      <form onSubmit={this.submitTask}>
        <input 
          type= "text"
          value={this.state.item}
          name= "item"
          onChange={this.handleChanges}
        />
        <button className="btn1">Add Todo</button> 
      </form>
    )
  }
}

export default TodoForm