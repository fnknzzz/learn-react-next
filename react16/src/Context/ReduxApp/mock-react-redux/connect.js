import React from 'react'
import StoreContext from './StoreContext'

const connect = (mapStateToProps = state => state, mapDispatchToProps = () => {}) => (Component) => {
    class Connected extends React.Component {
        static displayName = `Connected(${Component.displayName || Component.name || 'Unknown'})`
        renderComponent = ({ state, dispatch }) => (<Component { ...mapStateToProps(state) }
            { ...mapDispatchToProps(dispatch) }
            { ...this.props } />)
        render() {
            return (
                <StoreContext.Consumer>
                    { store => this.renderComponent(store) }
                </StoreContext.Consumer>
            )
        }
    }
    return Connected
}

export default connect
