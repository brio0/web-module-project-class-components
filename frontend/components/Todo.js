import React from 'react'

export default class Todo extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div onClick={() => {
        this.props.toggle(this.props.todos.id)
      }}>
        <p>{this.props.todos.name} {this.props.todos.completed ? <span>-done-</span> : <span></span>}</p>
      </div>

    )
  }
}