import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div>
        {this.props.todos.map(todo => {
          return < Todo key={todo.id} todos={todo} toggle={this.props.toggle} />
        })}
      </div>
    )
  }
}
