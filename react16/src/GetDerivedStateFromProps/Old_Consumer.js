import React from 'react'

export default class Consumer extends React.Component {
    state = {
        result: this.getResult(this.props.value)
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.props.value) {
            this.setState({
                result: this.getResult(nextProps.value)
            })
        }
    }
    getResult = value => value * value
    handleChange = (e) => {
        this.props.eraseResult()
        this.setState({
            result: e.target.value
        })
    }
    render() {
        return (
            <input type='text'
                onChange={ this.handleChange }
                value={ this.state.result } />
        )
    }
}
