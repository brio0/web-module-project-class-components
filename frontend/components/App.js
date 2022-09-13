import React from 'react'

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
  render() {
    return (
      <div>
        Todo App
      </div>
    )
  }
}
