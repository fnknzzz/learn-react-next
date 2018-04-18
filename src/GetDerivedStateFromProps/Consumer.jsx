import React from 'react'

export default class Consumer extends React.Component {
    state = {
        result: 0,
        value: 0
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        if (prevState.value !== nextProps.value) {
            return {
                result: nextProps.value * nextProps.value,
                value: nextProps.value
            }
        }
        return null
    }
    handleChange = e => {
        this.props.eraseResult()
        this.setState({
            result: e.target.value
        })
    }
    render() {
        return (
            <input type="text"
                onChange={this.handleChange}
                value={this.state.result} />
        )
    }
}