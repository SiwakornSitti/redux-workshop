import { INCREASE_COUNTER, DECREASE_COUNTER } from '../constants/actiontypes'

const counter = (state = 5, action) => {
  switch (action.type) {
    case INCREASE_COUNTER:
      return state + 1

    case DECREASE_COUNTER:
      return state - 1
  
    default:
      return state
  }
}

export default counter
