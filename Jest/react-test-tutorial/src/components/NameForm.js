import React, {Component} from 'react'

class NameForm extends Component {
    static defaultProps = {
        onInsert: () => console.warn('onInsert not defined')
    }
    state = {
        name: ''
    }
    onChange = (e) => {
        this.setState({name: e.target.value})
    }
    onSubmit = (e) => {
        this.props.onInsert(this.state.name);
        this.setState({name:''})
        e.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <label>이름</label>
                <input type="text" value={this.state.name} onChange={this.onChange} />
                <button type="submit">등록</button>
            </form>
        )
    }
}

export default NameForm