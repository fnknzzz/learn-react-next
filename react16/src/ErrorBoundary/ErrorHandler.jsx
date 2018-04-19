import React from 'react'

class FakeHandler extends React.Component {
    state = {
        hasError: false
    }
    reset = () => {
        this.setState({
            hasError: false
        })
        this.props.reset()
    }
    render() {
        return this.state.hasError ? (
            <React.Fragment>
                <p>页面渲染发生错误，这是备用页面，可打开 console 查看错误</p>
                <div>
                    <button onClick={this.reset}>点击此处重置</button>
                </div>
            </React.Fragment>
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

export default ({showHandler, ...props}) => showHandler ? (
    <RealHandler {...props}/>
) : (
    <FakeHandler {...props}/>
)