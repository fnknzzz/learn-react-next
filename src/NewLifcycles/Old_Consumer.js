import React from 'react'

export default class Consumer extends React.Component {
    state = {
        value: this.props.value * this.props.value
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.props.value) {
            this.setState({
                value: nextProps.value * nextProps.value
            })
        }
    }
    handleChange = e => {
        this.props.eraseResult()
        this.setState({
            value: e.target.value
        })
    }
    render() {
        return (
            <input type="text"
                onChange={this.handleChange}
                value={this.state.value} />
        )
    }
}