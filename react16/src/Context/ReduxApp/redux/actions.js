import Type from './actionType'

export default {
    incCount: () => ({
        type: Type.INC_COUNT,
    }),
    decCount: () => ({
        type: Type.DEC_COUNT
    }),
    setColor: color => ({
        type: Type.SET_COLOR,
        data: color
    })
}
