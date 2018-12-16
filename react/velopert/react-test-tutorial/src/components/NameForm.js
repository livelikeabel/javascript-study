import React, { Component } from 'react'

class NameForm extends Component {
  static defaultProps = {
    onSubmit: () => console.warn('onSubmit not defined')
  }
  state = {
    name: ''
  }
  onChange = e => {
    this.setState({ name: e.target.value })
  }
  onSubmit = e => {
    const { name } = this.state
    const { onInsert } = this.props
    // 이름을 추가하고, name값 초기화
    onInsert(name)
    this.setState({ name: '' })
    debugger
    e.preventDefault()
  }
  render() {
    const { onSubmit, onChange } = this
    const { name } = this

    return (
      <form onSubmit={onSubmit}>
      <label>NAME : </label>
        <input type="text" onChange={onChange} value={name} />
        <button type="submit">submit</button>
      </form>
    )
  }
}

export default NameForm
