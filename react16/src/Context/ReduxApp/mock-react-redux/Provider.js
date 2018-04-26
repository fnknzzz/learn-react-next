import React from 'react'
import StoreContext from './StoreContext'

export default class Provider extends React.Component {
    state = this.props.store.getState()
    listener = null
    componentDidMount() {
        this.listener = this.props.store.subscribe(() => {
            this.setState(this.props.store.getState())
        })
    }
    componentWillUnmount() {
        this.listener()
    }
    render() {
        const { store, children } = this.props
        return (
            <StoreContext.Provider value={{ state: this.state, dispatch: store.dispatch }}>
                { React.Children.only(children) }
            </StoreContext.Provider>
        )
    }
}
