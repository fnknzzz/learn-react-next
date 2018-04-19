import React from 'react'
import Consumer from './Consumer'

export default class GetDerivedStateFromProps extends React.Component {
    state = {
        count: 0,
        erased: false
    }
    incCount = () => this.setState({
        count: this.state.count + 1,
        erased: false
    })
    eraseResult = () => this.setState({
        erased: true
    })
    render() {
        return (
            <div>
                <p style={{ textDecoration: this.state.erased ? 'line-through' : 'none' }}>
                    {this.state.count}的平方为：
                </p>
                <Consumer
                    value={this.state.count}
                    eraseResult={this.eraseResult}/>
                <button onClick={this.incCount}>点我自增</button>
            </div>
        )
    }
}
