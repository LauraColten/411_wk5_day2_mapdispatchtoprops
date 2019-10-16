import { combineReducers } from 'redux'

const user = (state = null) => state

// add switch statements in here
const cars = (state = [], action) => {
    switch(action.type) {
        case 'ADD_CAR':
            return [ ...state, action.value]
        case 'REMOVE_CAR':
            return [...state.slice(0, action.value), ...state.slice(action.value + 1)]
        default:
            return state
    }
    return state
}

export default combineReducers({ user, cars })