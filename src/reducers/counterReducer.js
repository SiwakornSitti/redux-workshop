import { combineReducers } from 'redux'

const counter = (state = 5, action) => {
  switch (action.type) {
    case "INCREASE":
      return state + 1

    case "DECREASE":
      return state - 1
  
    default:
      return state
  }
}

const rootReducer = combineReducers({
  counter: counter,
})

export default rootReducer
