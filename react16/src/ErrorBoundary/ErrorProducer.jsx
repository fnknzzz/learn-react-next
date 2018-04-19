import React from 'react'

export default class ErrorProducer extends React.Component {
    render() {
        if (this.props.count >= 5) {
            throw '增加到5了'
        }
        return (
            <button onClick={this.props.inc}>{ this.props.count }</button>
        )
    }
}