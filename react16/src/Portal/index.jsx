import React from 'react'
import ReactDOM from 'react-dom'

const portalDOM = document.querySelector('#portal')

export default class Portal extends React.Component {
    state = {
        color: 'red'
    }
    componentDidMount() {
        portalDOM.style.display = 'block'
    }
    componentWillUnmount() {
        portalDOM.style.display = 'none'
    }
    toggleColor = (e) => {
        this.setState({
            color: this.state.color === 'red' ? 'blue' : 'red'
        })
    }
    render() {
        return (
            <React.Fragment>
                <p style={{ color: this.state.color }}>这里的颜色</p>
                <Content color={this.state.color} onClick={this.toggleColor}/>
            </React.Fragment>
        )
    }
}

const Content = props => ReactDOM.createPortal((
    <div style={{ color: props.color }} onClick={ props.onClick }>
        这是portal里面的内容,点我换色
    </div>
), document.querySelector('#portal'))