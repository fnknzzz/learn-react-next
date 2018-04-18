import React from 'react'

const paintRed = Component => React.forwardRef(
    (props, ref) => (
        <Component color='red' ref={ref}/>
    )
)

class CanOnlyBeClass extends React.Component {
    inputRef = React.createRef()
    render() {
        return (
            <input type="text"
                defaultValue='我是红色'
                ref={ this.inputRef }
                style={{ color: this.props.color }}/>
        )
    }
}

const ColoredInput = paintRed(CanOnlyBeClass)

export default class ForwardRef extends React.Component {
    ref = React.createRef()
    componentDidMount() {
        this.ref.current.inputRef.current.focus()
    }
    render() {
        return (
            <ColoredInput ref={this.ref}/>
        )
    }
}