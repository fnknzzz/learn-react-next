import React from 'react'
import StoreContext from './StoreContext'

export default class Provider extends React.Component {
    listener = null
    componentDidMount() {
        this.listener = this.props.store.subscribe(() => {
            this.forceUpdate()
        })
    }
    componentWillUnmount() {
        this.listener()
    }
    render() {
        const { store } = this.props
        return (
            <StoreContext.Provider
                value={{ state: store.getState(), dispatch: store.dispatch.bind(store) }}>
                { React.Children.only(this.props.children) }
            </StoreContext.Provider>
        )
    }
}