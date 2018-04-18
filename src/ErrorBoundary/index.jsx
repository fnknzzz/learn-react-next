import React from 'react'
import ErrorHandler from './ErrorHandler'
import ErrorProducer from './ErrorProducer'

export default class ErrorBoundary extends React.Component {
    state = {
        count: 0,
        showHandler: false
    }
    inc = () => this.setState({
        count: this.state.count + 1
    })
    toggleHandler = () => this.setState({
        showHandler: !this.state.showHandler
    })
    reset = () => this.setState({
        count: 0,
        showHandler: false
    })
    render() {
        console.log(1)
        return (
            <ErrorHandler showHandler={this.state.showHandler} reset={this.reset}>
                <React.Fragment>
                    <p>点击自增按钮到5后会抛出错误, 可点击按钮切换是否捕获错误</p>
                    <ErrorProducer count={this.state.count} inc={this.inc}/>
                    <button onClick={this.toggleHandler}>
                        当前{!this.state.showHandler && '不'}捕获
                    </button>
                </React.Fragment>
            </ErrorHandler>
        )
    }
}
