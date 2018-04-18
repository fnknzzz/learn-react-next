import React from 'react'

const paintRed = Component => React.forwardRef(
    (props, ref) => (
        <Component color='red' ref={ref} {...props}/>
    )
)

class CanOnlyBeClass extends React.Component {
    inputRef = React.createRef()
    render() {
        return (
            <input type="text"
                defaultValue='高阶组件包裹'
                ref={ this.inputRef }
                style={{ color: this.props.color }}/>
        )
    }
}

const ColoredInput = paintRed(CanOnlyBeClass)

export default class ForwardRef extends React.Component {
    isFocus = false
    ref = React.createRef()
    inputNode = null
    componentDidMount() {
        this.inputNode = this.ref.current.inputRef.current
    }
    toggleFocus = () => {
        this.isFocus = !this.isFocus
        if (this.isFocus) {
            this.inputNode.focus()
        } else {
            this.inputNode.blur()
        }
    }
    render() {
        return (
            <React.Fragment>
                <ColoredInput ref={this.ref}/>
                <button onClick={this.toggleFocus}>点我改变焦点</button>
            </React.Fragment>
        )
    }
}