import React from 'react'
import ReactDOM from 'react-dom'

export default class Portal extends React.Component {
    state = {
        color: 'red'
    }
    toggleColor = (e) => {
        e.preventDefault()
        this.setState({
            color: this.state.color === 'red' ? 'blue' : 'red'
        })
    }
    render() {
        return <Content color={this.state.color} onClick={this.toggleColor}/>
    }
}

const Content = props => ReactDOM.createPortal((
    <div style={{ color: props.color }} onClick={props.onClick}>
        这是portal里面的内容
    </div>
), document.querySelector('#portal'))