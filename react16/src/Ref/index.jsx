import React from 'react'

export default class CreateRef extends React.Component {
    inputRef = React.createRef()

    componentDidMount() {
        this.inputRef.current.focus()
    }

    render() {
        return (
            <input type="text" ref={this.inputRef}/>
        )
    }
}