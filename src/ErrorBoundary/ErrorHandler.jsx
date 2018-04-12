import React from 'react'

class FakeHandler extends React.Component {
    state = {
        hasError: false
    }
    render() {
        return this.state.hasError ? (
            <div>页面渲染发生错误，这是备用页面</div>
        ) : (
            React.Children.only(this.props.children)
        )
    }
}

class RealHandler extends FakeHandler {
    componentDidCatch(error, info) {
        this.setState({
            hasError: true
        })
    }
}

export default ({showHandler, children}) => showHandler ? (
    <RealHandler>{ children }</RealHandler>
) : (
    <FakeHandler>{ children }</FakeHandler>
)