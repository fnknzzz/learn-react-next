import React, {Fragment, StrictMode} from 'react'

const FragmentItem = props => new Array(5).fill(null).map((k, i) => (
    <Fragment key={i}>
        <p>这是第{i}项</p>
        <p>{i} * {i} = {i * i}</p>
    </Fragment> 
))

class OldLifecycleProvider extends React.Component {
    componentWillMount() {
        console.log('componentWillMount')
    }
    componentWillUpdate() {
        console.log('componentWillUpdate')
    }
    componentWillReceiveProps() {
        console.log('componentWillReceiveProps')
    }
    render() {
        return (
            <FragmentItem />
        )
    }
}

export default class NewComponent extends React.Component {
    state = {
        propFlag: 2
    }
    componentDidMount() {
        this.setState({
            propFlag: 1
        })
    }
    render() {
        return (
            <StrictMode>
                <OldLifecycleProvider propFlag={this.state.propFlag}/>
            </StrictMode>
        )
    }
}