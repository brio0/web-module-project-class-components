import React from 'react'

export default class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      text: ''
    }
  }

  handleChange = e => {
    this.setState({
      text: e.target.value
    })
  }
  handleSubmit = e => {
    e.preventDefault()
    this.props.addTodos(this.state.text)
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
        <input
          type="text"
          name="item"
          value={this.state.text}
          onChange={this.handleChange}
        />
        <button>Add</button>
      </form>
    )
  }
}
