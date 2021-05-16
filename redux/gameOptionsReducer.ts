import { CHANGE_VALUE } from "./constants"

interface changeActionType {
    type: typeof CHANGE_VALUE
    name: string
    value: number
}

type actionType = changeActionType

const initialState = {
    wordsCount: 3,
    startDistance: 5,
    lettersInWordCount: 3,
    increaseDistance: 5,
    speed: 3
}

const gameOptionsReducer = (state = initialState, action: actionType) => {
    switch (action.type) {
        case CHANGE_VALUE:
            return {
                ...state,
                [action.name]: action.value
            }
        default:
            return state
    }
}

export default gameOptionsReducer