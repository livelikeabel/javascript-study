import React, { Component } from 'react'

// 값을 설정시킬 form을 만든다
class Sends extends Component {
  state = {
    input: ''
  }

  handleChange = e => {
    this.setState({ input: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    // 구현예정
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input value={this.state.input} onChange={this.handleChange} />
        <button type="submit">설정</button>
      </form>
    )
  }
}

export default Sends
