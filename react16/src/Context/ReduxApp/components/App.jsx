import React from 'react'
import connect from '../redux/connect'

@connect
export default class App extends React.Component {
    setColor = color => () => this.props.setColor(color)
    render() {
        return (
            <React.Fragment>
                <p style={{color: this.props.color}}>
                    当前count值为：{this.props.count}, 颜色为：{this.props.color}
                </p>
                <button onClick={this.props.incCount}>+1</button>
                <button onClick={this.props.decCount}>-1</button>
                <button onClick={this.setColor('red')}>变为红色</button>
                <button onClick={this.setColor('black')}>变为黑色</button>
                <button onClick={this.setColor('blue')}>变为蓝色</button>
            </React.Fragment>
        )
    }
}
