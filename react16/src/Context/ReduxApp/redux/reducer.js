import Type from './actionType'

const initialState = {
    color: 'black',
    count: 0
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case Type.SET_COLOR:
            return {
                ...state,
                color: action.data || initialState.color
            }
        case Type.INC_COUNT:
            return {
                ...state,
                count: state.count + 1
            }
        case Type.DEC_COUNT:
            return {
                ...state,
                count: state.count - 1
            }
        default:
            return state
    }
}
