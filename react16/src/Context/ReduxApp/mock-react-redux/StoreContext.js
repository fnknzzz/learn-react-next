import { createContext } from 'react'

const StoreContext = createContext({
    getState: () => ({}),
    dispatch: () => {}
})

export default StoreContext