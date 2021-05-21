import { CHANGE_VALUE } from "./constants"

interface changeActionType {
    type: typeof CHANGE_VALUE
    name: string
    value: number
}

type actionType = changeActionType

export type stateType = {
    [key: string]: number
}

const initialState: stateType = {
    wordsCount: 3,
    startDistance: 5,
    lettersInWordCount: 3,
    increaseDistance: 5,
    speed: 2
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