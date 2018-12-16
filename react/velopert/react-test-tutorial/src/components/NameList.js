import React, { Component } from 'react'

class NameList extends Component {
  static defaultProps = {
    names: []
  }

  renderList() {
    const { names } = this.props
    const nameList = names.map((name, i) => {
      return <li key={i}>{name}</li>
    })
    return nameList
  }

  render() {
    return <ul>{this.renderList()}</ul>
  }
}

export default NameList
