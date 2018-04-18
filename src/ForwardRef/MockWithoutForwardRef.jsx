import React from 'react'

const paintRed = Component => props => (
    <Component color='red' {...props}/>
)

class CanOnlyBeClass extends React.Component {
    state = {
        isFocus: this.props.isFocus
    }
    inputRef = React.createRef()
    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.isFocus !== prevState.isFocus) {
            return {
                isFocus: nextProps.isFocus
            }
        }
        return null
    }
    componentDidUpdate() {
        if (this.state.isFocus) {
            this.inputRef.current.focus()
        } else {
            this.inputRef.current.blur()
        }
    }
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

export default class MockForwardRef extends React.Component {
    state = {
        isFocus: false
    }
    toggleFocus = () => {
        this.setState({
            isFocus: !this.state.isFocus
        })
    }
    render() {
        return (
            <React.Fragment>
                <ColoredInput isFocus={this.state.isFocus}/>
                <button onClick={this.toggleFocus}>点我改变焦点</button>
            </React.Fragment>
        )
    }
}