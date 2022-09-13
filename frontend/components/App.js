import React from 'react'
import TodoList from './TodoList'
import Form from './Form'

const todosInitial = [
  {
    name: 'Organize Garage',
    id: 1528817077286, // could look different, you could use a timestamp to generate it
    completed: false
  },
  {
    name: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
]

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todosInitial
    }
  }

  toggleTodos = (itemId) => {
    this.setState({
      todos: this.state.todos.map(item => {
        if (itemId === item.id) {
          return {
            ...item,
            completed: !item.completed
          }
        }
        return item
      })
    })
  }

  addTodo = (itemText) => {
    const newTodo = {
      name: itemText,
      id: Date.now(),
      completed: false
    }
    const newTodos = [...this.state.todos, newTodo]
    this.setState({
      todos: newTodos
    })
  }

  clearTodos = () => {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(item => !item.completed)
    })
  }

  render() {
    return (
      <div>
        <TodoList
          todos={this.state.todos}
          toggle={this.toggleTodos}
        />
        <Form
          addTodos={this.addTodo}
        />
        <button onClick={this.clearTodos}>clear</button>


      </div>
    )
  }
}
