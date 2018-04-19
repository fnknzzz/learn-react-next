import React from 'react'
import { Provider } from './react-redux'
import { createStore } from 'redux'
import reducer from './redux/reducer'
import App from './components/App' 

const store = createStore(reducer)

const ReduxApp = props => (
    <Provider store={store}>
        <App {...props} />
    </Provider>
)

export default ReduxApp